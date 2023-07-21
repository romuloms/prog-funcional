function ultimaParada(combustivel,consumo,postosDeGasolina) {
  const distanciaMax = combustivel*consumo
  const postosProximos = postosDeGasolina.filter((x) => x <= distanciaMax)

  if(postosProximos.length == 0) return -1
  else return postosProximos.reduce((a, b) => a > b ? a : b) 
}

const postos = [2, 15, 22, 10.2]

// console.log(ultimaParada(2,8,postos));

const concatena = ([x, ...xs]) => {

  if(typeof(x) == 'undefined') return []

  else if(Array.isArray(x)) {
      return concatena([...x, ...xs])
  }

  else if(Array.isArray(xs)) return [x, ...concatena([...xs])]

}

function retornaMenorEMaiorValorDeVendas(tickets) {
  const ticketsDesagrupados = concatena(tickets)
  const filtra0 = ticketsDesagrupados.filter((x) => x != 0)
  const filtra20500 = filtra0.filter((elem) => elem > 20 && elem < 500 )
  console.log(filtra20500);
  const ordenado = filtra20500.sort((a, b) => a - b)
  console.log(ordenado);

  if(ordenado.length === 0) return []
  else if(ordenado.length === 1) return ordenado
  else return [ordenado[0], ordenado[ordenado.length - 1]] 
}
const ticket = [[200,100],[300], [10, 600], [29, 500]]

// console.log(retornaMenorEMaiorValorDeVendas(ticket));
// console.log(ticket[-1]);

const senha = ["0110100000","1001011111","1110001010","0111010101","0011100110",
                "1010011001","1101100100","1011010100","1001100111","1000011000"]

// function calculaNumeroDaSenha([x, ...xs]) {
//   console.log(x[0]);
// }

// const splita = (string) => string.split('')

// const calculaSenha = ([x, ...xs]) => {
//   const n = [x, ...xs].length
//   const isolados = [x, ...xs].map((x) => splita(x))
//   console.log(isolados);
//   const mapeados = isolados.map()
//   return mapeados
//   // if(n == 0) return []
//   // else return isolados
// }

// console.log(calculaSenha(senha));
const indef = x => typeof x == 'undefined'


const contaCaracters = (str) => {
	
    let qntd0 = 0
    let qntd1 = 0
    
    const arrayStr = str.split("")
    
    for(i = 0; i < arrayStr.length; i++){
          if(arrayStr[i] == '0'){
            qntd0++
          }
          else{
            qntd1++
          }
    }
    
    if(qntd0 > qntd1) return '0'
    else return '1'
  
}


const calculaNumeroDaSenha = (arrayBinarios = []) => {
    const formata = aux(arrayBinarios)
    const valoresFinais = formata.map((x) => contaCaracters(x))
    const valoresFinaisJoin = valoresFinais.join('')
    return bin2dec(valoresFinaisJoin)
}

const bin2dec = ([x, ...xs], contador = [x, ...xs].length - 1) => {

    if(indef(x)) return 0
  
    else return x*(2**(contador)) + bin2dec(xs, contador-1)
  
  }

const aux = (array = [], indice = 0, arrayAux = []) => {
    if(indice > 9){
        return arrayAux
    }
    else{
        const arrayColuna = array.map((x) => {
            return x[indice]
        });
        return aux(array,indice+1,[...arrayAux, arrayColuna.join('')])
    }
}

// console.log(calculaNumeroDaSenha(senha))
function maior([x, y, ...xs]) { 
  if(indef(y)) return x
  else return (x > y) ? maior([x, ...xs]) : maior([y, ...xs])
}
const desaninhar = ([x, ...xs]) => {
  if(indef(x)) return []

  else if(Array.isArray(x)) {
      return desaninhar([...x, ...xs])
  }
  else if(Array.isArray(xs)) return [x, ...desaninhar([...xs])]
}

