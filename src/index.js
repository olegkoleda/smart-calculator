class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
  }

  add(number) {
    this.expression += `+ ${number} ` ;
    return this;
  }
  
  subtract(number) {
    this.expression += `- ${number} ` ;
    return this; 
  }

  multiply(number) {
    this.expression += `* ${number} ` ;
    return this;
  }

  devide(number) {
    this.expression += `/ ${number} ` ;
    return this;
  }

  pow(number) {
    this.expression += `* ${number} ` ;
   return this;
  }
  toString() {
  return 5;;
  }

  valueOf() {
    let finalExpression = `${this.initialValue}` + this.expression.substring(9);
    return eval(finalExpression);
  }
}

module.exports = SmartCalculator;
