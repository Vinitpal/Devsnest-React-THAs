(this["webpackJsonpreact-tha"]=this["webpackJsonpreact-tha"]||[]).push([[0],{25:function(e,c,t){},27:function(e,c,t){},28:function(e,c,t){},29:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},37:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t(19),r=t.n(n),s=t(15),j=t(2),o=(t(25),t(0)),i=function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("a",{href:"./",children:"Go to Homepage"}),Object(o.jsx)("p",{children:"Made by kirua"})]})},d=function(){return Object(o.jsxs)("div",{className:"day16-card",children:[Object(o.jsx)("img",{src:"https://indianmemetemplates.com/wp-content/uploads/angry-munna-bhaiyaa-slapping.jpg",alt:"mirjapur "}),Object(o.jsx)("h1",{children:"Meme card"}),Object(o.jsx)("p",{style:{fontSize:"17px"},children:"Abey padhai likhai mai dhyaan lagao ias yas bano"})]})},l=function(){return Object(o.jsx)("div",{className:"box"})},b=function(){return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)(l,{}),Object(o.jsx)(l,{}),Object(o.jsx)(l,{}),Object(o.jsx)(l,{}),Object(o.jsx)(l,{}),Object(o.jsx)(l,{}),Object(o.jsx)(l,{}),Object(o.jsx)(l,{})]})},x=function(){return Object(o.jsxs)("div",{className:"day16-board",children:[Object(o.jsx)(b,{}),Object(o.jsx)(b,{}),Object(o.jsx)(b,{}),Object(o.jsx)(b,{}),Object(o.jsx)(b,{}),Object(o.jsx)(b,{})]})},O=(t(27),function(){return Object(o.jsxs)("div",{className:"day16",children:[Object(o.jsx)(d,{}),Object(o.jsx)(x,{}),Object(o.jsx)(i,{})]})}),u=function(e){var c=e.food,t=e.calorie;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsxs)("h4",{children:["you have consumed ",t," cals today"]})]})},h=function(e){return Object(o.jsxs)("div",{className:"card-container",children:[Object(o.jsx)(u,{food:"Pizza",calorie:"55"}),Object(o.jsx)(u,{food:"Burger",calorie:"100"}),Object(o.jsx)(u,{food:"Aalu roti",calorie:"59"}),Object(o.jsx)(u,{food:"Dahi vada",calorie:"37"}),Object(o.jsx)(u,{food:"Samosa",calorie:"63"}),Object(o.jsx)(u,{food:"Jalebi",calorie:"44"})]})},f=(t(28),function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Calorie Meter"})})}),m=function(){return Object(o.jsxs)("div",{className:"day17",children:[Object(o.jsx)(f,{}),Object(o.jsx)(h,{}),Object(o.jsx)(i,{})]})},y=t(11),p=function(){return Object(o.jsx)("div",{className:"box"})},v=function(){return Object(o.jsx)("div",{className:"row",children:Object(y.a)(Array(8)).map((function(e,c){return Object(o.jsx)(p,{},c)}))})},N=function(){return Object(o.jsx)("div",{className:"board ",children:Object(y.a)(Array(8)).map((function(e,c){return Object(o.jsx)(v,{},c)}))})},g=function(e){var c=e.food,t=e.calorie;return Object(o.jsxs)("div",{className:"card-wrapper",children:[Object(o.jsx)("div",{className:"box",style:{backgroundColor:t>50?"red":t>40?"orange":"green"}}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsxs)("h4",{children:["you have consumed"," ",Object(o.jsx)("span",{style:{color:t>50?"red":"green"},children:t})," ","cals today"]})]})]})},D=function(e){return Object(o.jsx)("div",{className:"card-container",children:[{food:"Pizza",calorie:"55"},{food:"Cake",calorie:"48"},{food:"Jalebi",calorie:"44"},{food:"Burger",calorie:"100"},{food:"Dahi vada",calorie:"37"},{food:"Aalu roti",calorie:"41"},{food:"Samosa",calorie:"32"}].map((function(e,c){return Object(o.jsx)(g,{food:e.food,calorie:e.calorie},c)}))})},k=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Calorie Meter"})})},A=function(){return Object(o.jsxs)("div",{className:"calorie-app",children:[Object(o.jsx)(k,{}),Object(o.jsx)(D,{})]})},C=(t(29),function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"day18",children:[Object(o.jsx)(N,{}),Object(o.jsx)(A,{})]}),Object(o.jsx)(i,{})]})}),w=t(12),z=function(){var e=Object(a.useState)(0),c=Object(w.a)(e,2),t=c[0],n=c[1];return Object(o.jsx)("button",{onClick:function(){n((function(e){return e+1}))},children:t})},S=(t(30),function(){return Object(o.jsxs)("div",{className:"day-19",children:[Object(o.jsx)("h3",{children:"There are four counter component instances that each manage their own state"}),Object(o.jsx)("div",{className:"buttons-div",children:[1,2,3,4].map((function(e){return Object(o.jsx)(z,{},e)}))}),Object(o.jsx)(i,{})]})}),J=function(e){var c=e.food,t=e.calorie,a=e.onDelete,n=e.id,r=t>50?"red":t>40?"orange":"green";return Object(o.jsxs)("div",{className:"card-wrapper",children:[Object(o.jsx)("div",{className:"box",style:{backgroundColor:r}}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsxs)("h4",{children:["you have consumed"," ",Object(o.jsx)("span",{style:{color:r},children:t})," cals today"]}),Object(o.jsx)("button",{onClick:function(){return a(n,c)},children:Object(o.jsx)("i",{className:"fas fa-trash"})})]})]})},M=function(e){var c=Object(a.useState)([{food:"Pizza",calorie:"55"},{food:"Cake",calorie:"48"},{food:"Jalebi",calorie:"44"},{food:"Burger",calorie:"100"},{food:"Dahi vada",calorie:"37"},{food:"Aalu roti",calorie:"41"},{food:"Samosa",calorie:"32"}]),t=Object(w.a)(c,2),n=t[0],r=t[1],s=function(e,c){var t=n.filter((function(c,t){return t!==e}));r(t)};return Object(o.jsx)("div",{className:"card-container",children:n.length>0?n.map((function(e,c){return Object(o.jsx)(J,{food:e.food,onDelete:s,calorie:e.calorie,id:c},c)})):Object(o.jsx)("h1",{style:{textAlign:"center"},children:"No entry"})})},B=function(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Calorie Meter"})})},P=function(){return Object(o.jsxs)("div",{className:"calorie-app",children:[Object(o.jsx)(B,{}),Object(o.jsx)(M,{}),Object(o.jsx)(i,{})]})},H=(t(31),function(){return Object(o.jsx)("div",{className:"day20",children:Object(o.jsx)(P,{})})}),I=function(){return Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[Object(o.jsx)("h1",{children:"Devsnest React THA's "}),Object(o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(o.jsx)("a",{href:"./#/day-16",children:"Day 16"}),Object(o.jsx)("a",{href:"./#/day-17",children:"Day 17"}),Object(o.jsx)("a",{href:"./#/day-18",children:"Day 18"}),Object(o.jsx)("a",{href:"./#/day-19",children:"Day 19"}),Object(o.jsx)("a",{href:"./#/day-20",children:"Day 20"}),Object(o.jsx)(i,{})]})]})},T=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/day-16",component:O}),Object(o.jsx)(j.a,{path:"/day-17",component:m}),Object(o.jsx)(j.a,{path:"/day-18",component:C}),Object(o.jsx)(j.a,{path:"/day-19",component:S}),Object(o.jsx)(j.a,{path:"/day-20",component:H}),Object(o.jsx)(j.a,{component:I})]})})};r.a.render(Object(o.jsx)(s.a,{children:Object(o.jsx)(T,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.af1d6194.chunk.js.map