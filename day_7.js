// JavaScript: Objects


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false
};


console.log(person.firstName); 
console.log(person["lastName"]); 


person.age = 31; 
person.city = "New York"; 


delete person.isStudent;

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); 


const nestedObject = {
    outerProperty: "Hello",
    innerObject: {
        innerProperty: "World"
    }
};

console.log(nestedObject.innerObject.innerProperty); 


// JavaScript: Objects methods, "this"

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); 

function greet() {
    console.log(this === window);
}

const person2 = {
    name: "Alice",
    greet: greet
};

greet(); 
person2.greet(); 

const arrowFunc = () => {
    console.log(this === window);
};

arrowFunc();


// JavaScript: Object references and copying


const obj1 = { value: 10 };
const obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20

const original = { a: 1, b: 2 };
const copy1 = Object.assign({}, original);

const copy2 = { ...original };

const copy3 = JSON.parse(JSON.stringify(original));

const _ = require('lodash');
const originalNested = { a: { b: 2 } };
const deepCopy = _.cloneDeep(originalNested);
