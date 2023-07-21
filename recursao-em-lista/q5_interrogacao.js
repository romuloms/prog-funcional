const {indef} = require('./my_utils.js')

// const regex = /[!\?]/

const interrogacao = ([x, ...xs]) => {

    const regex = /[!\?]/

    if(indef(x)) return ''

    else if(regex.test(x)) {
        // x = [...new Set(x)]
        const pontos = [...new Set(xs)]
        return pontos.reduce((acc, item) => acc + item, '')
    }

    else return x + interrogacao(xs)

}

const str = 'romulo lindo????!!!!'

console.log(interrogacao(str));
