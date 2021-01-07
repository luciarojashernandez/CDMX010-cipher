 const cipher={

//abcdefghijklmnopqrstuvwxyz
//hijklmn
    
    encode:function (userInput, desplazamiento) {
      let offsetEncode = parseInt(desplazamiento);
      let resultEncode = "";
      for(let i=0; i<userInput.length; i++){ //.length (guarda el n de caracteres del str)
         //expInicial; condicional; actualización
        let encodeLetter = userInput.charCodeAt(i);
        //console.log(encodeLetter); //"h" 104 //"H" 72
        if (encodeLetter >= 97 && encodeLetter <= 122){
          let operacion=(((encodeLetter+offsetEncode)-97)%26)+97;
          resultEncode+=String.fromCharCode(operacion);
          //console.log("operacion", operacion); //"h" 106 
        }else if(encodeLetter >= 65 && encodeLetter <=90){
          let operacion=(((encodeLetter+offsetEncode)-65)%26)+65;
          resultEncode+=String.fromCharCode(operacion);
          //console.log("operacion", operacion);//"H" 74
        }else if (encodeLetter===32){
          resultEncode+=String.fromCharCode(32);
        }
      }return resultEncode;
    },

    decode: function (userOutput, desplazamiento) {
      let offsetDecode = parseInt(desplazamiento)
      let resultDecode = "";
      for(let i=0; i<userOutput.length; i++){
        let decodeLetter = userOutput.charCodeAt(i);
        if (decodeLetter >= 97 && decodeLetter <= 122){
          let operacionDecode=(((decodeLetter-97)+(26-offsetDecode))%26)+97;
          resultDecode+=String.fromCharCode(operacionDecode);
        }else if (decodeLetter>=65 && decodeLetter<=90){
          let operacionDecode=(((decodeLetter-65)+(26-offsetDecode))%26)+65;
          resultDecode+=String.fromCharCode(operacionDecode);
        }else if (decodeLetter===32){
          resultDecode+=String.fromCharCode(32);
        }
      }return resultDecode;
    }
  
}
  
export default cipher; 
 


    

    

    

