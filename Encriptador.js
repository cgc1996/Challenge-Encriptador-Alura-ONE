const inputtexto =document.querySelector(".input");
const mensaje= document.querySelector(".input-desencript");

function encriptar(textoParaEncriptar){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];    

    textoParaEncriptar =textoParaEncriptar.toLowerCase();
    for(let i=0;i<matrizCodigo.length;i++){
        if(textoParaEncriptar.includes(matrizCodigo[i][0])){
            textoParaEncriptar=textoParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textoParaEncriptar;
}

function botonencriptar(){
    const textoEncriptado= encriptar(inputtexto.value);
    mensaje.value= textoEncriptado;
}
