(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{646:function(a,e,v){"use strict";v.r(e);var s=v(0),t=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"display的值及作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display的值及作用"}},[a._v("#")]),a._v(" display的值及作用")]),a._v(" "),e("p",[e("code",[a._v("display")]),a._v("属性可以设置元素的内部和外部显示类型，元素的外部显示类型将决定该元素在流式布局中的表现，例如块级或内联元素，元素的内部显示类型可以控制其子元素的布局，例如"),e("code",[a._v("grid")]),a._v("或"),e("code",[a._v("flex")]),a._v("。目前所有浏览器都支持"),e("code",[a._v("display")]),a._v("属性，但是对于属性值的兼容性仍需注意。")]),a._v(" "),e("h2",{attrs:{id:"外部显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#外部显示"}},[a._v("#")]),a._v(" 外部显示")]),a._v(" "),e("p",[a._v("这些值指定了元素的外部显示类型，实际上就是其在流式布局中的角色，即在流式布局中的表现。")]),a._v(" "),e("h3",{attrs:{id:"display-none"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-none"}},[a._v("#")]),a._v(" display: none")]),a._v(" "),e("p",[e("code",[a._v("display: none;")]),a._v("是"),e("code",[a._v("CSS1")]),a._v("规范，无兼容性问题，该属性值表示此元素不会被显示，依照词义是真正隐藏元素，使用这个属性，被隐藏的元素不占据任何空间，用户交互操作例如点击事件都不会生效，读屏软件也不会读到元素的内容，这个元素的任何子元素也会同时被隐藏。当使用该属性将元素从显示状态切换为隐藏状态时，元素不占据原本的空间，会触发浏览器的重绘与回流。为这个属性添加过渡动画是无效的，他的任何不同状态值之间的切换总是会立即生效。这种方式产生的效果就像元素完全不存在，但在"),e("code",[a._v("DOM")]),a._v("中依然可以访问到这个元素，也可以通过"),e("code",[a._v("DOM")]),a._v("来操作它。")]),a._v(" "),e("h3",{attrs:{id:"display-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-block"}},[a._v("#")]),a._v(" display: block")]),a._v(" "),e("p",[e("code",[a._v("display: block;")]),a._v("是"),e("code",[a._v("CSS1")]),a._v("规范，无兼容性问题，该属性值表示此元素将显示为块级元素，此元素前后会带有换行符，元素独占一行，封闭后自动换行，默认宽度为"),e("code",[a._v("100%")]),a._v("，可以指定宽度和高度，内外边距对于四个方向有效。")]),a._v(" "),e("h3",{attrs:{id:"display-inline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-inline"}},[a._v("#")]),a._v(" display: inline")]),a._v(" "),e("p",[e("code",[a._v("display: inline;")]),a._v("是"),e("code",[a._v("CSS1")]),a._v("规范，无兼容性问题，该属性值表示此元素会被显示为内联元素，元素会生成一个或多个内联元素框，这些框不会在自身之前或之后产生换行符，在正常流中，如果有空间，则下一个元素将在同一行上，元素排在一行，封闭后不会自动换行，不能指定高度与宽度，可以使用"),e("code",[a._v("line-height")]),a._v("来指定高度，外边距对于水平方向有效，垂直方向无效，内边距对于水平方向正常有效，垂直方向只有效果，对其他元素无任何影响。")]),a._v(" "),e("h3",{attrs:{id:"display-inline-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-inline-block"}},[a._v("#")]),a._v(" display: inline-block")]),a._v(" "),e("p",[e("code",[a._v("display: inline-block;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，无兼容性问题，该属性值表示此元素将显示为内联块元素，该元素生成一个块元素框，该框将随周围的内容一起流动，就好像它是单个内联框一样，与被替换的元素非常相似，它等效于内联流根"),e("code",[a._v("inline flow-root")]),a._v("，可以指定宽度和高度，内外边距对于四个方向有效元素排在一行，但是在回车后会有空白缝隙。")]),a._v(" "),e("h3",{attrs:{id:"display-run-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-run-in"}},[a._v("#")]),a._v(" display: run-in")]),a._v(" "),e("p",[e("code",[a._v("display: run-in;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，绝大部分浏览器都不兼容，目前这是个实验性属性值，不应该用作生产环境，该属性值表示此元素会根据上下文决定对象是内联对象还是块级对象，如果它后一个元素是"),e("code",[a._v("block")]),a._v("那么它会变成"),e("code",[a._v("inline")]),a._v("并和后一个元素并排，如果它后一个元素是"),e("code",[a._v("inline")]),a._v("那么它会变成"),e("code",[a._v("block")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"内部显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内部显示"}},[a._v("#")]),a._v(" 内部显示")]),a._v(" "),e("p",[a._v("这些关键字指定了元素的内部显示类型，它们定义了该元素内部内容的布局方式，需要假定该元素为非替换元素。")]),a._v(" "),e("h3",{attrs:{id:"display-flow-root"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-flow-root"}},[a._v("#")]),a._v(" display: flow-root")]),a._v(" "),e("p",[e("code",[a._v("display: flow-root;")]),a._v("是"),e("code",[a._v("CSS3")]),a._v("规范，兼容性一般，该属性值表示此元素会生成一个块元素盒子，该元素盒子可建立一个新的块格式化上下文"),e("code",[a._v("BFC")]),a._v("，定义格式化根所在的位置。")]),a._v(" "),e("h3",{attrs:{id:"display-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table"}},[a._v("#")]),a._v(" display: table")]),a._v(" "),e("p",[e("code",[a._v("display: table;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为块级表格来显示，类似"),e("code",[a._v("<table>")]),a._v("，表格前后带有换行符。")]),a._v(" "),e("h3",{attrs:{id:"display-flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-flex"}},[a._v("#")]),a._v(" display: flex")]),a._v(" "),e("p",[e("code",[a._v("display: flex;")]),a._v("是"),e("code",[a._v("CSS3")]),a._v("规范，目前主流浏览器都已支持，是布局的首选方案，该属性值表示此元素会作为弹性盒子显示，在外部表现为"),e("code",[a._v("block")]),a._v("，内部作为弹性盒子使用，弹性布局可以为盒状模型提供最大的灵活性。在兼容移动端浏览器的方案上，有可能需要使用"),e("code",[a._v("display:-webkit-box;")]),a._v("，也就是内核前缀"),e("code",[a._v("-box")]),a._v("，同样都是弹性盒子，由于各阶段草案命名的原因，其命名从"),e("code",[a._v("box")]),a._v("更改为"),e("code",[a._v("flex")]),a._v("，"),e("code",[a._v("flex")]),a._v("是新的规范属性，此外"),e("code",[a._v("flex")]),a._v("并不能完全替代"),e("code",[a._v("box")]),a._v("，使用这两种方式在实际布局中会存在差异。")]),a._v(" "),e("h3",{attrs:{id:"display-grid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-grid"}},[a._v("#")]),a._v(" display: grid")]),a._v(" "),e("p",[e("code",[a._v("display: grid;")]),a._v("是"),e("code",[a._v("CSS3")]),a._v("规范，目前主流浏览器都已支持，该属性值表示将元素分为一个个网格，然后利用这些网格组合做出各种各样的布局。"),e("code",[a._v("Grid")]),a._v("布局与"),e("code",[a._v("Flex")]),a._v("布局有一定的相似性，都可以指定容器内部多个成员的位置。不同之处在于，"),e("code",[a._v("Flex")]),a._v("布局是轴线布局，只能指定成员针对轴线的位置，可以看作是一维布局。"),e("code",[a._v("Grid")]),a._v("布局则是将容器划分成行和列，产生单元格，然后指定成员所在的单元格，可以看作是二维布局。")]),a._v(" "),e("h3",{attrs:{id:"display-inline-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-inline-table"}},[a._v("#")]),a._v(" display: inline-table")]),a._v(" "),e("p",[e("code",[a._v("display: inline-table;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值与"),e("code",[a._v("display: table;")]),a._v("在元素内部表现相同，在元素外部显示表现为"),e("code",[a._v("inline")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-inline-flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-inline-flex"}},[a._v("#")]),a._v(" display: inline-flex")]),a._v(" "),e("p",[e("code",[a._v("display: inline-flex;")]),a._v("是"),e("code",[a._v("CSS3")]),a._v("规范，目前主流浏览器都已支持，该属性值与"),e("code",[a._v("display: flex;")]),a._v("在元素内部表现相同，在元素外部显示表现为"),e("code",[a._v("inline")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-inline-grid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-inline-grid"}},[a._v("#")]),a._v(" display: inline-grid")]),a._v(" "),e("p",[e("code",[a._v("display: inline-grid;")]),a._v("是"),e("code",[a._v("CSS3")]),a._v("规范，目前主流浏览器都已支持，该属性值与"),e("code",[a._v("display: grid;")]),a._v("在元素内部表现相同，在元素外部显示表现为"),e("code",[a._v("inline")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-list-item"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-list-item"}},[a._v("#")]),a._v(" display: list-item")]),a._v(" "),e("p",[e("code",[a._v("display: list-item;")]),a._v("是"),e("code",[a._v("CSS1")]),a._v("规范，无兼容性问题，该属性值表示将元素的外部显示类型变为"),e("code",[a._v("block")]),a._v("盒模型，并将内部显示类型变为多个"),e("code",[a._v("list-item inline")]),a._v("盒模型。")]),a._v(" "),e("h2",{attrs:{id:"内部表现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内部表现"}},[a._v("#")]),a._v(" 内部表现")]),a._v(" "),e("p",[e("code",[a._v("table")]),a._v("布局模型有着相对复杂的内部结构，因此它们的子元素可能扮演着不同的角色，这一类关键字就是用来定义这些内部显示类型，并且只有在这些特定的布局模型中才有意义。")]),a._v(" "),e("h3",{attrs:{id:"display-table-row-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table-row-group"}},[a._v("#")]),a._v(" display: table-row-group")]),a._v(" "),e("p",[e("code",[a._v("display: table-row-group;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为一个或多个行的分组来显示，类似于"),e("code",[a._v("<tbody>")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-table-header-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table-header-group"}},[a._v("#")]),a._v(" display: table-header-group")]),a._v(" "),e("p",[e("code",[a._v("display: table-header-group;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为一个或多个行的分组来显示，类似于"),e("code",[a._v("<thead>")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-table-footer-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table-footer-group"}},[a._v("#")]),a._v(" display: table-footer-group")]),a._v(" "),e("p",[e("code",[a._v("display: table-footer-group;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为一个或多个行的分组来显示，类似于"),e("code",[a._v("<tfoot>")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-table-row"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table-row"}},[a._v("#")]),a._v(" display: table-row")]),a._v(" "),e("p",[e("code",[a._v("display: table-row;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为一个表格行显示，类似于"),e("code",[a._v("<tr>")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-table-column-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table-column-group"}},[a._v("#")]),a._v(" display: table-column-group")]),a._v(" "),e("p",[e("code",[a._v("display: table-column-group;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为一个或多个列的分组来显示，类似于"),e("code",[a._v("<colgroup>")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-table-column"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table-column"}},[a._v("#")]),a._v(" display: table-column")]),a._v(" "),e("p",[e("code",[a._v("display: table-column;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为一个单元格列显示，类似于"),e("code",[a._v("<col>")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-table-cell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table-cell"}},[a._v("#")]),a._v(" display: table-cell")]),a._v(" "),e("p",[e("code",[a._v("display: table-cell;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为一个表格单元格显示，类似于"),e("code",[a._v("<td>")]),a._v("和"),e("code",[a._v("<th>")]),a._v("。")]),a._v(" "),e("h3",{attrs:{id:"display-table-caption"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#display-table-caption"}},[a._v("#")]),a._v(" display: table-caption")]),a._v(" "),e("p",[e("code",[a._v("display: table-caption;")]),a._v("是"),e("code",[a._v("CSS2")]),a._v("规范，兼容性良好，该属性值表示此元素会作为一个表格标题显示，类似于"),e("code",[a._v("<caption>")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"每日一题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[a._v("#")]),a._v(" 每日一题")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("https://github.com/WindrunnerMax/EveryDay\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("https://www.runoob.com/cssref/pr-class-display.html\nhttps://developer.mozilla.org/zh-CN/docs/Web/CSS/display\nhttps://blog.csdn.net/pedrojuliet/article/details/69062306\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);