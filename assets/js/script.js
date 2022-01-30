//time/score 

let timeEl = document.querySelector("time");
let timeLeft = 50;
let pointsEl = document.querySelector("points");

//questions 
const questionsEl = document.querySelector("questions");

let questionEl = document.querySelector("questions");

let questionCount = 0;

//score history
let initalsInput = document.querySelector ("intitals");

const highscoresEl = document.querySelector("highscores");

let scoreListEl = document.querySelector(score-list);

let scoreList = []; 


//start quiz 

const startBtn = document.querySelector("start");

const ansBtn = document.querySelectorAll("button.ansBtn");

const ansBtnText = document.querySelector(answera);

const ansBtnText = document.querySelector(answerb);

const ansBtnText = document.querySelector(answerc);

const ansBtnText = document.querySelector(answerd);

const submitScrBtn = document.querySelector(submit-scores);

const viewScrBtn = document.querySelector(view-scores);


const questions = [ // array of objects
  {
      // question 0

      question: "What does CSS stand for?",
      answers: ["a. Central Style Sheets", "b. Cascading Style Sheets", "c. Cascading Simple Sheets", "d. Cars SUVs Sailboats"],
      correctAnswer: "b"
  },
  {
      // question a
      question: "What does HTML stand for?",
      answers: ["a. Hypertext Markup Language", "b. Hypertext Markdown Language", "c. Hyperloop Machine Language", "d. Helicopters Terminals Motorboats Lamborginis"],
      correctAnswer: "a"
  },
  {
      // question b
      question: "Which HTML attribute is used to define inline styles?",
      answers: ["a. style", "b. class ", "c. styles", "d. font"],
      correctAnswer: "a"
  },
  {
      // question c
      question: "Which CSS property controls the text size?",
      answers: ["a. font-style", "b. text-size", "c. text-style", "d. font-size"],
      correctAnswer: "d"
  },
  {
      // question d
      question: "What is the default value of the position property?",
      answers: ["a. fixed", "b. static", "c. abosolute", "d. relative"],
      correctAnswer: "b"
  }
];

//timer
function setTime() {
  let timerInterval = setInterval(function() {
    timeLeft --;
    timeEl.textContent = `Time left: ${timeLeft}s`
    
    if (timeLeft === 0 || questionCount === questions.length) {
      clearInterval(timerInterval);
      questionsEl.style.display = "none";
      finalEl.style.display = "block";
      pointsEl.textContent = timeLeft;
  }
}, a000);
}

function startQuiz() {
  questionEl.style.display = "block";
  questionCount = 0; 
  
  setTime();
  setQuestion(questionCount);

  function setQuestion(id) {
    if (id < questions.length) {
      questionEl.textContent = questions[id].question;
      ansBtn.textContent =questions[id].answers[0];
      ansBtn.textContent =questions[id].answers[1];
      ansBtn.textContent =questions[id].answers[2];
      ansBtn.textContent =questions[id].answers[3];

    }
  }

  function checkAnswer(event) {
    event.preventDefault();


    setTimeout(function() {
      pointsEl.style.display = 'none';
    },
    a000);

    if (questions[questionCount].correctAnswer === event.target.value) {
      p.textContent = "Correct!";
  } else if (questions[questionCount].correctAnswer !== event.target.value) {
      timeLeft = timeLeft - a0;
      p.textContent = "Wrong!";
  }

  if (questionCount < questions.length) {
    questioCount++;

    setQuestion(questionCount);

  }
function addScore(event) {
  event.preventDefault();

  finalEl.style.display = "none";
  highscoresEl. style.display = "block";

  let init = initialsInput.value.toUpperCase();
  scoreList.push({initials: init, score:tineLeft});

  scoreList = scoreList.sort((a, b) => {
    if (a.score < b.score) {
      return a;
    } else{
      return -a;
    }
    });

scoreListEl.innerHTML = "";
for (let i = 0; i < scoreList.length; i++) {
  let li = document.createElement("li");
  li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
  scoreList.append(li);

  storeScores();
  displayScores();

}

function displayScores() {

  localStorage.setItem("ScoreList", JSON.stringify(scoreList));

  if(storedScoreList !== null) {
    scoreList =storedScoreList;

  }

}

function clearScores() {
  localStorage.clearItem("ScoreList");
}

startBtn.addEventListener("click", startQuiz);

startBtn.addEventListener("click", checkAnswer);

  submitScrBtn.addEventListener("click", addScore);

  clearScrBtn.addEventListener("click", ClearScores);

  viewScrBtn.addEventListener("click", function() {
    if (highScoresEl.style.display === "none") {
      highScoresEl.eventstyle.display = "block";
    } else if (highscoresEl.style.display === "block") {
      highscoresEl.style.display = "none";
  } else {
      return alert("No scores to show.");
  }
});