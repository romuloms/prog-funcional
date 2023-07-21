// ALUNO: ROMULO MENEZES DE SANTANA

const selectedRow = null
const linhas = document.getElementsByTagName('tr').length - 3
const dataArr = []

const onFormSubmit = () => {
  event.preventDefault()
  const formData = lerDados()

  if(selectedRow === null) {
    inserirDados(formData)
  }

  //resetar()
}

// funcao para ler os dados
const lerDados = () => {
  const formData = {}
  formData["codigoDisciplina"] = document.getElementById("codigoDisciplina").value
  formData["anoPeriodo"] = document.getElementById("anoPeriodo").value
  formData["ch"] = document.getElementById("ch").value
  formData["frequencia"] = document.getElementById("frequencia").value
  formData["nota"] = document.getElementById("nota").value

  return formData
}

const inserirDados = (dados) => {
  const table = document.getElementById("storeList").getElementsByTagName('tbody')[0]
  const newRow = table.insertRow(table.length)
  const cell1 = newRow.insertCell(0)
    cell1.innerHTML = dados.codigoDisciplina
    //resultadosArray("codigoDisciplina",cell1.innerHTML)
  const cell2 = newRow.insertCell(1)
    cell2.innerHTML = dados.anoPeriodo
    //resultadosArray("anoPeriodo",cell2.innerHTML)
  const cell3 = newRow.insertCell(2)
    cell3.innerHTML = dados.ch
    //resultadosArray("ch",cell3.innerHTML)
  const cell4 = newRow.insertCell(3)
    cell4.innerHTML = dados.frequencia
    //resultadosArray("frequencia",cell4.innerHTML)
  const cell5 = newRow.insertCell(4)
    cell5.innerHTML = dados.nota
    //resultadosArray("nota",cell5.innerHTML)
  const cell6 = newRow.insertCell(5)
    cell6.innerHTML = `<button onClick='deletar(this)'>Deletar</button>`
  //console.log(dataArr)


  // redutor(dataArr)
}

// deletar dados
const deletar = (td) => {
  if(confirm('Você tem certeza que quer deletar esse dado?')) {
    row = td.parentElement.parentElement
    document.getElementById('storeList').deleteRow(row.rowIndex)
    //resetar()
  }

}

const mostrarResultados = () => {
  const listaDisc = getDados(linhas)()
  const listaAP = listaDisc.filter(({aprovado}) => aprovado == true)

  const table = document.getElementById("results").getElementsByTagName('tbody')[0]
  const newRow = table.insertRow(table.length)
  const cell1 = newRow.insertCell(0)
    cell1.innerHTML = tempoCurso()
  const cell2 = newRow.insertCell(1)
    cell2.innerHTML = mediaGeral()
  const cell3 = newRow.insertCell(2)
    cell3.innerHTML = "0"
  const cell4 = newRow.insertCell(3)  
    cell4.innerHTML = isAprovado()
  const cell5 = newRow.insertCell(4)  
    cell5.innerHTML = isReprovado()
  const cell6 = newRow.insertCell(5)  
    cell6.innerHTML = ch()
  const cell7 = newRow.insertCell(6)  
    cell7.innerHTML = mediaGeral()

    console.log("Professor, tentei fazer para múltiplas matérias, mas não consegui.");

}

const redutor = (lista) => {
  const m = lista.reduce((acc, dado) => {
    if(dado.key == 'codigoDisciplina') {
      return acc + dado.value + ','
    }
    return acc
  }, '')
  //console.log(m);
  return m

}

const reduceAprovados = (lista) => {
  const rAprov = lista.reduce((acc, dado) => {
    if(dado.key == 'nota') {
      if(dado.value >= 5) {
        return acc + dado.value + ','
      }
    }
    return acc
  }, '')
  //console.log(m);
  return rAprov
}

// const resultadosArray = (chave, valor) => {
//   dataArr.push({key: chave, value: valor});
// }

const getDados = (n = 1) => (array = []) => {

  if(n == 0) return array
  else {
    const dados = document.getElementsByTagName('tr')[n].outerText.split("\t")
    console.log(dados)
    
    const object = {
      "codigoDisciplina": dados[0],
      "periodo": dados[1],
      "cargaHoraria": Number(dados[2]),
      "frequencia": Number(dados[3]),
      "nota": Number(dados[4]),
      "aprovado": (Number(dados[4]) >= 5 ? true : false)
    }
    //console.log(object);

    return getDados(n-1)([...array, object])

  }
}

const mapAprovados = (lista) => {
  const listaCodDisc = lista.map((x) => x.codigoDisciplina)

  return listaCodDisc.join(',')
}

const geraDados = () => {
  const qtdeLinhas = document.getElementsByTagName('tr').length - 3
  const listaDisciplinas = getDados(qtdeLinhas)()
  const cod = listaDisciplinas.map((x) => x.codigoDisciplina)

  return cod[0]
  //const listaDisciplinasAprovadas = 


}

const isAprovado = () => {
  const qtdeLinhas = document.getElementsByTagName('tr').length - 3
  //console.log(qtdeLinhas);
  const aprovado = getDados(qtdeLinhas)()
  //console.log(aprovado[0].aprovado)

  if(aprovado[0].aprovado) return aprovado[0].codigoDisciplina
  else return 0
  
}

const tempoCurso = () => {
  const qtdeLinhas = document.getElementsByTagName('tr').length - 3
  const tempoPeriodos = getDados(qtdeLinhas)()
  const periodo = tempoPeriodos[0].periodo.split('.')
  //console.log(periodo);
  return periodo[1]
}

const mediaGeral = () => {
  const qtdeLinhas = document.getElementsByTagName('tr').length - 3
  const media = getDados(qtdeLinhas)()
  const mediaPonderada = (media[0].nota * media[0].cargaHoraria) / media[0].cargaHoraria
  return mediaPonderada

}

const isReprovado = () => {
  const qtdeLinhas = document.getElementsByTagName('tr').length - 3
  //console.log(qtdeLinhas);
  const reprovado = getDados(qtdeLinhas)()
 // console.log(reprovado[0].aprovado)

  if(reprovado[0].aprovado) return 0
  else return reprovado[0].codigoDisciplina
  
}

const ch = () => {
  const qtdeLinhas = document.getElementsByTagName('tr').length - 3
  const chor = getDados(qtdeLinhas)()

  return chor[0].cargaHoraria
}