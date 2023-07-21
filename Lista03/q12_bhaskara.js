const fraiz = (a,b,c,r) => { 
  const delta = b**2 - 4*a*c
  if (r>0) return ((-1)*b + Math.sqrt(delta))/(2*a)
  else return ((-1)*b - Math.sqrt(delta))/(2*a)
}

const a = -2
const b = 1 
const c = 3

const raiz1 = fraiz(a,b,c,-1)
const raiz2 = fraiz(a,b,c,1)

console.log(`As raízes da equação são: ${raiz1} e ${raiz2}.`)