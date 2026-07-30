// let marks = prompt("Enter your marks : ");

// if(marks >= 80 && marks<= 100){
//   console.log('Grade A');
// } else if(marks >= 70 && marks < 80){
//   console.log("Grade B");
// } else if(marks >= 60 && marks < 70){
//   console.log("Grade C");
// } else if(marks >= 50 && marks < 60){
//   console.log("Grade D");
// } else if(marks>= 40 && marks < 50){
//   console.log("Grade E");
// } else if(marks>= 0 && marks<40){
//   console.log("Fail");
// } else{
//   console.log("Wrong marks input");
// }

// ternary operator ?:
// true ? 'truthy' : 'falsy';
const result = 0 ? "truthy" : "falsy";
console.log(result); //the result is falsy because 0 is a false value
/* the first "true" statement is a condition
  then the middle one is a value that if the condition is true then this
  will work
  if not then the value after collen : will work
*/

// Guard operator 
/* the guard operator is like if statement 
here we write 
    value1 && value2;
    if the value1 is true then only we move to value to 
    if value1 is false then the value2 will not be displayed
    it's like value1 is just for assurance and the real message is 
    stored in value2
    value1 doesn't get printed it's just for reassuing that 
    if the value2 should get print or not
    correction****** the value one gets printed only if it is a false value
    for example if value1 is false then false will be print
    if it is 0 then 0 will show up 
    if null then null will show op etc.
*/
//example
const example = true && "hii this is a message";
console.log(example);

// Default operator
/*  this is similar to the guard operator but with a OR ||
    here only one statement has to be true to get printed
*/
/*these stops the code early cause they know the output based on the firsT
  value therefore if we have to add many message and then print one of them 
  at some time then we can just set smth before real value to be used as a false safe.
*/
const message = false || "Anything that's not a false value is a true false even this string is a true value";
console.log(message);
//for the message to not get displayed in a default operator both the values has to be false

