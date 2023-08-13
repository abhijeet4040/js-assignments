// JavaScript String Length

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// JavaScript String slice()

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

// JavaScript String substring()

var str = "Hello, World!";
var subStr1 = str.substr(7);      // "World!"
var subStr2 = str.substr(0, 5);   // "Hello"
var subStr3 = str.substr(-6);     // "World!"
var subStr4 = str.substr(7, 3);   // "Wor"


// Replacing String Content

var str = "Hello, world! Hello, universe!";
var newStr = str.replace("Hello", "Hi");
console.log(newStr); // "Hi, world! Hello, universe!"

var str2 = "apple apple orange apple";
var newStr2 = str2.replace(/apple/g, "banana");
console.log(newStr2); // "banana banana orange banana"

// String replaceAll()

var str = "apple apple orange apple";
var newStr = str.replaceAll("apple", "banana");
console.log(newStr); // "banana banana orange banana"

var str = "Hello, hello, HELLO";
var newStr = str.replaceAll(/hello/gi, "Hi");
console.log(newStr); // "Hi, Hi, Hi"

// String toUpperCase()

var str = "Hello, World!";
var upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // "HELLO, WORLD!"

// String toLowerCase()

var str = "Hello, World!";
var lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); // "hello, world!"

// String concat()

var str1 = "Hello, ";
var str2 = "World!";
var combinedStr = str1.concat(str2);
console.log(combinedStr); // "Hello, World!"


// String trim()

var str = "   Hello, World!   ";
var trimmedStr = str.trim();
console.log(trimmedStr); // "Hello, World!"

// String trimStart()

var str = "   Hello, World!   ";
var trimmedStartStr = str.trimStart();
console.log(trimmedStartStr); // "Hello, World!   "

// String trimEnd()

var str = "   Hello, World!   ";
var trimmedEndStr = str.trimEnd();
console.log(trimmedEndStr); // "   Hello, World!"

// String padStart()

var str = "5";
var paddedStr = str.padStart(4, "0");
console.log(paddedStr); // "0005"

// String padEnd()

var text = "Hello";
var paddedText = text.padEnd(10, "*");
console.log(paddedText); // "Hello*****"

var name = "John";
var paddedName = name.padEnd(10, " ");
console.log(paddedName); // "John      "

// String charAt()

var str = "Hello, World!";
var charAtIndex = str.charAt(7);
console.log(charAtIndex); // "W"

// String charCodeAt()

var str = "Hello, World!";
var charCode = str.charCodeAt(7);
console.log(charCode); // 87

// String split()

var str = "apple,banana,orange";
var fruits = str.split(",");
console.log(fruits); // ["apple", "banana", "orange"]

var sentence = "Hello, how are you today?";
var words = sentence.split(" ");
console.log(words); // ["Hello,", "how", "are", "you", "today?"]

var path = "folder/subfolder/file.txt";
var parts = path.split("/");
console.log(parts); // ["folder", "subfolder", "file.txt"]

var longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
var sentenceArray = longText.split(" ", 5);
console.log(sentenceArray); // ["Lorem", "ipsum", "dolor", "sit", "amet,"]



