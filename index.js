var readlineSync = require("readline-sync");

var score = 0;

var questions = [{
  q: "Where do samkit live? ",
  a: "Jaipur"
}, {
  q: "which college samkit is presently studying ? ",
  a: "jecrc foundation"
}, {
  q: "his birthday in dd/mm/yyyy ",
  a: "18/02/2001"
}, {
  q: "his favourite sport ",
  a: "cricket"
}, {
  q: "What's his current age? ",
  a: "20"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Samkit?");
  console.log("lets play it \n");
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
    console.log("the correct answer is " + answer);
   
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

  // console.log("Check out the high scores, if you should be there ping me and I'll update it");
}


welcome();
game();
showScores();
