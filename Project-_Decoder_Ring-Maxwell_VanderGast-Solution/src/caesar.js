// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

  let result = ""; 
  let lowerCase = input.toLowerCase(); 
  if (encode == false){ 
    for (let i = 0; i < lowerCase.length; i++){
      if (lowerCase[i].match(/[a-z]/i)) {
        const ringCode = lowerCase.charCodeAt(i); 
        let convertCode = ((ringCode - 97) - shift);
        if (convertCode < 0) convertCode +=26;
        else if (convertCode > 25) convertCode -=26;
        let convertedLetters = String.fromCharCode(convertCode  + 97);
        result += convertedLetters;
      } else {
      result += lowerCase[i];
      }
    }
  } else { 
    for (let i = 0; i < lowerCase.length; i++){
      if (lowerCase[i].match(/[a-z]/i)) {
        const ringCode = lowerCase.charCodeAt(i);
        let convertedCode = ((ringCode - 97) + shift);
        if (convertedCode < 0) convertedCode +=26;
        else if (convertedCode > 25) convertedCode -=26;
        let convertedLetters = String.fromCharCode(convertedCode  + 97);
        result += convertedLetters;
      } else {
      result += lowerCase[i];
      }
    }
  } 
  return result;
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };