(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{595:function(e,s,a){"use strict";a.r(s);var n=a(0),t=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"受控组件和非受控组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#受控组件和非受控组件"}},[e._v("#")]),e._v(" 受控组件和非受控组件")]),e._v(" "),s("p",[s("code",[e._v("React")]),e._v("的受控组件与非受控组件的概念是相对于表单而言的，在"),s("code",[e._v("React")]),e._v("中表单元素通常会持有一下内部的"),s("code",[e._v("state")]),e._v("，因此它的工作方式与其他"),s("code",[e._v("HTML")]),e._v("元素不一样，而获取表单元素内部"),s("code",[e._v("state")]),e._v("的实现方式的不同，就产生了受控组件和非受控组件。")]),e._v(" "),s("h2",{attrs:{id:"受控组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#受控组件"}},[e._v("#")]),e._v(" 受控组件")]),e._v(" "),s("p",[e._v("在"),s("code",[e._v("HTML")]),e._v("的表单元素中，它们通常自己维护一套"),s("code",[e._v("state")]),e._v("，并随着用户的输入自己进行"),s("code",[e._v("UI")]),e._v("上的更新，这种行为是不被我们程序所管控的，而如果将"),s("code",[e._v("React")]),e._v("里的"),s("code",[e._v("state")]),e._v("属性和表单元素的值建立依赖关系，再通过"),s("code",[e._v("onChange")]),e._v("事件与"),s("code",[e._v("setState()")]),e._v("结合更新"),s("code",[e._v("state")]),e._v("属性，就能达到控制用户输入过程中表单发生的操作，"),s("code",[e._v("React")]),e._v("以这种方式控制取值的表单输入元素就叫做受控组件。"),s("br"),e._v("\n在"),s("code",[e._v("React")]),e._v("中定义了一个"),s("code",[e._v("input")]),e._v("输入框的话，它并没有类似于"),s("code",[e._v("Vue")]),e._v("里"),s("code",[e._v("v-model")]),e._v("的这种双向绑定功能，也就是说我们并没有一个指令能够将数据和输入框结合起来，用户在输入框中输入内容，然后数据同步更新。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('class Input extends React.Component {\n  render () {\n    return <input name="username" />\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("用户在界面上的输入框输入内容时，它是自己维护了一个"),s("code",[e._v("state")]),e._v("，这个"),s("code",[e._v("state")]),e._v("并不是我们平常看见的"),s("code",[e._v("this.state")]),e._v("，而是每个表单元素上抽象的"),s("code",[e._v("state")]),e._v("，这样的话就能根据用户的输入自己进行"),s("code",[e._v("UI")]),e._v("上的更新，如果我们想要控制输入框的内容，而输入框的内容取决的是"),s("code",[e._v("input")]),e._v("中的"),s("code",[e._v("value")]),e._v("属性，那么我们可以在"),s("code",[e._v("this.state")]),e._v("中定义一个名为"),s("code",[e._v("username")]),e._v("的属性，并将"),s("code",[e._v("input")]),e._v("上的"),s("code",[e._v("value")]),e._v("指定为这个属性。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('class Input extends React.Component {\n  constructor (props) {\n    super(props);\n    this.state = { username: "1" };\n  }\n  render () {\n    return <input name="username" value={this.state.username} />\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("但是这时候你会发现"),s("code",[e._v("input")]),e._v("的内容是只读的，因为"),s("code",[e._v("value")]),e._v("会被我们的"),s("code",[e._v("this.state.username")]),e._v("所控制，当用户输入新的内容时，"),s("code",[e._v("this.state.username")]),e._v("并不会自动更新，这样的话"),s("code",[e._v("input")]),e._v("内的内容也就不会变了，此时控制台通常会抛出一个"),s("code",[e._v("Warning")]),e._v("。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("您为表单字段提供了一个没有"),s("code",[e._v("onChange")]),e._v("处理程序的"),s("code",[e._v("value")]),e._v("属性，这将呈现只读字段，如果字段应该是可变的，请使用"),s("code",[e._v("defaultValue")]),e._v("，否则请设置"),s("code",[e._v("onChange")]),e._v("或"),s("code",[e._v("readOnly")]),e._v("。"),s("br"),e._v("\n这段"),s("code",[e._v("Warning")]),e._v("其实给出了对于这个问题的解决方案，我们只需要对组件的"),s("code",[e._v("onChange")]),e._v("事件来监听输入内容的改变并使用"),s("code",[e._v("setState")]),e._v("更新"),s("code",[e._v("this.state.username")]),e._v("即可，如此我们在当前组件中能够控制这个表单元素的值，这就是受控组件。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('class Input extends React.Component {\n  constructor (props) {\n    super(props);\n    this.state = { username: "1" };\n  }\n  render () {\n    return (\n      <>\n        <input name="username" value={this.state.username} \n          onChange={e => this.setState({username: e.target.value})} \n        />\n        <button onClick={() => console.log(this.state.username)} >Log</button>\n      </>\n    )\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br")])]),s("p",[e._v("此外需要注意的是，如果是讲此组件作为一个共用的组件用以调用的话，是有弊端的，尽管此时"),s("code",[e._v("Input")]),e._v("组件本身是一个受控组件，但与之相对的调用方失去了更改"),s("code",[e._v("Input")]),e._v("组件值的控制权，所以对调用方而言，"),s("code",[e._v("Input")]),e._v("组件是一个非受控组件，以非受控组件的使用方式去调用受控组件是一种反模式，下边的例子都是属于"),s("code",[e._v("Hooks")]),e._v("的写法。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 组件提供方\nfunction Input({ defaultValue }) {\n  const [value, setValue] = React.useState(defaultValue)\n  return <input value={value} onChange={e => setValue(e.target.value)} />\n}\n\n// 调用方\nfunction UseInput() {\n  return <Input defaultValue={1} />\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("如果要对于组件提供方还是调用方"),s("code",[e._v("Input")]),e._v("组件都为受控组件，只需要提供方让出控制权即可。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 组件提供方\nfunction Input({ value, onChange }) {\n  return <input value={value} onChange={onChange} />\n}\n\n// 调用方\nfunction UseInput() {\n  const [value, setValue] = React.useState(1);\n  return <Input value={value} onChange={e => setValue(e.target.value)} />\n}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h2",{attrs:{id:"非受控组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非受控组件"}},[e._v("#")]),e._v(" 非受控组件")]),e._v(" "),s("p",[e._v("如果表单元素并不经过"),s("code",[e._v("state")]),e._v("，而是通过"),s("code",[e._v("ref")]),e._v("修改或者直接操作"),s("code",[e._v("DOM")]),e._v("，那么它的数据无法通过"),s("code",[e._v("state")]),e._v("控制，这就是非受控组件。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('class Input extends React.Component {\n  constructor (props) {\n    super(props);\n    this.input = React.createRef();\n  }\n  render () {\n    return (\n      <>\n        <input name="username" ref={this.input} />\n        <button onClick={() => console.log(this.input.current.value)} >Log</button>\n      </>\n    )\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("h3",{attrs:{id:"受控组件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#受控组件-2"}},[e._v("#")]),e._v(" 受控组件")]),e._v(" "),s("ul",[s("li",[e._v("每当表单的状态发生变化时，都会被写入到组件的"),s("code",[e._v("state")]),e._v("中。")]),e._v(" "),s("li",[e._v("在受控组件中，组件渲染出的状态与它的"),s("code",[e._v("value")]),e._v("或"),s("code",[e._v("checked prop")]),e._v("相对应。")]),e._v(" "),s("li",[s("code",[e._v("react")]),e._v("受控组件更新"),s("code",[e._v("state")]),e._v("的流程:\n"),s("ul",[s("li",[e._v("通过在初始"),s("code",[e._v("state")]),e._v("中设置表单的默认值。")]),e._v(" "),s("li",[e._v("每当表单的值发生变化时，调用"),s("code",[e._v("onChange")]),e._v("事件处理器。")]),e._v(" "),s("li",[e._v("事件处理器通过合成对象"),s("code",[e._v("event")]),e._v("拿到改变后的状态，并更新应用的"),s("code",[e._v("state")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("SetState")]),e._v("触发视图的重新渲染，完成表单组件值的更新。")])])])]),e._v(" "),s("h3",{attrs:{id:"非受控组件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非受控组件-2"}},[e._v("#")]),e._v(" 非受控组件")]),e._v(" "),s("ul",[s("li",[e._v("如果一个表单组件没有"),s("code",[e._v("value prop")]),e._v("就可以称为非受控组件。")]),e._v(" "),s("li",[e._v("非受控组件是一种反模式，它的值不受组件自身的"),s("code",[e._v("state")]),e._v("或"),s("code",[e._v("props")]),e._v("控制。")]),e._v(" "),s("li",[e._v("通常需要为其添加"),s("code",[e._v("ref prop")]),e._v("来访问渲染后的底层"),s("code",[e._v("DOM")]),e._v("元素。")]),e._v(" "),s("li",[e._v("可通过添加"),s("code",[e._v("defaultValue")]),e._v("指定"),s("code",[e._v("value")]),e._v("值。")])]),e._v(" "),s("h2",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[e._v("#")]),e._v(" 每日一题")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://github.com/WindrunnerMax/EveryDay\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://muyunyun.cn/posts/8bdf2cdf/\nhttps://zhuanlan.zhihu.com/p/89223413\nhttps://juejin.cn/post/6844904154133954568\nhttps://juejin.cn/post/6858276396968951822\nhttps://segmentfault.com/a/1190000022925043\nhttps://segmentfault.com/a/1190000012458996\nhttps://zh-hans.reactjs.org/docs/glossary.html\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);