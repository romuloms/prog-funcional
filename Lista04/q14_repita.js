const repita = (string, rep) => 
  (rep===0) ? "" : string+repita(string, rep-1)

console.log(repita("hua", 15))