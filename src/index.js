const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const dotsDashes = {
  '10': '.',
  '11': '-',
};

function decode(expr) {
  let result = '';
  let exprArray = new Array;
  let dotsDashesArray = new Array;
  let uno = -1;
  let currentSubstr = '';
  for(let i = 0; i < expr.length; i = i + 10) {
    currentSubstr = expr.substring(i, i + 10); 
    if (currentSubstr !== '**********') {
      uno = currentSubstr.indexOf('1'); //начало значимых цифр
      exprArray.push(currentSubstr.substring(uno));
    }
    else {
      exprArray.push(' ');
    }
  }
  for(let i = 0; i < exprArray.length; i++){
    dotsDashesArray[i] = '';
    if (exprArray[i] !== ' ') {
      for(let j = 0; j < exprArray[i].length; j = j + 2){
        if (exprArray[i].substring(j, j + 2) in dotsDashes) {
        dotsDashesArray[i] = dotsDashesArray[i] + dotsDashes[exprArray[i].substring(j, j + 2)];
        }
      }
    } else {
     dotsDashesArray[i] = exprArray[i]; 
    }
  }
//  console.log(exprArray);
//  console.log(dotsDashesArray);
  for(let i = 0; i < dotsDashesArray.length; i++){
    if (dotsDashesArray[i] !== ' ') {
      result += MORSE_TABLE[dotsDashesArray[i]]; 
    } else {
      result += ' ';
    }
  }
//  console.log(result);
  return result;
}


module.exports = {
    decode
}