class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.arr = [];
    this.arr.push("+"+initialValue);
  }

  add(number) {
    this.arr.push(`+${number}`);
    return this;
  }
  
  subtract(number) {
    this.arr.push(`-${number}`);
    return this; 
  }

  multiply(number) {
    this.arr.push(`*${number}`);   
    return this;
  }

  devide(number) {
    this.arr.push(`/${number}`);
    return this;
  }

  pow(number) {
    var temp = this.arr.pop();
    var tempMark = temp[0] ;
    temp = temp.replace(temp[0],'');

    if(temp[0] == "M"){

      if (temp[temp.indexOf(",") + 1] == 1 ) {number = 1;}

      let cond = temp.replace(",", "," + `${number}*`);
      this.arr.push(tempMark + cond);              
      }else{
      this.arr.push(tempMark + `Math.pow(${~~temp},${number})`);
      }

  return this;
}
  toString() {
    return eval(this.arr.join(''));
  }

  valueOf() {
    return eval(this.arr.join(''));
  }
}

module.exports = SmartCalculator;
