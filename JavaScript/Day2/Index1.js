
// 1 write a code to calculate the area of a circle 
function circle(r){
    console.log("Area of the circle is:",3.14*r*r);
}
circle(5);
// 2 write a code to calculate the area of a rectangle
function rectangle(l, b){
    console.log("Area of the rectangle is:", l * b);
}
rectangle(10, 5);
// 3 write a code to calculate the area of a triangle
function triangle(b, h){
    console.log("Area of the triangle is:", 0.5 * b * h);
}
triangle(10, 5);
// 4 write a code to calculate the volume of a cylinder
function VolumeOfCylinder(r,h){
    console.log("Volume of the cylinder is:", 3.14 * r * r * h);
}
VolumeOfCylinder(5, 10);

// 5 write a program to find the volume and surface area of cuboid
function surfaceofCuboid(l,b,h){
    console.log("Surface area of the cuboid is:", 2 * (l * b + b * h + l * h));
}
surfaceofCuboid(10, 5, 8);

// 6 Write a program to print the area of triangle if three sides are given
function areaofTriangle(a, b, c) {
    console.log("Area of the traingle is:",a + b + c/2);
}
areaofTriangle(3, 4, 5);
console.log("********************************************************************************************************");
// 7 Write a program to read the marks of 5 subjects and display the total, percentage, and average
function CalculateMarks(m1,m2,m3,m4,m5){
    let total = m1 + m2 + m3 + m4 + m5;
    let percentage = (total / 500) * 100;
    let avg=total/5
    console.log("Total marks:", total);
    console.log("Percentage:", percentage);
    console.log("Average:",avg );
}
CalculateMarks(85, 90, 78, 88, 92);
console.log("********************************************************************************************************");

// 8 Write a program to find the factorial of a number
function factorial(n) {
    let fact = 1;  
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("Factorial of", n, "is:", fact);

}
factorial(5);

// 9 Write a code to swap the numbers 
function swapNumbers(a, b) {
    console.log("Before swapping: a =", a, ", b =", b);
    let t=a;
    a=b;
    b=t
    console.log("After swapping: a =", a, ", b =", b);
}
swapNumbers(10, 20);

