const caminhos = (cidades) => (cidades===1) ? 1 : (cidades*caminhos(cidades-1))

console.log(caminhos(5))