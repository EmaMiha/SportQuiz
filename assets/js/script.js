const questions=[{
    question:'Who won the Tour de France in 2023?',
    answers:[

        { text: 'Jonas Vingegaard',correct:true},
        { text: 'Tadej Pogačar',correct:false},
        { text: 'Geraint Thomas',correct:false},
        { text: 'Egan Bernal',correct:false},
    ]
},
{
    question:'Who is the all-time leading scorer in the history of the UEFA Champions League?',
    answers:[

        { text: 'Lionel Messi',correct:false},
        { text: 'Raúl González',correct:false},
        { text: 'Cristiano Ronaldo',correct:true},
        { text: 'Robert Lewandowski',correct:false},
    ]
},
{
  question:'Who won the UEFA Euro 2020 tournament?',
  answers:[

      { text: 'France',correct:false},
      { text: 'Croatia',correct:false},
      { text: 'Portugal',correct:false},
      { text: 'Italy',correct:true},
  ]
},
{
  question:'Who won the 2022 NBA MVP award?',
  answers:[

      { text: 'Nikola Jokic',correct:true},
      { text: 'LeBron James',correct:false},
      { text: 'Kevin Durant',correct:false},
      { text: 'Stephen Curry',correct:false},
  ]
},
{
  question:' What is the only country to have played in every World Cup soccer tournament?',
  answers:[

      { text: 'Argentina',correct:false},
      { text: 'Germany',correct:false},
      { text: 'France',correct:false},
      { text: 'Brazil',correct:true},
  ]
},
{
  question:'Which country has won the most medals in Olympic snowboarding history?',
  answers:[

      { text: 'Switzerland',correct:false},
      { text: 'United States',correct:true},
      { text: 'Norway',correct:false},
      { text: 'Canada',correct:false},
  ]
},
{
  question:"Who won the Men's Singles title at the Australian Open in 2023?",
  answers:[

      { text: 'Rafael Nadal',correct:false},
      { text: 'Dominic Thiem',correct:false},
      { text: 'Novak Djokovic',correct:true},
      { text: 'Daniil Medvedev',correct:false},
  ]
},
{
  question:"Who is hosting the UEFA Women's Euro 2025?",
  answers:[

      { text: 'Italy',correct:false},
      { text: 'Germany',correct:false},
      { text: 'Serbia',correct:false},
      { text: 'Switzerland',correct:true},
  ]
},
{
  question:'Who is the greatest driver F1 in history?',
  answers:[

      { text: 'Lewis Hamilton',correct:true},
      { text: 'Max Verstappen',correct:false},
      { text: 'Michael Schumacher',correct:false},
      { text: 'Fernando Alonso',correct:false},
  ]
},
{
  question:'What is the deepest Olympic diving pool?',
  answers:[

      { text: '7 meters',correct:false},
      { text: '5 meters',correct:true},
      { text: '3 meters',correct:false},
      { text: '4 meters',correct:false},
  ]
},
{
  question:'Where did the first modern Summer Olympic games take place in 1896?',
  answers:[

      { text: 'Australia',correct:false},
      { text: 'Denmark',correct:false},
      { text: 'Italy',correct:false},
      { text: 'Greece',correct:true},
  ]
},
{
  question:'Which French city is known for its 24 hour motor race?',
  answers:[

      { text: 'Lyon',correct:false},
      { text: 'Marseille',correct:false},
      { text: 'Le Mans',correct:true},
      { text: 'Bordeaux',correct:false},
  ]
},
{
  question:'Which team won the NBA Championship in 2022?',
  answers:[

      { text: 'Golden State Warriors',correct:true},
      { text: 'Boston Celtics',correct:false},
      { text: 'Denver Nuggets',correct:false},
      { text: 'Lakers',correct:false},
  ]
},
{
  question:'Which country has won the most Olympic medals in sailing?',
  answers:[

      { text: 'Brazil',correct:false},
      { text: 'Spain',correct:false},
      { text: 'Great Britain',correct:true},
      { text: 'United States',correct:false},
  ]
},
{
  question:'What country has won the most World Cup soccer championships?',
  answers:[

      { text: 'Brazil',correct:true},
      { text: 'Argentina',correct:false},
      { text: 'France',correct:false},
      { text: 'Portugal',correct:false},
  ]
},
{
  question:'Who is the greatest Boxer in history?',
  answers:[

      { text: 'Henry Armstrong',correct:false},
      { text: 'Muhammad Ali',correct:true},
      { text: 'Willie Pep',correct:false},
      { text: 'Mike Tyson',correct:false},
  ]
},
{
  question:"What country has won the most Women's Volleyball World Cup championships?",
  answers:[

      { text: 'China',correct:true},
      { text: 'Brazil',correct:false},
      { text: 'Australia',correct:false},
      { text: 'United States',correct:false},
  ]
},
{
  question:'Which of the following sports does not use a ball?',
  answers:[

      { text: 'tennis',correct:false},
      { text: 'polo',correct:false},
      { text: 'golf',correct:false},
      { text: 'hockey',correct:true},
  ]
},
{
  question:'How old was the youngest professional soccer player?',
  answers:[

      { text: '14',correct:false},
      { text: '12',correct:false},
      { text: '13',correct:true},
      { text: '15',correct:false},
  ]
},
{
  question:"In what year did women's boxing become an Olympic sport?",
  answers:[

      { text: '2002',correct:false},
      { text: '2001',correct:false},
      { text: '1998',correct:false},
      { text: '2004',correct:true},
  ]
},
]


const inputUsername=document.querySelector(".username");
const startQuizButton=document.querySelector(".startQuiz");
const quizC=document.querySelector("#quiz");
const login=document.querySelector("#login");


let username='';
let currentQuestionIndex;
let pastQuestions = [];


startQuizButton.addEventListener("click",startQuiz);



/**
 * Getting and checking the username and starting the quiz. 
 */

function  startQuiz(){

  username=inputUsername.value.trim();


  if(username){

    localStorage.setItem('username',username);
    login.style.display="none";
    quizC.style.display="block";

  }else{
    alert("Please enter an username");
  }


}

/**
 * Creating a random questions.
 */
function nextQuestion () {
  let rand;

  while (true) {

    rand = Math.floor(Math.random() * questions.length);

    if (pastQuestions.includes(rand)) {
      pastQuestions.push(rand);
      break;
    }
  }

  showQuestion(rand);
}

