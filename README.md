# Strip mentions
Strip @mentions from a string using a default or custom handle style

By default this strips mentions from *Discord* messages but you can use custom handlers by passing the opening and closing tags as second and third parameters to the function.

## Installation

NPM
```bash
    npm i --save strip-mentions
```

Yarn
```bash
    yarn add strip-mentions
```

## Usage
Node
```js
const stripMentions = require('strip-mentions');
let msg = '<@!UserId> Hello';
let output = stripMentions(msg);
console.log(output);
```
