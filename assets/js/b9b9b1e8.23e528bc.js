"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[6854],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7496:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={title:"Sbit Configuration File",description:"The configuration file is used by sbitd, sbit-qt and sbit-cli.",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:7},p=void 0,s={unversionedId:"SBit-Core/Miscellaneous/sbit-conf",id:"SBit-Core/Miscellaneous/sbit-conf",title:"Sbit Configuration File",description:"The configuration file is used by sbitd, sbit-qt and sbit-cli.",source:"@site/docs/SBit-Core/Miscellaneous/sbit-conf.md",sourceDirName:"SBit-Core/Miscellaneous",slug:"/SBit-Core/Miscellaneous/sbit-conf",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/sbit-conf",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Sbit Configuration File",description:"The configuration file is used by sbitd, sbit-qt and sbit-cli.",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Reduce Traffic",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/reduce-traffic"},next:{title:"Tor",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/tor"}},c={},u=[{value:"Configuration File Format",id:"configuration-file-format",level:2},{value:"Blank lines",id:"blank-lines",level:3},{value:"Comments",id:"comments",level:3},{value:"Network specific options",id:"network-specific-options",level:3},{value:"Configuration File Path",id:"configuration-file-path",level:2},{value:"Default configuration file locations",id:"default-configuration-file-locations",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The configuration file is used by ",(0,o.kt)("inlineCode",{parentName:"p"},"sbitd"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sbit-qt")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sbit-cli"),"."),(0,o.kt)("p",null,"All command-line options (except for ",(0,o.kt)("inlineCode",{parentName:"p"},"-?"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-help"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-version")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-conf"),") may be specified in a configuration file, and all configuration file options (except for ",(0,o.kt)("inlineCode",{parentName:"p"},"includeconf"),") may also be specified on the command line. Command-line options override values set in the configuration file and configuration file options override values set in the GUI."),(0,o.kt)("h2",{id:"configuration-file-format"},"Configuration File Format"),(0,o.kt)("p",null,"The configuration file is a plain text file and consists of ",(0,o.kt)("inlineCode",{parentName:"p"},"option=value")," entries, one per line. Leading and trailing whitespaces are removed."),(0,o.kt)("p",null,"In contrast to the command-line usage:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an option must be specified without leading ",(0,o.kt)("inlineCode",{parentName:"li"},"-"),";"),(0,o.kt)("li",{parentName:"ul"},"a value of the given option is mandatory; e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"testnet=1")," (for chain selection options), ",(0,o.kt)("inlineCode",{parentName:"li"},"noconnect=1")," (for negated options).")),(0,o.kt)("h3",{id:"blank-lines"},"Blank lines"),(0,o.kt)("p",null,"Blank lines are allowed and ignored by the parser."),(0,o.kt)("h3",{id:"comments"},"Comments"),(0,o.kt)("p",null,"A comment starts with a number sign (",(0,o.kt)("inlineCode",{parentName:"p"},"#"),") and extends to the end of the line. All comments are ignored by the parser."),(0,o.kt)("p",null,"Comments may appear in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on their own on an otherwise empty line (",(0,o.kt)("em",{parentName:"li"},"preferable"),");"),(0,o.kt)("li",{parentName:"ul"},"after an ",(0,o.kt)("inlineCode",{parentName:"li"},"option=value")," entry.")),(0,o.kt)("h3",{id:"network-specific-options"},"Network specific options"),(0,o.kt)("p",null,"Network specific options can be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"placed into sections with headers ",(0,o.kt)("inlineCode",{parentName:"li"},"[main]")," (not ",(0,o.kt)("inlineCode",{parentName:"li"},"[mainnet]"),"), ",(0,o.kt)("inlineCode",{parentName:"li"},"[test]")," (not ",(0,o.kt)("inlineCode",{parentName:"li"},"[testnet]"),"), ",(0,o.kt)("inlineCode",{parentName:"li"},"[signet]")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"[regtest]"),";"),(0,o.kt)("li",{parentName:"ul"},"prefixed with a chain name; e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"regtest.maxmempool=100"),".")),(0,o.kt)("p",null,"Network specific options take precedence over non-network specific options.\nIf multiple values for the same option are found with the same precedence, the\nfirst one is generally chosen."),(0,o.kt)("p",null,"This means that given the following configuration, ",(0,o.kt)("inlineCode",{parentName:"p"},"regtest.rpcport")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"3000"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"regtest=1\nrpcport=2000\nregtest.rpcport=3000\n\n[regtest]\nrpcport=4000\n")),(0,o.kt)("h2",{id:"configuration-file-path"},"Configuration File Path"),(0,o.kt)("p",null,"The configuration file is not automatically created; you can create it using your favorite text editor. By default, the configuration file name is ",(0,o.kt)("inlineCode",{parentName:"p"},"sbit.conf")," and it is located in the Sbit data directory, but both the Sbit data directory and the configuration file path may be changed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-datadir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-conf")," command-line options."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"includeconf=<file>")," option in the ",(0,o.kt)("inlineCode",{parentName:"p"},"sbit.conf")," file can be used to include additional configuration files."),(0,o.kt)("h3",{id:"default-configuration-file-locations"},"Default configuration file locations"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Directory"),(0,o.kt)("th",{parentName:"tr",align:null},"Example Path"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Windows"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%APPDATA%\\Sbit\\")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"C:\\Users\\username\\AppData\\Roaming\\Sbit\\sbit.conf"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Linux"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"$HOME/.sbit/")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/home/username/.sbit/sbit.conf"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"macOS"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"$HOME/Library/Application Support/Sbit/")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/Users/username/Library/Application Support/Sbit/sbit.conf"))))),(0,o.kt)("p",null,"You can find an example sbit.conf file in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SBit-Project/sbit/share/examples/sbit.conf"},"share/examples/sbit.conf"),"."))}f.isMDXComponent=!0}}]);