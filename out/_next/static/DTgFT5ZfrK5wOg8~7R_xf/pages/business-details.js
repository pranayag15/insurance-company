(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4fRq":function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var l=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),l[t]=e>>>((3&t)<<3)&255;return l}}},"4l9T":function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),l=a("sLSF"),r=a("MI3g"),i=a("a7VT"),o=a("AT/M"),s=a("Tit0"),c=a("vYYK"),d=a("q1tI"),u=a.n(d),f=a("MX0m"),m=a.n(f),p=a("NeRB"),h=a("kf+a"),y=(a("MaXC"),a("4IMT")),g=a.n(y),E=a("pKkg"),b=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(r.default)(this,Object(i.default)(t).call(this,e))).handleClick=a.handleClick.bind(Object(o.default)(a)),a.setFormApi=a.setFormApi.bind(Object(o.default)(a)),a}return Object(s.default)(t,e),Object(l.default)(t,[{key:"handleClick",value:function(){this.props.getFormData(this.formAPi.getState())}},{key:"setFormApi",value:function(e){this.formAPi=e}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"App"},u.a.createElement(E.b,{getApi:this.setFormApi},u.a.createElement("div",{style:{display:"inline-block",marginBottom:15}},u.a.createElement("div",{style:{float:"left",marginRight:8}},u.a.createElement(E.g,{style:{width:195},field:"name",placeholder:"Business"})),u.a.createElement("div",{style:{float:"left"}},u.a.createElement(E.g,{style:{width:195},field:"businesstype",placeholder:"Type of Business"}))),u.a.createElement(E.g,{field:"website",placeholder:"Website",style:{marginBottom:15}}),u.a.createElement(E.g,{field:"address",placeholder:"Address Line 1",style:{marginBottom:15}}),u.a.createElement("div",{style:{display:"inline-block",marginBottom:15}},u.a.createElement("div",{style:{float:"left",marginRight:8}},u.a.createElement(E.g,{style:{width:195},field:"city",placeholder:"City"})),u.a.createElement("div",{style:{float:"left"}},u.a.createElement(E.g,{style:{width:195},field:"state",placeholder:"State"}))),u.a.createElement("div",{style:{display:"inline-block",marginBottom:15}},u.a.createElement("div",{style:{float:"left",marginRight:8}},u.a.createElement(E.g,{style:{width:195},field:"pincode",placeholder:"Pin Code"})),u.a.createElement("div",{style:{float:"left"}},u.a.createElement(E.g,{style:{width:195},field:"country",placeholder:"Country"}))),u.a.createElement(E.h,{rows:"3",field:"bio",style:{marginBottom:15},placeholder:"Business Bio"}),u.a.createElement("h5",null,"Do you accept cards?"),u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement("div",{style:{float:"left"}},u.a.createElement(E.a,{style:{margin:10},field:"Yes"}),u.a.createElement("label",null,"Yes")),u.a.createElement("div",{style:{float:"left"}},u.a.createElement(E.a,{style:{margin:10},field:"No"}),u.a.createElement("label",null,"No"))),u.a.createElement("h3",null,"Branding"),u.a.createElement("p",null,"Your brand infomration applie to the look and feel of appointments,booking and marketing."),u.a.createElement("div",{style:{display:"inline-block"}},u.a.createElement(g.a,{style:{float:"left",width:192}},"Cancel"),u.a.createElement(g.a,{style:{float:"left",width:192,marginLeft:15},type:"primary",onClick:function(t){return e.handleClick(t)}},"Save"))))}}]),t}(d.Component),v=[".heading.jsx-1805588576{position:fixed;top:0;width:100%;z-index:50;}",".content.jsx-1805588576{position:absolute;width:40%;top:100px;left:30%;background:#FFF;padding:10px;padding-top:20px;border-radius:5px;}"];v.__hash="1805588576";var w=v,k=function(e){return u.a.createElement("div",{className:"jsx-".concat(w.__hash)},u.a.createElement("div",{className:"jsx-".concat(w.__hash)+" heading"},u.a.createElement(h.a,{logo:"enabled",title:"Business Details"})),u.a.createElement("div",{className:"jsx-".concat(w.__hash)+" background"},u.a.createElement(p.a,{width:"100%",top:"40px"}),u.a.createElement("div",{className:"jsx-".concat(w.__hash)+" content"},u.a.createElement(b,{getFormData:e.getFormData}))),u.a.createElement(m.a,{id:w.__hash},w))},F=a("ErRJ"),x=a("/MKj"),j=a("20a2"),C=a.n(j),D=a("xk4V"),_=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(r.default)(this,Object(i.default)(t).call(this,e)),Object(c.a)(Object(o.default)(a),"handleFormData",function(e){e.values.businessID=D(),e.values.owner=a.props.user.response.data.userID;var t=e.values;a.props.businessSignupDispatch(t).then(function(e){console.log(e),e.status?C.a.push("/dashboard"):alert("Cannot add business, check console for error")}).catch(function(e){console.log(e)})}),a}return Object(s.default)(t,e),Object(l.default)(t,[{key:"componentDidMount",value:function(){this.props.getUserDispatch("6bb05804-ac94-4f82-ba2a-d1792812ffca").then(function(e){})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(k,{getFormData:function(t){return e.handleFormData(t)}}))}}]),t}(u.a.Component);t.default=Object(x.b)(function(e){return{businessSignup:e.businessSignup,user:e.user}},function(e){return{businessSignupDispatch:function(t){return e(F.a.action(t))},getUserDispatch:function(t){return e(F.d.action(t))}}})(_)},I2ZF:function(e,t){for(var a=[],n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,l=a;return[l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],"-",l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]],l[e[n++]]].join("")}},jne3:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/business-details",function(){var e=a("4l9T");return{page:e.default||e}}])},"kf+a":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=function(e){var t=e.color,a=e.message,n={textAlign:"center",color:t,lineHeight:"17px"};return a?l.a.createElement("fragment",{style:n},l.a.createElement("h1",{style:{marginTop:0}},l.a.createElement("b",null,"S K I P")),l.a.createElement("p",{style:{color:"#4D4F5C"}},a)):l.a.createElement("div",{style:{padding:"0"}},l.a.createElement("h1",{style:{color:t,margin:0}},l.a.createElement("b",null,"S K I P")))};r.defaultProps={color:"#43425D"};var i=r,o=function(e){var t=e.logo,a=e.title,n={height:"40px",backgroundColor:"#030D34",paddingTop:"4px",paddingLeft:"30px",overflow:"hidden",fontSize:"12px"};return"enabled"===t?l.a.createElement("div",{style:n},l.a.createElement("div",{style:{float:"left"}},l.a.createElement(i,{color:"#CCCCCC"})),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",{style:{color:"#FFFFFF",margin:0}},a))):l.a.createElement("div",{style:n},l.a.createElement("div",{style:{textAlign:"left",fontSize:"12px"}},l.a.createElement("h1",{style:{color:"#FFFFFF"}},a)))};o.defaultProps={title:" Test Title"};t.a=o},xk4V:function(e,t,a){var n=a("4fRq"),l=a("I2ZF");e.exports=function(e,t,a){var r=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||n)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var o=0;o<16;++o)t[r+o]=i[o];return t||l(i)}}},[["jne3",1,0,2]]]);