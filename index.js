//Write your solutions in this file, don't forget to test your functions.

// 1.
const countFromOne = (x) => {
  for (let i = 1; i <= x; i++) {
    console.log(i)
  }
}

// tests
// countFromOne(10);
// countFromOne(1);

// 2.
const countEveryOdd = (x) => {
  for (let i = 1; i <= x; i+=2) {
    console.log(i)
  }
}

// tests
// countEveryOdd(11);
// countEveryOdd(6);

// 3.
const isNegative = (x) => {
  return (x < 0) ? true : false;
}

// tests
// console.log(isNegative(-1));
// console.log(isNegative(10));
// console.log(isNegative(0));

// 4.
const betweenFiveAndTwenty = (x) => {
  return (x >= 5 && x <= 20) ? true : false;
}

// tests
// console.log(betweenFiveAndTwenty(12));
// console.log(betweenFiveAndTwenty(5));
// console.log(betweenFiveAndTwenty(100));

// 5.
const sumOfThreeOrFive = () => {
  sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i%3 == 0 || i%5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// test
// console.log(sumOfThreeOrFive());

// 6.
const isAllLowerCase = (str) => {
  for (let i = 0; i < str.length; i++) {
    asciiCode = str.charCodeAt(i);
    if (asciiCode == 32) { continue; }
    if (asciiCode < 97 || asciiCode > 122) { return false; }
  }
  return true
}

// test
// console.log(isAllLowerCase("hello")) //returns true
// console.log(isAllLowerCase("seven eleven")) //returns true
// console.log(isAllLowerCase("Seven eleven has the best slushies")) //returns false

// BONUS 1.

const countMultiplesOfFive = (arr) => {
  return arr.filter((x) => x%5 == 0).length;
}

// test
// console.log(countMultiplesOfFive([1,2,3,4,5,6,7,8,9,10])) // returns 2
// console.log(countMultiplesOfFive([15,23,35,45,67])) // returns 3
// console.log(countMultiplesOfFive([2,6,14])) // returns 0