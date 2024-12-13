function fibs(num) {
  if (num < 0) {
    return new Error('Negative values not allowed');
  }
  let i = 0;
  const array = [];
  
  while(i < num) {
    if (i == 0) {
      array[i] = 0;
    }
    else if (i == 1) {
      array[i] = 1;
    }
    else {
      const value = array[i-2] + array[i-1];
      array[i] = value;
    }
    i+=1;
  }
  return array;
}

function fibsRec(num, arr) {
  if (num == 1) {
    arr[num - 1] = 0;
    return arr;
  }
  else if (num == 2) {
    arr = fibsRec(num - 1, arr);
    arr[num - 1] = 1;
    return arr;
  }
  else { 
    arr = fibsRec(num - 1, arr);
    arr[num - 1] = arr[num - 2] + arr[num - 3];
    return arr
  }
}

console.log(fibs(9));
const arr = [];
console.log(fibsRec(9, arr));