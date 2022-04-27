"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[6969],{3905:function(e,a,r){r.d(a,{Zo:function(){return l},kt:function(){return f}});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),d=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},l=function(e){var a=d(e.components);return t.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,v=u["".concat(c,".").concat(f)]||u[f]||p[f]||s;return r?t.createElement(v,i(i({ref:a},l),{},{components:r})):t.createElement(v,i({ref:a},l))}));function f(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5355:function(e,a,r){r.r(a),r.d(a,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var t=r(7462),n=r(3366),s=(r(7294),r(3905)),i=["components"],o={title:"SBitcore examples",description:"SBitcore examples",keywords:["sbit","bitcoin","blockchain","ethereum","sbitcore","tools"],sidebar_position:7},c=void 0,d={unversionedId:"Tools/SBitcore-lib/examples",id:"Tools/SBitcore-lib/examples",title:"SBitcore examples",description:"SBitcore examples",source:"@site/docs/Tools/SBitcore-lib/examples.md",sourceDirName:"Tools/SBitcore-lib",slug:"/Tools/SBitcore-lib/examples",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/examples",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"SBitcore examples",description:"SBitcore examples",keywords:["sbit","bitcoin","blockchain","ethereum","sbitcore","tools"],sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"SBIT Encoding",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/encoding"},next:{title:"SBit HDKeys",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/hierarchical"}},l={},p=[{value:"Generate a random address",id:"generate-a-random-address",level:2},{value:"Generate a address from a SHA256 hash",id:"generate-a-address-from-a-sha256-hash",level:2},{value:"Import an address via WIF",id:"import-an-address-via-wif",level:2},{value:"Create a Transaction",id:"create-a-transaction",level:2},{value:"Sign a SBIT message",id:"sign-a-sbit-message",level:2},{value:"Verify a SBIT message",id:"verify-a-sbit-message",level:2},{value:"Create an OP RETURN transaction",id:"create-an-op-return-transaction",level:2},{value:"Create a 2-of-3 multisig P2SH address",id:"create-a-2-of-3-multisig-p2sh-address",level:2},{value:"Spend from a 2-of-2 multisig P2SH address",id:"spend-from-a-2-of-2-multisig-p2sh-address",level:2}],u={toc:p};function f(e){var a=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"generate-a-random-address"},"Generate a random address"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var privateKey = new sbitcore.PrivateKey();\n\nvar address = privateKey.toAddress();\n")),(0,s.kt)("h2",{id:"generate-a-address-from-a-sha256-hash"},"Generate a address from a SHA256 hash"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var value = new Buffer('correct horse battery staple');\nvar hash = sbitcore.crypto.Hash.sha256(value);\nvar bn = sbitcore.crypto.BN.fromBuffer(hash);\n\nvar address = new sbitcore.PrivateKey(bn).toAddress();\n")),(0,s.kt)("h2",{id:"import-an-address-via-wif"},"Import an address via WIF"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var wif = 'Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct';\n\nvar address = new sbitcore.PrivateKey(wif).toAddress();\n")),(0,s.kt)("h2",{id:"create-a-transaction"},"Create a Transaction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'var privateKey = new sbitcore.PrivateKey(\'L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy\');\nvar utxo = {\n  "txId" : "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",\n  "outputIndex" : 0,\n  "address" : "17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",\n  "script" : "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",\n  "satoshis" : 50000\n};\n\nvar transaction = new sbitcore.Transaction()\n  .from(utxo)\n  .to(\'1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK\', 15000)\n  .sign(privateKey);\n')),(0,s.kt)("h2",{id:"sign-a-sbit-message"},"Sign a SBIT message"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var Message = require('sbitcore-message');\n\nvar privateKey = new sbitcore.PrivateKey('L23PpjkBQqpAF4vbMHNfTZAb3KFPBSawQ7KinFTzz7dxq6TZX8UA');\nvar message = new Message('This is an example of a signed message.');\n\nvar signature = message.sign(privateKey);\n")),(0,s.kt)("h2",{id:"verify-a-sbit-message"},"Verify a SBIT message"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var Message = require('sbitcore-message');\n\nvar address = '13Js7D3q4KvfSqgKN8LpNq57gcahrVc5JZ';\nvar signature = 'IBOvIfsAs/da1e36W8kw1cQOPqPVXCW5zJgNQ5kI8m57FycZXdeFmeyoIqJSREzE4W7vfDmdmPk0HokuJPvgPPE=';\n\nvar verified = new Message('This is an example of a signed message.').verify(address, signature);\n")),(0,s.kt)("h2",{id:"create-an-op-return-transaction"},"Create an OP RETURN transaction"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'var privateKey = new sbitcore.PrivateKey(\'L1uyy5qTuGrVXrmrsvHWHgVzW9kKdrp27wBC7Vs6nZDTF2BRUVwy\');\nvar utxo = {\n  "txId" : "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",\n  "outputIndex" : 0,\n  "address" : "17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",\n  "script" : "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",\n  "satoshis" : 50000\n};\n\nvar transaction = new sbitcore.Transaction()\n    .from(utxo)\n    .addData(\'sbitcore rocks\') // Add OP_RETURN data\n    .sign(privateKey);\n')),(0,s.kt)("h2",{id:"create-a-2-of-3-multisig-p2sh-address"},"Create a 2-of-3 multisig P2SH address"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var publicKeys = [\n  '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',\n  '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',\n  '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9'\n];\nvar requiredSignatures = 2;\n\nvar address = new sbitcore.Address(publicKeys, requiredSignatures);\n")),(0,s.kt)("h2",{id:"spend-from-a-2-of-2-multisig-p2sh-address"},"Spend from a 2-of-2 multisig P2SH address"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'var privateKeys = [\n  new sbitcore.PrivateKey(\'91avARGdfge8E4tZfYLoxeJ5sGBdNJQH4kvjJoQFacbgwmaKkrx\'),\n  new sbitcore.PrivateKey(\'91avARGdfge8E4tZfYLoxeJ5sGBdNJQH4kvjJoQFacbgww7vXtT\')\n];\nvar publicKeys = privateKeys.map(sbitcore.PublicKey);\nvar address = new sbitcore.Address(publicKeys, 2); // 2 of 2\n\nvar utxo = {\n  "txId" : "153068cdd81b73ec9d8dcce27f2c77ddda12dee3db424bff5cafdbe9f01c1756",\n  "outputIndex" : 0,\n  "address" : address.toString(),\n  "script" : new sbitcore.Script(address).toHex(),\n  "satoshis" : 20000\n};\n\nvar transaction = new sbitcore.Transaction()\n    .from(utxo, publicKeys, 2)\n    .to(\'mtoKs9V381UAhUia3d7Vb9GNak8Qvmcsme\', 20000)\n    .sign(privateKeys);\n')))}f.isMDXComponent=!0}}]);