//Loops

//Using for Loop
//for i 
for(var i = 0; i<=10; i++){
    console.log(i); // Printing values of i after each iteration.
}
console.log();

console.log("for i");
console.log();
var names = [
    "Prem",
    "Sagar",
    "Aneeket",
    "Mahtab",
    "Sahil",
    "Dileep",
    "Danish"
];

for(var i=0;i<names.length;i++){
    console.log(names[i]);
}

//Other construct to iterate through an array

//for of 
console.log();
console.log("for of");
console.log();
for (const name of names){
    console.log(name);
}

//forEach
//Using arrow function
console.log();
console.log("forEach"); 
console.log();
names.forEach(name => {
    console.log(name);
});

//Using Callback 
console.log()
names.forEach(function(name){
    console.log(name);  
})
