"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[4133],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Reduce Traffic",description:"There are a few parameters that can be dialed down to reduce the memory usage of `sbitd`.",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:6},s=void 0,c={unversionedId:"SBit-Core/Miscellaneous/reduce-traffic",id:"SBit-Core/Miscellaneous/reduce-traffic",title:"Reduce Traffic",description:"There are a few parameters that can be dialed down to reduce the memory usage of `sbitd`.",source:"@site/docs/SBit-Core/Miscellaneous/reduce-traffic.md",sourceDirName:"SBit-Core/Miscellaneous",slug:"/SBit-Core/Miscellaneous/reduce-traffic",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/reduce-traffic",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Reduce Traffic",description:"There are a few parameters that can be dialed down to reduce the memory usage of `sbitd`.",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Reduce Memory",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/reduce-memory"},next:{title:"Sbit Configuration File",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/sbit-conf"}},u={},d=[{value:"1. Use <code>-maxuploadtarget=&lt;MiB per day&gt;</code>",id:"1-use--maxuploadtargetmib-per-day",level:2},{value:"2. Disable &quot;listening&quot; (<code>-listen=0</code>)",id:"2-disable-listening--listen0",level:2},{value:"3. Reduce maximum connections (<code>-maxconnections=&lt;num&gt;</code>)",id:"3-reduce-maximum-connections--maxconnectionsnum",level:2},{value:"4. Turn off transaction relay (<code>-blocksonly</code>)",id:"4-turn-off-transaction-relay--blocksonly",level:2}],f={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some node operators need to deal with bandwidth caps imposed by their ISPs."),(0,i.kt)("p",null,"By default, Sbit Core allows up to 125 connections to different peers, 10 of\nwhich are outbound. You can therefore, have at most 115 inbound connections.\nOf the 10 outbound peers, there can be 8 full-relay connections and 2\nblock-relay-only ones."),(0,i.kt)("p",null,"The default settings can result in relatively significant traffic consumption."),(0,i.kt)("p",null,"Ways to reduce traffic:"),(0,i.kt)("h2",{id:"1-use--maxuploadtargetmib-per-day"},"1. Use ",(0,i.kt)("inlineCode",{parentName:"h2"},"-maxuploadtarget=<MiB per day>")),(0,i.kt)("p",null,"A major component of the traffic is caused by serving historic blocks to other nodes\nduring the initial blocks download phase (syncing up a new node).\nThis option can be specified in MiB per day and is turned off by default.\nThis is ",(0,i.kt)("em",{parentName:"p"},"not")," a hard limit; only a threshold to minimize the outbound\ntraffic. When the limit is about to be reached, the uploaded data is cut by no\nlonger serving historic blocks (blocks older than one week).\nKeep in mind that new nodes require other nodes that are willing to serve\nhistoric blocks."),(0,i.kt)("p",null,"Peers with the ",(0,i.kt)("inlineCode",{parentName:"p"},"download")," permission will never be disconnected, although their traffic counts for\ncalculating the target."),(0,i.kt)("h2",{id:"2-disable-listening--listen0"},'2. Disable "listening" (',(0,i.kt)("inlineCode",{parentName:"h2"},"-listen=0"),")"),(0,i.kt)("p",null,"Disabling listening will result in fewer nodes connected (remember the maximum of 10\noutbound peers). Fewer nodes will result in less traffic usage as you are relaying\nblocks and transactions to fewer nodes."),(0,i.kt)("h2",{id:"3-reduce-maximum-connections--maxconnectionsnum"},"3. Reduce maximum connections (",(0,i.kt)("inlineCode",{parentName:"h2"},"-maxconnections=<num>"),")"),(0,i.kt)("p",null,"Reducing the maximum connected nodes to a minimum could be desirable if traffic\nlimits are tiny. Keep in mind that bitcoin's trustless model works best if you are\nconnected to a handful of nodes."),(0,i.kt)("h2",{id:"4-turn-off-transaction-relay--blocksonly"},"4. Turn off transaction relay (",(0,i.kt)("inlineCode",{parentName:"h2"},"-blocksonly"),")"),(0,i.kt)("p",null,"Forwarding transactions to peers increases the P2P traffic. To only sync blocks\nwith other peers, you can disable transaction relay."),(0,i.kt)("p",null,"Be reminded of the effects of this setting."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fee estimation will no longer work."),(0,i.kt)("li",{parentName:"ul"},'It sets the flag "-walletbroadcast" to be "0", only if it is currently unset.\nDoing so disables the automatic broadcasting of transactions from wallet. Not\nrelaying other\'s transactions could hurt your privacy if used while a wallet\nis loaded or if you use the node to broadcast transactions.'),(0,i.kt)("li",{parentName:"ul"},"If a peer has the forcerelay permission, we will still receive and relay\ntheir transactions."),(0,i.kt)("li",{parentName:"ul"},"It makes block propagation slower because compact block relay can only be\nused when transaction relay is enabled.")))}p.isMDXComponent=!0}}]);