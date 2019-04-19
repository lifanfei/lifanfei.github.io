(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{233:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"什么是分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是分布式锁")]),e._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[e._v("#")]),e._v(" 本节视频")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av34115846/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】Dubbo 实现微服务架构-Zookeeper-什么是分布式锁1"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av34115984/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】Dubbo 实现微服务架构-Zookeeper-什么是分布式锁2"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av34116094/",target:"_blank",rel:"noopener noreferrer"}},[e._v("【视频】Dubbo 实现微服务架构-Zookeeper-什么是分布式锁3"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("为了防止分布式系统中的多个进程之间相互干扰，我们需要一种分布式协调技术来对这些进程进行调度。而这个分布式协调技术的核心就是来实现这个"),a("strong",[e._v("分布式锁")]),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"为什么要使用分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用分布式锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 为什么要使用分布式锁")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170001.png",alt:""}})]),e._v(" "),a("ul",[a("li",[e._v("成员变量 A 存在 JVM1、JVM2、JVM3 三个 JVM 内存中")]),e._v(" "),a("li",[e._v("成员变量 A 同时都会在 JVM 分配一块内存，三个请求发过来同时对这个变量操作，显然结果是不对的")]),e._v(" "),a("li",[e._v("不是同时发过来，三个请求分别操作三个不同 JVM 内存区域的数据，变量 A 之间不存在共享，也不具有可见性，处理的结果也是不对的\n注：该成员变量 A 是一个有状态的对象")])]),e._v(" "),a("p",[e._v("如果我们业务中确实存在这个场景的话，我们就需要一种方法解决这个问题，"),a("strong",[e._v("这就是分布式锁要解决的问题")])]),e._v(" "),a("h2",{attrs:{id:"分布式锁应该具备哪些条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁应该具备哪些条件","aria-hidden":"true"}},[e._v("#")]),e._v(" 分布式锁应该具备哪些条件")]),e._v(" "),a("ul",[a("li",[e._v("在分布式系统环境下，一个方法在同一时间只能被一个机器的一个线程执行")]),e._v(" "),a("li",[e._v("高可用的获取锁与释放锁")]),e._v(" "),a("li",[e._v("高性能的获取锁与释放锁")]),e._v(" "),a("li",[e._v("具备可重入特性（可理解为重新进入，由多于一个任务并发使用，而不必担心数据错误）")]),e._v(" "),a("li",[e._v("具备锁失效机制，防止死锁")]),e._v(" "),a("li",[e._v("具备非阻塞锁特性，即没有获取到锁将直接返回获取锁失败")])]),e._v(" "),a("h2",{attrs:{id:"分布式锁的实现有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁的实现有哪些","aria-hidden":"true"}},[e._v("#")]),e._v(" 分布式锁的实现有哪些")]),e._v(" "),a("ul",[a("li",[e._v("Memcached：利用 Memcached 的 "),a("code",[e._v("add")]),e._v(" 命令。此命令是原子性操作，只有在 "),a("code",[e._v("key")]),e._v(" 不存在的情况下，才能 "),a("code",[e._v("add")]),e._v(" 成功，也就意味着线程得到了锁。")]),e._v(" "),a("li",[e._v("Redis：和 Memcached 的方式类似，利用 Redis 的 "),a("code",[e._v("setnx")]),e._v(" 命令。此命令同样是原子性操作，只有在 "),a("code",[e._v("key")]),e._v(" 不存在的情况下，才能 "),a("code",[e._v("set")]),e._v(" 成功。")]),e._v(" "),a("li",[a("strong",[e._v("Zookeeper")]),e._v("：利用 Zookeeper 的顺序临时节点，来实现分布式锁和等待队列。Zookeeper 设计的初衷，就是为了实现分布式锁服务的。")]),e._v(" "),a("li",[e._v("Chubby：Google 公司实现的粗粒度分布式锁服务，底层利用了 Paxos 一致性算法。")])]),e._v(" "),a("h2",{attrs:{id:"通过-redis-分布式锁的实现理解基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-redis-分布式锁的实现理解基本概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 通过 Redis 分布式锁的实现理解基本概念")]),e._v(" "),a("p",[e._v("分布式锁实现的三个核心要素：")]),e._v(" "),a("h3",{attrs:{id:"加锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 加锁")]),e._v(" "),a("p",[e._v("最简单的方法是使用 "),a("code",[e._v("setnx")]),e._v(" 命令。"),a("code",[e._v("key")]),e._v(" 是锁的唯一标识，按业务来决定命名。比如想要给一种商品的秒杀活动加锁，可以给 "),a("code",[e._v("key")]),e._v(" 命名为 “lock_sale_商品ID” 。而 "),a("code",[e._v("value")]),e._v(" 设置成什么呢？我们可以姑且设置成 "),a("code",[e._v("1")]),e._v("。加锁的伪代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("setnx（lock_sale_商品ID，1）\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("当一个线程执行 "),a("code",[e._v("setnx")]),e._v(" 返回 "),a("code",[e._v("1")]),e._v("，说明 "),a("code",[e._v("key")]),e._v(" 原本不存在，该线程成功得到了锁；当一个线程执行 "),a("code",[e._v("setnx")]),e._v(" 返回 "),a("code",[e._v("0")]),e._v("，说明 "),a("code",[e._v("key")]),e._v(" 已经存在，该线程抢锁失败。")]),e._v(" "),a("h3",{attrs:{id:"解锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解锁","aria-hidden":"true"}},[e._v("#")]),e._v(" 解锁")]),e._v(" "),a("p",[e._v("有加锁就得有解锁。当得到锁的线程执行完任务，需要释放锁，以便其他线程可以进入。释放锁的最简单方式是执行 "),a("code",[e._v("del")]),e._v(" 指令，伪代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("del（lock_sale_商品ID）\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("释放锁之后，其他线程就可以继续执行 "),a("code",[e._v("setnx")]),e._v(" 命令来获得锁。")]),e._v(" "),a("h3",{attrs:{id:"锁超时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锁超时","aria-hidden":"true"}},[e._v("#")]),e._v(" 锁超时")]),e._v(" "),a("p",[e._v("锁超时是什么意思呢？如果一个得到锁的线程在执行任务的过程中挂掉，来不及显式地释放锁，这块资源将会永远被锁住（"),a("strong",[e._v("死锁")]),e._v("），别的线程再也别想进来。所以，"),a("code",[e._v("setnx")]),e._v(" 的 "),a("code",[e._v("key")]),e._v(" 必须设置一个超时时间，以保证即使没有被显式释放，这把锁也要在一定时间后自动释放。"),a("code",[e._v("setnx")]),e._v(" 不支持超时参数，所以需要额外的指令，伪代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("expire（lock_sale_商品ID， 30）\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("综合伪代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if（setnx（lock_sale_商品ID，1） == 1）{\n    expire（lock_sale_商品ID，30）\n    try {\n        do something ......\n    } finally {\n        del（lock_sale_商品ID）\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("h3",{attrs:{id:"存在什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存在什么问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 存在什么问题")]),e._v(" "),a("p",[e._v("以上伪代码中存在三个致命问题")]),e._v(" "),a("h4",{attrs:{id:"setnx-和-expire-的非原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setnx-和-expire-的非原子性","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("setnx")]),e._v(" 和 "),a("code",[e._v("expire")]),e._v(" 的非原子性")]),e._v(" "),a("p",[e._v("设想一个极端场景，当某线程执行 "),a("code",[e._v("setnx")]),e._v("，成功得到了锁：")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170002.png",alt:""}})]),e._v(" "),a("p",[a("code",[e._v("setnx")]),e._v(" 刚执行成功，还未来得及执行 "),a("code",[e._v("expire")]),e._v(" 指令，节点 1 挂掉了。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170003.png",alt:""}})]),e._v(" "),a("p",[e._v("这样一来，这把锁就没有设置过期时间，变成"),a("strong",[e._v("死锁")]),e._v("，别的线程再也无法获得锁了。")]),e._v(" "),a("p",[e._v("怎么解决呢？"),a("code",[e._v("setnx")]),e._v(" 指令本身是不支持传入超时时间的，"),a("code",[e._v("set")]),e._v(" 指令增加了可选参数，伪代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("set（lock_sale_商品ID，1，30，NX）\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这样就可以取代 "),a("code",[e._v("setnx")]),e._v(" 指令。")]),e._v(" "),a("h4",{attrs:{id:"del-导致误删"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#del-导致误删","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("del")]),e._v(" 导致误删")]),e._v(" "),a("p",[e._v("又是一个极端场景，假如某线程成功得到了锁，并且设置的超时时间是 30 秒。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170004.png",alt:""}})]),e._v(" "),a("p",[e._v("如果某些原因导致线程 A 执行的很慢很慢，过了 30 秒都没执行完，这时候锁过期自动释放，线程 B 得到了锁。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170005.png",alt:""}})]),e._v(" "),a("p",[e._v("随后，线程 A 执行完了任务，线程 A 接着执行 "),a("code",[e._v("del")]),e._v(" 指令来释放锁。但这时候线程 B 还没执行完，线程A实际上 "),a("code",[e._v("删除的是线程 B 加的锁")]),e._v("。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170006.png",alt:""}})]),e._v(" "),a("p",[e._v("怎么避免这种情况呢？可以在 "),a("code",[e._v("del")]),e._v(" 释放锁之前做一个判断，验证当前的锁是不是自己加的锁。至于具体的实现，可以在加锁的时候把当前的线程 ID 当做 "),a("code",[e._v("value")]),e._v("，并在删除之前验证 "),a("code",[e._v("key")]),e._v(" 对应的 "),a("code",[e._v("value")]),e._v(" 是不是自己线程的 ID。")]),e._v(" "),a("p",[e._v("加锁：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("String threadId = Thread.currentThread().getId()\nset（key，threadId ，30，NX）\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("解锁：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if（threadId .equals(redisClient.get(key))）{\n    del(key)\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("但是，这样做又隐含了一个新的问题，判断和释放锁是两个独立操作，不是原子性。")]),e._v(" "),a("h4",{attrs:{id:"出现并发的可能性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现并发的可能性","aria-hidden":"true"}},[e._v("#")]),e._v(" 出现并发的可能性")]),e._v(" "),a("p",[e._v("还是刚才第二点所描述的场景，虽然我们避免了线程 A 误删掉 "),a("code",[e._v("key")]),e._v(" 的情况，但是同一时间有 A，B 两个线程在访问代码块，仍然是不完美的。怎么办呢？我们可以让获得锁的线程开启一个"),a("strong",[e._v("守护线程")]),e._v("，用来给快要过期的锁“续航”。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170004.png",alt:""}})]),e._v(" "),a("p",[e._v("当过去了 29 秒，线程 A 还没执行完，这时候守护线程会执行 "),a("code",[e._v("expire")]),e._v(" 指令，为这把锁“续命”20 秒。守护线程从第 29 秒开始执行，每 20 秒执行一次。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170007.png",alt:""}})]),e._v(" "),a("p",[e._v("当线程 A 执行完任务，会显式关掉守护线程。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170008.png",alt:""}})]),e._v(" "),a("p",[e._v("另一种情况，如果节点 1 忽然断电，由于线程 A 和守护线程在同一个进程，守护线程也会停下。这把锁到了超时的时候，没人给它续命，也就自动释放了。")]),e._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201810170009.png",alt:""}})])])},[],!1,null,null,null);s.default=r.exports}}]);