import cipher from './cipher.js';

console.log(cipher);

document.getElementById ("start").style.display = "none"
document.getElementById ("myNotes").style.display = "none"
document.getElementById ("newNote").style.display = "none"



function misNotas(){
  let btnMyNotes;
  btnMyNotes = document.getElementById("btnMyNotes");
  btnMyNotes.addEventListener("click","goMyNotes");  
}
function goMyNotes(){
  document.getElementById ("start").style.display = "none"
  document.getElementById ("newNote").style.display = "none"
  document.getElementById ("myNotes").style.display = "block"
}


  


