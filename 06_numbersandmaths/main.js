// const balance = new Number(100)

// console.log(balance.toString().length); //toString convert number to string and then .lentgh gives length of string
// console.log(balance.toFixed(2)); // gives only to decimals after . eg 100.00
 
// console.log(Math.random());
    // console.log(Math.floor(Math.random()*10) + 1); //sometimes math.random maybe give 0.032223 when it multipilied by 10 it will be 0.3 so to avoid that case we add +1 for safety
    //math floor rounds up the value

const min = 10
const max = 20

    console.log(Math.floor(Math.random() * (max - min + 1) + min)) // we add 1 so that zero value doesnt come and we added min value that is 10 so that number comes above 10   