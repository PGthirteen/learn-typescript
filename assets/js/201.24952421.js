(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{647:function(v,_,e){"use strict";e.r(_);var d=e(0),c=Object(d.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"css伪类与伪元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css伪类与伪元素"}},[v._v("#")]),v._v(" CSS伪类与伪元素")]),v._v(" "),_("p",[_("code",[v._v("CSS")]),v._v("引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，比如，一句话中的第一个字母，或者是列表中的第一个元素。")]),v._v(" "),_("h2",{attrs:{id:"伪类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[v._v("#")]),v._v(" 伪类")]),v._v(" "),_("p",[v._v("伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过"),_("code",[v._v(":hover")]),v._v("来描述这个元素的状态。虽然它和普通的"),_("code",[v._v("css")]),v._v("类相似，可以为已有的元素添加样式，但是它只有处于"),_("code",[v._v("dom")]),v._v("树无法描述的状态下才能为元素添加样式，所以将其称为伪类。")]),v._v(" "),_("h3",{attrs:{id:"状态性伪类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态性伪类"}},[v._v("#")]),v._v(" 状态性伪类")]),v._v(" "),_("p",[v._v("是基于元素当前状态进行选择的。在与用户的交互过程中元素的状态是动态变化的，因此该元素会根据其状态呈现不同的样式。当元素处于某状态时会呈现该样式，而进入另一状态后，该样式也会失去。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v(":link")]),v._v(" 应用于未被访问过的链接。")]),v._v(" "),_("li",[_("code",[v._v(":hover")]),v._v(" 应用于鼠标悬停到的元素。")]),v._v(" "),_("li",[_("code",[v._v(":active")]),v._v(" 应用于被激活的元素。")]),v._v(" "),_("li",[_("code",[v._v(":visited")]),v._v(" 应用于被访问过的链接，与"),_("code",[v._v(":link")]),v._v("互斥。")]),v._v(" "),_("li",[_("code",[v._v(":focus")]),v._v(" 应用于拥有键盘输入焦点的元素。")])]),v._v(" "),_("h3",{attrs:{id:"结构性伪类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结构性伪类"}},[v._v("#")]),v._v(" 结构性伪类")]),v._v(" "),_("p",[_("code",[v._v("CSS3")]),v._v("新增选择器，利用"),_("code",[v._v("dom")]),v._v("树进行元素过滤，通过文档结构的互相关系来匹配元素，能够减少"),_("code",[v._v("class")]),v._v("和"),_("code",[v._v("id")]),v._v("属性的定义，使文档结构更简洁。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("div:first-child")]),v._v(" 选择属于其父元素的第一个子元素的每个"),_("code",[v._v("div")]),v._v("元素。")]),v._v(" "),_("li",[_("code",[v._v("div:last-child")]),v._v(" 选择属于其父元素最后一个子元素的每个"),_("code",[v._v("div")]),v._v("元素。")]),v._v(" "),_("li",[_("code",[v._v("div:nth-child(n)")]),v._v(" 选择属于其父元素的第n个子元素的每个"),_("code",[v._v("div")]),v._v("元素。")]),v._v(" "),_("li",[_("code",[v._v("div:nth-last-child(n)")]),v._v(" 同上，从这个元素的最后一个子元素开始算。")]),v._v(" "),_("li",[_("code",[v._v("div:nth-of-type(n)")]),v._v(" 选择属于其父元素第"),_("code",[v._v("n")]),v._v("个"),_("code",[v._v("div")]),v._v("元素的每个"),_("code",[v._v("div")]),v._v("元素。")]),v._v(" "),_("li",[_("code",[v._v("div:nth-last-of-type(n)")]),v._v(" 同上，但是从最后一个子元素开始计数。")]),v._v(" "),_("li",[_("code",[v._v("div:first-of-type")]),v._v(" 选择属于其父元素的首个"),_("code",[v._v("div")]),v._v("元素的每个"),_("code",[v._v("div")]),v._v("元素。")]),v._v(" "),_("li",[_("code",[v._v("div:last-of-type")]),v._v(" 选择属于其父元素的最后"),_("code",[v._v("div")]),v._v("元素的每个"),_("code",[v._v("div")]),v._v("元素。")]),v._v(" "),_("li",[_("code",[v._v("div:only-child")]),v._v(" 选择属于其父元素的唯一子元素的每个"),_("code",[v._v("div")]),v._v("元素。")]),v._v(" "),_("li",[_("code",[v._v("div:only-of-type")]),v._v(" 选择属于其父元素唯一的"),_("code",[v._v("div")]),v._v("元素的每个"),_("code",[v._v("div")]),v._v("元素。")]),v._v(" "),_("li",[_("code",[v._v(":empty")]),v._v(" 选择的元素里面没有任何内容。")]),v._v(" "),_("li",[_("code",[v._v(":checked")]),v._v(" 匹配被选中的"),_("code",[v._v("input")]),v._v("元素，这个"),_("code",[v._v("input")]),v._v("元素包括"),_("code",[v._v("radio")]),v._v("和"),_("code",[v._v("checkbox")]),v._v("。")]),v._v(" "),_("li",[_("code",[v._v(":default")]),v._v(" 匹配默认选中的元素，例如提交按钮总是表单的默认按钮。")]),v._v(" "),_("li",[_("code",[v._v(":disabled")]),v._v(" 匹配禁用的表单元素。")]),v._v(" "),_("li",[_("code",[v._v(":enabled")]),v._v(" 匹配没有设置"),_("code",[v._v("disabled")]),v._v("属性的表单元素。")]),v._v(" "),_("li",[_("code",[v._v(":valid")]),v._v(" 匹配条件验证正确的表单元素。")])]),v._v(" "),_("h2",{attrs:{id:"伪元素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[v._v("#")]),v._v(" 伪元素")]),v._v(" "),_("p",[v._v("用于创建一些不在文档树中的元素，并为其添加样式。实际上，伪元素就是选取某些元素前面或后面这种普通选择器无法完成的工作。控制的内容和元素是相同的，但它本身是基于元素的抽象，并不存在于文档结构中。比如说，我们可以通过"),_("code",[v._v("::before")]),v._v("来在一个元素前增加一些文本，并为这些文本添加样式。")]),v._v(" "),_("p",[_("code",[v._v("CSS3")]),v._v("规范中要求使用单冒号"),_("code",[v._v(":")]),v._v("用于"),_("code",[v._v("CSS3")]),v._v("伪类，双冒号"),_("code",[v._v("::")]),v._v("用于 "),_("code",[v._v("CSS3")]),v._v("伪元素，目的是区分伪类和伪元素。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("::first-letter")]),v._v(" 选择元素文本的第一个字。")]),v._v(" "),_("li",[_("code",[v._v("::first-line")]),v._v(" 选择元素文本的第一行。")]),v._v(" "),_("li",[_("code",[v._v("::before")]),v._v(" 在元素内容的最前面添加新内容。")]),v._v(" "),_("li",[_("code",[v._v("::after")]),v._v(" 在元素内容的最后面添加新内容。")]),v._v(" "),_("li",[_("code",[v._v("::selection")]),v._v(" 匹配用户被用户选中或者处于高亮状态的部分。")]),v._v(" "),_("li",[_("code",[v._v("::placeholder")]),v._v(" 匹配占位符的文本，只有元素设置了"),_("code",[v._v("placeholder")]),v._v("属性时，该伪元素才能生效。")])]),v._v(" "),_("h2",{attrs:{id:"每日一题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[v._v("#")]),v._v(" 每日一题")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("https://github.com/WindrunnerMax/EveryDay\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])])])}),[],!1,null,null,null);_.default=c.exports}}]);