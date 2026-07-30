/* const randomNumber = Math.random();

if(randomNumber >= 0 && randomNumber < 1/3){
  console.log("Rock");

}else if(randomNumber >=1/3 && randomNumber <2/3){
  console.log("paper");

}else{
  console.log("Scissors");

}
  */
let compMove1 = '';
const randomNumber1 = Math.random();
function pickCompMove1() {
  if (randomNumber1 >= 0 && randomNumber1 < 1 / 3) {
    compMove1 = 'Rock';

  } else if (randomNumber1 >= 1 / 3 && randomNumber1 < 2 / 3) {
    compMove1 = 'Paper';

  } else {
    compMove1 = 'Scissors';

  }

  console.log(compMove1);

}

let compMove2 = '';
const randomNumber2 = Math.random();
function pickCompMove2() {
  if (randomNumber2 >= 0 && randomNumber2 < 1 / 3) {
    compMove2 = 'Rock';

  } else if (randomNumber2 >= 1 / 3 && randomNumber2 < 2 / 3) {
    compMove2 = 'Paper';

  } else {
    compMove2 = 'Scissors';

  }

  console.log(compMove2);

}

let compMove3 = '';
const randomNumber3 = Math.random();
function pickCompMove3() {
  if (randomNumber3 >= 0 && randomNumber3 < 1 / 3) {
    compMove3 = 'Rock';

  } else if (randomNumber3 >= 1 / 3 && randomNumber3 < 2 / 3) {
    compMove3 = 'Paper';

  } else {
    compMove3 = 'Scissors';

  }

  console.log(compMove3);

}
