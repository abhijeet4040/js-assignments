// "use strict" used to indicate the code is being executed in strict mode.
// in strict mode you cannot use undefined variables.

// using strict mode globally.

"use strict";
x=14;
console.log(x)

// x is undefiined causing an error


// using strict mode locally

y=17;   // this wont cause an error

myFunction()
function myFunction(){
    "use strict"   
    x = 14;    // this will cause an error
}


//Using an object, without declaring it, is not allowed:

"use strict";
x = {p1:10, p2:20};      // This will cause an error

//Deleting a variable (or object) is not allowed.

"use strict";
let x = 3.14;
delete x;                // This will cause an error


//Deleting a function is not allowed.

"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 
