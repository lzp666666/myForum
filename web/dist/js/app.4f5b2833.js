(function(t){function e(e){for(var a,r,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function u(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2e705858":"0d1ca054","chunk-555408a2":"bd90df03","chunk-7a6b8647":"6871a427","chunk-8198d684":"e3f8d4b6"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-2e705858":1,"chunk-555408a2":1,"chunk-7a6b8647":1,"chunk-8198d684":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2e705858":"6e2959e1","chunk-555408a2":"ef17b92e","chunk-7a6b8647":"a675d547","chunk-8198d684":"38e5fb39"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8589"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("d497"),n("a133"),n("ed0d"),n("f09c"),n("e117");var a=n("0261"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("baiTabbar",{directives:[{name:"show",rawName:"v-show",value:!this.$route.meta.footShow,expression:"!this.$route.meta.footShow"}]})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bai-tabbar"},t._l(t.tabbarData,(function(e,a){return n("router-link",{key:e.key,staticClass:"tabbar-nav",class:[a===t.thisIndex?"this":""],attrs:{tag:"div",to:e.url||""},nativeOn:{click:function(e){return t.changeTab(a)}}},[n("span",{staticClass:"icon-box"},[n("span",{staticClass:"iconfont iconshouye icon",class:e.logo}),n("span",{staticClass:"tabbar-nav-word"},[t._v(t._s(e.name))])])])})),1)},u=[],s={data:function(){return{tabbarData:[{logo:"iconshouye",name:"主页",url:"/"},{logo:"iconfaxian",name:"发现"},{logo:"iconxiaoxi",name:"消息"},{logo:"iconyonghu",name:"我的",url:"user"}],thisIndex:0}},created:function(){this.thisIndex=this.utils.getData("router-index",!0)||0},methods:{changeTab:function(t){this.thisIndex=t,this.utils.putData("router-index",t,!0)}}},c=s,l=(n("6c83"),n("9ca4")),f=Object(l["a"])(c,i,u,!1,null,null,null),d=f.exports,h={components:{baiTabbar:d},created:function(){}},p=h,m=(n("034f"),Object(l["a"])(p,r,o,!1,null,null,null)),v=m.exports,b=(n("e18c"),n("3f11")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("van-tabs",{staticClass:"tabs",attrs:{animated:"",swipeable:""},on:{click:t.tabsActiveFn},model:{value:t.tabsActive,callback:function(e){t.tabsActive=e},expression:"tabsActive"}},[n("van-tab",{attrs:{title:"推荐"}}),t._l(t.dataList.category,(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name}})}))],2),n("div",{staticClass:"content"},t._l(t.dataList.article,(function(e){return n("router-link",{key:e.key,staticClass:"list",attrs:{tag:"div",to:{name:"article",params:{id:e.id}}}},[n("div",{staticClass:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"conten",domProps:{innerHTML:t._s(e.content)}}),n("div",{staticClass:"foot"},[t._v("0赞同-0评论")])])})),1)],1)},y=[],k={name:"Home",data:function(){return{dataList:{article:[],category:[]},tabsActive:0}},created:function(){this.queryAll()},methods:{queryAll:function(){var t=this;this.axios.get("forum/article").then((function(e){200===e.status&&(t.dataList.article=e.data.data)})),this.axios.get("forum/category").then((function(e){200===e.status&&(t.dataList.category=e.data.data)}))},tabsActiveFn:function(t,e){var n=this;0===t?n.queryAll():n.axios.get("forum/categroyId/"+t).then((function(t){200===t.status&&(n.dataList.article=t.data.data)}))}}},w=k,_=(n("978d"),Object(l["a"])(w,g,y,!1,null,"71e745fc",null)),x=_.exports;a["a"].use(b["a"]);var S=[{path:"/",name:"Home",component:x},{path:"/login",name:"login",component:function(){return n.e("chunk-2e705858").then(n.bind(null,"dd7b"))}},{path:"/user",name:"user",meta:{requireAuth:!0},component:function(){return n.e("chunk-8198d684").then(n.bind(null,"a547"))},children:[]},{path:"/publish",name:"publish",meta:{footShow:!0},component:function(){return n.e("chunk-7a6b8647").then(n.bind(null,"5128"))}},{path:"/article/:id",name:"article",component:function(){return n.e("chunk-555408a2").then(n.bind(null,"d13c"))},children:[]}],A=new b["a"]({mode:"history",base:"/",routes:S}),O=A,T=n("9f3a"),C=(n("e35a"),n("f4e3"),n("6db4"),new a["a"]),I={putData:function(t,e,n){n?sessionStorage.setItem(t,JSON.stringify({key:t,value:e})):localStorage.setItem(t,JSON.stringify({key:t,value:e}))},getData:function(t,e){var n;if(n=e?JSON.parse(sessionStorage.getItem(t)):JSON.parse(localStorage.getItem(t)),n)return n.value},clearData:function(t,e){e?sessionStorage.removeItem(t):localStorage.removeItem(t)},checkStatus:function(t,e){0===t.data.status?C.$notify(t.data.message):e&&e()},verify:{userName:function(t){return""===t.trim()?"用户名不能为空":t.match(/[\u4e00-\u9fa5]/)?"用户名不能为中文":/(.+){3,12}$/.test(t)?void 0:"用户名必须3到12位"},email:function(t){return""===t?"邮箱不能为空":/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t)?void 0:"邮箱格式不正确"},tel:function(t){if(!/^[1]+\d{10}$/.test(t))return"请输入正确的电话号码"},pwd:function(t){if(!/(.+){6,12}$/.test(t))return"密码必须6到12位"}}},D=I;a["a"].use(T["a"]);var j=new T["a"].Store({state:{userToken:D.getData("userToken")?D.getData("userToken"):"",userInfo:D.getData("userInfo")?D.getData("userInfo"):""},mutations:{saveToken:function(t,e){t.userToken=e,D.putData("userToken",e)},saveInfo:function(t,e){t.userInfo=e,D.putData("userInfo",e)}}}),E=j,L=(n("e339"),n("82ae")),N=n.n(L),P=n("97e6");n("80e5"),n("6f02");a["a"].prototype.axios=N.a,a["a"].prototype.utils=D,a["a"].use(P["a"]),N.a.defaults.baseURL="http://106.52.95.222:3000/",a["a"].config.productionTip=!1,O.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requireAuth}))?D.getData("userToken")?n():n("login"):n()})),new a["a"]({router:O,store:E,render:function(t){return t(v)}}).$mount("#app")},"6c83":function(t,e,n){"use strict";var a=n("c600"),r=n.n(a);r.a},"6f02":function(t,e,n){},8589:function(t,e,n){},"978d":function(t,e,n){"use strict";var a=n("cff5"),r=n.n(a);r.a},c600:function(t,e,n){},cff5:function(t,e,n){},e339:function(t,e,n){}});
//# sourceMappingURL=app.4f5b2833.js.map