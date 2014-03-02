# CONSTANT
space = ' '
comma = ','

splitString = (textToSplit, seperator) ->
  newText = textToSplit.split(seperator)
  i = 0
  while i < newText.length
    cappedWord = capitalizeFirstChar(newText[i])
    newText[i] = cappedWord
    i++
  newJoinedText = newText.join(seperator)
  newJoinedText

capitalizeFirstChar = (text) ->
  newText = text[0].toUpperCase() + text.slice(1);

text = process.argv[2]
console.log text
joinedText = splitString(text, space)
console.log joinedText
