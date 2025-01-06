// const coding = ["java", "ruby", "javascript", "swift", "python"]

// const values = coding.forEach( (items)=> {
//     console.log(items);
    
// } )
// console.log(values);


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.filter( (num)=> {
//     return num > 4; //num > 4 is condtion

// } ) 

// console.log(newNum);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// let userBook = books.filter( (bk) => bk.genre === "History"  )

// userBook = books.filter( (bk) => {
//     return bk.publish >= 1995 && bk.genre === "History"
// })

// console.log(userBook);

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const addTen = myNumbers.map( (num) => num + 10 )
// console.log(addTen);

////example of chaining means putting aps,filter together

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers
//                         .map( (num) => num * 10 )
//                         .map((num) => num + 1 )
//                         .filter((num => num >= 40))

// console.log(newNum);


//////REDUCE/////////////////////


// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)



// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)  //0 is accumulator means the start
console.log(totalPrice);
