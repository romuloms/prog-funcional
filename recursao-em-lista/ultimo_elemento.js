const indef = (x) => typeof x == 'undefined'

const list = [3,8,20,21,34,44]

const ultimo = ([x, ...xs]) => {
    if (indef(x)) return 'Lista vazia' 
    else return ultimoAux([x, ...xs])
}
const ultimoAux = ([x, ...xs]) => {
    if (xs.length == 0) return x
    else{
        // console.log(x); 
        // console.log(xs); 
        return ultimoAux(xs)
    }
}

// console.log(ultimo(list));
// console.log(list.indexOf(2))

const l = [1, 2, 3, 1, 1, 1]
const test = ([x, y, z, a, b, c]) => x +" "+ a + y + z + b + c 

// console.log(test(l));

// ou

function ultimo2([x, ...xs]) {
    
    if([x, ...xs].length == 1) return x

    else return ultimo2(xs)

}

// console.log(ultimo(list));
