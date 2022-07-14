array = [4, 2, 6, 88, 3, 11];
let hasil7 = {
  low: array[0],
  high: array[0],
};
for (let i = 0; i < array.length; i++) {
  if (array[i] < hasil7.low) {
    hasil7.low = array[i];
  }
  if (array[i] > hasil7.high) {
    hasil7.high = array[i];
  }
}
console.log(hasil7);

// let number = [4,2,6,88,3,11];
// let high = Math.max.apply(Math, number);
// let low = Math.min.apply(Math, number)

// function value(){
//    console.log('low : ' + low)
//    console.log('high : ' + high)
// }

// value()