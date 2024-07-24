const questions = [
  
{   question: 'Who won the Tour de France in 2023?',
  answers: [

    { text: 'Jonas Vingegaard', correct: true },
    { text: 'Tadej Pogačar', correct: false },
    { text: 'Geraint Thomas', correct: false },
    { text: 'Egan Bernal', correct: false },
  ]
},
{
  question: 'Who is the all-time leading scorer in the history of the UEFA Champions League?',
   answers: [

    { text: 'Lionel Messi', correct: false },
    { text: 'Raúl González', correct: false },
    { text: 'Cristiano Ronaldo', correct: true },
    { text: 'Robert Lewandowski', correct: false },
  ]
 },
{
 question: 'Who won the UEFA Euro 2020 tournament?',
 answers: [

    { text: 'France', correct: false },
    { text: 'Croatia', correct: false },
    { text: 'Portugal', correct: false },
    { text: 'Italy', correct: true },
  ]
 },
 {
  question: 'Who won the 2022 NBA MVP award?',
  answers: [

    { text: 'Nikola Jokic', correct: true },
    { text: 'LeBron James', correct: false },
    { text: 'Kevin Durant', correct: false },
    { text: 'Stephen Curry', correct: false },
  ]
 },
 {
   question: ' What is the only country to have played in every World Cup soccer tournament?',
   answers: [

    { text: 'Argentina', correct: false },
    { text: 'Germany', correct: false },
    { text: 'France', correct: false },
    { text: 'Brazil', correct: true },
  ]
 },
 {
  question: 'Which country has won the most medals in Olympic snowboarding history?',
  answers: [

    { text: 'Switzerland', correct: false },
    { text: 'United States', correct: true },
    { text: 'Norway', correct: false },
    { text: 'Canada', correct: false },
  ]
},
 {
  question: "Who won the Men's Singles title at the Australian Open in 2023?",
   answers: [

    { text: 'Rafael Nadal', correct: false },
    { text: 'Dominic Thiem', correct: false },
    { text: 'Novak Djokovic', correct: true },
    { text: 'Daniil Medvedev', correct: false },
  ]
 },
{
  question: "Who is hosting the UEFA Women's Euro 2025?",
  answers: [

    { text: 'Italy', correct: false },
    { text: 'Germany', correct: false },
    { text: 'Serbia', correct: false },
    { text: 'Switzerland', correct: true },
  ]
},
{
  question: 'Who is the greatest driver F1 in history?',
  answers: [

    { text: 'Lewis Hamilton', correct: true },
    { text: 'Max Verstappen', correct: false },
    { text: 'Michael Schumacher', correct: false },
    { text: 'Fernando Alonso', correct: false },
  ]
 },
 {
  question: 'What is the deepest Olympic diving pool?',
  answers: [

     { text: '7 meters', correct: false },
     { text: '5 meters', correct: true },
     { text: '3 meters', correct: false },
     { text: '4 meters', correct: false },
   ]
 },
 {
   question: 'Where did the first modern Summer Olympic games take place in 1896?',
   answers: [

    { text: 'Australia', correct: false },
    { text: 'Denmark', correct: false },
    { text: 'Italy', correct: false },
    { text: 'Greece', correct: true },
  ]
},
{
  question: 'Which French city is known for its 24 hour motor race?',
  answers: [

    { text: 'Lyon', correct: false },
    { text: 'Marseille', correct: false },
    { text: 'Le Mans', correct: true },
    { text: 'Bordeaux', correct: false },
  ]
 },
 {
  question: 'Which team won the NBA Championship in 2022?',
   answers: [

    { text: 'Golden State Warriors', correct: true },
    { text: 'Boston Celtics', correct: false },
    { text: 'Denver Nuggets', correct: false },
    { text: 'Lakers', correct: false },
  ]
 },
{
  question: 'Which country has won the most Olympic medals in sailing?',
  answers: [

    { text: 'Brazil', correct: false },
    { text: 'Spain', correct: false },
    { text: 'Great Britain', correct: true },
    { text: 'United States', correct: false },
  ]
},
 {
  question: 'What country has won the most World Cup soccer championships?',
   answers: [

    { text: 'Brazil', correct: true },
    { text: 'Argentina', correct: false },
    { text: 'France', correct: false },
    { text: 'Portugal', correct: false },
   ]
 },
{
  question: 'Who is the greatest Boxer in history?',
  answers: [

    { text: 'Henry Armstrong', correct: false },
    { text: 'Muhammad Ali', correct: true },
    { text: 'Willie Pep', correct: false },
    { text: 'Mike Tyson', correct: false },
  ]
},
{
  question: "What country has won the most Women's Volleyball World Cup championships?",
  answers: [

    { text: 'China', correct: true },
    { text: 'Brazil', correct: false },
    { text: 'Australia', correct: false },
    { text: 'United States', correct: false },
  ]
},
{
  question: 'Which of the following sports does not use a ball?',
  answers: [

    { text: 'Tennis', correct: false },
    { text: 'Polo', correct: false },
    { text: 'Golf', correct: false },
    { text: 'Hockey', correct: true },
  ]
},
{
  question: 'How old was the youngest professional soccer player?',
  answers: [

    { text: '14', correct: false },
    { text: '12', correct: false },
    { text: '13', correct: true },
    { text: '15', correct: false },
  ]
},
{
  question: "In what year did women's boxing become an Olympic sport?",
  answers: [

    { text: '2002', correct: false },
    { text: '2001', correct: false },
    { text: '1998', correct: false },
    { text: '2004', correct: true },
  ]
},
];

