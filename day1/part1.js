// This answer includes part2's solution as well
const fs = require('fs');
const puzzleInput = fs.readFileSync('input.txt').toString();
const arr = puzzleInput.split('\n');
let total = 0;
let found = false;
let seen = {};

function evalInput(input){
  if(input.indexOf('+') !== -1){
    return parseInt(input.split('+')[1]);
  } 
  return -Math.abs(parseInt(input.split('-')[1]));
}

while(!found){
  for(let i=0; i < arr.length; i++){
    total += evalInput(arr[i]);
    if(seen[total]){
      found = true;
      return total;
    }
    seen[total] = true;
  }
}