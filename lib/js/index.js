'use strict'

// "use strict";

// document.write('<h1>в JS document.write с тегами h1</h1>');
// alert("Javacript подключен");
// console.log("Учим")
// console.log("JS")

// let mathFloor = Math.floor(Math.random() * 50);
// console.log(mathFloor); 								// Prints a random number

// console.log(Math.ceil(Math.random() * 10));

// const daysLeftOver = 367 % 7;
// const weeksInYear = Math.floor(365 / 7);
// console.log(weeksInYear);
// console.log(daysLeftOver);

// let age = 7;
// console.log('Tommy is ' + age + ' years old.'); 		// String concatenation
// console.log(`Tommy is ${age} years old.`); 			// String interpolation

// const food = 'salad';
// switch (food) {
// 	case 'oyster':
// 		console.log('The taste of the sea 🦪');
// 		break;
// 	case 'pizza':
// 		console.log('A delicious pie 🍕');
// 		break;
// 	default:
// 		console.log('Enjoy your meal');
// } 		// Prints: Enjoy your meal

// console.log(1 === '1'); 	 							// false, по типу не равны
// console.log(1 == '1');   							// true,  по значению равны

// let defaultName; 									// стандартный цикл if else
// if (username) {
// 	defaultName = username;
// } else {
// 	defaultName = 'Stranger';
// }
// let defaultName = username || 'Stranger'; 			// вариант с ИЛИ

// let isNightTime = true; 				  				// стандартный цикл if else
// if (isNightTime) {
// 	console.log('Turn on the lights!');
// } else {
// 	console.log('Turn off the lights!');
// }
// isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');  // вариант с тернарным оператором ?

// console.log(greetWorld()); // Output: Hello, World! | печатает функцию до ее объявления
// function greetWorld() {
// 	console.log('Hello, World!');
// }

// function rectangleArea(width, height) {
// 	let area = width * height;
// return area;				 // без return вернет undefined
// }
// console.log(rectangleArea(5, 7)) // Prints undefined

// let num = 50; // глобальная переменная измениться на сто, const не даст изменить переменную
// const logNum = () => {
// 	let num = 100; // Take note of this line of code
// 	console.log(num);
// };
// logNum(); // Prints 100
// console.log(num); // Prints 100

// const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
// for (let i = 0; i < animals.length; i++) {
// 	console.log(animals[i]);
// }

//вложеный цикл
// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
// 	for (let j = 0; j < yourArray.length; j++) {
// 		if (myArray[i] === yourArray[j]) {
// 			console.log('Both loops have the number: ' + yourArray[j])
// 		}
// 	}
// };

// // A for loop that prints 1, 2, and 3
// for (let counterOne = 1; counterOne < 4; counterOne++){
// 	console.log(counterOne);
//   }

//   // A while loop that prints 1, 2, and 3
//   let counterTwo = 1;
//   while (counterTwo < 4) {
// 	console.log(counterTwo);
// 	counterTwo++;
//   }

// // карточная мини игра
// const cards = ['diamond', 'spade', 'heart', 'club'];
// let currentCard;
// while (currentCard != 'spade') {
// 	currentCard = cards[Math.floor(Math.random() * 4)]; // рандом число от 0 до 3 равно индексу карт от 0 до 3
// 	console.log(currentCard);
// };

// // пример do и while циклов
// do {
// 	console.log(firstMessage)
//    } while (true === false);

//    // A while loop with a stopping condition that evaluates to false
//    while (true === false){
// 	 console.log(secondMessage)
//    };

// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
// 	for (let i = 1; i <= 1000000; i++) {
// 		if ((2 + 2) != 4) {
// 			console.log('Something has gone very wrong :( ');
// 		}
// 	}
// };
// is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// is2p2();
// console.log(is2p2.name);

// вложеный цикл for
// for (let outer = 0; outer < 2; outer += 1) {
// 	for (let inner = 0; inner <= 5; inner += 1) {
// 		console.log(`${outer}-${inner}`);
// 	}
// }

// Функции, присвоенные переменным
// let plusFive = (number) => {
// 	return number + 5;
//   };
//   // f is assigned the value of plusFive
//   let f = plusFive;

