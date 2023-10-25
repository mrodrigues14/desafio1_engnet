function rot13(str) {
    return str.replace(/[A-Z]/g, function(char) {
      let charCode = char.charCodeAt(0);
      
      if (charCode <= 77) {
        return String.fromCharCode(charCode + 13);
      } 
      else {
        return String.fromCharCode(charCode - 13);
      }
    });
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  