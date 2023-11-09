"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[90834],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const i={title:"\ud83d\udcd3 Conditional Rendering",id:"conditional-rendering",slug:"conditional-rendering",hide_table_of_contents:!0,sidebar_position:23,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1e_conditional_rendering.md"},o=void 0,l={unversionedId:"react/react-fundamentals/conditional-rendering",id:"react/react-fundamentals/conditional-rendering",title:"\ud83d\udcd3 Conditional Rendering",description:"In this lesson, we'll cover conditional rendering. Conditional rendering is exactly what it sounds like \u2014 using a conditional to determine what content should be rendered. Conditional rendering is a great example of local state and it's very common in dynamic applications. It's really also just mostly plain old JavaScript.",source:"@site/docs/react/3_react-fundamentals/1e-conditional-rendering.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/conditional-rendering",permalink:"/react/react-fundamentals/conditional-rendering",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"\ud83d\udcd3 Conditional Rendering",id:"conditional-rendering",slug:"conditional-rendering",hide_table_of_contents:!0,sidebar_position:23,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1e_conditional_rendering.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Adding Local State",permalink:"/react/react-fundamentals/adding-local-state"},next:{title:"\ud83d\udcd3 Updating State with Events",permalink:"/react/react-fundamentals/updating-state-with-events"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this lesson, we'll cover ",(0,a.kt)("strong",{parentName:"p"},"conditional rendering"),". Conditional rendering is exactly what it sounds like \u2014 using a conditional to determine what content should be rendered. Conditional rendering is a great example of local state and it's very common in dynamic applications. It's really also just mostly plain old JavaScript."),(0,a.kt)("p",null,"We'll only need to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method in our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component in this lesson. Because this is the first class component we are building, a quick refresher: class components always need to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method. The code we put inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method determines the content that will be rendered for the user."),(0,a.kt)("p",null,"Let's add a condition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketControl")," component now:"),(0,a.kt)("div",{class:"filename"},"src/components/TicketControl.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"...\n\nclass TicketControl extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      formVisibleOnPage: false\n    };\n  }\n\n  render(){\n    let currentlyVisibleState = null;\n    if (this.state.formVisibleOnPage) {\n      currentlyVisibleState = <NewTicketForm />\n    } else {\n      currentlyVisibleState = <TicketList />\n    }\n    return (\n      <React.Fragment>\n        {currentlyVisibleState}\n      </React.Fragment>\n    );\n  }\n\n}\n\n...\n")),(0,a.kt)("p",null,"First, we create a variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"currentlyVisibleState")," and set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," because we haven't determined which component should be rendered yet."),(0,a.kt)("p",null,"Next, we can access any property in ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state")," with dot notation just as we would with any other JavaScript object. If ",(0,a.kt)("inlineCode",{parentName:"p"},"this.state.formVisibleOnPage")," is true, the ",(0,a.kt)("inlineCode",{parentName:"p"},"currentlyVisibleState")," will be set to our ",(0,a.kt)("inlineCode",{parentName:"p"},"NewTicketForm")," component. Otherwise, our ",(0,a.kt)("inlineCode",{parentName:"p"},"currentlyVisibleState")," will be set to our ",(0,a.kt)("inlineCode",{parentName:"p"},"TicketList")," component."),(0,a.kt)("p",null,"Note that this code is just JavaScript, ",(0,a.kt)("strong",{parentName:"p"},"not")," JSX. We can use plain old JavaScript outside of our ",(0,a.kt)("inlineCode",{parentName:"p"},"return()")," statement. We only need to use JSX and curly braces for evaluation inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"return()"),". We do set the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"currentlyVisibleState")," to React components, but this is just like setting the value of a variable to any other HTML element."),(0,a.kt)("p",null,"Finally, in our ",(0,a.kt)("inlineCode",{parentName:"p"},"return()")," statement, we use JSX curly braces to evaluate which component should be rendered."),(0,a.kt)("p",null,"That's all there is to it. If we run our application again, our ticket list will be showing because that is the default state of our page. However, we can't toggle anything yet!"),(0,a.kt)("p",null,"In the next lesson, we'll learn how to update our local state with an event."))}u.isMDXComponent=!0}}]);