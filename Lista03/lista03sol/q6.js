const quantosIguais = (x) => (y) => (z) => { 
    if (x==y && y==z) return 3
    else if (x!=y && y!=z && x!= z) return 0
    else return 2
}

const a = 6
const b = 5 
const c = 5

const resultado = quantosIguais(a)(b)(c)  
console.log(resultado)