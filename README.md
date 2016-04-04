# Print Ascii

A simple function to print ascii characters as printable ascii or as printable counterparts of the nonprintable ascii codes

### Installation
```
npm install print-ascii
```

### Usage
```javascript
var str = 'Hello\x20World!!\x08';
console.log(printAscii(str));
// Hello[Space]World!![BS]
```
