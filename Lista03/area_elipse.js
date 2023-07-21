const areaElipse = (x, y, pi=3.14) => {
  if(x<0 || y<0) return "Os raios não podem ser negativos."
  else return x*y*pi
}

console.log(areaElipse(-3, 3))