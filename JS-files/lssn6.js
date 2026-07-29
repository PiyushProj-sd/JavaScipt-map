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

