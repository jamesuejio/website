(window["webpackJsonpjames-react"]=window["webpackJsonpjames-react"]||[]).push([[0],{179:function(e,a,t){},180:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(18),i=t.n(o),s=(t(179),t(180),t(24),t(80)),c=t(81),l=t(83),d=t(82),m=t(84),h=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.width;return n.a.createElement("div",{className:"header-container",style:{backgroundColor:this.props.color,width:e}},n.a.createElement("div",null,this.props.children))}}]),a}(r.Component),u=(t(181),n.a.createClass({displayName:"Jazz",render:function(){return n.a.createElement("div",{className:"jazz-container"},n.a.createElement("div",{className:"top-container"},n.a.createElement("img",{className:"jazz-pict",src:"nathanjames.jpg",alt:"",width:"350px",height:"auto"}),n.a.createElement("div",{className:"jazz-description"},n.a.createElement("div",{className:"header"},"Nathan Le and I have been playing music together for about a semester. Here are some recordings!"),n.a.createElement("div",{className:"audio-title"},"All The Things You Are"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:"all.m4a"}),"Your browser does not support the audio tag."),n.a.createElement("div",{className:"audio-title"},"Alice In Wonderland/Someday My Prince Will Come Medley"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:"alice.m4a"}),"Your browser does not support the audio tag."),n.a.createElement("div",{className:"audio-title"},"Strasbourg St. Denis"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:"stras.m4a"}),"Your browser does not support the audio tag."),n.a.createElement("div",{className:"audio-title"},"East Of The Sun"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:"east.m4a"}),"Your browser does not support the audio tag."))),n.a.createElement("div",{className:"bottom-container"},n.a.createElement("div",{className:"jazz-description"},n.a.createElement("div",{className:"header"},"Here are some recordings of my jazz combo, Village Vanguard!"),n.a.createElement("div",{className:"audio-title"},"Oleo"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:"oleo.wav"}),"Your browser does not support the audio tag."),n.a.createElement("div",{className:"audio-title"},"Black Narcissus"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:"black.wav"}),"Your browser does not support the audio tag."),n.a.createElement("div",{className:"audio-title"},"Song For Bilbao"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:"bilbao.wav"}),"Your browser does not support the audio tag."),n.a.createElement("div",{className:"audio-title"},"Friday Night At The Cadillac Club"),n.a.createElement("audio",{controls:!0},n.a.createElement("source",{src:"friday.wav"}),"Your browser does not support the audio tag.")),n.a.createElement("img",{className:"jazz-pict",src:"band.jpg",alt:"",width:"350px",height:"auto"})))}})),p=n.a.createClass({displayName:"RightBody",render:function(){var e=this,a=this.props.width;return n.a.createElement("div",{className:"right",style:{width:a}},n.a.createElement(h,{color:"#fff",width:a},n.a.createElement("div",{className:"header-items header-right",onClick:function(){return e.scrollToDiv("contact")}},"Contact"),n.a.createElement("div",{className:"header-items header-right",onClick:function(){return e.scrollToDiv("jazz")}},"Jazz"),n.a.createElement("div",{className:"header-items header-right",onClick:function(){return e.scrollToDiv("intro")}},"Intro")),n.a.createElement("div",{className:"header-padding"}),n.a.createElement("div",null,n.a.createElement("div",{className:"header-align",ref:"intro"},"... and I am a musician."),n.a.createElement("img",{id:"music",src:"/musicman.jpg",width:"200px",height:"200px",alt:""}),n.a.createElement("p",{className:"intro-paragraph"},"Music has been a huge part of my life since I was young. I learned piano but quickly switched to guitar. In middle school I formed a rock band and performed at places like The Fillmore and Bimbo's Cafe. But alas I craved complexity and switched to jazz. In high school I joined the school's jazz band."),n.a.createElement("p",{className:"intro-paragraph"},"I decided to further my music education and attended the University of Berkeley as a Music minor. I joined UC Jazz played in jazz combos for all four years. I performed in cafes, restaurants, on campus, and hotels. Check out"," ",n.a.createElement("span",{onClick:function(){return e.scrollToDiv("jazz")}},"Jazz "),"for some jazz recordings. Post-grad, I am recording a fusion EP."),n.a.createElement("div",{className:"header-topic",ref:"jazz"},"Jazz"),n.a.createElement(u,null),n.a.createElement("div",{className:"header-topic",ref:"contact"},"Contact"),n.a.createElement("div",{className:"contact-container"},n.a.createElement("p",{className:"contact-paragraph"},"James Uejio"),n.a.createElement("p",{className:"contact-paragraph"},"Jazz Guitarist, Musician, Producer, Performer"),n.a.createElement("p",{className:"contact-paragraph"},"jamesuejio@berkeley.edu"))))},scrollToDiv:function(e){var a=i.a.findDOMNode(this.refs[e]);a&&(a.scrollIntoView({block:"start",inline:"nearest"}),document.getElementsByClassName("right")[0].scrollTop-=40)}}),g=(t(79),n.a.createClass({displayName:"ProjectTile",render:function(){var e=this.props,a=e.image,t=e.link,r=e.header,o=e.description,i=e.technologies;return n.a.createElement("div",{className:"project-container"},n.a.createElement("a",{className:"project-tile",href:t,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"project-text"},n.a.createElement("div",{className:"project-header"},r),n.a.createElement("div",{className:"project-description"},o),n.a.createElement("div",{className:"project-technologies"},i)),n.a.createElement("img",{className:"project-image",src:a,alt:""})))}})),f=n.a.createClass({displayName:"LeftBody",render:function(){var e=this,a=this.props.width;return n.a.createElement("div",{className:"left",style:{width:a}},n.a.createElement(h,{color:"#005b96",width:a},n.a.createElement("div",{className:"header-items header-left",onClick:function(){return e.scrollToDiv("intro")}},"Intro"),n.a.createElement("div",{className:"header-items header-left",onClick:function(){return e.scrollToDiv("projects")}},"Projects"),n.a.createElement("div",{className:"header-items header-left",onClick:function(){return e.scrollToDiv("TA")}},"TA"),n.a.createElement("div",{className:"header-items header-left",onClick:function(){return window.open("/resume.pdf")}},"Resume"),n.a.createElement("div",{className:"header-items header-left",onClick:function(){return e.scrollToDiv("contact")}},"Contact")),n.a.createElement("div",{className:"header-padding"}),n.a.createElement("div",{className:"left-body"},n.a.createElement("div",{className:"header-align",ref:"intro"},"... and I am a computer scientist."),n.a.createElement("img",{src:"/headpict.jpg",width:"200px",height:"200px",alt:""}),n.a.createElement("p",{className:"intro-paragraph"},"My CS life truly began junior year of high school. I taught myself Java to skip to AP Computer Science, and there I knew I wanted to be a computer scientist. I loved having the power to manipulate and create something out of just bits and pieces (pun intended)."),n.a.createElement("p",{className:"intro-paragraph"},"I decided to further my programming education and attended the University of Berkeley as a Computer Science major. There I expanded my knowledge by taking CS courses and becoming the head TA for the introductory CS course,"," ",n.a.createElement("a",{href:"https://cs61a.org/",target:"_blank",rel:"noopener noreferrer"},"CS 61A"),". I interned at"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.pge.com/"},"PG&E")," ","and"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.appdynamics.com/AppDynamics"},"AppDynamics")," ","and learned so much about industry and more about programming. The summer of my junior year, I interned at"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://liveramp.com/"},"LiveRamp")," ","as a full stack intern, and that's when I knew I wanted to do full stack web development."),n.a.createElement("p",{className:"intro-paragraph"},"This past year, I have been working full time as a Full Stack Web Developer at"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://wish.com"},"Wish"),". I owned the post purchase experience and rebuilt the customer support chat bot. I worked on countless experiments to improve key business metrics. I also mentored multiple interns and attended leadership workshops."),n.a.createElement("div",{className:"header-topic",ref:"projects"},"Projects"),n.a.createElement("p",{className:"intro-paragraph"},"All code located on"," ",n.a.createElement("a",{href:"https://github.com/jalagar"},"Github repo")),n.a.createElement("div",{className:"all-projects"},n.a.createElement(g,{image:"/website.png",link:"https://github.com/jalagar/website",header:"This website!",description:"This is my website :). Built entirely from scratch using no 3rd party libraries.",technologies:"HTML, CSS, ReactJS"}),n.a.createElement(g,{image:"/calendar.png",link:"https://github.com/MaxFangX/calendar-analytics",header:"Calendar Analytics",description:"Calendar Analytics takes your calendar and shows you what you've done over the years. The most sophisticated way to analyze your time.",technologies:"AngularJS, Django, HTML, CSS, Bower"}),n.a.createElement(g,{image:"/introspection.png",link:"https://www.youtube.com/watch?v=66v9s0JetyQ",header:"Introspection",description:"Webapp to help quantify and track mental health. Users type in a diary entry and visualize the corresponding emotions.",technologies:"D3, Flask, JQuery, HTML, CSS"}),n.a.createElement(g,{image:"/music.jpg",link:"/syncopation.m4a",header:"Syncopation",description:"Music project to explore computer generated music. Created music that analyzed transients on typing noises and created melody that matches rhythm exactly.",technologies:"OpenMusic, Lisp"}),n.a.createElement(g,{image:"/soundfyre.png",link:"http://soundfyre.net/",header:"SoundFyre",description:"Hackathon project to help underground musicians find other musicians to collaborate with and find a local fan base. Can upload audio and a marker will drop on their geolocation.",technologies:"HTML, CSS, JS, Google Maps API"})),n.a.createElement("div",{className:"header-topic",ref:"TA"},"TA"),n.a.createElement("p",{className:"intro-paragraph"},"If you want to book an appointment,"," ",n.a.createElement("a",{href:"https://calendar.google.com/calendar/selfsched?sstoken=UU9XSzI2bDg0dE50fGRlZmF1bHR8ZjQ4NmQ4ZWZhY2Y5NzU0YjBhZWZhNTAxYzliMDJjMDI"},"click here!")," ","Also check out the"," ",n.a.createElement("a",{href:"https://www.youtube.com/channel/UCuteugW6eO65Awk83I6ehoA/featured"},"CS 61A Youtube channel")," ","which has tons of walkthrough videos. TAs and I spent many hours making the videos, so hope they help!"),n.a.createElement("div",{className:"header-topic",ref:"contact"},"Contact"),n.a.createElement("div",{className:"contact-container"},n.a.createElement("p",{className:"contact-paragraph"},"James Uejio"),n.a.createElement("p",{className:"contact-paragraph"},"Full Stack Developer, Leader, Teacher"),n.a.createElement("p",{className:"contact-paragraph"},"jamesuejio@berkeley.edu")),n.a.createElement("a",{className:"intro-paragraph",href:"https://www.linkedin.com/in/james-uejio-479383a1",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"/linkedin.png",height:"40px",alt:""})),n.a.createElement("a",{className:"intro-paragraph",href:"https://github.com/jalagar",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"/github.png",height:"40px",alt:""}))))},scrollToDiv:function(e){var a=i.a.findDOMNode(this.refs[e]);a&&(a.scrollIntoView({block:"start",inline:"nearest"}),document.getElementsByClassName("left")[0].scrollTop-=40)}}),v=n.a.createClass({displayName:"CircleSlider",render:function(){return window.onload=this.addListeners,n.a.createElement("div",{className:"circle-slider",id:"slider"},n.a.createElement("div",{className:"circle-inner"},"\u27fa"))},addListeners:function(){document.getElementById("slider").addEventListener("mousedown",this.mouseDown,!1),window.addEventListener("mouseup",this.mouseUp,!1)},divMove:function(e){document.getElementById("slider").style.left=e.clientX-23+"px",e.clientX>window.innerWidth/2?(document.getElementsByClassName("left")[0].style.zIndex=2,document.getElementsByClassName("right")[0].style.zIndex=1,this.props.moveLeft(e.clientX+"px")):(document.getElementsByClassName("right")[0].style.zIndex=2,document.getElementsByClassName("left")[0].style.zIndex=1,this.props.moveRight(window.innerWidth-e.clientX+"px"))},mouseUp:function(){var e=document.getElementsByClassName("Appdown")[0];void 0!==e&&(e.className="App"),window.removeEventListener("mousemove",this.divMove,!0)},mouseDown:function(e){document.getElementsByClassName("App")[0].className="Appdown",window.addEventListener("mousemove",this.divMove,!0)}}),E=n.a.createClass({displayName:"App",getInitialState:function(){return{leftWidth:"50%",rightWidth:"50%"}},render:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"App"},n.a.createElement(v,{moveLeft:this.moveLeft,moveRight:this.moveRight}),n.a.createElement("div",{className:"flexicution"},n.a.createElement("div",{className:"header-james"},n.a.createElement("div",null,"Hi! I'm James Uejio")),n.a.createElement(f,{width:this.state.leftWidth}),n.a.createElement(p,{width:this.state.rightWidth}))))},moveLeft:function(e){this.setState({leftWidth:e})},moveRight:function(e){this.setState({rightWidth:e})}}),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(n.a.createElement(E,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()},24:function(e,a,t){},79:function(e,a,t){},85:function(e,a,t){e.exports=t(182)}},[[85,1,2]]]);
//# sourceMappingURL=main.96ef56b4.chunk.js.map