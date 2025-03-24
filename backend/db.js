require('dotenv').config();
const mongoose = require('mongoose');
const { string } = require('zod');

// User Schema
const userSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: true,
    unique:true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String
  },
  attendance: [{
    date: { type: Date, required: true },
    status: {
      type: String,
      enum: ['presented', 'absent'],
      required: true
    }
  }]
});

// Basics Quiz Schema
const BasicsQuizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: String, required: true }
});

// Practice Quiz Schema
const PracticeQuizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true },
  explanation: { type: String, required: true }
});

// Section Schema
const sectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  paragraphs: [{ type: String, required: true }]
});

// Content Schema
const ContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  moduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Module', required: true },
  sections: [sectionSchema],
  basic: BasicsQuizSchema,
  practical: PracticeQuizSchema
});

// Module Schema (Updated for user progress tracking)
const ModuleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }],
  
  // User progress tracking
  progress: [{
    userId: { type: String,  required: true },
    completedChapters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }], // Track completed chapters
    progressPercentage: { type: Number, default: 0 } // Store progress percentage
  }]
});

// Models
const User = mongoose.model('User', userSchema);
const Module = mongoose.model('Module', ModuleSchema);
const Chapter = mongoose.model('Chapter', ContentSchema);
const Section = mongoose.model('Section', sectionSchema);
const BasicsQuiz = mongoose.model('BasicsQuiz', BasicsQuizSchema);
const PracticeQuiz = mongoose.model('PracticeQuiz', PracticeQuizSchema);

// Initial modules
const initialModules = [
  { name: 'Investing' },
  { name: 'Savings' },
  { name: 'Budgeting' },
  { name: 'Fraud Prevention' }
];

// Function to initialize modules
async function initializeModules() {
  try {
    const existingModules = await Module.find();
    if (existingModules.length === 0) {
      await Module.insertMany(initialModules);
      console.log('Initial modules added to the database.');
    } else {
      console.log('Modules already exist in the database.');
    }
  } catch (err) {
    console.error('Error adding initial modules:', err);
  }
}

// MongoDB connection
const url = process.env.MONGODB_URL;
mongoose.connect(url)
  .then(() => {
    console.log('MongoDB connected');
    initializeModules(); // Initialize modules after connection
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports = {
  User,
  Module,
  Chapter,
  Section,
  BasicsQuiz,
  PracticeQuiz
};
