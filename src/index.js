//import cipher from './cipher.js';

//console.log(cipher);

//document.getElementById (password).style.display = "none"
//document.getElementById (inicio).style.display = "none"
//document.getElementById (micuenta).style.display = "none"
//document.getElementById (cifrado).style.display = "none"

const barra= document.querySelector('.barra');
barra.addEventListener('click', function(){
  document.getElementById('sidebar').classList.toggle('active');
   //"toggle" quita o agrega una clase
});

//El usuario ingresa a "inicio" (su cuenta) por nombre
function comenzar(){
  let name = prompt("Ingresa tu nombre para acceder a tu cuenta");
  document.getElementById("inicio").innerText = "Bienvenide, "+name;
  document.getElementById ("password").style.display = "none"
  document.getElementById ("inicio").style.display = "block"
}

/*El usuario se dirige a la pantalla de inicio 
donde puede elegir agregar una nota o salir*/

function irnotas(){
  document.getElementById ("inicio").style.display = "none"
  document.getElementById ("micuenta").style.display = "bock"
  
}

function nuevanota(){
  document.getElementById ("inicio").style.display = "none"
  document.getElementById ("cifrado").style.display = "bock"
  
}
