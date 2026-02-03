const add = function(num1, num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(numbers) {

	let total = 0;
  for (let number of numbers){
    total = total + number;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
  for (let number of array){
    total = total * number;
  }
  return total;
};

const power = function(num, exponentNum) {
	result = num ** exponentNum;
  return result;
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  }
	let result = 1;
  for(let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
