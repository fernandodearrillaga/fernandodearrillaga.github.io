let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(event) {
  // Realiza las acciones de los botones subir, borrar y bajar para los elementos de la lista
let aux= "";
  
  
  for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
    if (event.target.parentElement==document.getElementsByTagName("li")[i] && event.target.innerText=="subir" && i!=0) {
      aux=document.getElementsByTagName("li")[i-1].childNodes[0].nodeValue;
      document.getElementsByTagName("li")[i-1].childNodes[0].nodeValue=document.getElementsByTagName("li")[i].childNodes[0].nodeValue;
      document.getElementsByTagName("li")[i].childNodes[0].nodeValue=aux;
      
      
    }

    if (event.target.parentElement==document.getElementsByTagName("li")[i] && event.target.innerText=="bajar" && i!=document.getElementsByTagName("li").length-1) {
      aux=document.getElementsByTagName("li")[i+1].childNodes[0].nodeValue;
      document.getElementsByTagName("li")[i+1].childNodes[0].nodeValue=document.getElementsByTagName("li")[i].childNodes[0].nodeValue;
      document.getElementsByTagName("li")[i].childNodes[0].nodeValue=aux;
      
      
    }

    if (event.target.parentElement==document.getElementsByTagName("li")[i] && event.target.innerText=="borrar" ) {
      
      
      document.getElementsByTagName("li")[i].remove();
      
      
    }
    
  }

 }

 function MostrarOcultarLista(){
  // Muestra u oculta la información de las cosas que son violeta (listDiv)
  //document.getElementById("parrafos").classList.toggle("inverso");
    if(toggleList.innerText=="Ocultar lista"){
        toggleList.innerText="Mostrar lista";
        listDiv.style.display = "none";
    }else{
        toggleList.innerText="Ocultar lista";
        listDiv.style.display = "block";
    }
 }
 function CambiarTextoLista(){
  
  //Modifica  el texto de la lista (descriptionP) con el valor del input (descriptionInput).
  // Inicialmente COSAS QUE SON VIOLETA

  descriptionP.innerText=descriptionInput.value;
 }
 function AñadirElemento(){
  //Añade un nuevo elemento a la lista con el valor del input (addItemInput). 
  //Recuerda que el elemento tendrá que tener sus botones de subir, bajar y borrar.
  const node=document.createElement("li");
  const textNode=document.createTextNode(addItemInput.value);

  node.appendChild(textNode);

  document.getElementsByTagName("ul")[0].appendChild(node);


    attachListItemButtons(lis[lis.length-1]);


  
 }


