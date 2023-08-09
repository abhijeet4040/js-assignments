//javaScript type conversion

Converting Strings to Numbers

number("one")

//Converting Numbers to Strings

String(x)         // returns a string from a number variable x
String(123)       // returns a string from a number literal 123

//Converting Dates to Numbers

d = new Date();
Number(d) 

d = new Date();
d.getTime()

//Converting Dates to Strings

String(Date()) 

Date().toString()

//Converting Booleans to Numbers

Number(false)     // returns 0
Number(true)      // returns 1

//Converting Booleans to Strings  

String(false)      // returns "false"
String(true)       // returns "true"



//JavaScript Operators

let z = x + y;

let z = x * y;

let x = (100 + 50) * a;

x += 5;

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

let z = x % y;

let x = 5;
x++;

let x = 5;
x--;

let z = Math.pow(x,2);

x -= 5;

x *= 5;

x **= 5;

x /= 5; 

x &&= 5;

//comparing operators

x == "5"

x === "5"

x !== 8

x > 8

x < 8

x >= 8

x <= 8

//ternary operator

let voteable = (age < 18) ? "Too young":"Old enough";

//The Nullish Coalescing Operator (??)

let name = null;
let text = "missing";
let result = name ?? text;

const car = {type:"Fiat", model:"500", color:"white"};
document.getElementById("demo").innerHTML = car?.name;

