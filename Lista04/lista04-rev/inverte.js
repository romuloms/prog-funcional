const inverte = (str) => (str == '') ? '' : inverte(str.slice(1)) + str.slice(0, 1)

console.log(inverte("programa"))