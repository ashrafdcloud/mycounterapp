(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"employees":[{"id":1,"firstName":"John","lastName":"Doe","position":"Software Engineer","salary":75000},{"id":2,"firstName":"Jane","lastName":"Smith","position":"HR Manager","salary":60000},{"id":3,"firstName":"Michael","lastName":"Johnson","position":"Marketing Specialist","salary":55000},{"id":4,"firstName":"Sara","lastName":"Williams","position":"Financial Analyst","salary":62000},{"id":5,"firstName":"William","lastName":"Brown","position":"Customer Support Representative","salary":48000},{"id":6,"firstName":"Emily","lastName":"Jones","position":"Product Manager","salary":70000},{"id":7,"firstName":"David","lastName":"Martinez","position":"Sales Manager","salary":65000},{"id":8,"firstName":"Olivia","lastName":"Garcia","position":"Graphic Designer","salary":54000},{"id":9,"firstName":"James","lastName":"Taylor","position":"Quality Assurance Engineer","salary":58000},{"id":10,"firstName":"Sophia","lastName":"Lee","position":"Business Analyst","salary":63000},{"id":11,"firstName":"Daniel","lastName":"Rodriguez","position":"Project Manager","salary":72000},{"id":12,"firstName":"Ava","lastName":"Hernandez","position":"UX/UI Designer","salary":56000},{"id":13,"firstName":"Liam","lastName":"Smith","position":"Data Analyst","salary":60000},{"id":14,"firstName":"Isabella","lastName":"Davis","position":"Customer Service Representative","salary":49000},{"id":15,"firstName":"Benjamin","lastName":"Moore","position":"Systems Administrator","salary":61000},{"id":16,"firstName":"Mia","lastName":"Clark","position":"Marketing Manager","salary":68000},{"id":17,"firstName":"Elijah","lastName":"Young","position":"Frontend Developer","salary":70000},{"id":18,"firstName":"Charlotte","lastName":"Walker","position":"Customer Success Manager","salary":67000},{"id":19,"firstName":"Henry","lastName":"Hall","position":"Database Administrator","salary":64000},{"id":20,"firstName":"Amelia","lastName":"Harris","position":"Sales Associate","salary":53000}]}')},28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(23),r=a.n(n),c=(a(28),a(21)),l=a(2),o=a(16),d=a(5),m=a(3),j=function(e){var t=e.add,a=e.sub,s=e.double,n=i.a.useState(0),r=Object(d.a)(n,2),c=r[0],l=r[1],o=function(e){l(c+e)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"container-fluid text-center mt-5",children:[Object(m.jsx)("h1",{className:"text-uppercase text-info h1 ",children:"My Counter"}),Object(m.jsx)("div",{className:"text-success display-3 my-4  font-weight-bold",children:c}),Object(m.jsx)("button",{className:"btn btn-primary mx-2 border border-success",onClick:function(){return o(t)},children:"Increment"}),Object(m.jsx)("button",{className:"btn btn-danger mx-2 border border-primary",onClick:function(){return o(a)},children:"Decrement"}),Object(m.jsx)("button",{className:"btn btn-warning mx-2 border border-danger",onClick:function(){return o(s)},children:"Double"})]})})};var b=function(e){e.props;var t=Object(l.o)(),a=Object(l.q)().id,s=parseInt(a),i=o.employees.find((function(e){return e.id===s}));return i?Object(m.jsxs)("div",{className:"datas-table",children:[Object(m.jsxs)("p",{children:["ID: ",i.id]}),Object(m.jsxs)("p",{children:["First Name: ",i.firstName]}),Object(m.jsxs)("p",{children:["Last Name: ",i.lastName]}),Object(m.jsxs)("p",{children:["Salary: ",i.salary]}),Object(m.jsx)("button",{onClick:function(){t(-1)},children:"Back"})]}):Object(m.jsx)("div",{children:"Item not found."})};function u(){return Object(m.jsxs)("table",{className:"data-table",id:"customers",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"ID"}),Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("td",{children:"Actions"})]})}),Object(m.jsx)("tbody",{children:o.employees.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.firstName}),Object(m.jsx)("td",{children:e.lastName}),Object(m.jsxs)("td",{children:[Object(m.jsx)(c.b,{to:"/item/".concat(e.id),children:"Details"})," "]})]},e.id)}))})]})}var N=function(){return Object(m.jsx)(c.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(j,{sub:-1,add:1,double:2}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/",element:Object(m.jsx)(u,{})}),Object(m.jsx)(l.a,{path:"/item/:id",element:Object(m.jsx)(b,{})})]})]})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),i(e),n(e),r(e)}))};r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),h()}},[[31,1,2]]]);
//# sourceMappingURL=main.de14d635.chunk.js.map