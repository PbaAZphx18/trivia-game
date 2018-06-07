  // Timer counting down
  var counter = 60;

  // Variables logging results
  var correctCount = 0;
  var wrongCount = 0;
  var unansweredCount = 0;


  $(document).ready(function () {


    // Start of game
    $(".mainContainer").hide();
    $("#results").hide();


    //start button to kick off game
    $("#startButton").on('click', function () {
      $("#startContainer").hide();


      $(".mainContainer").show();

      startCountdown();
      return;

      });



    // Counts down should be displaying to user
    function countdown() {

      // Counter should be counting down from 60
      counter--;

      // Display the count to the user in the DOM
      $('#timerCounter').html(counter + " Seconds");



      // When user is done, can hit submit
      $("#submit").on("click", function () {

        // Stop the countdown and run the timeUp function
        clearInterval(startCountdown);
        counter = 0; 
        return;

      });


      if (counter == -1) {

        timeUp();

        // Hide the game info from the user
        $(".mainContainer").hide();

      }
    }


  function startCountdown() {

    setInterval(countdown, 1000);

  }

  


  function timeUp() {


    // Value of Radio Buttons
    var question1 = $('input:radio[name="question1"]:checked').val();
    var question2 = $('input:radio[name="question2"]:checked').val();
    var question3 = $('input:radio[name="question3"]:checked').val();
    var question4 = $('input:radio[name="question4"]:checked').val();
    var question5 = $('input:radio[name="question5"]:checked').val();


    // Determine the right/wrong/unanswered counts 
    if (question1 == undefined) {
      unansweredCount++;
    }
    else if (question1 == "Wellington") {
      correctCount++;
    }
    else {
      wrongCount++;
    }


    if (question2 == undefined) {
      unansweredCount++;
    }
    else if (question2 == "Africa") {
      correctCount++;
    }
    else {
      wrongCount++;
    }


    if (question3 == undefined) {
      unansweredCount++;
    }
    else if (question3 == "Pacific Ocean") {
      correctCount++;
    }
    else {
      wrongCount++;
    }


    if (question4 == undefined) {
      unansweredCount++;
    }
    else if (question4 == "Colombia") {
      correctCount++;
    }
    else {
      wrongCount++;
    }


    if (question5 == undefined) {
      unansweredCount++;
    }
    else if (question5 == "South Korea") {
      correctCount++;
    }
    else {
      wrongCount++;
    }






    //isplay the score results
    $('#correct_answers').html(correctCount);
    $('#wrong_answers').html(wrongCount);
    $('#unanswered').html(unansweredCount);


    $("#results").show();


  }

});



//---------------------------------------------
//create question bank with array of objects
//each object will have a question, an array of answer choices, 
//an keyindex for correct answer
// var questionBank = [{
//     question: "What is the capital of New Zealand?",
//     questionChoice: ["Queenstown", "Wellington", "Auckland", "Christchurch"],
//     correctChoice: 1

//   }, {
//     question: "On what continent is Egypt located on?",
//     questionChoice: ["Europe", "Asia", "Africa", "Middle East"],
//     correctChoice: 2
//   }, {
//     question: "In what ocean is Hawaii located in?",
//     questionChoice: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Hawaiian Ocean"],
//     correctChoice: 0
//   },
//   {
//     question: "Which country is not part of Central America?",
//     questionChoice: ["Costa Rica", "Belize", "Colombia", "Guatemala"],
//     correctChoice: 2
//   },
//   {
//     question: "Which country hosted the last Winter Olympics?",
//     questionChoice: ["Japan", "South Korea", "China", "Singapore"],
//     correctChoice: 1
//   }
// ];

//Create function that has for loop

