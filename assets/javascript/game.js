var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

function initializeGame() {
    randomNumber = getRandomIntForGame(19, 120);
    gem1 = getRandomIntForJewel ();
    gem2 = getRandomIntForJewel ();
    gem3 = getRandomIntForJewel ();
    gem4 = getRandomIntForJewel ();
    totalScore = 0;
}

function getRandomIntForGame(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntForJewel (){
    return Math.floor(Math.random() * 12);
}

function sum (a, b) {
    return a + b;
}

function verifyTotal() {
    if (totalScore === randomNumber) {
        wins++;
        $("#win-lose").html("<h2>You win!</h2>");
        $("#wins").html("<h3> Wins: " + wins + "</h3>");
        initializeGame();
      }
    
      else if (totalScore > randomNumber) {
        losses++;
        $("#win-lose").html("<h2>You lost!</h2>");
        $("#losses").html("<h3> Losses: " + losses + "</h3>");
        initializeGame();
         
      } else {
         //keep playing 
      }
}

//run function get RandomIntforgame, assign it to randomNumber and print randomNumber to randomNumber div
randomNumber = getRandomIntForGame(19, 120);
$("#random-total").text(randomNumber);

//run getRandomIntforJewel to assign random numbers to each jewel button

gem1 = getRandomIntForJewel ();
gem2 = getRandomIntForJewel ();
gem3 = getRandomIntForJewel ();
gem4 = getRandomIntForJewel ();

$("#gem1").on("click", function() {
    //add value of gem1 to total score
    sum(gem1, totalScore)
    $("#totalScore").text(totalScore);
    verifyTotal();
});

$("#gem2").on("click", function() {
    //add value of gem2 to total score
    sum(gem2, totalScore)
    $("#totalScore").text(totalScore);
    verifyTotal();
});

$("#gem3").on("click", function() {
    //add value of gem3 to total score
    sum(gem3, totalScore);
    $("#totalScore").text(totalScore);
    verifyTotal();
});

$("#gem4").on("click", function() {
    //add value of gem4 to total score
    sum(gem4, totalScore);
    $("#totalScore").text(totalScore);
    verifyTotal();
});