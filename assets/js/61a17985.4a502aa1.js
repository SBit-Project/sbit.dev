"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[6617],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),v=a,y=u["".concat(s,".").concat(v)]||u[v]||d[v]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6434:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={title:"Sbit Private Key",description:"Sbit Private Key",keywords:["sbit","bitcoin","blockchain","ethereum","sbitcore","tools"],sidebar_position:10},s=void 0,l={unversionedId:"Tools/SBitcore-lib/privatekey",id:"Tools/SBitcore-lib/privatekey",title:"Sbit Private Key",description:"Sbit Private Key",source:"@site/docs/Tools/SBitcore-lib/privatekey.md",sourceDirName:"Tools/SBitcore-lib",slug:"/Tools/SBitcore-lib/privatekey",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/privatekey",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Sbit Private Key",description:"Sbit Private Key",keywords:["sbit","bitcoin","blockchain","ethereum","sbitcore","tools"],sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Sbit Networks",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/networks"},next:{title:"Sbit Public Key",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/publickey"}},p={},d=[{value:"Instantiate a Private Key",id:"instantiate-a-private-key",level:2},{value:"Validating a Private Key",id:"validating-a-private-key",level:2}],u={toc:d};function v(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a SBIT private key and is needed to be able to spend SBIT and sign transactions."),(0,i.kt)("h2",{id:"instantiate-a-private-key"},"Instantiate a Private Key"),(0,i.kt)("p",null,"Here is how to create a new private key. It will generate a new random number using ",(0,i.kt)("inlineCode",{parentName:"p"},"window.crypto")," or the Node.js ",(0,i.kt)("inlineCode",{parentName:"p"},"crypto")," library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var privateKey = new PrivateKey();\n\n// Creates a private key from a hexa encoded number\nvar privateKey2 = new PrivateKey('b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb79');\n")),(0,i.kt)("p",null,"To export and import a private key, you can do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// encode into wallet export format\nvar exported = privateKey.toWIF();\n\n// instantiate from the exported (and saved) private key\nvar imported = PrivateKey.fromWIF('L3T1s1TYP9oyhHpXgkyLoJFGniEgkv2Jhi138d7R2yJ9F4QdDU2m');\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The WIF (Wallet Import Format) includes information about the network and if the associated public key is compressed or uncompressed (thus the same SBIT address will be generated by using this format)."))),(0,i.kt)("p",null,"To generate an Address or PublicKey from a PrivateKey:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var publicKey = privateKey.toPublicKey();\nvar address = publicKey.toAddress(Networks.livenet);\n")),(0,i.kt)("h2",{id:"validating-a-private-key"},"Validating a Private Key"),(0,i.kt)("p",null,"The code to do these validations looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// validate an address\nif (PrivateKey.isValid(input)){\n  ...\n}\n\n// get the specific validation error that can occurred\nvar error = PrivateKey.getValidationError(input, Networks.livenet);\nif (error) {\n  // handle the error\n}\n")))}v.isMDXComponent=!0}}]);