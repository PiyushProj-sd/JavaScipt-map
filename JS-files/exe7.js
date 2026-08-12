/*function greet(name){
  if(name){
    return console.log(`Hellow! ${name}!`);
  }else{
    return console.log('Hi there!')
  }
}*/
//celcius to fahrenhite;
/*function convertToFahrenheit(celcius){
  var degree = (celcius * (9/5)) + 32;
  if(!degree){
    return console.log("No celcius input");
  } else{
    return console.log(degree);
  }
}

convertToFahrenheit(25);*/

function convertTemps(degrees, unit){
  if(unit==='C' || unit === 'c'){
    var temp = (degrees - 32) * 5/9;
    console.log(`${temp}C`);
  }else if(unit==='F' || unit === 'f'){
    var temp = (degrees * 9/5) + 32;
    console.log(`${temp}F`);
  } else if(!unit){
    console.log("Can't convert without input of Unit");
  } else if(unit !== 'c' || unit !== 'f' || unit !== 'F' || unit !== 'C'){
    console.log('Wrong unit type');
  }
}

function convertToDistances(length, from, to){
  if(from === 'km' && to === 'miles'){
    var convert = 1/1.6 * length;
    return console.log(`${convert} Miles`);
  } else if(from === 'miles' && to === 'km'){
    var convert = length * 1.6;
    return console.log(`${convert} Km`)
  } else if(from === 'km' && to === 'km'){
    var convert = length;
    return console.log(`${convert} Km`);
  } else if(from === 'miles' && to === 'miles'){
    var convert = length;
    return console.log(`${convert} Miles`);
  }
}

convertToDistances(50, 'miles', 'miles');
