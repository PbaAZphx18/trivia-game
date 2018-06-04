//start button to kick off game
$("#startButton").on('click', function (){
  //this will likely call funtion that starts game
  alert("start");
});

//create question bank with array of objects
//each object will have a question, an array of answer choices, 
//an keyindex for correct answer
var questionBank = [{
    question: "What is the capital of New Zealand?",
    questionChoice: ["Queenstown", "Wellington", "Auckland", "Christchurch"],
    correctChoice: 1

  }, {
    question: "On what continent is Egypt located on?",
    questionChoice: ["Europe", "Asia", "Africa", "Middle East"],
    correctChoice: 2
  }, {
    question: "In what ocean is Hawaii located in?",
    questionChoice: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Hawaiian Ocean"],
    correctChoice: 0
  },
  {
    question: "Which country is not part of Central America?",
    questionChoice: ["Costa Rica", "Belize", "Colombia", "Guatemala"],
    correctChoice: 2
  },
  {
    question: "Which country hosted the last Winter Olympics?",
    questionChoice: ["Japan", "South Korea", "China", "Singapore"],
    correctChoice: 1
  }
];

//Create function that has for loop

