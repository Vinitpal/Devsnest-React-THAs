(this["webpackJsonpreact-tha"]=this["webpackJsonpreact-tha"]||[]).push([[0],{73:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},85:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(10),r=c.n(a),i=c(49),s=c(11),o=(c(73),c(1)),j=function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("a",{href:"./",children:"Go to Homepage"}),Object(o.jsx)("p",{children:"Made by kirua"})]})},l=function(){return Object(o.jsxs)("div",{className:"day16-card",children:[Object(o.jsx)("img",{src:"https://indianmemetemplates.com/wp-content/uploads/angry-munna-bhaiyaa-slapping.jpg",alt:"mirjapur "}),Object(o.jsx)("h1",{children:"Meme card"}),Object(o.jsx)("p",{style:{fontSize:"17px"},children:"Abey padhai likhai mai dhyaan lagao ias yas bano"})]})},d=function(){return Object(o.jsx)("div",{className:"box"})},b=function(){return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(d,{}),Object(o.jsx)(d,{}),Object(o.jsx)(d,{}),Object(o.jsx)(d,{}),Object(o.jsx)(d,{}),Object(o.jsx)(d,{}),Object(o.jsx)(d,{}),Object(o.jsx)(d,{})]})},u=function(){return Object(o.jsxs)("div",{className:"day16-board",children:[Object(o.jsx)(b,{}),Object(o.jsx)(b,{}),Object(o.jsx)(b,{}),Object(o.jsx)(b,{}),Object(o.jsx)(b,{}),Object(o.jsx)(b,{})]})},O=(c(75),function(){return Object(o.jsxs)("div",{className:"day16",children:[Object(o.jsx)(l,{}),Object(o.jsx)(u,{}),Object(o.jsx)(j,{})]})}),x=function(e){var t=e.food,c=e.calorie;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsxs)("h4",{children:["you have consumed ",c," cals today"]})]})},h=function(e){return Object(o.jsxs)("div",{className:"card-container",children:[Object(o.jsx)(x,{food:"Pizza",calorie:"55"}),Object(o.jsx)(x,{food:"Burger",calorie:"100"}),Object(o.jsx)(x,{food:"Aalu roti",calorie:"59"}),Object(o.jsx)(x,{food:"Dahi vada",calorie:"37"}),Object(o.jsx)(x,{food:"Samosa",calorie:"63"}),Object(o.jsx)(x,{food:"Jalebi",calorie:"44"})]})},f=(c(76),function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Calorie Meter"})})}),m=function(){return Object(o.jsxs)("div",{className:"day17",children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{}),Object(o.jsx)(j,{})]})},p=c(22),v=function(){return Object(o.jsx)("div",{className:"box"})},y=function(){return Object(o.jsx)("div",{className:"row",children:Object(p.a)(Array(8)).map((function(e,t){return Object(o.jsx)(v,{},t)}))})},g=function(){return Object(o.jsx)("div",{className:"board ",children:Object(p.a)(Array(8)).map((function(e,t){return Object(o.jsx)(y,{},t)}))})},N=function(e){var t=e.food,c=e.calorie;return Object(o.jsxs)("div",{className:"card-wrapper",children:[Object(o.jsx)("div",{className:"box",style:{backgroundColor:c>50?"red":c>40?"orange":"green"}}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsxs)("h4",{children:["you have consumed"," ",Object(o.jsx)("span",{style:{color:c>50?"red":"green"},children:c})," ","cals today"]})]})]})},C=function(e){return Object(o.jsx)("div",{className:"card-container",children:[{food:"Pizza",calorie:"55"},{food:"Cake",calorie:"48"},{food:"Jalebi",calorie:"44"},{food:"Burger",calorie:"100"},{food:"Dahi vada",calorie:"37"},{food:"Aalu roti",calorie:"41"},{food:"Samosa",calorie:"32"}].map((function(e,t){return Object(o.jsx)(N,{food:e.food,calorie:e.calorie},t)}))})},k=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Calorie Meter"})})},D=function(){return Object(o.jsxs)("div",{className:"calorie-app",children:[Object(o.jsx)(k,{}),Object(o.jsx)(C,{})]})},S=(c(77),function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"day18",children:[Object(o.jsx)(g,{}),Object(o.jsx)(D,{})]}),Object(o.jsx)(j,{})]})}),w=c(13),A=function(){var e=Object(n.useState)(0),t=Object(w.a)(e,2),c=t[0],a=t[1];return Object(o.jsx)("button",{onClick:function(){a((function(e){return e+1}))},children:c})},M=(c(78),function(){return Object(o.jsxs)("div",{className:"day-19",children:[Object(o.jsx)("h3",{children:"There are four counter component instances that each manage their own state"}),Object(o.jsx)("div",{className:"buttons-div",children:[1,2,3,4].map((function(e){return Object(o.jsx)(A,{},e)}))}),Object(o.jsx)(j,{})]})}),z=function(e){var t=e.food,c=e.calorie,n=e.onDelete,a=e.id,r=c>50?"red":c>40?"orange":"green";return Object(o.jsxs)("div",{className:"card-wrapper",children:[Object(o.jsx)("div",{className:"box",style:{backgroundColor:r}}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsxs)("h4",{children:["you have consumed"," ",Object(o.jsx)("span",{style:{color:r},children:c})," cals today"]}),Object(o.jsx)("button",{onClick:function(){return n(a,t)},children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})]})},E=function(e){var t=Object(n.useState)([{food:"Pizza",calorie:"55"},{food:"Cake",calorie:"48"},{food:"Jalebi",calorie:"44"},{food:"Burger",calorie:"100"},{food:"Dahi vada",calorie:"37"},{food:"Aalu roti",calorie:"41"},{food:"Samosa",calorie:"32"}]),c=Object(w.a)(t,2),a=c[0],r=c[1],i=function(e,t){var c=a.filter((function(t,c){return c!==e}));r(c)};return Object(o.jsx)("div",{className:"card-container",children:a.length>0?a.map((function(e,t){return Object(o.jsx)(z,{food:e.food,onDelete:i,calorie:e.calorie,id:t},t)})):Object(o.jsx)("h1",{style:{textAlign:"center"},children:"No entry"})})},_=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Calorie Meter"})})},J=function(){return Object(o.jsxs)("div",{className:"calorie-app",children:[Object(o.jsx)(_,{}),Object(o.jsx)(E,{}),Object(o.jsx)(j,{})]})},P=(c(79),function(){return Object(o.jsx)("div",{className:"day20",children:Object(o.jsx)(J,{})})}),B=(c(80),function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Calorie Meter"})})}),F=c(123),G=c(117),I=c(121),R=Object(G.a)((function(e){return{root:{"& > form":{margin:e.spacing(1),width:"20ch"}}}})),H=function(e){var t=e.addEntry,c=R(),a=Object(n.useState)(""),r=Object(w.a)(a,2),i=r[0],s=r[1],j=Object(n.useState)(""),l=Object(w.a)(j,2),d=l[0],b=l[1];return Object(o.jsx)("div",{className:"add-calorie",children:Object(o.jsxs)("form",{className:c.root,noValidate:!0,autoComplete:"off",children:[Object(o.jsx)(F.a,{id:"outlined-basic",className:"input",type:"text",label:"Food Name",variant:"outlined",margin:"dense",onChange:function(e){return s(e.target.value)}}),Object(o.jsx)(F.a,{id:"outlined-basic",className:"input",type:"number",label:"Calorie",variant:"outlined",margin:"dense",onChange:function(e){return b(e.target.value)}}),Object(o.jsx)(I.a,{variant:"contained",color:"primary",onClick:function(){return t(i,d)},children:"Add"})]})})},L=Object(G.a)((function(e){return{root:{"& > form":{margin:e.spacing(1),width:"1"}}}})),T=function(e){var t=e.id,c=e.edit,a=e.editClicked,r=e.onEdit,i=L(),s=Object(n.useState)(""),j=Object(w.a)(s,2),l=j[0],d=j[1],b=Object(n.useState)(""),u=Object(w.a)(b,2),O=u[0],x=u[1];return Object(o.jsx)("div",{className:"edit-calorie",children:Object(o.jsxs)("form",{className:i.root,noValidate:!0,autoComplete:"off",children:[Object(o.jsx)(F.a,{id:"outlined-basic",className:"input",type:"text",label:"Food Name",variant:"outlined",size:"small",margin:"dense",onChange:function(e){return d(e.target.value)}}),Object(o.jsx)(F.a,{id:"outlined-basic",className:"input",type:"number",label:"Calorie",variant:"outlined",margin:"dense",onChange:function(e){return x(e.target.value)},min:"0"}),Object(o.jsx)(I.a,{variant:"contained",color:"primary",onClick:function(){return r(t,l,O,c,a)},children:"Done"}),Object(o.jsx)(I.a,{variant:"contained",color:"secondary",onClick:function(){return a(c=!1)},children:"Cancel"})]})})},V=c(122),$=c(57),q=c.n($),K=c(58),Q=c.n(K),U=function(e){var t=e.food,c=e.calorie,n=e.COLOR,a=e.id,r=e.onDelete,i=(e.edit,e.editClicked);return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsxs)("h4",{children:["you have consumed ",Object(o.jsx)("span",{style:{color:n},children:c})," cals today"]}),Object(o.jsx)(V.a,{className:"del-btn","aria-label":"delete",onClick:function(){return r(a,t)},children:Object(o.jsx)(q.a,{})}),Object(o.jsx)(V.a,{className:"edit-btn","aria-label":"edit",onClick:function(){return i(!0)},children:Object(o.jsx)(Q.a,{})})]})},W=function(e){var t=e.food,c=e.calorie,a=e.onDelete,r=e.onEdit,i=e.id,s=Object(n.useState)(!1),j=Object(w.a)(s,2),l=j[0],d=j[1],b=c>50?"red":c>40?"orange":"green";return Object(o.jsxs)("div",{className:"card-wrapper",children:[Object(o.jsx)("div",{className:"box",style:{backgroundColor:b}}),l?Object(o.jsx)(T,{id:i,editClicked:d,onEdit:r,edit:l}):Object(o.jsx)(U,{food:t,calorie:c,id:i,COLOR:b,onDelete:a,edit:l,editClicked:d})]})},X=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),c=t[0],a=t[1],r=function(e,t){var n=c.filter((function(t,c){return c!==e}));a(n)},i=function(e,t,n,r,i){var s=Object(p.a)(c);s[e].food=t,s[e].calorie=n,a(s),i(!1)};return Object(o.jsxs)("div",{children:[Object(o.jsx)(H,{addEntry:function(e,t){a([{food:e,calorie:t}].concat(Object(p.a)(c)))}}),Object(o.jsx)("div",{className:"calorie-container",children:c.length>0?c.map((function(e,t){return Object(o.jsx)(W,{food:e.food,onDelete:r,onEdit:i,calorie:e.calorie,id:t},t)})):Object(o.jsx)("h1",{style:{textAlign:"center"},children:"No entry"})})]})},Y=function(){return Object(o.jsxs)("div",{className:"day21",children:[Object(o.jsx)(B,{}),Object(o.jsx)(X,{}),Object(o.jsx)(j,{})]})},Z=c(39),ee=function(e){var t=e.meme,c=e.setMeme,a=Object(n.useState)({template_id:t.id,username:"teasty",password:"PPS$Asr52ttCfaF",boxes:[]}),r=Object(w.a)(a,2),i=r[0],s=r[1];return Object(o.jsxs)("div",{className:"meme",children:[Object(o.jsx)("img",{src:t.url,alt:"meme.title"}),Object(o.jsx)("div",{children:Object(p.a)(Array(t.box_count)).map((function(e,t){return Object(o.jsx)("input",{type:"text",placeholder:"Meme Caption ".concat(t),onChange:function(e){var c=i.boxes;c[t]={text:e.target.value},s(Object(Z.a)(Object(Z.a)({},i),{},{boxes:c}))}},t)}))}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){var e="https://api.imgflip.com/caption_image?template_id=".concat(i.template_id,"&username=").concat(i.username,"&password=").concat(i.password);i.boxes.map((function(t,c){return e+="&boxes[".concat(c,"][text]=").concat(t.text),""})),fetch(e).then((function(e){return e.json()})).then((function(e){!0===e.success&&c(Object(Z.a)(Object(Z.a)({},t),{},{url:e.data.url}))}))},children:"Generate Meme"}),Object(o.jsx)("button",{onClick:function(){c(null)},children:"Choose another template"})]})]})},te=function(e){var t=e.templates,c=e.setMeme;return Object(o.jsx)("div",{className:"container",children:t.map((function(e){return Object(o.jsx)("div",{className:"template",onClick:function(){c(e)},children:Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(e.url,")")},className:"image"})},e.id)}))})},ce=(c(85),function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),i=Object(w.a)(r,2),s=i[0],j=i[1];return Object(n.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){a(e.data.memes)}))}),[]),Object(o.jsxs)("div",{className:"day22",children:[Object(o.jsx)("h1",{children:"Meme Generator!"}),null===s?Object(o.jsx)(te,{setMeme:j,templates:c}):Object(o.jsx)(ee,{meme:s,setMeme:j})]})}),ne=function(){return Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[Object(o.jsx)("h1",{children:"Devsnest React THA's "}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(o.jsx)("a",{href:"./#/day-16",children:"Day 16"}),Object(o.jsx)("a",{href:"./#/day-17",children:"Day 17"}),Object(o.jsx)("a",{href:"./#/day-18",children:"Day 18"}),Object(o.jsx)("a",{href:"./#/day-19",children:"Day 19"}),Object(o.jsx)("a",{href:"./#/day-20",children:"Day 20"}),Object(o.jsx)("a",{href:"./#/day-21",children:"Day 21"}),Object(o.jsx)("a",{href:"./#/day-22",children:"Day 22"}),Object(o.jsx)(j,{})]})]})},ae=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(s.c,{children:[Object(o.jsx)(s.a,{path:"/day-16",component:O}),Object(o.jsx)(s.a,{path:"/day-17",component:m}),Object(o.jsx)(s.a,{path:"/day-18",component:S}),Object(o.jsx)(s.a,{path:"/day-19",component:M}),Object(o.jsx)(s.a,{path:"/day-20",component:P}),Object(o.jsx)(s.a,{path:"/day-21",component:Y}),Object(o.jsx)(s.a,{path:"/day-22",component:ce}),Object(o.jsx)(s.a,{component:ne})]})})};r.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(ae,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.fbe451fd.chunk.js.map