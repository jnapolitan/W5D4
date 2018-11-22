Array.prototype.bubbleSort = function() {
  let sorted = false;
  
  while (sorted === false) {
    sorted = true;
    
    for (let i = 0; i < this.length; i++) {
      num = this[i];
      next_num = this[i + 1];
      if (num > next_num) {
        sorted = false;
        this[i] = next_num;
        this[i + 1] = num;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      let sub = this.slice(i, j); 
      result.push(sub); 
    }
  }
  return result; 
};


