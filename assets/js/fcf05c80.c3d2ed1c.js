"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[4169],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,b=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],o={title:"UNIX Build guide",description:"Some notes on how to build Sbit Core in Unix.",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:4},d=void 0,s={unversionedId:"SBit-Core/Building/build-unix",id:"SBit-Core/Building/build-unix",title:"UNIX Build guide",description:"Some notes on how to build Sbit Core in Unix.",source:"@site/docs/SBit-Core/Building/build-unix.md",sourceDirName:"SBit-Core/Building",slug:"/SBit-Core/Building/build-unix",permalink:"/sbit.dev/docs/SBit-Core/Building/build-unix",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"UNIX Build guide",description:"Some notes on how to build Sbit Core in Unix.",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OpenBSD Build guide",permalink:"/sbit.dev/docs/SBit-Core/Building/build-openbsd"},next:{title:"macOS Build guide",permalink:"/sbit.dev/docs/SBit-Core/Building/build-osx"}},u={},p=[{value:"To Build",id:"to-build",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Memory Requirements",id:"memory-requirements",level:2},{value:"Linux Distribution Specific Instructions",id:"linux-distribution-specific-instructions",level:2},{value:"Ubuntu &amp; Debian",id:"ubuntu--debian",level:3},{value:"Dependency Build Instructions",id:"dependency-build-instructions",level:4},{value:"Fedora",id:"fedora",level:3},{value:"Dependency Build Instructions",id:"dependency-build-instructions-1",level:4},{value:"Dependency Build Instructions: CentOS",id:"dependency-build-instructions-centos",level:2},{value:"miniupnpc",id:"miniupnpc",level:2},{value:"Berkeley DB",id:"berkeley-db",level:2},{value:"Boost",id:"boost",level:2},{value:"Security",id:"security",level:2},{value:"Disable-wallet mode",id:"disable-wallet-mode",level:2},{value:"Additional Configure Flags",id:"additional-configure-flags",level:2},{value:"Setup and Build Example: Arch Linux",id:"setup-and-build-example-arch-linux",level:2},{value:"ARM Cross-compilation",id:"arm-cross-compilation",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some notes on how to build Sbit Core in Unix."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For BSD specific instructions, see ",(0,i.kt)("inlineCode",{parentName:"p"},"build-*bsd.md")," in this directory"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always use absolute paths to configure and compile Sbit Core and the dependencies.\nFor example, when specifying the path of the dependency:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    ../dist/configure --enable-cxx --disable-shared --with-pic --prefix=$BDB_PREFIX\n")),(0,i.kt)("p",{parentName:"div"},"Here BDB_PREFIX must be an absolute path - it is defined using $(pwd) which ensures\nthe usage of the absolute path."))),(0,i.kt)("h2",{id:"to-build"},"To Build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./autogen.sh\n./configure\nmake\nmake install # optional\n")),(0,i.kt)("p",null,"This will build sbit-qt as well, if the dependencies are met."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"These dependencies are required:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Library"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libboost"),(0,i.kt)("td",{parentName:"tr",align:null},"Utility"),(0,i.kt)("td",{parentName:"tr",align:null},"Library for threading, data structures, etc")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libevent"),(0,i.kt)("td",{parentName:"tr",align:null},"Networking"),(0,i.kt)("td",{parentName:"tr",align:null},"OS independent asynchronous networking")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libgmp"),(0,i.kt)("td",{parentName:"tr",align:null},"Math"),(0,i.kt)("td",{parentName:"tr",align:null},"The GNU Multiple Precision Arithmetic Library")))),(0,i.kt)("p",null,"Optional dependencies:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Library"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"miniupnpc"),(0,i.kt)("td",{parentName:"tr",align:null},"UPnP Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Firewall-jumping support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libdb4.8"),(0,i.kt)("td",{parentName:"tr",align:null},"Berkeley DB"),(0,i.kt)("td",{parentName:"tr",align:null},"Wallet storage (only needed when wallet enabled)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"qt"),(0,i.kt)("td",{parentName:"tr",align:null},"GUI"),(0,i.kt)("td",{parentName:"tr",align:null},"GUI toolkit (only needed when GUI enabled)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libqrencode"),(0,i.kt)("td",{parentName:"tr",align:null},"QR codes in GUI"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional for generating QR codes (only needed when GUI enabled)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"univalue"),(0,i.kt)("td",{parentName:"tr",align:null},"Utility"),(0,i.kt)("td",{parentName:"tr",align:null},"JSON parsing and encoding (bundled version will be used unless --with-system-univalue passed to configure)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"libzmq3"),(0,i.kt)("td",{parentName:"tr",align:null},"ZMQ notification"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, allows generating ZMQ notifications (requires ZMQ version >= 4.0.0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sqlite3"),(0,i.kt)("td",{parentName:"tr",align:null},"SQLite DB"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, wallet storage (only needed when wallet enabled)")))),(0,i.kt)("p",null,"For the versions used, see ",(0,i.kt)("a",{parentName:"p",href:"dependencies"},"Dependencies")),(0,i.kt)("h2",{id:"memory-requirements"},"Memory Requirements"),(0,i.kt)("p",null,"C++ compilers are memory-hungry. It is recommended to have at least 1.5 GB of\nmemory available when compiling Sbit Core. On systems with less, gcc can be\ntuned to conserve memory with additional CXXFLAGS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./configure CXXFLAGS="--param ggc-min-expand=1 --param ggc-min-heapsize=32768"\n')),(0,i.kt)("p",null,"Alternatively, or in addition, debugging information can be skipped for compilation. The default compile flags are\n",(0,i.kt)("inlineCode",{parentName:"p"},"-g -O2"),", and can be changed with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./configure CXXFLAGS="-O2"\n')),(0,i.kt)("p",null,"Finally, clang (often less resource hungry) can be used instead of gcc, which is used by default:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./configure CXX=clang++ CC=clang\n")),(0,i.kt)("h2",{id:"linux-distribution-specific-instructions"},"Linux Distribution Specific Instructions"),(0,i.kt)("h3",{id:"ubuntu--debian"},"Ubuntu & Debian"),(0,i.kt)("h4",{id:"dependency-build-instructions"},"Dependency Build Instructions"),(0,i.kt)("p",null,"Build requirements"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install build-essential libtool autotools-dev automake pkg-config bsdmainutils python3 libgmp3-dev\n")),(0,i.kt)("p",null,"Now, you can either build from self-compiled ",(0,i.kt)("a",{parentName:"p",href:"depend"},"Depends")," or install the required dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libevent-dev libboost-system-dev libboost-filesystem-dev libboost-test-dev libboost-thread-dev\n")),(0,i.kt)("p",null,"BerkeleyDB is required for the wallet."),(0,i.kt)("p",null,"Ubuntu and Debian have their own ",(0,i.kt)("inlineCode",{parentName:"p"},"libdb-dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"libdb++-dev")," packages, but these will install\nBerkeleyDB 5.1 or later. This will break binary wallet compatibility with the distributed executables, which\nare based on BerkeleyDB 4.8. If you do not care about wallet compatibility,\npass ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-incompatible-bdb")," to configure."),(0,i.kt)("p",null,"Otherwise, you can build from self-compiled ",(0,i.kt)("inlineCode",{parentName:"p"},"depends")," (see above)."),(0,i.kt)("p",null,"SQLite is required for the wallet"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install libsqlite3-dev\n")),(0,i.kt)("p",null,"To build Sbit Core without wallet, see ",(0,i.kt)("a",{parentName:"p",href:"#disable-wallet-mode"},(0,i.kt)("em",{parentName:"a"},"Disable-wallet mode"))),(0,i.kt)("p",null,"Optional (see ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-miniupnpc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-upnp-default"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libminiupnpc-dev\n")),(0,i.kt)("p",null,"ZMQ dependencies (provides ZMQ API):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libzmq3-dev\n")),(0,i.kt)("p",null,"GUI dependencies"),(0,i.kt)("p",null,"If you want to build sbit-qt, make sure that the required packages for Qt development\nare installed. Qt 5 is necessary to build the GUI.\nTo build without GUI pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--without-gui"),"."),(0,i.kt)("p",null,"To build with Qt 5 you need the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libqt5gui5 libqt5core5a libqt5dbus5 qttools5-dev qttools5-dev-tools\n")),(0,i.kt)("p",null,"libqrencode (optional) can be installed with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libqrencode-dev\n")),(0,i.kt)("p",null,"Once these are installed, they will be found by configure and a sbit-qt executable will be\nbuilt by default."),(0,i.kt)("h3",{id:"fedora"},"Fedora"),(0,i.kt)("h4",{id:"dependency-build-instructions-1"},"Dependency Build Instructions"),(0,i.kt)("p",null,"Build requirements"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install gcc-c++ libtool make autoconf automake libevent-devel boost-devel libdb4-devel libdb4-cxx-devel python3 gmp-devel\n")),(0,i.kt)("p",null,"Optional (see ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-miniupnpc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-upnp-default"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install miniupnpc-devel\n")),(0,i.kt)("p",null,"ZMQ dependencies (provides ZMQ API)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install zeromq-devel\n")),(0,i.kt)("p",null,"To build with Qt 5 you need the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install qt5-qttools-devel qt5-qtbase-devel\n")),(0,i.kt)("p",null,"libqrencode (optional) can be installed with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install qrencode-devel\n")),(0,i.kt)("p",null,"SQLite can be installed with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install sqlite-devel\n")),(0,i.kt)("h2",{id:"dependency-build-instructions-centos"},"Dependency Build Instructions: CentOS"),(0,i.kt)("p",null,"You need to build boost manually, and if it's not in standard library paths, you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"/path/to/boost/lib")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH")," env when building Sbit."),(0,i.kt)("p",null,"Build requirements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install epel-release\nsudo yum install gcc-c++ libtool libdb4-cxx-devel openssl-devel libevent-devel gmp-devel\n")),(0,i.kt)("p",null,"To build with Qt 5 (recommended) you need the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install qt5-qttools-devel protobuf-devel qrencode-devel\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'The release is built with GCC and then "strip sbitd" to strip the debug\nsymbols, which reduces the executable size by about 90%.'))),(0,i.kt)("h2",{id:"miniupnpc"},"miniupnpc"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://miniupnp.tuxfamily.org"},"miniupnpc")," may be used for UPnP port mapping. It can be downloaded from ",(0,i.kt)("a",{parentName:"p",href:"https://miniupnp.tuxfamily.org/files/"},"here"),". UPnP support is compiled in and turned off by default.  See the configure options for upnp behavior desired:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    --without-miniupnpc      No UPnP support miniupnp not required\n    --disable-upnp-default   (the default) UPnP support turned off by default at runtime\n    --enable-upnp-default    UPnP support turned on by default at runtime\n")),(0,i.kt)("h2",{id:"berkeley-db"},"Berkeley DB"),(0,i.kt)("p",null,"It is recommended to use Berkeley DB 4.8. If you have to build it yourself,\nyou can use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SBit-Project/sbit/contrib/install_db4.sh"},"the installation script included in contrib/"),"\nlike so"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./contrib/install_db4.sh `pwd`\n")),(0,i.kt)("p",null,"from the root of the repository."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You only need Berkeley DB if the wallet is enabled (see ",(0,i.kt)("a",{parentName:"p",href:"#disable-wallet-mode"},(0,i.kt)("em",{parentName:"a"},"Disable-wallet mode")),")."))),(0,i.kt)("h2",{id:"boost"},"Boost"),(0,i.kt)("p",null,"If you need to build Boost yourself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\n./bootstrap.sh\n./bjam install\n")),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("p",null,"To help make your Sbit Core installation more secure by making certain attacks impossible to\nexploit even if a vulnerability is found, binaries are hardened by default.\nThis can be disabled with:"),(0,i.kt)("p",null,"Hardening Flags:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    ./configure --enable-hardening\n    ./configure --disable-hardening\n")),(0,i.kt)("p",null,"Hardening enables the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Position Independent Executable: Build position independent code to take advantage of Address Space Layout Randomization\noffered by some kernels. Attackers who can cause execution of code at an arbitrary memory\nlocation are thwarted if they don't know where anything useful is located.\nThe stack and heap are randomly located by default, but this allows the code section to be\nrandomly located as well."),(0,i.kt)("p",{parentName:"li"},'  On an AMD64 processor where a library was not compiled with -fPIC, this will cause an error\nsuch as: "relocation R_X86_64_32 against `......\' can not be used when making a shared object;"'),(0,i.kt)("p",{parentName:"li"},"  To test that you have built PIE executable, install scanelf, part of paxutils, and use:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scanelf -e ./sbit\n")),(0,i.kt)("p",null,"The output should contain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," TYPE\nET_DYN\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Non-executable Stack"),": If the stack is executable then trivial stack-based buffer overflow exploits are possible if\nvulnerable buffers are found. By default, Sbit Core should be built with a non-executable stack,\nbut if one of the libraries it uses asks for an executable stack or someone makes a mistake\nand uses a compiler extension which requires an executable stack, it will silently build an\nexecutable without the non-executable stack protection."),(0,i.kt)("p",{parentName:"li"},"  To verify that the stack is non-executable after compiling use:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scanelf -e ./sbit\n")),(0,i.kt)("p",null,"The output should contain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"STK/REL/PTL\nRW- R-- RW-\n")),(0,i.kt)("p",null,"The STK RW- means that the stack is readable and writeable but not executable."),(0,i.kt)("h2",{id:"disable-wallet-mode"},"Disable-wallet mode"),(0,i.kt)("p",null,"When the intention is to run only a P2P node without a wallet, Sbit Core may be compiled in\ndisable-wallet mode with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./configure --disable-wallet\n")),(0,i.kt)("p",null,"In this case there is no dependency on Berkeley DB 4.8 and SQLite."),(0,i.kt)("p",null,"Mining is also possible in disable-wallet mode using the ",(0,i.kt)("inlineCode",{parentName:"p"},"getblocktemplate")," RPC call."),(0,i.kt)("h2",{id:"additional-configure-flags"},"Additional Configure Flags"),(0,i.kt)("p",null,"A list of additional configure flags can be displayed with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./configure --help\n")),(0,i.kt)("h2",{id:"setup-and-build-example-arch-linux"},"Setup and Build Example: Arch Linux"),(0,i.kt)("p",null,"This example lists the steps necessary to setup and build a command line only, non-wallet distribution of the latest changes on Arch Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    pacman -S git base-devel boost libevent python gmp\n    git clone https://github.com/SBit-Project/sbit --recursive\n    cd sbit/\n    ./autogen.sh\n    ./configure --disable-wallet --without-gui --without-miniupnpc\n    make check\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Enabling wallet support requires either compiling against a Berkeley DB newer than 4.8 (package ",(0,i.kt)("inlineCode",{parentName:"p"},"db"),") using ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-incompatible-bdb"),",\nor building and depending on a local version of Berkeley DB 4.8. The readily available Arch Linux packages are currently built using\n",(0,i.kt)("inlineCode",{parentName:"p"},"--with-incompatible-bdb")," according to the ",(0,i.kt)("a",{parentName:"p",href:"https://projects.archlinux.org/svntogit/community.git/tree/bitcoin/trunk/PKGBUILD"},"PKGBUILD"),".\nAs mentioned above, when maintaining portability of the wallet between the standard Sbit Core distributions and independently built\nnode software is desired, Berkeley DB 4.8 must be used."))),(0,i.kt)("h2",{id:"arm-cross-compilation"},"ARM Cross-compilation"),(0,i.kt)("p",null,"These steps can be performed on, for example, an Ubuntu VM. The depends system\nwill also work on other Linux distributions, however the commands for\ninstalling the toolchain will be different."),(0,i.kt)("p",null,"Make sure you install the build requirements mentioned above.\nThen, install the toolchain and curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install g++-arm-linux-gnueabihf curl\n")),(0,i.kt)("p",null,"To build executables for ARM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    cd depends\n    make HOST=arm-linux-gnueabihf NO_QT=1\n    cd ..\n    ./autogen.sh\n    ./configure --prefix=$PWD/depends/arm-linux-gnueabihf --enable-glibc-back-compat --enable-reduce-exports LDFLAGS=-static-libstdc++\n    make\n")),(0,i.kt)("p",null,"For further documentation on the depends system see ",(0,i.kt)("a",{parentName:"p",href:"depend"},"Depend"),"."))}m.isMDXComponent=!0}}]);