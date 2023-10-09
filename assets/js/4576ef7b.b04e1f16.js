"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[98759],{30876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(2784);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(o),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},91485:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=o(7896),r=(o(2784),o(30876));const a={title:"\ud83d\udcd3 The Terminal and the Command Line",id:"the-terminal-and-the-command-line",slug:"the-terminal-and-the-command-line",hide_table_of_contents:!0,sidebar_position:5,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0_4_the_terminal_and_the_command_line.md"},i=void 0,l={unversionedId:"introduction-to-programming/git-html-and-css/the-terminal-and-the-command-line",id:"introduction-to-programming/git-html-and-css/the-terminal-and-the-command-line",title:"\ud83d\udcd3 The Terminal and the Command Line",description:"One of the first tools any new developer must become comfortable with is the terminal. No matter which language you learn to program in, you will use the terminal constantly.",source:"@site/docs/introduction-to-programming/1_git-html-and-css/0-4-the-terminal-and-the-command-line.md",sourceDirName:"introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/the-terminal-and-the-command-line",permalink:"/introduction-to-programming/git-html-and-css/the-terminal-and-the-command-line",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\ud83d\udcd3 The Terminal and the Command Line",id:"the-terminal-and-the-command-line",slug:"the-terminal-and-the-command-line",hide_table_of_contents:!0,sidebar_position:5,day:"monday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0_4_the_terminal_and_the_command_line.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Git, HTML & CSS Objectives",permalink:"/introduction-to-programming/git-html-and-css/git-html-&-css-objectives"},next:{title:"\ud83d\udcd3 VS Code Live Share",permalink:"/introduction-to-programming/git-html-and-css/vs-code-live-share"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Command prompts you will practice:",id:"command-prompts-you-will-practice",level:3},{value:"Important new terminology in this exercise:",id:"important-new-terminology-in-this-exercise",level:3},{value:"Exercise",id:"exercise",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Project Setup",id:"project-setup",level:3},{value:"Steps",id:"steps",level:2},{value:"Wrap-up",id:"wrap-up",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the first tools any new developer must become comfortable with is the ",(0,r.kt)("strong",{parentName:"p"},"terminal"),". No matter which language you learn to program in, you will use the ",(0,r.kt)("strong",{parentName:"p"},"terminal")," constantly."),(0,r.kt)("p",null,"Typically when we use computers we interact visually with what we see on the screen by moving our mouse and clicking. The visuals (the menus, buttons, etc) is called the graphical user interface (GUI). An example of interacting with the GUI on a computer is double clicking on a folder to open it."),(0,r.kt)("p",null,"However, when we are developing code, we often use our computer's ",(0,r.kt)("strong",{parentName:"p"},"terminal")," interface. The ",(0,r.kt)("strong",{parentName:"p"},"terminal")," is an area of the computer that allows us to interact with our computer using text-based commands instead of using our mouse. So instead of opening the folder by clicking on it, we would use the ",(0,r.kt)("strong",{parentName:"p"},"terminal")," to open that folder using a text command."),(0,r.kt)("p",null,"Why do this? The ",(0,r.kt)("strong",{parentName:"p"},"terminal")," interface allows you to navigate and work with your computer faster. Though using the terminal effectively takes time and practice so it will feel slow at first if you\u2019re new to it. Once you become more comfortable you will find that typing commands is faster than moving the mouse and clicking as a means to interact with your computer. "),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Text-based commands, better known as ",(0,r.kt)("strong",{parentName:"p"},"command prompts"),", are prompts designed to elicit an action. ",(0,r.kt)("strong",{parentName:"p"},"Command prompts")," are typed in the command line of the terminal."),(0,r.kt)("p",null,"In this practice lesson, we are going to explore a small list of command prompts most relevant to you as a beginner developer."),(0,r.kt)("h3",{id:"command-prompts-you-will-practice"},"Command prompts you will practice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mkdir")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pwd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"touch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rm"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rm -r"))),(0,r.kt)("h3",{id:"important-new-terminology-in-this-exercise"},"Important new terminology in this exercise:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"command prompt, command"),(0,r.kt)("li",{parentName:"ul"},"root"),(0,r.kt)("li",{parentName:"ul"},"directory, working directory, folder"),(0,r.kt)("li",{parentName:"ul"},"file types")),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("p",null," By the end of this exercise you should be able to use ",(0,r.kt)("strong",{parentName:"p"},"command prompts")," to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Move around your computer."),(0,r.kt)("li",{parentName:"ol"},"Create folders"),(0,r.kt)("li",{parentName:"ol"},"Create files"),(0,r.kt)("li",{parentName:"ol"},"Open VS Code from the terminal. ")),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"For Window users, the following exercise relies on you have installed Git Bash from the pre-work lesson: ",(0,r.kt)("a",{parentName:"p",href:"/pre-work/getting-started-with-intro-to-programming/introduction-to-the-command-line"},"Introduction to the Command Line")," "),(0,r.kt)("h3",{id:"project-setup"},"Project Setup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Window users!")," Open Git Bash.  "),(0,r.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/terminal-and-command-line-git-bash-logo.png",alt:"git bash logo",style:{width:"100px"}}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mac users!")," Open your built-in Bash terminal.  "),(0,r.kt)("img",{src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/misc/terminal-and-command-line-mac-terminal-logo.png",alt:"static image of mac terminal icon",style:{width:"100px"}}),(0,r.kt)("p",null,"Regardless of if you are a Mac or Windows user, the following exercise will work the same."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Let's pair program!"),(0,r.kt)("p",{parentName:"blockquote"},"We're going to complete this exercise by pair programming. We recommend reading through this entire lesson together before starting."),(0,r.kt)("p",{parentName:"blockquote"},"We can't share write access to our computer's terminal when we pair program. Well we can, but we shouldn't because it presents a security risk. Your terminal is direct access to your computer. Someone malicious could do some serious harm if they are able to write in your terminal.  "),(0,r.kt)("p",{parentName:"blockquote"},"This is how we will pair program for this exercise:"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"If pairing remotely:"),(0,r.kt)("br",{parentName:"p"}),"\n","The driver shares their screen in Discord so everyone in the pair group can see their terminal. Recommend everyone goes through the following lesson once as the driver."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"If everyone in the pair group is sharing a computer:"),(0,r.kt)("br",{parentName:"p"}),"\n","In this case, everyone actually does have access to the terminal. You don't need to share your screen in Discord. The driver will have control over the mouse and keyboard. The navigator(s) watch the driver. Recommend everyone goes through the following lesson once as the driver."),(0,r.kt)("p",{parentName:"blockquote"},"As you write code, do your best to talk out loud what you are doing or what you are thinking. Don't be afraid to attempt when you don't know what to do. This helps you practice your technical communication skills and stay in communication with the navigator."),(0,r.kt)("p",{parentName:"blockquote"},"The navigator is responsible for reading the instructions to the driver and watching for errors. As a navigator, do your best to keep the driver on track to achieve the goal of the exercise. Don't be afraid to kindly call out any typos the moment you see them.  ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the Desktop. In your terminal, type:\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/Desktop\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"tilde")," symbol (sounds like \u201ctil-duh\u201d), sometimes called \u201cthe squiggly line,\u201d represents the ",(0,r.kt)("strong",{parentName:"p"},"root directory")," of your computer. The ",(0,r.kt)("strong",{parentName:"p"},"root directory")," is the topmost ",(0,r.kt)("strong",{parentName:"p"},"folder")," in a file system. "),(0,r.kt)("p",null,"The terms ",(0,r.kt)("strong",{parentName:"p"},"directory")," and ",(0,r.kt)("strong",{parentName:"p"},"folder")," are often used interchangeably. For the majority of use cases, they both mean the same thing. If it helps to make some distinction, the term ",(0,r.kt)("strong",{parentName:"p"},"directory "),"may in some context** ",(0,r.kt)("strong",{parentName:"p"},"refer to how documents files and folders are structured on your computer. Whereas a "),"folder **is simply a space that stores files. Though again, don\u2019t be surprised if these two terms are used as synonyms."),(0,r.kt)("p",null,"For these lessons we will use the term ",(0,r.kt)("strong",{parentName:"p"},"directory")," in most cases."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd")," stands for \u201cchange directory.\u201d This command allows you to navigate your computer via the terminal. Putting it all together, ",(0,r.kt)("inlineCode",{parentName:"p"},"cd ~/Desktop")," reads basically as \u201cnavigate to the Desktop from the root directory.\u201d"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Confirm you are in the Desktop. In the terminal, type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pwd \n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pwd")," command stands for \u201cprint working directory.\u201d  \u201cWorking\u201d as in \u201ccurrent\u201d. This command writes the full path name of your working directory. In other words, the directory you are currently in. Directories are separated by a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," slash symbol. From left to right, the ",(0,r.kt)("strong",{parentName:"p"},"root directory")," is represented by the first ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," slash on the left. The last ",(0,r.kt)("strong",{parentName:"p"},"directory")," listed by name is on the far right. The last ",(0,r.kt)("strong",{parentName:"p"},"directory")," listed is your current working ",(0,r.kt)("strong",{parentName:"p"},"directory"),"."),(0,r.kt)("p",null," In your terminal, the response to ",(0,r.kt)("inlineCode",{parentName:"p"},"pwd")," should look like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/Desktop")),(0,r.kt)("p",null,"\u201cpath/to/\u201d is just shorthand to represent any directories between your ",(0,r.kt)("strong",{parentName:"p"},"root directory")," and the ",(0,r.kt)("strong",{parentName:"p"},"Desktop"),". It doesn\u2019t matter what the in-between ",(0,r.kt)("strong",{parentName:"p"},"directories")," are called (they will vary depending on user settings and operating system) as long as the last ",(0,r.kt)("strong",{parentName:"p"},"directory")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Desktop"),"."),(0,r.kt)("p",null,"Another way you can confirm you are in the right directory is use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command is short for \u201clist.\u201d In your terminal, type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ls\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command lists all ",(0,r.kt)("strong",{parentName:"p"},"files")," and ",(0,r.kt)("strong",{parentName:"p"},"directories")," in your current working directory. The response to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command in your terminal will be a list of any ",(0,r.kt)("strong",{parentName:"p"},"files")," and ",(0,r.kt)("strong",{parentName:"p"},"directories (folders) "),"on your desktop."),(0,r.kt)("p",null,"Your terminal will _likely _color code the items in the list depending on the type of ",(0,r.kt)("strong",{parentName:"p"},"file")," or if the item is a ",(0,r.kt)("strong",{parentName:"p"},"directory"),". The exact color coding depends on your user settings. There is more to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command but this is all that is most relevant to you at this time."),(0,r.kt)("p",null,"We have talked about ",(0,r.kt)("strong",{parentName:"p"},"files")," without giving them a technical description. All you need to know at this time is that a ",(0,r.kt)("strong",{parentName:"p"},"file")," is typically identified by a name followed by a ",(0,r.kt)("inlineCode",{parentName:"p"},"dot")," extension type. For example, these are all examples of files: ",(0,r.kt)("inlineCode",{parentName:"p"},"notes.txt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"favSong.mp3"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"towerDefense.exe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"worksheet.pdf"),". There are many more file types not listed here."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("strong",{parentName:"li"},"directory")," on the Desktop. In your terminal type: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir my-first-project\n")),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir")," stands for \u201cmake directory.\u201d What do you think it does? Look at your Desktop and you should see a new ",(0,r.kt)("strong",{parentName:"p"},"directory (folder)")," called \u201cmy-first-project\u201d."),(0,r.kt)("p",null,"Try now making several new directories naming them whatever you want. "),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Delete those extra ",(0,r.kt)("strong",{parentName:"li"},"directories")," on the Desktop. In the terminal, type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm name-of-directory\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rm")," command stands for \u201cremove.\u201d  It can be used to delete files too. To delete a directory that is not empty, you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"rm -r name-of-directory"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Caution!\n",(0,r.kt)("inlineCode",{parentName:"p"},"rm -r")," can be a dangerous command if you don't know what you are doing. The ",(0,r.kt)("inlineCode",{parentName:"p"},"-r"),' is a command option that stands for "recursive." Basically, this option will delete the directory AND everything in the directory.\nIf you are new to using command prompts, don\'t use this command option anywhere other than your Desktop and use it carefully. If you get an error or warning message when using this command, it is safer for now to just use your mouse and right-click to delete the directory and its contents.')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tip!\nIn your terminal, use the up and down arrow keys to use previously entered commands.\nYou can also press ",(0,r.kt)("inlineCode",{parentName:"p"},"tab"),' on your keyboard to automatically complete command options instead of needing to type everything out.\nFor example, let\'s pretend you have a folder in your current working directory called "tasmanianDevilPics" and you want to navigate to it.  You can type ',(0,r.kt)("inlineCode",{parentName:"p"},"cd ta")," in your terminal, press tab, and the folder name will autocomplete.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Navigate into the \u201cmy-first-project\u201d directory.",(0,r.kt)("br",{parentName:"li"}),"You have all the knowledge necessary to complete this step without instruction.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Let's Pair Program!\nAre you and your pair stuck on this step? If so, ask other pair groups in your cohort for guidance. If working remotely, use the text-channels in Discord and don't be shy about joining other voice-channels."),(0,r.kt)("p",{parentName:"blockquote"},"If other pair groups are not able to help, reach out to an instructor.")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Once you are in the \u201cmy-first-project\u201d directory, create a ",(0,r.kt)("strong",{parentName:"li"},"file"),". In the terminal, type:  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"touch hi.txt \n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"touch")," command is commonly used to create ",(0,r.kt)("strong",{parentName:"p"},"files"),". The name of the command ",(0,r.kt)("inlineCode",{parentName:"p"},"touch")," is not very indicative to what it's used for; it's actually not an abbreviation for anything. The name ",(0,r.kt)("inlineCode",{parentName:"p"},"touch")," is meant to imply the file was modified in some way without opening, saving or closing it. Indeed, you just created (counts as modifying) a file without opening it at all. "),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Open the current working directory, \u201cmy-first-project\u201d, in VS Code. In terminal, type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"code .\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," command opens VS Code application and the \u201cdot\u201d ",(0,r.kt)("inlineCode",{parentName:"p"},".")," means to open everything in the current working directory.  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note!\nIf you are getting an error message that states \u201ccode command not found\u201d you need to revisit this prework lesson: ",(0,r.kt)("a",{parentName:"p",href:"/pre-work/getting-started-with-intro-to-programming/text-editor-visual-studio-code"},"Text Editor: Visual Studio Code"),".")),(0,r.kt)("p",null,"If successful, VS Code will open and you will see the file ",(0,r.kt)("inlineCode",{parentName:"p"},"hi.txt")," nested in a directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"my-first-project")," in the file explorer in the left of VS Code."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Let's Pair Program!\nBefore you and your pair move on, switch who is the driver and who is the navigator and repeat the exercise above. This gives everyone an opportunity to get hands-on practice."),(0,r.kt)("p",{parentName:"blockquote"},'As the new driver, you need to create a new directory on your Desktop called "my-first-project". Next, you need to create a file inside that directory called "hi.txt". Lastly, open the newly created directory in VS Code. Challenge your memory by completing the steps above in the terminal without referring to the lessons. Remember to share your screen in Discord. If you are not sure what to do, that\'s okay! Let the navigator guide you.'),(0,r.kt)("p",{parentName:"blockquote"},"As the new navigator, if the driver wants you to guide them, first challenge your memory by guiding the driver without referring to the lessons. "),(0,r.kt)("p",{parentName:"blockquote"},"If either of you are not sure what to do without referring to the lessons - don't worry about it! This is just an optional extra challenge to gauge your memory but it is not an indicator of how well you comprehend the material.  ")),(0,r.kt)("h2",{id:"wrap-up"},"Wrap-up"),(0,r.kt)("p",null,"Excellent! You should now have a beginner's understanding of command prompts. There are many other command prompts but the ones we just practiced are the most relevant to you at this time."),(0,r.kt)("p",null,"More experienced developers may rely solely on interacting with the terminal and using command prompts to navigate their computer. As a beginner though, that is not an expectation you should place on yourself. It is completely fine to use the mouse and click to navigate and perform actions using the user interface (what you see on the screen). You\u2019ll get more practice interacting with the terminal and using command prompts over time."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note!\nIf you are unfamiliar with the inner workings of a computer, it is best to use terminal command prompts only on your Desktop for now. This way you can immediately see the changes from your Desktop.\nFuture lessons will not remind you to navigate to your Desktop. Going forward we will assume you know best where on your computer you want to keep coding projects and practice exercises.")))}d.isMDXComponent=!0}}]);