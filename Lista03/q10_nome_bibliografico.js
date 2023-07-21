const nomeBibliografico = (nome) => (sobrenome) => `${sobrenome}, ${nome}.`

const nome = "John"
const sobrenome = "Saint"

console.log(nomeBibliografico(nome)(sobrenome))