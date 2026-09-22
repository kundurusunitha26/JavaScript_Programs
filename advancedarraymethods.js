/*const numbers = [1,2,3,4,5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
console.log(numbers);


let numbers = [10,20,30,40,50];
let result = numbers.filter(function(num) {
    return num > 20;
});
console.log(result);
*/

let numbers = [10,20,30,40,50];
let sum = numbers.reduce(function(total,num) {
    return total + num;
},0);
console.log(sum);