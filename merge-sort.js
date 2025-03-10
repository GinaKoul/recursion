function mergeSort(array) {
  const arrayLength = array.length;
  if (arrayLength <= 1) return array;
  const mid = Math.ceil(arrayLength / 2);
  const arrayLeft = mergeSort(array.splice(0, mid));
  const arrayRight = mergeSort(array);
  const arrayLengthLeft = arrayLeft.length;
  const arrayLengthRight = arrayRight.length;
  let i = 0;
  let j = 0;
  let k = 0;
  let mergedArray = [];
  while (i < arrayLengthLeft && j < arrayLengthRight) {
    if (arrayLeft[i] < arrayRight[j]) {
      mergedArray[k++] = arrayLeft[i++];
    } else {
      mergedArray[k++] = arrayRight[j++];
    }
  }
  for (; i < arrayLengthLeft; i++) {
    mergedArray[k++] = arrayLeft[i];
  }
  for (; j < arrayLengthRight; j++) {
    mergedArray[k++] = arrayRight[j];
  }
  return mergedArray;
}

function mergeSort2(array) {
  const arrayLength = array.length;
  if (arrayLength <= 1) return array;
  const mid = Math.ceil(arrayLength / 2);
  let arrayLeft = mergeSort2(array.splice(0, mid));
  let arrayRight = mergeSort2(array);
  let k = 0;
  let mergedArray = [];
  while (arrayLeft.length > 0 && arrayRight.length > 0) {
    if (arrayLeft[0] < arrayRight[0]) {
      mergedArray[k++] = arrayLeft.shift();
    } else {
      mergedArray[k++] = arrayRight.shift();
    }
  }
  return mergedArray.concat(arrayLeft).concat(arrayRight);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort2([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort2([105, 79, 100, 110]));
