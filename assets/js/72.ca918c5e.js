(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{468:function(t,v,_){"use strict";_.r(v);var r=_(2),a=Object(r.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"bootstrap-网格系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-网格系统","aria-hidden":"true"}},[t._v("#")]),t._v(" Bootstrap 网格系统")]),t._v(" "),_("h2",{attrs:{id:"本节视频"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 本节视频")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.bilibili.com/video/av24482487/",target:"_blank",rel:"noopener noreferrer"}},[t._v("【视频】使用 Bootstrap-Bootstrap 网格布局"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),_("p",[t._v("Bootstrap 提供了一套响应式、移动设备优先的流式网格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列。")]),t._v(" "),_("h2",{attrs:{id:"什么是网格（grid）？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是网格（grid）？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是网格（Grid）？")]),t._v(" "),_("blockquote",[_("p",[t._v("在平面设计中，网格是一种由一系列用于组织内容的相交的直线（垂直的、水平的）组成的结构（通常是二维的）。它广泛应用于打印设计中的设计布局和内容结构。在网页设计中，它是一种用于快速创建一致的布局和有效地使用 HTML 和 CSS 的方法。")])]),t._v(" "),_("p",[t._v("简单地说，网页设计中的网格用于组织内容，让网站易于浏览，并降低用户端的负载。")]),t._v(" "),_("h2",{attrs:{id:"什么是-bootstrap-网格系统（grid-system）？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bootstrap-网格系统（grid-system）？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 Bootstrap 网格系统（Grid System）？")]),t._v(" "),_("p",[t._v("Bootstrap 官方文档中有关网格系统的描述：")]),t._v(" "),_("blockquote",[_("p",[t._v("Bootstrap 包含了一个响应式的、移动设备优先的、不固定的网格系统，可以随着设备或视口大小的增加而适当地扩展到 12 列。它包含了用于简单的布局选项的预定义类，也包含了用于生成更多语义布局的功能强大的混合类。")])]),t._v(" "),_("p",[t._v("让我们来理解一下上面的语句。Bootstrap 3 是移动设备优先的，在这个意义上，Bootstrap 代码从小屏幕设备（比如移动设备、平板电脑）开始，然后扩展到大屏幕设备（比如笔记本电脑、台式电脑）上的组件和网格。")]),t._v(" "),_("h3",{attrs:{id:"移动设备优先策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#移动设备优先策略","aria-hidden":"true"}},[t._v("#")]),t._v(" 移动设备优先策略")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("内容")]),t._v(" "),_("ul",[_("li",[t._v("决定什么是最重要的")]),t._v(" "),_("li",[t._v("布局")])])]),t._v(" "),_("li",[_("p",[t._v("优先设计更小的宽度")]),t._v(" "),_("ul",[_("li",[t._v("基础的 CSS 是移动设备优先，"),_("strong",[t._v("媒体查询")]),t._v(" 是针对于平板电脑、台式电脑")]),t._v(" "),_("li",[t._v("渐进增强")])])]),t._v(" "),_("li",[_("p",[t._v("随着屏幕大小的增加而添加元素")])])]),t._v(" "),_("p",[t._v("响应式网格系统随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/assets/Lusifer1528226157.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"bootstrap-网格系统（grid-system）的工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-网格系统（grid-system）的工作原理","aria-hidden":"true"}},[t._v("#")]),t._v(" Bootstrap 网格系统（Grid System）的工作原理")]),t._v(" "),_("p",[t._v("网格系统通过一系列包含内容的行和列来创建页面布局。下面列出了 Bootstrap 网格系统是如何工作的：")]),t._v(" "),_("ul",[_("li",[t._v("行必须放置在 "),_("code",[t._v(".container")]),t._v(" class 内，以便获得适当的对齐（alignment）和内边距（padding）")]),t._v(" "),_("li",[t._v("使用行来创建列的水平组")]),t._v(" "),_("li",[t._v("内容应该放置在列内，且唯有列可以是行的直接子元素")]),t._v(" "),_("li",[t._v("预定义的网格类，比如 "),_("code",[t._v(".row")]),t._v(" 和 "),_("code",[t._v(".col-xs-4")]),t._v("，可用于快速创建网格布局。LESS 混合类可用于更多语义布局")]),t._v(" "),_("li",[t._v("列通过内边距（padding）来创建列内容之间的间隙。该内边距是通过 "),_("code",[t._v(".rows")]),t._v(" 上的外边距（margin）取负，表示第一列和最后一列的行偏移")]),t._v(" "),_("li",[t._v("网格系统是通过指定您想要横跨的十二个可用的列来创建的。例如，要创建三个相等的列，则使用三个 "),_("code",[t._v(".col-xs-4")])])]),t._v(" "),_("h2",{attrs:{id:"网格选项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网格选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 网格选项")]),t._v(" "),_("p",[t._v("下表总结了 Bootstrap 网格系统如何跨多个设备工作：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("超小设备手机（< 768px）")]),t._v(" "),_("th",[t._v("小型设备平板电脑（≥ 768px）")]),t._v(" "),_("th",[t._v("中型设备台式电脑（≥ 992px）")]),t._v(" "),_("th",[t._v("大型设备台式电脑（≥ 1200px）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("网格行为")]),t._v(" "),_("td",[t._v("一直是水平的")]),t._v(" "),_("td",[t._v("以折叠开始，断点以上是水平的")]),t._v(" "),_("td",[t._v("以折叠开始，断点以上是水平的")]),t._v(" "),_("td",[t._v("以折叠开始，断点以上是水平的")])]),t._v(" "),_("tr",[_("td",[t._v("最大容器宽度")]),t._v(" "),_("td",[t._v("None (auto)")]),t._v(" "),_("td",[t._v("750px")]),t._v(" "),_("td",[t._v("970px")]),t._v(" "),_("td",[t._v("1170px")])]),t._v(" "),_("tr",[_("td",[t._v("Class 前缀")]),t._v(" "),_("td",[_("code",[t._v(".col-xs-")])]),t._v(" "),_("td",[_("code",[t._v(".col-sm-")])]),t._v(" "),_("td",[_("code",[t._v(".col-md-")])]),t._v(" "),_("td",[_("code",[t._v(".col-lg-")])])]),t._v(" "),_("tr",[_("td",[t._v("列数量和")]),t._v(" "),_("td",[t._v("12")]),t._v(" "),_("td",[t._v("12")]),t._v(" "),_("td",[t._v("12")]),t._v(" "),_("td",[t._v("12")])]),t._v(" "),_("tr",[_("td",[t._v("最大列宽")]),t._v(" "),_("td",[t._v("Auto")]),t._v(" "),_("td",[t._v("60px")]),t._v(" "),_("td",[t._v("78px")]),t._v(" "),_("td",[t._v("95px")])]),t._v(" "),_("tr",[_("td",[t._v("间隙宽度")]),t._v(" "),_("td",[t._v("30px（一个列的每边分别 15px）")]),t._v(" "),_("td",[t._v("30px（一个列的每边分别 15px）")]),t._v(" "),_("td",[t._v("30px（一个列的每边分别 15px）")]),t._v(" "),_("td",[t._v("30px（一个列的每边分别 15px）")])]),t._v(" "),_("tr",[_("td",[t._v("可嵌套")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")])]),t._v(" "),_("tr",[_("td",[t._v("偏移量")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")])]),t._v(" "),_("tr",[_("td",[t._v("列排序")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")]),t._v(" "),_("td",[t._v("Yes")])])])])])},[],!1,null,null,null);v.default=a.exports}}]);