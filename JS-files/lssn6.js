let hour = 17;
hour = 20;
hour = 9;
hour = 24;
hour = 25;

if(4<=hour && hour<12){
  console.log("Good Morning!");
} else if(12<=hour && hour<18){
  console.log("Good Afternoon!");
} else if(18<=hour && hour<24){
  console.log("Good Night!");
} else if(hour !== 12 && hour !==24){
  console.log("invalid time input");
}

if(hour === 24){
  console.log("At Mid Night!");
} else if(hour === 12){
  console.log("At Noon!");
}

