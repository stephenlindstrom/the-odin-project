function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: array with 1 or fewer elements is already sorted
  }

  const midIdx = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midIdx);
  const rightHalf = arr.slice(midIdx);


  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  const array = merge(leftSorted, rightSorted);
  return array;
}

function merge(left, right) {
  const sortedArray = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i++]);
    } else {
      sortedArray.push(right[j++]);
    }
  }

  // Append remaining elements from left or right
  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
