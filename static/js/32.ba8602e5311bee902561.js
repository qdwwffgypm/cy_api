webpackJsonp([32],{C2xk:function(t,s){},Iaha:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("YCm4"),n={name:"jsonp",data:function(){return{msg:"jsonp",cmOptions:{mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0},cmOptions1:{readOnly:"true",theme:"darcula",mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0}}},mounted:function(){var t=this;["myEditor","codeStyle","demoCode"].forEach(function(s){var e,n,i=0,c=function(){i++,e=t.$refs[s+i],n=t.$refs[s+"Val"+i]};for(c();e;)e.codemirror.setValue(Object(a.b)(n.innerHTML)),c()})},methods:{runcode:function(){var t=this,s=t.$refs.iframe;s.src="?a="+Math.random()+"#/runcode",s.onload=function(){s.contentWindow.postMessage(t.$refs.myEditor1.codemirror.getValue(),"*")}}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"jsonp"},[e("cynav"),t._v(" "),e("cymenu"),t._v(" "),e("div",{staticClass:"cy_example"},[e("p",{staticClass:"cy_title"},[t._v("示例效果")]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"codeArea"},[e("codemirror",{ref:"myEditor1",staticClass:"myEditor",attrs:{options:t.cmOptions}}),t._v(" "),e("xmp",{ref:"myEditorVal1",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n    import jsonp from "cy_static/jsonp";\n    import ui from "cy_static/ui"; \n    var url = "http://my.ule.com/uleAddressService/uleAddress/querySonAddress.json?jsonp=?";\n    jsonp(url, {code : ""}, 5000, function(resp) {\n        ui.dialog.alert(JSON.stringify(resp));\n    });\n<\/script>\n')])],1),t._v(" "),e("div",{staticClass:"submitCode"},[e("input",{staticClass:"btn-submit",attrs:{type:"button",value:"点击运行代码"},on:{click:function(s){return t.runcode()}}})]),t._v(" "),e("div",{staticClass:"iframeBox"},[e("iframe",{ref:"iframe",attrs:{src:"#/runcode"}})])]),t._v(" "),e("div",{staticClass:"cy_center"},[e("h2",{staticClass:"cy_h2"},[t._v("jsonp 标签页")]),t._v(" "),e("div",{staticClass:"codeModule"},[e("h3",{staticClass:"cy_h3"},[t._v("引入")]),t._v(" "),e("codemirror",{ref:"codeStyle1",staticClass:"codeStyle",attrs:{options:t.cmOptions1}}),t._v(" "),e("xmp",{ref:"codeStyleVal1",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n    import jsonp from "cy_static/jsonp";\n<\/script>\n')])],1),t._v(" "),e("h2",{staticClass:"cy_h2"},[t._v("代码演示")]),t._v(" "),e("div",{staticClass:"codeModule"},[e("codemirror",{ref:"codeStyle2",staticClass:"codeStyle",attrs:{options:t.cmOptions1}}),t._v(" "),e("xmp",{ref:"codeStyleVal2",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n    // 用法一\n    jsonp("/test.do", {id : 11});\n    //用法二\n    jsonp("/test.do", 6000);\n    //用法三\n    jsonp("/test.do", {id : 11}, 6000);\n    //用法四\n    jsonp("/test.do", {id : 11}, function () {\n      console.log("调用成功");\n    });\n<\/script>\n')])],1),t._v(" "),e("h2",{staticClass:"cy_h2"},[t._v("API")]),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"apiModule"},[e("h2",{staticClass:"cy_h2"},[t._v("构造方法")]),t._v(" "),e("p",[e("a",[t._v("jsonp")]),t._v("(url : String, data : Object, timeout : Number, callback : Function) : "),e("a",[t._v("Void")])]),t._v(" "),e("p",[t._v("JSONP请求数据方式；")]),t._v(" "),e("table",{staticClass:"table-props"},[e("tr",[e("th",[t._v("参数名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",{staticClass:"text-c"},[t._v("必需")])]),t._v(" "),e("tr",[e("td",[t._v("url")]),t._v(" "),e("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),e("td",[t._v('"请求URL地址"')]),t._v(" "),e("td",[t._v('""')]),t._v(" "),e("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),e("tr",[e("td",[t._v("data")]),t._v(" "),e("td",{staticClass:"atn"},[t._v("Object")]),t._v(" "),e("td",[t._v("请求参数")]),t._v(" "),e("td",[t._v("{}")]),t._v(" "),e("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),e("tr",[e("td",[t._v("timeout")]),t._v(" "),e("td",{staticClass:"atn"},[t._v("Number")]),t._v(" "),e("td",[t._v("请求超时时间(毫秒)")]),t._v(" "),e("td",[t._v("7000")]),t._v(" "),e("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),e("tr",[e("td",[t._v("callback")]),t._v(" "),e("td",{staticClass:"atn"},[t._v("Function")]),t._v(" "),e("td",[t._v("请求成功回调函数")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",{staticClass:"text-c"},[t._v("N")])])])])}]};var c=e("VU/8")(n,i,!1,function(t){e("C2xk")},"data-v-3b232c48",null);s.default=c.exports}});
//# sourceMappingURL=32.ba8602e5311bee902561.js.map