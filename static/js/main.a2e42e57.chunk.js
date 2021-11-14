(this.webpackJsonplmc=this.webpackJsonplmc||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(8),l=r.n(a),u=(r(15),r(7)),i=r(3),o=(r(16),r(10)),s=r(9),j=["LDA","STA","ADD","SUB","INP","OUT","HLT","BRZ","BRP","BRA","DAT"],b=["INP","OUT","HLT"],p={INP:901,OUT:902,HLT:0},m={LDA:"5",STA:"3",ADD:"1",SUB:"2",BRZ:"7",BRP:"8",BRA:"6",DAT:""},f=function(e){for(var t=new Array(100).fill(0),r=e.split(/\r?\n/).filter((function(e){return 0!==e.length})).map((function(e,t){return e.replace(/\/\/.*?$/,"").split(/\s+/).filter((function(e){return 0!==e.length})).map((function(e){return function(e,t){return isNaN(e)||parseInt(e)!==parseFloat(e)?j.includes(e)?{type:"instruction",value:e,line:t}:e.match(/^[A-Z][A-Z0-9]+$/)?{type:"label",value:e,line:t}:{type:"invalid",value:e,line:t}:{type:"int",value:parseInt(e),line:t}}(e.toUpperCase(),t+1)}))})).filter((function(e){return 0!==e.length})),n={},c=0,a=0;a<r.length;a++){var l=r[a];"label"===l[0].type&&(n[l[0].value]=c,r[a]=l=l.slice(1)),c+=l.filter((function(e){return"instruction"===e.type})).length}var u,i=(r=r.filter((function(e){return 0!==e.length}))).flat(),o=Object(s.a)(i);try{for(o.s();!(u=o.n()).done;){var f=u.value;if("invalid"===f.type)return{memory:new Array(100).fill(0),error:"Unexpected token ".concat(f.value),errorLoc:f}}}catch(S){o.e(S)}finally{o.f()}for(var d=0,h=0;h<i.length;h++){var O=i[h];if("instruction"!==O.type)return{memory:new Array(100).fill(0),error:"Expected instruction, got ".concat(O.value),errorLoc:O};var v=O.value;if(b.includes(v))t[d]=p[v],d++;else{var y=m[v],g=i[h+1],x=y;if("int"===g.type)"DAT"===v?x=g.value.toString():x+=g.value.toString().padStart(2,"0");else{if("label"!==g.type)return{memory:new Array(100).fill(0),error:"Expected value, got ".concat(g.value),errorLoc:O};if(!(g.value in n))return{memory:new Array(100).fill(0),error:"Label ".concat(g.value," is not bound"),errorLoc:O};"DAT"===v?x=n[g.value].toString():x+=n[g.value].toString().padStart(2,"0")}if(x.length>3)return{memory:new Array(100).fill(0),error:"Values cannot exceed 3 digits (got ".concat(x,")"),errorLoc:O};t[d]=parseInt(x),d++,h++}if(d>99)return{memory:new Array(100).fill(0),error:"Exceeded memory capacity of 100 @ ".concat(O.value),errorLoc:O}}return{memory:t,error:null,errorLoc:null}},d=function(e,t,r,n,c,a){r.pc=t;var l=e[r.pc++].toString().padStart(3,"0"),u=parseInt(l[0]),i=10*parseInt(l[1])+parseInt(l[2]);r.ir=u,r.ar=i;var o=!1,s=!1;switch(c&&a&&(r.ac=parseInt(a)),u){case 0:o=!0;break;case 1:r.ac=r.ac+e[i];break;case 2:r.ac=r.ac-e[i];break;case 3:e[i]=r.ac;break;case 5:r.ac=e[i];break;case 6:r.pc=i;break;case 7:0===r.ac&&(r.pc=i);break;case 8:r.ac>=0&&(r.pc=i);break;case 9:1===i?s=!0:2===i&&(n+=r.ac+" ")}return{memory:e,ip:r.pc,registers:r,output:n,halt:o,waitingForInput:s}},h=r(2),O=["// Input two numbers, sum them, and output the result","        INP","        STA FIRST","        INP","        ADD FIRST","        OUT","        HLT","FIRST   DAT 0"].join("\n");var v=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(Array(100).fill(0)),r=Object(i.a)(t,2),c=r[0],a=r[1],l=Object(n.useState)(0),s=Object(i.a)(l,2),j=s[0],b=s[1],p=Object(n.useState)({pc:0,ir:0,ar:0,ac:0}),m=Object(i.a)(p,2),v=m[0],y=m[1],g=Object(n.useState)(""),x=Object(i.a)(g,2),S=x[0],A=x[1],I=Object(n.useState)(""),N=Object(i.a)(I,2),T=N[0],w=N[1],k=Object(n.useState)(""),L=Object(i.a)(k,2),D=L[0],R=L[1],C=Object(n.useState)(!1),F=Object(i.a)(C,2),B=F[0],P=F[1],U=Object(n.useState)(!1),H=Object(i.a)(U,2),M=H[0],E=H[1],Z=Object(n.useState)([]),V=Object(i.a)(Z,2),z=V[0],J=V[1],$=Object(n.useState)(!1),W=Object(i.a)($,2),q=W[0],G=W[1],K=Object(n.useState)(""),Q=Object(i.a)(K,2),X=Q[0],Y=Q[1],_=Object(n.useState)(60),ee=Object(i.a)(_,2),te=ee[0],re=ee[1],ne=Object(n.useRef)(null),ce=Object(n.useRef)(null),ae=function(e,t){return e?t?"red-border":"green-border":""},le=function(){clearInterval(ce.current)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"title",children:"Little Man Computer"}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:function(){le(),function(){var t=f(e.current.getValue());t.error?w("[".concat(t.errorLoc.line,"]: ").concat(t.error)):(a(t.memory),w(""))}(),b(0),y({pc:0,ir:0,ar:0,ac:0}),A(""),P(!1),E(!1),J([]),G(!1)},children:"Assemble To RAM (reset)"}),Object(h.jsx)("button",{onClick:function(){if(""===T){var e=c,t=0,r={pc:0,ir:0,ar:0,ac:0},n=!1,l="",i=!1;ce.current=setInterval((function(){if(!i||ne.current){var c=Object(u.a)(e),o=r.ac,s=d(e,t,r,l,i,ne.current);e=s.memory,t=s.ip,r=s.registers,n=s.halt,l=s.output,i=s.waitingForInput,ne.current&&(ne.current=null),(n||t>=100)&&(clearInterval(ce.current),ce.current=null),t>=100&&(t=99),b(t),y(r),a(e),A(l),P(i),E(n);for(var j=[],p=0;p<e.length;p++)c[p]!==e[p]&&j.push(p);J(j),G(o!==r.ac)}}),1e3/te)}},children:"Run"}),Object(h.jsx)("button",{onClick:function(){""===T&&(le(),E(!0))},children:"Stop"}),Object(h.jsx)("button",{onClick:function(){if(""===T&&(clearInterval(ce.current),(!B||ne.current)&&!(M||j>=100))){var e,t=c,r=j,n=v,l="",i=B,o=Object(u.a)(t),s=n.ac,p=d(t,r,n,l,i,ne.current);t=p.memory,r=p.ip,n=p.registers,e=p.halt,l=p.output,i=p.waitingForInput,ne.current&&(ne.current=null),(e||r>=100)&&(clearInterval(ce.current),ce.current=null),r>=100&&(r=99),b(r),y(n),a(t),A(l),P(i),E(e);for(var m=[],f=0;f<t.length;f++)o[f]!==t[f]&&m.push(f);J(m),G(s!==n.ac)}},children:"Step"})]}),Object(h.jsxs)("main",{children:[Object(h.jsx)(o.a,{height:"90vh",width:"45vw",theme:"vs-dark",defaultValue:O,onMount:function(t,r){e.current=t}}),Object(h.jsxs)("div",{className:"monitor",children:[Object(h.jsxs)("div",{className:"forms",children:[Object(h.jsxs)("form",{onSubmit:function(e){ne.current=D,R(""),e.preventDefault()},className:"input-form",autoComplete:"off",autoCapitalize:"off",autoCorrect:"off",children:[Object(h.jsx)("label",{htmlFor:"ioinput",className:B?"green-border":"",children:"Input"}),Object(h.jsx)("input",{type:"text",name:"ioinput",value:D,onChange:function(e){R(e.target.value)}})]}),Object(h.jsxs)("form",{onSubmit:function(e){var t=parseInt(X)||60;t<=0&&(t=60),Y(""),re(t),e.preventDefault()},children:[Object(h.jsxs)("label",{htmlFor:"runspeed",children:["Speed (Current: ",te,"Hz)"]}),Object(h.jsx)("input",{type:"number",name:"runspeed",value:X,onChange:function(e){Y(e.target.value)}})]})]}),Object(h.jsxs)("div",{className:"mem-reg-container",children:[Object(h.jsxs)("div",{className:"memory",children:[Object(h.jsx)("h2",{children:"Memory"}),Object(h.jsx)(h.Fragment,{children:function(){for(var e=[],t=0;t<c.length;t+=10){var r=c.slice(t,t+10);e.push(r)}return e.map((function(e,t){return Object(h.jsxs)("div",{className:"memory-row",children:[Object(h.jsxs)("p",{className:"memory-item",children:[10*t,": "]}),Object(h.jsx)(h.Fragment,{children:e.map((function(e,r){return Object(h.jsx)("p",{className:"memory-item ".concat(ae(10*t+r===j,M)," ").concat(z.includes(10*t+r)?"yellow-border":""),children:e},"item"+10*t+r)}))})]},"memory"+t)}))}()})]}),Object(h.jsxs)("div",{className:"registers",children:[Object(h.jsx)("h2",{children:"Registers"}),Object(h.jsx)(h.Fragment,{children:function(){var e={pc:"Program Counter",ir:"Instruction",ar:"Address",ac:"Accumulator"};return Object.entries(v).map((function(t){var r=Object(i.a)(t,2),n=r[0],c=r[1];return Object(h.jsxs)("p",{style:{minWidth:e[n].length+2+3+"ch"},className:"register ".concat(ae("pc"===n,M)," ").concat("ac"===n&&q?"yellow-border":""),children:[e[n],": ",c]},n)}))}()})]})]}),Object(h.jsxs)("div",{className:"output-box",children:[Object(h.jsx)("h2",{children:"Output"}),Object(h.jsx)("p",{className:"output ".concat(""!==T?"error-output":""),children:""===T?S:T})]})]})]})]})};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a2e42e57.chunk.js.map