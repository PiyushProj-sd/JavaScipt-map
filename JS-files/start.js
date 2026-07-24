//artimetic operators

let a = 5;
let b = 6;
let c = "5"; //string
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
//increment post
// a++;
// console.log(a);
//decrement post
// a--;
// console.log("a = ", a);

// console.log("a = ", a++); //here a will give 5;
// console.log("a = ", a); //here a will give 6;

// console.log("a = ", --a); //here a will first give 4
//assignment operators
// +=, -=, =, /=, !=, **= types of operator //here == is not valid unlike java

// a+=2
// console.log(a); //both are valid ways
// console.log(a+=2); //for all above operators

//for comparison == and !=(not equal to)
// console.log(a==b); //false
// console.log(a==a); //true
// console.log(a!=b); //true
// console.log(a!=a); //false

// console.log(a==c); //true the js will first convert string to number and then checks

// //for improving this we use stricter operators like === and !==;
// console.log(a===c); //false //this check equal to and type;
// console.log(a!==c);

// use of >, <, <=, >= operators
// console.log(a<b); //true a = 5, b = 6
// console.log(a>b); //false
// console.log(a<=b); //true
// console.log(a>=b); //false
// console.log(a<=c); //true
//here these operators will also not be able to distinguish betweed a string and a number for comparison

//logical operators &&(AND), ||(OR), !(NOT);
// let cond1 = a>b; //false
// let cond2 = a<=b; //true
// let cond3 = a===c; //false

// console.log("cond1 && cond2", cond1&&cond2); //false both should be true
// console.log("cond1 || cond2", cond1||cond2); //true cause only one cond true is needed
// console.log("cond1 && cond2 || cond3", cond1&&cond2||cond3); //false
// here cond1 && cond2 is false so false then cond3 is also false therefore final ans in false
// console.log("cond1 && cond2", !(cond1 && cond2)); //true cause not(!) will always give opposite answers
