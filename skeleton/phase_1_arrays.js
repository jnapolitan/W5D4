Array.prototype.uniq = function() {
  let resultArr = [];
  
  for (let i = 0; i < this.length; i++) {
    if (!resultArr.includes(this[i])) {
      resultArr.push(this[i]);
    }
  }
  
  return resultArr;
};

Array.prototype.twoSum = function () {
  let resultArr = [];
  
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        resultArr.push([i, j]);
      }
    }
  }
  
  return resultArr;
};

Array.prototype.transpose = function () {
  let resultArr = [];
  
  while (resultArr.length < this.length) {
    for (let i = 0; i < this.length; i++) {
      resultArr[i] = [];
      for (let j = 0; j < this[i].length; j++) {
        resultArr[i].push(this[j][i]);
      }
    }
  }
  return resultArr;
};

