// Hoisting
var i;
for(i=0;i<=10;i++){
    console.log(i);
}

console.log("Value of i outside the loop : "+ i); // It is accessible outside the for loop too.

console.log();
//Hoisting
number2 = 5;
console.log(++number2);
var number2;