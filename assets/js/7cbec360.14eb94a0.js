"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[3302],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),k=u(n),p=i,m=k["".concat(s,".").concat(p)]||k[p]||c[p]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={title:"Sbit Staking",description:"Sbit Staking\uff08PoS mining\uff09Tutorial",keywords:["sbit","bitcoin","blockchain","ethereum","wallet","security"],sidebar_position:4},s=void 0,u={unversionedId:"User-Guide/How-to-Stake-with-Sbit",id:"User-Guide/How-to-Stake-with-Sbit",title:"Sbit Staking",description:"Sbit Staking\uff08PoS mining\uff09Tutorial",source:"@site/docs/User-Guide/How-to-Stake-with-Sbit.md",sourceDirName:"User-Guide",slug:"/User-Guide/How-to-Stake-with-Sbit",permalink:"/sbit.dev/docs/User-Guide/How-to-Stake-with-Sbit",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Sbit Staking",description:"Sbit Staking\uff08PoS mining\uff09Tutorial",keywords:["sbit","bitcoin","blockchain","ethereum","wallet","security"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deploy Star Network",permalink:"/sbit.dev/docs/User-Guide/How-to-Deploy-Star-Network"},next:{title:"SalvageWallet",permalink:"/sbit.dev/docs/User-Guide/salvagewallet"}},d={},c=[{value:"Method 1\uff1aStaking with <code>sbitd</code> ( Command Line )",id:"method-1staking-with-sbitd--command-line-",level:2},{value:"1. Run <code>sbitd</code>",id:"1-run-sbitd",level:3},{value:"2. Send some SBIT to your wallet",id:"2-send-some-sbit-to-your-wallet",level:3},{value:"3. Check staking info",id:"3-check-staking-info",level:3},{value:"4. How to stake if the wallet is encrypted\uff1f",id:"4-how-to-stake-if-the-wallet-is-encrypted",level:3},{value:"Method 2: Staking with sbit-qt wallet (official PC wallet)",id:"method-2-staking-with-sbit-qt-wallet-official-pc-wallet",level:2},{value:"1. Open Sbit qt wallet",id:"1-open-sbit-qt-wallet",level:3},{value:"2. Send some SBIT to your wallet",id:"2-send-some-sbit-to-your-wallet-1",level:3},{value:"3. Check staking status",id:"3-check-staking-status",level:3},{value:"About block reward",id:"about-block-reward",level:2},{value:"How to disable staking?",id:"how-to-disable-staking",level:2}],k={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sbit employs PoS (Proof of Stake) consensus mechanism, which is different from Bitcoin's PoW (Proof of Work). The mining process in PoS system is called staking. The block producer will get 1 SBIT, as well as the transaction fees and gases as block reward. So the real reward is usually more than 1 SBIT in total."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Sbit blocks are produced in average every 32s")))),(0,o.kt)("p",null,"Basic requirements for staking\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run a Sbit fullnode, and keep online (Since Sbit is using PoS, we don't need any mining machine, just PC or even Raspberry Pi can run a fullnode);"),(0,o.kt)("li",{parentName:"ol"},"Have some SBIT in the wallet (fullnode)\uff08Any amount of SBIT can be used for staking, more SBIT means higher possibility to stake).")),(0,o.kt)("p",null,"If you have no SBIT yet, please get some from market before you doing following staking settings."),(0,o.kt)("p",null,"Currently, Sbit Core wallet is the only wallet that support Sbit PoS staking. Note that other wallets like mobile wallet and Sbit Electrum are not able to stake for the time being."),(0,o.kt)("p",null,"Two ways to stake:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Method 1\uff1aStaking with sbitd, using command line, suitable for Linux/OSX/Windows/Raspberry Pi users who are familiar with command line tools."),(0,o.kt)("li",{parentName:"ul"},"Method 2\uff1aStaking with ",(0,o.kt)("inlineCode",{parentName:"li"},"sbit-qt")," wallet, with GUI, suitable for common users.")),(0,o.kt)("p",null,"Either way works in the same way for staking, so you can choose either method you like."),(0,o.kt)("h2",{id:"method-1staking-with-sbitd--command-line-"},"Method 1\uff1aStaking with ",(0,o.kt)("inlineCode",{parentName:"h2"},"sbitd")," ( Command Line )"),(0,o.kt)("h3",{id:"1-run-sbitd"},"1. Run ",(0,o.kt)("inlineCode",{parentName:"h3"},"sbitd")),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"sbitd")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./sbitd -daemon\n")),(0,o.kt)("p",null,"Staking is default on for sbitd, so no need for other options if you only want to stake."),(0,o.kt)("h3",{id:"2-send-some-sbit-to-your-wallet"},"2. Send some SBIT to your wallet"),(0,o.kt)("p",null,"First you can generate a new address with\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./sbit-cli getnewaddress\n")),(0,o.kt)("p",null,"This will generate a new address with Prefix 'S'. You can send some SBIT to this new generated address for staking. You can generate as many addresses as you like, and send arbitrary SBIT as you like for staking."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"The coin should wait for 2000 blocks before being able to stake, i.e. about 17 hours to MATURE."),". "))),(0,o.kt)("p",null,"After the Sbit node syncing to the latest block, you can check current balance with ",(0,o.kt)("inlineCode",{parentName:"p"},"./sbit-cli getbalance")," or get utxo list with",(0,o.kt)("inlineCode",{parentName:"p"},"./sbit-cli listunspent"),"."),(0,o.kt)("p",null,"Please do following steps after your coin is mature."),(0,o.kt)("h3",{id:"3-check-staking-info"},"3. Check staking info"),(0,o.kt)("p",null,"Check current staking info with\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./sbit-cli getstakinginfo\n")),(0,o.kt)("p",null,"You might get the result like this\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enabled": true,\n  "staking": true,\n  "errors": "",\n  "currentblocksize": 1000,\n  "currentblocktx": 0,\n  "pooledtx": 5,\n  "difficulty": 5788429.564280176,\n  "search-interval": 46,\n  "weight": 53206430,\n  "netstakeweight": 2278172497819029,\n  "expectedtime": 5480654870\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," means if your wallet have enabled staking, it should be true by default. ",(0,o.kt)("inlineCode",{parentName:"p"},"staking")," means if your wallet is currently staking (mining). ",(0,o.kt)("inlineCode",{parentName:"p"},"weight")," stands for the amount of SBIT that is staking right now, with unit 10^-8 SBIT, here in the example, we have 0.532SBIT staking. ",(0,o.kt)("inlineCode",{parentName:"p"},"expectedtime")," stands for the expected time that you will get a reward, the unit is second."),(0,o.kt)("h3",{id:"4-how-to-stake-if-the-wallet-is-encrypted"},"4. How to stake if the wallet is encrypted\uff1f"),(0,o.kt)("p",null,"If your wallet is not encrypted, you can skip this section. However, for security, we recommand you encrypt your wallet."),(0,o.kt)("p",null,"Sbit wallet can be encrypted with ",(0,o.kt)("inlineCode",{parentName:"p"},"encryptwallet"),". However, staking will be stopped when it is encrypted. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"./sbit-cli getstakinginfo")," for a encrypted wallet\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "enabled": true,\n  "staking": false,\n  "errors": "",\n  "currentblocksize": 1000,\n  "currentblocktx": 0,\n  "pooledtx": 94,\n  "difficulty": 5788429.670171153,\n  "search-interval": 0,\n  "weight": 53206430,\n  "netstakeweight": 2438496688951881,\n  "expectedtime": 0\n}\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("inlineCode",{parentName:"p"},"staking")," turns to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", which means wallet is not staking."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"walletpassphrase")," to unlock wallet for staking\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'./sbit-cli walletpassphrase "<your passphrase>" 99999999 true\n')),(0,o.kt)("p",null,'The meaning of the arguments can be found in the documents "',(0,o.kt)("a",{parentName:"p",href:"Encrypt-and-Unlock-Sbit-Wallet"},"How to encrypt?"),'".'),(0,o.kt)("p",null,"After unlocking, you can double check ",(0,o.kt)("inlineCode",{parentName:"p"},"getstakinginfo"),", it should look the same with previous unlocked result, ",(0,o.kt)("inlineCode",{parentName:"p"},"staking")," become true."),(0,o.kt)("h2",{id:"method-2-staking-with-sbit-qt-wallet-official-pc-wallet"},"Method 2: Staking with sbit-qt wallet (official PC wallet)"),(0,o.kt)("h3",{id:"1-open-sbit-qt-wallet"},"1. Open Sbit qt wallet"),(0,o.kt)("p",null,"Launch the wallet."),(0,o.kt)("h3",{id:"2-send-some-sbit-to-your-wallet-1"},"2. Send some SBIT to your wallet"),(0,o.kt)("p",null,"If you already have some SBIT in your wallet, you might skip this step."),(0,o.kt)("p",null,"If not, please send some SBIT to your wallet first."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"The coin should wait for 2000 blocks before being able to stake, i.e. about 17 hours to MATURE."),". "))),(0,o.kt)("h3",{id:"3-check-staking-status"},"3. Check staking status"),(0,o.kt)("p",null,"The flash sign at the bottom of wallet shows staking info"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solid black flash means it is staking now"),". For more information, you can put your mouse on the flash."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Staking"),": if it is staking\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Your weight is"),": How many SBIT are able to used for staking, unit is SBIT;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Network weight is"),": How many SBIT are staking in the network, unit is SBIT\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Expected time"),": expected time to get reward, unit is Day.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hollow flash measn it is not staking")),(0,o.kt)("p",null,"Possible reasons for not staking\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"1.There is no coins of no mature coins (more than 2000 confirmations(blocks)) -- Solution: send some SBIT to the wallet and wait for 2000 blocks (about 17 hours);")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"2.Wallet is locked/encrypted -- Solution: unlock the wallet for staking. (",(0,o.kt)("a",{parentName:"p",href:"Encrypt-and-Unlock-Sbit-Wallet"},"How to unlock?"),")"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No flash sign means staking is disabled")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3.Staking is disabled -- Solution: enable staking in the sbit.conf (-staking=true)")),(0,o.kt)("h2",{id:"about-block-reward"},"About block reward"),(0,o.kt)("p",null,"The block producer will get more than 1 SBIT rewards, something to keep in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The reward come from a new transaction, you can check balance to see if you get the reward."),(0,o.kt)("li",{parentName:"ul"},"Once succesfully stake, you will get 1 SBIT reward immediately."),(0,o.kt)("li",{parentName:"ul"},"The staked coins (UTXO) will be locked for 2000 blocks, during this period, it cannot be spent nor be used to stake. ")),(0,o.kt)("h2",{id:"how-to-disable-staking"},"How to disable staking?"),(0,o.kt)("p",null,"Staking is by default enabled for Sbit wallet. If you need to disable staking for some reason (for example exchanges are always recommanded to disable staking), you might following anyone of the 3 ways below:"),(0,o.kt)("p",null,"1 Add ",(0,o.kt)("inlineCode",{parentName:"p"},"-staking=false")," when running Sbit node\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./sbitd -staking=false -daemon\n")),(0,o.kt)("p",null,"For qt wallet, it is like\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./sbit-qt -staking=false\n")),(0,o.kt)("p",null,"2 Add config ",(0,o.kt)("inlineCode",{parentName:"p"},"staking=false")," in sbit.conf."),(0,o.kt)("p",null,"3 Encrypt wallet, since encrypted wallet will automatically stop staking."))}p.isMDXComponent=!0}}]);