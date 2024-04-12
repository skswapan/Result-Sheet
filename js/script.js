"use strict";
// document.write ('Hello world');
console.log("hello Developer");

// let firstName = prompt("Enter your First name :");
// let lastName = prompt("Enter your Last name :");
// let fullName = (`${firstName} ${lastName}` + "<br>");
// document.write("How are you " + fullName + "<br>");
// fullName = fullName.length;
// document.write(fullName);


// CALCULATOR PROGRAM //
/*
let firstNumber = prompt("Enter Your First Number :");
let secondNumber = prompt("Enter Your Second Number :");
firstNumber = parseInt ( firstNumber );
secondNumber = parseInt ( secondNumber );

document.write ( "Your First Number : " + firstNumber + "<br>"); 
document.write ( "Your Second Number : " + secondNumber + "<br>"); 
document.write ( firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber) + "<br>");
document.write ( firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber) + "<br>");
document.write ( firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber) + "<br>");
document.write ( firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber) + "<br>");
document.write ( firstNumber + " % " + secondNumber + " = " + (firstNumber % secondNumber) + "<br>");
*/

// LETTER GRADE PROGRAM //


let marks = prompt("Enter Your Marks : ");
marks = parseInt(marks);

if ( marks > 100 || marks<0 ) {
    document.write("Age Number Jaina Ai");
}

else if ( marks >= 80 ) {
    document.write("Name : Sikrita Sannal" + "<br>");
    document.write("Father Name : Bikash Sannal" + "<br>");
    document.write("Mother Name : Krishna Sannal" + "<br>");
    document.write("Result : A+");

}
else if ( marks >= 70 ) {
    document.write("Name : Sikrita Sannal" + "<br>");
    document.write("Father Name : Bikash Sannal" + "<br>");
    document.write("Mother Name : Krishna Sannal" + "<br>");
    document.write("Result : A");
}
else if ( marks >= 60 ) {
    document.write("Name : Sikrita Sannal" + "<br>");
    document.write("Father Name : Bikash Sannal" + "<br>");
    document.write("Mother Name : Krishna Sannal" + "<br>");
    document.write("Result : A-");
}
else if ( marks >= 50 ) {
    document.write("Name : Sikrita Sannal" + "<br>");
    document.write("Father Name : Bikash Sannal" + "<br>");
    document.write("Mother Name : Krishna Sannal" + "<br>");
    document.write("Result : B");
}
else if ( marks >= 40 ) {
    document.write("Name : Sikrita Sannal" + "<br>");
    document.write("Father Name : Bikash Sannal" + "<br>");
    document.write("Mother Name : Krishna Sannal" + "<br>");
    document.write("Result : C");
}
else if ( marks >= 34 ) {
    document.write("Name : Sikrita Sannal" + "<br>");
    document.write("Father Name : Bikash Sannal" + "<br>");
    document.write("Mother Name : Krishna Sannal" + "<br>");
    document.write("Result : D");
}
else {
    document.write("Name : Sikrita Sannal" + "<br>");
    document.write("Father Name : Bikash Sannal" + "<br>");
    document.write("Mother Name : Krishna Sannal" + "<br>");
    document.write("Result : Fail");
}




// Vowel-Consonent PROGRAM //

/*
let letter = prompt("Enter your letter :");

letter = letter.toLowerCase();

if ( letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ) {
    document.write (letter + " is Vowel");
}
else {
    document.write ( letter + " is Consonent" );
}
*/

// Digit Spelling PROGRAM //

/*
let number = prompt("Enter Your Digit :");
if ( number == 0 ) {
    document.write ("Spelling Of your digit is = Zero");
}
else if ( number == 1 ) {
    document.write ("Spelling Of your digit is = One");
}
else if ( number == 2 ) {
    document.write ("Spelling Of your digit is = Two");
}
else if ( number == 3 ) {
    document.write ("Spelling Of your digit is = Three");
}
else if ( number == 4 ) {
    document.write ("Spelling Of your digit is = Four");
}
else if ( number == 5 ) {
    document.write ("Spelling Of your digit is = Five");
}
else if ( number == 6 ) {
    document.write ("Spelling Of your digit is = Six");
}
else if ( number == 7 ) {
    document.write ("Spelling Of your digit is = Seven");
}
else if ( number == 8 ) {
    document.write ("Spelling Of your digit is = Eight");
}
else if ( number == 9 ) {
    document.write ("Spelling Of your digit is = Nine");
}
else if ( number == 10 ) {
    document.write ("Spelling Of your digit is = Ten");
}
else {
    document.write ("Invalid Digit");
}
*/

// Use of Switch PROGRAM //
// Switch > Case > break > default;

