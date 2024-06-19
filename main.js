const questions=[{
    question:'Who won the Tour the France in 2021?',
    answers:[

        { text: 'Tadej Pogacar',correct:true},
        { text: '',correct:false},
        { text: '',correct:false},
        { text: '',correct:false},
    ]
},
{
    question:'Who won the Tour the France in 2021?',
    answers:[

        { text: 'Tadej Pogacar',correct:true},
        { text: '',correct:false},
        { text: '',correct:false},
        { text: '',correct:false},
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

