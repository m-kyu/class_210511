(this.webpackJsonptest02=this.webpackJsonptest02||[]).push([[0],{16:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),j=n.n(c),r=n(18),s=n.n(r),i=(n(25),n(7)),a=function(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),j=n[0],r=n[1];return Object(c.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){r(e)}))}),[e]),j},l=n(9),b=(n(16),n(0));function h(e){var t=e.works,n=Object(c.useState)(!0),j=Object(i.a)(n,2),r=j[0],s=j[1],a=Object(c.useState)(t),h=Object(i.a)(a,2),d=h[0],O=h[1];return Object(b.jsx)(b.Fragment,{children:d&&Object(b.jsxs)("tr",{className:d.isDone,children:[Object(b.jsx)("td",{children:d.name}),Object(b.jsx)("td",{children:d.email}),Object(b.jsx)("td",{children:Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:d.pUrl,target:"_blank",children:d.pUrl})})}),Object(b.jsx)("td",{children:Object(b.jsx)("a",{href:d.resume,target:"_blank",children:Object(b.jsx)("button",{children:"\uc774\ub825\uc11c\ub2e4\uc6b4"})})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("input",{type:"checkbox",checked:r,onChange:function(){s(!r)}}),Object(b.jsx)("button",{onClick:function(){fetch("./work/".concat(t.id),{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(l.a)(Object(l.a)({},d),{},{isDone:"".concat(r)}))}).then((function(e){return e.json()})).then((function(e){O(e)}))},children:"\uc801\uc6a9"})]})]})})}function d(){var e=a("http://localhost:3001/work/");return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("article",{className:"add",children:[Object(b.jsx)("h1",{children:"UIUX\ub514\uc790\uc778 \uc6f9\ud37c\ube14\ub9ac\uc154&\ud504\ub860\ud2b8\uc564\ub4dc - \uc218\uac15\uc0dd \uc791\ud488 \ub9ac\uc2a4\ud2b8"}),Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\uc774\ub984"}),Object(b.jsx)("th",{children:"\uc774\uba54\uc77c"}),Object(b.jsx)("th",{children:"\uc791\ud488\ubcf4\uae30"}),Object(b.jsx)("th",{children:"\uc774\ub825\uc11c"}),Object(b.jsx)("th",{})]}),e&&e.map((function(e){return Object(b.jsx)(h,{works:e},e.id)}))]})]})})}function O(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:"index page"})})}var o=n(12),u=function(){var e=Object(c.useRef)(),t={name:"",tel:"",email:"",pUrl:"",summarize:"",resume:"",isDone:"true"},n=Object(c.useState)(t),j=Object(i.a)(n,2),r=j[0],s=j[1],a=function(e){var t=e.target,n=t.name,c=t.value;s(Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},n,c)))},h=function(n,c){fetch("http://localhost:3001/work/",{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),alert("\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),s(t),e.current.value=""};return Object(b.jsxs)("article",{className:"add",children:[Object(b.jsx)("h1",{children:"\uc218\uac15\uc0dd \ub4f1\ub85d"}),Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),h("post",r)},children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsxs)("label",{children:["\uc774\ub984",r.name]}),Object(b.jsx)("input",{type:"text",name:"name",value:r.name,onChange:a})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\uc5f0\ub77d\ucc98"}),Object(b.jsx)("input",{type:"text",name:"tel",value:r.tel,onChange:a})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\uc774\uba54\uc77c"}),Object(b.jsx)("input",{type:"text",name:"email",value:r.email,onChange:a})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\ud3ec\ud3f4URL"}),Object(b.jsx)("input",{type:"text",name:"pUrl",value:r.pUrl,onChange:a})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("label",{children:"\uac15\uc0ac\uc758\uacac"}),Object(b.jsx)("textarea",{ref:e,name:"summarize",onChange:a})]}),Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"btn_parent",children:Object(b.jsx)("input",{type:"submit",value:"\uc800\uc7a5\ud558\uae30"})})})]})})]})},x=n(2),p=n(10);function m(){var e=Object(x.f)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(p.b,{to:"/add",onClick:function(){return e.push("/add")},children:"\uc218\uac15\uc0dd \ub4f1\ub85d"})})}var f=function(){return Object(x.f)(),Object(b.jsxs)(p.a,{children:[Object(b.jsxs)("header",{children:[Object(b.jsx)(p.b,{to:"/",children:"Home"}),Object(b.jsx)(p.b,{to:"/add",children:"\uc218\uac15\uc0dd \ub4f1\ub85d"}),Object(b.jsx)(p.b,{to:"/list",children:"\uc218\uac15\uc0dd \ub9ac\uc2a4\ud2b8"})]}),Object(b.jsx)("main",{children:Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",component:O}),Object(b.jsx)(x.a,{path:"/add",children:Object(b.jsx)(u,{})}),Object(b.jsx)(x.a,{path:"/list",component:d})]})}),Object(b.jsx)(m,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,j=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),j(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(j.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),g()}},[[32,1,2]]]);
//# sourceMappingURL=main.229a87e9.chunk.js.map