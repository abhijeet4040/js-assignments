// JavaScript: Function Expressions

onst greet = function(name) {
    console.log("Hello, " + name + "!");
};

greet("Alice");

const factorial = function calcFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcFactorial(n - 1);
    }
};

console.log(factorial(5)); 

function applyOperation(a, b, operation) {
    return operation(a, b);
}

const sum = function(x, y) {
    return x + y;
};

const difference = function(x, y) {
    return x - y;
};

console.log(applyOperation(5, 3, sum));        
console.log(applyOperation(10, 4, difference)); 

const multiply = (x, y) => x * y;

console.log(multiply(3, 4));

// JavaScript: Arrow Functions, the basics

const multiply = function(x, y) {
    return x * y;
};

// Arrow function
const multiplyArrow = (x, y) => x * y;

const double = x => x * 2;

console.log(double(5));

const add = (x, y) => x + y;

const sayHello = () => console.log("Hello!");

const sum = (x, y) => {
    const result = x + y;
    return result;
};  



const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    // Using arrow function to preserve 'this'
    greet: () => {
        console.log("Hello, " + this.fullName()); // 'this' is not the person object
    }
};

person.greet();