// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is completed')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){ // here we connected resolve w .then and then promised is consumed
//     console.log("promise consumed");
    
// })

//can be written as also

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async task 2 done");
    
// })  

// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(function(){
//     resolve({username: "chai", email: "atharva@gmail.com"}) // this passed in resolve is accessed down
//     },1000)
// }) 

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error) {
//              resolve({username: "atharva", password: "1234"}) // when error is false this will get printed
//         } else {
//             reject('Error: Something went wrong') //when error is true then this will get printed
//         }
//     },1000)
// })

// const username = promiseFour.then( (user)=> {  //.then to get values and .catch to catch errors
//      console.log(user); 
//      return user.username
// })
// .then( (username)=> { 
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
    
// })
// .finally(()=> console.log("finally error is resolved or rejected"))

// const promiseFive= new Promise( (resolve, reject)=>{
//         setTimeout(function(){
//         let error = false
//         if(!error) {
//              resolve({username: "Javascript", password: "JS123 "}) // when error is false this will get printed
//         } else {
//             reject('Error: Javascript went wrong') //when error is true then this will get printed
//         }
//     },1000)
// })

// async (consumePromiseFive)=> {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log("this is error");
        
//     }

// }

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // we added await as it takes time to fetch info from the link
//         //the response from fetch will be in string so this made it into JSON
//         console.log(data)
    
//     } catch (error) {
//         console.log("this is error", error);
//     }
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=> {
    return response.json() 
})
.then((data)=> {
    console.log(data);
    
})
.catch((error)=> console.log(error))
