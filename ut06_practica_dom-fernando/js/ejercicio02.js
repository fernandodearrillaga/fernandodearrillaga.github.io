document.getElementById("button").onclick = () =>{ //al hacer click se cambia el color del fondo y el texto del botón
    document.getElementById("parrafos").classList.toggle("inverso");
    if(document.getElementById("button").value=="fondo claro"){
        document.getElementById("button").value="fondo oscuro";
    }else{
        document.getElementById("button").value="fondo claro";
    }
    
}

