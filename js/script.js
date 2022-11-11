window.addEventListener("load",iniciar);
function iniciar() { //añade eventos a los campos dirección y país
    document.getElementById('direccion').addEventListener('keyup', activarTarjeta);
    document.getElementById('pais').addEventListener('click', activarTarjeta);
}




const regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;      //regexp de la contraseña
const regexpCorreo=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexpNombre=/^[\w]+[\s]?[\w]+$/;
const regexpTarjeta=/^\d{8,19}$/;



function validar(e) {       //Valida los datos del registro
    e.preventDefault();
    var nombre=document.getElementById("nombre").value;
    var apellidos=document.getElementById("apellidos").value;
    var password= document.getElementById("contra").value;
    var password2=document.getElementById("contra2").value;
    var correo= document.getElementById("correo").value;
    var tarjeta= document.getElementById("numeroTarjeta").value;

    
    if(regexpNombre.test(nombre)===false){
        alert("Nombre debe tener un máximo de 2 palabras");
        }
    else if(regexpNombre.test(apellidos)===false){
    alert("Apellidos debe tener un máximo de 2 palabras");
    }
    else if(regexp.test(password)===false){
        alert("La contraseña debe tener al menos ocho caracteres y contener al menos una letra minúscula, una mayúscula, un número y un símbolo");
        }
    else if(password!==password2){
        alert("Las contraseñas no coinciden");
    } 
    else if(regexpCorreo.test(correo)===false){
        alert("El correo es inválido");
    } 

    else if (tarjeta!=""){
        if(regexpTarjeta.test(tarjeta)===false){
            alert("El número de tarjeta no es válido");
        }
    }
    
    else {
        alert("Se ha registrado correctamente");
    }
    
}

function validarLogin(e) {  //valida los datos del login
    e.preventDefault();


    var passwordLog= document.getElementById("contraLog").value;
    var correoLog= document.getElementById("correoLog").value;
    if (regexp.test(passwordLog)===true&&regexpCorreo.test(correoLog)===true){
        alert("Se ha logueado correctamente");
    }
}

function activarTarjeta() { //activa el campo del número de tarjeta de crédito
    var direccion= document.getElementById("direccion").value;
    var pais= document.getElementById("pais").value;
    if (direccion.length >= 1  && pais.length >=1) {
      document.getElementById('numeroTarjeta').disabled = false;
    } else {
      document.getElementById('numeroTarjeta').disabled = true;
    }
}


