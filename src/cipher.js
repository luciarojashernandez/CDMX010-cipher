/*const cipher = {
  encode: function() {
    let text = 'adriana';
    for(let i = 0; i < text.length; i++){
      console.log(text[i]);
    }
  },
  decode
};

export default cipher;*/

/*const cipher = {
  function encode13(texto) {
    for (let i = 0; i < textp.length; i ++)
    console.log (texto[i]);
    
  }
}

encode13 ("A")*/

function rot13(texto) {
  let decode = "";
  for (let i = 0; i < texto.length; i ++){
    let asciiNum = texto [i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      decode += String.fromCharCode (asciiNum + 13);
  } else if (asciiNum >= 78 && asciiNum <= 90){
      decode += String.fromCharCode (asciiNum -13);
  } else {
      decode += [i];
  }
  return decode;
}
}
// }

rot13 ("A");
