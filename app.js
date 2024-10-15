/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.
*/

const isAdult = (x) => {
  if (x >= 21) {
    return "Adult";
  } else {
    return "Minor";
  }
}

console.log('Exercise 2 Result:', isAdult(18));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.
*/

const isCharAVowel = (x) => {
  if (x === "a" || x === "A") {
    return true;
  }
  if (x === "e" || x === "E") {
    return true;
  }
  if (x === "i" || x === "I") {
    return true;
  }
  if (x === "o" || x === "O") {
    return true;
  }
  if (x === "u" || x === "U") {
    return true;
  }
  else {
    return false;
  }
}

console.log('Exercise 3a Result:', isCharAVowel("3"));

//Avisa's method to run the function

const isCharAVowel2 = (char) => {
  const vowels = ["a", "e", "i", "o", "u"]
  for (let i = 0; i < vowels.length; i++) {
    const vowelChar = vowels[i]
    if (vowelChar === char) {
      return true
    } else {
      return false
    }
  }
}
console.log('Exercise 3b Result:', isCharAVowel2("a"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.
*/

const generateEmail = (id, domain) => {
  let email = `${id}@${domain}`;
  return email;
}

console.log('Exercise 4 Result:', generateEmail("brady.russell", "gmail.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting
*/

const greetUser = (id, timeOfDay) => {
  let greet = `Good ${timeOfDay}, ${id}!`;
  return greet;
}

console.log('Exercise 5 Result:', greetUser("Brady", "morning"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.
*/

const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1
  }
  if (num2 > num1 && num2 > num3) {
    return num2
  }
  if (num3 > num1 && num3 > num2) {
    return num3
  }
}
console.log('Exercise 6 Result:', maxOfThree(4, 2, 0));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.
*/

const calculateTip = (bill, tipPercent) => {
  let tip = (bill * (tipPercent / 100));
  return tip;
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.
*/

const convertTemperature = (temp, unit) => {
  if (unit === "C") {
    return (temp * (9 / 5)) + 32;
  }
  if (unit === "F") {
    return ((temp - 32) * (5 / 9));
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.
*/

const basicCalculator = (number1, number2, action) => {
  if (action === "add") {
    let addition = number1 + number2;
    return addition;
  }
  if (action === "subtract") {
    let subtraction = number1 - number2;
    return subtraction;
  }
  if (action === "divide") {
    let division = number1 / number2;
    return division;
  }
  if (action === "multiply") {
    let multiplication = number1 * number2;
    return multiplication;
  }
  else {
    return "Try again";
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.
*/

const calculateGrade = (grade) => {
  if (grade >= 90) {
    return "A";
  };
  if (grade >= 80 & grade < 90) {
    return "B";
  };
  if (grade >= 70 & grade < 80) {
    return "C";
  };
  if (grade >= 60 & grade < 70) {
    return "D";
  };
  if (grade < 60) {
    return "F";
  };
};

console.log('Exercise 10 Result:', calculateGrade(85));

/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.
*/

const createUsername = (firstName, lastName) => {
  const firstHalf = firstName.slice(0, 3);
  const secondHalf = lastName.slice(0, 3);
  const nameLength = firstName.length + lastName.length;
  const username = `${firstHalf}${secondHalf}${nameLength}`;
    return username;
}

console.log('Exercise 11 Result:', createUsername("Brady", "Newhard"));

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.
*/

const numArgs = (...count) => {
  return count.length;
}

console.log('Exercise 12 Result:', numArgs(10, 30, 19, 79));
