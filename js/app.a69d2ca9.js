(function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],b=0,f=[];b<c.length;b++)i=c[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-animations/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0dc7":function(e,t,n){},3235:function(e,t,n){},4905:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container"},a={class:"container"},i={class:"container"},c={key:0},l={class:"container"},s=Object(r["i"])("p",null,"This is a test dialog!",-1),u={class:"container"};function b(e,t,n,b,f,d){var p=Object(r["z"])("user-list"),O=Object(r["z"])("router-view"),j=Object(r["z"])("base-modal");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])("div",o,[Object(r["i"])(p)]),Object(r["i"])(O,null,{default:Object(r["F"])((function(e){return[Object(r["i"])(r["b"],{name:"fade-button",mode:"out-in"},{default:Object(r["F"])((function(){return[(Object(r["r"])(),Object(r["f"])(Object(r["A"])(e.Component)))]})),_:2},1024)]})),_:1}),Object(r["i"])("div",a,[Object(r["i"])("div",{class:["block",{animate:f.animatedBlock}]},null,2),Object(r["i"])("button",{onClick:t[1]||(t[1]=function(){return d.animateBlock&&d.animateBlock.apply(d,arguments)})}," Animate ")]),Object(r["i"])("div",i,[Object(r["i"])(r["b"],{css:!1,name:"para",onBeforeEnter:d.beforeEnterTransition,onBeforeLeave:d.beforeLeaveTransition,onEnter:d.enter,onLeave:d.leave,onEnterCancelled:d.enterCancelled,onLeaveCancelled:d.leaveCancelled},{default:Object(r["F"])((function(){return[f.paragraphIsVisible?(Object(r["r"])(),Object(r["f"])("p",c,"Sometie Visible...")):Object(r["g"])("",!0)]})),_:1},8,["onBeforeEnter","onBeforeLeave","onEnter","onLeave","onEnterCancelled","onLeaveCancelled"]),Object(r["i"])("button",{onClick:t[2]||(t[2]=function(){return d.toggleParagraph&&d.toggleParagraph.apply(d,arguments)})},"Toggle Paragraph")]),Object(r["i"])("div",l,[Object(r["i"])(r["b"],{name:"fade-button",mode:"out-in"},{default:Object(r["F"])((function(){return[f.usersAreVisible?(Object(r["r"])(),Object(r["f"])("button",{key:1,onClick:t[4]||(t[4]=function(){return d.hideUsers&&d.hideUsers.apply(d,arguments)})},"Hide Users")):(Object(r["r"])(),Object(r["f"])("button",{key:0,onClick:t[3]||(t[3]=function(){return d.showUsers&&d.showUsers.apply(d,arguments)})},"Show Users"))]})),_:1})]),Object(r["i"])(j,{onClose:d.hideDialog,open:f.dialogIsVisible},{default:Object(r["F"])((function(){return[s,Object(r["i"])("button",{onClick:t[5]||(t[5]=function(){return d.hideDialog&&d.hideDialog.apply(d,arguments)})},"Close it!")]})),_:1},8,["onClose","open"]),Object(r["i"])("div",u,[Object(r["i"])("button",{onClick:t[6]||(t[6]=function(){return d.showDialog&&d.showDialog.apply(d,arguments)})},"Show Dialog")])],64)}var f=Object(r["G"])("data-v-0bf5640b");Object(r["u"])("data-v-0bf5640b");var d={type:"text",ref:"userName"};Object(r["s"])();var p=f((function(e,t,n,o,a,i){return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(r["c"],{tag:"ul",name:"user-list"},{default:f((function(){return[(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["x"])(a.users,(function(e){return Object(r["r"])(),Object(r["f"])("li",{key:e,onClick:function(t){return i.removeUser(e)}},Object(r["C"])(e),9,["onClick"])})),128))]})),_:1}),Object(r["i"])("div",null,[Object(r["i"])("input",d,null,512),Object(r["i"])("button",{onClick:t[1]||(t[1]=function(){return i.addUser&&i.addUser.apply(i,arguments)})},"Add User")])],64)})),O=(n("4de4"),{data:function(){return{users:["Gagan","Troye","Mary","Andy"]}},methods:{removeUser:function(e){this.users=this.users.filter((function(t){return t!==e}))},addUser:function(){this.users.unshift(this.$refs.userName.value)}}});n("7219");O.render=p,O.__scopeId="data-v-0bf5640b";var j=O,v={components:{UserList:j},data:function(){return{dialogIsVisible:!1,animatedBlock:!1,paragraphIsVisible:!1,usersAreVisible:!1,enterInterval:null,leaveInterval:null}},methods:{toggleParagraph:function(){this.paragraphIsVisible=!this.paragraphIsVisible},animateBlock:function(){this.animatedBlock=!this.animatedBlock},showDialog:function(){this.dialogIsVisible=!0},hideDialog:function(){this.dialogIsVisible=!1},showUsers:function(){this.usersAreVisible=!0},hideUsers:function(){this.usersAreVisible=!1},beforeEnterTransition:function(e){console.log("beforeEnterTransition"),e.style.opacity=0},beforeLeaveTransition:function(e){console.log("beforeLeaveTransition"),e.style.opacity=1},enter:function(e,t){var n=this,r=1;this.enterInterval=setInterval((function(){e.style.opacity=.01*r,r++,r>100&&(clearInterval(n.enterInterval),t())}),20)},leave:function(e,t){var n=this,r=1;this.leaveInterval=setInterval((function(){e.style.opacity=1-.01*r,r++,r>100&&(clearInterval(n.leaveInterval),t())}),20)},enterCancelled:function(){clearInterval(this.enterInterval)},leaveCancelled:function(){clearInterval(this.leaveInterval)}}};n("6b4a");v.render=b;var h=v,g=Object(r["G"])("data-v-6613c433");Object(r["u"])("data-v-6613c433");var y={key:0,open:""};Object(r["s"])();var m=g((function(e,t,n,o,a,i){return Object(r["r"])(),Object(r["f"])(r["a"],null,[n.open?(Object(r["r"])(),Object(r["f"])("div",{key:0,class:"backdrop",onClick:t[1]||(t[1]=function(t){return e.$emit("close")})})):Object(r["g"])("",!0),Object(r["i"])(r["b"],{name:"modal"},{default:g((function(){return[n.open?(Object(r["r"])(),Object(r["f"])("dialog",y,[Object(r["y"])(e.$slots,"default")])):Object(r["g"])("",!0)]})),_:1})],64)})),k={props:["open"],emits:["close"]};n("9fb5");k.render=m,k.__scopeId="data-v-6613c433";var I=k,C={class:"container"},w=Object(r["i"])("h2",null,"About Page",-1),_=Object(r["h"])("Go to Users page");function U(e,t,n,o,a,i){var c=Object(r["z"])("router-link");return Object(r["r"])(),Object(r["f"])("div",C,[w,Object(r["i"])(c,{to:"/users"},{default:Object(r["F"])((function(){return[_]})),_:1})])}var P={};P.render=U;var V=P,B={class:"container"},T=Object(r["i"])("h2",null,"Users Page",-1),A=Object(r["h"])("Go to About page");function L(e,t,n,o,a,i){var c=Object(r["z"])("router-link");return Object(r["r"])(),Object(r["f"])("div",B,[T,Object(r["i"])(c,{to:"/about"},{default:Object(r["F"])((function(){return[A]})),_:1})])}var E={};E.render=L;var x=E,D=n("6c02"),S=Object(D["a"])({history:Object(D["b"])(),routes:[{path:"/",redirect:"/users"},{path:"/about",component:V},{path:"/users",component:x}]}),F=Object(r["e"])(h).component("base-modal",I).use(S);S.isReady().then((function(){F.mount("#app")}))},"6b4a":function(e,t,n){"use strict";n("4905")},7219:function(e,t,n){"use strict";n("3235")},"9fb5":function(e,t,n){"use strict";n("0dc7")}});
//# sourceMappingURL=app.a69d2ca9.js.map