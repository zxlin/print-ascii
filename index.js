'use strict';
var _printAsciiMapping = {
  0 : 'NULL',
  1 : 'SOH',
  2 : 'STX',
  3 : 'ETX',
  4 : 'EOT',
  5 : 'ENQ',
  6 : 'ACK',
  7 : 'BEL',
  8 : 'BS',
  9 : 'TAB',
  10 : 'LF',
  11 : 'VT',
  12 : 'FF',
  13 : 'CR',
  14 : 'SO',
  15 : 'SI',
  16 : 'DLE',
  17 : 'DC1',
  18 : 'DC2',
  19 : 'DC3',
  20 : 'DC4',
  21 : 'NAK',
  22 : 'SYN',
  23 : 'ETB',
  24 : 'CAN',
  25 : 'EM',
  26 : 'SUB',
  27 : 'ESC',
  28 : 'FS',
  29 : 'GS',
  30 : 'RS',
  31 : 'US',
  32 : 'Space',
  127 : 'DEL'
};
function printAscii(w) {
  if (typeof w !== 'string') {
    throw new Error('Parameter must be a string');
  }
  var r = '';
  for (var i = 0, len = w.length; i < len; i++) {
    var c = w.charCodeAt(i);
    if (c >= 33 && c <= 126) {
      r += w.charAt(i);
    } else {
      r += '[' + _printAsciiMapping[c] + ']';
    }
  }
  return r;
}
if (module) {
  module.exports = printAscii;
}
