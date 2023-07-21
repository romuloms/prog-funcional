const inverte = (string) => {
  
  if(string.charAt(0) == '') return ''
  
  else return inverte(string.slice(1)) + string.charAt(0)

}

console.log(inverte("onibus"))