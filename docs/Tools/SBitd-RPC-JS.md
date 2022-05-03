---
title: Sbitd RPC JS
description: A client library to connect to SBIT Core RPC in JavaScript.
keywords: [sbit, rpc, js, tools]
---

A client library to connect to SBIT Core RPC in JavaScript.

## Get Started

sbitd-rpc.js runs on [node](http://nodejs.org/), and can be installed via [npm](https://npmjs.org/):

``` bash
npm install sbitd-rpc
```

## Examples

```javascript
var run = function() {
  var sbitcore = require('sbitcore');
  var RpcClient = require('sbitd-rpc');

  var config = {
    protocol: 'http',
    user: 'user',
    pass: 'pass',
    host: '127.0.0.1',
    port: '22002',
  };

  var rpc = new RpcClient(config);

  var txids = [];

  function showNewTransactions() {
    rpc.getRawMemPool(function (err, ret) {
      if (err) {
        console.error(err);
        return setTimeout(showNewTransactions, 10000);
      }

      function batchCall() {
        ret.result.forEach(function (txid) {
          if (txids.indexOf(txid) === -1) {
            rpc.getRawTransaction(txid);
          }
        });
      }

      rpc.batch(batchCall, function(err, rawtxs) {
        if (err) {
          console.error(err);
          return setTimeout(showNewTransactions, 10000);
        }

        rawtxs.map(function (rawtx) {
          var tx = new sbitcore.Transaction(rawtx.result);
          console.log('\n\n\n' + tx.id + ':', tx.toObject());
        });

        txids = ret.result;
        setTimeout(showNewTransactions, 2500);
      });
    });
  }

  showNewTransactions();
};
```