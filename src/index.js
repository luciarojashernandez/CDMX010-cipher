
import cipher from './cipher.js'

 console.log(cipher);

 document.getElementById ("start").style.display = "none"
 document.getElementById ("myNotes").style.display = "none"
 document.getElementById ("newNote").style.display = "none"
 document.getElementById("btnDescifrar");
 document.getElementById("userInput");
 document.getElementById("userOutput");
 document.getElementById("desplazamiento");

 // Botón menú IR A INICIO
 let inicio = document.getElementById("btnStart");
 inicio.addEventListener("click",goInicio);
 function goInicio() {
   document.getElementById ("newNote").style.display = "none";
   document.getElementById ("myNotes").style.display = "none";  
   document.getElementById ("start").style.display = "block";
 }

 // Botón menú IR A NUEVA NOTA
 let nvaNota = document.getElementById("btnNewNote");
 nvaNota.addEventListener("click",goNewNote);
 function goNewNote() {
   document.getElementById ("start").style.display = "none";
   document.getElementById ("myNotes").style.display = "none";
   document.getElementById ("newNote").style.display = "block";
 }

 // Botón menú IR A MIS NOTAS
 let misNotas = document.getElementById("btnMyNotes");
 misNotas.addEventListener("click",goMyNotes);
 function goMyNotes() {
   document.getElementById ("start").style.display = "none";
   document.getElementById ("newNote").style.display = "none";
   document.getElementById ("myNotes").style.display = "block";  
}

//botón pra cifrar mi nota
document.getElementById("btnCifrar").addEventListener("click", 
function enviarTextoCifrado() { //se traen lo elementos del doc
  let textoCifrado=document.getElementById("userInput").value; 
  let desplazamiento=document.getElementById("desplazamiento").value;
  let userOutput=document.getElementById("userOutput");
  const resultado=cipher.encode(textoCifrado,desplazamiento);
  document.getElementById("userOutput").value==textoCifrado;
  userOutput.innerHTML=resultado;  //elemento.innerHTML para traer el texto
} 
);

//botón pra descifrar mi nota
document.getElementById("btnDescifrar").addEventListener("click",
function enviarTextoDescifrado() {
  let textoDescifrado=document.getElementById("userOutput").value;
  let desplazamiento=document.getElementById("desplazamiento").value;
  let userInput=document.getElementById("userInput");
  const res=cipher.decode(textoDescifrado,desplazamiento);
  document.getElementById("userInput").value==textoDescifrado;
  userInput.innerHTML=res; 
}
);




  


 