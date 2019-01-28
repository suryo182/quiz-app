export default function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answerKey = answer;
}

Question.prototype.isCorrect = function (guessKey) {
  return guessKey === this.answerKey;
}
