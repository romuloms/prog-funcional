const log = (x) => console.log(x)

const fib = (num) => {
  if(num == 1) {
    return 0
  }
  else if(num == 2) {
    return 1
  }
  else {
    return fib(num-1) + fib(num-2)
  }
}

log(fib(5))
