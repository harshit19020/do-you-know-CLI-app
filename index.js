var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  q: "Where do I live? ",
  a: "Jaipur"
}, {
  q: "My favorite superhero would be? ",
  a: "Iron Man"
},
{
  q: "Where do I work? ",
  a: "At home"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Samkit?");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.q, currentQuestion.a)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");
}


welcome();
game();
showScores();
