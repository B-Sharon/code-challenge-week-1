//task: write a program that prompts the user to input student marks and then output the correct grade.

//prompting the user to input marks


const prompt = require("prompt-sync")({ sigint: true });
let marks = prompt("Hello student, please enter your marks:" );


//function to generate the grade
function gradeGenerator(marks){
    //ensures the user inputs a number between 0 to 100
    while(marks < 0 || marks > 100){
        marks = prompt("Invalid input! Please enter a valid marks: ");
    }
    if (marks > 79){
        return "A";
    }
    else if( marks >= 60 && marks <= 79){
        return "B";
    }
    else if( marks >= 49 && marks <= 59){
        return "C";
    }
    else if( marks >= 40 && marks < 49){
        return "D";
    }
    else{
        return "E";
    }
    
}

//logging the output gradeGenerator(marks);
console.log(`Your grade is: ${gradeGenerator(marks)}`); 
