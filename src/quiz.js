class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions; // array of instances of the class Question
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }
  // 2. getQuestion()
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // 3. moveToNextQuestion()
  moveToNextQuestion() {
    return this.currentQuestionIndex++;
  }
  // 4. shuffleQuestions()
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      // Generate a random index between 0 and the current index `i`
      const j = Math.floor(Math.random() * (i + 1));
      // Swap the elements at indices `i` and `j`
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
    return this.questions;
  }
  // 5. checkAnswer(answer)
  checkAnswer(answer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (answer === currentQuestion.answer) {
      this.correctAnswers++;
    }
  }
  // 6. hasEnded()
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }

  filterQuestionsByDifficulty(difficulty) {
    if (typeof difficulty === "number" && difficulty >= 1 && difficulty <= 3) {
      this.questions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
    }
  }

  averageDifficulty() {
    if (this.questions.length === 0) return 0;

    const totalDifficulty = this.questions.reduce((accumulator, question) => {
      return accumulator + question.difficulty;
    }, 0);

    return totalDifficulty / this.questions.length;
  }
}
