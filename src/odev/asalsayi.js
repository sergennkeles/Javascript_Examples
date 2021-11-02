console.log("----------ASAL SAYI---------------");

let findPrime = function (...numbers) {
  for (let i = 1; i < numbers.length; i++) {
    counter = 0;
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        counter++;
      }
    }
    if (counter == 2) {
      console.log("Girilen sayılardan " + numbers[i] + " asal sayıdır");
    }
  }
};

findPrime(3, 5, 8, 9, 11, 21, 23);
