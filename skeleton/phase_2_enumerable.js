Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

Array.prototype.myMap = function (cb) {
  let resultArr = [];
  
  for (let i = 0; i < this.length; i++) {
    resultArr.push(cb(this[i]));
  }
  
  return resultArr;
};

Array.prototype.myReduce = function (cb, initialValue = this[0]) {
  let result = initialValue;
  
  for (let i = 0; i < this.length; i++) {
    result = cb(result, this[i]);
  }
  
  return result;
};









function add(num1, num2) {
    return num1 + num2;
}

function times(num1, num2) {
    return num1 * num2;
}

function timesTwo(num) {
  return num * 2;
}

function logIfEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number!`);
  }
}
