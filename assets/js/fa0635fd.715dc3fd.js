"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[102],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return b}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||c;return a?n.createElement(h,s(s({ref:t},l),{},{components:a})):n.createElement(h,s({ref:t},l))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<c;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8019:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(7462),r=a(3366),c=(a(7294),a(3905)),s=["components"],o={title:"Inspect Raw Transaction",description:"Examine the raw transaction data to understand how payment transactions work.",keywords:["sbit","smart contract","src20","ethereum"],sidebar_position:1},i="Inspect Raw Transaction",d={unversionedId:"Smart-Contract/Blockchain-API/inspect-raw-tx",id:"Smart-Contract/Blockchain-API/inspect-raw-tx",title:"Inspect Raw Transaction",description:"Examine the raw transaction data to understand how payment transactions work.",source:"@site/docs/Smart-Contract/Blockchain-API/inspect-raw-tx.md",sourceDirName:"Smart-Contract/Blockchain-API",slug:"/Smart-Contract/Blockchain-API/inspect-raw-tx",permalink:"/sbit.dev/docs/Smart-Contract/Blockchain-API/inspect-raw-tx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Inspect Raw Transaction",description:"Examine the raw transaction data to understand how payment transactions work.",keywords:["sbit","smart contract","src20","ethereum"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SBit Networks",permalink:"/sbit.dev/docs/Smart-Contract/Running-SBit/networks"},next:{title:"Smart Contract Raw TX",permalink:"/sbit.dev/docs/Smart-Contract/Blockchain-API/Raw-TX"}},l={},u=[{value:"Money Transfer",id:"money-transfer",level:2},{value:"Look Up The Send Transaction",id:"look-up-the-send-transaction",level:2},{value:"Deciphering The Raw Transaction",id:"deciphering-the-raw-transaction",level:2},{value:"Transaction Vins",id:"transaction-vins",level:3},{value:"Transaction Vouts",id:"transaction-vouts",level:3},{value:"Transaction Fee",id:"transaction-fee",level:3},{value:"Cryptographic Proof of Ownership",id:"cryptographic-proof-of-ownership",level:2},{value:"BTC Standard Pay Scripts",id:"btc-standard-pay-scripts",level:2},{value:"Pay To Public Key",id:"pay-to-public-key",level:2},{value:"Pay To Public Hash",id:"pay-to-public-hash",level:2}],p={toc:u};function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"inspect-raw-transaction"},"Inspect Raw Transaction"),(0,c.kt)("p",null,"In this chapter we will examine the raw transaction data to understand how payment transactions work."),(0,c.kt)("p",null,"In particular:"),(0,c.kt)("ol",{start:0},(0,c.kt)("li",{parentName:"ol"},"How the sender construct a transaction to express how much money transfer, and to whom"),(0,c.kt)("li",{parentName:"ol"},"How the sender proves ownership of an UTXO"),(0,c.kt)("li",{parentName:"ol"},"How the sender creates new UTXO as payment, and make sure that only the intended receiver can cliam it")),(0,c.kt)("h2",{id:"money-transfer"},"Money Transfer"),(0,c.kt)("p",null,"Let's generate a new address to receive fund"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"scli getnewaddress\n\nsNUAQzJCy4UZXTsUWLdBsgMDfS8yF4nuGD\n")),(0,c.kt)("p",null,"For testing, let's send some money from our own wallet to this address:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"scli sendtoaddress sNUAQzJCy4UZXTsUWLdBsgMDfS8yF4nuGD 10\n")),(0,c.kt)("p",null,"The transaction id is returned:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"f2cb9a0cac73b7bf9dd1ba2fcfddfe91ae2f6d1e8083f8a848e61427a85d830d\n")),(0,c.kt)("p",null,"Once the transaction is confirmed, we can see that the receiving address has money:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"scli getreceivedbyaddress sNUAQzJCy4UZXTsUWLdBsgMDfS8yF4nuGD\n\n10.00000000\n")),(0,c.kt)("h2",{id:"look-up-the-send-transaction"},"Look Up The Send Transaction"),(0,c.kt)("p",null,"Use the transaction id to look up information about it:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"scli gettransaction \\\n  f2cb9a0cac73b7bf9dd1ba2fcfddfe91ae2f6d1e8083f8a848e61427a85d830d\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "amount": 0.00000000,\n  "fee": -0.00076800,\n  "confirmations": 4,\n  "blockhash": "f7567e97f8c7d0145592b04f9913b1005226913b391f55428accce1624ddd871",\n  "blockindex": 2,\n  "blocktime": 1523947568,\n  "txid": "f2cb9a0cac73b7bf9dd1ba2fcfddfe91ae2f6d1e8083f8a848e61427a85d830d",\n  "walletconflicts": [\n  ],\n  "time": 1523947557,\n  "timereceived": 1523947557,\n  "bip125-replaceable": "no",\n  "details": [\n    {\n      "account": "",\n      "address": "sNUAQzJCy4UZXTsUWLdBsgMDfS8yF4nuGD",\n      "category": "send",\n      "amount": -10.00000000,\n      "label": "",\n      "vout": 1,\n      "fee": -0.00076800,\n      "abandoned": false\n    },\n    {\n      "account": "",\n      "address": "sNUAQzJCy4UZXTsUWLdBsgMDfS8yF4nuGD",\n      "category": "receive",\n      "amount": 10.00000000,\n      "label": "",\n      "vout": 1\n    }\n  ],\n  "hex": "0200000001a65a0dad79515e70b2ee1406aa0bc083704b4d4a7528d7d4511210d6abbcb93902000000494830450221008c2f779baa08239d707f758068346b15b4c3b6a0cfc7ccb361bcc69f01eebfb2022018f2e38074c2f8673ebcb30358da6822c30a74a26b7feb852bab44e4ec5c40dd01feffffff02002aae6dd10100001976a914722b74ca801e90be5240d2f084440d71c3c2572488ac00ca9a3b000000001976a91435dbe99b7be1e43463e0fec2d431b67bcc6ef67e88ac98040000"\n}\n')),(0,c.kt)("h2",{id:"deciphering-the-raw-transaction"},"Deciphering The Raw Transaction"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"gettransaction")," command presents the transaction data in a more human friendly form. We can see the underlying bitcoin data structure by decoding the raw data of a transaction."),(0,c.kt)("p",null,"This data structure is key to understanding how the SBit ledger works."),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"hex")," property returned previously is the raw transaction data. Or we could also look it up with ",(0,c.kt)("inlineCode",{parentName:"p"},"getrawtransaction"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"scli getrawtransaction f2cb9a0cac73b7bf9dd1ba2fcfddfe91ae2f6d1e8083f8a848e61427a85d830d\n")),(0,c.kt)("p",null,"Let's now decode the raw tx data:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"scli decoderawtransaction \\\n0200000001a65a0dad79515e70b2ee1406aa0bc083704b4d4a7528d7d4511210d6abbcb93902000000494830450221008c2f779baa08239d707f758068346b15b4c3b6a0cfc7ccb361bcc69f01eebfb2022018f2e38074c2f8673ebcb30358da6822c30a74a26b7feb852bab44e4ec5c40dd01feffffff02002aae6dd10100001976a914722b74ca801e90be5240d2f084440d71c3c2572488ac00ca9a3b000000001976a91435dbe99b7be1e43463e0fec2d431b67bcc6ef67e88ac98040000\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txid": "f2cb9a0cac73b7bf9dd1ba2fcfddfe91ae2f6d1e8083f8a848e61427a85d830d",\n  "hash": "f2cb9a0cac73b7bf9dd1ba2fcfddfe91ae2f6d1e8083f8a848e61427a85d830d",\n  "size": 192,\n  "vsize": 192,\n  "version": 2,\n  "locktime": 1176,\n  "vin": [\n    {\n      "txid": "39b9bcabd6101251d4d728754a4d4b7083c00baa0614eeb2705e5179ad0d5aa6",\n      "vout": 2,\n      "scriptSig": {\n        "asm": "30450221008c2f779baa08239d707f758068346b15b4c3b6a0cfc7ccb361bcc69f01eebfb2022018f2e38074c2f8673ebcb30358da6822c30a74a26b7feb852bab44e4ec5c40dd[ALL]",\n        "hex": "4830450221008c2f779baa08239d707f758068346b15b4c3b6a0cfc7ccb361bcc69f01eebfb2022018f2e38074c2f8673ebcb30358da6822c30a74a26b7feb852bab44e4ec5c40dd01"\n      },\n      "sequence": 4294967294\n    }\n  ],\n  "vout": [\n    {\n      "value": 19989.99923200,\n      "n": 0,\n      "scriptPubKey": {\n        "asm": "OP_DUP OP_HASH160 722b74ca801e90be5240d2f084440d71c3c25724 OP_EQUALVERIFY OP_CHECKSIG",\n        "hex": "76a914722b74ca801e90be5240d2f084440d71c3c2572488ac",\n        "reqSigs": 1,\n        "type": "pubkeyhash",\n        "addresses": [\n          "sTy4FHpEsGkwXGfzSUDirCQf8RCHsJSPhH"\n        ]\n      }\n    },\n    {\n      "value": 10.00000000,\n      "n": 1,\n      "scriptPubKey": {\n        "asm": "OP_DUP OP_HASH160 35dbe99b7be1e43463e0fec2d431b67bcc6ef67e OP_EQUALVERIFY OP_CHECKSIG",\n        "hex": "76a91435dbe99b7be1e43463e0fec2d431b67bcc6ef67e88ac",\n        "reqSigs": 1,\n        "type": "pubkeyhash",\n        "addresses": [\n          "sNUAQzJCy4UZXTsUWLdBsgMDfS8yF4nuGD"\n        ]\n      }\n    }\n  ]\n}\n')),(0,c.kt)("p",null,"This transaction has one vins (input value) and two vouts (output values)."),(0,c.kt)("h3",{id:"transaction-vins"},"Transaction Vins"),(0,c.kt)("p",null,"When constructing a transaction, the wallet finds an UTXO that satifies the amount requested."),(0,c.kt)("p",null,"The input refers to an UTXO, which is the second output of the transaction ",(0,c.kt)("inlineCode",{parentName:"p"},"39b9...5aa6"),". This particular UTXO is worth 20,000."),(0,c.kt)("p",null,"Since we are only sending 10 sbits, this input is more than enough pay for the transfer itself, as well as the fees."),(0,c.kt)("h3",{id:"transaction-vouts"},"Transaction Vouts"),(0,c.kt)("p",null,"The UTXO used is worth 20,000, but we actually only want to spend a smart part of it. Unlike a bank account, it is not possible to partially spend the value of the UTXO."),(0,c.kt)("p",null,'So what we do is that we spend 10 sbits by sending it to the receiving address, and "spend" the rest of the amount by sending it back to ourself.'),(0,c.kt)("p",null,"The result is that are two outputs in this transaction, creating two new UTXOs."),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"19989.99923200 is the change returning to sender."),(0,c.kt)("li",{parentName:"ul"},"10 is the amount sent to receiver.")),(0,c.kt)("h3",{id:"transaction-fee"},"Transaction Fee"),(0,c.kt)("p",null,"The sum of the two outputs is less than the input."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"20000 - 19989.99923200 - 10 = 0.000768000\n")),(0,c.kt)("p",null,"This difference is given to the miner as the fee."),(0,c.kt)("h2",{id:"cryptographic-proof-of-ownership"},"Cryptographic Proof of Ownership"),(0,c.kt)("p",null,"By decoding the raw transaction, we can see that Vins and Vouts specifies where the money come from, and where it should go."),(0,c.kt)("p",null,"But how does the network know who has the authority to spend what money?"),(0,c.kt)("p",null,"In the old financial world, the bank acts as the authority that decides whether a transaction can go through. Bitcoin, however, uses cryptogrpahy to distribute the authority to its end users."),(0,c.kt)("p",null,'The "authority" to spend money is like a uniquely shaped lock. If a person can present the key that has the correct shape to unlock it, the network then allows the money to be spent.'),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"The sender must have the key to unlock the UTXOs used as inputs."),(0,c.kt)("li",{parentName:"ul"},"The sender create new locks as outputs, that only the receiver can unlock.")),(0,c.kt)("h2",{id:"btc-standard-pay-scripts"},"BTC Standard Pay Scripts"),(0,c.kt)("p",null,'The cryptographic "lock" alluded to are just simple fragments of BTC scripts. The sender needs to provide the correct input, so the script evaluates to true.'),(0,c.kt)("h2",{id:"pay-to-public-key"},"Pay To Public Key"),(0,c.kt)("p",null,"The UTXO that's used as input is the second output of the transaction ",(0,c.kt)("inlineCode",{parentName:"p"},"39b9bcabd6101251d4d728754a4d4b7083c00baa0614eeb2705e5179ad0d5aa6"),". Let's decode that transaction:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"scli decoderawtransaction \\\n  `scli getrawtransaction 39b9bcabd6101251d4d728754a4d4b7083c00baa0614eeb2705e5179ad0d5aa6`\n")),(0,c.kt)("p",null,"The data for this UTXO is:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "vout": [\n    // ...\n    {\n      "value": 20000.00000000,\n      "n": 2,\n      "scriptPubKey": {\n        "asm": "03795cd550a584caf7818cbe2d71cbc05bbf59fdb6bacb876969b319c4d07a0211 OP_CHECKSIG",\n        "hex": "2103795cd550a584caf7818cbe2d71cbc05bbf59fdb6bacb876969b319c4d07a0211ac",\n        "reqSigs": 1,\n        "type": "pubkey",\n        "addresses": [\n          "sNdjKvCjBLUwb2RuWxEXLSgpVtLSanQ7Cu"\n        ]\n      }\n    }\n  ]\n}\n')),(0,c.kt)("p",null,'The "lock" is the script:'),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"03795cd550a584caf7818cbe2d71cbc05bbf59fdb6bacb876969b319c4d07a0211\nOP_CHECKSIG\n")),(0,c.kt)("p",null,'This script says that whoever that can produce a cryptographic signature attributable to the public key "03795cd550a584caf7818cbe2d71cbc05bbf59fdb6bacb876969b319c4d07a0211" may spend this output.'),(0,c.kt)("p",null,"To unlock the script, the sender creates a cryptographic signature that signs the outputs (i.e. how much money and to whom)."),(0,c.kt)("p",null,'The script is the lock, and signature is the key. Combine the two, we get a script that evaluates to "true":'),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"30450221008c2f779baa08239d707f758068346b15b4c3b6a0cfc7ccb361bcc69f01eebfb2022018f2e38074c2f8673ebcb30358da6822c30a74a26b7feb852bab44e4ec5c40dd[ALL]\n\n03795cd550a584caf7818cbe2d71cbc05bbf59fdb6bacb876969b319c4d07a0211\n\nOP_CHECKSIG\n")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"OP_CHECKSIG")," operation does two things:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"It verifies that the signature is attributable to the public key ",(0,c.kt)("inlineCode",{parentName:"li"},"03795cd550a584caf7818cbe2d71cbc05bbf59fdb6bacb876969b319c4d07a0211")),(0,c.kt)("li",{parentName:"ol"},"Verifies the transaction outputs against the signature. If a miner tries to tamper with the outputs in anyway (adjusting the amount of recipient), the check would fail.")),(0,c.kt)("p",null,"A Pay-To-Public-Key UTXOs are typically created as mining/staking rewards and gas refunds. For payment to addresses, another type of script is more frequently seen."),(0,c.kt)("h2",{id:"pay-to-public-hash"},"Pay To Public Hash"),(0,c.kt)("p",null,'When sending money to an address, the output created is usually a "Pay To Public Hash" (P2PKH) script.'),(0,c.kt)("p",null,"In the raw transaction above we see that an output has a script like this:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"OP_DUP\nOP_HASH160\n35dbe99b7be1e43463e0fec2d431b67bcc6ef67e\nOP_EQUALVERIFY\nOP_CHECKSIG\n")),(0,c.kt)("p",null,'This script is essentially saying "whoever that can create a signature attributable to a public key that hashes to ',(0,c.kt)("inlineCode",{parentName:"p"},"35dbe99b7be1e43463e0fec2d431b67bcc6ef67e"),' can spend this output".'),(0,c.kt)("p",null,"This script is the same as ",(0,c.kt)("inlineCode",{parentName:"p"},"Pay To Public Key"),", except for the extra indirection introduced by the public key hashing."))}b.isMDXComponent=!0}}]);