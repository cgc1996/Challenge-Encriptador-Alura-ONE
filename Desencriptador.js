const inputtexto =document.querySelector(".input");
const mensaje= document.querySelector(".input-desencript");
function desencriptar(textoParaDesencriptar){

    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    
    textoParaDesencriptar=textoParaDesencriptar.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(textoParaDesencriptar.includes(matrizCodigo[i][1])){
            textoParaDesencriptar=textoParaDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return textoParaDesencriptar;

}

function botondesencriptar(){
    const textoDesencriptado= desencriptar(inputtexto.value);
    mensaje.value= textoDesencriptado;
}