function calculaTopOcorrenciasDeQueries(texto,queries, k) {
  const scan = queries.map((x) => {
    const re = new RegExp(x, 'gi')
    const ocorrencias = texto.match(re)

    if(ocorrencias != null) return [ocorrencias, ocorrencias.length]
    else return []
  })

  const desaninhado = desaninhar(scan)
  const setDes = new Set(desaninhado)
  
  return setDes
}

// console.log(calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", ["a","em","i","el"]));


function calculaPorcentagemSorteio([x, ...xs], [y, ...ys]) {
  const horasAssistidas = ([y, ...ys].map((x) => Math.ceil(x / 60)))
  const odds = 100 / [x, ...xs].length
  const [z, ...zs] = [x, ...xs].map((x) => x = 1)
  
  if([x, ...xs].length == 0 || [y, ...ys].length == 0) return [] 

  else if(x === true) return [z*2, calculaPorcentagemSorteio(xs, ys)]
  else if(x === false) return [z/2, calculaPorcentagemSorteio(xs, ys)]
}

// console.log(calculaPorcentagemSorteio([true, false],[60,120]));


function checaNumeroEscondido(numero, numeroOculto) {
  const numeroToString = numero.toString()
  const numeroOcultoToString = numeroOculto.toString()
  const [x, ...xs] = numeroToString
  const [y, ...ys] = numeroOcultoToString
  
  return [x, ...xs].includes([y, ...ys])
}

// console.log(checaNumeroEscondido(12345, 245));


function escolheTaxi(tf1,vqr1,tf2,vqr2) {
  const t1 = parseFloat(tf1)
  const t2 = parseFloat(tf2)
  const v1 = parseFloat(vqr1)
  const v2 = parseFloat(vqr2)

  const distanciaQueSeIgualam = parseFloat((t2 - t1) / (v1 - v2))
  
  if(distanciaQueSeIgualam < 1) {
    if(t1 < t2) return "Empresa 1"
    else if(t1 > t2) return "Empresa 2"
    else return "Tanto faz"
  }

  else {
    if(t1 < t2) return `Empresa 1 quando a distância < ${distanciaQueSeIgualam.toFixed(2)}, Tanto faz quando a distância = ${distanciaQueSeIgualam.toFixed(2)}, Empresa 2 quando a distância > ${distanciaQueSeIgualam.toFixed(2)}`
    else if(t1 > t2) return `Empresa 2 quando a distância < ${distanciaQueSeIgualam.toFixed(2)}, Tanto faz quando a distância = ${distanciaQueSeIgualam.toFixed(2)}, Empresa 1 quando a distância > ${distanciaQueSeIgualam.toFixed(2)}`
    else return "Tanto faz"
  }  
}

// console.log(escolheTaxi("2.5","1.0","5.0","0.75"))



function menorStringMaior(name) {
  
}
// console.log(menorStringMaior('abcde'));

// console.log(maiorString([2,1,4,3,8]));
// console.log(maior(['b','a','e']));
// function maior([x, y, ...xs]) { 
//   if(indef(y)) return x
//   else return (x > y) ? maior([x, ...xs]) : maior([y, ...xs])
// }


const ocorrencias = (s) => (t) => {
  if (t.length === 0) return []
  else {
    const [x,...xs] = t
    const re = new RegExp(x, 'g');
    const oco = str.match(re)
    return [oco,...ocorrencias(s)(xs)]   
  }
}

const ordena = (lista) => {
  if (lista.length === 0) return []
  else return lista.sort((a,b)=>b.length-a.length)
}

const topk = (k) => (lista) => {
  if (lista.length === 0) return []
  else return lista.slice(0,k)     
}

const lineariza = (lista) => {
  if (lista.length === 0) return []
  else {
    const [x,...xs] = lista
    return [x[0],...lineariza(xs)]
  }    
}

const str = "sdfsgcmwemwuewmcoaaiiemcbffn"
const termos = ["n","a","em","f","m"]
const k = 5

console.log(lineariza(topk(k)(ordena(ocorrencias(str)(termos)))))