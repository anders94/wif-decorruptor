wif-decorruptor
===============

Bitcoin Private Keys in Wallet Import Format (WIF) contain an error correction algorithm
which can be used to quickly fix single character typo errors. This node.js application
brute force tests every character against every possible base58 character, correcting
single character typos.

Setup
-----

```
npm install
```

Running
-------

To see an example:
```
node app
```

To correct your own WIF key:
```
node app 5KawqZHB1H6Af12ZhgTBXwQUY1jACgvGMywET7NF5bdYYzCxlmY
```
