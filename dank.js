//code to randomly generate a percentage of dankness and a mildly amusemening comment

//Dank calc takes a random number ands assigns a string to a <p> using if statements

var calcDank;
var newDank;

function getRandomNumber() {
    newCalcDank = Math.floor(Math.random() * 5);
    if (newCalcDank != calcDank) {
        calcDank = newCalcDank;
        howDank();
    } else {
        getRandomNumber();
    }
}
//recursion makes the result different every time

document.getElementById("danky").addEventListener("click", getRandomNumber);

function howDank() {

    console.log(newCalcDank);
//console.log included for test purposes

    if (calcDank === 4) {
        document.getElementById("result").innerHTML = "Dank level is over 9000.";
    }
    if (calcDank === 3) {
        document.getElementById("result").innerHTML = "Dank AF.";
    }
    if (calcDank === 2) {
        document.getElementById("result").innerHTML = "Is it tho?";
    }
    if (calcDank === 1) {
        document.getElementById("result").innerHTML = "Noob memes are for noobs.";
    }
    if (calcDank === 0) {
        document.getElementById("result").innerHTML = "OK Boomer.";
    }
}