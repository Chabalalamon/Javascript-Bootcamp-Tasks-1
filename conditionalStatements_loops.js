// Exercise 1: Temperature Check - if else
let temperature = 20;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}

// Exercise 1: Temperature Check - switch
switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature <= 25:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}

// Exercise 2: Divisibility Check - if else
let number = 6;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For loops
// Print 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Print even numbers between 1 and 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// Sum of 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum 1 to 100: " + sum);

// Print array elements
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
  console.log(numbers1[i]);
}

// Find largest number
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > largest) {
    largest = numbers2[i];
  }
}
console.log("Largest: " + largest);

// Exercise 4: While loops
// Print 1 to 10
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Print even numbers 1 to 20
let j = 2;
while (j <= 20) {
  console.log(j);
  j += 2;
}

// Sum 1 to 100
let total = 0;
let k = 1;
while (k <= 100) {
  total += k;
  k++;
}
console.log("Sum: " + total);

// Multiples of 5 less than 50
let m = 5;
while (m < 50) {
  console.log(m);
  m += 5;
}

// Exercise 5: Do While loops
// Print 1 to 10
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 10);

// Sum 1 to 100
let doSum = 0;
let n = 1;
do {
  doSum += n;
  n++;
} while (n <= 100);
console.log("Sum: " + doSum);
