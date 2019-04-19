(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{611:function(s,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用熔断器防止服务雪崩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用熔断器防止服务雪崩","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用熔断器防止服务雪崩")]),s._v(" "),a("h2",{attrs:{id:"本节视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.bilibili.com/video/av27864664",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】微服务框架-SpringCloud-使用熔断器防止服务雪崩"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 "),a("code",[s._v("RPC")]),s._v(" 相互调用，在 Spring Cloud 中可以用 "),a("code",[s._v("RestTemplate + Ribbon")]),s._v(" 和 "),a("code",[s._v("Feign")]),s._v(" 来调用。为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的请求涌入，"),a("code",[s._v("Servlet")]),s._v(" 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 "),a("strong",[s._v("“雪崩”")]),s._v(" 效应。")]),s._v(" "),a("p",[s._v("为了解决这个问题，业界提出了熔断器模型。")]),s._v(" "),a("p",[s._v("Netflix 开源了 Hystrix 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。在微服务架构中，一个请求需要调用多个服务是非常常见的，如下图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201805292246007.png",alt:""}})]),s._v(" "),a("p",[s._v("较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值（Hystrix 是 "),a("strong",[s._v("5 秒 20 次")]),s._v("） 熔断器将会被打开。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/assets/Lusifer201805292246008.png",alt:""}})]),s._v(" "),a("p",[s._v("熔断器打开后，为了避免连锁故障，通过 "),a("code",[s._v("fallback")]),s._v(" 方法可以直接返回一个固定值。")]),s._v(" "),a("h2",{attrs:{id:"ribbon-中使用熔断器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ribbon-中使用熔断器","aria-hidden":"true"}},[s._v("#")]),s._v(" Ribbon 中使用熔断器")]),s._v(" "),a("h3",{attrs:{id:"在-pom-xml-中增加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-pom-xml-中增加依赖","aria-hidden":"true"}},[s._v("#")]),s._v(" 在 "),a("code",[s._v("pom.xml")]),s._v(" 中增加依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>\n</dependency>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"在-application-中增加-enablehystrix-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-application-中增加-enablehystrix-注解","aria-hidden":"true"}},[s._v("#")]),s._v(" 在 Application 中增加 "),a("code",[s._v("@EnableHystrix")]),s._v(" 注解")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("package com.funtl.hello.spring.cloud.web.admin.ribbon;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.client.discovery.EnableDiscoveryClient;\nimport org.springframework.cloud.netflix.hystrix.EnableHystrix;\n\n@SpringBootApplication\n@EnableDiscoveryClient\n@EnableHystrix\npublic class WebAdminRibbonApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(WebAdminRibbonApplication.class, args);\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"在-service-中增加-hystrixcommand-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-service-中增加-hystrixcommand-注解","aria-hidden":"true"}},[s._v("#")]),s._v(" 在 Service 中增加 "),a("code",[s._v("@HystrixCommand")]),s._v(" 注解")]),s._v(" "),a("p",[s._v("在 Ribbon 调用方法上增加 "),a("code",[s._v("@HystrixCommand")]),s._v(" 注解并指定 "),a("code",[s._v("fallbackMethod")]),s._v(" 熔断方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.funtl.hello.spring.cloud.web.admin.ribbon.service;\n\nimport com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\nimport org.springframework.web.client.RestTemplate;\n\n@Service\npublic class AdminService {\n\n    @Autowired\n    private RestTemplate restTemplate;\n\n    @HystrixCommand(fallbackMethod = "hiError")\n    public String sayHi(String message) {\n        return restTemplate.getForObject("http://HELLO-SPRING-CLOUD-SERVICE-ADMIN/hi?message=" + message, String.class);\n    }\n\n    public String hiError(String message) {\n        return "Hi，your message is :\\"" + message + "\\" but request error.";\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h3",{attrs:{id:"测试熔断器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试熔断器","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试熔断器")]),s._v(" "),a("p",[s._v("此时我们关闭服务提供者，再次请求 http://localhost:8764/hi?message=HelloRibbon 浏览器会显示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Hi，your message is :"HelloRibbon" but request error.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"feign-中使用熔断器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feign-中使用熔断器","aria-hidden":"true"}},[s._v("#")]),s._v(" Feign 中使用熔断器")]),s._v(" "),a("p",[s._v("Feign 是自带熔断器的，但默认是关闭的。需要在配置文件中配置打开它，在配置文件增加以下代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("feign:\n  hystrix:\n    enabled: true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"在-service-中增加-fallback-指定类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-service-中增加-fallback-指定类","aria-hidden":"true"}},[s._v("#")]),s._v(" 在 Service 中增加 "),a("code",[s._v("fallback")]),s._v(" 指定类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.funtl.hello.spring.cloud.web.admin.feign.service;\n\nimport com.funtl.hello.spring.cloud.web.admin.feign.service.hystrix.AdminServiceHystrix;\nimport org.springframework.cloud.openfeign.FeignClient;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RequestMethod;\nimport org.springframework.web.bind.annotation.RequestParam;\n\n@FeignClient(value = "hello-spring-cloud-service-admin", fallback = AdminServiceHystrix.class)\npublic interface AdminService {\n\n    @RequestMapping(value = "hi", method = RequestMethod.GET)\n    public String sayHi(@RequestParam(value = "message") String message);\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"创建熔断器类并实现对应的-feign-接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建熔断器类并实现对应的-feign-接口","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建熔断器类并实现对应的 Feign 接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('package com.funtl.hello.spring.cloud.web.admin.feign.service.hystrix;\n\nimport com.funtl.hello.spring.cloud.web.admin.feign.service.AdminService;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class AdminServiceHystrix implements AdminService {\n\n    @Override\n    public String sayHi(String message) {\n        return "Hi，your message is :\\"" + message + "\\" but request error.";\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"测试熔断器-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试熔断器-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试熔断器")]),s._v(" "),a("p",[s._v("此时我们关闭服务提供者，再次请求 http://localhost:8765/hi?message=HelloFeign 浏览器会显示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Hi，your message is :"HelloFeign" but request error.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])},[],!1,null,null,null);e.default=r.exports}}]);