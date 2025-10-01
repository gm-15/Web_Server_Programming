const { parse } = require('path');
const url = require('url');

const{URL} = url;
const myURL = new URL('');

console.log('new URL(): myURL');
console.log('url.format():', url.format(myURL));

const parseUrl = url.parse('');
console.log('url.parse():', parseUrl);
console.log('url.format()',url.format(parseUrl));
