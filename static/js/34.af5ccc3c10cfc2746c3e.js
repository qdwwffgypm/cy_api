webpackJsonp([34],{QaK0:function(t,a){},dy4d:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v=s("YCm4"),_={name:"adChModule",data:function(){return{msg:"adChModule",cmOptions:{mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0},cmOptions1:{readOnly:"true",theme:"darcula",mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0},cmOptions2:{readOnly:"true",theme:"mdn-like",mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0}}},mounted:function(){var t=this;["myEditor","codeStyle","demoCode"].forEach(function(a){var s,_,d=0,e=function(){d++,s=t.$refs[a+d],_=t.$refs[a+"Val"+d]};for(e();s;)s.codemirror.setValue(Object(v.b)(_.innerHTML)),e()})},methods:{runcode:function(){var t=this,a=t.$refs.iframe;a.src="?a="+Math.random()+"#/runcode",a.onload=function(){a.contentWindow.postMessage(t.$refs.myEditor1.codemirror.getValue(),"*")}}}},d={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"adChModule"},[s("cynav"),t._v(" "),s("cymenu"),t._v(" "),s("div",{staticClass:"cy_example"},[s("p",{staticClass:"cy_title"},[t._v("示例效果")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"iframeBox"},[s("iframe",{ref:"iframe",attrs:{src:"#/adChModuleExample"}})])]),t._v(" "),s("div",{staticClass:"cy_center"},[s("h2",{staticClass:"cy_h2"},[t._v("adChModule 标签页")]),t._v(" "),s("div",{staticClass:"codeModule"},[s("h3",{staticClass:"cy_h3"},[t._v("引入")]),t._v(" "),s("codemirror",{ref:"codeStyle1",staticClass:"codeStyle",attrs:{options:t.cmOptions1}}),t._v(" "),s("xmp",{ref:"codeStyleVal1",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n\timport adChModule from "cy_static/adChModule"; \n<\/script>\n')])],1),t._v(" "),s("h2",{staticClass:"cy_h2"},[t._v("代码演示")]),t._v(" "),s("div",{staticClass:"codeModule"},[s("codemirror",{ref:"codeStyle2",staticClass:"codeStyle",attrs:{options:t.cmOptions1}}),t._v(" "),s("xmp",{ref:"codeStyleVal2",staticStyle:{display:"none"}},[t._v('\n<div id="test">内容显示区</div>\n<script type="text/javascript">\n    import adChModule from "cy_static/adChModule";\n    adChModule("#test", {\n        "keyId" : "Mall_Welfare_adverts",\n        "column" : "47.4",\n        "unLazyNum" : "3",\n        "rowSpace" : "1",\n        "colSpace" : "1",\n        "paddingTop" : "10",\n        "paddingBottom" : "10",\n        "paddingLeft" : "0",\n        "paddingRight" : "0",\n        "moduleSpm" : "",\n        "backgroundColor" : "#f0f0f0"\n    });\n<\/script>\n')])],1),t._v(" "),s("h2",{staticClass:"cy_h2"},[t._v("API")]),t._v(" "),t._m(0)])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"apiModule"},[s("h2",{staticClass:"cy_h2"},[t._v("构造方法")]),t._v(" "),s("p",[s("a",[t._v("adChModule")]),t._v("(dom : selector|String, params : Object = {}) : "),s("a",[t._v("Void")])]),t._v(" "),s("p",[t._v("调用广告推荐位接口，生成左边一列右边2列格式的效果")]),t._v(" "),s("table",{staticClass:"table-props"},[s("tr",[s("th",{attrs:{colspan:"5"}},[t._v("params 参数")])]),t._v(" "),s("tr",[s("th",{staticStyle:{width:"20%"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{width:"30%"}},[t._v("描述")]),t._v(" "),s("th",{staticClass:"text-c",staticStyle:{width:"10%"}},[t._v("必需")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("布局类正倒品型")]),t._v(" "),s("td",[t._v("asc(asc、desc)")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("keyId")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("广告推荐位")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("column")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("左边图%大小")]),t._v(" "),s("td",[t._v("40")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("rowSpace")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块行距离")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("colSpace")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块列距离")]),t._v(" "),s("td",[t._v("5")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("paddingTop")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块上边距")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("paddingBottom")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块下边距")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("paddingLeft")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块左边距")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("paddingRight")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块右边距")]),t._v(" "),s("td",[t._v("10")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("moduleSpm")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块SPM编码")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("moduleName")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块名称")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("backgroundColor")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("模块背景色")]),t._v(" "),s("td",[t._v("#ffffff")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("Object||Array")]),t._v(" "),s("td",[t._v("本地数据[]")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("onBefore")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("Function")]),t._v(" "),s("td",[t._v("渲染前处理")]),t._v(" "),s("td",[t._v("function(data, params, dom) {}")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("onAfter")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("Function")]),t._v(" "),s("td",[t._v("渲染后处理")]),t._v(" "),s("td",[t._v("function(data, params, dom) {}")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])])])])}]};var e=s("VU/8")(_,d,!1,function(t){s("QaK0")},"data-v-35277d56",null);a.default=e.exports}});
//# sourceMappingURL=34.af5ccc3c10cfc2746c3e.js.map