function nomeBibliografico( nome, sobrenome ) {
  return `${sobrenome}, ${nome}.`
}

const nome = nomeBibliografico( "João", "Santos" )

console.log(nome)