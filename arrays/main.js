// Arrays part 2


// const marvelHeros = ["spiderman", "thor" , "hulk"]
// const dcHeros = ["joker", "batman" , "superman"]

// marvelHeros.push(dcHeros);
// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// const allHeros = [...marvelHeros, ...dcHeros] //using spread  
// console.log(allHeros);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const realArray = anotherArray.flat(Infinity) //Infinity or we can give a number like 3 4 for depth in which array is gng to be sovled
// console.log(realArray);

console.log(Array.isArray("Atharva")) //will give boolean is this is a array or not
console.log(Array.from("Hitesh")) //will make this an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //will make a array of these values