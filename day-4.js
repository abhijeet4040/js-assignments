// JavaScript: Conditional branching: if, ?

const age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not yet an adult.");
}

const age = 18;
const message = age >= 18 ? "You are an adult." : "You are not yet an adult.";
console.log(message);

const temperature = 25;
const isRaining = true;

if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature <= 30 && temperature > 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a bit chilly.");
}

const weatherMessage = isRaining ? "Bring an umbrella." : "Enjoy the day!";
console.log(weatherMessage);

// JavaScript: Logical Operators

const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You are eligible to drive.");
} else {
    console.log("You are not eligible to drive.");
}

const isStudent = true;
const isEmployee = false;

if (isStudent || isEmployee) {
    console.log("You qualify for a discount.");
} else {
    console.log("Regular price applies.");
}

const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in to access the content.");
} else {
    console.log("Welcome to the members area!");
}

const isPremiumMember = true;
const purchaseAmount = 150;

if ((isPremiumMember || purchaseAmount > 100) && age >= 18) {
    console.log("You qualify for a special offer.");
} else {
    console.log("Regular pricing applies.");
}