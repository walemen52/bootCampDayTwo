//A function to return the minimum and maximum elements of an array
 
  'use strict'
let findMinMax = () =>{

  let minMax = [];
  let min = array[0];
  let max = array[0];

  for (let i =0; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
    }
    else if(array[i] < min){
      min = array[i];
    }
  }

  if(min === max){
    minMax.push(max)
    return minMax;
  }
  minMax.push(min);
  minMax.push(max);
  return minMax;
}

