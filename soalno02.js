let huruf = ["a", "b", "c", "d", "e"];

 function balikin(letter) {
  let newLetter = [];
  for (let i = letter.length - 1; i >= 0; i--) {
    newLetter.push(letter[i]);
  }
  return newLetter;
}
console.log(balikin(huruf));