const numberQuestions=20;
const inputUsername = document.querySelector(".username");
const startQuizButton = document.querySelector(".startQuiz");
const quizC = document.querySelector("#quiz");
const login = document.querySelector("#login");
const question = document.querySelector(".question");
const numberQ=document.querySelector(".numq");
const answers = document.querySelector(".answers");
const score = document.querySelector(".score");
const result = document.querySelector("#results")
const previousS = document.querySelector("#previousScores");
const feedback = document.querySelector(".feedback");
const restart = document.querySelector(".restartQuiz");


let username = '';
let pastQuestions = [];
let correctAnswer = 0;


restart.addEventListener("click", restartQuiz);
startQuizButton.addEventListener("click", startQuiz);

/**
 * Getting an username and starting the game.
 */

function startQuiz() {

  username = inputUsername.value.trim();
  correctAnswer=0;
  score.textContent ="Your score: "+ correctAnswer.toString();
  previousS.style.display="none";

  if (username) {
    pastQuestions = [];
    localStorage.setItem('username', username);
    login.style.display = "none";
    quizC.style.display = "block";
    previousS.display="none";
    feedback.style.display="block";
    nextQuestion(1);
  } else {
    alert("Please enter an username");
  }
}

/**
 * Creates a random next questions.
 */


function nextQuestion(n) {
  
  feedback.textContent = "";
  if (n != 1) {

    let rb = document.querySelectorAll("input[type='radio']:checked");


    if (rb.length == 0) {
      alert("Please choose the answer!");
      return;
    }

  }
  let rand;

  if (pastQuestions.length == questions.length) {
    inputUsername.value='';
    quizC.style.display = "none";
    restart.style.display="none";
    numberQ.style.display="none";
    score.textContent = "Your final score is "+correctAnswer.toString();
    result.style.display = 'block';
    login.style.display = "block";
    previousS.style.display="flex";
    feedback.style.display="none";
    let previousScore = JSON.parse(localStorage.getItem("previous"));
    let user = localStorage.getItem('username');
    previousScore.push({ user: user, score: correctAnswer });
    previousScore.sort(function (a, b) {

      return b - a;
    });
    localStorage.setItem("previous", JSON.stringify(previousScore));
    writePreviousScore(previousScore);
    return;
  }
  while (true) {

    rand = Math.floor(Math.random() * questions.length);

    if (!pastQuestions.includes(rand)) {
      pastQuestions.push(rand);
      break;
    }
  }
  showQuestion(rand);
}

