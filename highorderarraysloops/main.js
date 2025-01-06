// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) { //means const number which are there in array defined in the above line
//     console.log(num);
    
// } 

// const greetings = "Hello World!"
// for (const sayHello  of greetings) {
//     console.log(sayHello);
    
// }


//MAPS

// const map = new Map()
// map.set("IN", "India")
// map.set("US", "United States of America")
// map.set("FR", "France")

// for (const [key, value] of map) { //key, value destructures the array 
//     console.log(key, ":-", value);
    
// }

// const myObj = {
//     'game1' : "NFS",
//     'game2' : 'RDR'
// }
// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
    
// }

// const myObj = {
//     js: "Javascript",
//     cpp: "C++",
//     swift: "swift my apple"

// }
// for (const key in myObj) {
//     console.log(`${key} is shortcut for ${myObj[key]}`);
    
// }

const programming = ["javascript", "swift", "ruby", "typescript"]

for (const key in programming) { //this is for in loop 
   console.log(programming[key]); //it printed keys number like 1, 2, 3, 4
   
}
