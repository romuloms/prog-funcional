const {indef} = require('./my_utils')

const lista = [1,2,3,4]

const inverte = ([x, ...xs]) => {

  if(indef(x)) return []

  else return [...inverte(xs), x]

}

// console.log(inverte(lista));

module.exports = { inverte }

