const mongoose = require('mongoose');
const qnaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: "student" },
    responseId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
    QnA: [
      {
        question: { type: String, required: true },
        answer: { type: String, default: "Waiting for response" },
        status: { type: Boolean, default: false },
      },
    ],
   
  },
  { timestamps: true }
);

module.exports = mongoose.model('qnamodel',qnaSchema);