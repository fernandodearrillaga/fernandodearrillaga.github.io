document.getElementsByClassName("BotonAñadir")[0].onclick = () =>{ //añade a la lista el valor del input
    const node=document.createElement("li");
    const textNode=document.createTextNode(document.getElementsByClassName("AñadirElemento")[0].value);

    node.appendChild(textNode);

    document.getElementsByTagName("ul")[0].appendChild(node);
}