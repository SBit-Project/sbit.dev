"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[6554],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return b}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={title:"Init",description:"Sample init scripts and service configuration for sbitd",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:3},l=void 0,c={unversionedId:"SBit-Core/Miscellaneous/init",id:"SBit-Core/Miscellaneous/init",title:"Init",description:"Sample init scripts and service configuration for sbitd",source:"@site/docs/SBit-Core/Miscellaneous/init.md",sourceDirName:"SBit-Core/Miscellaneous",slug:"/SBit-Core/Miscellaneous/init",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/init",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Init",description:"Sample init scripts and service configuration for sbitd",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Fuzzing",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/fuzzing"},next:{title:"PSBT",permalink:"/sbit.dev/docs/SBit-Core/Miscellaneous/psbt"}},d={},u=[{value:"Service User",id:"service-user",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Paths",id:"paths",level:2},{value:"Linux",id:"linux",level:3},{value:"macOS",id:"macos",level:3},{value:"Installing Service Configuration",id:"installing-service-configuration",level:2},{value:"systemd",id:"systemd",level:3},{value:"OpenRC",id:"openrc",level:3},{value:"Upstart (for Debian/Ubuntu based distributions)",id:"upstart-for-debianubuntu-based-distributions",level:3},{value:"CentOS",id:"centos",level:3},{value:"macOS",id:"macos-1",level:3},{value:"Auto-respawn",id:"auto-respawn",level:2}],p={toc:u};function b(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This document and init scripts need review and change"))),(0,r.kt)("p",null,"Sample scripts and configuration files for systemd, Upstart and OpenRC\ncan be found in the contrib/init folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"contrib/init/bitcoind.service:    systemd service unit configuration\ncontrib/init/bitcoind.openrc:     OpenRC compatible SysV style init script\ncontrib/init/bitcoind.openrcconf: OpenRC conf.d file\ncontrib/init/bitcoind.conf:       Upstart service configuration file\ncontrib/init/bitcoind.init:       CentOS compatible SysV style init script\n")),(0,r.kt)("h2",{id:"service-user"},"Service User"),(0,r.kt)("p",null,'All three Linux startup configurations assume the existence of a "bitcoin" user\nand group.  They must be created before attempting to use these scripts.\nThe macOS configuration assumes bitcoind will be set up for the current user.'),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Running bitcoind as a daemon does not require any manual configuration. You may\nset the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpcauth")," setting in the ",(0,r.kt)("inlineCode",{parentName:"p"},"bitcoin.conf")," configuration file to override\nthe default behaviour of using a special cookie for authentication."),(0,r.kt)("p",null,"This password does not have to be remembered or typed as it is mostly used\nas a fixed token that bitcoind and client programs read from the configuration\nfile, however it is recommended that a strong and secure password be used\nas this password is security critical to securing the wallet should the\nwallet be enabled."),(0,r.kt)("p",null,'If bitcoind is run with the "-server" flag (set by default), and no rpcpassword is set,\nit will use a special cookie file for authentication. The cookie is generated with random\ncontent when the daemon starts, and deleted when it exits. Read access to this file\ncontrols who can access it through RPC.'),(0,r.kt)("p",null,"By default the cookie is stored in the data directory, but it's location can be overridden\nwith the option '-rpccookiefile'."),(0,r.kt)("p",null,"This allows for running bitcoind without having to do any manual configuration."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"conf"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pid"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," accept relative paths which are interpreted as\nrelative to the data directory. ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," ",(0,r.kt)("em",{parentName:"p"},"only")," supports relative paths."),(0,r.kt)("p",null,"For an example configuration file that describes the configuration settings,\nsee ",(0,r.kt)("inlineCode",{parentName:"p"},"share/examples/bitcoin.conf"),"."),(0,r.kt)("h2",{id:"paths"},"Paths"),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"All three configurations assume several paths that might need to be adjusted."),(0,r.kt)("p",null,"Binary:              ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin/bitcoind"),"\nConfiguration file:  ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/bitcoin/bitcoin.conf"),"\nData directory:      ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/bitcoind"),"\nPID file:            ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/bitcoind/bitcoind.pid")," (OpenRC and Upstart) or ",(0,r.kt)("inlineCode",{parentName:"p"},"/run/bitcoind/bitcoind.pid")," (systemd)\nLock file:           ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lock/subsys/bitcoind")," (CentOS)"),(0,r.kt)("p",null,"The PID directory (if applicable) and data directory should both be owned by the\nbitcoin user and group. It is advised for security reasons to make the\nconfiguration file and data directory only readable by the Sbit user and\ngroup. Access to bitcoin-cli and other bitcoind rpc clients can then be\ncontrolled by group membership."),(0,r.kt)("p",null,"NOTE: When using the systemd .service file, the creation of the aforementioned\ndirectories and the setting of their permissions is automatically handled by\nsystemd. Directories are given a permission of 710, giving the Sbit group\naccess to files under it ",(0,r.kt)("em",{parentName:"p"},"if")," the files themselves give permission to the\nbitcoin group to do so (e.g. when ",(0,r.kt)("inlineCode",{parentName:"p"},"-sysperms")," is specified). This does not allow\nfor the listing of files under the directory."),(0,r.kt)("p",null,"NOTE: It is not currently possible to override ",(0,r.kt)("inlineCode",{parentName:"p"},"datadir")," in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/bitcoin/bitcoin.conf")," with the current systemd, OpenRC, and Upstart init\nfiles out-of-the-box. This is because the command line options specified in the\ninit files take precedence over the configurations in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/bitcoin/bitcoin.conf"),". However, some init systems have their own\nconfiguration mechanisms that would allow for overriding the command line\noptions specified in the init files (e.g. setting ",(0,r.kt)("inlineCode",{parentName:"p"},"BITCOIND_DATADIR")," for\nOpenRC)."),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("p",null,"Binary:              ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/bitcoind"),"\nConfiguration file:  ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/Bitcoin/bitcoin.conf"),"\nData directory:      ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/Bitcoin"),"\nLock file:           ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/Bitcoin/.lock")),(0,r.kt)("h2",{id:"installing-service-configuration"},"Installing Service Configuration"),(0,r.kt)("h3",{id:"systemd"},"systemd"),(0,r.kt)("p",null,"Installing this .service file consists of just copying it to\n/usr/lib/systemd/system directory, followed by the command\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload")," in order to update running systemd configuration."),(0,r.kt)("p",null,"To test, run ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start bitcoind")," and to enable for system startup run\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl enable bitcoind")),(0,r.kt)("p",null,"NOTE: When installing for systemd in Debian/Ubuntu the .service file needs to be copied to the /lib/systemd/system directory instead."),(0,r.kt)("h3",{id:"openrc"},"OpenRC"),(0,r.kt)("p",null,"Rename bitcoind.openrc to bitcoind and drop it in /etc/init.d.  Double\ncheck ownership and permissions and make it executable.  Test it with\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/init.d/bitcoind start")," and configure it to run on startup with\n",(0,r.kt)("inlineCode",{parentName:"p"},"rc-update add bitcoind")),(0,r.kt)("h3",{id:"upstart-for-debianubuntu-based-distributions"},"Upstart (for Debian/Ubuntu based distributions)"),(0,r.kt)("p",null,"Upstart is the default init system for Debian/Ubuntu versions older than 15.04. If you are using version 15.04 or newer and haven't manually configured upstart you should follow the systemd instructions instead."),(0,r.kt)("p",null,"Drop bitcoind.conf in /etc/init.  Test by running ",(0,r.kt)("inlineCode",{parentName:"p"},"service bitcoind start"),"\nit will automatically start on reboot."),(0,r.kt)("p",null,"NOTE: This script is incompatible with CentOS 5 and Amazon Linux 2014 as they\nuse old versions of Upstart and do not supply the start-stop-daemon utility."),(0,r.kt)("h3",{id:"centos"},"CentOS"),(0,r.kt)("p",null,"Copy bitcoind.init to /etc/init.d/bitcoind. Test by running ",(0,r.kt)("inlineCode",{parentName:"p"},"service bitcoind start"),"."),(0,r.kt)("p",null,"Using this script, you can adjust the path and flags to the Sbitd program by\nsetting the SbitD and FLAGS environment variables in the file\n/etc/sysconfig/bitcoind. You can also use the DAEMONOPTS environment variable here."),(0,r.kt)("h3",{id:"macos-1"},"macOS"),(0,r.kt)("p",null,"Copy org.bitcoin.bitcoind.plist into ~/Library/LaunchAgents. Load the launch agent by\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"launchctl load ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist"),"."),(0,r.kt)("p",null,"This Launch Agent will cause bitcoind to start whenever the user logs in."),(0,r.kt)("p",null,"NOTE: This approach is intended for those wanting to run bitcoind as the current user.\nYou will need to modify org.bitcoin.bitcoind.plist if you intend to use it as a\nLaunch Daemon with a dedicated bitcoin user."),(0,r.kt)("h2",{id:"auto-respawn"},"Auto-respawn"),(0,r.kt)("p",null,"Auto respawning is currently only configured for Upstart and systemd.\nReasonable defaults have been chosen but YMMV."))}b.isMDXComponent=!0}}]);