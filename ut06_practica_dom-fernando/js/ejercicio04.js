document.getElementsByTagName("button")[0].onclick = () =>{ //añade a la lista el valor del input
    const node=document.createElement("li");
    const textNode=document.createTextNode(document.getElementsByClassName("AñadirElemento")[0].value);

    node.appendChild(textNode);

    document.getElementsByTagName("ul")[0].appendChild(node);
}
document.getElementsByTagName("button")[1].onclick = () =>{ //elimina el último elemento
    document.getElementsByTagName("ul")[0].lastElementChild.remove();
}
document.getElementsByTagName("button")[2].onclick = () =>{ //elimina el primer elemento
    document.getElementsByTagName("ul")[0].firstElementChild.remove();
}