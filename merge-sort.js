export const mergeSort = function (array, start = 0, end = array.length - 1) {
  if (start >= end) return [array[start]];
  const mid = Math.floor((start + end) / 2);
  let arrayLeft = mergeSort(array, start, mid);
  let arrayRight = mergeSort(array, mid + 1, end);
  let k = 0;
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arrayLeft.length && j < arrayRight.length) {
    if (arrayLeft[i] < arrayRight[j]) {
      mergedArray[k++] = arrayLeft[i++];
    } else {
      mergedArray[k++] = arrayRight[j++];
    }
  }
  for (; i < arrayLeft.length; i++) {
    mergedArray[k++] = arrayLeft[i];
  }
  for (; j < arrayRight.length; j++) {
    mergedArray[k++] = arrayRight[j];
  }
  return mergedArray;
};

function mergeSort2(array) {
  const arrayLength = array.length;
  if (arrayLength <= 1) return array;
  const mid = Math.ceil(arrayLength / 2);
  const arrayLeft = mergeSort2(array.splice(0, mid));
  const arrayRight = mergeSort2(array);
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

function mergeSort3(array) {
  const arrayLength = array.length;
  if (arrayLength <= 1) return array;
  const mid = Math.ceil(arrayLength / 2);
  let arrayLeft = mergeSort3(array.splice(0, mid));
  let arrayRight = mergeSort3(array);
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
console.log(mergeSort3([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort2([105, 79, 100, 110]));
console.log(mergeSort3([105, 79, 100, 110]));
