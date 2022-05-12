"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[2175],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],l={title:"How to add options",description:"How to add options for Sbit node or add config file",keywords:["sbit","bitcoin","blockchain","ethereum","wallet","security"],sidebar_position:2},s=void 0,p={unversionedId:"User-Guide/How-To-Add-Options",id:"User-Guide/How-To-Add-Options",title:"How to add options",description:"How to add options for Sbit node or add config file",source:"@site/docs/User-Guide/How-To-Add-Options.md",sourceDirName:"User-Guide",slug:"/User-Guide/How-To-Add-Options",permalink:"/sbit.dev/docs/User-Guide/How-To-Add-Options",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to add options",description:"How to add options for Sbit node or add config file",keywords:["sbit","bitcoin","blockchain","ethereum","wallet","security"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Encrypt & Unlock",permalink:"/sbit.dev/docs/User-Guide/Encrypt-and-Unlock-Sbit-Wallet"},next:{title:"Deploy Star Network",permalink:"/sbit.dev/docs/User-Guide/How-to-Deploy-Star-Network"}},c={},d=[{value:"For Sbit PC wallet\uff08Sbit Core qt wallet\uff09",id:"for-sbit-pc-walletsbit-core-qt-wallet",level:2},{value:"1. Create <code>sbit.conf</code> file",id:"1-create-sbitconf-file",level:3},{value:"2. Specify the options",id:"2-specify-the-options",level:3},{value:"3. Restart wallet",id:"3-restart-wallet",level:3},{value:"For the command-line wallet <code>sbitd</code>",id:"for-the-command-line-wallet-sbitd",level:2},{value:"Check options list by command line",id:"check-options-list-by-command-line",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"User can specify extra options (or set configurations) for Sbit node, in order to enable/disable some specific features, other than default settings."),(0,a.kt)("p",null,"This tutorial describes how to specify options (or configurations) to Sbit node."),(0,a.kt)("h2",{id:"for-sbit-pc-walletsbit-core-qt-wallet"},"For Sbit PC wallet\uff08Sbit Core qt wallet\uff09"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"This works for both PC wallet and command-line sbitd wallet"))))),(0,a.kt)("p",null,"Sbit PC wallet (i.e. sbit core qt wallet) is the most widely used Sbit wallet by common users."),(0,a.kt)("p",null,"User can edit sbit config file to specify some options."),(0,a.kt)("p",null,"Instructions:"),(0,a.kt)("h3",{id:"1-create-sbitconf-file"},"1. Create ",(0,a.kt)("inlineCode",{parentName:"h3"},"sbit.conf")," file"),(0,a.kt)("p",null,"Create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"sbit.conf")," under your ",(0,a.kt)("inlineCode",{parentName:"p"},"datadir"),", the default datadir paths for different OS are different:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux: ~/.sbit"),(0,a.kt)("li",{parentName:"ul"},"OSX: ~/Library/Application Support/Sbit"),(0,a.kt)("li",{parentName:"ul"},"Windows: %APPDATA%\\Sbit (Please paste this path to your windows explorer, the path will be resolved automatically)")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Please be careful and don\u2018t remove or change any content under this directory except you are aware of them."))))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"datadir")," might be manually set as well, so please create your sbit.conf under the datadir you spcified, if you did"))),(0,a.kt)("p",null,"Still don't know how to create a file? You can also open this ",(0,a.kt)("inlineCode",{parentName:"p"},"sbit.conf")," on the wallet UI directly ",(0,a.kt)("inlineCode",{parentName:"p"},"System Preference->OPEN CONFIGURATION FILE")),(0,a.kt)("p",null,"This will create and open the ",(0,a.kt)("inlineCode",{parentName:"p"},"sbit.conf")," directly for user."),(0,a.kt)("h3",{id:"2-specify-the-options"},"2. Specify the options"),(0,a.kt)("p",null,"User can then specify any option in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"sbit.conf")," just created."),(0,a.kt)("p",null,"For example, to specify some rpc related settings, user might add following lines to ",(0,a.kt)("inlineCode",{parentName:"p"},"sbit.conf"),": "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rpcuser=test\nrpcpassword=test1234\nserver=1\n")),(0,a.kt)("p",null,"This will set rpcuser to ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", rpcpassword to ",(0,a.kt)("inlineCode",{parentName:"p"},"test1234"),", and enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," feature."),(0,a.kt)("h3",{id:"3-restart-wallet"},"3. Restart wallet"),(0,a.kt)("p",null,"It is required to RESTART the wallet after editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"sbit.conf")," file, before the options are really effective."),(0,a.kt)("h2",{id:"for-the-command-line-wallet-sbitd"},"For the command-line wallet ",(0,a.kt)("inlineCode",{parentName:"h2"},"sbitd")),(0,a.kt)("p",null,"If your have no idea about command line, please ignore this section."),(0,a.kt)("p",null,"For those who are familiar with command line, you can also specify options by adding options when running ",(0,a.kt)("inlineCode",{parentName:"p"},"sbitd"),"."),(0,a.kt)("p",null,"For example\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./sbitd -rpcuser=test -rpcpassword=test1234 -server=1\n")),(0,a.kt)("p",null,"These options ",(0,a.kt)("inlineCode",{parentName:"p"},"-rpcuser=test -rpcpassword=test1234 -server=1"),' realize the same configuration setting as the "Specify the options" section described.'),(0,a.kt)("p",null,"Note that if you specify the options through ",(0,a.kt)("inlineCode",{parentName:"p"},"sbitd")," command line, same options will be required to add to corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"sbit-cli")," command, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./sbit-cli -rpcuser=test -rpcpassword=test1234 getinfo\n")),(0,a.kt)("h3",{id:"check-options-list-by-command-line"},"Check options list by command line"),(0,a.kt)("p",null,"You can check the complete option list with\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./sbitd -help\n")))}u.isMDXComponent=!0}}]);