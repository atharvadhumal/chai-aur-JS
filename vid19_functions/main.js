

// function sayMyName (){
//     console.log("A");
//     console.log("T");
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("V");
//     console.log("A"); 
// }
// sayMyName()


// function addTwoNumbers(num1, num2) {
//     console.log(num3 = num1 + num2)
// }

function addTwoNumbers(num1, num2) {
    let result = num1 + num2
    return result;
}

const result = addTwoNumbers(1,2)
// console.log("result ", result) // here the result will come as we added return 

function loginUserMessage(username = "sammy") { //when any username is not passed then this will be printed
    return `${username} just logged in`
}
// console.log(loginUserMessage()) //here we wil not pass a value so it will show underfined
// for that to not show underfined we will add a user that will be printed if any cases of undefined value comes




// function loginUserMessage(username) {
//     if(!username){
//         console.log("Please enter a UserName")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());

function calculateCartPrice(...number1) { 
    return number1
}
// console.log(calculateCartPrice(200, 500, 600));

const user = {
    username: "atharva",
    price: 299
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)