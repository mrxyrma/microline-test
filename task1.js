let firstNum = 3 //Первый член последовательности
let secondNum = 4 //Второй член последовательности
const limit = 7000000 //Ограничение ряда Фибоначи
let evenSum = 0 //Сумма четных членов
let arr = [firstNum, secondNum]

while (secondNum < limit) {
  if (firstNum % 2 == 0) {
    evenSum += firstNum
  }
  let sumOfTwoPrev = firstNum + secondNum //Сумма двух предыдущих
  firstNum = secondNum
  secondNum = sumOfTwoPrev
}

console.log(evenSum)
