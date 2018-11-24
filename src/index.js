const replaceStringAtPosition = require('replace-string-at-position');

module.exports = function stripMentions(msg, openingBracket = '<@!', closingBracket = '>')
{
  let startPos;
  let endPos
  openingBracket = RegExp(openingBracket, 'g');
  closingBracket = RegExp(closingBracket, 'g');

  while ((openingMatch = openingBracket.exec(msg)) !== null && (closingMatch = closingBracket.exec(msg)) !== null) {
    let mention = msg.substring(openingMatch.index, closingMatch.index + 1);
    msg = replaceStringAtPosition(msg, mention, '', openingMatch.index);
  }
  return msg.trim();
};
