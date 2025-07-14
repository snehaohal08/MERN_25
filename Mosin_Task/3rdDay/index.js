// Difference bet let,const,var
// variable reateion sathi use hot
// var = function and global scope ,It can be declared without initialization.,It can be updated and re-declared in the same scope.It can be declared without initialization.
// let = bolck scope hota he , It can be updated but cannot be re-declared in the same scope.It can be declared without initialization.
// const = constant hota he , It can neither be updated or re-declared in any scope.It cannot be declared without initialization. 

// {
//   let a = 10;
//   console.log(a);
// }
// let a=10
// a="sneha"
// console.log(a);
// if (true) {
//     let age = 30; 
//     console.log(age); 
// }
// console.log(age)

// but in const are not allowed
// const a=10
//  a="sneha"  //error=Assignment to constant variable.
// console.log(a);

// const student ={
//     id:"101",
//     name:"sneha",
//     "mobile no":"9685747485",
//     age:"21",
//     print:function(){
//         console.log("hii sneha");
//     }
// }
// console.log(student);
// student.print()

// array of object
// const stud =[
//     {id:"1",name:"sneha","Mobile no":"9685748574",age:21},
//     {id:"2",name:"mosin","Mobile no":"9685748574",age:22}
// ];
// console.log("using map")
// stud.map((item)=>{
//     console.log(item);
// })

// let arr = [10, 20, 30];
// let squreArr = arr.map((num) => {
//   console.log(num * num);
// });
// console.log(squreArr);

// Hoisting in JavaScript is a behavior where variable and function declarations are
//  moved to the top of their scope (global or function) before the code is executed.
//   { id: "1", name: "Sneha", "Mobile no": "9685748574", age: 21 },
//   { id: "2", name: "Mosin", "Mobile no": "9685748574", age: 22 },
//   { id: "3", name: "Hrushi", "Mobile no": "9785748574", age: 25 },
//   { id: "4", name: "Rohit", "Mobile no": "9678744741", age: 30 },
//   { id: "5", name: "Rahul", "Mobile no": "9495784578", age: 25 },
//   { id: "6", name: "Prajwal", "Mobile no": "9010457869", age: 26 },
//   { id: "7", name: "Akshata", "Mobile no": "9230457869", age: 29 }
