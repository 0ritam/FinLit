require('dotenv').config()

const mongoose = require('mongoose');

const url = process.env.MONGODB_URL
mongoose.connect(url)


const userSchema = new mongoose.Schema({
    fullname: {
        type:String,
        reuired:true,
        minLength: [3, 'Fullname must be at least 6']
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

const  ContentSchema = new mongoose.Schema({
    sections: [
      {
        heading: { type: String, required: true },
        paragraphs: [{ type: String, required: true }]
      }
    ]
});

const BasicsQuizSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [
      {
        type: String,
        required: true
      }
    ],
    answer: { type: String, required: true }
  });

const PracticeQuizSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [
      {
        type: String,
        required: true
      }
    ],
    correctAnswer: { type: Number, required: true },
    explanation: { type: String, required: true }
  });

  const Content = mongoose.model('InvestingBasicsContent',ContentSchema);
  const BasicsQuiz = mongoose.model('InvestingBasicsQuiz', BasicsQuizSchema);
  const PracticeQuiz = mongoose.model('InvestingPracticeQuiz', PracticeQuizSchema);
  
const User = mongoose.model("User", userSchema)

module.exports ={
    User,
    Content,
    BasicsQuiz,
    PracticeQuiz
}