var quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Mardown Language",
        b: "Hypertext Medical Language",
        c: "Hypertext Markup Language",
        d: "Happy Texan Man Laughs",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "When was CSS created?",
        a: "1990",
        b: "1995",
        c: "1987",
        d: "1996",
        correct: "d"
    },
    {
        question: "When was HTML5 released?",
        a: "1996",
        b: "2008",
        c: "2016",
        d: "2000",
        correct: "b",
    },

    {
        question: "When was jQuery released?",
        a: "2000",
        b: "2019",
        c: "1999",
        d: "2006",
        correct: "d"
    }
];

var quiz = document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0


loadQuiz()

function loadQuiz() {
    deselectAnswers()

    var currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    newFunction();
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    function newFunction() {
        a_text.innerText = currentQuizData.a;
    }
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    var answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>That is all, you answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})