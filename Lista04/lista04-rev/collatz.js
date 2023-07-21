const collatz = n => {
  if(n==1) 
    return 0
  else if(n%2==0)
    return 1 + collatz(n/2)
  else 
    return 1 + collatz(n*3 + 1)
}

console.log(collatz(10))