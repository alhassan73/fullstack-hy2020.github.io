(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/4ef":function(e,t,a){},"0v46":function(e,t,a){},N1om:function(e,t,a){var r=a("sgoq")((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=r},jyfX:function(e,t,a){var r=a("sZCt")("kebabCase",a("N1om"),a("Eszj"));r.placeholder=a("wuTn"),e.exports=r},tkMx:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var r=a("KQm4"),n=a("dI71"),o=(a("xPXs"),a("q1tI")),l=a.n(o),c=a("XFRJ"),s=a("y2O/"),i=a.n(s),u=a("mt4B"),m=a("9Koi"),d=a("jsr+"),p=(a("/4ef"),function(e){var t=e.part,a=e.letter,r=Object(m.a)(),n=r.t,o=r.i18n.language,c="https://github.com/fullstack-hy2020/fullstack-hy2020.github.io/edit/source/src/content/"+t+"/"+o+"/"+("fi"===o?"osa"+t:"part"+t)+a+".md";return l.a.createElement(d.a,{flex:!0,className:"container spacing",centered:!0},l.a.createElement("a",{className:"edit-link",target:"__BLANK",href:c},l.a.createElement("span",null,n("proposeChanges"))))}),g=a("Bl7J"),f=a("76ZC"),h=a.n(f),b=a("kl3L"),y=a("vrFN"),v=(a("0v46"),a("XSxc")),w=a("Wbzz"),N=a("jyfX"),C=a.n(N),k=a("ymbu"),E=a.n(k),I=a("c7NW"),x=a.n(I),A=a("xB9W");function T(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var j=function(e){function t(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")).map((function(e){return e.id=C()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}}));a.setState({headings:e}),window.addEventListener("scroll",a.scrollHandler)},a.scrollHandler=function(){a.scrollTimer&&clearTimeout(a.scrollTimer),a.scrollTimer=setTimeout((function(){for(var e,t=window.scrollY,r=a.state.headings[0],n=T(a.state.headings);!(e=n()).done;){var o=e.value,l=document.getElementById(o.id);if(l&&l.offsetTop>=t)break;r=o}a.state.selectedItem!==r.id&&a.setState({selectedItem:r.id})}),50)},a.loopThroughPartsNode=function(e){var t=a.state.headings,r=a.props,n=r.part,o=r.letter,c=r.currentPath,s=r.currentPartTitle,i=r.colorCode,u=r.lang,m=[];for(var d in e)console.log(Object(A.a)(u,n,"/"+x()(e[d]))),s!==e[d]?m.push(l.a.createElement(w.Link,{key:d,className:"left-navigation-link",style:{borderColor:i},to:Object(A.a)(u,n,"/"+x()(e[d]))},d+" "+e[d])):m.push(l.a.createElement(v.a,{containerClassName:"accordion--side-navigation",style:{color:i},titleStyle:{backgroundColor:i,borderColor:i},initiallyOpened:!0,key:d,title:o+" "+e[d],selectedItem:a.state.selectedItem,list:t.map((function(e){return{id:e.id,href:c+"#"+e.id,text:e.text}}))}));return m},a.state={headings:[],selectedItem:null},a}Object(n.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandler)},a.render=function(){var e=this.props.part;return l.a.createElement(d.a,{className:"scroll-navigation-container"},l.a.createElement(d.a,{className:"scroll-navigation-container-inner"},l.a.createElement(d.a,{tag:"ul",dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(E.a[this.props.lang][e]))))},t}(o.Component);j.defaultProps={className:"",lang:"fi"};var P=j,O=a("K4iA"),M=a("u1fg"),L=a("GkXj"),X=a.n(L),D=a("gqR3"),U=a.n(D),B=a("5I0T"),G=a.n(B),Y=a("Zosa"),z=a("33yf"),J=a.n(z),R=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(){window.scrollY>300&&!a.state.showArrowUp?a.setState({showArrowUp:!0}):window.scrollY<=300&&a.state.showArrowUp&&a.setState({showArrowUp:!1})},a.state={h1Title:"",otherTitles:"",showArrowUp:!1},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a:not(.skip-to-content")),t=document.querySelector("h1"),a=document.querySelectorAll("h3"),n=Array.from(a).map((function(e){return e.innerText})),o=this.props.data.markdownRemark.frontmatter;e.map((function(e){return e.style="border-color: "+M[Y.a[o.part]],!e.classList.contains("language-switcher__language")&&(e.target="_blank"),e.onmouseover=function(){e.style.backgroundColor=M[Y.a[o.part]]},e.onmouseleave=function(){e.style.backgroundColor="transparent"},null})),this.setState({h1Title:t.innerText,otherTitles:Object(r.a)(n)}),window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,a=e.html,n=t.mainImage,o=t.letter,s=t.part,m=t.lang,f=M[Y.a[s]],v={replace:function(e){var t=e.type,a=e.name,r=e.attribs,n=e.children;if("tag"===t&&"picture"===a){var o=n[0].attribs.alt?n[0].attribs.alt:"fullstack content";return l.a.createElement("picture",null,l.a.createElement("img",{style:{borderColor:f},alt:o,src:n[0].attribs.src}))}return"tag"===t&&"pre"===a?l.a.createElement("pre",null,X()(n,v)):"tag"===t&&"content"===r.class?l.a.createElement(d.a,{className:"course-content"},l.a.createElement(d.a,{className:"course-content-inner"},X()(n,v))):"tag"===t&&"tasks"===r.class?l.a.createElement(u.a,{style:{backgroundColor:f,borderColor:f},className:"spacing tasks content-banner"},l.a.createElement(d.a,{className:"course-content",style:{borderColor:f,backgroundColor:"transparent"}},l.a.createElement(d.a,{className:"course-content-inner"},"pre"===n.name?l.a.createElement("pre",null,X()(n,v)):X()(n,v)))):void 0}};return l.a.createElement(g.a,{isCoursePage:!0},l.a.createElement(y.a,{lang:m,title:"Fullstack "+("fi"===m?"osa":"part")+s+" | "+this.state.h1Title,description:U.a[m],keywords:[].concat(Object(r.a)(G.a),[this.state.h1Title],Object(r.a)(this.state.otherTitles))}),this.state.showArrowUp&&l.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},l.a.createElement("img",{src:i.a,alt:"arrow-up"})),l.a.createElement("div",{className:"course-container spacing--after"},l.a.createElement(u.a,{className:"part-main__banner spacing--mobile--small",backgroundColor:f,style:{backgroundImage:"url("+J.a.resolve(n.publicURL)+")",backgroundColor:f}},l.a.createElement("div",{className:"container spacing--after"},l.a.createElement(c.a,{className:"breadcrumb",content:[{backgroundColor:f,text:"Fullstack",link:"/"+("fi"===m?"":m+"/")+"#course-contents"},{backgroundColor:f,text:("fi"===m?"Osa":"Part")+" "+s,link:Object(A.a)(m,s)},{backgroundColor:M.black,text:E.a[m][s][o]}]}))),l.a.createElement(d.a,{className:"course",id:"course-main-content"},l.a.createElement(P,{part:s,letter:o,lang:m,currentPartTitle:E.a[m][s][o],currentPath:Object(A.a)(m,s,"/"+x()(E.a[m][s][o])),colorCode:f}),l.a.createElement(d.a,{className:"course-content-container"},l.a.createElement(d.a,{className:"course-content",autoBottomMargin:!0},l.a.createElement(d.a,{className:"course-content-inner"},l.a.createElement("p",{className:"col-1 letter",style:{borderColor:f}},o),l.a.createElement(O.a,{headingLevel:"h1",text:E.a[m][s][o]}))),h()(a,v))),l.a.createElement(p,{part:s,letter:o,lang:m}),l.a.createElement(b.a,{part:s,letter:o,lang:m})))},t}(o.Component)},xPXs:function(e,t,a){},"y2O/":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"}}]);
//# sourceMappingURL=component---src-templates-content-template-js-bcbf1402c70a1b1aa2e0.js.map