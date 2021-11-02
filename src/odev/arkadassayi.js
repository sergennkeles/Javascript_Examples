console.log("----------ARKADAŞ SAYI---------------");
let friendNumbers = (num1, num2) => {
  let numbers1 = [];
  let numbers2 = [];

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 1; i < num1; i++) {
    if (num1 % i == 0) {
      numbers1[numbers1.length] = i;
    }
  }

  for (let j = 1; j < num2; j++) {
    if (num2 % j == 0) {
      numbers2[numbers2.length] = j;
    }
  }

  console.log(num1 + "'in bölenleri " + numbers1);
  console.log(num2 + "'in bölenleri " + numbers2);

  numbers1.forEach(function (params) {
    sum1 += Number(params);
  });
  numbers2.forEach(function (params) {
    sum2 += Number(params);
  });

  console.log(num1 + " toplamı " + sum1);
  console.log(num2 + " toplamı " + sum2);

  if (sum1 == num2 && sum2 == num1) {
    console.log("Girilen sayılar arkadaş sayılardır.");
  }
};

friendNumbers(1184, 1210);
