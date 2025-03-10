function fibs(value) {
  if (value === 0) return [];
  if (value <= 1) return [0];
  if (value === 2) return [0, 1];
  let array = [0, 1];
  for (let i = 2; i < value; i++) {
    array = array.concat([array[i - 2] + array[i - 1]]);
  }
  return array;
}

function fibsRec(value) {
  if (value === 0) return [];
  if (value <= 1) return [0];
  if (value === 2) return [0, 1];
  let array = fibsRec(value - 1);
  let i = array.length;
  array.push(array[i - 1] + array[i - 2]);
  return array;
}

console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(10));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));
console.log(fibsRec(10));