//   plusFive(3); // 8
//   // Since f has a function value, it can be invoked.
//   f(9); // 14

// ------------------------------------------------------------- //

// // Функции обратного вызова - callback function
// const isEven = (n) => {
// 	return n % 2 == 0;
// }
// let printMsg = (evenFunc, num) => {
// 	const isNumEven = evenFunc(num);
// 	console.log(`The number ${num} is an even number: ${isNumEven}.`)
// }
// // Pass in isEven as the callback function
// printMsg(isEven, 4);
//   // Prints: The number 4 is an even number: True.

// ------------------------------------------------------------- //

// Метод массива .reduce().reduce()Метод перебирает массив и возвращает одно значение. Он принимает функцию обратного вызова с двумя параметрами в (accumulator, currentValue)качестве аргументов. На каждой итерации accumulator- это значение, возвращаемое последней итерацией, а currentValue- текущий элемент. При желании можно передать второй аргумент, который действует как начальное значение аккумулятора. Здесь .reduce()метод суммирует все элементы массива.
// const arrayOfNumbers = [1, 2, 3, 4];
// const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue;
// });
// console.log(sum); // 10

// ------------------------------------------------------------- //

// Метод массива .forEach() .forEach()Метод выполняет функцию обратного вызова на каждом из элементов в массиве в порядке. Здесь функция обратного вызова, содержащая console.log()метод, будет выполняться несколько 5раз, по одному разу для каждого элемента.
// const numbers = [28, 77, 45, 99, 27];
// numbers.forEach(number => {
// 	console.log(number);
// });

// ------------------------------------------------------------- //

// Метод массива .filter().filter()Метод выполняет функцию обратного вызова для каждого элемента в массиве. Функция обратного вызова для каждого из элементов должна возвращать либо, trueлибо false. Возвращенный массив - это новый массив с любыми элементами, для которых функция обратного вызова возвращает true.Здесь массив filteredArrayбудет содержать все элементы, randomNumbersно 4.
// const randomNumbers = [22, 3, 4, 11, 42, 14, 39];
// const filteredArray = randomNumbers.filter(n => {
// 	return n > 5;
// });
// // console.log(randomNumbers.filter(n => n > 5));

// ------------------------------------------------------------- //

// Метод массива .map() .map()Метод выполняет функцию обратного вызова для каждого элемента в массиве. Он возвращает новый массив, состоящий из значений, возвращаемых функцией обратного вызова. Исходный массив не изменяется, а возвращаемый массив может содержать элементы, отличные от исходного массива.
// const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
// const announcements = finalParticipants.map(member => {
// 	return member + ' joined the contest.';
// })
// console.log(announcements);

// ------------------------------------------------------------- //

// const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
// artists.forEach(artist => {
// 	console.log(artist + ' is one of my favorite artists.');
// });

// const numbers = [1, 2, 3, 4, 5];
// const squareNumbers = numbers.map(number => {
// 	return number * number;
// });
// console.log(squareNumbers);

// const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
// const onlyNumbers = things.filter(thing => {
// 	return typeof thing === 'number';
// });
// console.log(onlyNumbers);

// /*
// Picasso is one of my favorite artists.
// Kahlo is one of my favorite artists.
// Matisse is one of my favorite artists.
// Utamaro is one of my favorite artists.
// [ 1, 4, 9, 16, 25 ]
// [ 5, 3.14, 100 ]
// */

// ------------------------------------------------------------- //

// // forEach() Method
// const groceries = ['mango', 'papaya', 'pineapple', 'apple'];

// // или вариант 1
// groceries.forEach(function (groceryItem) {
// 	console.log('v1 ' + groceryItem);
// });

// // вариант 2
// groceries.forEach(groceryItem => console.log('v2 ' + groceryItem));

// //или вариант 3
// function printGrocery(element) {
// 	console.log('v3 ' + element);
// }
// groceries.forEach(printGrocery);

// // вариант 4
// printGrocery = element => console.log('v4 ' + element);
// groceries.forEach(printGrocery);

// ------------------------------------------------------------- //

