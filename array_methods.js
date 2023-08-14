// Array length

const myArray = [1, 2, 3, 4, 5];
const length = myArray.length;
console.log(length);

const myArray = [10, 20, 30];
console.log(myArray.length);

const myArray = [1, 2, 3];
console.log(myArray.length);

// Array toString()

const myArray = [1, 2, 3, 4, 5];
const arrayString = myArray.toString();
console.log(arrayString);

// Array pop()

my_list = [1, 2, 3, 4, 5]
last_element = my_list.pop()
print(last_element)  
print(my_list)

// Array push()

let myArray = [1, 2, 3, 4, 5];
let lastElement = myArray.pop();
console.log(lastElement);  
console.log(myArray); 

// Array shift()

let myArray = [1, 2, 3, 4, 5];
let firstElement = myArray.shift();
console.log(firstElement);  
console.log(myArray);

// Array unshift()

let myArray = [2, 3, 4, 5];
myArray.unshift(1);  
console.log(myArray);

myArray.unshift(-1, 0);  
console.log(myArray);    

// Array join()

const fruits = ['apple', 'banana', 'orange', 'grape'];

const joinedString = fruits.join();
console.log(joinedString);


const colors = ['red', 'green', 'blue', 'yellow'];

const joinedString = colors.join('-');
console.log(joinedString);


const numbers = [1, 2, 3, 4, 5];

const joinedString = numbers.join('');
console.log(joinedString);


const words = ['Hello', 'world', 'from', 'JavaScript'];

const joinedString = words.join(' ');
console.log(joinedString);


const arrayLike = { 0: 'one', 1: 'two', 2: 'three', length: 3 };

const joinedString = Array.prototype.join.call(arrayLike, '-');
console.log(joinedString);


// Array concat()

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenatedArray = array1.concat(array2);

console.log(concatenatedArray);


const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

const concatenatedArray = array1.concat(array2, array3);

console.log(concatenatedArray);


const array1 = [1, 2, 3];
const additionalValues = [4, 5, 6];

const concatenatedArray = array1.concat(additionalValues);

console.log(concatenatedArray);


const array1 = [1, 2];
const nestedArray = [3, [4, 5]];

const concatenatedArray = array1.concat(nestedArray);

console.log(concatenatedArray);


// Array flat()

const nestedArray = [1, [2, 3], 4, [5, 6]];

const flattenedArray = nestedArray.flat();

console.log(flattenedArray);


const deeplyNestedArray = [1, [2, [3, [4, 5]]]];

const partiallyFlattenedArray = deeplyNestedArray.flat(2);

console.log(partiallyFlattenedArray);


// Array splice()

const numbers = [1, 2, 3, 4, 5];


numbers.splice(2, 0, 'x', 'y');

console.log(numbers);


const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

const removedElements = fruits.splice(1, 2);

console.log(fruits); 
console.log(removedElements);


const colors = ['red', 'green', 'blue'];

colors.splice(1, 1, 'yellow');

console.log(colors);


const letters = ['a', 'b', 'c', 'd', 'e'];

const removedElements = letters.splice(2, 2);

console.log(letters); 
console.log(removedElements);


// Array slice()

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();

console.log(copiedArray);



const originalArray = [1, 2, 3, 4, 5];

const copiedArray = originalArray.slice(1, 4);

console.log(copiedArray);


const originalArray = [1, 2, 3, 4, 5];

const copiedArray = originalArray.slice(-3);

console.log(copiedArray);


const originalArray = [1, 2, 3, 4, 5];

const copiedArray = originalArray.slice(0, 2);

console.log(copiedArray);


const originalArray = [1, 2, 3, 4, 5];

const copiedArray = originalArray.slice(0, 2);

console.log(copiedArray);