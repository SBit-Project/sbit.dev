"use strict";(self.webpackChunksbit_website=self.webpackChunksbit_website||[]).push([[9891],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3674:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"SRC20 DApp",description:"SRC20 DApp",keywords:["sbit","bitcoin","blockchain","ethereum","docker","network"],sidebar_position:3},s=void 0,p={unversionedId:"Smart-Contract/SRC20/src20-dapp",id:"Smart-Contract/SRC20/src20-dapp",title:"SRC20 DApp",description:"SRC20 DApp",source:"@site/docs/Smart-Contract/SRC20/src20-dapp.md",sourceDirName:"Smart-Contract/SRC20",slug:"/Smart-Contract/SRC20/src20-dapp",permalink:"/sbit.dev/docs/Smart-Contract/SRC20/src20-dapp",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"SRC20 DApp",description:"SRC20 DApp",keywords:["sbit","bitcoin","blockchain","ethereum","docker","network"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SRC20 With SBitJS",permalink:"/sbit.dev/docs/Smart-Contract/SRC20/src20-js"},next:{title:"Simple Crowdsale",permalink:"/sbit.dev/docs/Smart-Contract/SRC20/Simple-Crowdsale"}},c={},u=[{value:"Brief Intro To Reactive Programming",id:"brief-intro-to-reactive-programming",level:2},{value:"Manual UI Update",id:"manual-ui-update",level:2},{value:"Reactive UI Update",id:"reactive-ui-update",level:2},{value:"Running The Project",id:"running-the-project",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Display Total Supply",id:"display-total-supply",level:2},{value:"Subscribe To Mint Events",id:"subscribe-to-mint-events",level:2},{value:"Transaction Lifecycle Management",id:"transaction-lifecycle-management",level:2},{value:"Minting Tokens",id:"minting-tokens",level:2},{value:"Mint Token UX Workflow",id:"mint-token-ux-workflow",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this chapter, we'll build a React DApp for the ",(0,o.kt)("a",{parentName:"p",href:"src20-token"},"SRC20 Token we deployed previously"),"."),(0,o.kt)("p",null,"The features for this DApp are similar to the NodeJS CLI tool we've built. The DApp should:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subscribe to and display token transfer events."),(0,o.kt)("li",{parentName:"ul"},"Display total supply, and update it automatically."),(0,o.kt)("li",{parentName:"ul"},"Be able to mint new tokens."),(0,o.kt)("li",{parentName:"ul"},"Display information about transactions made, e.g. number of confirmations.")),(0,o.kt)("p",null,"The only additional complication is that we no longer allow DApp to create a transaction without user permission. Now for every transaction, we should give the user an opportunity to approve or deny it:"),(0,o.kt)("p",null,"The SRC20 DApp is more complex than the CLI App, because it needs to track multiple transactions, and update the UI when a new confirmation occurs."),(0,o.kt)("p",null,"We will use ",(0,o.kt)("a",{parentName:"p",href:"https://mobx.js.org/"},"mobx.js"),", a reactive programming framework, to keep data and view synchronized."),(0,o.kt)("p",null,"You can get the code at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SBit-Project/sbitjs-dapp-src20"},"SBit-Project/sbitjs-dapp-src20"),", and use it to jump start your own DApp project."),(0,o.kt)("h2",{id:"brief-intro-to-reactive-programming"},"Brief Intro To Reactive Programming"),(0,o.kt)("p",null,"Most of the complexity in GUI programming is in synchronizing the underlying data and the UI state. When data changes, the UI also needs to change. Conversely, when the UI changes (say user inputs a number), the data needs to change."),(0,o.kt)("p",null,"It is tedious and error-prone to keep the UI and data in sync."),(0,o.kt)("p",null,"It'd be nice to bind the UI and data, so they always change together. ",(0,o.kt)("inlineCode",{parentName:"p"},"mobx")," provides the tool to do that, and it is almost indistinguishable from magic."),(0,o.kt)("p",null,"Let's first see how we manually update UI without reactive programming, then we'll see how mobx automates that process."),(0,o.kt)("h2",{id:"manual-ui-update"},"Manual UI Update"),(0,o.kt)("p",null,"Suppose the data is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n  a: 1,\n  b: 2,\n}\n")),(0,o.kt)("p",null,"We read the data in a view rendering function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function renderView(obj) {\n  const view = (\n    <div>\n      a: {obj.a}\n      <br/>\n      b: {obj.b}\n    </div>\n  )\n  ReactDOM.render(view, document.querySelector("#root"))\n}\n')),(0,o.kt)("p",null,"Now we update the data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"obj.a = 10\n")),(0,o.kt)("p",null,"Next, we'll need to manually call ",(0,o.kt)("inlineCode",{parentName:"p"},"renderView")," again to refresh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"renderView(obj)\n")),(0,o.kt)("p",null,"If we forget to rerender, the view would be stale. In a complex application, there could be many different views using different pieces of data. It's a big challenge to keep track of everything correctly."),(0,o.kt)("h2",{id:"reactive-ui-update"},"Reactive UI Update"),(0,o.kt)("p",null,"Instead of calling ",(0,o.kt)("inlineCode",{parentName:"p"},"renderView")," manually, we'd like it to be called automatically when we modify the object, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"obj.a = 10\n// \u2728\u2728\u2728 the view automagically updates \u2728\u2728\u2728\n")),(0,o.kt)("p",null,"To accomplish this, ",(0,o.kt)("inlineCode",{parentName:"p"},"mobx")," introduces two magic functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mobx.js.org/refguide/observable.html"},"observable"),": If you modify an observable object, code that depends on the object's data should automatically re-execute.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mobx.js.org/refguide/autorun.html"},"autorun"),": Execute a piece of code, and track all the pieces of observable data that had been used. If anything changed, re-execute.")),(0,o.kt)("p",null,"We change the previously example like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Turn an object into an observable\nconst obj = observable({\n  a: 1,\n  b: 2,\n})\n")),(0,o.kt)("p",null,"And we render the UI using ",(0,o.kt)("inlineCode",{parentName:"p"},"autorun"),", so it gets re-executed when ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," is changed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Will automatically run `renderView` if obj changes\nautorun(() => {\n  renderView(obj)\n})\n")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://codepen.io/hayeah/pen/MrEVxy?editors=1011"},"try this example on codepen.io"),".  Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," in the provided console, and see the view changing."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: In actual React code, we won't explicitly call ",(0,o.kt)("inlineCode",{parentName:"p"},"autorun"),", the framework handles it. But the idea is the same, modify an object, and the components that uses the object would automatically re-render.")),(0,o.kt)("h2",{id:"running-the-project"},"Running The Project"),(0,o.kt)("p",null,"Clone the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/SBit-Project/sbitjs-dapp-src20.git\n")),(0,o.kt)("p",null,"Install project dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n# or: npm install\n")),(0,o.kt)("p",null,"Like the nodejs CLI tool, we'll need to make the information about deployed contracts available. Let's copy/link ",(0,o.kt)("inlineCode",{parentName:"p"},"solar.development.json")," into the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ln -s ~/sbitbook/examples/mytoken/solar.development.json solar.development.json\n")),(0,o.kt)("p",null,"Then start the web server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm start\n\n> sbit-portal-ui@0.0.1 start /Users/sbitdev/p/sbit/sbitjs-dapp-src20\n> neutrino start\n\n\u2714 Development server running on: http://localhost:3000\n\u2714 Build completed\n")),(0,o.kt)("p",null,"Open http://localhost:3000"),(0,o.kt)("h2",{id:"project-structure"},"Project Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/sbitjs-dapp-src20/blob/master/src/index.tsx"},"src/index.ts"),": the entry of the project, doing a little bit of setup."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/sbitjs-dapp-src20/tree/master/src/views"},"src/views"),": this directory contains all React components."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SBit-Project/sbitjs-dapp-src20/blob/master/src/Store.ts"},"src/Store.ts"),": this observable object manages the logic and data of the application.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rpc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"myToken")," instances are initialized with two global constants:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const rpc = new SBitRPC(SBIT_RPC)\n\nconst myToken = new Contract(rpc, SOLAR_REPO.contracts["zeppelin-solidity/contracts/token/CappedToken.sol"])\n')),(0,o.kt)("p",null,"The constants ",(0,o.kt)("inlineCode",{parentName:"p"},"SBIT_RPC")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SOLAR_REPO")," are defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SBit-Project/sbitjs-dapp-src20/blob/master/config/development.js"},"config/development.js"),"."),(0,o.kt)("h2",{id:"display-total-supply"},"Display Total Supply"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Store")," is an observable object. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"totalSupply")," property changes, the React component that uses it would update."),(0,o.kt)("p",null,"When the app first loads, it calls ",(0,o.kt)("inlineCode",{parentName:"p"},"updateTotalSupply")," to get the total supply. The simplified ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class Store {\n  @observable public totalSupply: number = 0\n\n  // `updateTotalSupply` is called when app is first loaded\n  public async updateTotalSupply() {\n    const result = await myToken.call("totalSupply")\n    const supply = result.outputs[0]\n\n    // Triggers update\n    this.totalSupply = supply.toNumber()\n  }\n}\n')),(0,o.kt)("p",null,"Simply by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"this.totalSupply"),", the view that uses it would get re-rendered. Specifically, this chunk of JSX:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1>\n  <span className="is-size-2"> {totalSupply} </span>\n  <br />\n  Total Supply\n</h1>\n')),(0,o.kt)("h2",{id:"subscribe-to-mint-events"},"Subscribe To Mint Events"),(0,o.kt)("p",null,"Let's subscribe to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint")," event so we can update the total supply immediately if somebody minted additional tokens. The simplified code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class Store {\n  @observable.shallow public transferEvents: ITransferLog[] = []\n\n  // `observeEvents` is called by `init`\n  private async observeEvents() {\n    this.emitter = myToken.logEmitter()\n\n    this.emitter.on("Mint", () => {\n      this.updateTotalSupply()\n    })\n\n    this.emitter.on("Transfer", (log: ITransferLog) => {\n      this.transferEvents.unshift(log)\n    })\n  }\n}\n')),(0,o.kt)("p",null,"Here the app subscribe to both ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," events, and does something when notified:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Mint"),": update the total supply."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Transfer"),": add the transfer event to an array, so we can display it in the UI.")),(0,o.kt)("p",null,"The view that renders ",(0,o.kt)("inlineCode",{parentName:"p"},"transferEvents")," is straightforward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<h1> Transfers </h1>\n\n{transferEvents.length === 0 && "no transfer event observed yet"}\n\n{\n  transferEvents.map((log) => <TransferLog key={log.transactionHash} log={log} />)\n}\n')),(0,o.kt)("p",null,"This view get updated when a new item is added to ",(0,o.kt)("inlineCode",{parentName:"p"},"transferEvents"),"."),(0,o.kt)("p",null,"Let's test this out. Use the NodeJS CLI to mint more tokens:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node index.js mint dcd32b87270aeb980333213da2549c9907e09e94 1000\n\nmint tx: 7f0ff25475e2e6e0943fa6fb934999019d7a6a886126c220d0fa7cdcc3c36feb\n\n\u2714 confirm mint\n")),(0,o.kt)("p",null,"Even though the minting was done outside app, we still get notified. The total supply should increment by 1000, and a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," event should show up in the UI:"),(0,o.kt)("h2",{id:"transaction-lifecycle-management"},"Transaction Lifecycle Management"),(0,o.kt)("p",null,"In a typical web app, the user clicks a button, and the app makes an HTTP request to the server and get a response back. It's a simple cycle, and the user does not need to approve the HTTP request, or to know whether the request had been accepted by the server."),(0,o.kt)("p",null,"The lifecycle for a transaction has more stages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A transaction pending user audit & approval."),(0,o.kt)("li",{parentName:"ol"},"A transaction is sent to sbitd, and broadcasted to the network."),(0,o.kt)("li",{parentName:"ol"},"User waits for transaction to reach some number of confirmations.")),(0,o.kt)("p",null,"Your app may need to give indication as to where transactions are in each of these stages."),(0,o.kt)("h2",{id:"minting-tokens"},"Minting Tokens"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mintTokens")," method tracks the mint transactions that had been made, and updates the UI as the transactions progress through the various stages of their lifecycles."),(0,o.kt)("p",null,"The first half of the method creates a new observable ",(0,o.kt)("inlineCode",{parentName:"p"},"txRecord"),". The second half updates the txRecord, which in turn triggers views to update."),(0,o.kt)("p",null,"The annotated code for ",(0,o.kt)("inlineCode",{parentName:"p"},"mintTokens"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'public async mintTokens(toAddress: string, amount: number) {\n  // `txRecords` is an observable array. Adding an object into the array\n  // will recursively convert the object into an observable.\n  this.txRecords.unshift({\n    method: "mint",\n    params: {\n      toAddress,\n      amount,\n    },\n\n    // Initially undefined, until user approves or denies a mint request.\n    tx: undefined,\n    error: undefined,\n  })\n\n  // Getting the newly created observable txRecord instance.\n  const txRecord = this.txRecords[0]\n\n  /*******************************************************\n\n  ********************************************************/\n\n  try {\n    // `send` returns if user approved the tx, and the tx had\n    // been sent to sbitd.\n    const tx = await myToken.send("mint", [toAddress, amount])\n\n    // Updates txRecord with transaction info. This triggers view update.\n    txRecord.tx = tx\n\n    // Transaction is initially unconfirmed. Wait for 3 confirmations.\n    await tx.confirm(3, (tx2) => {\n      // Each additional confirmation would invoke this callback.\n      //\n      // Update txRecord with transaction info & trigger view update.\n      txRecord.tx = tx2\n    })\n  } catch (err) {\n    // User denied the transaction.\n    //\n    // Update the error info & trigger view update.\n    txRecord.error = err\n  }\n}\n')),(0,o.kt)("p",null,"Without the record keeping logic, the code boils down to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const tx = await myToken.send("mint", [toAddress, amount])\nawait tx.confirm(3)\n')),(0,o.kt)("h2",{id:"mint-token-ux-workflow"},"Mint Token UX Workflow"),(0,o.kt)("p",null,"Enter the address and amount, click mint. Initially the tx should be pending for authorization:"),(0,o.kt)("p",null,"Go to the authorization UI to approve it (http://localhost:9899/):"),(0,o.kt)("p",null,"The transaction record should update, and show the number of confirmations reached (up to 3):"),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We've built a DApp for our SRC20 token. Next let's hold a crowdsale ICO for it!"))}m.isMDXComponent=!0}}]);