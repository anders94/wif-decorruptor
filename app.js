var bitcoinjs = require('bitcoinjs-lib');

var base58chars = ['1','2','3','4','5','6','7','8','9','A','B','C','D',
                   'E','F','G','H','J','K','L','M','N','P','Q','R','S',
                   'T','U','V','W','X','Y','Z','a','b','c','d','e','f',
                   'g','h','i','j','k','m','n','o','p','q','r','s','t',
                   'u','v','w','x','y','z'];

var verbose = false;

var pk = '5KffUB9YUsvoGjrcn76PjVnC61PcWLzws4QPfrT9RFNb85utCkZ';
if (process.argv[2]) {
  pk = process.argv[2];
}

var ary = pk.split('');

console.log('Attempting to fix', pk);
for (var x = 0; x < pk.length; x++) {
  for (var y = 0; y < base58chars.length; y++) {
    var t = pk.split('');
    t[x] = base58chars[y];
    try {
      var keyPair = bitcoinjs.ECPair.fromWIF(t.join(''));
      console.log('            Fixed', t.join(''));
    }
    catch(e) {
      if (verbose) {
        console.log(t.join(''), e);
      }
    }
  }
}
