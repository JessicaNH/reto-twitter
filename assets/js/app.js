alert("hola");
const boton = document.getElementById('btn');

boton.addEventListener ('click', () => {
   //aca guardo el comentario ingresado por el usuario
  let comments = document.getElementById ('comment').value;
  document.getElementById('cont').innerHTML = comments;
  document.getElementById('comment').value=' ';
  //crear un div contenedor
const newComments = document.createElement('div');
//validar que el textarea tenga un comentario
if (comments.length === 0 || comments === null) {
 alert ('Debes ingresar un mensaje');
} 
return false; 
 let textNewComment = document.createTextNode(comments);
 const contenedorElemento = document.createElement ('p');
 contenedorElemento.appendChild (textNewComment);
 newComments.appendChild(contenedorElemento);

 cont.appendChild(newComments);
});

