// Break and Continue

//Break Statement
for(var i=0;i<10;i++){
    console.log(i);
    if(i==5){
        break; // It breaks when i=5
    }
}

console.log();

//Continue
for(var i=0;i<10;i++){
    if(i<5){
        continue;
    }
    console.log(i);
}