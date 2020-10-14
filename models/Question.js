const mongoose = require('mongoose')

const QuestionsSchema = new mongoose.Schema({
  question: { type: String, required: true },
  userID: {type: String, required: true}
});

module.exports = Question = mongoose.model('user', QuestionsSchema);