const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]]

// console.log(nested.flat())
// out:
// [ 'a', 'b', 'c', 'd', 'e', [ 'f', 'g' ] ]

// console.log(nested.flat().flat())
// out:
/* 	
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
]
 */

//глубина вложенности указываеться цифрой в flat(num)
// console.log(nested.flat(2))

// out flat(1):
// [ 'a', 'b', 'c', 'd', 'e', [ 'f', 'g' ] ]

// out flat(2):
/* 	
[
  'a', 'b', 'c',
  'd', 'e', 'f',
  'g'
]
 */

const techs = ['react redux', 'angular', 'vue', 'deno and node']

// console.log(techs.map(tech => tech.split(' ')))
//out двумерный массив:
/* 
[
  [ 'react', 'redux' ],
  [ 'angular' ],
  [ 'vue' ],
  [ 'deno', 'and', 'node' ]
]
 */

// var 1
// console.log(techs.map(tech => tech.split(' ')).flat())
// var 2
// console.log(techs.flatMap(tech => tech.split(' ')))

//out одномерный массив:
/* 
[
  'react',   'redux',
  'angular', 'vue',
  'deno',    'and',
  'node'
]
 */
