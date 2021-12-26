var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var color = document.getElementById('currentNumber');
function increment() {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;

        if (currentNumber >= 100) {
          currentNumberWrapper.innerHTML = 0;
          currentNumber = 0;
        }

        if (currentNumber >= 1) {
        color.style.color = "grey"; 
    }

}

var color = document.getElementById('currentNumber');
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber <= -50) {
      currentNumberWrapper.innerHTML = 0;
      currentNumber = 0;
    }

    if (currentNumber <= -1) {
    color.style.color = "red"; 
}
}

var number =  document.getElementById("currentNumber");
function modifyNumber() {
  number.firstChild.nodeValue = "aperte algum butão";
}

var mood = document.getElementById("container");
function change() {
    mood.addEventListener("click", modifyNumber, false);
  }
  
  document.addEventListener("DOMContentLoaded", change, false);
