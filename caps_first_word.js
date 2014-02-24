// CONSTANT
var space = ' ';
var comma = ',';

var splitString = function (textToSplit, seperator) {
  var newText = textToSplit.split(seperator);
  for (i = 0; i < newText.length; i++) {
    // console.log(newText[i]);
    var cappedWord = capitalizeFirstChar(newText[i]);
    // console.log(cappedWord);
    newText[i] = cappedWord;
  }
  var joinedText = newText.join(seperator);
  return joinedText;
}

var capitalizeFirstChar = function (text) {
  var newText = text[0].toUpperCase() + text.slice(1);
  return newText;
}

var text = process.argv[2];
console.log(text); 
var joinedText = splitString(text, space);
console.log(joinedText);
