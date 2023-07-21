const collatz = (n) => {
  if(n == 1) {
    console.log(n)
    return 0
  }
  else if(n%2 == 0) {
    console.log(n)
    return 1 + collatz(n/2)
  }
  else if(n%2 != 0) {
    console.log(n)
    return 1 + collatz((n*3) + 1)
  }
}

console.log(collatz(10))