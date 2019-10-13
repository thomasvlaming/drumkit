//  Detecting button clicks:
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML.slice(0, 1)

    makeSound(buttonInnerHTML)

    buttonAnimations(buttonInnerHTML)
  });

}
//  Detecting key presses:
document.addEventListener("keypress", function(event) {

  makeSound(event.key)

  buttonAnimations(event.key)

})

//  Plays the right drum sounds:
function makeSound(key) {
  switch (key) {
    case "a":
    case "s":
      var kick = new Audio("sounds/kick-bass.wav");
      kick.play();
      break;
    case "d":
    case "f":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      break;
    case "q":
    case "w":
      var tom1 = new Audio("sounds/tom-1.wav");
      tom1.play();
      break;
    case "e":
    case "r":
      var tom2 = new Audio("sounds/tom-2.wav");
      tom2.play();
      break;
    case "h":
    case "j":
      var hihat = new Audio("sounds/hihat.wav");
      hihat.volume = 0.35;
      hihat.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.wav");
      crash.play();
      break;
    case "l":
      var ride = new Audio("sounds/ride.wav");
      ride.play();
      break;
    default:
      console.log(key)
  }
}

function buttonAnimations(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed")

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}