const min = (a, b, c) => a(c) < b(c) ? a : b

console.log(min((x)=>x**3, (y)=>3*y, 4)(-1))