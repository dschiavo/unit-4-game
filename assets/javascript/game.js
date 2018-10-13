var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = 0;

function initializeGame() {
    var randomNumber = 0;
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;
    var totalScore = 0;
}

function getRandomIntForTotal(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntForJewel (){
    return Math.floor(Math.random() * 12);
}

function verifyTotal() {
    if (totalScore === randomNumber) {
        wins++;
        $("#win-lose").html("<h2>You win!</h2>");
        $("#wins").html("<h3>" + wins + "</h3>");
      }
    
      else if (totalScore > randomNumber) {
        losses++;
        $("#win-lose").html("<h2>You lost!</h2>");
        $("#losses").html("<h3>" + losses + "</h3>");
         
      } else {
         //keep playing 
      }
}

$("#gem1").on("click", function() {
    //add value of gem1 to total score
    $("#totalScore").text(total);
    verifyTotal();
}
