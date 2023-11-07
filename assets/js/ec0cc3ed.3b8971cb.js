"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[8551],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=i,m=c["".concat(p,".").concat(h)]||c[h]||w[h]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>w,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7896),i=(n(2784),n(30876));const a={title:"\ud83d\udcd3 Accessing Window Properties",id:"accessing-window-properties",slug:"accessing-window-properties",hide_table_of_contents:!0,sidebar_position:29,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1e_accessing_window_properties.md"},r=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers/accessing-window-properties",id:"introduction-to-programming/javascript-and-web-browsers/accessing-window-properties",title:"\ud83d\udcd3 Accessing Window Properties",description:"Previously we learn that information about our web browser window is accessed through the window object. Let's review:",source:"@site/docs/introduction-to-programming/2_javascript-and-web-browsers/1e-accessing-window-properties.md",sourceDirName:"introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/accessing-window-properties",permalink:"/introduction-to-programming/javascript-and-web-browsers/accessing-window-properties",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{title:"\ud83d\udcd3 Accessing Window Properties",id:"accessing-window-properties",slug:"accessing-window-properties",hide_table_of_contents:!0,sidebar_position:29,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/1e_accessing_window_properties.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 How Web Browsers Work",permalink:"/introduction-to-programming/javascript-and-web-browsers/how-web-browsers-work"},next:{title:"\ud83d\udcd3 Web APIs",permalink:"/introduction-to-programming/javascript-and-web-browsers/web-apis"}},p={},l=[{value:"Properties of the <code>window</code> Object",id:"properties-of-the-window-object",level:2},{value:"We Can Use JavaScript Methods on <code>window</code> Properties",id:"we-can-use-javascript-methods-on-window-properties",level:3},{value:"Nested Objects in <code>window</code>",id:"nested-objects-in-window",level:3},{value:"Working with Optional Parameters",id:"working-with-optional-parameters",level:3},{value:"Summary",id:"summary",level:2}],d={toc:l},c="wrapper";function w(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Previously we learn that information about our web browser window is accessed through the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object. Let's review:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," object represents a browser window or tab and every browser automatically creates a new ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," object every time we open a new window or tab. "),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," object represents our current browsing context and lets us access it with JavaScript. So, if we navigate to a new tab, there will be a separate ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," object for that tab."),(0,i.kt)("li",{parentName:"ul"},"Just like with JavaScript objects, the ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," object has properties that describe what a browser ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," is and does. ")),(0,i.kt)("p",null,"In this lesson, we'll learn how to access ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," properties and put them to use in our code! As you read through this lesson, try out the example code in the DevTools console."),(0,i.kt)("h2",{id:"properties-of-the-window-object"},"Properties of the ",(0,i.kt)("inlineCode",{parentName:"h2"},"window")," Object"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We can find the height and width of our browser window in pixels by accessing ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," properties. Try this in your DevTools console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> window.innerHeight;\n655\n> window.innerWidth;\n1123\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"innerHeight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"innerWidth")," are both properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object and they return numbers. The numbers that are returned will be different for you depending on what size your browser window current is. Notice how property names just like variables names are written in lower camelCase. "),(0,i.kt)("p",null,"We are accessing these properties by using ",(0,i.kt)("strong",{parentName:"p"},"dot notation"),", which follows this syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// This is not real code! \n// This is pseudocode to explain the syntax of dot notation.\nobject.property \n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," is the name of the object and ",(0,i.kt)("inlineCode",{parentName:"p"},"property")," is the name of the property."),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"innerHeight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"innerWidth")," don't describe the height and width of the entire web browser, just the height and width of the webpage we are on. If we want to include the entire browser application with the browser toolbars and scroll bars, then we'd need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"outerHeight")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"outerWidth")," properties. Try it!"),(0,i.kt)("h3",{id:"we-can-use-javascript-methods-on-window-properties"},"We Can Use JavaScript Methods on ",(0,i.kt)("inlineCode",{parentName:"h3"},"window")," Properties"),(0,i.kt)("p",null,"Even though ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," is not a part of the JavaScript programming language, it is still completely accessible to any JavaScript code. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," property values are all data types that JavaScript can recognize and interact with. Let's say that we wanted to retrieve our browser window's inner height and use it in a string. We can do that like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> const height = window.innerHeight;\n> height;\n655\n> const stringHeight = height.toString();\n> stringHeight;\n"655"\n> "The inner height of your browser window is " + stringHeight + ".";\n"The inner height of your browser window is 655."\n')),(0,i.kt)("p",null,"Or we could simplify the above code by accessing the property and chaining the method call on the end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> "The inner height of your browser window is " + window.innerHeight.toString() + ".";\n"The inner height of your browser window is 655."\n')),(0,i.kt)("p",null,"In this case, because ",(0,i.kt)("inlineCode",{parentName:"p"},"window.innerHeight")," returns a string, we can call JavaScript string methods on it."),(0,i.kt)("h3",{id:"nested-objects-in-window"},"Nested Objects in ",(0,i.kt)("inlineCode",{parentName:"h3"},"window")),(0,i.kt)("p",null,"We can also learn about the website we are currently on by accessing the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.location")," property. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> window.location;\nLocation\xa0{ancestorOrigins: DOMStringList, href: 'https://full-time.learnhowtoprogram.com/introduction-to-programming', origin: 'https://full-time.learnhowtoprogram.com', protocol: 'https:', host: 'full-time.learnhowtoprogram.com',\xa0\u2026}\n")),(0,i.kt)("p",null,"Woah! That's a lot of information. What's happening here is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object is set to the value of another object, itself with lots of properties. This is called a ",(0,i.kt)("strong",{parentName:"p"},"nested object"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," is an object and ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," is also an object that is nested inside of the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object."),(0,i.kt)("p",null,"We can expand this object in the DevTools console to look at all of the information by clicking the triangle symbol to the left of the object, like in the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/accessing-window-properties-dev-tool.png",alt:"This image shows the window.location object expanded"})),(0,i.kt)("p",null,"As we can see, ",(0,i.kt)("inlineCode",{parentName:"p"},"window.location")," holds information about the webpage we are on, and some properties like ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," have string values, and some properties have methods as values like ",(0,i.kt)("inlineCode",{parentName:"p"},"reload: \u0192 reload()"),"."),(0,i.kt)("p",null,"Let's try accessing the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.location")," properties we just listed: ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"href"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"reload"),". Since we're accessing a property that belongs to an object which itself is a property that belongs to an object, we need to combine a series of dot notation to move through the objects to get to the property we are looking for. When we do this, we always start with the parent object, in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> window.location.host      // the host corresponds to the domain name of the site\n'full-time.learnhowtoprogram.com'\n> window.location.href      // the href is the full url of the webpage you are on\n'https://full-time.learnhowtoprogram.com/introduction-to-programming'\n")),(0,i.kt)("p",null,"Note that in the example above, the responses I get are based off of the current webpage I was on, which was ",(0,i.kt)("inlineCode",{parentName:"p"},"full-time.learnhowtoprogram.com/introduction-to-programming"),", so your response for ",(0,i.kt)("inlineCode",{parentName:"p"},"window.location.href")," will be different if you are reading this lesson within the part-time track, or are on another page."),(0,i.kt)("p",null,"To summarize, the syntax to access a property in a nested object looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// This is not real code!\n// This is pseudocode to demonstrate dot notation.\nparentObject.childObject.targetProperty\n")),(0,i.kt)("p",null,"Where the ",(0,i.kt)("inlineCode",{parentName:"p"},"childObject")," is a property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"parentObject"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"targetProperty")," is the data that we're seeking."),(0,i.kt)("p",null,"Now let's try out this ",(0,i.kt)("inlineCode",{parentName:"p"},"window.location")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> window.location.reload()\n")),(0,i.kt)("p",null,"This command will reload the page! It does the exact same thing as hitting the your button's refresh/reload button."),(0,i.kt)("p",null,"Let's try another ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," method called ",(0,i.kt)("inlineCode",{parentName:"p"},"open()"),". Can you guess what this does? Try this out in your console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> window.open();\n")),(0,i.kt)("p",null,"You should see a new tab open in your browser. If you navigate back to your DevTools console, you'll also see a return value, which is the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object of the new window that you opened. As we can see in the code snippet below, when an object is not expanded in the console, the console lists its first few properties on 1 \u2013 2 lines, followed by an ellipses ",(0,i.kt)("inlineCode",{parentName:"p"},"..."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"> window.open()\nWindow\xa0{window: Window, self: Window, document: document, name: '', location: Location,\xa0\u2026}\n")),(0,i.kt)("p",null,"Now try entering this into your DevTools console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'> window.open("https://full-time.learnhowtoprogram.com/")\n')),(0,i.kt)("p",null,"Now with the argument ",(0,i.kt)("inlineCode",{parentName:"p"},'"https://full-time.learnhowtoprogram.com"')," included in the method call, a new tab is opened to full-time.learnhowtoprogram.com/. You're welcome to try other sub-domains available to Learn How to Program, such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"https://part-time.learnhowtoprogram.com"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"https://workshops.learnhowtoprogram.com"')),(0,i.kt)("h3",{id:"working-with-optional-parameters"},"Working with Optional Parameters"),(0,i.kt)("p",null,"The two ways to call ",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()")," is showing us how methods (both in JavaScript and in web browser tools) can have optional parameters. When we are able to optionally include a different number of arguments when we call a method, this means that the method is defined as having optional parameters. MDN documentation does a great job at tracking optional parameters, so if you are ever unsure if a parameter is optional, start by reviewing the docs."),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()")," as an example, see the section called ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open#parameters"},'"Parameters" on the MDN reference page for ',(0,i.kt)("inlineCode",{parentName:"a"},"window.open()")),". This is also pictured in the image below. Here, we can see two parameters, ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),', are listed as "Optional". (There are also other optional parameters that are not pictured.) '),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/new-section2-js-and-web-browsers/optional-parameters-on-mdn-window-open.png",alt:'This image shows how two window.open() parameters are listed as "Optional".'})),(0,i.kt)("p",null,"We won't worry about learning about how to write custom functions with optional parameters, but it is helpful to know that they exist and how to spot them. In the next lesson, we'll take time to review more aspects about MDN documentation for ",(0,i.kt)("inlineCode",{parentName:"p"},"window"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),", and events."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"As we can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object lets us access information about the browsing session and interact with it, like reloading the webpage. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object has properties with different values: primitives, objects, and methods! We can explore these in the DevTools console, and we can use JavaScript to manipulate that data, just like we did with ",(0,i.kt)("inlineCode",{parentName:"p"},"window.innerHeight.toString()"),"."),(0,i.kt)("p",null,"Object properties, like variable and function names, are written in lower camelCase. We use dot notation to access ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," properties, like ",(0,i.kt)("inlineCode",{parentName:"p"},"window.innerHeight")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"window.open()"),". "),(0,i.kt)("p",null,"When a ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," property itself is an object with properties, we can chain dot notation access those properties. A good example of this is ",(0,i.kt)("inlineCode",{parentName:"p"},"window.location.href"),", where we're accessing the ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," object's property called ",(0,i.kt)("inlineCode",{parentName:"p"},"location"),", and then we're accessing the ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," object's property called ",(0,i.kt)("inlineCode",{parentName:"p"},"href"),"."))}w.isMDXComponent=!0}}]);