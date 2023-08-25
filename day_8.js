// JavaScript: Object.keys

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const keys = Object.keys(person);
console.log(keys); 

for (const key of keys) {
    console.log(`${key}: ${person[key]}`);
}


// JavaScript: Destructring assignment

// Destructuring Objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

const { firstName, lastName } = person;

console.log(firstName); 
console.log(lastName);  


const colors = ["red", "green", "blue"];

const [firstColor, secondColor] = colors;

console.log(firstColor);  
console.log(secondColor); 


const personWithDefaults = {
    firstName: "John",
    age: 30
};

const { firstName, lastName = "Doe" } = personWithDefaults;

console.log(firstName); 
console.log(lastName);  /


const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); 
console.log(second); 
console.log(rest);   




const currentDate = new Date();
const specificDate = new Date("2023-08-25");
const specificDateTime = new Date(2023, 7, 25, 10, 30);


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

const modifiedDate = new Date();
modifiedDate.setFullYear(2024);
modifiedDate.setDate(modifiedDate.getDate() + 7);

const start = new Date("2023-08-25");
const end = new Date("2023-09-10");
const timeDifference = end - start;


// JavaScript: JSON methods, toJSON

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
const jsonString = JSON.stringify(person);
console.log(jsonString);

const jsonString = '{"firstName":"John","lastName":"Doe","age":30}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.firstName);
const customObject = {
    value: 42,
    toJSON: function() {
        return "Custom Value: " + this.value;
    }
};
const jsonString = JSON.stringify(customObject);
console.log(jsonString);


// JavaScript: setInterval, setTimeout

function sayHello() {
    console.log("Hello!");
}

setTimeout(sayHello, 2000);

let count = 0;

function incrementCounter() {
    console.log("Count:", count);
    count++;
}

const intervalId = setInterval(incrementCounter, 1000);

const timeoutId = setTimeout(someFunction, 1000);
clearTimeout(timeoutId);

const intervalId = setInterval(someFunction, 1000);
clearInterval(intervalId);

setTimeout(function() {
    console.log("Executed after current event loop cycle.");
}, 0);


// JavaScript: VAR vs LET vs CONST

function varExample() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}

function letExample() {
    if (true) {
        let y = 20;
        console.log(y);
    }
}

const z = 30;

varExample();
letExample();


// JavaScript: Spread operator

const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];
const mergedNumbers = [...numbers, 4, 5];

const person = { firstName: "John", lastName: "Doe" };
const copiedPerson = { ...person };
const updatedPerson = { ...person, age: 30 };

function add(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
const sum = add(...numbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };

const nestedArray = [[1, 2], [3, 4]];
const copiedNestedArray = [...nestedArray];

const nestedObject = { outer: { inner: "value" } };
const copiedNestedObject = { ...nestedObject };


// JavaScript: Callbacks

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

function fetchData(callback) {
    setTimeout(function() {
        const data = "Fetched data from server";
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);

asyncOperation1(function(result1) {
    asyncOperation2(result1, function(result2) {
        asyncOperation3(result2, function(result3) {
        });
    });
});

// JavaScript: Promises

// Creating a Promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = "Fetched data from server";
        resolve(data);
    }, 2000);
});

// Using Promises
fetchData.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

// Chaining Promises
fetchData
    .then(data => {
        console.log(data);
        return data.toUpperCase();
    })
    .then(upperData => {
        console.log(upperData);
    })
    .catch(error => {
        console.error(error);
});

// Creating Resolved or Rejected Promises
const resolvedPromise = Promise.resolve("This is resolved.");
const rejectedPromise = Promise.reject("This is rejected.");

resolvedPromise.then(data => {
    console.log(data);
}).catch(error => {
    console.error(error);
});

rejectedPromise.catch(error => {
    console.error(error);
});

// Async/Await with Promises
async function fetchDataAsync() {
    try {
        const data = await fetchData;
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();


// JavaScript: Promises Chaining

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                id: 1,
                username: "john_doe"
            };
            resolve(userData);
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" }
            ];
            resolve(posts);
        }, 1500);
    });
}

function fetchComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = [
                { id: 1, text: "Comment 1" },
                { id: 2, text: "Comment 2" }
            ];
            resolve(comments);
        }, 1200);
    });
}

fetchUserData()
    .then(userData => {
        console.log("User Data:", userData);
        return fetchPosts(userData.id);
    })
    .then(posts => {
        console.log("User Posts:", posts);
        return fetchComments(posts[0].id);
    })
    .then(comments => {
        console.log("Post Comments:", comments);
    })
    .catch(error => {
        console.error("
