"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[9531],{3905:function(n,t,e){e.d(t,{Zo:function(){return l},kt:function(){return f}});var i=e(7294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var s=i.createContext({}),c=function(n){var t=i.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},l=function(n){var t=c(n.components);return i.createElement(s.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(n,t){var e=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,l=u(n,["components","mdxType","originalType","parentName"]),m=c(e),f=r,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return e?i.createElement(d,a(a({ref:t},l),{},{components:e})):i.createElement(d,a({ref:t},l))}));function f(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var o=e.length,a=new Array(o);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=n,u.mdxType="string"==typeof n?n:r,a[1]=u;for(var c=2;c<o;c++)a[c]=e[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}m.displayName="MDXCreateElement"},1819:function(n,t,e){e.r(t),e.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var i=e(7462),r=e(3366),o=(e(7294),e(3905)),a=["components"],u={title:"SBit Unit",description:"Unit is a utility for handling and converting SBIT units",keywords:["sbit","bitcoin","blockchain","ethereum","sbitcore","tools"],sidebar_position:14},s=void 0,c={unversionedId:"Tools/SBitcore-lib/unit",id:"Tools/SBitcore-lib/unit",title:"SBit Unit",description:"Unit is a utility for handling and converting SBIT units",source:"@site/docs/Tools/SBitcore-lib/unit.md",sourceDirName:"Tools/SBitcore-lib",slug:"/Tools/SBitcore-lib/unit",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/unit",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"SBit Unit",description:"Unit is a utility for handling and converting SBIT units",keywords:["sbit","bitcoin","blockchain","ethereum","sbitcore","tools"],sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"SBit Transaction",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/transaction"},next:{title:"SBit UnspentOutput",permalink:"/sbit.dev/docs/Tools/SBitcore-lib/unspentoutput"}},l={},p=[{value:"Creating units",id:"creating-units",level:2},{value:"Conversion",id:"conversion",level:2},{value:"Using a fiat currency",id:"using-a-fiat-currency",level:2}],m={toc:p};function f(n){var t=n.components,e=(0,r.Z)(n,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Unit is a utility for handling and converting SBIT units. We strongly recommend to always use satoshis to represent amount inside your application and only convert them to other units in the front-end."),(0,o.kt)("p",null,"To understand the need of using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Unit")," class when dealing with unit conversions, see this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"> 81.99 * 100000 // wrong\n8198999.999999999\n> var sbitcore = require('sbitcore');\n> var Unit = sbitcore.Unit;\n> Unit.fromMilis(81.99).toSatoshis() // correct\n8199000\n")),(0,o.kt)("h2",{id:"creating-units"},"Creating units"),(0,o.kt)("p",null,"There are two ways for creating a unit instance. You can instantiate the class using a value and a unit code; alternatively if the unit it's fixed you could you some of the static methods. Check some examples below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var unit;\nvar amount = 100;\n\n// using a unit code\nvar unitPreference = Unit.BTC;\nunit = new Unit(amount, unitPreference);\n\n// using a known unit\nunit = Unit.fromBTC(amount);\nunit = Unit.fromMilis(amount);\nunit = Unit.fromBits(amount);\nunit = Unit.fromSatoshis(amount);\n")),(0,o.kt)("h2",{id:"conversion"},"Conversion"),(0,o.kt)("p",null,"Once you have a unit instance, you can check its representation in all the available units. For your convenience the classes expose three ways to accomplish this. Using the ",(0,o.kt)("inlineCode",{parentName:"p"},".to(unitCode)")," method, using a fixed unit like ",(0,o.kt)("inlineCode",{parentName:"p"},".toSatoshis()")," or by using the accessors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var unit;\n\n// using a unit code\nvar unitPreference = Unit.BTC;\nvalue = Unit.fromSatoshis(amount).to(unitPreference);\n\n// using a known unit\nvalue = Unit.fromBTC(amount).toBTC();\nvalue = Unit.fromBTC(amount).toMilis();\nvalue = Unit.fromBTC(amount).toBits();\nvalue = Unit.fromBTC(amount).toSatoshis();\n\n// using accessors\nvalue = Unit.fromBTC(amount).BTC;\nvalue = Unit.fromBTC(amount).mBTC;\nvalue = Unit.fromBTC(amount).bits;\nvalue = Unit.fromBTC(amount).satoshis;\n")),(0,o.kt)("h2",{id:"using-a-fiat-currency"},"Using a fiat currency"),(0,o.kt)("p",null,"The unit class also provides a convenient alternative to create an instance from a fiat amount and the corresponding BTC/fiat exchange rate. Any unit instance can be converted to a fiat amount by providing the current exchange rate. Check the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var unit, fiat;\nvar amount = 100;\nvar exchangeRate = 350;\n\nunit = new Unit(amount, exchangeRate);\nunit = Unit.fromFiat(amount, exchangeRate);\n\nfiat = Unit.fromBits(amount).atRate(exchangeRate);\nfiat = Unit.fromBits(amount).to(exchangeRate);\n")))}f.isMDXComponent=!0}}]);