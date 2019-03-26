var userInput = []


//setTimeout(next, 5000);

$("#start-button").on("click",beginGame);
$("#start-button").on("click",startDisappear);
function startDisappear(){
   $("#start-button").hide();
   $("#next-button").show();
}
function beginGame () {
    $("#box").html("<h3>Question 1</h3>");
    console.log("This is question 1");
    $("#question-text").html("<div>This is the first question</div>");
    console.log("this is working now");
   $("#next-button").on("click",question);
}
function question() {
    $("#box").html("<h3> Question 2 <h3>");
    $("#question-text").html("<div>This is the second question</div>");
}
