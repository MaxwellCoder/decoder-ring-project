// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

    if (!alphabet || !(alphabet.length === 26)) return false;
    for (let i = 0; i < alphabet.length; i++){
      if (alphabet.includes(alphabet[i], (i + 1))) return false;
    }

    let codedArray = [ {letter: "a"}, {letter: "b"}, {letter: "c"}, {letter: "d"}, {letter: "e"},
    {letter: "f"}, {letter: "g"}, {letter: "h"}, {letter: "i"}, {letter: "j"}, {letter: "k"},
    {letter: "l"}, {letter: "m"}, {letter: "n"}, {letter: "o"}, {letter: "p"},
    {letter: "q"}, {letter: "r"}, {letter: "s"}, {letter: "t"}, {letter: "u"},
    {letter: "v"}, {letter: "w"}, {letter: "x"}, {letter: "y"}, {letter: "z"},
    ];

 
    for (let i = 0; i < alphabet.length; i++){
        codedArray[i].code = alphabet[i];
    };

    let result = "";
    let lowerCase = input.toLowerCase();

    if (encode === false){
      for (let i = 0; i < lowerCase.length; i++){
        if (lowerCase[i] === " ") result += lowerCase[i];
        else {
        let found = codedArray.find((object) => object.code === lowerCase[i]);
        result += found.letter;
        }
      }
    }

    //to encode
    else{
      for (let i = 0; i < lowerCase.length; i++){
        if (lowerCase[i] === " ") result += lowerCase[i];
        else {
        let foundCode = codedArray.find((object) => object.letter === lowerCase[i]);
        result += foundCode.code;
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };