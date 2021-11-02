console.log("----------MÜKEMMEL SAYI---------------");
let perfectNumber = (number) => {
  let numbers = [];
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if (number % i == 0) {
      numbers.push(i);
    }
  }
  console.log(numbers);
  numbers.forEach(function (num) {
    sum += num;
  });
  if (sum == number * 2) {
    console.log("Girilen sayı mükemmel sayıdır.");
  } else {
    console.log("Girilen sayı mükemmel sayı değildir :(");
  }
};

perfectNumber(28);
