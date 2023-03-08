//Const

console.log("Using let keyword");
// As we can observe that we can reassign varaible declared by let keywords
let brand1 = "Nike";
console.log("Brand : "+ brand1);

brand1 = { };
console.log("Brand : "+ brand1);

brand1 = 10;
console.log("Brand : "+ brand1);

brand1 = function(){
    return "Hello";
}
console.log("Brand : "+ brand1());

console.log();
console.log("Using Const keyword");

// Therefore to avoid this, we can use const keyword to declare variables that can't be reassigned. 
const  brand2 = "Nike";
console.log("Brand : "+brand2);
//brand2 = "CA";  So we can reassign the const variables.


//But we can append the properties to const variable like below
console.log();
const brandObject = {};
brandObject["brand"] = "Nike";
console.log(brandObject);


console.log();
console.log("Deleting the brand property by using delete keyword");
delete brandObject.brand;
console.log(brandObject);