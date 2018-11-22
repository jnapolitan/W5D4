function inclusiveRange(start, end) {
  if (end === start) {
    return [end];
  }
  let result = range(start, (end - 1)); 
  result.push(end);
  return result;
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let result = arr[arr.length - 1];
  return sumRec(arr.slice(0, arr.length - 1)) + result; 
}

function exponent(base, exp) {
  if (exp === 1) {
    return base; 
  }
  
  return exponent(base, exp - 1) * base;  
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1; 
  }
  if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp / 2), 2); 
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);
  }
}

function fibonacci(n) {
  
}
