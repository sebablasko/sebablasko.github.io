(function(t){function n(n){for(var r,c,i=n[0],u=n[1],s=n[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,c=1;c<e.length;c++){var u=e[c];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"195a8529"}[t]+".js"}function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise((function(n,r){e=o[t]=[n,r]}));n.push(e[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var s=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(l);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,e[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/hackaton/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var d=s;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"568f":function(t,n,e){"use strict";var r=e("c457"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("router-view")],1)},a=[],c=(e("5c0b"),e("2877")),i={},u=Object(c["a"])(i,o,a,!1,null,null,null),s=u.exports,l=(e("d3b7"),e("8c4f")),d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("h1",[t._v("Bienvenido al juego de la vida")]),e("vue-confirmation-button",{attrs:{messages:t.customMessages},on:{"confirmation-success":function(n){return t.action()}}})],1)},f=[],p=e("a277"),h={name:"Home",components:{"vue-confirmation-button":p["a"]},data:function(){return{customMessages:["Estás listo?","Vamos!"]}},methods:{action:function(){console.log("asd"),this.$router.push({path:"/game"})}}},m=h,v=(e("cccb"),Object(c["a"])(m,d,f,!1,null,null,null)),b=v.exports,g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("h1",[t._v("Jugando - día "+t._s(t.day))]),e("vue-swing",{ref:"vueswing",attrs:{config:t.config},on:{throwout:t.onThrowout}},t._l(t.cards,(function(n,r){return e("div",{key:r,staticClass:"card"},[e("span",[t._v(t._s(n))])])})),0)],1)},w=[],y=(e("99af"),e("fb6a"),e("634d")),_={name:"Home",components:{VueSwing:y["a"]},data:function(){return{currentCard:0,day:0,config:{allowedDirections:[y["a"].Direction.LEFT,y["a"].Direction.RIGHT],minThrowOutDistance:250,maxThrowOutDistance:300},cards:[]}},methods:{createCard:function(){if(Math.random()<.1){var t=parseInt(10*Math.random()%10/2,10),n=["A","B","C","D","E"].slice(t,t+1);this.cards.push("FyF Recomienda 100% al Fondo ".concat(n))}else{var e=parseInt(100*Math.random()/2,10),r=100-e,o=parseInt(10*Math.random()%10/2,10),a=parseInt(10*Math.random()%10/2,10),c=["A","B","C","D","E"].slice(o,o+1),i=["A","B","C","D","E"].slice(a,a+1);this.cards.push("FyF Recomienda ".concat(e,"% al ").concat(c," y ").concat(r," al ").concat(i,"%"))}},add:function(){this.cards.push("".concat(this.cards.length+1))},remove:function(){var t=this;this.swing(),setTimeout((function(){t.cards.pop()}),100)},swing:function(){var t=this.$refs.vueswing.cards;t[t.length-1].throwOut(100*Math.random()-50,100*Math.random()-50)},onThrowout:function(t){t.target;var n=t.throwDirection;this.currentCard+=1,n===y["a"].Direction.RIGHT&&alert("Aceptado")},discard:function(){var t=this.$refs.vueswing.cards;t[this.currentCard].throwOut(-50,0)}},created:function(){var t=this;setInterval((function(){t.day+=1,t.day%4===0&&t.createCard(),t.day%4===0&&t.discard()}),1e3)}},O=_,j=(e("568f"),Object(c["a"])(O,g,w,!1,null,null,null)),C=j.exports;r["a"].use(l["a"]);var M=[{path:"/",name:"Home",component:b},{path:"/game",name:"Game",component:C},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],T=new l["a"]({mode:"history",base:"/hackaton/",routes:M}),E=T,k=e("2f62");r["a"].use(k["a"]);var x=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:E,store:x,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var r=e("9c0c"),o=e.n(r);o.a},"5ced":function(t,n,e){},"9c0c":function(t,n,e){},c457:function(t,n,e){},cccb:function(t,n,e){"use strict";var r=e("5ced"),o=e.n(r);o.a}});
//# sourceMappingURL=app.5c32e532.js.map