// JavaScript: Loops: while and for

let count = 0;

while (count < 5) {
    console.log("Count: " + count);
    count++;
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// JavaScript: switch statement

const day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("It's the beginning of the week.");
        break;
    case "Wednesday":
        console.log("It's the middle of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend.");
        break;
    default:
        console.log("It's just another day.");
}

// functions

const multiply = function(a, b) {
    return a * b;
};

const result = multiply(3, 5);


function square(number) {
    return number * number;
}

const squaredValue = square(4);

function sayHello(name) {
    console.log("Hello, " + name + "!");
}

sayHello("Bob");

