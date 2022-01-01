var quizData = [

{
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
correct: ""
},

{

question: "What does CSS stand for?",
a: "",
b: "",
c: "",
d: "",
correct: ""
},

{

question: "What does CSS stand for?",
a: "",
b: "",
c: "",
d: "",
correct: "",
},

{

question: "What does CSS stand for?",
a: "",
b: "",
c: "",
d: "",
correct: "",
},]

var quiz = document.getElementById('quiz')
var answerEls = document.querySelectorAll('answer')
var questionEl = document.getElementById('question')
var A_text = getElementById('A_text')
var B_text = getElementById('B_text')
var C_text = getElementById('C_text')
var D_text = getElementById('D_text')
var submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    var cureentQuizData = quizData[currentQuiz]
    questionEl.innerText = cureentQuizData.question
    A_text.innerText = cureentQuizData.A
    B_text.innerText = cureentQuizData.B
    C_text.innerText = cureentQuizData.C
    D_text.innerText = cureentQuizData.D
}

function getSelector();

submitBtn.addEventListener('click', () => {
    var answer = getSelected()

})
