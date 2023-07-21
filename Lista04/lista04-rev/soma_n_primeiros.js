const somaN = (num) => (num===0) ? 0 : somaN(num-1) + num

console.log(somaN(6))