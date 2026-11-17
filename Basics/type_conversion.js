let age = window.prompt("How old are you?");

//age+=1; this appends 1, string concatenation, it does not add 1, so we do the following

age = Number(age); //accept user input, then we reassign age, converts another data type like string/boolean into a number
age+=1;

console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); //gives NaN
y = String(y); //already a string so it does nothing
z = Boolean(z); //returns true as it takes "pizza" as a value that is present and therefore true
console.log(x, typeof x, y, typeof y, z, typeof z);
