"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[1529],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},b=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),b=c(n),d=i,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||r;return n?a.createElement(m,s(s({ref:e},u),{},{components:n})):a.createElement(m,s({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,s=new Array(r);s[0]=b;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},917:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={title:"SBitjs lib",description:"An extend lib for bitcoinjs-lib",keywords:["sbit","lib","js","tools"]},l=void 0,c={unversionedId:"Tools/sbitjs-lib",id:"Tools/sbitjs-lib",title:"SBitjs lib",description:"An extend lib for bitcoinjs-lib",source:"@site/docs/Tools/sbitjs-lib.md",sourceDirName:"Tools",slug:"/Tools/sbitjs-lib",permalink:"/sbit.dev/docs/Tools/sbitjs-lib",tags:[],version:"current",frontMatter:{title:"SBitjs lib",description:"An extend lib for bitcoinjs-lib",keywords:["sbit","lib","js","tools"]},sidebar:"tutorialSidebar",previous:{title:"The SBIT opcodes map",permalink:"/sbit.dev/docs/Tools/opcodes-js"},next:{title:"Code of Conduct",permalink:"/sbit.dev/docs/Help/CODE_OF_CONDUCT"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Network",id:"network",level:2},{value:"Utils",id:"utils",level:2},{value:"Utils.selectTxs",id:"utilsselecttxs",level:3},{value:"Utils.buildPubKeyHashTransaction",id:"utilsbuildpubkeyhashtransaction",level:3},{value:"Utils.buildCreateContractTransaction",id:"utilsbuildcreatecontracttransaction",level:3},{value:"Utils.buildSendToContractTransaction",id:"utilsbuildsendtocontracttransaction",level:3}],b={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is an extend lib for bitcoinjs-lib.\nIt extends the network type of bitcoinjs-lib.\nIt also provides an useful lib to help you building SBIT transactions."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install sbitjs-lib\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var sbitjs = require('sbitjs-lib')\n")),(0,r.kt)("h2",{id:"network"},"Network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n    sbit: {\n        messagePrefix: '\\x15SBit Signed Message:\\n',\n        bech32: 'sc',\n        bip32: {\n            public: 0x0878c22a,\n            private: 0x0878bda8\n        },\n        pubKeyHash: 0x3F,\n        scriptHash: 0x32,\n        wif: 0x80\n    },\n    sbit_testnet: {\n        messagePrefix: '\\x15SBit Signed Message:\\n',\n        bech32: 'ts',\n        bip32: {\n            public: 0x084226ab,\n            private: 0x08423661\n        },\n        pubKeyHash: 0x7D,\n        scriptHash: 0x6e,\n        wif: 0xef\n    }\n}\n\n")),(0,r.kt)("h2",{id:"utils"},"Utils"),(0,r.kt)("h3",{id:"utilsselecttxs"},"Utils.selectTxs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * This is a function for selecting SBIT utxos to build transactions\n * the transaction object takes at least 3 fields, value(unit is 1e-8 SBIT) , confirmations and isStake\n *\n * @param [transaction] unspentTransactions\n * @param Number amount(unit: SBIT)\n * @param Number fee(unit: SBIT)\n * @returns [transaction]\n */\nfunction selectTxs(unspentTransactions, amount, fee)\n")),(0,r.kt)("h3",{id:"utilsbuildpubkeyhashtransaction"},"Utils.buildPubKeyHashTransaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * This is a helper function to build a pubkeyhash transaction\n * the transaction object takes at least 5 fields, value(unit is 1e-8 SBIT), confirmations, isStake, hash and pos\n *\n * @param bitcoinjs-lib.KeyPair keyPair\n * @param String to\n * @param Number amount(unit: SBIT)\n * @param Number fee(unit: SBIT)\n * @param [transaction] utxoList\n * @returns String the built tx\n */\nfunction buildPubKeyHashTransaction(keyPair, to, amount, fee, utxoList)\n")),(0,r.kt)("h3",{id:"utilsbuildcreatecontracttransaction"},"Utils.buildCreateContractTransaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * This is a helper function to build a create-contract transaction\n * the transaction object takes at least 5 fields, value(unit is 1e-8 SBIT), confirmations, isStake, hash and pos\n *\n * @param bitcoinjs-lib.KeyPair keyPair\n * @param String code The contract byte code\n * @param Number gasLimit\n * @param Number gasPrice(unit: 1e-8 SBIT/gas)\n * @param Number fee(unit: SBIT)\n * @param [transaction] utxoList\n * @returns String the built tx\n */\nfunction buildCreateContractTransaction(keyPair, code, gasLimit, gasPrice, fee, utxoList)\n")),(0,r.kt)("h3",{id:"utilsbuildsendtocontracttransaction"},"Utils.buildSendToContractTransaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * This is a helper function to build a send-to-contract transaction\n * the transaction object takes at least 5 fields, value(unit is 1e-8 SBIT), confirmations, isStake, hash and pos\n *\n * @param bitcoinjs-lib.KeyPair keyPair\n * @param String contractAddress The contract address\n * @param String encodedData The encoded abi data\n * @param Number gasLimit\n * @param Number gasPrice(unit: 1e-8 SBIT/gas)\n * @param Number fee(unit: SBIT)\n * @param [transaction] utxoList\n * @returns String the built tx\n */\nfunction buildSendToContractTransaction(keyPair, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList)\n")))}d.isMDXComponent=!0}}]);