(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{312:function(e,t,a){e.exports=a(757)},317:function(e,t,a){},319:function(e,t,a){},380:function(e,t){},382:function(e,t){},414:function(e,t){},415:function(e,t){},484:function(e,t){},586:function(e,t){},757:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(174),o=a.n(l),c=(a(317),a(16)),i=a(17),s=a(19),m=a(18),u=a(20),p=(a(319),a(26)),h=a.n(p),d=a(86),g=a.n(d),b=a(175),E=a.n(b),f=a(308),v=a.n(f),y=a(118),w=a.n(y),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).scrollTo=function(){w()(a.props.element,{duration:700})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a.Link,{onClick:this.scrollTo},this.props.text)}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{bg:"light",variant:"light",fixed:"top",expand:"lg"},r.a.createElement(v.a,null,r.a.createElement(g.a.Brand,{href:"#home"},"Ryan Arnouk"),r.a.createElement(g.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(g.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(j,{element:".about",text:"About"}),r.a.createElement(j,{element:".projects",text:"Projects"}),r.a.createElement(j,{element:".skills",text:"Skills"}),r.a.createElement(j,{element:".blog",text:"Blog"}),r.a.createElement(j,{element:".contact",text:"Contact"})))))}}]),t}(n.Component),O=a(309),S=a.n(O),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).hover=function(){a.setState({mouseOver:!0})},a.hoverLeave=function(){a.setState({mouseOver:!1})},a.state={mouseOver:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"square",onMouseEnter:this.hover,onMouseLeave:this.hoverLeave},r.a.createElement("div",{className:"content column"},r.a.createElement("div",{className:"portfolioblock"},this.state.mouseOver?r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement("div",{style:{color:"white",position:"absolute",zIndex:2,left:"42%",top:"20%"}},r.a.createElement("h3",{style:{fontSize:22}},"Link"),r.a.createElement(h.a,{name:"link",style:{color:"black",backgroundColor:"white",cursor:"pointer",borderRadius:"0.2em",textAlign:"center"},size:"3x",onClick:function(){return window.open(e.props.url)}}))),r.a.createElement("div",{className:"image-wrap-grey"},r.a.createElement("img",{src:this.props.source,className:"project-image",alt:"project",style:this.props.styling}),r.a.createElement("p",{style:{color:"white",fontSize:"1em"}},this.props.info))):r.a.createElement("div",{className:"image-wrap"},r.a.createElement("img",{src:this.props.source,className:"project-image",alt:"project",style:this.props.styling}),r.a.createElement("p",{style:{color:"white",fontSize:"1em"}},this.props.info)))))}}]),t}(n.Component),x=a(310),C=a.n(x),N=a(40),I=a.n(N),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={blogposts:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;C()("https://cors-anywhere.herokuapp.com/http://azbo400.github.io/Blog").then(function(t){var a=[],n=[],r=[],l=[],o=[];I()(".blog-post-preview > h1",t).each(function(){a.push(I()(this).text())}),I()(".blog-post-preview > h2",t).each(function(){n.push(I()(this).text())}),I()(".blog-post-preview > p",t).each(function(){r.push(I()(this).text())}),I()(".blog-post-preview > h1 > a",t).each(function(){l.push("http://azbo400.github.io"+I()(this).attr("href"))});for(var c=0;c<4;c++)o.push({title:a[c],date:n[c],text:r[c],url:l[c]});e.setState({blogposts:o}),e.setState({title:a}),e.setState({date:n}),e.setState({text:r})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return null!==this.state.blogposts?r.a.createElement("div",null,Object.keys(this.state.blogposts).map(function(t){return r.a.createElement("div",{key:t},r.a.createElement("h1",{style:{fontSize:22}},e.state.blogposts[t].title),r.a.createElement("h3",{style:{fontSize:17}},e.state.blogposts[t].date),r.a.createElement("p",{style:{fontSize:15}},e.state.blogposts[t].text," ",r.a.createElement("a",{href:e.state.blogposts[t].url,target:"_blank",rel:"noopener noreferrer"},"Read More")),r.a.createElement("hr",{className:"line"}))})):r.a.createElement("div",null,r.a.createElement("p",null,"Could not load blog posts"))}}]),t}(n.Component),B=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://twitter.com/ryanarnoukk",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"twitter"})),r.a.createElement("a",{href:"https://github.com/Azbo400",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"github"})),r.a.createElement("a",{href:"https://freecodecamp.com/azbo400",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"free-code-camp"})),r.a.createElement("a",{href:"https://instagram.com/ryanarnouk",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"instagram"})))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e="javascript_form",t={access_token:"ueppltvzre0r9knqi0lf79vj"};var a=document.getElementById("js_send");a.onclick=function(){a.value="Sending\u2026",a.disabled=!0;var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&200==n.status?window.location=window.location.pathname+"?message=Email+Successfully+Sent%21&isError=0":4==n.readyState&&(n.response,window.location=window.location.pathname+"?message=Email+could+not+be+sent.&isError=1")};var r=document.querySelector("#"+e+" [name='subject']").value,l=document.querySelector("#"+e+" [name='text']").value;t.subject=r,t.text=l;var o=function(e){var t=[];for(var a in e)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")}(t);return n.open("POST","https://postmail.invotes.com/send",!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send(o),!1},document.getElementById(e).addEventListener("submit",function(e){e.preventDefault()})}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"block",width:"50%"}},r.a.createElement("form",{id:"javascript_form"},r.a.createElement("p",null,"Please put your email to allow me to get back with you."),r.a.createElement("input",{type:"text",name:"subject",placeholder:"Subject",className:"subject"})," ",r.a.createElement("br",null),r.a.createElement("textarea",{name:"text",placeholder:"Message",className:"message"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",id:"js_send",value:"Send",className:"submitbutton"})))}}]),t}(n.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"social-icons-black"},r.a.createElement("a",{href:"https://twitter.com/ryanarnoukk",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"twitter"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/Azbo400",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"github"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://freecodecamp.com/azbo400",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"free-code-camp"})),r.a.createElement("br",null),r.a.createElement("a",{href:"https://instagram.com/ryanarnouk",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h.a,{name:"instagram"})))}}]),t}(n.Component),M=a(311),_=a.n(M),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("div",{className:"landing-page"},r.a.createElement("div",{className:"landing-page-text"},r.a.createElement("p",null,r.a.createElement("strong",null,"Hello,")," my name is ",r.a.createElement("em",{className:"highlight"}," Ryan Arnouk")," and I'm an aspiring software developer."),r.a.createElement(B,{style:{marginRight:"10%"}})),r.a.createElement("div",{style:{position:"absolute",left:"50%",bottom:14}},r.a.createElement("div",{style:{color:"white",position:"relative",left:"-50%",textAlign:"center",cursor:"pointer"},onClick:function(){return w()(".about",{duration:700})}},r.a.createElement("p",{style:{fontSize:22,margin:0}},"Read More"),r.a.createElement(h.a,{name:"caret-down",size:"2x",style:{left:"50%"}})))),r.a.createElement("div",{className:"about"},r.a.createElement("h3",{style:{fontSize:18,color:"grey",margin:0}},"ABOUT ME"),r.a.createElement("h1",{style:{marginBottom:13,fontSize:25}},"Hi, I'm Ryan."),r.a.createElement("p",{style:{fontSize:18}},"I am a 15 year old high school student who is passionate about computer programming. Specializing in web development and JavaScript, I have been developing applications and websites for 4 years. While not working on web development, I enjoy mobile app development with React Native, programming with Python, and machine learning. ",r.a.createElement("br",null),r.a.createElement("br",null)," Currently, I am working on my web app ",r.a.createElement("a",{href:"https://discover-machinelearning.com"},"Discover Machine Learning")," an app that introduces machine learning to kids in an easy to use build block environment. I am also working on getting better at programming and become proficient in languages such as Java."),r.a.createElement("hr",null),r.a.createElement("ul",{style:{listStyleType:"none",width:"40%  ",padding:0}},r.a.createElement("li",null,"Passionate Learner"),r.a.createElement("hr",null),r.a.createElement("li",null,"Interest in Computers and Hardware"),r.a.createElement("hr",null),r.a.createElement("li",null,"Always Working to Improve"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"projects"},r.a.createElement("div",{className:"inside-project"},r.a.createElement("h3",{style:{fontSize:18,color:"grey",margin:0}},"PROJECTS"),r.a.createElement("h1",{style:{marginBottom:13,fontSize:25,color:"white"}},"What I am currently up too."),r.a.createElement("div",{className:"square-container"},r.a.createElement(z,{source:"/img/mywebsite.png",info:"I developed this personal website using React.js. Previous iterations of my personal web page have been made with Gatsby.",url:"https://github.com/Azbo400/Azbo400.github.io"}),r.a.createElement(z,{source:"/img/codepen.png",info:"I have completed many front and back-end freeCodeCamp projects on my GitHub and on my Codepen.",url:"https://codepen.io/azbo400/pens/popular/"}),r.a.createElement(z,{source:"/img/react-redux-authentication.png",info:"React Redux Authentication Biolerplate is a biolerplate application I developed that allows users to create accounts, login, logout, etc using Redux and JSON web tokens.",url:"https://github.com/Azbo400/react-redux-authentication-boilerplate"}),r.a.createElement(z,{source:"/img/discover-machine-learning.png",info:"Discover Machine Learning is an web app introducing machine learning to students and kids lacking a computer science background. The idea is to introduce the ever growing world of machine learning to kids.",url:"http://discover-machinelearning.com"}),r.a.createElement(z,{source:"/img/blogapp.png",info:"My blog app is where I occasionally write articles about my programming life, tutorials, and what I am currently up too.",url:"http://azbo400.github.io/Blog"}),r.a.createElement(z,{source:"/img/github.png",info:"You can check out the rest of my projects on my GitHub page.",url:"https://github.com/Azbo400/"})))),r.a.createElement("div",{className:"skills"},r.a.createElement("h3",{style:{fontSize:18,color:"grey",margin:0}},"SKILLS"),r.a.createElement("h1",{style:{marginBottom:13,fontSize:25}},"What I specialize in."),r.a.createElement("ul",null,r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Node JS"),r.a.createElement("li",null,"Python"),r.a.createElement("li",null,"WordPress"),r.a.createElement("li",null,"React Native"),r.a.createElement("li",null,"Redux")),r.a.createElement("h1",{style:{marginBottom:13,fontSize:25}},"Future 2019 Ventures"),r.a.createElement("ul",null,r.a.createElement("li",null,"More Java and C# development"),r.a.createElement("li",null,"More server-side development"),r.a.createElement("li",null,"Learn more low level development with languages such as C++ and C"),r.a.createElement("li",null,"Develop 3 more apps"),r.a.createElement("li",null,"Get better at machine learning with Tensorflow and Python"),r.a.createElement("li",null,"Blockchain"))),r.a.createElement("div",{className:"blog"},r.a.createElement("div",{className:"blog-text"},r.a.createElement("h3",{style:{fontSize:18,color:"grey",margin:0}},"BLOG"),r.a.createElement("h1",{style:{marginBottom:13,fontSize:25}},"What I am Currently Writing About."),r.a.createElement(R,null),r.a.createElement("p",null,"Read more of my articles on my blog page ",r.a.createElement("a",{href:"http://azbo400.github.io/Blog"},"here")))),r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"contact-text"},r.a.createElement("h3",{style:{fontSize:18,color:"grey",margin:0}},"CONTACT"),r.a.createElement("h1",{style:{marginBottom:13,fontSize:25}},"Get in touch with me."),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(A,null),r.a.createElement(_.a,{minWidth:868},r.a.createElement("div",{className:"vl"}),r.a.createElement(L,null))))),r.a.createElement("footer",{style:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#191919"}},r.a.createElement("div",null,r.a.createElement("h3",{style:{fontSize:24,color:"white",marginBottom:15}},"Stay in touch with me."),r.a.createElement(B,null),r.a.createElement("p",{style:{color:"white",marginTop:20}},"Developed by Ryan Arnouk 2019"))))}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[312,2,1]]]);
//# sourceMappingURL=main.86b0e6e7.chunk.js.map