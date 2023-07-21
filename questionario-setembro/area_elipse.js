const areaElipse = (r1, r2, pi = 3.14) => {
  if(r1<0 || r2<0) return "O raio não pode ser negativo."
  else return r1*r2*pi
}

console.log(areaElipse(3,2));