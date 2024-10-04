const { log } = require("console");
const check = require(`./connect`);
console.log("value of x", check.x);
console.log("value of y", check.y);

//using the filter method we get all element of array that follow the  condition that given by filter method though a callback;

const arr = [2,3,5,4,7,6,8,9,0];
const result = arr.filter((item)=> {
    return item > 6;
});

console.log(result)
