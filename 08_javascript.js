console.log("here");
var x = 2;
var y = 2;
function addThis() {
  x = x + y;
  document.getElementById("e1").innerHTML = "The value of X is now: " + x;
  document.getElementById("e1").style.color = "black";
}
function subtractThis() {
  x = x - y;
  document.getElementById("e2").innerHTML = "The value of X is now: " + x;
  document.getElementById("e2").style.color = "black";
}
function multiplyThis() {
  x = x * y;
  document.getElementById("e3").innerHTML = "The value of X is now: " + x;
  document.getElementById("e3").style.color = "black";
}
function exponentThis() {
  x = x ** y;
  Math.round(x);
  document.getElementById("e4").innerHTML = "The value of X is now: " + x;
  document.getElementById("e4").style.color = "black";
}
function divideThis() {
  x = x / y;
  Math.round(x);
  document.getElementById("e5").innerHTML = "The value of X is now: " + x;
  document.getElementById("e5").style.color = "black";
}
function modulusThis() {
  x = x % y;
  Math.round(x);
  document.getElementById("e6").innerHTML = "The value of X is now: " + x;
  document.getElementById("e6").style.color = "black";
}
function incrementThis() {
  x++;
  document.getElementById("e7").innerHTML = "The value of X is now: " + x;
  document.getElementById("e7").style.color = "black";
}

function decrementThis() {
  x--;
  document.getElementById("e8").innerHTML = "The value of X is now: " + x;
  document.getElementById("e8").style.color = "black";
}

function resetAll() {
  x = 2;

  document.getElementById("e1").innerHTML =
    "Click the button to find the new value of X";
  document.getElementById("e2").innerHTML =
    "Click the button to find the new value of X";
  document.getElementById("e3").innerHTML =
    "Click the button to find the new value of X";
  document.getElementById("e4").innerHTML =
    "Click the button to find the new value of X";
  document.getElementById("e5").innerHTML =
    "Click the button to find the new value of X";
  document.getElementById("e6").innerHTML =
    "Click the button to find the new value of X";
  document.getElementById("e7").innerHTML =
    "Click the button to find the new value of X";
  document.getElementById("e8").innerHTML =
    "Click the button to find the new value of X";
  document.getElementById("e1").style.color = "grey";
  document.getElementById("e2").style.color = "grey";
  document.getElementById("e3").style.color = "grey";
  document.getElementById("e4").style.color = "grey";
  document.getElementById("e5").style.color = "grey";
  document.getElementById("e6").style.color = "grey";
  document.getElementById("e7").style.color = "grey";
  document.getElementById("e8").style.color = "grey";
}
