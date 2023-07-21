const nesima_raizq = (n, cont = 1) => (cont===n) ? n : 
  n + nesima_raizq(n, cont+1)


const mensagem = (n) => console.log(`${n}º quadrado perfeito escolhido. 
    A resposta é: ${nesima_raizq(n)}`)


console.log("Substitua o n abaixo pelo quadrado perfeito que deseja conhecer.")
mensagem(3)

/* 
    Primeiramente, a lógica do algoritmo foi fazer a multiplicação do elemento
  n por ele mesmo, uma vez que é pedido o quadrado perfeito. E a multiplicação 
  nada mais é do que a soma dos elementos, também, um número n de vezes, 
  ou seja, o terceiro quadrado perfeito é 9 = 3² = 3*3 = 3+3+3; o quarto 
  quadrado perfeito é 16 = 4² =4*4 = 4+4+4+4 e assim por diante. Fiz o código
  utilizando um parâmetro passado pelo usuário e outro parâmetro definido por 
  mim para server como um contador até o número n fornecido utilizando a 
  recursividade. Criei a função fazendo uso de if-else e depois refatorei para 
  operador ternário. 
    Em segundo lugar, desenvolvi uma função para que o usuário precise digitar
  uma única vez, em um único lugar, o n desejado e a função retorna uma 
  mensagem personalizada de acordo com esse n.
*/
