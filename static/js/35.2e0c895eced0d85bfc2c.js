webpackJsonp([35],{d2k4:function(t,s){},mAze:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("YCm4"),a={name:"offset",data:function(){return{msg:"offset",cmOptions:{mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0},cmOptions1:{readOnly:"true",theme:"darcula",mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0}}},mounted:function(){var t=this;["myEditor","codeStyle","demoCode"].forEach(function(s){var e,a,o=0,r=function(){o++,e=t.$refs[s+o],a=t.$refs[s+"Val"+o]};for(r();e;)e.codemirror.setValue(Object(i.b)(a.innerHTML)),r()})},methods:{runcode:function(){var t=this,s=t.$refs.iframe;s.src="?a="+Math.random()+"#/runcode",s.onload=function(){s.contentWindow.postMessage(t.$refs.myEditor1.codemirror.getValue(),"*")}}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"offset"},[e("cynav"),t._v(" "),e("cymenu"),t._v(" "),e("div",{staticClass:"cy_example"},[e("p",{staticClass:"cy_title"},[t._v("示例效果")]),t._v(" "),e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"codeArea"},[e("codemirror",{ref:"myEditor1",staticClass:"myEditor",attrs:{options:t.cmOptions}}),t._v(" "),e("xmp",{ref:"myEditorVal1",staticStyle:{display:"none"}},[t._v('\n<span id="test" style="margin:80px">张学友</span>\n<script type="text/javascript">\n    import offset from "cy_static/offset"; \n    import ui from "cy_static/ui"; \n    var pos = offset("#test");\n    ui.dialog.alert(JSON.stringify(pos));\n<\/script>\n')])],1),t._v(" "),e("div",{staticClass:"submitCode"},[e("input",{staticClass:"btn-submit",attrs:{type:"button",value:"点击运行代码"},on:{click:function(s){return t.runcode()}}})]),t._v(" "),e("div",{staticClass:"iframeBox"},[e("iframe",{ref:"iframe",attrs:{src:"#/runcode"}})])]),t._v(" "),e("div",{staticClass:"cy_center"},[e("h2",{staticClass:"cy_h2"},[t._v("offset 标签页")]),t._v(" "),e("div",{staticClass:"codeModule"},[e("h3",{staticClass:"cy_h3"},[t._v("引入")]),t._v(" "),e("codemirror",{ref:"codeStyle1",staticClass:"codeStyle",attrs:{options:t.cmOptions1}}),t._v(" "),e("xmp",{ref:"codeStyleVal1",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n    import offset from "cy_static/offset"; \n<\/script>\n')])],1),t._v(" "),e("h2",{staticClass:"cy_h2"},[t._v("代码演示")]),t._v(" "),e("div",{staticClass:"codeModule"},[e("codemirror",{ref:"codeStyle2",staticClass:"codeStyle",attrs:{options:t.cmOptions1}}),t._v(" "),e("xmp",{ref:"codeStyleVal2",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n    import offset from "cy_static/offset"; \n    import ui from "cy_static/ui"; \n    var pos = offset("#test");\n    ui.dialog.alert(JSON.stringify(pos));\n<\/script>\n')])],1),t._v(" "),e("h2",{staticClass:"cy_h2"},[t._v("API")]),t._v(" "),t._m(0),t._v(" "),t._m(1)])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"apiModule"},[s("h2",{staticClass:"cy_h2"},[this._v("构造方法")]),this._v(" "),s("ul",{staticClass:"ul-props"},[s("li",[s("p",[s("a",[this._v("offset")]),this._v("(dom : dom|String) : "),s("a",[this._v("Object")])]),this._v(" "),s("p",[this._v("添加迭代器加载模块")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"apiModule"},[s("h2",{staticClass:"cy_h2"},[this._v("实例对象属性")]),this._v(" "),s("ul",{staticClass:"ul-props"},[s("li",[s("p",[s("a",[this._v("top")]),this._v("元素离窗口top距离")])]),this._v(" "),s("li",[s("p",[s("a",[this._v("left")]),this._v("元素离窗口left距离")])])])])}]};var r=e("VU/8")(a,o,!1,function(t){e("d2k4")},"data-v-315cfb38",null);s.default=r.exports}});
//# sourceMappingURL=35.2e0c895eced0d85bfc2c.js.map