/**
 * Creates a question view and radio button.
 */


function showQuestion(rand) {
  restart.style.display="block";
  numberQ.style.display="block";
         
  let rbut=document.querySelectorAll(".rbut");
  if (rbut){
  rbut.forEach(elem=>{
    elem.disabled=false;
  });
}



  question.textContent = pastQuestions.length+"."+" " +questions[rand].question;
  let numbering=pastQuestions.length +" of "+numberQuestions;
  numberQ.textContent=numbering;

  let num = 0;
  answers.textContent = "";
  questions[rand].answers.forEach(function (answer) {

    const container = document.createElement("div");

    const rbutton = document.createElement("input");
    rbutton.type = "radio";
    rbutton.name = "quiz";
    rbutton.value = num++;
    rbutton.classList.add("rbut");
    rbutton.id = "tt" + num;


    rbutton.addEventListener("change", function () {
       
      let rbut=document.querySelectorAll(".rbut");
      rbut.forEach(elem=>{
        elem.disabled=true;
      });


      if (answer.correct == true) {

        let img = document.createElement("img");
        img.src = "assets/img/correct.png";
        img.alt = "correct";
        img.classList.add('picx');
        img.style.width="30px";
        img.style.height="30px";
        feedback.appendChild(img);
        rbutton.nextElementSibling.style.color = "green";
        correctAnswer++;

        score.textContent ="Your score: "+ correctAnswer.toString();
        setTimeout(function () {


          nextQuestion(2);
        }, 3000);



      } else {
        let img = document.createElement("img");
        img.src = "assets/img/wrong.png";
        img.alt = "correct";
        img.classList.add('picx');

        img.style.width="30px";
        img.style.height="30px";
        feedback.appendChild(img);

        score.textContent ="Your score: "+ correctAnswer.toString();
        rbutton.nextElementSibling.style.color = "red";
        setTimeout(function () {


          nextQuestion(2);
        }, 3000);
      }

    });

    const label = document.createElement("label");
    label.classList.add(`label${num}`);
    label.htmlFor = "tt" + num;
    label.textContent =answer.text;
     num++;

    container.appendChild(rbutton);
    container.appendChild(label);




    answers.appendChild(container);


  


  });
}

/**
 * Initialization function on load application
 */

function init() {
  let previousScore = JSON.parse(localStorage.getItem("previous"));
  restart.style.display="none";

  if (!previousScore) {
    localStorage.setItem("previous", JSON.stringify([]));
     previousScore = JSON.parse(localStorage.getItem("previous"));
  }

  writePreviousScore(previousScore);

}

init();

/**
 * Writes all high scores per username from local storage.
 */

function writePreviousScore(previousScore) {

  if (previousScore.length == 0  || previousScore==null) {
    previousS.textContent = "No results!";
    return;
  }

  previousScore.sort((a,b)=>{

    if (b.score>a.score){
      return 1;
    }
    if (a.score>b.score){
      return -1;
    }
    if(a.score==b.score){
      return 0;
    }

  });
  
  let html = `<h2>Best 5 scores</h2>
  <table class="psscore">
<tr>
<th>Username</th>
<th>Points</th>
</tr>
`;

let count=0;
 for(let i=0;i<previousScore.length;i++){

  if (count==5){
    break;
  }


    html += `<tr>
<td>${previousScore[i].user}</td>
<td>${previousScore[i].score}</td>
</tr>`;

count++;
 }
  html += `</table>`;

  previousS.innerHTML = html;

}


/**
 * Allows the quiz to be restarted.
 */

function restartQuiz() {

  let b=confirm("Are you sure you want to start quiz again?");
  if(b==false){

    return;
  }

  correctAnswer = 0;
  score.textContent ="Your score: " +correctAnswer;
  pastQuestions=[];
  nextQuestion(1);
  previousS.display="none";

}
