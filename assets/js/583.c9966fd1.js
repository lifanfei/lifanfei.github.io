(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{662:function(e,v,_){"use strict";_.r(v);var o=_(0),t=Object(o.a)({},function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"多系统登录的复杂性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多系统登录的复杂性","aria-hidden":"true"}},[e._v("#")]),e._v(" 多系统登录的复杂性")]),e._v(" "),_("h2",{attrs:{id:"本节视频"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[e._v("#")]),e._v(" 本节视频")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.bilibili.com/video/av28842092",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】项目实战-iToken-单点登录服务-多系统登录的复杂性"),_("OutboundLink")],1)])]),e._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),_("p",[_("code",[e._v("web")]),e._v(" 系统早已从久远的单系统发展成为如今由多系统组成的应用群，面对如此众多的系统，用户难道要一个一个登录、然后一个一个注销吗？就像下图描述的这样")]),e._v(" "),_("p",[_("img",{attrs:{src:"/assets/Lusifer2018042722120005.png",alt:""}})]),e._v(" "),_("p",[_("code",[e._v("web")]),e._v(" 系统由单系统发展成多系统组成的应用群，复杂性应该由系统内部承担，而不是用户。无论 "),_("code",[e._v("web")]),e._v(" 系统内部多么复杂，对用户而言，都是一个统一的整体，也就是说，用户访问 "),_("code",[e._v("web")]),e._v(" 系统的整个应用群与访问单个系统一样，登录/注销只要一次就够了")]),e._v(" "),_("p",[_("img",{attrs:{src:"/assets/Lusifer2018042722120006.png",alt:""}})]),e._v(" "),_("p",[e._v("虽然单系统的登录解决方案很完美，但对于多系统应用群已经不再适用了，为什么呢？")]),e._v(" "),_("p",[e._v("单系统登录解决方案的核心是 "),_("code",[e._v("cookie")]),e._v("，"),_("code",[e._v("cookie")]),e._v(" 携带会话 "),_("code",[e._v("id")]),e._v(" 在浏览器与服务器之间维护会话状态。但 "),_("code",[e._v("cookie")]),e._v(" 是有限制的，这个限制就是 "),_("code",[e._v("cookie")]),e._v(" 的域（通常对应网站的域名），浏览器发送 "),_("code",[e._v("http")]),e._v(" 请求时会自动携带与该域匹配的 "),_("code",[e._v("cookie")]),e._v("，而不是所有 "),_("code",[e._v("cookie")])]),e._v(" "),_("p",[_("img",{attrs:{src:"/assets/Lusifer2018042722120007.png",alt:""}})]),e._v(" "),_("p",[e._v("既然这样，为什么不将 "),_("code",[e._v("web")]),e._v(" 应用群中所有子系统的域名统一在一个顶级域名下，例如 "),_("code",[e._v("*.baidu.com")]),e._v("，然后将它们的 "),_("code",[e._v("cookie")]),e._v(" 域设置为 "),_("code",[e._v("baidu.com")]),e._v("，这种做法理论上是可以的，甚至早期很多多系统登录就采用这种同域名共享 "),_("code",[e._v("cookie")]),e._v(" 的方式。")]),e._v(" "),_("p",[e._v("然而，可行并不代表好，共享 "),_("code",[e._v("cookie")]),e._v(" 的方式存在众多局限。")]),e._v(" "),_("ul",[_("li",[e._v("首先，应用群域名得统一；")]),e._v(" "),_("li",[e._v("其次，应用群各系统使用的技术（至少是 "),_("code",[e._v("web")]),e._v(" 服务器）要相同，不然 "),_("code",[e._v("cookie")]),e._v(" 的 "),_("code",[e._v("key")]),e._v(" 值（"),_("code",[e._v("tomcat")]),e._v(" 为 "),_("code",[e._v("JSESSIONID")]),e._v("）不同，无法维持会话，共享 "),_("code",[e._v("cookie")]),e._v(" 的方式是无法实现跨语言技术平台登录的，比如"),_("code",[e._v("java")]),e._v("、"),_("code",[e._v("php")]),e._v("、"),_("code",[e._v("python")]),e._v(" 系统之间；")]),e._v(" "),_("li",[e._v("第三，"),_("code",[e._v("cookie")]),e._v(" 本身不安全。")])]),e._v(" "),_("p",[e._v("因此，我们需要一种全新的登录方式来实现多系统应用群的登录，这就是 "),_("strong",[e._v("单点登录")])])])},[],!1,null,null,null);v.default=t.exports}}]);