const deslocaDir = (bits) => (num) => {
  if(bits == 0) {
    return num
  }
  else if(bits == 1) {
    return Math.floor(num/2)
  }
  else {
    return deslocaDir(bits-1)(Math.floor(num/2))
  }
}

console.log(deslocaDir(3)(80))