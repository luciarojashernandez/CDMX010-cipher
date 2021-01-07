 const cipher={

    // encode: function (userInput, desplazamiento) {
    //    let result = "", code;
    //    for (let i=0; i<userInput.length; i++){
    //      if(userInput.charCodeAt(i)>=65 && userInput.charCodeAt(i)<=90){ //mayúsculas
    //        code = (((userInput.charCodeAt(i)-65)+desplazamiento)%26)+65; //
    //       //  result+=String.fromCharCode(code);
    //        // console.log(result);
    //      }
    //      else if (userInput.charCodeAt(i)>=97 && userInput.charCodeAt(i)<= 122){
    //        code = (((userInput.charCodeAt(i)-97)+desplazamiento)%26)+97;
    //         // result+=String.fromCharCode(code);
    //      }
    //      else if (userInput.charCodeAt(i)===32){
    //        code=32;
    //       //  result+=String.fromCharCode(code);
    //      }
    //       //  else {
    //       //    result+=Text.charCodeAt(i);
    //       //  }
    //       result+=String.fromCharCode(code);
    //    }   
    //     return result;    
    //  }, 

//abcdefghijklmnopqrstuvwxyz
//hijklmn
    
    encode:function (userInput, desplazamiento) {
      let offsetEncode = parseInt(desplazamiento);
      let resultEncode = "";
      for(let i=0; i<userInput.length; i++){
        let encodeLetter = userInput.charCodeAt(i);
        console.log(encodeLetter);
        if (encodeLetter >= 97 && encodeLetter <= 122){
          let operacion=(((encodeLetter+offsetEncode)-97)%26)+97;
          resultEncode+=String.fromCharCode(operacion);
          console.log("operacion", operacion); 
        }else if(encodeLetter >= 65 && encodeLetter <=90){
          let operacion=(((encodeLetter+offsetEncode)-65)%26)+65;
          resultEncode+=String.fromCharCode(operacion);
          console.log("operacion", operacion);
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
          let operacion=(((decodeLetter-97)+(26-offsetDecode))%26)+97;
          resultDecode+=String.fromCharCode(operacion);
          console.log(operacion);
        }else if (decodeLetter>=65 && decodeLetter<=90){
          let operacion=(((decodeLetter-65)+(26-offsetDecode))%26)+65;
          resultDecode+=String.fromCharCode(operacion);
        }else if (decodeLetter===32){
          resultDecode+=String.fromCharCode(32);
        }
      }return resultDecode;
    }
  

  //   decode: function (userOutput, desplazamiento) {
  //     let resultDecode= "", code;
  //     for (let i=0; i<userOutput.length;++i){
  //       if(userOutput.charCodeAt(i)>=65 && userOutput.charCodeAt(i)<=90){
  //         code=(((userOutput.charCodeAt(i)-65)-desplazamiento)%26)+65;
  //       }
  //       else if (userOutput.charCodeAt(i)>=97 && userOutput.charCodeAt(i)<= 122){
  //        code = (((userOutput.charCodeAt(i)-97)-desplazamiento)%26)+97;
  //         // result+=String.fromCharCode(code);
  //      }
  //      else if (userOutput.charCodeAt(i)===32){
  //        code=32;
  //       //  result+=String.fromCharCode(code);
  //      }
  //     //  else {
  //     //    resultDecode+=Text.charCodeAt(i);
  //     //  }
  //       resultDecode+=String.fromCharCode(code);
  //    }  return resultDecode;     
  //  }  
}
  
export default cipher; 
 


    

    

    

