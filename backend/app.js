const express = require('express');
const router = require ('./routes/index')
const cors = require('cors')
const PORT = process.env.PORT || 3000;

require('dotenv').config()
const app = express();


app.use(express.json());
app.use(cors())
app.use('/v1',router)

app.get('/', (req, res)=>{
    res.json({
        message:"Server is Runing"
    })
})

app.listen(PORT, ()=> {
    console.log(`Listening on Port ${PORT}`)
})