(this.webpackJsonptest02=this.webpackJsonptest02||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),j=n.n(c),s=n(18),i=n.n(s),a=(n(25),n(7)),r=function(e){var t=Object(c.useState)(),n=Object(a.a)(t,2),j=n[0],s=n[1];return Object(c.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){s(e)}))}),[e]),j},l=n(9),b=(n(16),n(0));function o(e){var t=e.works,n=Object(c.useState)(!0),j=Object(a.a)(n,2),s=j[0],i=j[1],r=Object(c.useState)(t),o=Object(a.a)(r,2),h=o[0],d=o[1];return Object(b.jsx)(b.Fragment,{children:h&&Object(b.jsxs)("tr",{className:h.isDone,children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:h.thum})}),Object(b.jsxs)("td",{children:[h.name," (",h.tel," / ",h.email,")",Object(b.jsxs)("p",{children:["\ud3ec\ud2b8\ud3f4\ub9ac\uc624 - ",h.pUrl]}),Object(b.jsx)("div",{children:h.summarize})]}),Object(b.jsxs)("td",{children:[Object(b.jsx)("input",{type:"checkbox",checked:s,onChange:function(){i(!s)}}),Object(b.jsx)("button",{onClick:function(){fetch("./work/".concat(t.id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(l.a)(Object(l.a)({},h),{},{isDone:"".concat(s)}))}).then((function(e){return e.json()})).then((function(e){d(e)}))},children:"\uc801\uc6a9"})]})]})})}function h(){var e=r("http://localhost:3001/work/");return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("article",{className:"add",children:[Object(b.jsx)("h1",{children:"\uc218\uac15\uc0dd \ub9ac\uc2a4\ud2b8"}),Object(b.jsxs)("table",{children:[Object(b.jsx)("tr",{children:Object(b.jsx)("th",{colspan:"3",children:"\uc218\uac15\uc0dd"})}),e&&e.map((function(e){return Object(b.jsx)(o,{works:e},e.id)}))]})]})})}function d(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:"index page"})})}var O=n(12),u=function(){var e=Object(c.useRef)(),t={name:"",tel:"",email:"",pUrl:"",summarize:"",isDone:"true"},n=Object(c.useState)(t),j=Object(a.a)(n,2),s=j[0],i=j[1],r=function(e){var t=e.target,n=t.name,c=t.value;i(Object(l.a)(Object(l.a)({},s),{},Object(O.a)({},n,c)))},o=function(n,c){fetch("http://localhost:3001/work/",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),alert("\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),i(t),e.current.value=""};return Object(b.jsxs)("article",{className:"add",children:[Object(b.jsx)("h1",{children:"\uc218\uac15\uc0dd \ub4f1\ub85d"}),Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),o("post",s)},children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsxs)("label",{children:["\uc774\ub984",s.name]}),Object(b.jsx)("input",{type:"text",name:"name",value:s.name,onChange:r})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\uc5f0\ub77d\ucc98"}),Object(b.jsx)("input",{type:"text",name:"tel",value:s.tel,onChange:r})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\uc774\uba54\uc77c"}),Object(b.jsx)("input",{type:"text",name:"email",value:s.email,onChange:r})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\ud3ec\ud3f4URL"}),Object(b.jsx)("input",{type:"text",name:"pUrl",value:s.pUrl,onChange:r})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\uac15\uc0ac\uc758\uacac"}),Object(b.jsx)("textarea",{ref:e,name:"summarize",onChange:r})]}),Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"btn_parent",children:Object(b.jsx)("input",{type:"submit",value:"\uc800\uc7a5\ud558\uae30"})})})]})})]})},x=n(2),m=n(10);function p(){var e=Object(x.f)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m.b,{to:"/add",onClick:function(){return e.push("/add")},children:"\uc218\uac15\uc0dd \ub4f1\ub85d"})})}var f=function(){return Object(x.f)(),Object(b.jsxs)(m.a,{basename:"/class_210511",children:[Object(b.jsxs)("header",{children:[Object(b.jsx)(m.b,{to:"/",children:"Home"}),Object(b.jsx)(m.b,{to:"/add",children:"\uc218\uac15\uc0dd \ub4f1\ub85d"}),Object(b.jsx)(m.b,{to:"/list",children:"\uc218\uac15\uc0dd \ub9ac\uc2a4\ud2b8"})]}),Object(b.jsx)("main",{children:Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",component:d}),Object(b.jsx)(x.a,{path:"/add",children:Object(b.jsx)(u,{})}),Object(b.jsx)(x.a,{path:"/list",component:h})]})}),Object(b.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,j=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),j(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(j.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),g()}},[[32,1,2]]]);
//# sourceMappingURL=main.82c99f88.chunk.js.map