// const cipher = {
//   encode: function() {
//     let text = 'adriana';
//     for(let i = 0; i < text.length; i++){
//       console.log(text[i]);
//     }
//   },
//   decode
// };

// export default cipher;

const encode = (string, offset)=>{
    let result = "", code;
    for (let i=0; i<string.length;i++){
      if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        code = (((string.charCodeAt(i)-65)+offset)%26)+65;
        result+=String.fromCharCode(code);
      }
      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
        code = (((string.charCodeAt(i)-97)+offset)%26)+97;
        result+=String.fromCharCode(code);
      }
      else if (string.charCodeAt(i)===32){
        code=32;
        result+=String.fromCharCode(code);
      }
    } return result;
    
  };
console.log(encode("Lu", 2));

export default encode;