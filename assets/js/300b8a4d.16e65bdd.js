"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[1201],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||s;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8281:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var n=a(7462),i=a(3366),s=(a(7294),a(3905)),o=["components"],r={title:"Basic wallet functions",description:"Basic SBit wallet functions",keywords:["sbit","bitcoin","blockchain","ethereum","wallet","security"],sidebar_position:6},l=void 0,d={unversionedId:"User-Guide/Sbit-Wallet-Tutorial",id:"User-Guide/Sbit-Wallet-Tutorial",title:"Basic wallet functions",description:"Basic SBit wallet functions",source:"@site/docs/User-Guide/Sbit-Wallet-Tutorial.md",sourceDirName:"User-Guide",slug:"/User-Guide/Sbit-Wallet-Tutorial",permalink:"/sbit.dev/docs/User-Guide/Sbit-Wallet-Tutorial",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Basic wallet functions",description:"Basic SBit wallet functions",keywords:["sbit","bitcoin","blockchain","ethereum","wallet","security"],sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"SalvageWallet",permalink:"/sbit.dev/docs/User-Guide/salvagewallet"},next:{title:"Introduction",permalink:"/sbit.dev/docs/Smart-Contract/"}},u={},c=[{value:"Basic wallet functions",id:"basic-wallet-functions",level:2},{value:"Send Menu",id:"send-menu",level:2},{value:"Receive",id:"receive",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Wallet Backup",id:"wallet-backup",level:2},{value:"Restore wallet backup",id:"restore-wallet-backup",level:2},{value:"Staking",id:"staking",level:2},{value:"Access the console tab",id:"access-the-console-tab",level:2},{value:"Delegating Address to Super Staker",id:"delegating-address-to-super-staker",level:2},{value:"Delegating Address Operations",id:"delegating-address-operations",level:2},{value:"Super Staker Configuration",id:"super-staker-configuration",level:2},{value:"Launching Sbit Core as a Super Staker",id:"launching-sbit-core-as-a-super-staker",level:2},{value:"Super Staker Operations",id:"super-staker-operations",level:2},{value:"Restore",id:"restore",level:2}],p={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"basic-wallet-functions"},"Basic wallet functions"),(0,s.kt)("p",null,"On the left side of the wallet, we can find basic wallet functionality such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Send"),(0,s.kt)("li",{parentName:"ul"},"Receive"),(0,s.kt)("li",{parentName:"ul"},"Transactions (This is a more detailed and full historical set of transactions)"),(0,s.kt)("li",{parentName:"ul"},"Smart Contract")),(0,s.kt)("h2",{id:"send-menu"},"Send Menu"),(0,s.kt)("p",null,"On the send menu, we have different functions, all are quite basic to learn and use."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Pay to:")," Here we\u2019ll enter the address we want to send Sbit to ",(0,s.kt)("strong",{parentName:"p"},"(Only Sbit Mainnet addresses will work).")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Label:"),"  Optional, as it\u2019s stated, it\u2019s just a name/tag"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Amount:")," Here we enter the amount of Sbit we want to Send"),(0,s.kt)("p",null,"Once all fields are covered, we can click on the \u201cSend\u201d button and the Sbit coins will be sent to the address we entered above."),(0,s.kt)("h2",{id:"receive"},"Receive"),(0,s.kt)("p",null,"Here we can display our Sbit wallet address and even generate new ones!"),(0,s.kt)("p",null,"This is useful for receiving payments from more than one sender and helps you keep track of each transaction."),(0,s.kt)("p",null,"To obtain the deposit address, simply click on \u201cRequest Payment\u201d and you\u2019ll see a popup dialog show up with your Sbit wallet deposit address. Here you can receive coins from your exchange or from other users."),(0,s.kt)("h2",{id:"transactions"},"Transactions"),(0,s.kt)("p",null,"Here you can see both incoming and outgoing transactions, shows every historical transactions."),(0,s.kt)("h2",{id:"wallet-backup"},"Wallet Backup"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"It's recommended to make the backup ",(0,s.kt)("strong",{parentName:"p"},"after")," encrypting the wallet."))),(0,s.kt)("p",null,"To access the backup option, we go into File/Backup Wallet and then we enter route and name."),(0,s.kt)("p",null,"After the backup\u2019s name is entered and we\u2019ve verified the route where the wallet is being saved to, we can click on save. Now we\u2019ve successfully backed up our wallet."),(0,s.kt)("h2",{id:"restore-wallet-backup"},"Restore wallet backup"),(0,s.kt)("p",null,"Go to File -> Restore wallet, this will open a dialog which will allow us to restore directly from the Sbit-core QT wallet!"),(0,s.kt)("h2",{id:"staking"},"Staking"),(0,s.kt)("p",null,"In order for staking to take place we must:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Have a transaction with more than 2000 confirmations on the blockchain"),(0,s.kt)("li",{parentName:"ol"},"Unlock our wallet prior to staking (preferably before reaching 2000 confirmations on your inputs)."),(0,s.kt)("li",{parentName:"ol"},"Keep our wallet open at all times, otherwise even if our coins are matured, they won\u2019t be able to stake.")),(0,s.kt)("p",null,'Here\u2019s how to unlock the wallet for staking only, Select the main menu "Stake\u201d option to show the Stake page. Click the Staking button to the right, then enter the passphrase to unlock for staking only and activate staking.'),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If unlocking the wallet using Settings \u2013 Unlock wallet and the Unlock wallet page, the Stake menu Staking button must also be clicked to the right to activate staking."))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Remember to have your wallet open 24/7, if you close it, you won\u2019t be able to stake")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Please make sure \u201cfor staking only\u201d is selected.")))),(0,s.kt)("h2",{id:"access-the-console-tab"},"Access the console tab"),(0,s.kt)("p",null,'Rhe console tab can be accessed from the "Windows" menu.'),(0,s.kt)("p",null,"The console tab is incredibly useful, although it's mostly for advanced uses, it is a very powerful tool and can perform actions that aren't really possible using the graphical interface. "),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"delegating-address-to-super-staker"},"Delegating Address to Super Staker"),(0,s.kt)("p",null,"Sbit Offline Staking allows the address for a non-staking wallet (capable of making the delegation assignment transaction) to be delegated to a Super Staker. Offline Staking is non-custodial: the delegation user keeps full control of their coins and private keys. The address delegation is made via a smart contract transaction from the delegation user's wallet which identifies the delegator's address, the Super Staker address, and the fee the delegator agrees to pay. If the Super Staker accepts this fee, it will begin staking the delegated address UTXOs."),(0,s.kt)("p",null,"The normal rules for staking UTXOs apply to delegated UTXOs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"UTXOs may only be used for staking after they mature (2000 confirmations)"),(0,s.kt)("li",{parentName:"ul"},"The Super Staker will set a minimum size of UTXOs to stake, defaulting to 100 SBIT. Delegated UTXOs below this amount will be ignored."),(0,s.kt)("li",{parentName:"ul"},"It is best practice (for optimum returns) to break UTXOs up into sizes of 100 to 200 SBIT each. For users of the Sbit Core wallet, this can be easily accomplished with the command line version of ",(0,s.kt)("inlineCode",{parentName:"li"},"splitutxosforaddress"),", described below.")),(0,s.kt)("p",null,'To make the delegation assignment from the Sbit Core wallet, select Stake \u2013 Delegations, the Add delegation "+" button in the upper right corner, enter the Staker name (for local reference only), Staker address, Fee you agree to pay, and your Address to be delegated. Leave the default Gas settings alone unless you understand how to set these. The delegation transaction will require at least 0.9 SBIT in fees and any excess will be refunded.'),(0,s.kt)("p",null,"Press Confirm and Yes to send the delegation transaction."),(0,s.kt)("h2",{id:"delegating-address-operations"},"Delegating Address Operations"),(0,s.kt)("p",null,"The Delegate Address transaction is sent to a smart contract which keeps the delegation assignments and will be picked up by the Super Staker there. You can see Delegated Address block reward transactions in the wallet and also with the explorer."),(0,s.kt)("p",null,"If the wallet is holding SBIT on multiple addresses, the delegation must be made separately for each address (and the transaction fee paid for each address) so it may make sense to consolidate the UTXOs to a single address before splitting UTXOs and delegating. In this case, use coin selection to select and consolidate the addresses. Alternatively, the ",(0,s.kt)("inlineCode",{parentName:"p"},"sendmanywithdupes")," command could be used to send the entire wallet balance to a new address with appropriately-sized UTXOs."),(0,s.kt)("p",null,"If the Super Staker accepts a delegation for a particular fee, and then the Super Staker reduces that fee (accepts assignments for a lower fee), to take advantage of that lower fee the user must delegate their address again with the lower fee set."),(0,s.kt)("p",null,"Delegations from a wallet may be checked on the Stake \u2013 Delegations page or with the ",(0,s.kt)("inlineCode",{parentName:"p"},"getdelegationinfoforaddress")," command."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Backup your wallet to save a copy of the wallet.dat file."))),(0,s.kt)("h2",{id:"super-staker-configuration"},"Super Staker Configuration"),(0,s.kt)("p",null,"The Sbit Core wallet provides online Proof of Stake and can be launched and configured to operate as a Super Staker and receive address delegations."),(0,s.kt)("p",null,'To configure the Sbit-Qt wallet for a Super Staker, select Stake \u2013 Super Staking and the "+" button to add a new Super Staker. Enter the Staker name (for local reference only, here using the first part of the address and "10" to denote a 10% fee) and select the Staker address using the dropdown.'),(0,s.kt)("p",null,"To operate as a Super Staker, the wallet must be able to check arbitrary addresses (address index), have logs enabled for smart contract operations(log events), be enabled for staking and the single parameter ",(0,s.kt)("inlineCode",{parentName:"p"},"-superstaking=true")," sets these three parameters. The first time launching with ",(0,s.kt)("inlineCode",{parentName:"p"},"-superstaking=true")," the wallet will rescan the blockchain to rebuild the database to add the address index and log events."),(0,s.kt)("p",null,"Next, the wallet will prompt to be restarted as a Super Staker using Settings \u2013 Options \u2013 Enable super staking and OK to restart the wallet."),(0,s.kt)("p",null,"On startup, the wallet will confirm that you want to scan and rebuild the database."),(0,s.kt)("p",null,'The wallet will show "Reindexing blocks on disk\u2026" and "Syncing Headers" while it rebuilds the database, this may take several tens of minutes depending on your computer.'),(0,s.kt)("p",null,'After launching, go back to the Stake \u2013 Super Staking page and select the "Configure super staker" button (the gear symbol will now be visible) to complete the Super Staker configuration. Click the Custom box to see the default recommendations or customize the setup. Click OK to complete the setup.'),(0,s.kt)("p",null,"The configuration settings are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Minimum fee \u2013 the minimum fee offered by delegators that the Staker will accept."),(0,s.kt)("li",{parentName:"ul"},"Minimum UTXO size \u2013 this sets the minimum-sized UTXO that will be evaluated for Proof of Stake consensus by the Staker. Over time, the delegated address should accumulate many small block reward UTXOs and it is inefficient to manage all these small amounts (which should be recombined by the delegator). "),(0,s.kt)("li",{parentName:"ul"},"Delegation list type:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Accept all \u2013 accept any delegation with the minimum fee or more."),(0,s.kt)("li",{parentName:"ul"},"Allow list \u2013 only accept delegations from specific addresses. Use this mode if operating a Super Staker only for specific addresses, such as for your coins."),(0,s.kt)("li",{parentName:"ul"},"Exclude list \u2013 addresses to exclude from being accepted for staking.")))),(0,s.kt)("p",null,"Next, split the UTXOs to valid amounts for committing stakes by the Super Staker. The UTXOs must be a minimum amount of 100 SBIT. On the Super staker page select the split coins button (trident icon) and use the default values or make adjustments, but no UTXOs under 100 SBIT will be used for staking."),(0,s.kt)("p",null,"You can also split UTXOs with the ",(0,s.kt)("inlineCode",{parentName:"p"},"splitutxosforaddress")," command, which can be used for delegated addresses as well. To split the UTXOs between a minimum and maximum value, enter the command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'splitutxosforaddress "address" minValue maxValue ( maxOutputs )\n')),(0,s.kt)("p",null,"For example, if a wallet held UTXOs of 40, 50, 60, 70, and 800 SBIT, to split these into UTXOs of a minimum 100 and maximum 200 would use the command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'splitutxosforaddress "Sshm128r4cTuDFSRehLESydnkburYLj9cY" 100 200\n\n{\n  "txid": "197a199c3ac9dd8df574ca77da15c5da31db3f7101e2108638a3b2f94248b9f7",\n  "selected": "1020.00",\n  "splited": "1020.00"\n}\n')),(0,s.kt)("p",null,'For this example, the total input was 1,020 SBIT, and the split was 9 UTXOs of 100.0 and one of 119.99566, the wallet sending a "transaction to self" and paying a fee of 0.00434 SBIT.'),(0,s.kt)("p",null,'Larger wallets may need to adjust the "Maximum outputs" number for splitting. In the example above with the "Maximum outputs" field set to the default value of 100, the split operation will split giving 100 SBIT (minimum size) x 100 (Maximum outputs) = 10,000 of UTXO value. For addresses holding more value the "Maximum output" field could be set higher, to 500, or 1000. With the "Maximum outputs" field set to 1000 it can split up to 100,000 in UTXO value. Even bigger addresses could just repeat this split command set for 1000 Maximum outputs until the Split operation reports back that it has selected and split 0 coins.'),(0,s.kt)("p",null,"Previously you could use the ",(0,s.kt)("inlineCode",{parentName:"p"},"sendmanywithdupes")," command but that took significant formatting and operationally you would want to send to a new address. Of course, after either of these commands, the UTXOs must mature for 2000 confirmations before they can be used for staking."),(0,s.kt)("h2",{id:"launching-sbit-core-as-a-super-staker"},"Launching Sbit Core as a Super Staker"),(0,s.kt)("p",null,"The above steps show the transition from a default installation Sbit Core wallet to a Super Staker. The wallet may also be initially launched as a Super Staker to shorten the steps. In this case, the initial blockchain sync is accompanied by building the database for address index and log events (as discussed above) so the wallet is all ready for Super Staking."),(0,s.kt)("p",null,"The Sbit Core wallet may be launched as a Super Staker with Sbit-Qt using Settings - Options \u2013 Main \u2013 Enable super staking steps as shown above, or directly through the command line using the ",(0,s.kt)("inlineCode",{parentName:"p"},"-superstaking=true")," parameter (testnet shown here)."),(0,s.kt)("p",null,"This command for the default program directory on Windows would be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sbit-qt -superstaking=true\n")),(0,s.kt)("p",null,'When the wallet launches and syncs the blockchain (creating address index and log events) it is all ready to add Super Stakers. Configure a Super Staker and then enable super staking on Settings \u2013 Options \u2013 Main \u2013 set "Enable super staking" and the Super Staker will be ready.'),(0,s.kt)("h2",{id:"super-staker-operations"},"Super Staker Operations"),(0,s.kt)("p",null,"The Super Staker must hold UTXOs to commit to stakes for the delegated UTXOs it is staking. The number of UTXOs (of minimum size 100 SBIT) is based on Delegated Weight as a percent of overall Network Weight, and good values are 30 UTXOs for staking 1% of Network Weight, 50 UTXOs for 2.0%, 100 UTXOs for 5% and 160 UTXOs for staking 10% of overall Network Weight. "),(0,s.kt)("p",null,"Super Stakers should monitor their Wallet weight (UTXO weight minus amount currently staking) and add UTXOs if it drops below several thousand."),(0,s.kt)("p",null,"Make a backup of the wallet (save the wallet.dat file) after changes in the offline staking configuration such as adding a Super Staker or adding a delegation, because the offline staking configuration is saved in the wallet.dat file. If the backup wallet.dat file is lost the configuration may also be restored with Recovery."),(0,s.kt)("p",null,'Delegations to a Super Staker may be checked using the "Delegations\u2026" button on the Super Staker page or with the ',(0,s.kt)("inlineCode",{parentName:"p"},"getdelegationsforstaker")," command."),(0,s.kt)("h2",{id:"restore"},"Restore"),(0,s.kt)("p",null,'Normally delegation and Super Staker configuration are stored in the wallet.dat file. If there are problems with the wallet.dat file the delegation information and super staker information may be recovered using the Restore button on the delegation and Super Staker pages. In this case, the wallet will rescan the "state" contract memory for offline staking transactions for the appropriate addresses.'))}h.isMDXComponent=!0}}]);