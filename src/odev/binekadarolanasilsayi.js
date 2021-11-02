console.log("----------1000'e KADAR OLAN ASAL SAYILAR---------------");

let primeNumber = function (number) {
  let counter = 0;
  let primeNumbers = [];

  for (let i = 2; i <= number; i++) {
    let checkPrimeNumber = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        checkPrimeNumber = 1;
      }
    }

    if (checkPrimeNumber == 0) {
      primeNumbers.push(i);
      counter++;
    }
  }

  console.log(primeNumbers);
};

primeNumber(1000);
