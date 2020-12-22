
import cipher from './cipher.js'

 console.log(cipher);

 document.getElementById ("start").style.display = "none"
 document.getElementById ("myNotes").style.display = "none"
 document.getElementById ("newNote").style.display = "none"

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

document.getElementById("btnFunciona").addEventListener("click", 
function enviarTexto() {
  let textoCifrado=document.getElementById("userInput").value;
  let desplazamientoLet=document.getElementById("desplazamiento").value;
  let userOutput=document.getElementById("userOutput");
  const resultado=cipher.encode(textoCifrado,desplazamientoLet);
  document.getElementById("userOutput").value==textoCifrado;
  userOutput.innerHTML=resultado;  
  console.log(resultado);
} 
);


document.getElementById("btnDescifrar");
document.getElementById("userInput").value="";
document.getElementById("userOutput");
document.getElementById("desplazamiento");

  // let start=document.getElementById ("start");
  // start.style.display="none";
  // let newNote=document.getElementById ("newNote");
  // newNote.style.display="block";
  // let myNotes=document.getElementById ("myNotes");
  // myNotes.style.display="none";

// let mostrarTexto = document.getElementById("btnCifrar");
// mostrarTexto.addEventListener("click", enviarTexto);
// function enviarTexto() {
//   let textoCifrado=document.getElementById("userOutput").value;
//   document.getElementById("userInput").value==textoCifrado;
//   userOutput.innerHTML=textoCifrado;
// }
// console.log(mostrarTexto);





// let userStringIn = document.getElementById("string")
// let cipherText = document.getElementById("cifrar");
// cipherText.addEventListener("click",cifrado);
// function cifrado() {
//   document.getElementById("encode").innerHTML="result";

// document.getElementById("btnCifrar");
// document.getElementById("btnDescifrar");
// document.getElementById("userInput");




// console.log(offset);

// let cifrarTexto = document.getElementById("btnCifrar");
// cifrarTexto.addEventListener("click",encodeMsg);
// function encodeMsg() {
//   document.getElementById ("newNote").style.display = "none";
//   document.getElementById ("myNotes").style.display = "none";  
//   document.getElementById ("start").style.display = "block";
// }

  //  decode = (string, offset)=>{
  //      let resultDecode = "", code;
  //        for (let i=0; i<string.length;i++){
  //          if(string.charCodeAt(i)<=65 && string.charCodeAt(i)>=90){
  //            code = (((string.charCodeAt(i)-65)+offset)%26)-65;
  //            resultDecode+=String.fromCharCode(code);
  //          }
  //          else if (string.charCodeAt(i)<=97 && string.charCodeAt(i)>=122){
  //            code = (((string.charCodeAt(i)-97)+offset)%26)-97;
  //            resultDecode+=String.fromCharCode(code);
  //          }
  //          else if (string.charCodeAt(i)===32){
  //            code=32;
  //            resultDecode+=String.fromCharCode(code);
  //          }
  //        } return resultDecode;       
  //      };
  //    console.log(decode("jk",2));

  


 