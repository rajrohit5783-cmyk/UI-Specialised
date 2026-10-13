// console.log("Rohit")
// console.log(2)
// console.log()
// // alert("Hi!")

// Name = "Rohit"
// console.log(Name)

// var roll_number = 1900;
// console.log(roll_number);
// roll_number = 1798;
// console.log(roll_number);

// let n = 5;
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//     factorial = factorial * i;
// }
// console.log("Factorial =", factorial);

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;

// }

// let A ;
// console.log(A);

// function multiply(a,b) {
//     return a*b;
// }
// let data = multiply(2,4);
// console.log(data);

// TypeOf Function

// let Name = "Rohit";
// let A = null;
// let B = NaN;
// console.log(typeof Name);
// console.log(typeof(Name));
// console.log(typeof A);
// console.log(typeof B);

//Type Casting
// let age = "12";
// let data_new = Number(age);
// console.log(data_new);
// console.log(typeof data_new);

// function greet(){
//     return "Hello"
// };

// function multiply(a,b) {
//         return {};
// };

// Multiplication = multiply(2,6);
// console.log(Multiplication);

// type_cast = String(Multiplication);
// console.log(typeof type_cast);
// console.log(type_cast);

// Name = "Rohit";
// age = 20;
// C = "My name is " + Name + " and my age is " + age;
// console.log(C )
// console.log(`My name is ${Name} and my age is ${age}`);

//Type Conversion (Implicit)

// let firstName = "Rohit ";
// let lastName = "Raj";

// console.log(firstName + lastName);

// console.log("2" + 1 + 46);

// let a = {};
// let b = String(a);
// console.log(typeof a);
// console.log(typeof b);

// console.log(1 + 45 + "1" + false + {});

// == and ===

// console.log(2==2);
// console.log(2=="2ab");
// console.log(2==="2");

// console.log(null == 0);

// let a = 4;

// if (a%2 == 0){
//     console.log(`${a} is an even number`);
// }
// else{
//     console.log(`${a} is an Odd number`)
// }

// let n = 556848;
// let r = 0;

// while (n > 0) {
//     let d = n % 10;
//     r = r * 10 + d;

//     if (n % 10 === n) {
//         n = 0;
//     }
//     else {
//         n = (n - d) / 10;
//     }
// }
// console.log(r);

// let n = 20;
// if (n % 2 == 0 && n % 3 == 0 && n%4 != 0) {
//     console.log("Num is divisible 2 and 3 but not 4");
// }
// else if(n % 2 == 0 && n % 3 == 0 && n%4 == 0) {
//     console.log("Num divisible by 4");
// }
// else{
//     console.log("Num is not divisible by 2,3,4")
// }

// studentMarks =[3456,88,86];
// console.log(typeof studentMarks);

// console.log(studentMarks[0]);
// studentMarks[1] = 23;
// console.log(studentMarks);
// console.log(studentMarks[:1]) Slicing Doesn't work like this in JS

// newData = studentMarks.slice(0,2)
// console.log(newData);
// data = studentMarks.pop();
// console.log(data);
// data2 = studentMarks.pop();
// console.log(data2);
// data3 = studentMarks.pop();
// console.log(data3);
// studentMarks.splice(0,0,90);
// console.log(studentMarks);

// let a = [1345, 26543, 3343, 44232, 5435];
// for (let i = 0; i < a.length; i++) {
//     a[i] = a[i] + 2;
// }
// console.log(a);

// let numbers = [2,3,4,5,6,7,8,9,10];
// console.log(numbers.length);
// data = numbers.push(34,35,36);
// console.log(numbers);
// console.log(data);

// data1 = numbers.pop();
// console.log(numbers);
// console.log(data1);

// let numbers = [10,20,30,40];
// data = numbers.shift(2);
// data2 = numbers.unshift(50);
// console.log(numbers);
// console.log(data);
// console.log(data2);

// let numbers = [23,24,25];
// // data = numbers.includes(45);
// data = numbers.indexOf(24);
// console.log(data);


//Linear Search
// function findIndex(n, target) {
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// let A = [10, 20, 30, 40, 50];
// let find = findIndex(A, 30); 
// console.log(find);


// let A = [10,20,30,40,50];

// for(let i = 0; i<A.length; i++){
//     if(A[i]> 20){
//         console.log("Number greater than 20");
//     }
//     else if(A[i] == 20){
//         console.log("Number is equal to 20");
//     }
//     else console.log("Number is less than 20")
// }

// let A = [10, 20, 30, 40, 50];

// function check(A) {
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] > 20) {
//             console.log("Number is  greater than 20");
//         } 
//         else if (A[i] === 20) {
//             console.log("Number is equal to 20");
//         } 
//         else {
//             console.log("Number is less than 20");
//         }
//     }
// }

// check(A);

// let numbers = [23,35,56,65,78,12];
// // data = numbers.find(function(numbers){
// //     return numbers > 50
// // });

// // console.log(data);

// data = numbers.find(()=>{
//     return numbers < 10;
// })

// console.log(data);