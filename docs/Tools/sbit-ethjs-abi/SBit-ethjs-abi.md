---
title: SBit ethjs-abi
description: Just the encoding and decoding of contract data.
keywords: [sbit, bitcoin, blockchain, ethereum, api, tools]
sidebar_position: 1
---

## About

Just the encoding and decoding of contract data.

Forked from https://github.com/ethjs/ethjs-abi

Differences:

* Accept hex string with or without "0x" as input.
* Configurable option to output hex string with or without "0x" prefix.
* Add `Buffer` browser polyfill.

:::caution
This package is experimental, and is not ready for production use.
:::

## Usage

```js
const abi = require('ethjs-abi');
const SimpleStoreABI = [{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"set","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"get","outputs":[{"name":"storeValue","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_newValue","type":"uint256"},{"indexed":false,"name":"_sender","type":"address"}],"name":"SetComplete","type":"event"}];


const setInputBytecode = abi.encodeMethod(SimpleStoreABI[0], [24000]);

// returns 0x60fe47b10000000000000000000000000000000000000000000000000000000000005dc0

const setOutputBytecode = abi.decodeMethod(SimpleStoreABI[0], "0x0000000000000000000000000000000000000000000000000000000000000001");

// returns  Result { '0': true }



const getInputBytecode = abi.encodeMethod(SimpleStoreABI[1], []);

// returns 0x6d4ce63c

const getMethodOutputBytecode = abi.decodeMethod(SimpleStoreABI[1], "0x000000000000000000000000000000000000000000000000000000000000b26e");

// returns Result { '0': <BN: b26e>, storeValue: <BN: b26e> }



const SetCompleteInputBytecode = abi.encodeEvent(SimpleStoreABI[2], [24000, "0xca35b7d915458ef540ade6068dfe2f44e8fa733c"]);

// returns 0x10e8e9bc0000000000000000000000000000000000000000000000000000000000005dc0000000000000000000000000ca35b7d915458ef540ade6068dfe2f44e8fa733c

const SetCompleteOutputBytecode = abi.decodeEvent(SimpleStoreABI[2], "0x0000000000000000000000000000000000000000000000000000000000000d7d000000000000000000000000ca35b7d915458ef540ade6068dfe2f44e8fa733c", ["0xc36800ebd6079fdafc3a7100d0d1172815751804a6d1b7eb365b85f6c9c80e61"]);

/* returns   Result {
  '0': <BN: d7d>,
  '1': '0xca35b7d915458ef540ade6068dfe2f44e8fa733c',
  _newValue: <BN: d7d>,
  _sender: '0xca35b7d915458ef540ade6068dfe2f44e8fa733c' }
*/

const methodSig = abi.encodeSignature(SimpleStoreABI[2]);

/* returns 0x10e8e9bc */
```

for contract SimpleStore:

```
pragma solidity ^0.4.4;

contract SimpleStore {
  uint store;

  function set(uint256 _value) returns (bool) {
    store = _value;

    SetComplete(store, msg.sender);

    return true;
  }

  function get() returns (uint256 storeValue) {
    return store;
  }

  event SetComplete(uint256 _newValue, address _sender);
}
```

## Guides

You'll find more detailed information on using `SBit ethjs-abi` and tailoring it to your needs in our guides:

- [User guide](./user-guide.md) - Usage, configuration, FAQ and complementary tools.
- [Developer guide](./developer-guide.md) - Contributing to `SBit ethjs-abi` and writing your own code and coverage.

## Help out

There is always a lot of work to do, and will have many rules to maintain. So please help out in any way that you can:

- Create, enhance, and debug SBit ethjs rules
- Improve documentation.
- Chime in on any open issue or pull request.
- Open new issues about your ideas for making `SBit ethjs-abi` better, and pull requests to show us how your idea works.
- Add new tests to *absolutely anything*.
- Create or contribute to ecosystem tools, like modules for encoding or contracts.
- Spread the word.

We communicate via [issues](https://github.com/SBit-Project/sbit-ethjs-abi/issues) and [pull requests](https://github.com/SBit-Project/sbit-ethjs-abi/pulls).

## Important documents

- [Code of Conduct](../../Help/CODE_OF_CONDUCT)
- [License](https://raw.githubusercontent.com/ethjs/ethjs-abi/master/LICENSE)
