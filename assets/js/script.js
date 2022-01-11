var quizData = [{
   question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },

  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },

  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "style",
    b: "class",
    c: "styles",
    d: "font",
    correct: "a",
  },

  {
    question: "Which CSS property controls the text size?",
    a: "font-style",
    b: "text-size",
    c: "text-style",
    d: "font-size",
    correct: "d",
  },

  {
    question: "What is the default value of the position property?",
    a: "fixed",
    b: "static",
    c: "absolute",
    d: "relative",
    correct: "b",
  },
];

var quiz = document.getElementById("quiz");
var answerEl = document.querySelectorAll("answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  var currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswer() {
  answerEl.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {let andswers = 
answerEl.forEach(())}

answerEl.forEach((answer) => {
  if (answerEl.checked) {
    answer = answerEl.id;
  }

  return answer;
});

submitBtn.addEventListener('click', () => {
  var answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} question</h2> 

            <button onclick="location.reload()">Reload</button>
            `
    }
  }
})
