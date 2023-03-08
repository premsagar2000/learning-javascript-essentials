//Functions

//Function Declaration 
function addNumbers(){
    var addition = 2+190;
    console.log("Addition : "+ addition);
}


addNumbers(); // Calling a function



// Another function with two parameters num1 and num2

function add(num1, num2){
    var addition = num1+num2;
    console.log("Addition of "+num1+" and "+num2+" is : "+ addition);
}


add(10,5); // Passing 10 and 5 as arguments
add(1460,363); // Passing 1460 and 363 as arguments 



// Another function for multiplication of two numbers

function multiply(num1, num2){
    var multiplication = num1*num2;
    return multiplication; // returning multiplication of num1 and num2
}

var multiplication = multiply(5,6); // Storing the retruned value in varibale and then console it out.
console.log("Multiplication of two numbers : "+ multiplication);

console.log("Multiplication is : "+multiply(4,6)); // function calling inside the console.log


