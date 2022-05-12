"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[1064],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3516:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={title:"Solar",description:"Smart Contract deployment tool",keywords:["sbit","lib","js","tools"]},c=void 0,s={unversionedId:"Tools/solar",id:"Tools/solar",title:"Solar",description:"Smart Contract deployment tool",source:"@site/docs/Tools/solar.md",sourceDirName:"Tools",slug:"/Tools/solar",permalink:"/sbit.dev/docs/Tools/solar",draft:!1,tags:[],version:"current",frontMatter:{title:"Solar",description:"Smart Contract deployment tool",keywords:["sbit","lib","js","tools"]},sidebar:"tutorialSidebar",previous:{title:"Sbitjs lib",permalink:"/sbit.dev/docs/Tools/sbitjs-lib"},next:{title:"Code of Conduct",permalink:"/sbit.dev/docs/Help/CODE_OF_CONDUCT"}},p={},d=[{value:"Install",id:"install",level:2},{value:"SBIT",id:"sbit",level:2},{value:"SBIT Docker",id:"sbit-docker",level:2},{value:"Deploy Contract",id:"deploy-contract",level:2},{value:"Naming A Contract",id:"naming-a-contract",level:2},{value:"Deploy A Library",id:"deploy-a-library",level:2},{value:"deploy",id:"deploy",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go get -u github.com/SBit-Project/solar/cli/solar\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"solar")," assumes that the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/solidity"},"Solidity compiler")," is already installed."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Put solc binary in go/bin"))),(0,r.kt)("h2",{id:"sbit"},"SBIT"),(0,r.kt)("p",null,"Start sbitd in regtest mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sbitd -regtest -rpcuser=user -rpcpassword=pass\n")),(0,r.kt)("p",null,"Use env variable to specify the local sbitd RPC node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export SBIT_RPC=http://user:pass@localhost:22302\n")),(0,r.kt)("h2",{id:"sbit-docker"},"SBIT Docker"),(0,r.kt)("p",null,"You can run sbitd with docker, which comes bundled with solar (and ",(0,r.kt)("inlineCode",{parentName:"p"},"solc"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm \\\n  --name myapp \\\n  -v `pwd`:/dapp \\\n  -p 22002:22002 \\\n  sbitproject/sbitportal\n")),(0,r.kt)("p",null,"Then you enter into the container by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it myapp sh\n")),(0,r.kt)("h2",{id:"deploy-contract"},"Deploy Contract"),(0,r.kt)("p",null,"Suppose we have the following contract in ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts/A.sol"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pragma solidity ^0.4.11;\n\ncontract A {\n  uint256 a;\n\n  constructor(uint256 _a) public {\n    a = _a;\n  }\n}\n")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," command to create the contract. The constructor parameters may be passed in as a JSON array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ solar deploy contracts/A.sol '[100]'\n\ud83d\ude80  All contracts confirmed\ndeployed contracts/A.sol => 2672931f2f07b67383a4aec80fb6504727145e8c\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"On a real network it would take longer to deploy. For development locally it is instantenous.")))),(0,r.kt)("p",null,"You should see the address and ABI saved in a JSON file named ",(0,r.kt)("inlineCode",{parentName:"p"},"solar.development.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contracts": {\n    "contracts/A.sol": {\n      "source": "contracts/A.sol:A",\n      "abi": [\n        {\n          "name": "",\n          "type": "constructor",\n          "payable": false,\n          "inputs": [\n            {\n              "name": "_a",\n              "type": "uint256",\n              "indexed": false\n            }\n          ],\n          "outputs": null,\n          "constant": false,\n          "anonymous": false\n        }\n      ],\n      "bin": "60606040523415600e57600080fd5b604051602080606783398101604052808051600055505060358060326000396000f3006060604052600080fd00a165627a7a72305820cd047550e6b1a360fc0f2de526c2f6f0150d249efca0b5820d6050c935e129370029",\n      "binhash": "861924fb216a600b22bc38d51d26b708bbd2d189a3433f0ec4862da6a3d78b9a",\n      "name": "A",\n      "deployName": "contracts/A.sol",\n      "address": "2672931f2f07b67383a4aec80fb6504727145e8c",\n      "txid": "dc36ebb365033f557367c88e4bad2f4c726a609e8a4cc0d5751ff4cab9187a51",\n      "createdAt": "2018-01-26T11:36:09.650368039+08:00",\n      "confirmed": true,\n      "sender": "sYqieW18XiFU1sYCrHFsiBpvxQVXpcwC3R",\n      "senderHex": "a7a0cff24ecf5089a5b5a814b9a6be942ade51c5"\n    }\n  },\n  "libraries": {},\n  "related": {}\n}\n')),(0,r.kt)("p",null,"The contract's deploy name defaults to the contract's file name. You can't deploy using the same name twice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ solar deploy contracts/A.sol\n\u2757\ufe0f  deploy contract name already used: contracts/A.sol\n")),(0,r.kt)("p",null,"Add the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--force")," to redeploy a contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ solar deploy contracts/A.sol '[200]' --force\n\ud83d\ude80  All contracts confirmed\n   deployed contracts/A.sol => 3b566019c5e69e3c33c4609b51597b4b83b00e74\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"solar.development.json")," you should see that the address had changed."),(0,r.kt)("h2",{id:"naming-a-contract"},"Naming A Contract"),(0,r.kt)("p",null,"By default the file name is used as the deploy name. We can change the deploy name to ",(0,r.kt)("inlineCode",{parentName:"p"},"Ace")," by appending it after the file name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ solar deploy contracts/A.sol:Ace '[300]'\n\ud83d\ude80  All contracts confirmed\n   deployed Ace => 38dfbad58cb340815e649242fc7514fe1fa54e7d\n")),(0,r.kt)("p",null,"The deploy name must be unique. Deploy should fail if the a name is used twice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ solar deploy contracts/A.sol:Ace '[300]'\n\u2757\ufe0f  deploy contract name already used: Ace\n")),(0,r.kt)("h2",{id:"deploy-a-library"},"Deploy A Library"),(0,r.kt)("p",null,"Sometimes your contract may depend on a library, which requires linking when deploying. The most frequently used library is maybe ",(0,r.kt)("inlineCode",{parentName:"p"},"SafeMath.lib"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"solar deploy contracts/SafeMathLib.sol --lib\n\n\ud83d\ude80  All contracts confirmed\n   deployed contracts/SafeMathLib.sol => 26fe40c433b4d109299660284eaa475b95462342\n")),(0,r.kt)("p",null,"Then deploying other contracts that reference ",(0,r.kt)("inlineCode",{parentName:"p"},"SafeMathLib")," will automatically link to this deployed instance."),(0,r.kt)("h2",{id:"deploy"},"deploy"),(0,r.kt)("p",null,"Help message for ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'solar help deploy\n\nusage: solar deploy [<flags>] <target> [<jsonParams>]\n\nCompile Solidity contracts.\n\nFlags:\n  --help                     Show context-sensitive help (also try --help-long and --help-man).\n  --sbit_rpc=SBIT_RPC        RPC provider url\n  --sbit_sender=SBIT_SENDER  (sbit) Sender UTXO Address\n  --eth_rpc=ETH_RPC          RPC provider url\n  --env="development"        Environment name\n  --repo=REPO                Path of contracts repository\n  --optimize                 [solc] should Enable bytecode optimizer\n  --allow-paths=""           [solc] Allow a given path for imports. A list of paths can be supplied by separating them with a comma.\n  --force                    Overwrite previously deployed contract with the same deploy name\n  --lib                      Deploy the contract as a library\n  --no-confirm               Don\'t wait for network to confirm deploy\n  --no-fast-confirm          (dev) Don\'t generate block to confirm deploy immediately\n  --gasLimit=3000000         gas limit for creating a contract\n\nArgs:\n  <target>        Solidity contracts to deploy.\n  [<jsonParams>]  Constructor params as a json array\n')))}u.isMDXComponent=!0}}]);