// The .map() Method
// the major difference is that .map() returns a new array!

// const numbers = [1, 2, 3, 4, 5];

// const bigNumbers = numbers.map(number => {
// 	return number * 10;
// });

// // или
// const bigNumbers = numbers.map(number => number * 10);
// console.log(bigNumbers);

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// const secretMessage = animals.map(animal => {
//   return animal[0];
// });
// console.log(secretMessage.join(''));

// const bigNumbers = [100, 200, 300, 400, 500];
// // Create the smallNumbers array below
// const smallNumbers = bigNumbers.map(num => num / 100);

// ------------------------------------------------------------- //

// The .filter() Method
// Like .map(), .filter() returns a new array, НО возвращает массив элементов после фильтрации

// const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter(num => num < 250);
// // console.log(smallNumbers);

// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// // Call .filter() on favoriteWords below
// const longFavoriteWords = favoriteWords.filter(str => str.length > 7);

// ------------------------------------------------------------- //

// The .findIndex() Method
// We sometimes want to find the location of an element in an array.

// const jumbledNums = [123, 25, 78, 5, 9];
// const lessThanTen = jumbledNums.findIndex(num => {
// 	return num < 10;
// });
// console.log(lessThanTen); // Output: 3
// console.log(jumbledNums[3]); // Output: 5

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
// const foundAnimal = animals.findIndex(animal => animal === 'elephant');
// const startsWithS = animals.findIndex(animal => animal[0] === 's');

// ------------------------------------------------------------- //

// The .reduce() Method
// The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

// const numbers = [1, 2, 4, 10];
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })
// console.log(summedNums) // Output: 17

// const summedNums = numbers.reduce((accumulator, currentValue) => {
// 	return accumulator + currentValue
//   }, 100)  // <- Second argument for .reduce() начальное значение аккумулятора
//   console.log(summedNums); // Output: 117

// const newNumbers = [1, 3, 5, 7];
// const newSum = newNumbers.reduce((accumulator, currentValue) => {
//   console.log('The value of accumulator: ', accumulator);
//   console.log('The value of currentValue: ', currentValue);
//   return accumulator + currentValue;
// }, 10);
// console.log(newSum);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 14.01.21

/* const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
	return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
// проверяет каждый элемент в массиве на true
nums.every(num => num < 0); */

/*
.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
.findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
.reduce() iterates through an array and takes the values of the elements and returns a single value.
All iterator methods takes a callback function that can be pre - defined, or a function expression, or an arrow function.
 */

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

/* // Callback Functions / Функции обратного вызова
const isEven = (n) => {
	return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
	const isNumEven = evenFunc(num);
	console.log(`The number ${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4);
  // Prints: The number 4 is an even number: True. */

/* let mobile = {
	brand: 'Samsung',
	model: 'Galaxy Note 9'
};

for (let key in mobile) {
	console.log(`${key}: ${mobile[key]}`);
}
 */
/* 
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`)
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...')
  },
} */

// engine.start('noisily');
// engine.sputter();

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// 22.01.21  codecademy /lessons/classes/exercises/static-methods

// В приведенном выше примере мы создаем staticметод с именем, .generateName()который при вызове возвращает случайное имя. Из-за static ключевого слова мы можем получить доступ, .generateName()только добавив его к Animalклассу:
/* class Animal {
  constructor(name) {
    this._name = name
    this._behavior = 0
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara']
    const randomNumber = Math.floor(Math.random() * 5)
    return names[randomNumber]
  }
}

// Мы вызываем .generateName()метод со следующим синтаксисом:
// console.log(Animal.generateName())

// Uncaught TypeError: tyson.generateName is not a function
const tyson = new Animal('Tyson')
tyson.generateName()

// Math.floor - округление вниз, 0-10.000
console.log(Math.floor(Math.random() * 10000)) */

//

/* var pasta = 'Spaghetti' // ES5 syntax

var meat = 'Pancetta' // ES6 syntax

var sauce = 'Eggs and cheese' // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara =
  'You can make carbonara with ' +
  pasta +
  ', ' +
  meat +
  ', and a sauce made with ' +
  sauce +
  '.'
 */

//
