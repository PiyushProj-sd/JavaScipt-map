/*
let hour = 24;
const name = 'Piyush';

if(4<=hour && hour<12){
  console.log(`Good Morning! ${name}`);
} else if(12<hour && hour<18){
  console.log(`Good Afternoon! ${name}`);
} else if(18<=hour && hour<24){
  console.log(`Good Night! ${name}`);
} else if(hour !== 12 && hour !==24){
  console.log("invalid time input");
}

if(hour === 24){
  console.log(`At Mid Night ${name} Sooja`);
} else if(hour === 12){
  console.log(`At Noon!`);
}

*/

let age = 2;
const isHoliday = false;

if((!isHoliday) && age > 0 && age <= 6){
  console.log("Congo! you got a children's discount");

}else if((!isHoliday) && age > 6 && age < 65){
  console.log("No discount for you, womp womp");
} else if((!isHoliday) && age >= 65){
  console.log("Old age Discount for ya!");
} else if((!isHoliday) && age <= 0){
  console.log("Congo! You're still in your father's balls u got a free ride");
} else if(isHoliday){
  console.log("Sorry, today's holiday so No Discount")
}
