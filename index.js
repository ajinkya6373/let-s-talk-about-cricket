const readlineSync = require("readline-sync");

let user
const greeting =()=>{
console.log("Lets play a game ");
console.log("**************************************");
user = readlineSync.question("What is your name ? ");
console.log("-");
}


const HighScorers =[

  {
    name:"ajinkya",
    score:5
    
  },
  {
    name:"shekhar",
    score:4
    
  }
  
]

const questionsArray = [
  {
    question: "What does IPL stand for?",
    answer: "Indian premier League"
  },
  {
    question: "Which form of cricket restrict to a maximum of 20 overs?",
    answer: "t20"
  },
  {
    question: "Which famous cricketer now serves as Prime Minister of Pakistan (as of 2021)?",
    answer: "Imran Khan"
  },
  {
    question: "When did England win the Cricket World Cup for the first time (year)?",
    answer: "2019"
  },
  {
    question: "How many players are in a cricket team ?",
    answer: "11"
  },
]


let score = 0;

const play =()=>{
  for (let i = 0; i < questionsArray.length; i++) {
  const userAns = readlineSync.question(questionsArray[i].question)
  if (userAns.toLowerCase() === questionsArray[i].answer.toLowerCase()) {
    console.log("You are right!!");
    console.log("");
    score++;

  } else {
    console.log("Sorry ,You are wrong !!!");
    console.log("");
  }

  console.log("current score is :", score);
}
}


const showScores=()=>{
console.log("**************************************");
console.log(user + " your score is " + score);
console.log("**************************************");
HighScorers.map((score)=> console.log(score.name,":",score.score))

}

greeting()
play()
showScores()
