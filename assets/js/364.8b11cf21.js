(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{748:function(t,e,r){"use strict";r.r(e);var a=r(2),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"讲讲线程池的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#讲讲线程池的实现原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 讲讲线程池的实现原理")]),t._v(" "),r("p",[t._v("当提交一个新任务到线程池时，线程池的处理流程如下：")]),t._v(" "),r("ol",[r("li",[t._v("线程池判断核心线程池里的线程是否都在执行任务。如果不是，则创建一个新的工作线程来执行任务。如果核心线程池里的线程都在执行任务，则进入下个流程。")]),t._v(" "),r("li",[t._v("线程池判断工作队列是否已经满。如果工作队列没有满，则将新提交的任务存储在这个工作队列里。如果工作队列满了，则进入下个流程。")]),t._v(" "),r("li",[t._v("线程池判断线程池的线程是否都处于工作状态。如果没有，则创建一个新的工作线程来执行任务。如果已经满了，则交给饱和策略来处理这个任务。")])])])},[],!1,null,null,null);e.default=n.exports}}]);