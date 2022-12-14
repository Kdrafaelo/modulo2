
 function caesarCipherEnconder(normalText, key=1) {
    normalText = normalText.split('');
    let encodedText = '';
  
    for (let i = 0; i < normalText.length; i++) {
      const currentCharCode = normalText[i].charCodeAt();
      
      if (currentCharCode >= 97 && currentCharCode <= 122)
        encodedText += String.fromCharCode((currentCharCode - 97 + key) % 26 + 97);
      else if (currentCharCode >= 65 && currentCharCode <= 90)
        encodedText += String.fromCharCode((currentCharCode - 65 + key) % 26 + 65);
      else
        encodedText += normalText[i];
    }
  
    return encodedText;
  }
  

  function caesarCipherDecoder(encodedText, key=1) {
    encodedText = encodedText.split('');
    let normalText = '';
  
    for (let i = 0; i < encodedText.length; i++) {
      const currentCharCode = encodedText[i].charCodeAt();
  
      if (currentCharCode >= 97 && currentCharCode <= 122)
        normalText += String.fromCharCode((currentCharCode - 122 - key) % 26 + 122);
      else if (currentCharCode >= 65 && currentCharCode <= 90)
        normalText += String.fromCharCode((currentCharCode - 90 - key) % 26 + 90);
      else
        normalText += encodedText[i];
    }
  
    return normalText;
  }