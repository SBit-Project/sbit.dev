"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[160],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=i,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7639:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={title:"SBit Public Key",description:"SBit Public Key",keywords:["sbit","bitcoin","blockchain","ethereum","sbitcore","tools"],sidebar_position:11},s=void 0,l={unversionedId:"Tools/SBitcore-lib/publickey",id:"Tools/SBitcore-lib/publickey",title:"SBit Public Key",description:"SBit Public Key",source:"@site/docs/Tools/SBitcore-lib/publickey.md",sourceDirName:"Tools/SBitcore-lib",slug:"/Tools/SBitcore-lib/publickey",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/publickey",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"SBit Public Key",description:"SBit Public Key",keywords:["sbit","bitcoin","blockchain","ethereum","sbitcore","tools"],sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"SBit Private Key",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/privatekey"},next:{title:"SBit Script",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/script"}},p={},u=[{value:"Instantiate a Public Key",id:"instantiate-a-public-key",level:2},{value:"Validating a Public Key",id:"validating-a-public-key",level:2},{value:"Compressed vs Uncompressed",id:"compressed-vs-uncompressed",level:2}],d={toc:u};function b(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents a SBIT public key and is needed to be able to receive SBIT, as is usually represented as a SBIT ",(0,a.kt)("a",{parentName:"p",href:"/sbit.dev/docs/Tools/SBitcore-lib/address"},"Address"),". "),(0,a.kt)("p",null,"A PublicKey in sbitcore is an immutable object and can be instantiated from a ",(0,a.kt)("a",{parentName:"p",href:"crypto"},"Point"),", string, ",(0,a.kt)("a",{parentName:"p",href:"privatekey"},"PrivateKey"),", Buffer or a ",(0,a.kt)("a",{parentName:"p",href:"crypto"},"BN"),"."),(0,a.kt)("h2",{id:"instantiate-a-public-key"},"Instantiate a Public Key"),(0,a.kt)("p",null,"Here is how to instantiate a public key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nvar privateKey = new PrivateKey();\n\n// from a private key\nvar publicKey = new PublicKey(privateKey);\n\n// from a der hex encoded string\nvar publicKey2 = new PublicKey('02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc');\n")),(0,a.kt)("h2",{id:"validating-a-public-key"},"Validating a Public Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"if (PublicKey.isValid('02a1633cafcc01ebfb6d78e39f687a1f0995c62fc95f51ead10a02ee0be551b5dc')){\n  // valid public key\n}\n")),(0,a.kt)("h2",{id:"compressed-vs-uncompressed"},"Compressed vs Uncompressed"),(0,a.kt)("p",null,"It's important to note that there are two possible ways to represent a public key. The standard is ",(0,a.kt)("em",{parentName:"p"},"compressed")," and includes the X value and parity (as represented above in the documentation). There is also a longer version that is ",(0,a.kt)("em",{parentName:"p"},"uncompressed")," which includes both X and Y values. Using this encoding will generate a different SBIT address, so be careful when selecting the encoding. Uncompressed public keys start with 0x04; compressed public keys begin with 0x03 or 0x02 depending on whether they're greater or less than the midpoint of the curve. These prefix bytes are all used in official secp256k1 documentation."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"> var sbitcore = require('sbitcore');\n\n// compressed public key starting with 0x03 (greater than midpoint of curve)\n> var compressedPK = sbitcore.PublicKey('030589ee559348bd6a7325994f9c8eff12bd'+\n    '5d73cc683142bd0dd1a17abc99b0dc');\n> compressedPK.compressed;\ntrue\n> compressedPK.toAddress().toString();\n'1KbUJ4x8epz6QqxkmZbTc4f79JbWWz6g37'\n// compressed public key starting with 0x02 (smaller than midpoint of curve)\n> var compressedPK2 = new sbitcore.PublicKey('02a1633cafcc01ebfb6d78e39f687a1f'+\n    '0995c62fc95f51ead10a02ee0be551b5dc');\n> compressedPK2.compressed;\ntrue\n> compressedPK.toAddress().toString();\n'1KbUJ4x8epz6QqxkmZbTc4f79JbWWz6g37'\n// uncompressed public key, starting with 0x04. Contains both X and Y encoded\n> var uncompressed = sbitcore.PublicKey('0479BE667EF9DCBBAC55A06295CE870B07029'+\n    'BFCDB2DCE28D959F2815B16F81798483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68'+\n    '554199C47D08FFB10D4B8');\n> uncompressed.compressed\nfalse\n> uncompressed.toAddress().toString()\n'1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm'\n")))}b.isMDXComponent=!0}}]);