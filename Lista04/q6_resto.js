const log = (x) => console.log(x)

const resto = (n, m) => n<m ? n : resto(n-m, m)

log(resto(28, 7))