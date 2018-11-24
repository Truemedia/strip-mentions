const stripMentions = require('./src/index');

let msg = stripMentions('<@!UserId> Hello');
console.log(msg);
