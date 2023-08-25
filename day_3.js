// JavaScript: alert, prompt, confirm

alert("Hello, this is an alert!");

const userInput = prompt("Please enter your name:");
if (userInput !== null) {
    console.log("Hello, " + userInput + "!");
} else {
    console.log("User cancelled the prompt.");
}

const userConfirmed = confirm("Are you sure you want to proceed?");
if (userConfirmed) {
    console.log("User confirmed.");
} else {
    console.log("User cancelled or declined.");
}


// JavaScript: Type Conversions

const num = 5;
const str = "10";
const result = num + str; 

const num = 42;
const str = String(num);

const str = "10";
const num = Number(str); 

const floatStr = "3.14";
const floatNum = parseFloat(floatStr);

const hexStr = "1A";
const hexNum = parseInt(hexStr, 16);

const num = 0;
const boolValue = Boolean(num);

// JavaScript: Basic Operators, maths

onst a = 10;
const b = 3;

const sum = a + b;      
const difference = a - b;
const product = a * b;   
const quotient = a / b;  
const remainder = a % b;
const exponent = a ** b;

let num = 5;
num++; 
num--;

let x = 10;
x += 5; 
x -= 3; 
x *= 2; 
x /= 4;

const p = 5;
const q = "5";

p == q;   
p === q;  
p !== q;  
p > q;    
p <= q;

// JavaScript: Comparisions

const a = 5;
const b = "5";
console.log(a == b);


const a = 5;
const b = "5";
console.log(a != b);

const a = 5;
const b = "5";
console.log(a === b);

const a = 5;
const b = "5";
console.log(a !== b);

const x = 10;
const y = 5;
console.log(x > y);

const x = 10;
const y = 5;
console.log(x < y); 

const x = 10;
const y = 5;
console.log(x >= y);

const x = 10;
const y = 5;
console.log(x <= y);