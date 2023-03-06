var person = {
    firstName: "Prem",
    age:21,
    isFemale: false,
    balance:1000.234,
    dob: new Date (2000,6,31).toJSON(),
    address: {
        city:"Mithi",
        postalCode:"65200" 
    }
};


console.log(person); // Accessing complete object
console.log(person.firstName); // Accessing firstName
console.log(person.age);  // Accessing age
console.log(person.isFemale); // Accessing isFemale ?
console.log(person.balance); // Accessing balance
console.log(person.dob); // Accessing date of birth
console.log(person.address); //Accessing address
console.log(person.address.city); // Accessing city 
console.log(person.address.postalCode); // Accessing postalCode

console.log(Object.values(person)); // This will return an array containing all values inside person
console.log(Object.keys(person)); // This will return an array containing all keys inside person

//console.log(JSON.stringify(person)); 

var string = JSON.stringify(person); // String representation of object
console.log(string);

console.log(JSON.parse(string)); // Converting string representation into JavaScript object