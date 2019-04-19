(window.webpackJsonp=window.webpackJsonp||[]).push([[690],{402:function(e,v,t){"use strict";t.r(v);var r=t(0),_=Object(r.a)({},function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"了解前端-mvvm-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#了解前端-mvvm-模式","aria-hidden":"true"}},[e._v("#")]),e._v(" 了解前端 MVVM 模式")]),e._v(" "),t("h2",{attrs:{id:"本节视频"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[e._v("#")]),e._v(" 本节视频")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bilibili.com/video/av43513191/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】Vue 渐进式 JavaScript 框架-了解前端 MVVM 模式"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"什么是-mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvvm","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是 MVVM")]),e._v(" "),t("p",[e._v("MVVM（Model-View-ViewModel）是一种软件架构设计模式，由微软 WPF（用于替代 WinForm，以前就是用这个技术开发桌面应用程序的）和 Silverlight（类似于 Java Applet，简单点说就是在浏览器上运行的 WPF） 的架构师 Ken Cooper 和 Ted Peters 开发，是一种简化用户界面的**"),t("code",[e._v("事件驱动编程方式")]),e._v("**。由 John Gossman（同样也是 WPF 和 Silverlight 的架构师）于 2005 年在他的博客上发表。")]),e._v(" "),t("p",[e._v("MVVM 源自于经典的 MVC（Model-View-Controller）模式（期间还演化出了 MVP（Model-View-Presenter） 模式）。"),t("strong",[t("code",[e._v("MVVM 的核心是 ViewModel 层")])]),e._v("，负责转换 Model 中的数据对象来让数据变得更容易管理和使用，其作用如下：")]),e._v(" "),t("ul",[t("li",[e._v("该层向上与视图层进行双向数据绑定")]),e._v(" "),t("li",[e._v("向下与 Model 层通过接口请求进行数据交互")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer201812100001.png",alt:""}})]),e._v(" "),t("p",[e._v("MVVM 已经相当成熟了，主要运用但不仅仅在网络应用程序开发中。当下流行的 MVVM 框架有 "),t("code",[e._v("Vue.js")]),e._v("，"),t("code",[e._v("AngularJS")]),e._v(" 等。")]),e._v(" "),t("h2",{attrs:{id:"为什么要使用-mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-mvvm","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么要使用 MVVM")]),e._v(" "),t("p",[e._v("MVVM 模式和 MVC 模式一样，主要目的是分离视图（View）和模型（Model），有几大好处")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("低耦合：")]),e._v(" 视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的 View 上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。")]),e._v(" "),t("li",[t("strong",[e._v("可复用：")]),e._v(" 你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 View 重用这段视图逻辑。")]),e._v(" "),t("li",[t("strong",[e._v("独立开发：")]),e._v(" 开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。")]),e._v(" "),t("li",[t("strong",[e._v("可测试：")]),e._v(" 界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。")])]),e._v(" "),t("h2",{attrs:{id:"mvvm-的组成部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-的组成部分","aria-hidden":"true"}},[e._v("#")]),e._v(" MVVM 的组成部分")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/Lusifer201812100002.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view","aria-hidden":"true"}},[e._v("#")]),e._v(" View")]),e._v(" "),t("p",[e._v("View 是视图层，也就是用户界面。前端主要由 HTML 和 CSS 来构建，为了更方便地展现 ViewModel 或者 Model 层的数据，已经产生了各种各样的前后端模板语言，比如 "),t("code",[e._v("FreeMarker")]),e._v("、"),t("code",[e._v("Thymeleaf")]),e._v(" 等等，各大 MVVM 框架如 "),t("code",[e._v("Vue.js")]),e._v("，"),t("code",[e._v("AngularJS")]),e._v("，"),t("code",[e._v("EJS")]),e._v(" 等也都有自己用来构建用户界面的内置模板语言。")]),e._v(" "),t("h3",{attrs:{id:"model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[e._v("#")]),e._v(" Model")]),e._v(" "),t("p",[e._v("Model 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，主要围绕数据库系统展开。这里的难点主要在于需要和前端约定统一的 "),t("strong",[t("code",[e._v("接口规则")])])]),e._v(" "),t("h3",{attrs:{id:"viewmodel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#viewmodel","aria-hidden":"true"}},[e._v("#")]),e._v(" ViewModel")]),e._v(" "),t("p",[e._v("ViewModel 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型。")]),e._v(" "),t("p",[t("strong",[e._v("需要注意的是 ViewModel 所封装出来的数据模型包括视图的状态和行为两部分，而 Model 层的数据模型是只包含状态的")])]),e._v(" "),t("ul",[t("li",[e._v("比如页面的这一块展示什么，那一块展示什么这些都属于视图状态（展示）")]),e._v(" "),t("li",[e._v("页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为（交互）")])]),e._v(" "),t("p",[e._v("视图状态和行为都封装在了 ViewModel 里。这样的封装使得 ViewModel 可以完整地去描述 View 层`。由于实现了双向绑定，ViewModel 的内容会实时展现在 View 层，这是激动人心的，因为前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图。")]),e._v(" "),t("p",[e._v("MVVM 框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新，真正实现 "),t("code",[e._v("事件驱动编程")]),e._v("。")]),e._v(" "),t("p",[e._v("View 层展现的不是 "),t("code",[e._v("Model")]),e._v(" 层的数据，而是 "),t("code",[e._v("ViewModel")]),e._v(" 的数据，由 "),t("code",[e._v("ViewModel")]),e._v(" 负责与 "),t("code",[e._v("Model")]),e._v(" 层交互，"),t("code",[e._v("这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环")]),e._v("。")])])},[],!1,null,null,null);v.default=_.exports}}]);