// Driver inputs the speed of a car and the program calculates the demerit  points if the spped is past the limit. If the driver gets more than 12 demerit points, their license is suspended.

// prompt the driver to input the speed of the car
const prompt = require("prompt-sync")({ sigint: true });
let speed = prompt("Enter the speed of the car: ");

//function to detect the speed and output the demerit points
function speedDetector(speed){
    if (speed <= 70){
        return "OK";
    }
    else{
        //calculating the demerit points
        let demeritPoints = Math.round((speed - 70) / 5); //used Math.round to round off the demerit points so that they are whole numbers.
        if(demeritPoints < 12){
            return "Demerit points: " + demeritPoints ;
        }
        else{
            return "License Suspended.";
        }

    }
}
// loggint the output
console.log(speedDetector(speed));