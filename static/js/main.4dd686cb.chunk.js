(this.webpackJsonplmc=this.webpackJsonplmc||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(6),i=r.n(a),l=(r(13),r(3)),u=(r(14),r(8)),o=r(7),s=["LDA","STA","ADD","SUB","INP","OUT","HLT","BRZ","BRP","BRA","DAT"],m=["INP","OUT","HLT"],j={INP:901,OUT:902,HLT:0},p={LDA:"5",STA:"3",ADD:"1",SUB:"2",BRZ:"7",BRP:"8",BRA:"6",DAT:""},b=function(e){for(var t=new Array(100).fill(0),r=e.split(/\r?\n/).filter((function(e){return 0!==e.length})).map((function(e,t){return e.replace(/\/\/.*?$/,"").split(/\s+/).filter((function(e){return 0!==e.length})).map((function(e){return function(e,t){return isNaN(e)||parseInt(e)!==parseFloat(e)?s.includes(e)?{type:"instruction",value:e,line:t}:e.match(/^[A-Z][A-Z0-9]+$/)?{type:"label",value:e,line:t}:{type:"invalid",value:e,line:t}:{type:"int",value:parseInt(e),line:t}}(e.toUpperCase(),t+1)}))})).filter((function(e){return 0!==e.length})),n={},c=0,a=0;a<r.length;a++){var i=r[a];"label"===i[0].type&&(n[i[0].value]=c,r[a]=i=i.slice(1)),c+=i.filter((function(e){return"instruction"===e.type})).length}var l,u=(r=r.filter((function(e){return 0!==e.length}))).flat(),b=Object(o.a)(u);try{for(b.s();!(l=b.n()).done;){var f=l.value;if("invalid"===f.type)return{memory:new Array(100).fill(0),error:"Unexpected token ".concat(f.value),errorLoc:f}}}catch(A){b.e(A)}finally{b.f()}for(var d=0,h=0;h<u.length;h++){var v=u[h];if("instruction"!==v.type)return{memory:new Array(100).fill(0),error:"Expected instruction, got ".concat(v.value),errorLoc:v};var O=v.value;if(m.includes(O))t[d]=j[O],d++;else{var y=p[O],g=u[h+1],x=y;if("int"===g.type)"DAT"===O?x=g.value.toString():x+=g.value.toString().padStart(2,"0");else{if("label"!==g.type)return{memory:new Array(100).fill(0),error:"Expected value, got ".concat(g.value),errorLoc:v};if(!(g.value in n))return{memory:new Array(100).fill(0),error:"Label ".concat(g.value," is not bound"),errorLoc:v};"DAT"===O?x=n[g.value].toString():x+=n[g.value].toString().padStart(2,"0")}if(x.length>3)return{memory:new Array(100).fill(0),error:"Values cannot exceed 3 digits (got ".concat(x,")"),errorLoc:v};t[d]=parseInt(x),d++,h++}if(d>99)return{memory:new Array(100).fill(0),error:"Exceeded memory capacity of 100 @ ".concat(v.value),errorLoc:v}}return{memory:t,error:null,errorLoc:null}},f=function(e,t,r,n,c,a){r.pc=t;var i=e[r.pc++].toString().padStart(3,"0"),l=parseInt(i[0]),u=10*parseInt(i[1])+parseInt(i[2]);r.ir=l,r.ar=u;var o=!1,s=!1;switch(c&&a&&(r.ac=parseInt(a)),l){case 0:o=!0;break;case 1:r.ac=r.ac+e[u];break;case 2:r.ac=r.ac-e[u];break;case 3:e[u]=r.ac;break;case 5:r.ac=e[u];break;case 6:r.pc=u;break;case 7:0===r.ac&&(r.pc=u);break;case 8:r.ac>=0&&(r.pc=u);break;case 9:1===u?s=!0:2===u&&(n+=r.ac+" ")}return{memory:e,ip:r.pc,registers:r,output:n,halt:o,waitingForInput:s}},d=r(2),h=["// Input two numbers, sum them, and output the result","        INP","        STA FIRST","        INP","        ADD FIRST","        OUT","        HLT","FIRST   DAT 0"].join("\n");var v=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(Array(100).fill(0)),r=Object(l.a)(t,2),c=r[0],a=r[1],i=Object(n.useState)(0),o=Object(l.a)(i,2),s=o[0],m=o[1],j=Object(n.useState)({pc:0,ir:0,ar:0,ac:0}),p=Object(l.a)(j,2),v=p[0],O=p[1],y=Object(n.useState)(""),g=Object(l.a)(y,2),x=g[0],A=g[1],S=Object(n.useState)(""),I=Object(l.a)(S,2),N=I[0],T=I[1],w=Object(n.useState)(""),k=Object(l.a)(w,2),L=k[0],R=k[1],D=Object(n.useState)(!1),F=Object(l.a)(D,2),B=F[0],C=F[1],P=Object(n.useState)(!1),U=Object(l.a)(P,2),M=U[0],E=U[1],H=Object(n.useRef)(null),Z=Object(n.useRef)(null),V=function(e,t){return e?t?"red-border":"green-border":""},J=function(){clearInterval(Z.current)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"title",children:"Little Man Computer"}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:function(){J(),function(){var t=b(e.current.getValue());t.error?T("[".concat(t.errorLoc.line,"]: ").concat(t.error)):(a(t.memory),T(""))}(),m(0),O({pc:0,ir:0,ar:0,ac:0}),A(""),C(!1),E(!1)},children:"Assemble To RAM (reset)"}),Object(d.jsx)("button",{onClick:function(){if(""===N){var e=c,t=0,r={pc:0,ir:0,ar:0,ac:0},n=!1,i="",l=!1;Z.current=setInterval((function(){if(!l||H.current){var c=f(e,t,r,i,l,H.current);e=c.memory,t=c.ip,r=c.registers,n=c.halt,i=c.output,l=c.waitingForInput,H.current&&(H.current=null),(n||t>=100)&&(clearInterval(Z.current),Z.current=null),t>=100&&(t=99),m(t),O(r),a(e),A(i),C(l),E(n)}}),1e3/60)}},children:"Run"}),Object(d.jsx)("button",{onClick:function(){""===N&&(J(),E(!0))},children:"Stop"}),Object(d.jsx)("button",{onClick:function(){if(""===N&&(clearInterval(Z.current),(!B||H.current)&&!(M||s>=100))){var e,t=c,r=s,n=v,i="",l=B,u=f(t,r,n,i,l,H.current);t=u.memory,r=u.ip,n=u.registers,e=u.halt,i=u.output,l=u.waitingForInput,H.current&&(H.current=null),(e||r>=100)&&(clearInterval(Z.current),Z.current=null),r>=100&&(r=99),m(r),O(n),a(t),A(i),C(l),E(e)}},children:"Step"})]}),Object(d.jsxs)("main",{children:[Object(d.jsx)(u.a,{height:"90vh",width:"45vw",theme:"vs-dark",defaultValue:h,onMount:function(t,r){e.current=t}}),Object(d.jsxs)("div",{className:"monitor",children:[Object(d.jsxs)("form",{onSubmit:function(e){H.current=L,R(""),e.preventDefault()},className:"input-form",children:[Object(d.jsx)("label",{htmlFor:"ioinput",className:B?"green-border":"",children:"Input"}),Object(d.jsx)("input",{type:"text",name:"ioinput",value:L,onChange:function(e){R(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mem-reg-container",children:[Object(d.jsxs)("div",{className:"memory",children:[Object(d.jsx)("h2",{children:"Memory"}),Object(d.jsx)(d.Fragment,{children:function(){for(var e=[],t=0;t<c.length;t+=10){var r=c.slice(t,t+10);e.push(r)}return e.map((function(e,t){return Object(d.jsxs)("div",{className:"memory-row",children:[Object(d.jsxs)("p",{className:"memory-item",children:[10*t,": "]}),Object(d.jsx)(d.Fragment,{children:e.map((function(e,r){return Object(d.jsx)("p",{className:"memory-item ".concat(V(10*t+r===s,M)),children:e},"item"+10*t+r)}))})]},"memory"+t)}))}()})]}),Object(d.jsxs)("div",{className:"registers",children:[Object(d.jsx)("h2",{children:"Registers"}),Object(d.jsx)(d.Fragment,{children:function(){var e={pc:"Program Counter",ir:"Instruction",ar:"Address",ac:"Accumulator"};return Object.entries(v).map((function(t){var r=Object(l.a)(t,2),n=r[0],c=r[1];return Object(d.jsxs)("p",{style:{minWidth:e[n].length+2+3+"ch"},className:V("pc"===n,M),children:[e[n],": ",c]},n)}))}()})]})]}),Object(d.jsxs)("div",{className:"output-box",children:[Object(d.jsx)("h2",{children:"Output"}),Object(d.jsx)("p",{className:"output ".concat(""!==N?"error-output":""),children:""===N?x:N})]})]})]})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4dd686cb.chunk.js.map