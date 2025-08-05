// pree increment me hum pehle increement karto then value change hote  and
// post increment me hum  // pehle value change hote then increement karto
// same as pre decrement and post decrement

//Pre increment/decrement
// let x = 10;
// let y = 4;

// console.log(++x);    // 11
// console.log(--y);    // 3
// console.log(x);      // 11
// console.log(y);      // 3

// Post increment/decrement
// let a = 10;
// let b = 4;
// console.log(a++);      // 10
// console.log(b--);      // 4

// console.log(a);        // 11
// console.log(b);        // 3

// **********************************Assignment Operators**********************************
// Assignment operators are used to assign values to variables.
// let firstName = "sneha";
// let lastName = "ohal";
// let age = 22;

// console.log(firstName);      // sneha
// console.log(lastName);       // ohal
// console.log(age);            // 22

// **********************************comparision Operators**********************************
// Comparision operators are used to compare two values and return a boolean value.(==,=,===,!=,!==,>,<,>=,<=)
// Strict Equality v/s Loose Equality
// Strict equality is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.(both value is same and data type is also same)
// Loose equality is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.(only value is same)

// console.log(5 == "5");    // true (loose equality)
// console.log(5 === "5");   // false (strict equality)
// console.log("sneha"==="sneha");  // both value and data type is same that why is true
// console.log("sneha"==="ohal");   //both value and data type are not  same that why is false
// console.log(5!=5);
// console.log(5==5);

// ***********************************Ternary Operators**************************
// Ternary operator is a concise way to write conditional statements, it is widely used in JavaScript.
// It is also known as conditional operator. It has three parts: a condition, statement to execute if the condition is true and the statement to execute if the condition is false.
//********************************  (SYNTAX ) **************************************************
// (condition) ? (statement1) : (statement2);
// let age = 5;
// let result = age > 18 ? "you can vote" : "you can not vote";
// console.log(result);  
// let no =11
// let result = (no % 2 === 0) ? "Even" : "Odd";
// console.log(result);  

// **********************************Logical Operators**********************************
// Logical operators are used to combine two or more conditions and return a boolean value.(and =&&,or= ||,not =!)
// let ans = 5;
// let result = (ans > 0 && ans < 10) ? "valid" : "invalid";
// console.log(result); 
// let num1 = 0;
// let num2 = 1;
// let num3 = 1;

// console.log(num1 && num2);    // 0
// console.log(num2 && num3);    // 1
// console.log(num1 && num3);    // 0

// let num1 = 0;
// let num2 = 1;
// let num3 = 0;

// console.log(num1 || num2);    // 1
// console.log(num2 || num3);    // 1
// console.log(num1 || num3);    // 0


//************************************************Bitwise Operators************************************************
// Bitwise operators are used to do manipulation of individual bits within the binary representation of numbers. There are several bitwise operators are used in JavaScript(Bitwise AND (&))

// // 6.Convert marks into grade using if...else if.
// function grade(marks){
//     if(marks>=90)
//         console.log("Grade A");
//     else if(marks>=80 && marks<90)
//         console.log("Grade B");
//     else if(marks>=70 && marks<80)
//         console.log("Grade C");
//     else
//         console.log("Grade D");
// }
// grade(85);

// 	Use if inside a function and return "pass" or "fail".

// function checkPassFail(marks) {
//     if (marks >= 35) {
//         return "pass";
//     } else {
//         return "fail";
//     }
// }
// console.log(checkPassFail(45)); 
// console.log(checkPassFail(25)); 

// let year=2000;
// let leapyear = (year%4===0 && year%100!==0) || (year%400===0) ? "Leap Year" : "Not a Leap Year";
// console.log(leapyear);

// for loop
// for(i=1;i<=10;i++){
//     console.log("Number:", i);
    
// }
// print the eve and odd numbers from 1 to 10
// for(i=1;i<=10;i++){
//     if(i%2===0){
//         console.log("Even Number:", i);
//     } else {
//         console.log("Odd Number:", i);
//     }
// }

// factorial of a number using for loop
// function fact(n){
//     let f=1;
//     for(let i=1;i<=n;i++){
//         f*=i;
//     }
//     console.log("Factorial = ",f);
// }
// fact(5);


// get the string and print the each charatcer using loop
// let str="sneha ohal";
// for(let i=0;i<str.length;i++){
//     console.log("Character at index", i, "is", str[i]);
// }

// prime no
// function isprime(num){
//     if(num<=1){
//         return("no is not prime");
//     }
//     for(let i=2;i<num;i++){
//         if(num % i ===0){
//             return("no is not prime");
//         }
//     }
//     return("no is prime");
// }
// console.log(isprime(7));
// console.log(isprime(10));

// reverse no
// function reverseNumber(num) {
//     let rev = 0;
//     while (num > 0) {
//         let r = num % 10;
//         rev = rev * 10 + r;
//         num = Math.floor(num / 10);
//     }
//     return rev;
// }
// console.log(reverseNumber(123));

// // palindrome no
// function palindrome(n){
//     let rev = 0;
//     let original = n;   
//     while (n > 0) {
//         let r = n % 10;
//         rev = rev * 10 + r;
//         n = Math.floor(n / 10);
//     }
//     if (original === rev) {
//         return "Number is a palindrome";
//     }
//     return "Number is not a palindrome";
// }
// console.log(palindrome(121));

// palindrome string
// function isPalindromeString(str) {
//     let reversedStr = str.split('').reverse().join('');
//     if (str === reversedStr) {
//         return "String is a palindrome";
//     }
//     return "String is not a palindrome";
// }
// console.log(isPalindromeString("madam"));

// Armstrong number

// function isArmstrong(num) {
//     let sum = 0;
//     let original = num;
//     while (num > 0) {
//         let r = num % 10;
//         sum += r * r * r; 
//         num = Math.floor(num / 10);
//     }
//     if (sum === original) {
//         return "Number is an Armstrong number";
//     }
//     return "Number is not an Armstrong number";
// }
// console.log(isArmstrong(153)); 

//array elelmt ki addtion
// arr =[1,2,3,4]
// let sum =0
// arr.map((item) => {
//     sum = sum+item;
// });
// console.log("Sum of array elements is:", sum);

// function occurence(arr ,n){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === n) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(occurence([1,2,1,2,1,4], 1));

// function occurencestr(str,ch){
//     let count =0;
//     for(let i=0;i<str.length;i++){
//         if(str[i] === ch) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(occurencestr("sososo", "s"));


// output =20+20+20=60
let student =[
    {name:"sneha",marks:20},
    {name:"mosin",marks:20},
    {name:"hrushi",marks:20}
]
let sum =0
student.map((item)=>{
    sum =sum+item.marks;
})
console.log("Total marks:", sum);
