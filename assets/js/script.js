var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
        var color = document.getElementById('currentNumber');
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


function decrement() {
    var color = document.getElementById('currentNumber');
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

function modifyNumber() {
  var number =  document.getElementById("currentNumber");
  number.firstChild.nodeValue = "aperte algum butão";
}

function change() {        
    var mood = document.getElementById("container");
    mood.addEventListener("click", modifyNumber, false);
  }
  
  document.addEventListener("DOMContentLoaded", change, false);
