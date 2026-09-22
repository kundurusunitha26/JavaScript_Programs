/*function greet() {
    console.log("Hi Sumi");
}
greet();



// function with parameters
function greet(name) {
    console.log("Hi Sumi" + name);
}
greet("Lucky");


// function with return type
function greet(a,b) {
    return a + b;
}
let a = greet(10,20);
console.log(a);

//Arrow function
const add = (a,b) => {
    return a+b;
}
let a = add(20,30);
console.log(a);


// (OR)
*/
const add = (a,b) => a + b;
const sub = (c,d) => c - d;
let sum = add(20,30);
let borrow = sub(20,10);
console.log(sum);
console.log(borrow);
/*
// function example marks

function grades(marks) {
    if (marks > 90) {
        return "a";
    }
    else if (marks > 75) {
        return "b";
    }
    else if (marks > 60) {
        return "c";
    }
    else {
        return "f";
    }

}
let marks = 60;
console.log("Marks: " + grades(marks));



function withdraw(balance,amount) {
    if (amount <= balance) {
        return "Withdraw Successfull";
    } 
    return "Insufficient Balance";
}
console.log(withdraw(10000,3000));


function calculateBonus(salary) {
    return salary * 0.10;
}
console.log(calculateBonus(50000));


let company = "ABC technologies";
function employeeDetails(){
    let employeeName = "Suni";
    console.log("Company:", company);
    console.log("Employee:", employeeName);
    if (true) {
        let salary = 50000;
        const department = "CSE";
        console.log("Salary:",salary);
        console.log("Department:", department);
    }
}
employeeDetails();
console.log("Company:", company);
*/