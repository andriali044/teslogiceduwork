let number = [4,2,6,88,3,11];
let high = Math.max.apply(Math, number);
let low = Math.min.apply(Math, number)

function value(){
   console.log('low : ' + low)
   console.log('high : ' + high)
}

value()