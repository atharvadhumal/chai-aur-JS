// const user = {
//     username: "atharva",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log(`username: ${this.username}`) //as we needed username from outside of this scope we used this.
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}   

const userOne = new User("atharva", 12, true)
const userTwo = new User("chaiAurCode", 11, false)
console.log(userOne); // when we print this it overwrites userOne values so we add new keyword
console.log(userTwo);