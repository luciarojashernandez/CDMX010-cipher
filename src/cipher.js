
const  encode = (string, desplazamiento)=>{
  let result = "", code;
    for (let i=0; i<string.length;i++){
      if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
      code = (((string.charCodeAt(i)-65)+desplazamiento)%26)+65;
      result+=String.fromCharCode(code);
      }
      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
      code = (((string.charCodeAt(i)-97)+desplazamiento)%26)+97;
      result+=String.fromCharCode(code);
      }
      else if (string.charCodeAt(i)===32){
      code=32;
      result+=String.fromCharCode(code);
      }
    } return result;
};
console.log(desplazamiento); //trae select html
console.log(encode("Abrahamz", 2));
    
    
    
  // decode = (string, offset)=>{
  //     let resultDecode = "", code;
  //       for (let i=0; i<string.length;i++){
  //         if(string.charCodeAt(i)<=65 && string.charCodeAt(i)>=90){
  //           code = (((string.charCodeAt(i)-65)+offset)%26)-65;
  //           resultDecode+=String.fromCharCode(code);
  //         }
  //         else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
  //           code = (((string.charCodeAt(i)-97)+offset)%26)-97;
  //           resultDecode+=String.fromCharCode(code);
  //         }
  //         else if (string.charCodeAt(i)===32){
  //           code=32;
  //           resultDecode+=String.fromCharCode(code);
  //         }
  //       } return resultDecode;       
  //     };
  //   console.log(decode("jk", 2));
    
export default encode;
