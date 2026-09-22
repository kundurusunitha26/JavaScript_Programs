/*for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
    
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


let fruits = ["Apple","Banana","Mango"];
for (let fruit of fruits) {
    console.log(fruit);
}
*/

let student = {name: "Suni",age: 20,course: "JavaScript"};
for (let key in student) {
    console.log(key, ":",student[key]);
}