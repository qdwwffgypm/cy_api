webpackJsonp([14],{aV8e:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var v=s("YCm4"),i={name:"validate",data:function(){return{msg:"validate",cmOptions:{mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0},cmOptions1:{readOnly:"true",theme:"darcula",mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0},cmOptions2:{readOnly:"true",theme:"mdn-like",mode:"text/html",indentUnit:2,smartIndent:!0,tabSize:4,showCursorWhenSelecting:!0}}},mounted:function(){var t=this;["myEditor","codeStyle","demoCode"].forEach(function(a){var s,i,e=0,r=function(){e++,s=t.$refs[a+e],i=t.$refs[a+"Val"+e]};for(r();s;)s.codemirror.setValue(Object(v.b)(i.innerHTML)),r()}),Object(v.a)()},methods:{runcode:function(){var t=this,a=t.$refs.iframe;a.src="?a="+Math.random()+"#/runcode",a.onload=function(){a.contentWindow.postMessage(t.$refs.myEditor1.codemirror.getValue(),"*")}}}},e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"validate"},[s("cynav"),t._v(" "),s("cymenu"),t._v(" "),s("div",{staticClass:"cy_example"},[s("p",{staticClass:"cy_title"},[t._v("示例效果")]),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"codeArea"},[s("codemirror",{ref:"myEditor1",staticClass:"myEditor",attrs:{options:t.cmOptions}}),t._v(" "),s("xmp",{ref:"myEditorVal1",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n    import validate from "cy_static/validate";\n    import ui from "cy_static/ui";\n    var valid = validate ({username:""}, {\n      username : {\n        min : 1,\n        max : 10,\n        onError : "收货人不能为空",\n        onErrorMax : "收货人最多10个字符"\n      }\n    });\n    if (valid.pageIsValid(function(error) {\n      ui.toast(error);\n      return true;\n    }));\n<\/script>\n')])],1),t._v(" "),s("div",{staticClass:"submitCode"},[s("input",{staticClass:"btn-submit",attrs:{type:"button",value:"点击运行代码"},on:{click:function(a){return t.runcode()}}})]),t._v(" "),s("div",{staticClass:"iframeBox"},[s("iframe",{ref:"iframe",attrs:{src:"#/runcode"}})])]),t._v(" "),s("div",{staticClass:"cy_center"},[s("h2",{staticClass:"cy_h2"},[t._v("validate 标签页")]),t._v(" "),s("div",{staticClass:"codeModule"},[s("h3",{staticClass:"cy_h3"},[t._v("引入")]),t._v(" "),s("codemirror",{ref:"codeStyle1",staticClass:"codeStyle",attrs:{options:t.cmOptions1}}),t._v(" "),s("xmp",{ref:"codeStyleVal1",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n    import validate from "cy_static/validate";\n<\/script>\n')])],1),t._v(" "),s("h2",{staticClass:"cy_h2"},[t._v("代码演示")]),t._v(" "),s("div",{staticClass:"codeModule"},[s("codemirror",{ref:"codeStyle2",staticClass:"codeStyle",attrs:{options:t.cmOptions1}}),t._v(" "),s("xmp",{ref:"codeStyleVal2",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n  import validate from "cy_static/validate";\n  import ui from "cy_static/ui";\n  var valid = validate({username:"", mobileid:""}, {\n      username : {\n        min : 1,\n        max : 10,\n        onError : "收货人不能为空",\n        onErrorMax : "收货人最多10个字符"\n      },\n      mobileid : {\n        validtype : "regType",\n        regExp : "^1\\\\d{10}$",\n        onError : "手机号码格式错误"\n      }\n  });\n  if (valid.pageIsValid(function(error) {\n      ui.toast(error);\n      return true;\n  }));\n<\/script>\n')])],1),t._v(" "),s("h2",{staticClass:"cy_h2"},[t._v("API")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"apiModule"},[s("h2",{staticClass:"cy_h2"},[t._v("静态方法")]),t._v(" "),s("ul",{staticClass:"ul-props"},[s("li",[t._m(2),t._v(" "),s("p",[t._v("添加校验规则；validtype校验类型，func校验函数；")]),t._v(" "),s("div",{staticClass:"showDetail"},[t._v("详细")]),t._v(" "),s("table",{staticClass:"table-props border"},[s("tr",[s("td",[s("codemirror",{ref:"demoCode1",staticClass:"demoCode",attrs:{options:t.cmOptions2}}),t._v(" "),s("xmp",{ref:"demoCodeVal1",staticStyle:{display:"none"}},[t._v('\n<script type="text/javascript">\n  validate.addRule("isMobile",function(value, params){\n      var setting = Object.assign({\n          onError : "手机号码格式错误"\n      }, params || {});\n      var returnObj = {isValid:true};\n      if (!/^1\\d{10}$/.test(value)) {\n          returnObj.isValid = false;\n          returnObj.onError = setting.onError;\n      }\n      return returnObj\n  });\n  // 使用\n  var valid = validate({mobileid : 15604656355}, {\n      mobileid : {\n          validtype : "isMobile",\n          onError : "手机号码格式错误"\n      }\n  });\n\n<\/script>\n')])],1)])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"apiModule"},[s("h2",{staticClass:"cy_h2"},[t._v("构造方法")]),t._v(" "),s("ul",{staticClass:"ul-props tableList"},[s("li",[s("p",[s("a",[t._v("validate")]),t._v("(obj : Object, params : Object) : "),s("a",[t._v("Boolean")])]),t._v(" "),s("p",[t._v("设置校验项和校验规则。obj 校验对象，params 校验规则；")]),t._v(" "),s("div",{staticClass:"showDetail"},[t._v("详细")]),t._v(" "),s("table",{staticClass:"table-props border",staticStyle:{"margin-top":"12px"}},[s("tr",[s("th",{attrs:{colspan:"5"}},[t._v("params 校验规则之validtype属性值详解")])]),t._v(" "),s("tr",[s("th",{attrs:{colspan:"5"}},[t._v("inputValid")])]),t._v(" "),s("tr",[s("th",{staticStyle:{width:"20%"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{width:"30%"}},[t._v("描述")]),t._v(" "),s("th",{staticClass:"text-c",staticStyle:{width:"10%"}},[t._v("必需")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('"size"')]),t._v(" "),s("td",[t._v("\n                  (对select无效)"),s("br"),t._v('\n                  "size":表示比较长度； '),s("br"),t._v('\n                  "number":数值型比较；'),s("br"),t._v('\n                  "string":字符型比较；'),s("br"),t._v('\n                  "date":短日期类型；'),s("br"),t._v('\n                  "datetime":长日期类型\n                ')]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("min")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("\n                  最小长度/值\t0"),s("br"),t._v("\n                  输入框比较的是关系；"),s("br"),t._v("\n                  单|多选校验选项个数\n                ")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("max")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v("99999999999999")]),t._v(" "),s("td",[t._v("\n                  最大长度/值\t"),s("br"),t._v("\n                  输入框比较的是关系；"),s("br"),t._v("\n                  单|多选校验选项个数\n                ")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("onError")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('"输入错误"')]),t._v(" "),s("td",[t._v("错误时的提示语")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("onErrorMin")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("比min属性小的提示")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("onErrorMax")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("比max属性大的提示")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("empty")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("object")]),t._v(" "),s("td",[t._v("\n                  {"),s("br"),t._v("\n                      leftEmpty: true,"),s("br"),t._v("\n                      rightEmpty: true,"),s("br"),t._v("\n                      emptyError: null"),s("br"),t._v("\n                  };\n                ")]),t._v(" "),s("td",[t._v("\n                  leftEmpty:左边是否允许为空；"),s("br"),t._v("\n                  rightEmpty:右边是否允许为空； "),s("br"),t._v("\n                  emptyError：没有提示语时，显示onError提示语\n                ")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])])]),t._v(" "),s("table",{staticClass:"table-props border"},[s("tr",[s("th",{attrs:{colspan:"5"}},[t._v("regType")])]),t._v(" "),s("tr",[s("th",{staticStyle:{width:"20%"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{width:"30%"}},[t._v("描述")]),t._v(" "),s("th",{staticClass:"text-c",staticStyle:{width:"10%"}},[t._v("必需")])]),t._v(" "),s("tr",[s("td",[t._v("regExp")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String|Array")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("\n                  正则表达式或regexEnum对象的属性名\n                ")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("dataType")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('"string"')]),t._v(" "),s("td",[t._v('\n                  "string":自定义的表达式；'),s("br"),t._v('\n                  "enum":regexEnum属性名\n                ')]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("operateor")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("\n                  多个表达式时的运算符类型；"),s("br"),t._v('\n                  "||"或的关系   "&&"并列\n                ')]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("onError")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('"输入错误"')]),t._v(" "),s("td",[t._v("错误时的提示语")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])])]),t._v(" "),s("table",{staticClass:"table-props border"},[s("tr",[s("th",{attrs:{colspan:"5"}},[t._v("funType")])]),t._v(" "),s("tr",[s("th",{staticStyle:{width:"20%"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{width:"30%"}},[t._v("描述")]),t._v(" "),s("th",{staticClass:"text-c",staticStyle:{width:"10%"}},[t._v("必需")])]),t._v(" "),s("tr",[s("td",[t._v("fun")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("Function")]),t._v(" "),s("td",[t._v("function(){}")]),t._v(" "),s("td",[t._v("\n                  外部函数名"),s("br"),t._v("\n                  参数1:元素的值；"),s("br"),t._v("\n                  参数2:元素对象；"),s("br"),t._v("\n                  返回string为自定义错误\n                ")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("onError")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('"输入错误"')]),t._v(" "),s("td",[t._v("\n                  函数返回false错误的提示;\n                ")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])])]),t._v(" "),s("table",{staticClass:"table-props border"},[s("tr",[s("th",{attrs:{colspan:"5"}},[t._v("compareType")])]),t._v(" "),s("tr",[s("th",{staticStyle:{width:"20%"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{width:"20%"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{width:"30%"}},[t._v("描述")]),t._v(" "),s("th",{staticClass:"text-c",staticStyle:{width:"10%"}},[t._v("必需")])]),t._v(" "),s("tr",[s("td",[t._v("desID")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("string|object")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("要跟源目标进行比较的目标组件（选择器|对象）")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("Y")])]),t._v(" "),s("tr",[s("td",[t._v("operateor")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("string")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("\n                  比较符号：=、!=、>、>=、<、<=\n                ")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("dataType")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("string")]),t._v(" "),s("td",[t._v('"string"')]),t._v(" "),s("td",[t._v('值："string"、"number","datetime","date"')]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])]),t._v(" "),s("tr",[s("td",[t._v("onError")]),t._v(" "),s("td",{staticClass:"atn"},[t._v("String")]),t._v(" "),s("td",[t._v('"输入错误"')]),t._v(" "),s("td",[t._v("错误时的提示语")]),t._v(" "),s("td",{staticClass:"text-c"},[t._v("N")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"apiModule"},[s("h2",{staticClass:"cy_h2"},[t._v("实例方法")]),t._v(" "),s("ul",{staticClass:"ul-props"},[s("li",[s("p",[s("a",[t._v("pageIsValid")]),t._v("(callback : Function) : "),s("a",[t._v("Boolean")])]),t._v(" "),s("p",[t._v("检查各项是否验证通过，返回校验结果；(参数callback每一项校验不通过时都会调用该函数；当该函数返回true时不再校验后面各项验证；)")])]),t._v(" "),s("li",[s("p",[s("a",[t._v("oneIsValid")]),t._v("(attr : String) : "),s("a",[t._v("object")])]),t._v(" "),s("p",[t._v("检查单项是否验证通过；(参数attr为要校验的数据属性值；返回值object；里面包含isValid属性表示校验是否通过;)")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("a",[this._v("addRule")]),this._v("(validtype : String, func : Function) : "),a("a",[this._v("Void")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[a("a",[this._v("serialize")]),this._v("(form : Object|String = null) : "),a("a",[this._v("String")])]),this._v(" "),a("p",[this._v("输出序列化表单值的结果；")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[a("a",[this._v("serializeArray")]),this._v("(form : Object|String = null) : "),a("a",[this._v("Array")])]),this._v(" "),a("p",[this._v("输出以数组形式序列化表单值的结果；")])])}]};var r=s("VU/8")(i,e,!1,function(t){s("ms2z")},"data-v-ecfe5792",null);a.default=r.exports},ms2z:function(t,a){}});
//# sourceMappingURL=14.ec9e4852bfb231bb7f40.js.map