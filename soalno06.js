let angka4 = [1,4,7,9,12];
let low1 = 2;
let high2 = 15;

function hasil(array, lowNum, highNum){
  let result = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] >= lowNum && array[i] <= highNum){
        result.push(array[i]);
       }
    }
    return result
};

console.log(hasil(angka4, low1, high2));
