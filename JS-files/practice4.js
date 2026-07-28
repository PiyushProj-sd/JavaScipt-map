let marks = prompt("Enter your marks : ");

if(marks >= 80 && marks<= 100){
  console.log('Grade A');
} else if(marks >= 70 && marks < 80){
  console.log("Grade B");
} else if(marks >= 60 && marks < 70){
  console.log("Grade C");
} else if(marks >= 50 && marks < 60){
  console.log("Grade D");
} else if(marks>= 40 && marks < 50){
  console.log("Grade E");
} else if(marks>= 0 && marks<40){
  console.log("Fail");
} else{
  console.log("Wrong marks input");
}