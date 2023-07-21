const resto = (n, m) => {
  if(n<m) { 
    return n
  } else {
    return resto(n-m, m)
  }
}

console.log(resto(31, 7))