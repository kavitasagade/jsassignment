let marks=parseFloat(prompt("Enter the marks: "));
console.log("Using conditional statements: ");
if(marks<=100 && marks>=80)
console.log("A");
else if(marks<80 && marks>=60)
console.log("B");
else if(marks<60 && marks>=40)
console.log("C");
else
console.log("Failed");

console.log("Ternary operator ");
(marks<=100 && marks>=80 )? console.log("A") : (marks<80 && marks>=60) ? console.log("B") : (marks<60 && marks>=40) ? console.log("C") : console.log("Failed")