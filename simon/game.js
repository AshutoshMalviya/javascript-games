
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];


var started = false; // to check if game is started then call nextSequence()

//variable to store level
var level = 0;

//variable for storing click counts
var clickCount = 0;

//when a keyboard key has been pressed for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    // $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  
  clickCount++;
  checkAnswer();

 
});

function nextSequence() {
    clickCount = 0;
    userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);  //generates a number between 0 and 3.
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

var correct = true;  // 

function checkAnswer() {
if(gamePattern[clickCount-1] !== userClickedPattern[clickCount-1]) {
    gameOver();
    correct = false;
}

if(clickCount === level && correct) {
    setTimeout(nextSequence , 1000);
}

}

function gameOver () {
    gamePattern = [];
    userChosenPattern = [];
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
        $("#level-title").text("Game Over Press any key to restart");
        level = 0;
        clickCount = 0;
        started = false;
        correct = true;
    } , 200);
}