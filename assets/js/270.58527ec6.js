(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{872:function(t,e,o){"use strict";o.r(e);var n=o(2),r=Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"netty-线程模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netty-线程模型","aria-hidden":"true"}},[this._v("#")]),this._v(" Netty 线程模型")]),this._v(" "),e("p",[this._v("首先，Netty 使用 EventLoop 来处理连接上的读写事件，而一个连接上的所有请求都保证在一个 EventLoop 中被处理，一个 EventLoop 中只有一个 Thread，所以也就实现了一个连接上的所有事件只会在一个线程中被执行。一个 EventLoopGroup 包含多个 EventLoop，可以把一个 EventLoop 当做是 Reactor 线程模型中的一个线程，而一个 EventLoopGroup 类似于一个 ExecutorService")])])},[],!1,null,null,null);e.default=r.exports}}]);