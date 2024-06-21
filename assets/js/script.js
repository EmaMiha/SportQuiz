const questions=[{
    question:'Who won the Tour de France in 2023?',
    answers:[

        { text: 'Jonas Vingegaard',correct:true},
        { text: '',correct:false},
        { text: '',correct:false},
        { text: '',correct:false},
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




]


const inputUsername=document.querySelector(".username");
const startQuizButton=document.querySelector(".startQuiz");
const quizC=document.querySelector("#quiz");
const login=document.querySelector("#login");
let username='';

startQuizButton.addEventListener("click",startQuiz);


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

