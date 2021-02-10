// firstPromiseFunction()
//   .then(firstResolveVal => {
//     return secondPromiseFunction(firstResolveVal)
//   })
//   .then(secondResolveVal => {
//     console.log(secondResolveVal)
//   })

/* 
Мы вызываем функцию, firstPromiseFunction()которая возвращает обещание.
Мы вызываем .then()анонимную функцию в качестве обработчика успеха.
Внутри обработчика успеха мы возвращаем новое обещание - результат вызова второй функции secondPromiseFunction()с разрешенным значением первого обещания.
Мы вызываем секунду .then()для обработки логики выполнения второго обещания.
Внутри этого .then()у нас есть обработчик успеха, который будет записывать в консоль разрешенное значение второго обещания.

Чтобы наша цепочка работала должным образом, мы сдержали return обещание secondPromiseFunction(firstResolveVal).Это гарантировало, что возвращаемое значение первого.then()было нашим вторым обещанием, а не возвращением по умолчанию нового обещания с тем же установленным значением, что и исходное.
	 */

const {
  checkInventory,
  processPayment,
  shipOrder,
} = require('./codeCademy_library.js')

const order = {
  items: [
    ['sunglasses', 1],
    ['bags', 2],
  ],
  giftcardBalance: 79.82,
}

checkInventory(order)
  .then(resolvedValueArray => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray)
  })
  .then(resolvedValueArray => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray)
  })
  .then(successMessage => {
    console.log(successMessage)
  })
  .catch(errorMessage => {
    console.log(errorMessage)
  })

///
checkInventory(order)
  .then(resolvedValueArray => {
    return processPayment(resolvedValueArray)
  })
  .then(resolvedValueArray => {
    return shipOrder(resolvedValueArray)
  })
  .then(successMessage => {
    return console.log(successMessage)
  })

///
let myPromises = Promise.all([
  returnsPromOne(),
  returnsPromTwo(),
  returnsPromThree(),
])

myPromises
  .then(arrayOfValues => {
    console.log(arrayOfValues)
  })
  .catch(rejectionReason => {
    console.log(rejectionReason)
  })

/* Мы объявляем myPromisesназначенным для вызова Promise.all().
Мы вызываем Promise.all()с массивом из трех обещаний - значений, возвращаемых функциями.
Мы вызываем .then()обработчик успеха, который распечатает массив разрешенных значений, если каждое обещание выполнено успешно.
Мы вызываем .catch()обработчик ошибок, который печатает первое сообщение об отклонении, если какое-либо обещание отклоняется. */

///
const checkAvailability = (itemName, distributorName) => {
  console.log(`Checking availability of ${itemName} at ${distributorName}...`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (restockSuccess()) {
        console.log(`${itemName} are in stock at ${distributorName}`)
        resolve(itemName)
      } else {
        reject(
          `Error: ${itemName} is unavailable from ${distributorName} at this time.`
        )
      }
    }, 1000)
  })
}

module.exports = { checkAvailability }

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
  return Math.random() > 0.2
}
