const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Webhook } = require('svix');
const { User } = require('./db'); // ✅ Import User model

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message));

app.use(cors());
app.use('/v1', router);

// ✅ Clerk Webhook Route (Ensuring Payload is a String)
app.post(
  '/api/webhooks',
  bodyParser.raw({ type: 'application/json' }), // ✅ Keep raw body
  async function (req, res) {
    try {
      if (!process.env.CLERK_WEBHOOK_SECRET_KEY) {
        throw new Error("Missing Clerk Webhook Secret Key");
      }

      const payloadString = req.body.toString(); // ✅ Convert to string
      const svixHeaders = req.headers;

      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
      const evt = wh.verify(payloadString, svixHeaders); // ✅ Ensure string payload

      const { id, ...attributes } = evt.data;
      const eventType = evt.type;

      console.log(`📩 Received Clerk Webhook: ${eventType}`);
      console.log(attributes);

      if (eventType === 'user.created') {
        console.log(`👤 User ${id} was created.`);

        // ✅ Save user to MongoDB
        const newUser = new User({
          clerkUserId: id,
          firstName: attributes.first_name,
          lastName: attributes.last_name,
          attendance : []
        });

        await newUser.save();
        console.log('✅ User saved to database');
      }

      res.status(200).json({
        success: true,
        message: 'Webhook received',
      });
    } catch (err) {
      console.error("❌ Webhook verification failed:", err.message);
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);

app.use(express.json()); // ✅ Ensure this comes AFTER the webhook middleware

app.get('/', (req, res) => {
  res.json({
    message: '🚀 Server is Running',
  });
});

app.listen(PORT, () => {
  console.log(`🎧 Listening on Port ${PORT}`);
});
