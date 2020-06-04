// event listeners
  var buttons = document.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click",clickCapture);
  }
  document.addEventListener("keydown", keyPressedCapture);


  //event capture
function clickCapture() {
    var keyPressed = this.innerHTML;
    playAnimation(keyPressed);
   playDrum(keyPressed);
  
  }
 
  function keyPressedCapture (event) {
   playAnimation(event.key);
    playDrum(event.key);
  }
  


  //play drum

  function playDrum(key) {
      
    switch (key) {
        case "a" :
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          
          break;
        case "s":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "f":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
      }
  }

  //play animation 

function playAnimation (key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }  , 100);
  
}