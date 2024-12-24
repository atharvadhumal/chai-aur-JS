const tinderUser = {}
    tinderUser.id = "123abc"
    tinderUser.name = "sammy"
    tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "atharva@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Atharva",
            lastname: "Dhumal",

        }
    }

}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d" }

const bothObj = {...obj1, ...obj2}

// console.log(bothObj);

console.log(tinderUser);
// console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));


