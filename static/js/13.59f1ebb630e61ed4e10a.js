webpackJsonp([13],{"G/nR":function(t,e){},MOAH:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("YCm4"),a=n("ROYt"),i=n.n(a).a,r={name:"funcModule",data:function(){return{msg:"funcModule",cmOptions:{mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0},cmOptions1:{readOnly:"true",theme:"darcula",mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0}}},mounted:function(){var t=this;["myEditor","codeStyle","demoCode"].forEach(function(e){var n,a,i=0,r=function(){i++,n=t.$refs[e+i],a=t.$refs[e+"Val"+i]};for(r();n;)n.codemirror.setValue(Object(o.b)(a.innerHTML)),r()}),i("#test",{data:[{positionName:"H5新版商城首页功能球",adName:"所有分类",adDesc:"所有分类",adContent:"http://image.changyoyo.com/uploadimage/IMG20191018023349750.png",adUrl:"https://m.changyoyo.com/mall/?spm=3.1.3.P000001302.0.769991570762899041.02000000.02006827#/category",id:"P000006046",sort:5,adWord:"所有分类",usePlat:"APP"},{positionName:"H5新版商城首页功能球",adName:"卡券中心",adDesc:"卡券中心",adContent:"http://image.changyoyo.com/uploadimage/IMG20191018023358192.png",adUrl:"https://m.changyoyo.com/cymall/cardcenter.html",id:"P000006048",sort:4,adWord:"卡券中心",usePlat:"APP"},{positionName:"H5新版商城首页功能球",adName:"充值中心",adDesc:"充值中心",adContent:"http://image.changyoyo.com/uploadimage/IMG20191018023408891.png",adUrl:"https://m.changyoyo.com/lifePay/phone-traffic.html?needlogin=true&spm=3.1.102006.101118.P000003073.769991570762899041.02000000.02006827",id:"P000006047",sort:3,adWord:"充值中心",usePlat:"APP"},{positionName:"H5新版商城首页功能球",adName:"分期商城",adDesc:"分期商城",adContent:"http://image.changyoyo.com/uploadimage/IMG20191018023418942.png",adUrl:"https://m.changyoyo.com/event/2017/1222/index.html",id:"P000006054",sort:2,adWord:"分期商城",usePlat:"APP"},{positionName:"H5新版商城首页功能球",adName:"二手市场",adDesc:"二手市场",adContent:"http://image.changyoyo.com/uploadimage/IMG20191018023432918.png",adUrl:"https://m.changyoyo.com/manhattan2/index.html#/home",id:"P000006049",sort:0,adWord:"二手市场",usePlat:"APP"}],keyId:"H5_Mall_Entry",colSpace:0,paddingTop:5,paddingBottom:13,backgroundColor:"#ffffff"})},methods:{runcode:function(){var t=this,e=t.$refs.iframe;e.src="?a="+Math.random()+"#/runcode",e.onload=function(){e.contentWindow.postMessage(t.$refs.myEditor1.codemirror.getValue(),"*")}}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cy_win"},[n("div",{attrs:{id:"test"}}),t._v(" "),n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"codeArea"},[n("codemirror",{ref:"myEditor1",staticClass:"myEditor",attrs:{options:t.cmOptions}}),t._v(" "),n("xmp",{ref:"myEditorVal1",staticStyle:{display:"none"}},[t._v('\n<div id="test"></div>\n<script type="text/javascript">\n    import funcModule from "cy_static/funcModule";\n    funcModule("#test", {\n        "keyId" : "H5_Mall_Entry",\n        "colSpace" : 0,\n        "paddingTop" : 5,\n        "paddingBottom" : 13,\n        "backgroundColor" : "#ffffff"\n    });\n<\/script>\n')])],1),t._v(" "),n("div",{staticClass:"submitCode"},[n("input",{staticClass:"btn-submit",attrs:{type:"button",value:"点击运行代码"},on:{click:function(e){return t.runcode()}}})]),t._v(" "),n("div",{staticClass:"line"}),t._v(" "),n("div",{staticClass:"cy_example"},[n("iframe",{ref:"iframe",attrs:{src:"?t=2#/runcode"}})])])},staticRenderFns:[]};var l=n("VU/8")(r,d,!1,function(t){n("G/nR")},"data-v-5498ab78",null);e.default=l.exports},ROYt:function(t,e,n){var o,a;o=window||this,a=function(t){var e,n,o,a,i,r,d,l,c;return!t.CY&&(t.CY={}),t.CY.funcModule?t.CY.funcModule:(n=document,o=function(t){return Object.prototype.toString.call(t).split(/\s(\w+)/)[1].toLowerCase()},i=function(t){return t+(Math.random()+"").slice(9)},r=function(t,e){for(var n=0,o=(t=t||[]).length;o>n&&0!=e.call(t[n],n,t[n]);n++);},d=function(t,e){for(var n in e)e.hasOwnProperty(n)&&("object"!=o(e[n])?void 0!=e[n]&&(t[n]=e[n]):t[n]=d(t[n]||{},e[n]));return t},l=function(t,e){for(var o in t=n.createElement(t),e)e.hasOwnProperty(o)&&("style"==o?d(t.style,e[o]):t[o]=e[o]);return t},c=function(t,e){var o,a,i,d,l,c="realSrc",s="_lazyloadtem",u=t.querySelectorAll("img["+c+"]");u.length&&(o=window.getComputedStyle(e,null),a=parseInt(o.getPropertyValue("left"))||0,i=n.documentElement.clientWidth||n.body.clientWidth,d=100,l=function(t){return t>=a-d&&i+a+d>t},r(u,function(t,e){var n,o,i=e.getAttribute(c);return i?(n=e.getBoundingClientRect().left+a,o=e.offsetWidth,void((l(n)||l(n+o))&&(e.setAttribute("src",i),e.removeAttribute(c),e.onload=function(){e.__bindKkey&&e.removeAttribute(s)}))):void(e.getAttribute(s)&&e.removeAttribute(s))}))},e=function(){var t,e,d,s,u=[];return u.push('<a data-spm="{id}" href="{adUrl}">'),u.push("    <article>"),u.push('        <span class="l-img">'),u.push('            <img realSrc="{adContent}" />'),u.push("        </span>"),u.push('        <span class="l-title" title="{adWord}">{adWord}</span>'),u.push("    </article>"),u.push("</a>"),u=u.join(""),t=function(){var e,o=[];o.push(".funcModule["+a+"]{overflow: hidden;}"),o.push(".funcModule img["+a+"]{min-height: 40px;}"),o.push(".funcModule["+a+"] .content {display: table-cell;white-space: nowrap;}"),o.push(".funcModule["+a+"] .itemBox {width: 7.5rem;display: inline-block;vertical-align: top;}"),o.push(".funcModule["+a+"] .inner{width: 100%;overflow: hidden;display: flex;justify-content: space-between;}"),o.push(".funcModule["+a+"] .l-item{text-align: center;width: 100%;}"),o.push(".funcModule["+a+"] .l-item a{display: block;}"),o.push(".funcModule["+a+"] .l-item a:active {background-color: #eee;}"),o.push(".funcModule["+a+"] .l-item .l-img{width: 1rem;height: 1rem;display:block;margin:0 auto;}"),o.push(".funcModule["+a+"] .l-item .l-img img{display:block;width:100%}"),o.push(".funcModule["+a+"] .l-item .l-bg{background-size: 0.68rem 0.3rem;border-radius: 0.45rem;}"),o.push(".funcModule["+a+"] .l-item .l-title{display:block;font-size:0.24rem;color:#666;height:0.26rem;line-height:0.26rem;margin-top: 0.08rem;width:100%;white-space:nowrap;}"),(e=n.createElement("style")).type="text/css",e.innerHTML=o.join(""),n.getElementsByTagName("head")[0].appendChild(e),t=function(){}},e=function(t,e){return t&&t instanceof Object?t:t?(e||document).querySelector(t):null},d=function(t,e){for(var n in e)e.hasOwnProperty(n)&&("object"!=o(e[n])?void 0!=e[n]&&(t[n]=e[n]):t[n]=d(t[n]||{},e[n]));return t},s=function(t,e){return e&&"object"==o(e)?t.replace(/\{([^{}]+)\}/g,function(t,n){var o=e[n];return void 0!==o?""+o:""}):t.toString()},function(n,m){var p,f,h,g,y,v,b,C,M,w,P,A,N,_,k,S;n=e(n),!a&&(a=m.id||i("func")),m=d({teml:u,row:5,column:2,data:null,onBefore:function(){},onAfter:function(){}},m),p="px ",f=void 0,t(),h=m.keyId,g=function(t,e){return isNaN(parseFloat(t))?e:parseFloat(t)},y=function(t,e){return isNaN(parseInt(t))?e:parseInt(t)}(m.unLazyNum,0),v=g(m.colSpace,5)/2,b=g(m.paddingTop,10),C=g(m.paddingBottom,10),M=g(m.paddingLeft,10),w=g(m.paddingRight,10),P=m.moduleSpm||"",A=m.moduleName||"",N=m.backgroundColor,_=function(t){var e,o,i,u,h,g,P,A,_=("https:"==location.protocol?"https:":"http:")+CY.serverUtil.imgUrl+"/";return t&&t.length?(m.onBefore(t,m,n),t&&t.length>0&&(t.sort(function(t,e){return e.sort-t.sort}),e=t.length,o=m.column,i=m.row,u=l("div",{className:"content"}),f!=b&&d(u.style,0>b?{marginTop:b+p}:{paddingTop:b+p}),f!=C&&d(u.style,0>C?{marginBottom:C+p}:{paddingBottom:C+p}),N&&d(u.style,{backgroundColor:N}),g=0,P=null,A=[],t.forEach(function(t,n){var r,c,b;if(!/^http/.test(t.adContent)&&!/^data:/.test(t.adContent)&&(t.adContent=_+t.adContent),("https://www.changyoyo.com"==t.adUrl||!t.adUrl)&&(t.adUrl="javascript:void(0)",t.id="no"),t.adUrl=t.adUrl.replace(/(http.*?.jfmore.com)(\/.*)/,"$2"),r=m.teml,0==(c=n%i)&&(h=l("div",{className:"inner"}),f!=M&&d(h.style,0>M?{marginLeft:M+p}:{paddingLeft:M+p}),f!=w&&d(h.style,0>w?{marginRight:w+p}:{paddingRight:w+p}),0==g%o&&(P=l("div",{className:"itemBox"}),u.appendChild(P),A.push(P)),P.appendChild(h),g++),y&&y>n&&(r=(r=r.replace(/ src="/," "+a+' crs="')).replace(/ realSrc="/," "+a+' src="')),t=l("div",{className:"l-item",style:{paddingTop:v+p,paddingBottom:v+p},innerHTML:s(r,t)}),y&&y>n&&function(t){for(var e=0,n=t.length;n>e;e++)!function(t){t.onload=function(){t.removeAttribute(a)}}(t[e])}(t.querySelectorAll("img")),h.appendChild(t),n==e-1&&0!=c)for(b=c;i-1>b;b++)h.appendChild(l("div",{className:"l-item"}))}),n.innerHTML="",n.appendChild(u),r(A,function(){var t=this.children;r(t[0].children,function(){this.style.paddingTop=0}),r(t[t.length-1].children,function(){this.style.paddingBottom=0})})),setTimeout(function(){c(n,u)},15),void m.onAfter(t,m,n)):d(n.style,{display:"none"})},n.setAttribute(a,""),!n.id&&n.setAttribute("id",a),n.setAttribute("title",A),n.setAttribute("keyId",h),n.classList.add("funcModule"),P&&(n.setAttribute("data-spm",P),n.setAttribute("data-spm-type","all")),m.data?("array"==(S=o(m.data))?k=m.data:"object"==S&&(k=[m.data]),k&&_(k)):function(){CY.serverUtil.loadRecommend({keyIds:h},function(t,e){_(e)})}()}}(),t.CY.funcModule=e,e)},n("bNNa"),t.exports=a(o)}});
//# sourceMappingURL=13.59f1ebb630e61ed4e10a.js.map