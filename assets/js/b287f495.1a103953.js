"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[2181],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"JSON-RPC Interface",description:"Sbit JSON-RPC Interface",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:4},l=void 0,c={unversionedId:"SBit-Core/Development/JSON-RPC-interface",id:"SBit-Core/Development/JSON-RPC-interface",title:"JSON-RPC Interface",description:"Sbit JSON-RPC Interface",source:"@site/docs/SBit-Core/Development/JSON-RPC-interface.md",sourceDirName:"SBit-Core/Development",slug:"/SBit-Core/Development/JSON-RPC-interface",permalink:"/sbit.dev/docs/SBit-Core/Development/JSON-RPC-interface",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"JSON-RPC Interface",description:"Sbit JSON-RPC Interface",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DNS Seed operators",permalink:"/sbit.dev/docs/SBit-Core/Development/dnsseed-policy"},next:{title:"Productivity Notes",permalink:"/sbit.dev/docs/SBit-Core/Development/productivity"}},u={},p=[{value:"Versioning",id:"versioning",level:2},{value:"Security",id:"security",level:2},{value:"RPC consistency guarantees",id:"rpc-consistency-guarantees",level:2},{value:"Transaction Pool",id:"transaction-pool",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Limitations",id:"limitations",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The headless daemon ",(0,a.kt)("inlineCode",{parentName:"p"},"sbitd")," has the JSON-RPC API enabled by default, the GUI\n",(0,a.kt)("inlineCode",{parentName:"p"},"sbit-qt")," has it disabled by default. This can be changed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-server"),"\noption. In the GUI it is possible to execute RPC methods in the Debug Console\nDialog."),(0,a.kt)("h2",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"The RPC interface might change from one major version of Sbit Core to the\nnext. This makes the RPC interface implicitly versioned on the major version.\nThe version tuple can be retrieved by e.g. the ",(0,a.kt)("inlineCode",{parentName:"p"},"getnetworkinfo")," RPC in\n",(0,a.kt)("inlineCode",{parentName:"p"},"version"),"."),(0,a.kt)("p",null,"Usually deprecated features can be re-enabled during the grace-period of one\nmajor version via the ",(0,a.kt)("inlineCode",{parentName:"p"},"-deprecatedrpc=")," command line option. The release notes\nof a new major release come with detailed instructions on what RPC features\nwere deprecated and how to re-enable them temporarily."),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,"The RPC interface allows other programs to control Sbit Core,\nincluding the ability to spend funds from your wallets, affect consensus\nverification, read private data, and otherwise perform operations that\ncan cause loss of money, data, or privacy.  This section suggests how\nyou should use and configure Sbit Core to reduce the risk that its\nRPC interface will be abused."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Securing the executable:")," Anyone with physical or remote access to\nthe computer, container, or virtual machine running Sbit Core can\ncompromise either the whole program or just the RPC interface.  This\nincludes being able to record any passphrases you enter for unlocking\nyour encrypted wallets or changing settings so that your Sbit Core\nprogram tells you that certain transactions have multiple\nconfirmations even when they aren't part of the best block chain.  For\nthis reason, you should not use Sbit Core for security sensitive\noperations on systems you do not exclusively control, such as shared\ncomputers or virtual private servers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Securing local network access:")," By default, the RPC interface can\nonly be accessed by a client running on the same computer and only\nafter the client provides a valid authentication credential (username\nand passphrase).  Any program on your computer with access to the file\nsystem and local network can obtain this level of access.\nAdditionally, other programs on your computer can attempt to provide\nan RPC interface on the same port as used by Sbit Core in order to\ntrick you into revealing your authentication credentials.  For this\nreason, it is important to only use Sbit Core for\nsecurity-sensitive operations on a computer whose other programs you\ntrust.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Securing remote network access:")," You may optionally allow other\ncomputers to remotely control Sbit Core by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcallowip"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcbind")," configuration parameters.  These settings are only meant\nfor enabling connections over secure private networks or connections\nthat have been otherwise secured (e.g. using a VPN or port forwarding\nwith SSH or stunnel).  ",(0,a.kt)("strong",{parentName:"p"},"Do not enable RPC connections over the public\nInternet."),"  Although Sbit Core's RPC interface does use\nauthentication, it does not use encryption, so your login credentials\nare sent as clear text that can be read by anyone on your network\npath.  Additionally, the RPC interface has not been hardened to\nwithstand arbitrary Internet traffic, so changing the above settings\nto expose it to the Internet (even using something like a Tor onion\nservice) could expose you to unconsidered vulnerabilities.  See\n",(0,a.kt)("inlineCode",{parentName:"p"},"sbitd -help")," for more information about these settings and other\nsettings described in this document."),(0,a.kt)("p",{parentName:"li"},"  Related, if you use Sbit Core inside a Docker container, you may\nneed to expose the RPC port to the host system.  The default way to\ndo this in Docker also exposes the port to the public Internet.\nInstead, expose it only on the host system's localhost, for example:\n",(0,a.kt)("inlineCode",{parentName:"p"},"-p 127.0.0.1:22002:22002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Secure authentication:")," By default, Sbit Core generates unique\nlogin credentials each time it restarts and puts them into a file\nreadable only by the user that started Sbit Core, allowing any of\nthat user's RPC clients with read access to the file to login\nautomatically.  The file is ",(0,a.kt)("inlineCode",{parentName:"p"},".cookie")," in the Sbit Core\nconfiguration directory, and using these credentials is the preferred\nRPC authentication method.  If you need to generate static login\ncredentials for your programs, you can use the script in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"share/rpcauth")," directory in the Sbit Core source tree.  As a final\nfallback, you can directly use manually-chosen ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcuser")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"rpcpassword")," configuration parameters---but you must ensure that you\nchoose a strong and unique passphrase (and still don't use insecure\nnetworks, as mentioned above).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Secure string handling:")," The RPC interface does not guarantee any\nescaping of data beyond what's necessary to encode it as JSON,\nalthough it does usually provide serialized data using a hex\nrepresentation of the bytes.  If you use RPC data in your programs or\nprovide its data to other programs, you must ensure any problem\nstrings are properly escaped.  For example, multiple websites have\nbeen manipulated because they displayed decoded hex strings that\nincluded HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," tags.  For this reason, and other\nnon-security reasons, it is recommended to display all serialized data\nin hex form only."))),(0,a.kt)("h2",{id:"rpc-consistency-guarantees"},"RPC consistency guarantees"),(0,a.kt)("p",null,"State that can be queried via RPCs is guaranteed to be at least up-to-date with\nthe chain state immediately prior to the call's execution. However, the state\nreturned by RPCs that reflect the mempool may not be up-to-date with the\ncurrent mempool state."),(0,a.kt)("h3",{id:"transaction-pool"},"Transaction Pool"),(0,a.kt)("p",null,"The mempool state returned via an RPC is consistent with itself and with the\nchain state at the time of the call. Thus, the mempool state only encompasses\ntransactions that are considered mine-able by the node at the time of the RPC."),(0,a.kt)("p",null,"The mempool state returned via an RPC reflects all effects of mempool and chain\nstate related RPCs that returned prior to this call."),(0,a.kt)("h3",{id:"wallet"},"Wallet"),(0,a.kt)("p",null,"The wallet state returned via an RPC is consistent with itself and with the\nchain state at the time of the call."),(0,a.kt)("p",null,"Wallet RPCs will return the latest chain state consistent with prior non-wallet\nRPCs. The effects of all blocks (and transactions in blocks) at the time of the\ncall is reflected in the state of all wallet transactions. For example, if a\nblock contains transactions that conflicted with mempool transactions, the\nwallet would reflect the removal of these mempool transactions in the state."),(0,a.kt)("p",null,"However, the wallet may not be up-to-date with the current state of the mempool\nor the state of the mempool by an RPC that returned before this RPC. For\nexample, a wallet transaction that was BIP-125-replaced in the mempool prior to\nthis RPC may not yet be reflected as such in this RPC response."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"There is a known issue in the JSON-RPC interface that can cause a node to crash if\ntoo many http connections are being opened at the same time because the system runs\nout of available file descriptors. To prevent this from happening you might\nwant to increase the number of maximum allowed file descriptors in your system\nand try to prevent opening too many connections to your JSON-RPC interface at the\nsame time if this is under your control. It is hard to give general advice\nsince this depends on your system but if you make several hundred requests at\nonce you are definitely at risk of encountering this issue."))}d.isMDXComponent=!0}}]);