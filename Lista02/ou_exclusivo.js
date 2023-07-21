  function ouExclusivo( a, b ) {
    return ( a || b ) && !( a && b )
  }

  const valores = ouExclusivo( false, true )

  console.log(valores)