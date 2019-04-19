(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{208:function(s,a,r){"use strict";r.r(a);var e=r(0),n=Object(e.a)({},function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"基于-docker-安装-solr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-solr","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于 Docker 安装 Solr")]),s._v(" "),r("h2",{attrs:{id:"本节视频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本节视频","aria-hidden":"true"}},[s._v("#")]),s._v(" 本节视频")]),s._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av35454085/",target:"_blank",rel:"noopener noreferrer"}},[s._v("【视频】Dubbo 实现微服务架构-使用 Solr 实现全文检索-基于 Docker 安装 Solr"),r("OutboundLink")],1)])]),s._v(" "),r("h2",{attrs:{id:"基本部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本部署","aria-hidden":"true"}},[s._v("#")]),s._v(" 基本部署")]),s._v(" "),r("h3",{attrs:{id:"docker-compose-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml","aria-hidden":"true"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("version: '3.1'\nservices:\n  solr:\n    image: solr\n    restart: always\n    container_name: solr\n    ports:\n      - 8983:8983\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br")])]),r("h3",{attrs:{id:"部署成功效果图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署成功效果图","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署成功效果图")]),s._v(" "),r("p",[s._v("访问地址：http://192.168.10.131:8983/")]),s._v(" "),r("p",[r("img",{attrs:{src:"/assets/Lusifer1512700142.png",alt:""}})]),s._v(" "),r("h2",{attrs:{id:"什么是分词技术？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是分词技术？","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是分词技术？")]),s._v(" "),r("p",[s._v("分词技术就是搜索引擎针对用户提交查询的关键词串进行的查询处理后根据用户的关键词串用各种匹配方法进行分词的一种技术。")]),s._v(" "),r("h3",{attrs:{id:"中文分词算法分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中文分词算法分类","aria-hidden":"true"}},[s._v("#")]),s._v(" 中文分词算法分类")]),s._v(" "),r("ul",[r("li",[s._v("基于字符串匹配")])]),s._v(" "),r("p",[s._v("基于字符串匹配，即扫描字符串，如果发现字符串的子串和词相同，就算匹配，这类分词通常会加入一些启发式规则，比如“正向/反向最大匹配”,“长词优先”等策略，这类算法优点是速度块，都是O(n)时间复杂度，实现简单，效果尚可。缺点，就是对歧义和未登录词处理不好")]),s._v(" "),r("p",[s._v('歧义的列子：歧义的例子很简单"长春市/长春/药店" "长春/市长/春药/店" 未登录：即词典中没有出现的词，当然也就处理不好')]),s._v(" "),r("p",[s._v("ikanalyzer, paoding 等就是基于字符串匹配的分词")]),s._v(" "),r("ul",[r("li",[s._v("基于统计以及机器学习的分词方式")])]),s._v(" "),r("p",[s._v("这类分词基于人工标注的词性和统计特征，对中文进行建模，即根据观测到的数据（标注好的语料）对模型参数进行估计，即训练。在分词阶段再通过模型计算各种分词出现的概率，将概率最大的分词结果作为最终结果。常见的序列标注模型有 HMM 和 CRF。")]),s._v(" "),r("p",[s._v("这类分词算法能很好处理歧义和未登录词问题，效果比前一类效果好，但是需要大量的人工标注数据，以及较慢的分词速度。")]),s._v(" "),r("h3",{attrs:{id:"什么是-ikanalyzer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ikanalyzer","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是 IKAnalyzer")]),s._v(" "),r("p",[s._v("IKAnalyzer 是一个开源的，基于 Java 语言开发的轻量级的中文分词工具包，基于文本匹配，不需要投入大量人力进行训练和标注可以自定词典，方便加入特定领域的词语，能分出多粒度的结果")]),s._v(" "),r("h2",{attrs:{id:"部署-solr-并安装-ikanalyzer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-solr-并安装-ikanalyzer","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署 Solr 并安装 IKAnalyzer")]),s._v(" "),r("p",[s._v("创建一个名为 "),r("code",[s._v("/usr/local/docker/solr/ikanalyzer")]),s._v(" 目录")]),s._v(" "),r("ul",[r("li",[r("code",[s._v("/usr/local/docker/solr")]),s._v("：用于存放 docker-compose.yml 配置文件")]),s._v(" "),r("li",[r("code",[s._v("/usr/local/docker/solr/ikanalyzer")]),s._v("：用于存放 Dockerfile 镜像配置文件")])]),s._v(" "),r("h3",{attrs:{id:"docker-compose-yml-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-2","aria-hidden":"true"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("version: '3.1'\nservices:\n  solr:\n    build: ikanalyzer\n    restart: always\n    container_name: solr\n    ports:\n      - 8983:8983\n    volumes:\n      - ./solrdata:/opt/solrdata\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br")])]),r("h3",{attrs:{id:"dockerfile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("FROM solr\nMAINTAINER Lusifer <topsale@vip.qq.com>\n\n# 创建 Core\nWORKDIR /opt/solr/server/solr\nRUN mkdir ik_core\nWORKDIR /opt/solr/server/solr/ik_core\nRUN echo 'name=ik_core' > core.properties\nRUN mkdir data\nRUN cp -r ../configsets/sample_techproducts_configs/conf/ .\n\n# 安装中文分词\nWORKDIR /opt/solr/server/solr-webapp/webapp/WEB-INF/lib\nADD ik-analyzer-solr5-5.x.jar .\nADD solr-analyzer-ik-5.1.0.jar .\nWORKDIR /opt/solr/server/solr-webapp/webapp/WEB-INF\nADD ext.dic .\nADD stopword.dic .\nADD IKAnalyzer.cfg.xml .\n\n# 增加分词配置\nCOPY managed-schema /opt/solr/server/solr/ik_core/conf\n\nWORKDIR /opt/solr\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br"),r("span",{staticClass:"line-number"},[s._v("14")]),r("br"),r("span",{staticClass:"line-number"},[s._v("15")]),r("br"),r("span",{staticClass:"line-number"},[s._v("16")]),r("br"),r("span",{staticClass:"line-number"},[s._v("17")]),r("br"),r("span",{staticClass:"line-number"},[s._v("18")]),r("br"),r("span",{staticClass:"line-number"},[s._v("19")]),r("br"),r("span",{staticClass:"line-number"},[s._v("20")]),r("br"),r("span",{staticClass:"line-number"},[s._v("21")]),r("br"),r("span",{staticClass:"line-number"},[s._v("22")]),r("br"),r("span",{staticClass:"line-number"},[s._v("23")]),r("br"),r("span",{staticClass:"line-number"},[s._v("24")]),r("br")])]),r("h3",{attrs:{id:"部署成功效果图-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署成功效果图-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署成功效果图")]),s._v(" "),r("p",[s._v("访问地址：http://192.168.10.131:8983/")]),s._v(" "),r("p",[r("img",{attrs:{src:"/assets/Lusifer1520779234.png",alt:""}})])])},[],!1,null,null,null);a.default=n.exports}}]);