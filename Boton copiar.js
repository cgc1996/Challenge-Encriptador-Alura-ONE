function botoncopiar(){
    var copia = document.getElementById("input-desencript").value
  
    navigator.clipboard.writeText(copia)
  
    alert("Texto copiado al portapapeles" )
  
  }