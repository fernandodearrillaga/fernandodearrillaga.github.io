for (let i = 0; i < document.getElementsByTagName("h3").length; i++) {
    const element = document.getElementsByTagName("h3")[i];// al hacer click en un h3, escribe datos sobre el apartado seleccionado
    element.addEventListener("click", myFunction);
    



function myFunction(event) { 
    const para=document.createElement("p");
    
    let text = event.target.innerText;
    para.innerText= "Has elegido"+text+" que se imparte en turno de "+element.parentNode.id+"\n Los nº de grupos que se imparten son "+element.nextElementSibling.getElementsByTagName("li").length;
    para.innerText+=": "
    for (let j = 0; j < element.nextElementSibling.getElementsByTagName("li").length-1; j++) {

        para.innerText+=element.nextElementSibling.getElementsByTagName("li")[j].innerText+ ", ";
        
    }
    para.innerText=para.innerText.slice(0,-2);
    para.innerText+=" y ";
    para.innerText+=element.nextElementSibling.getElementsByTagName("li")[element.nextElementSibling.getElementsByTagName("li").length-1].innerText;
    
    document.body.appendChild(para);
}
}