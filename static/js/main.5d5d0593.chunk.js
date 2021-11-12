(this.webpackJsonplmc=this.webpackJsonplmc||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(5),i=r.n(a),s=(r(11),r(3)),l=(r(12),r(6)),u=["LDA","STA","ADD","SUB","INP","OUT","HLT","BRZ","BRP","BRA","DAT"],o=["INP","OUT","HLT"],j={INP:901,OUT:902,HLT:0},p={LDA:"5",STA:"3",ADD:"1",SUB:"2",BRZ:"7",BRP:"8",BRA:"6",DAT:""},b=function(e){for(var t=new Array(100).fill(0),r=e.split(/\r?\n/).filter((function(e){return 0!==e.length})).map((function(e){return e.replace(/\/\/.*?$/,"").split(/\s+/).filter((function(e){return 0!==e.length})).map((function(e){return function(e){return isNaN(e)||parseInt(e)!==parseFloat(e)?u.includes(e)?{type:"instruction",value:e}:e.match(/^[A-Z]*$/)?{type:"label",value:e}:{type:"invalid",value:e}:{type:"int",value:parseInt(e)}}(e.toUpperCase())}))})).filter((function(e){return 0!==e.length})),n={},c=0,a=0;a<r.length;a++){var i=r[a];"label"===i[0].type&&(n[i[0].value]=c,r[a]=i=i.slice(1)),c+=i.filter((function(e){return"instruction"===e.type})).length}for(var s=(r=r.filter((function(e){return 0!==e.length}))).flat(),l=0,b=0;b<s.length;b++){var m=s[b];if("instruction"===m.type){var h=m.value;if(o.includes(h))t[l]=j[h],l++;else{var d=p[h],O=s[b+1],v=d;"int"===O.type?"DAT"===h?v=O.value.toString():v+=O.value.toString().padStart(2,"0"):"label"===O.type&&("DAT"===h?v=O.value.toString():v+=n[O.value].toString().padStart(2,"0")),v.length,t[l]=parseInt(v),l++,b++}}}return t},m=function(e,t,r,n,c){r.pc=t;var a=e[r.pc++].toString().padStart(3,"0"),i=parseInt(a[0]),s=10*parseInt(a[1])+parseInt(a[2]);r.ir=i,r.ar=s;var l=!1,u=!1;switch(c&&(r.ac=parseInt(c)),i){case 0:l=!0;break;case 1:r.ac=r.ac+e[s];break;case 2:r.ac=r.ac-e[s];break;case 3:e[s]=r.ac;break;case 5:r.ac=e[s];break;case 6:r.pc=s;break;case 7:0==r.ac&&(r.pc=s);break;case 8:r.ac>=0&&(r.pc=s);break;case 9:1===s?u=!0:2===s&&(n+=r.ac+"\n")}return{memory:e,ip:r.pc,registers:r,output:n,halt:l,waitingForInput:u}},h=r(2);var d=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(Array(100).fill(0)),r=Object(s.a)(t,2),c=r[0],a=r[1],i=Object(n.useState)(0),u=Object(s.a)(i,2),o=u[0],j=u[1],p=Object(n.useState)({pc:0,ir:0,ar:0,ac:0}),d=Object(s.a)(p,2),O=d[0],v=d[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),x=g[0],A=g[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),N=S[0],D=S[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"title",children:"Little Man Computer"}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:function(){var t=b(e.current.getValue());a(t)},children:"Assemble (to RAM)"}),Object(h.jsx)("button",{onClick:function(){for(var e=c,t=0,r={pc:0,ir:0,ar:0,ac:0},n=!1,i="";!n&&t<100;){var s=m(e,t,r,i,null);e=s.memory,t=s.ip,r=s.registers,n=s.halt,i=s.output,s.waitingForInput}t>=100&&(t=99),j(t),v(r),a(e),A(i)},children:"Run"})]}),Object(h.jsxs)("main",{children:[Object(h.jsx)(l.a,{height:"90vh",width:"45vw",theme:"vs-dark",defaultValue:"        LDA VALA\n        ADD VALB\n        HLT\nVALA    DAT 12\nVALB    DAT 15",onMount:function(t,r){e.current=t}}),Object(h.jsxs)("div",{className:"monitor",children:[Object(h.jsx)("label",{htmlFor:"ioinput",children:"Input"}),Object(h.jsx)("input",{type:"text",name:"ioinput",value:N,onChange:function(e){D(e.target.value)},onSubmit:function(e){!0,e.preventDefault()}}),Object(h.jsxs)("div",{className:"mem-reg-container",children:[Object(h.jsxs)("div",{className:"memory",children:[Object(h.jsx)("h2",{children:"Memory"}),Object(h.jsx)(h.Fragment,{children:function(){for(var e=[],t=0;t<c.length;t+=10){var r=c.slice(t,t+10);e.push(r)}return e.map((function(e,t){return Object(h.jsxs)("div",{className:"memory-row",children:[Object(h.jsxs)("p",{className:"memory-item",children:[10*t,": "]}),Object(h.jsx)(h.Fragment,{children:e.map((function(e,r){return Object(h.jsx)("p",{className:"memory-item ".concat(10*t+r===o?"green-border":""),children:e},"item"+10*t+r)}))})]},"memory"+t)}))}()})]}),Object(h.jsxs)("div",{className:"registers",children:[Object(h.jsx)("h2",{children:"Registers"}),Object(h.jsx)(h.Fragment,{children:function(){var e={pc:"Program Counter",ir:"Instruction",ar:"Address",ac:"Accumulator"};return Object.entries(O).map((function(t){var r=Object(s.a)(t,2),n=r[0],c=r[1];return Object(h.jsxs)("p",{className:"pc"===n?"green-border":"",children:[e[n],": ",c]},n)}))}()})]}),Object(h.jsxs)("div",{className:"output-box",children:[Object(h.jsx)("h2",{children:"Output"}),Object(h.jsx)("hr",{}),Object(h.jsx)("p",{className:"output",children:x})]})]})]})]})]})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5d5d0593.chunk.js.map