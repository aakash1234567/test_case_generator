(this.webpackJsonptest_case_gen=this.webpackJsonptest_case_gen||[]).push([[0],{22:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(5),r=i.n(c),s=i(6),a=i(0),l=function(){return Object(a.jsx)("button",{className:"btn btn-primary",children:"Feedback"})},h=function(){return Object(a.jsx)("button",{className:"btn btn-primary",children:"Another Type of test case"})},o=function(e){return Object(a.jsx)("button",{className:"btn btn-primary",onClick:e.handleHome,children:"Home"})},j=function(e){return Object(a.jsx)("button",{className:"btn btn-primary",onClick:e.handleGen,children:"Generate"})},d=function(e){return Object(a.jsxs)("button",{className:"btn btn-primary",id:"btncopy",onClick:e.handleCopy,children:["Copy"," ",Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.2em",height:"1.2em",fill:"currentColor",class:"bi bi-check2",viewBox:"0 0 16 16",id:"svgcopy",children:Object(a.jsx)("path",{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"})})]})},b=function(e){return Object(a.jsx)("button",{className:"btn btn-primary",onClick:e.handleReGen,children:"ReGenerate"})},u=function(e){return Object(a.jsx)("button",{className:"btn btn-primary",onClick:e.handleCngConst,children:"Change Constraint"})},_=i(3),O=function(e){var t=Object(_.c)((function(e){return e}));return Object(a.jsx)(a.Fragment,{children:t.map((function(t){return Object(a.jsx)("button",{onClick:function(t){return e.handleClick(t.target.value)},value:t.id,id:"case_desc",children:t.desc},t.id)}))})},m=function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),i=t[0],c=t[1],r=Object(n.useState)({content:""}),m=Object(s.a)(r,2),x=m[0],f=m[1],g=Object(n.useState)([]),p=Object(s.a)(g,2),w=p[0],v=p[1],N=Object(_.c)((function(e){return e})),A=Object(_.b)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{id:"head",children:"Test Case Generator"}),1===i?Object(a.jsx)("div",{className:"container",id:"content",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsx)(O,{handleClick:function(e){return function(e){c(2),f(N.filter((function(t){return t.id==e}))[0])}(e)}})}),Object(a.jsxs)("div",{className:"col-4",children:[Object(a.jsx)("div",{className:"col",id:"buttons",children:Object(a.jsx)(h,{})}),Object(a.jsx)("div",{className:"col",id:"buttons",children:Object(a.jsx)(l,{})})]})]})}):3==i?Object(a.jsx)("div",{className:"container",id:"content",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",id:"output",style:{overflowY:"scroll",overflowX:"hidden",height:"400px"},children:w}),Object(a.jsxs)("div",{className:"col-4",children:[Object(a.jsx)("div",{className:"col",id:"buttons",children:Object(a.jsx)(d,{handleCopy:function(){return function(){var e=document.getElementById("output");console.log(e.innerHTML);var t=e.innerHTML;t=t.replaceAll("<br>","\n"),console.log(t),navigator.clipboard.writeText(t)}()}})}),Object(a.jsx)("div",{className:"col",id:"buttons",children:Object(a.jsx)(b,{handleReGen:function(){return function(){var e=x.Gen(N);v(e)}()}})}),Object(a.jsx)("div",{className:"col",id:"buttons",children:Object(a.jsx)(u,{handleCngConst:function(){c(2)}})}),Object(a.jsx)("div",{className:"col",id:"buttons",children:Object(a.jsx)(o,{handleHome:function(){c(1)}})})]})]})}):Object(a.jsx)("div",{className:"container",id:"content",children:Object(a.jsxs)("div",{className:"row",id:"inps",children:[Object(a.jsx)("div",{className:"col-8",children:x.content(N,A)}),Object(a.jsxs)("div",{className:"col-4",children:[Object(a.jsx)("div",{className:"col",id:"buttons",children:Object(a.jsx)(o,{handleHome:function(){c(1)}})}),Object(a.jsx)("div",{className:"col",id:"buttons",children:Object(a.jsx)(j,{handleGen:function(){return function(){var e=x.Gen(N);v(e),console.log(e),c(3)}()}})})]})]})})]})},x=i(10),f=i(4),g=i(2),p=function(e,t){return{type:"UPDATE",payload:{e:e,id:t}}},w=function(e){return Object(a.jsxs)("div",{className:"mb-3 row",children:[Object(a.jsxs)("label",{className:"col-sm-4 col-form-label",htmlFor:e.id,children:[e.id," ="]}),Object(a.jsx)("div",{className:"col-sm-5",children:Object(a.jsx)("input",{className:"form-control",type:"number",id:e.id,value:e.val,onChange:function(t){e.dispatch(p(t,e.case_id))}})})]})},v=function(e){return Object(a.jsxs)("div",{className:"row mb-3 ",children:[Object(a.jsx)("div",{className:"col-sm-5",children:Object(a.jsx)("input",{type:"number",value:e.low_val,onChange:function(t){e.dispatch(p(t,e.case_id))},id:e.low_id,className:"form-control"})}),Object(a.jsx)("div",{className:"col-sm-2",children:Object(a.jsxs)("p",{children:[" ","\u2264 ",e.name,Object(a.jsx)("sub",{children:e.sub})," \u2264"," "]})}),Object(a.jsx)("div",{className:"col-sm-5",children:Object(a.jsx)("input",{type:"number",onChange:function(t){e.dispatch(p(t,e.case_id))},value:e.high_val,className:"form-control",id:e.high_id})})]})},N=function(e){return Object(a.jsxs)("div",{className:"row",onChange:function(t){e.dispatch(p(t,e.case_id))},children:[Object(a.jsxs)("div",{className:"col-3 form-check",children:[Object(a.jsx)("input",{type:"radio",name:"ar",value:!0,className:"form-check-input"}),Object(a.jsx)("label",{htmlFor:"rad1",className:"form-check-label",children:"1 2 3 ... N"})]}),Object(a.jsxs)("div",{className:"col-3 form-check",children:[Object(a.jsx)("input",{type:"radio",name:"ar",value:!1,defaultChecked:!0,className:"form-check-input"}),Object(a.jsx)("label",{htmlFor:"rad2",className:"form-check-label",children:"[1, 2, 3, ... ,N]"})]})]})},A=[{id:1,t:10,low_n:0,high_n:10,low_ai:0,high_ai:20,ar:!1,desc:Object(a.jsxs)(a.Fragment,{children:["T ",Object(a.jsx)("br",{})," n ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"1"})," A",Object(a.jsx)("sub",{children:"2"})," A",Object(a.jsx)("sub",{children:"3"}),"...A",Object(a.jsx)("sub",{children:"n"})," ] ",Object(a.jsx)("br",{}),"m ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"1"})," A",Object(a.jsx)("sub",{children:"2"})," A",Object(a.jsx)("sub",{children:"3"}),"...A",Object(a.jsx)("sub",{children:"m"})," ]"]}),Gen:function(e){var t=[],i=e.filter((function(e){return 1==e.id}))[0];t.push(i.t),t.push(Object(a.jsx)("br",{}));for(var n=0;n<i.t;n++){for(var c=Math.floor(Math.random()*(i.high_n-i.low_n)+i.low_n),r=[],s=0;s<c;s++)r.push(Math.floor(Math.random()*(i.high_ai-i.low_ai)+i.low_ai));t.push(c),t.push(Object(a.jsx)("br",{})),"true"===i.ar?t.push(r.join(" ")):t.push("["+r.join(",")+"]"),t.push(Object(a.jsx)("br",{}))}return t},content:function(e,t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(w,{id:"t",val:e.filter((function(e){return 1==e.id}))[0].t,case_id:1,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 1==e.id}))[0].low_n,low_id:"low_n",name:"n",high_val:e.filter((function(e){return 1==e.id}))[0].high_n,high_id:"high_n",case_id:1,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 1==e.id}))[0].low_ai,low_id:"low_ai",name:"A",sub:"i",high_val:e.filter((function(e){return 1==e.id}))[0].high_ai,high_id:"high_ai",case_id:1,dispatch:t}),Object(a.jsx)(N,{dispatch:t,case_id:1})]})}},{id:2,t:10,low_n:0,high_n:10,low_m:0,high_m:20,low_ai:0,high_ai:20,ar:!1,desc:Object(a.jsxs)(a.Fragment,{children:["T ",Object(a.jsx)("br",{})," n m ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"1"})," A",Object(a.jsx)("sub",{children:"2"})," A",Object(a.jsx)("sub",{children:"3"}),"...A",Object(a.jsx)("sub",{children:"n"})," ] ",Object(a.jsx)("br",{}),"n m ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"1"})," A",Object(a.jsx)("sub",{children:"2"})," A",Object(a.jsx)("sub",{children:"3"}),"...A",Object(a.jsx)("sub",{children:"n"})," ]"]}),Gen:function(e){var t=[],i=e.filter((function(e){return 2==e.id}))[0];t.push(i.t),t.push(Object(a.jsx)("br",{}));for(var n=0;n<i.t;n++){for(var c=Math.floor(Math.random()*(i.high_n-i.low_n)+i.low_n),r=Math.floor(Math.random()*(i.high_m-i.low_m)+i.low_m),s=[],l=0;l<c;l++)s.push(Math.floor(Math.random()*(i.high_ai-i.low_ai)+i.low_ai));t.push(c),t.push(" "),t.push(r),t.push(Object(a.jsx)("br",{})),"true"===i.ar?t.push(s.join(" ")):t.push("["+s.join(",")+"]"),t.push(Object(a.jsx)("br",{}))}return t},content:function(e,t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(w,{id:"t",val:e.filter((function(e){return 2==e.id}))[0].t,case_id:2,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 2==e.id}))[0].low_n,low_id:"low_n",name:"n",high_val:e.filter((function(e){return 2==e.id}))[0].high_n,high_id:"high_n",case_id:2,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 2==e.id}))[0].low_m,low_id:"low_m",name:"m",high_val:e.filter((function(e){return 2==e.id}))[0].high_m,high_id:"high_m",case_id:2,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 2==e.id}))[0].low_ai,low_id:"low_ai",name:"A",high_val:e.filter((function(e){return 2==e.id}))[0].high_ai,high_id:"high_ai",sub:"i",case_id:2,dispatch:t}),Object(a.jsx)(N,{dispatch:t,case_id:2})]})}},{id:3,t:10,low_bi:0,high_bi:10,low_ai:0,high_ai:20,ar:!1,desc:Object(a.jsxs)(a.Fragment,{children:["T ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"1"})," B",Object(a.jsx)("sub",{children:"1"}),"] ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"2"})," B",Object(a.jsx)("sub",{children:"2"}),"] ",Object(a.jsx)("br",{}),"(t rows of)",Object(a.jsx)("br",{}),"(A, B pair)"]}),Gen:function(e){var t=[],i=e.filter((function(e){return 3==e.id}))[0];t.push(i.t),t.push(Object(a.jsx)("br",{}));for(var n=0;n<i.t;n++){var c=[],r=Math.floor(Math.random()*(i.high_ai-i.low_ai)+i.low_ai),s=Math.floor(Math.random()*(i.high_bi-i.low_bi)+i.low_bi);c.push(r),c.push(s),"true"==i.ar?t.push(c.join(" ")):t.push("["+c.join(",")+"]"),t.push(Object(a.jsx)("br",{}))}return t},content:function(e,t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(w,{id:"t",val:e.filter((function(e){return 3==e.id}))[0].t,case_id:3,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 3==e.id}))[0].low_ai,low_id:"low_ai",name:"A",sub:"i",high_val:e.filter((function(e){return 3==e.id}))[0].high_ai,high_id:"high_ai",case_id:3,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 3==e.id}))[0].low_bi,low_id:"low_bi",name:"B",sub:"i",high_val:e.filter((function(e){return 3==e.id}))[0].high_bi,high_id:"high_bi",case_id:3,dispatch:t}),Object(a.jsx)(N,{dispatch:t,case_id:3})]})}},{id:4,t:10,low_n:0,high_n:10,low_m:0,high_m:20,low_ai:0,high_ai:20,low_bi:0,high_bi:20,ar:!1,desc:Object(a.jsxs)(a.Fragment,{children:["T ",Object(a.jsx)("br",{})," n m ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"1"})," A",Object(a.jsx)("sub",{children:"2"})," A",Object(a.jsx)("sub",{children:"3"}),"...A",Object(a.jsx)("sub",{children:"n"})," ] ",Object(a.jsx)("br",{}),"[B",Object(a.jsx)("sub",{children:"1"})," B",Object(a.jsx)("sub",{children:"2"})," B",Object(a.jsx)("sub",{children:"3"}),"...B",Object(a.jsx)("sub",{children:"m"})," ] ",Object(a.jsx)("br",{}),"... ..."]}),Gen:function(e){var t=[],i=e.filter((function(e){return 4==e.id}))[0];t.push(i.t),t.push(Object(a.jsx)("br",{}));for(var n=0;n<i.t;n++){for(var c=Math.floor(Math.random()*(i.high_n-i.low_n)+i.low_n),r=Math.floor(Math.random()*(i.high_m-i.low_m)+i.low_m),s=[],l=0;l<c;l++)s.push(Math.floor(Math.random()*(i.high_ai-i.low_ai)+i.low_ai));for(var h=[],o=0;o<r;o++)h.push(Math.floor(Math.random()*(i.high_bi-i.low_bi)+i.low_bi));t.push(c),t.push(" "),t.push(r),t.push(Object(a.jsx)("br",{})),"true"===i.ar?(t.push(s.join(" ")),t.push(Object(a.jsx)("br",{})),t.push(h.join(" "))):(t.push("["+s.join(",")+"]"),t.push(Object(a.jsx)("br",{})),t.push("["+h.join(",")+"]")),t.push(Object(a.jsx)("br",{}))}return t},content:function(e,t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(w,{id:"t",val:e.filter((function(e){return 4==e.id}))[0].t,case_id:4,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 4==e.id}))[0].low_n,low_id:"low_n",name:"n",high_val:e.filter((function(e){return 4==e.id}))[0].high_n,high_id:"high_n",case_id:4,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 4==e.id}))[0].low_m,low_id:"low_m",name:"m",high_val:e.filter((function(e){return 4==e.id}))[0].high_m,high_id:"high_m",case_id:4,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 4==e.id}))[0].low_ai,low_id:"low_ai",name:"A",high_val:e.filter((function(e){return 4==e.id}))[0].high_ai,high_id:"high_ai",case_id:4,sub:"i",dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 4==e.id}))[0].low_bi,low_id:"low_bi",name:"B",high_val:e.filter((function(e){return 4==e.id}))[0].high_bi,high_id:"high_bi",case_id:4,sub:"i",dispatch:t}),Object(a.jsx)(N,{dispatch:t,case_id:4})]})}},{id:5,t:10,low_n:0,high_n:10,low_m:0,high_m:20,low_k:0,high_k:20,ar:!1,desc:Object(a.jsxs)(a.Fragment,{children:["T ",Object(a.jsx)("br",{}),"[n m k] ",Object(a.jsx)("br",{}),"[n m k] ",Object(a.jsx)("br",{}),"(t rows of)",Object(a.jsx)("br",{}),"(n, m, k pair)"]}),Gen:function(e){var t=[],i=e.filter((function(e){return 5==e.id}))[0];t.push(i.t),t.push(Object(a.jsx)("br",{}));for(var n=0;n<i.t;n++){var c=[],r=Math.floor(Math.random()*(i.high_n-i.low_n)+i.low_n),s=Math.floor(Math.random()*(i.high_m-i.low_m)+i.low_m),l=Math.floor(Math.random()*(i.high_k-i.low_k)+i.low_k);c.push(r),c.push(s),c.push(l),"true"==i.ar?t.push(c.join(" ")):t.push("["+c.join(",")+"]"),t.push(Object(a.jsx)("br",{}))}return t},content:function(e,t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(w,{id:"t",val:e.filter((function(e){return 5==e.id}))[0].t,case_id:5,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 5==e.id}))[0].low_n,low_id:"low_n",name:"n",high_val:e.filter((function(e){return 5==e.id}))[0].high_n,high_id:"high_n",case_id:5,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 5==e.id}))[0].low_m,low_id:"low_m",name:"m",high_val:e.filter((function(e){return 5==e.id}))[0].high_m,high_id:"high_m",case_id:5,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 5==e.id}))[0].low_k,low_id:"low_k",name:"k",high_val:e.filter((function(e){return 5==e.id}))[0].high_k,high_id:"high_k",case_id:5,dispatch:t}),Object(a.jsx)(N,{dispatch:t,case_id:5})]})}},{id:6,low_n:0,high_n:10,low_m:0,high_m:20,low_ai:0,high_ai:20,ar:!1,desc:Object(a.jsxs)(a.Fragment,{children:["n * m (matrix) ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"11"})," A",Object(a.jsx)("sub",{children:"12"})," A",Object(a.jsx)("sub",{children:"13"}),"...A",Object(a.jsx)("sub",{children:"1m"})," ] ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"21"})," A",Object(a.jsx)("sub",{children:"22"})," A",Object(a.jsx)("sub",{children:"23"}),"...A",Object(a.jsx)("sub",{children:"2m"})," ] ",Object(a.jsx)("br",{}),"[A",Object(a.jsx)("sub",{children:"n1"})," A",Object(a.jsx)("sub",{children:"n2"})," A",Object(a.jsx)("sub",{children:"n3"}),"...A",Object(a.jsx)("sub",{children:"nm"})," ]"]}),Gen:function(e){var t=[],i=e.filter((function(e){return 6==e.id}))[0],n=Math.floor(Math.random()*(i.high_n-i.low_n)+i.low_n),c=Math.floor(Math.random()*(i.high_m-i.low_m)+i.low_m);t.push(n),t.push(" "),t.push(c),t.push(Object(a.jsx)("br",{}));for(var r=0;r<n;r++){for(var s=[],l=0;l<c;l++)s.push(Math.floor(Math.random()*(i.high_ai-i.low_ai)+i.low_ai));"true"===i.ar?t.push(s.join(" ")):t.push("["+s.join(",")+"]"),t.push(Object(a.jsx)("br",{}))}return console.log(t,"check"),t},content:function(e,t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(v,{low_val:e.filter((function(e){return 6==e.id}))[0].low_n,low_id:"low_n",name:"n",high_val:e.filter((function(e){return 6==e.id}))[0].high_n,high_id:"high_n",case_id:6,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 6==e.id}))[0].low_m,low_id:"low_m",name:"m",high_val:e.filter((function(e){return 6==e.id}))[0].high_m,high_id:"high_m",case_id:6,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 6==e.id}))[0].low_ai,low_id:"low_ai",name:"A",high_val:e.filter((function(e){return 6==e.id}))[0].high_ai,high_id:"high_ai",sub:"i",case_id:6,dispatch:t}),Object(a.jsx)(N,{dispatch:t,case_id:6})]})}},{id:7,t:10,low_n:0,high_n:10,chr:"r a n d o m",ar:!0,desc:Object(a.jsxs)(a.Fragment,{children:["T ",Object(a.jsx)("br",{})," n ",Object(a.jsx)("br",{}),"Custom String ",Object(a.jsx)("br",{}),"(ex: 0 1) ",Object(a.jsx)("br",{}),"(ex: +/-) ",Object(a.jsx)("br",{}),"(ex: a 2 b c)"]}),Gen:function(e){var t=[],i=e.filter((function(e){return 7==e.id}))[0];t.push(i.t),t.push(Object(a.jsx)("br",{}));for(var n=0;n<i.t;n++){for(var c=Math.floor(Math.random()*(i.high_n-i.low_n)+i.low_n),r=i.chr.split(" "),s="",l=0;l<c;l++)s+=r[Math.floor(Math.random()*r.length)];t.push(c),t.push(Object(a.jsx)("br",{})),t.push(s),t.push(Object(a.jsx)("br",{}))}return t},content:function(e,t){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(w,{id:"t",val:e.filter((function(e){return 7==e.id}))[0].t,case_id:7,dispatch:t}),Object(a.jsx)(v,{low_val:e.filter((function(e){return 7==e.id}))[0].low_n,low_id:"low_n",name:"n",high_val:e.filter((function(e){return 7==e.id}))[0].high_n,high_id:"high_n",case_id:7,dispatch:t}),Object(a.jsxs)("div",{className:"mb-3 row",children:[Object(a.jsx)("label",{className:"col-sm-4 col-form-label",htmlFor:"chr",children:"Characters:"}),Object(a.jsx)("div",{className:"col-sm-5",children:Object(a.jsx)("input",{type:"text",id:"chr",className:"chr form-control",value:e.filter((function(e){return 7==e.id}))[0].chr,placeholder:"Enter space separated characters",onChange:function(e){t(p(e,7))}})}),Object(a.jsx)("div",{className:"col-4"})]})]})}}],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,i=t.e,n=t.id,c=e.map((function(e){return e.id==n?"radio"===i.target.type?(console.log("check",parseInt(i.target.value),typeof i.target.value),Object(g.a)(Object(g.a)({},e),{},Object(f.a)({},i.target.name,i.target.value))):"chr"===i.target.className?Object(g.a)(Object(g.a)({},e),{},Object(f.a)({},i.target.id,i.target.value)):Object(g.a)(Object(g.a)({},e),{},Object(f.a)({},i.target.id,parseInt(i.target.value))):e}));return c},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"UPDATE"===t.type?M(e,t.payload):e},y=Object(x.a)(k);r.a.render(Object(a.jsx)(_.a,{store:y,children:Object(a.jsx)(m,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8a5463e7.chunk.js.map