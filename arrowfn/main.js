// const user = {
//     username: "atharva",
//     price: 999,

//     welcomeMessage: function(){
//          console.log(`${this.username} , Welcome to Website `);
//          console.log(this);
        
     
// }
// }
// user.welcomeMessage() // here this is refered as the contxt in the curly braces     
// user.username = "juhi" // we changed the username here to juhi
// user.welcomeMessage()  //so when this gets printed the username will get printed as juhi

// console.log(this);

// function chai() {
//     console.log(this);
    
// }
// chai()


////////////////////arrow function///////////////////////

// function chai() {
//     let userName = "hitesh";
//     console.log(userName);
     
// }
// chai()

// const chai = () => {
//     let userName = "atharva"
//     console.log(userName);
    
// }
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4))


const addTwo = (num1 , num2) => num1 + num2
console.log(addTwo(3, 4))