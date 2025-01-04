// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number")
//     }
//     console.log(element);

// }  

// for (let i = 0; i <= 10; i++) { // this gets run as i = 1
//     console.log(`Outer loop value: ${i}`);
    
//     for (let j = 0; j <= 10; j++) { // this get run till i = 10 then control reaches to outer loop
//     console.log(i + '*' + j + ' = ' + i*j)
  
//     }
    
// }

for (let index = 0; index <= 20; index++) {
    if(index === 5) {
        console.log("5 is best number");
        continue; // it will just print 5 is best number and countinue to print rest numbers
        
    }
    console.log(`value of i is ${index}`);

}   