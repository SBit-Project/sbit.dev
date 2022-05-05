"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[483],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return m}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(i),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return i?n.createElement(h,s(s({ref:t},u),{},{components:i})):n.createElement(h,s({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4090:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=i(7462),a=i(3366),r=(i(7294),i(3905)),s=["components"],o={title:"Release Process",description:"Release Process",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:6},l="Release Process",d={unversionedId:"SBit-Core/Development/release-process",id:"SBit-Core/Development/release-process",title:"Release Process",description:"Release Process",source:"@site/docs/SBit-Core/Development/release-process.md",sourceDirName:"SBit-Core/Development",slug:"/SBit-Core/Development/release-process",permalink:"/sbit.dev/docs/SBit-Core/Development/release-process",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Release Process",description:"Release Process",keywords:["sbit","bitcoin","blockchain","ethereum"],sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Productivity Notes",permalink:"/sbit.dev/docs/SBit-Core/Development/productivity"},next:{title:"Unauthenticated REST Interface",permalink:"/sbit.dev/docs/SBit-Core/Development/REST-interface"}},u={},c=[{value:"Branch updates",id:"branch-updates",level:2},{value:"Before every release candidate",id:"before-every-release-candidate",level:3},{value:"Before every major and minor release",id:"before-every-major-and-minor-release",level:3},{value:"Before every major release",id:"before-every-major-release",level:3},{value:"Before branch-off",id:"before-branch-off",level:4},{value:"After branch-off (on master)",id:"after-branch-off-on-master",level:4},{value:"After branch-off (on the major release branch)",id:"after-branch-off-on-the-major-release-branch",level:4},{value:"Before final release",id:"before-final-release",level:4},{value:"Building",id:"building",level:2},{value:"First time / New builders",id:"first-time--new-builders",level:3},{value:"Write the release notes",id:"write-the-release-notes",level:3},{value:"Setup and perform Gitian builds",id:"setup-and-perform-gitian-builds",level:3},{value:"Fetch and create inputs: (first time, or when dependency versions change)",id:"fetch-and-create-inputs-first-time-or-when-dependency-versions-change",level:3},{value:"Optional: Seed the Gitian sources cache and offline git repositories",id:"optional-seed-the-gitian-sources-cache-and-offline-git-repositories",level:3},{value:"Build and sign Sbit Core for Linux, Windows, and macOS:",id:"build-and-sign-sbit-core-for-linux-windows-and-macos",level:3},{value:"Verify other gitian builders signatures to your own. (Optional)",id:"verify-other-gitian-builders-signatures-to-your-own-optional",level:3},{value:"Next steps:",id:"next-steps",level:3},{value:"After 3 or more people have gitian-built and their results match:",id:"after-3-or-more-people-have-gitian-built-and-their-results-match",level:3},{value:"Additional information",id:"additional-information",level:2},{value:'<a name="how-to-calculate-assumed-blockchain-and-chain-state-size"></a>How to calculate <code>m_assumed_blockchain_size</code> and <code>m_assumed_chain_state_size</code>',id:"how-to-calculate-m_assumed_blockchain_size-and-m_assumed_chain_state_size",level:3}],p={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"release-process"},"Release Process"),(0,r.kt)("h2",{id:"branch-updates"},"Branch updates"),(0,r.kt)("h3",{id:"before-every-release-candidate"},"Before every release candidate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update release candidate version in ",(0,r.kt)("inlineCode",{parentName:"li"},"configure.ac")," (",(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_VERSION_RC"),").")),(0,r.kt)("h3",{id:"before-every-major-and-minor-release"},"Before every major and minor release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update version in ",(0,r.kt)("inlineCode",{parentName:"li"},"configure.ac")," (don't forget to set ",(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_VERSION_RC")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),")."),(0,r.kt)("li",{parentName:"ul"},'Write release notes (see "Write the release notes" below).')),(0,r.kt)("h3",{id:"before-every-major-release"},"Before every major release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On both the master branch and the new release branch:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"update ",(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_VERSION_MINOR")," in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/configure.ac"},(0,r.kt)("inlineCode",{parentName:"a"},"configure.ac"))),(0,r.kt)("li",{parentName:"ul"},"update ",(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_VERSION_MINOR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PACKAGE_VERSION"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"PACKAGE_STRING")," in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/sbit/build_msvc/bitcoin_config.h"},(0,r.kt)("inlineCode",{parentName:"a"},"build_msvc/bitcoin_config.h"))))),(0,r.kt)("li",{parentName:"ul"},"On the new release branch in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/configure.ac"},(0,r.kt)("inlineCode",{parentName:"a"},"configure.ac"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/sbit/build_msvc/bitcoin_config.h"},(0,r.kt)("inlineCode",{parentName:"a"},"build_msvc/bitcoin_config.h"))," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_VERSION_REVISION")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")),(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},"CLIENT_VERSION_IS_RELEASE")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))))),(0,r.kt)("h4",{id:"before-branch-off"},"Before branch-off"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update hardcoded ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/sbit/contrib/seeds/README.md"},"seeds"),", "),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/sbit/src/chainparams.cpp"},(0,r.kt)("inlineCode",{parentName:"a"},"src/chainparams.cpp"))," m_assumed_blockchain_size and m_assumed_chain_state_size with the current size plus some overhead ."),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/sbit/src/chainparams.cpp"},(0,r.kt)("inlineCode",{parentName:"a"},"src/chainparams.cpp"))," chainTxData with statistics about the transaction count and rate. Use the output of the ",(0,r.kt)("inlineCode",{parentName:"li"},"getchaintxstats")," RPC. Reviewers can verify the results by running ",(0,r.kt)("inlineCode",{parentName:"li"},"getchaintxstats <window_block_count> <window_final_block_hash>")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"window_block_count")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"window_final_block_hash")," from your output."),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"src/chainparams.cpp")," nMinimumChainWork and defaultAssumeValid (and the block height comment) with information from the ",(0,r.kt)("inlineCode",{parentName:"li"},"getblockheader")," (and ",(0,r.kt)("inlineCode",{parentName:"li"},"getblockhash"),") RPCs.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The selected value must not be orphaned so it may be useful to set the value two blocks back from the tip."),(0,r.kt)("li",{parentName:"ul"},"Testnet should be set some tens of thousands back from the tip due to reorgs there."),(0,r.kt)("li",{parentName:"ul"},"This update should be reviewed with a reindex-chainstate with assumevalid=0 to catch any defect\nthat causes rejection of blocks in the past history.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Clear the release notes and move them to the wiki (see "Write the release notes" below).')),(0,r.kt)("h4",{id:"after-branch-off-on-master"},"After branch-off (on master)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update the version of ",(0,r.kt)("inlineCode",{parentName:"li"},"contrib/gitian-descriptors/*.yml"),".")),(0,r.kt)("h4",{id:"after-branch-off-on-the-major-release-branch"},"After branch-off (on the major release branch)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update the versions."),(0,r.kt)("li",{parentName:"ul"},"Create a pinned meta-issue for testing the release candidate ")),(0,r.kt)("h4",{id:"before-final-release"},"Before final release"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Merge the release notes from the wiki into the branch."),(0,r.kt)("li",{parentName:"ul"},'Ensure the "Needs release note" label is removed from all relevant pull requests and issues.')),(0,r.kt)("h2",{id:"building"},"Building"),(0,r.kt)("h3",{id:"first-time--new-builders"},"First time / New builders"),(0,r.kt)("p",null,"If you're using the automated script (found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SBit-Project/sbit/contrib/gitian-build.py"},"contrib/gitian-build.py"),'), then at this point you should run it with the "--setup" command. Otherwise ignore this.'),(0,r.kt)("h3",{id:"write-the-release-notes"},"Write the release notes"),(0,r.kt)("p",null,"Open a draft of the release notes for collaborative editing at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sbit-core/sbit-dev/wiki"},"https://github.com/sbit-core/sbit-dev/wiki"),"."),(0,r.kt)("p",null,"For the period during which the notes are being edited on the wiki, the version on the branch should be wiped and replaced with a link to the wiki which should be used for all announcements until ",(0,r.kt)("inlineCode",{parentName:"p"},"-final"),"."),(0,r.kt)("p",null,"Write the release notes. ",(0,r.kt)("inlineCode",{parentName:"p"},"git shortlog")," helps a lot, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git shortlog --no-merges v(current version, e.g. 0.19.2)..v(new version, e.g. 0.20.0)\n")),(0,r.kt)("p",null,"Generate list of authors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git log --format='- %aN' v(current version, e.g. 0.20.0)..v(new version, e.g. 0.20.1) | sort -fiu\n")),(0,r.kt)("p",null,"Tag the version (or release candidate) in git:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git tag -s v(new version, e.g. 0.20.0)\n")),(0,r.kt)("h3",{id:"setup-and-perform-gitian-builds"},"Setup and perform Gitian builds"),(0,r.kt)("p",null,"If you're using the automated script (found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SBit-Project/sbit/contrib/gitian-build.py"},"contrib/gitian-build.py"),'), then at this point you should run it with the "--build" command. Otherwise ignore this.'),(0,r.kt)("p",null,"Setup Gitian descriptors:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'pushd ./sbit\nexport SIGNER="(your Gitian key, ie bluematt, sipa, etc)"\nexport VERSION=(new version, e.g. 0.20.0)\ngit fetch\ngit checkout v${VERSION}\npopd\n')),(0,r.kt)("p",null,"Ensure your gitian.sigs are up-to-date if you wish to gverify your builds against other Gitian signatures."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pushd ./gitian.sigs\ngit pull\npopd\n")),(0,r.kt)("p",null,"Ensure gitian-builder is up-to-date:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pushd ./gitian-builder\ngit pull\npopd\n")),(0,r.kt)("h3",{id:"fetch-and-create-inputs-first-time-or-when-dependency-versions-change"},"Fetch and create inputs: (first time, or when dependency versions change)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pushd ./gitian-builder\nmkdir -p inputs\nwget -O inputs/osslsigncode-2.0.tar.gz https://github.com/mtrojnar/osslsigncode/archive/2.0.tar.gz\necho '2ad3e0a4b3e0b4d655317bc312a810211c500427386225b112e5740116abbc952a inputs/osslsigncode-2.0.tar.gz' | sha256sum -c\npopd\n")),(0,r.kt)("p",null,"Create the macOS SDK tarball, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SBit-Project/sbit/contrib/macdeploy/README.md#deterministic-macos-dmg-notes"},"macdeploy instructions")," for details, and copy it into the inputs directory."),(0,r.kt)("h3",{id:"optional-seed-the-gitian-sources-cache-and-offline-git-repositories"},"Optional: Seed the Gitian sources cache and offline git repositories"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Gitian is sometimes unable to download files. If you have errors, try the step below."))),(0,r.kt)("p",null,"By default, Gitian will fetch source files as needed. To cache them ahead of time, make sure you have checked out the tag you want to build in sbit, then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pushd ./gitian-builder\nmake -C ../sbit/depends download SOURCES_PATH=`pwd`/cache/common\npopd\n")),(0,r.kt)("p",null,"Only missing files will be fetched, so this is safe to re-run for each build."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Offline builds must use the --url flag to ensure Gitian fetches only from local URLs. For example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    pushd ./gitian-builder\n    ./bin/gbuild --url sbit=/path/to/sbit,signature=/path/to/sigs {rest of arguments}\n    popd\n")),(0,r.kt)("p",null,"The gbuild invocations below ",(0,r.kt)("b",null,"DO NOT DO THIS")," by default."),(0,r.kt)("h3",{id:"build-and-sign-sbit-core-for-linux-windows-and-macos"},"Build and sign Sbit Core for Linux, Windows, and macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'pushd ./gitian-builder\n./bin/gbuild --num-make 2 --memory 3000 --commit sbit=v${VERSION} ../sbit/contrib/gitian-descriptors/gitian-linux.yml\n./bin/gsign --signer "$SIGNER" --release ${VERSION}-linux --destination ../gitian.sigs/ ../sbit/contrib/gitian-descriptors/gitian-linux.yml\nmv build/out/sbit-*.tar.gz build/out/src/sbit-*.tar.gz ../\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'./bin/gbuild --num-make 2 --memory 3000 --commit sbit=v${VERSION} ../sbit/contrib/gitian-descriptors/gitian-win.yml\n./bin/gsign --signer "$SIGNER" --release ${VERSION}-win-unsigned --destination ../gitian.sigs/ ../sbit/contrib/gitian-descriptors/gitian-win.yml\nmv build/out/sbit-*-win-unsigned.tar.gz inputs/sbit-win-unsigned.tar.gz\nmv build/out/sbit-*.zip build/out/sbit-*.exe ../\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'./bin/gbuild --num-make 2 --memory 3000 --commit sbit=v${VERSION} ../sbit/contrib/gitian-descriptors/gitian-osx.yml\n./bin/gsign --signer "$SIGNER" --release ${VERSION}-osx-unsigned --destination ../gitian.sigs/ ../sbit/contrib/gitian-descriptors/gitian-osx.yml\nmv build/out/sbit-*-osx-unsigned.tar.gz inputs/sbit-osx-unsigned.tar.gz\nmv build/out/sbit-*.tar.gz build/out/sbit-*.dmg ../\npopd\n')),(0,r.kt)("p",null,"Build output expected:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"source tarball (",(0,r.kt)("inlineCode",{parentName:"li"},"sbit-${VERSION}.tar.gz"),")"),(0,r.kt)("li",{parentName:"ol"},"linux 32-bit and 64-bit dist tarballs (",(0,r.kt)("inlineCode",{parentName:"li"},"sbit-${VERSION}-linux[32|64].tar.gz"),")"),(0,r.kt)("li",{parentName:"ol"},"windows 32-bit and 64-bit unsigned installers and dist zips (",(0,r.kt)("inlineCode",{parentName:"li"},"sbit-${VERSION}-win[32|64]-setup-unsigned.exe"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"sbit-${VERSION}-win[32|64].zip"),")"),(0,r.kt)("li",{parentName:"ol"},"macOS unsigned installer and dist tarball (",(0,r.kt)("inlineCode",{parentName:"li"},"sbit-${VERSION}-osx-unsigned.dmg"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"sbit-${VERSION}-osx64.tar.gz"),")"),(0,r.kt)("li",{parentName:"ol"},"Gitian signatures (in ",(0,r.kt)("inlineCode",{parentName:"li"},"gitian.sigs/${VERSION}-<linux|{win,osx}-unsigned>/(your Gitian key)/"),")")),(0,r.kt)("h3",{id:"verify-other-gitian-builders-signatures-to-your-own-optional"},"Verify other gitian builders signatures to your own. (Optional)"),(0,r.kt)("p",null,"Add other gitian builders keys to your gpg keyring, and/or refresh keys: See ",(0,r.kt)("inlineCode",{parentName:"p"},"../sbit/contrib/gitian-keys/README.md"),"."),(0,r.kt)("p",null,"Verify the signatures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pushd ./gitian-builder\n./bin/gverify -v -d ../gitian.sigs/ -r ${VERSION}-linux ../sbit/contrib/gitian-descriptors/gitian-linux.yml\n./bin/gverify -v -d ../gitian.sigs/ -r ${VERSION}-win-unsigned ../sbit/contrib/gitian-descriptors/gitian-win.yml\n./bin/gverify -v -d ../gitian.sigs/ -r ${VERSION}-osx-unsigned ../sbit/contrib/gitian-descriptors/gitian-osx.yml\npopd\n")),(0,r.kt)("h3",{id:"next-steps"},"Next steps:"),(0,r.kt)("p",null,"Commit your signature to gitian.sigs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'pushd gitian.sigs\ngit add ${VERSION}-linux/"${SIGNER}"\ngit add ${VERSION}-win-unsigned/"${SIGNER}"\ngit add ${VERSION}-osx-unsigned/"${SIGNER}"\ngit commit -m "Add ${VERSION} unsigned sigs for ${SIGNER}"\ngit push  # Assuming you can push to the gitian.sigs tree\npopd\n')),(0,r.kt)("p",null,"Codesigner only: Create Windows/macOS detached signatures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only one person handles codesigning. Everyone else should skip to the next step."),(0,r.kt)("li",{parentName:"ul"},"Only once the Windows/macOS builds each have 3 matching signatures may they be signed with their respective release keys.")),(0,r.kt)("p",null,"Codesigner only: Sign the macOS binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'transfer sbit-osx-unsigned.tar.gz to macOS for signing\ntar xf sbit-osx-unsigned.tar.gz\n./detached-sig-create.sh -s "Key ID"\nEnter the keychain password and authorize the signature\nMove signature-osx.tar.gz back to the gitian host\n')),(0,r.kt)("p",null,"Codesigner only: Sign the windows binaries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar xf sbit-win-unsigned.tar.gz\n./detached-sig-create.sh -key /path/to/codesign.key\nEnter the passphrase for the key when prompted\nsignature-win.tar.gz will be created\n")),(0,r.kt)("p",null,"Codesigner only: Commit the detached codesign payloads:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cd ~/sbit-detached-sigs\ncheckout the appropriate branch for this release series\nrm -rf *\ntar xf signature-osx.tar.gz\ntar xf signature-win.tar.gz\ngit add -A\ngit commit -m "point to ${VERSION}"\ngit tag -s v${VERSION} HEAD\ngit push the current branch and new tag\n')),(0,r.kt)("p",null,"Non-codesigners: wait for Windows/macOS detached signatures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once the Windows/macOS builds each have 3 matching signatures, they will be signed with their respective release keys."),(0,r.kt)("li",{parentName:"ul"},"Detached signatures will then be committed to the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/sbit-core/sbit-detached-sigs"},"sbit-detached-sigs")," repository, which can be combined with the unsigned apps to create signed binaries.")),(0,r.kt)("p",null,"Create (and optionally verify) the signed macOS binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'pushd ./gitian-builder\n./bin/gbuild -i --commit signature=v${VERSION} ../sbit/contrib/gitian-descriptors/gitian-osx-signer.yml\n./bin/gsign --signer "$SIGNER" --release ${VERSION}-osx-signed --destination ../gitian.sigs/ ../sbit/contrib/gitian-descriptors/gitian-osx-signer.yml\n./bin/gverify -v -d ../gitian.sigs/ -r ${VERSION}-osx-signed ../sbit/contrib/gitian-descriptors/gitian-osx-signer.yml\nmv build/out/sbit-osx-signed.dmg ../sbit-${VERSION}-osx.dmg\npopd\n')),(0,r.kt)("p",null,"Create (and optionally verify) the signed Windows binaries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'pushd ./gitian-builder\n./bin/gbuild -i --commit signature=v${VERSION} ../sbit/contrib/gitian-descriptors/gitian-win-signer.yml\n./bin/gsign --signer "$SIGNER" --release ${VERSION}-win-signed --destination ../gitian.sigs/ ../sbit/contrib/gitian-descriptors/gitian-win-signer.yml\n./bin/gverify -v -d ../gitian.sigs/ -r ${VERSION}-win-signed ../sbit/contrib/gitian-descriptors/gitian-win-signer.yml\nmv build/out/sbit-*win64-setup.exe ../sbit-${VERSION}-win64-setup.exe\npopd\n')),(0,r.kt)("p",null,"Commit your signature for the signed macOS/Windows binaries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'pushd gitian.sigs\ngit add ${VERSION}-osx-signed/"${SIGNER}"\ngit add ${VERSION}-win-signed/"${SIGNER}"\ngit commit -m "Add ${SIGNER} ${VERSION} signed binaries signatures"\ngit push  # Assuming you can push to the gitian.sigs tree\npopd\n')),(0,r.kt)("h3",{id:"after-3-or-more-people-have-gitian-built-and-their-results-match"},"After 3 or more people have gitian-built and their results match:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"SHA256SUMS.asc")," for the builds, and GPG-sign it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sha256sum * > SHA256SUMS\n")),(0,r.kt)("p",null,"The list of files should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sbit-${VERSION}-aarch64-linux-gnu.tar.gz\nsbit-${VERSION}-arm-linux-gnueabihf.tar.gz\nsbit-${VERSION}-riscv64-linux-gnu.tar.gz\nsbit-${VERSION}-x86_64-linux-gnu.tar.gz\nsbit-${VERSION}-osx64.tar.gz\nsbit-${VERSION}-osx.dmg\nsbit-${VERSION}.tar.gz\nsbit-${VERSION}-win64-setup.exe\nsbit-${VERSION}-win64.zip\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"*-debug*")," files generated by the gitian build contain debug symbols\nfor troubleshooting by developers. It is assumed that anyone that is interested\nin debugging can run gitian to generate the files for themselves. To avoid\nend-user confusion about which file to pick, as well as save storage\nspace ",(0,r.kt)("em",{parentName:"p"},"do not upload these to the sbit.dev server, nor put them in the torrent"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GPG-sign it, delete the unsigned file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --digest-algo sha256 --clearsign SHA256SUMS # outputs SHA256SUMS.asc\nrm SHA256SUMS\n")),(0,r.kt)("p",null,"(the digest algorithm is forced to sha256 to avoid confusion of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hash:")," header that GPG adds with the SHA256 used for the files)\nNote: check that SHA256SUMS itself doesn't end up in SHA256SUMS, which is a spurious/nonsensical entry."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload zips and installers, as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"SHA256SUMS.asc")," from last step, to the sbit.dev server\ninto ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/www/bin/sbit-core-${VERSION}"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},".torrent")," will appear in the directory after a few minutes. Optionally help seed this torrent. To get the ",(0,r.kt)("inlineCode",{parentName:"p"},"magnet:")," URI use:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"transmission-show -m <torrent file>\n")),(0,r.kt)("h2",{id:"additional-information"},"Additional information"),(0,r.kt)("h3",{id:"how-to-calculate-m_assumed_blockchain_size-and-m_assumed_chain_state_size"},(0,r.kt)("a",{name:"how-to-calculate-assumed-blockchain-and-chain-state-size"}),"How to calculate ",(0,r.kt)("inlineCode",{parentName:"h3"},"m_assumed_blockchain_size")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"m_assumed_chain_state_size")),(0,r.kt)("p",null,"Both variables are used as a guideline for how much space the user needs on their drive in total, not just strictly for the blockchain.\nNote that all values should be taken from a ",(0,r.kt)("strong",{parentName:"p"},"fully synced")," node and have an overhead of 5-10% added on top of its base value."),(0,r.kt)("p",null,"To calculate ",(0,r.kt)("inlineCode",{parentName:"p"},"m_assumed_blockchain_size"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"mainnet")," -> Take the size of the data directory, excluding ",(0,r.kt)("inlineCode",{parentName:"li"},"/regtest")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"/testnet3")," directories."),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"testnet")," -> Take the size of the ",(0,r.kt)("inlineCode",{parentName:"li"},"/testnet3")," directory.")),(0,r.kt)("p",null,"To calculate ",(0,r.kt)("inlineCode",{parentName:"p"},"m_assumed_chain_state_size"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"mainnet")," -> Take the size of the ",(0,r.kt)("inlineCode",{parentName:"li"},"/chainstate")," directory."),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("inlineCode",{parentName:"li"},"testnet")," -> Take the size of the ",(0,r.kt)("inlineCode",{parentName:"li"},"/testnet3/chainstate")," directory.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"When taking the size for ",(0,r.kt)("inlineCode",{parentName:"li"},"m_assumed_blockchain_size"),", there's no need to exclude the ",(0,r.kt)("inlineCode",{parentName:"li"},"/chainstate")," directory since it's a guideline value and an overhead will be added anyway.")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The expected overhead for growth may change over time, so it may not be the same value as last release; pay attention to that when changing the variables.")))))}m.isMDXComponent=!0}}]);