var userInput = [];
var answerOptions ={
 correct = 0,
incorrect = 0,
}
var questionCounter = 0;
var count=30;
var questionArray = [{
    question: "This is a question",
    options: ["A1", "A2", "A3", "A4"],
    correctAnswer: 1,
}, {
    question: "This is question 2",
    options: ["A1", "A2", "A3", "A4"],
    correctAnswer: 0,
}, {
    question: "This is question number 3",
    options: ["A1", "A2", "A3", "A4"],
    correctAnswer: 3
}];

$("#start-button").on("click", displayQuestions);
$("#start-button").on("click", startGame);

function startGame() {
    $("#start-button").hide();
    $("#next-button").show();
    counter = setInterval(timer, 3000);
    displayQuestions();
};

function timer() {
    count--;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    $("#time-remaining").html("Time Remaining: " + count + "seconds");
}
function displayQuestions() {
    $("#start-text").hide();
    $("#question-text").html("<h3>" + questionArray[0].question + "</h3>");
    var choicesArr = questionArray[0].choices;
    var userInputArray = [];
    for (i =0; i <choicesArr.length; i ++){
        var answer = $("#choices-text");
        answer.text(choicesArr[i]);
        answer.attr('data-id',i);
        $("#choices-text").append (answer);
    }
    $("#next-button").on("click", displayQuestions);
}
// function timesUp (){
//     questionCounter++;
//     newQuestion();
//     setTimeout(timesUp,3000);
// }
//   