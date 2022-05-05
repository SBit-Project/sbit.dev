"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[2069],{3905:function(e,a,n){n.d(a,{Zo:function(){return o},kt:function(){return i}});var c=n(7294);function d(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,c)}return n}function f(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){d(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,c,d=function(e,a){if(null==e)return{};var n,c,d={},t=Object.keys(e);for(c=0;c<t.length;c++)n=t[c],a.indexOf(n)>=0||(d[n]=e[n]);return d}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(c=0;c<t.length;c++)n=t[c],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var b=c.createContext({}),s=function(e){var a=c.useContext(b),n=a;return e&&(n="function"==typeof e?e(a):f(f({},a),e)),n},o=function(e){var a=s(e.components);return c.createElement(b.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return c.createElement(c.Fragment,{},a)}},l=c.forwardRef((function(e,a){var n=e.components,d=e.mdxType,t=e.originalType,b=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),l=s(n),i=d,u=l["".concat(b,".").concat(i)]||l[i]||p[i]||t;return n?c.createElement(u,f(f({ref:a},o),{},{components:n})):c.createElement(u,f({ref:a},o))}));function i(e,a){var n=arguments,d=a&&a.mdxType;if("string"==typeof e||d){var t=n.length,f=new Array(t);f[0]=l;var r={};for(var b in a)hasOwnProperty.call(a,b)&&(r[b]=a[b]);r.originalType=e,r.mdxType="string"==typeof e?e:d,f[1]=r;for(var s=2;s<t;s++)f[s]=n[s];return c.createElement.apply(null,f)}return c.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5448:function(e,a,n){n.r(a),n.d(a,{assets:function(){return o},contentTitle:function(){return b},default:function(){return i},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var c=n(7462),d=n(3366),t=(n(7294),n(3905)),f=["components"],r={title:"Transaction API",description:"Sbit Explorer Transaction API",keywords:["sbit","api","explorer","tools"]},b=void 0,s={unversionedId:"Tools/SBIT-API/transaction",id:"Tools/SBIT-API/transaction",title:"Transaction API",description:"Sbit Explorer Transaction API",source:"@site/docs/Tools/SBIT-API/transaction.md",sourceDirName:"Tools/SBIT-API",slug:"/Tools/SBIT-API/transaction",permalink:"/sbit.dev/docs/Tools/SBIT-API/transaction",tags:[],version:"current",frontMatter:{title:"Transaction API",description:"Sbit Explorer Transaction API",keywords:["sbit","api","explorer","tools"]},sidebar:"tutorialSidebar",previous:{title:"SRC20 API",permalink:"/sbit.dev/docs/Tools/SBIT-API/src20"},next:{title:"SBIT Address Converter",permalink:"/sbit.dev/docs/Tools/Address-Converter"}},o={},p=[{value:"Transaction Information",id:"transaction-information",level:2},{value:"Raw Transaction",id:"raw-transaction",level:2},{value:"Send Raw Transaction",id:"send-raw-transaction",level:2}],l={toc:p};function i(e){var a=e.components,n=(0,d.Z)(e,f);return(0,t.kt)("wrapper",(0,c.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#transaction-api"},"Transaction API"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#transaction-information"},"Transaction Information")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#raw-transaction"},"Raw Transaction")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#send-raw-transaction"},"Send Raw Transaction"))))),(0,t.kt)("h2",{id:"transaction-information"},"Transaction Information"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request URL")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"GET /tx/:id\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request #1")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"GET /tx/870c6b51d4160b52ce2bd506d0cd7a8438b8aac9afd03c4695f6ab9648bd02dc\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Response #1")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "870c6b51d4160b52ce2bd506d0cd7a8438b8aac9afd03c4695f6ab9648bd02dc",\n  "hash": "35559de74dd0d90908a25d39fd471829e351bffb3a3874bf54764b8d79f923aa",\n  "version": 2,\n  "lockTime": 246987,\n  "blockHash": "8275eb2950279df37b8fa62076249ec7076cc030c860df004b8f3b03071bd00b",\n  "inputs": [\n    {\n      "prevTxId": "14383d782ff38067d928acffabb31b46196966fc4a31d9de855a0cbf0535922d",\n      "outputIndex": 0,\n      "value": "910800",\n      "address": "sc1ql8v7fp2j2uk7gjqv5rudlecv09e9x4jdwya5vd",\n      "scriptSig": {\n        "type": "witness_v0_keyhash",\n        "hex": "",\n        "asm": ""\n      },\n      "sequence": 4294967294,\n      "witness": [\n        "3044022030bf256669dd7fc6ca00cd393461c09b25421e59696208e8b5cbdbf71ff5050302200707c5d085d7ed06d1e6af9a3ca1c66b0c2e1a73189b24795afc80c8080236a101",\n        "038c9dfdb356979a56d4b94063b8fb214295bd6a310b315564083a63795556ae93"\n      ]\n    },\n    {\n      "prevTxId": "14383d782ff38067d928acffabb31b46196966fc4a31d9de855a0cbf0535922d",\n      "outputIndex": 1,\n      "value": "1484306",\n      "address": "SjHokSvA9ZGuVZhNWPsv2e8wmiLHnusurS",\n      "scriptSig": {\n        "type": "pubkeyhash",\n        "hex": "47304402203db3536426e26c17a670ab3127109809f76ce366a55483a5ef9d556ea432cb240220546ae9f85150b21d3692fd89f61b947840d9b96886f830413e444536e97d3ecb0121027d026b7753f3f70ba972c801e9aed0c715dc68b89447bc0c5c18b32f25f3133c",\n        "asm": "304402203db3536426e26c17a670ab3127109809f76ce366a55483a5ef9d556ea432cb240220546ae9f85150b21d3692fd89f61b947840d9b96886f830413e444536e97d3ecb[ALL] 027d026b7753f3f70ba972c801e9aed0c715dc68b89447bc0c5c18b32f25f3133c"\n      },\n      "sequence": 4294967294,\n      "witness": []\n    },\n    {\n      "prevTxId": "2e1a1985c50a33e342990a475888d74b79e3b122326fc585342a39c71cb5a76e",\n      "outputIndex": 0,\n      "value": "1910800",\n      "address": "sc1ql8v7fp2j2uk7gjqv5rudlecv09e9x4jdwya5vd",\n      "scriptSig": {\n        "type": "witness_v0_keyhash",\n        "hex": "",\n        "asm": ""\n      },\n      "sequence": 4294967294,\n      "witness": [\n        "30440220301dafcfe858ca57a1500b64f4dc3331fbf65670169362f4add3204c05b0ccf302207090d1047ee3c509b58d88734fa11afe1c1933ac8026c42ce745c46f30df9f8401",\n        "038c9dfdb356979a56d4b94063b8fb214295bd6a310b315564083a63795556ae93"\n      ]\n    }\n  ],\n  "outputs": [\n    {\n      "value": "305906",\n      "address": "sc1ql8v7fp2j2uk7gjqv5rudlecv09e9x4jdwya5vd",\n      "scriptPubKey": {\n        "type": "witness_v0_keyhash",\n        "hex": "0014f9d9e48552572de4480ca0f8dfe70c797253564d",\n        "asm": "OP_0 f9d9e48552572de4480ca0f8dfe70c797253564d"\n      },\n      "spentTxId": "adcf52f3b284195fa8a7b2a4664252f3959ae618c321b35e1deffadec717f3dd",\n      "spentIndex": 0\n    },\n    {\n      "value": "3857200",\n      "address": "sc1ql8v7fp2j2uk7gjqv5rudlecv09e9x4jdwya5vd",\n      "scriptPubKey": {\n        "type": "witness_v0_keyhash",\n        "hex": "0014f9d9e48552572de4480ca0f8dfe70c797253564d",\n        "asm": "OP_0 f9d9e48552572de4480ca0f8dfe70c797253564d"\n      },\n      "spentTxId": "adcf52f3b284195fa8a7b2a4664252f3959ae618c321b35e1deffadec717f3dd",\n      "spentIndex": 1\n    }\n  ],\n  "isCoinbase": false,\n  "isCoinstake": false,\n  "blockHeight": 246989,\n  "confirmations": 159098,\n  "timestamp": 1539787024,\n  "inputValue": "4305906",\n  "outputValue": "4163106",\n  "refundValue": "0",\n  "fees": "142800",\n  "size": 518,\n  "weight": 1421\n}\n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request #2")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"GET /tx/f56ea462337e4732e821eb7ceee5208a5c807fe5f918a342298eb152d75765ee\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Response #2")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "f56ea462337e4732e821eb7ceee5208a5c807fe5f918a342298eb152d75765ee",\n  "hash": "f56ea462337e4732e821eb7ceee5208a5c807fe5f918a342298eb152d75765ee",\n  "version": 2,\n  "lockTime": 168583,\n  "blockHash": "67833537107b014a9e3a1666c99f02708a788f81a942a6fa500a0e7c5e5446c4",\n  "inputs": [\n    {\n      "prevTxId": "732fe02e70095557854e419d472388cccc3f8fc00db4b9b1820b9a51c0f1b905",\n      "outputIndex": 1,\n      "value": "500000000000",\n      "address": "SccDD4Vk5Tc5Y84ydAcj4hpNkahYcsCsRq",\n      "scriptSig": {\n        "type": "pubkeyhash",\n        "hex": "483045022100cc4208e82c8d6aadbb6e5ed1465ca1675db472f9e72cef528d52973e632bbafc02202d2a894267a2d3cd1e647ef3a3206d83228c71006a4c3544616dcb58d0b9dbf9012103afb25cf82520925420f07f4b13b17efa0d7868606c66adf7979e15fb3f21721e",\n        "asm": "3045022100cc4208e82c8d6aadbb6e5ed1465ca1675db472f9e72cef528d52973e632bbafc02202d2a894267a2d3cd1e647ef3a3206d83228c71006a4c3544616dcb58d0b9dbf9[ALL] 03afb25cf82520925420f07f4b13b17efa0d7868606c66adf7979e15fb3f21721e"\n      },\n      "sequence": 4294967294\n    }\n  ],\n  "outputs": [\n    {\n      "value": "399989865575",\n      "address": "SccDD4Vk5Tc5Y84ydAcj4hpNkahYcsCsRq",\n      "scriptPubKey": {\n        "type": "pubkeyhash",\n        "hex": "76a914af8cf283ef7d1ad9fa824bd4de564f3b1b9fcd7a88ac",\n        "asm": "OP_DUP OP_HASH160 af8cf283ef7d1ad9fa824bd4de564f3b1b9fcd7a OP_EQUALVERIFY OP_CHECKSIG"\n      },\n      "spentTxId": "eae244f9996cf4b50bf3c35d001aa1d8f60fbd9b7da9e0a37ad4ebb336082a6e",\n      "spentIndex": 0\n    },\n    {\n      "value": "100000000000",\n      "address": "0439fcc94493859d9146b6b9a92daa6d6d7b581d",\n      "addressHex": "0439fcc94493859d9146b6b9a92daa6d6d7b581d",\n      "scriptPubKey": {\n        "type": "evm_call",\n        "hex": "01040390d003012824d0821b0e0000000000000000000000000000000000000000000000000000000000000001140439fcc94493859d9146b6b9a92daa6d6d7b581dc2",\n        "asm": "4 250000 40 d0821b0e0000000000000000000000000000000000000000000000000000000000000001 0439fcc94493859d9146b6b9a92daa6d6d7b581d OP_CALL"\n      },\n      "spentTxId": "4f263d6cfa910e5b763edb1349d34d9a0c97e1ad5a3eb9fd6b2347155da5a246",\n      "spentIndex": 1,\n      "receipt": {\n        "sender": "SccDD4Vk5Tc5Y84ydAcj4hpNkahYcsCsRq",\n        "gasUsed": 94008,\n        "contractAddress": "0439fcc94493859d9146b6b9a92daa6d6d7b581d",\n        "contractAddressHex": "0439fcc94493859d9146b6b9a92daa6d6d7b581d",\n        "excepted": "None",\n        "exceptedMessage": "",\n        "logs": [\n          {\n            "address": "0439fcc94493859d9146b6b9a92daa6d6d7b581d",\n            "addressHex": "0439fcc94493859d9146b6b9a92daa6d6d7b581d",\n            "topics": [\n              "fb425c0bd6840437c799f5176836b0ebc76d79351a6981cc4e5fbb0cdbf3e185",\n              "0000000000000000000000000000000000000000000000000000000000000000",\n              "0000000000000000000000000439fcc94493859d9146b6b9a92daa6d6d7b581d",\n              "000000000000000000000000af8cf283ef7d1ad9fa824bd4de564f3b1b9fcd7a"\n            ],\n            "data": "0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000174876e8005154554d00000000000000000000000000000000000000000000000000000000"\n          }\n        ]\n      }\n    }\n  ],\n  "isCoinbase": false,\n  "isCoinstake": false,\n  "blockHeight": 168584,\n  "confirmations": 237507,\n  "timestamp": 1528460544,\n  "inputValue": "500000000000",\n  "outputValue": "499989865575",\n  "refundValue": "6239680",\n  "fees": "3894745",\n  "size": 268,\n  "weight": 1072,\n  "contractSpends": [\n    {\n      "inputs": [\n        {\n          "address": "056168620105d8f73a55d8c6542b565aea3665ec",\n          "addressHex": "056168620105d8f73a55d8c6542b565aea3665ec",\n          "value": "202560000000"\n        },\n        {\n          "address": "0439fcc94493859d9146b6b9a92daa6d6d7b581d",\n          "addressHex": "0439fcc94493859d9146b6b9a92daa6d6d7b581d",\n          "value": "100000000000"\n        }\n      ],\n      "outputs": [\n        {\n          "address": "056168620105d8f73a55d8c6542b565aea3665ec",\n          "addressHex": "056168620105d8f73a55d8c6542b565aea3665ec",\n          "value": "302560000000"\n        }\n      ]\n    }\n  ]\n}\n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request #3")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"GET /tx/ebf05fbf8dcf10f03a73331abd1ea934d66c03a72ee4a57addeab0225ad9289f\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Response #3")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "ebf05fbf8dcf10f03a73331abd1ea934d66c03a72ee4a57addeab0225ad9289f",\n  "hash": "ebf05fbf8dcf10f03a73331abd1ea934d66c03a72ee4a57addeab0225ad9289f",\n  "version": 2,\n  "lockTime": 406076,\n  "blockHash": "7fae36223bbd95b82d9899b767d4289d4fe4cd2b5ee6e248c16694d7352b3b94",\n  "inputs": [\n    {\n      "prevTxId": "6ae7a9cf0763b13185b23f345180607caa71c1cacff9ef6e4a9f9c068bd45c62",\n      "outputIndex": 1,\n      "value": "97820400",\n      "address": "SeZjXLEyqKgUNyoXcTCC2nxVx77cSnmpcy",\n      "scriptSig": {\n        "type": "pubkeyhash",\n        "hex": "47304402206897a7a9502314e3d5f0d62e2fae485746cbbd9524229ab42187f5a766c9ec1d02206701c50e1947dd08c4440db66bf8a534e4a2c95a0779cf1963c229a4ebcc9bda012103d2afef396be37192a1137fe103ace0dd2e861088d0634ffd792d4d43a8bed770",\n        "asm": "304402206897a7a9502314e3d5f0d62e2fae485746cbbd9524229ab42187f5a766c9ec1d02206701c50e1947dd08c4440db66bf8a534e4a2c95a0779cf1963c229a4ebcc9bda[ALL] 03d2afef396be37192a1137fe103ace0dd2e861088d0634ffd792d4d43a8bed770"\n      },\n      "sequence": 4294967294\n    }\n  ],\n  "outputs": [\n    {\n      "value": "0",\n      "address": "EfDYuWmSUbZPaAe2qzeWurcDGobSnhYa6F",\n      "addressHex": "f2033ede578e17fa6231047265010445bca8cf1c",\n      "scriptPubKey": {\n        "type": "evm_call",\n        "hex": "0104032cc900012844a9059cbb000000000000000000000000bf4e5cb019865cde870642bf2a2dfb375789c23b00000000000000000000000000000000000000000000000000000002540be40014f2033ede578e17fa6231047265010445bca8cf1cc2",\n        "asm": "4 51500 40 a9059cbb000000000000000000000000bf4e5cb019865cde870642bf2a2dfb375789c23b00000000000000000000000000000000000000000000000000000002540be400 f2033ede578e17fa6231047265010445bca8cf1c OP_CALL"\n      },\n      "receipt": {\n        "sender": "SeZjXLEyqKgUNyoXcTCC2nxVx77cSnmpcy",\n        "gasUsed": 36359,\n        "contractAddress": "f2033ede578e17fa6231047265010445bca8cf1c",\n        "contractAddressHex": "f2033ede578e17fa6231047265010445bca8cf1c",\n        "excepted": "None",\n        "exceptedMessage": "",\n        "logs": [\n          {\n            "address": "f2033ede578e17fa6231047265010445bca8cf1c",\n            "addressHex": "f2033ede578e17fa6231047265010445bca8cf1c",\n            "topics": [\n              "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",\n              "000000000000000000000000c50541b82f4cda2f61cbbc219595c79ffdb4f2fa",\n              "000000000000000000000000bf4e5cb019865cde870642bf2a2dfb375789c23b"\n            ],\n            "data": "00000000000000000000000000000000000000000000000000000002540be400"\n          }\n        ]\n      }\n    },\n    {\n      "value": "95640800",\n      "address": "SeZjXLEyqKgUNyoXcTCC2nxVx77cSnmpcy",\n      "scriptPubKey": {\n        "type": "pubkeyhash",\n        "hex": "76a914c50541b82f4cda2f61cbbc219595c79ffdb4f2fa88ac",\n        "asm": "OP_DUP OP_HASH160 c50541b82f4cda2f61cbbc219595c79ffdb4f2fa OP_EQUALVERIFY OP_CHECKSIG"\n      }\n    }\n  ],\n  "isCoinbase": false,\n  "isCoinstake": false,\n  "blockHeight": 406077,\n  "confirmations": 16,\n  "timestamp": 1562675696,\n  "inputValue": "97820400",\n  "outputValue": "95640800",\n  "refundValue": "605640",\n  "fees": "1573960",\n  "size": 299,\n  "weight": 1196,\n  "src20TokenTransfers": [\n    {\n      "address": "f2033ede578e17fa6231047265010445bca8cf1c",\n      "addressHex": "f2033ede578e17fa6231047265010445bca8cf1c",\n      "name": "SCASH",\n      "symbol": "SC",\n      "decimals": 8,\n      "from": "SeZjXLEyqKgUNyoXcTCC2nxVx77cSnmpcy",\n      "to": "Se3X3dVeVocnd6f9rsCVJyTmW1Usc8YhLE",\n      "value": "10000000000"\n    }\n  ]\n}\n')),(0,t.kt)("h2",{id:"raw-transaction"},"Raw Transaction"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request URL")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"GET /raw-tx/:id\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"GET /tx/ebf05fbf8dcf10f03a73331abd1ea934d66c03a72ee4a57addeab0225ad9289f\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Response")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"0200000001625cd48b069c9f4a6eeff9cfcac171aa7c608051343fb28531b16307cfa9e76a010000006a47304402206897a7a9502314e3d5f0d62e2fae485746cbbd9524229ab42187f5a766c9ec1d02206701c50e1947dd08c4440db66bf8a534e4a2c95a0779cf1963c229a4ebcc9bda012103d2afef396be37192a1137fe103ace0dd2e861088d0634ffd792d4d43a8bed770feffffff020000000000000000630104032cc900012844a9059cbb000000000000000000000000bf4e5cb019865cde870642bf2a2dfb375789c23b00000000000000000000000000000000000000000000000000000002540be40014f2033ede578e17fa6231047265010445bca8cf1cc2e05cb305000000001976a914c50541b82f4cda2f61cbbc219595c79ffdb4f2fa88ac3c320600\n")),(0,t.kt)("h2",{id:"send-raw-transaction"},"Send Raw Transaction"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request URL")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"POST /tx/send\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request Parameters"),"\n| Name | Type | Description |\n| - | - | - |\n| ",(0,t.kt)("inlineCode",{parentName:"p"},"rawtx")," | String | Raw Transaction Hex String |"),(0,t.kt)("table",null,(0,t.kt)("thead",null,(0,t.kt)("tr",null,(0,t.kt)("th",null,"Name"),(0,t.kt)("th",null,"Type"),(0,t.kt)("th",null,"Description"))),(0,t.kt)("tbody",null,(0,t.kt)("tr",null,(0,t.kt)("td",null,(0,t.kt)("code",null,"rawtx")),(0,t.kt)("td",null,"String"),(0,t.kt)("td",null,"Raw Transaction Hex String")))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"POST /tx/send\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Request Body")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"rawtx=02000000014727d9d3560b94b0cf1c10daea43920c24fa8451a75f2d5f69f6f585726fcb15000000006a47304402202ac3b7fd62837722fd4ab1dfdfe7d069dcaad348c7a039ed3cfc473ef435a167022033ae815fbcd8c04b2fb98d611a395dd96da757cae94bca780010bd9db6bda7230121027f2fac6638798fe79696bffba971976b325753541d24fc0a920b617b5f23815bfeffffff02c00064f6070000001976a9140588712645b0c536d59c9d7198f492cf6d2eb3cf88ac263f61e9030000001976a91421b92d11d3b7cbe5e76252eab7db8bd5ac47a0ae88ac781a0600\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Response")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 0,\n  "id": "56daa4ae91c07b84aad5bcab74bfe0c12e14b228ed755c2aaabc6b027f8698a0"\n}\n/// or\n{\n  "status": 1,\n  "message": "{error message}"\n}\n')))}i.isMDXComponent=!0}}]);