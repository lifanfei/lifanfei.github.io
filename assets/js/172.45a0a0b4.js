(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{735:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-私有仓库高级配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库高级配置","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 私有仓库高级配置")]),s._v(" "),t("p",[s._v("上一节我们搭建了一个具有基础功能的私有仓库，本小节我们来使用 "),t("code",[s._v("Docker Compose")]),s._v(" 搭建一个拥有权限认证、TLS 的私有仓库。")]),s._v(" "),t("p",[s._v("新建一个文件夹，以下步骤均在该文件夹中进行。")]),s._v(" "),t("h2",{attrs:{id:"准备站点证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备站点证书","aria-hidden":"true"}},[s._v("#")]),s._v(" 准备站点证书")]),s._v(" "),t("p",[s._v("如果你拥有一个域名，国内各大云服务商均提供免费的站点证书。你也可以使用 "),t("code",[s._v("openssl")]),s._v(" 自行签发证书。")]),s._v(" "),t("p",[s._v("这里假设我们将要搭建的私有仓库地址为 "),t("code",[s._v("docker.domain.com")]),s._v("，下面我们介绍使用 "),t("code",[s._v("openssl")]),s._v(" 自行签发 "),t("code",[s._v("docker.domain.com")]),s._v(" 的站点 SSL 证书。")]),s._v(" "),t("p",[s._v("第一步创建 "),t("code",[s._v("CA")]),s._v(" 私钥。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ openssl genrsa -out "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.key"')]),s._v(" 4096\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("第二步利用私钥创建 "),t("code",[s._v("CA")]),s._v(" 根证书请求文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ openssl req \\\n          -new -key "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.key"')]),s._v(" \\\n          -out "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.csr"')]),s._v(" -sha256 \\\n          -subj "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=Your Company Name Docker Registry CA'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("blockquote",[t("p",[s._v("以上命令中 "),t("code",[s._v("-subj")]),s._v(" 参数里的 "),t("code",[s._v("/C")]),s._v(" 表示国家，如 "),t("code",[s._v("CN")]),s._v("；"),t("code",[s._v("/ST")]),s._v(" 表示省；"),t("code",[s._v("/L")]),s._v(" 表示城市或者地区；"),t("code",[s._v("/O")]),s._v(" 表示组织名；"),t("code",[s._v("/CN")]),s._v(" 通用名称。")])]),s._v(" "),t("p",[s._v("第三步配置 "),t("code",[s._v("CA")]),s._v(" 根证书，新建 "),t("code",[s._v("root-ca.cnf")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root_ca"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbasicConstraints "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" critical,CA:TRUE,pathlen:1\nkeyUsage "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" critical, nonRepudiation, cRLSign, keyCertSign\nsubjectKeyIdentifier"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("第四步签发根证书。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ openssl x509 -req  -days 3650  -in "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.csr"')]),s._v(" \\\n               -signkey "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.key"')]),s._v(" -sha256 -out "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.crt"')]),s._v(" \\\n               -extfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.cnf"')]),s._v(" -extensions \\\n               root_ca\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("第五步生成站点 "),t("code",[s._v("SSL")]),s._v(" 私钥。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ openssl genrsa -out "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.domain.com.key"')]),s._v(" 4096\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("第六步使用私钥生成证书请求文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ openssl req -new -key "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.domain.com.key"')]),s._v(" -out "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"site.csr"')]),s._v(" -sha256 \\\n          -subj "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=docker.domain.com'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("第七步配置证书，新建 "),t("code",[s._v("site.cnf")]),s._v(" 文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nauthorityKeyIdentifier"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("keyid,issuer\nbasicConstraints "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" critical,CA:FALSE\nextendedKeyUsage"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("serverAuth\nkeyUsage "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" critical, digitalSignature, keyEncipherment\nsubjectAltName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DNS:docker.domain.com, IP:127.0.0.1\nsubjectKeyIdentifier"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("第八步签署站点 "),t("code",[s._v("SSL")]),s._v(" 证书。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ openssl x509 -req -days 750 -in "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"site.csr"')]),s._v(" -sha256 \\\n    -CA "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.crt"')]),s._v(" -CAkey "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.key"')]),s._v("  -CAcreateserial \\\n    -out "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.domain.com.crt"')]),s._v(" -extfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"site.cnf"')]),s._v(" -extensions server\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这样已经拥有了 "),t("code",[s._v("docker.domain.com")]),s._v(" 的网站 SSL 私钥 "),t("code",[s._v("docker.domain.com.key")]),s._v(" 和 SSL 证书 "),t("code",[s._v("docker.domain.com.crt")]),s._v("。")]),s._v(" "),t("p",[s._v("新建 "),t("code",[s._v("ssl")]),s._v(" 文件夹并将 "),t("code",[s._v("docker.domain.com.key")]),s._v(" "),t("code",[s._v("docker.domain.com.crt")]),s._v(" 这两个文件移入，删除其他文件。")]),s._v(" "),t("h2",{attrs:{id:"配置私有仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置私有仓库","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置私有仓库")]),s._v(" "),t("p",[s._v("私有仓库默认的配置文件位于 "),t("code",[s._v("/etc/docker/registry/config.yml")]),s._v("，我们先在本地编辑 "),t("code",[s._v("config.yml")]),s._v("，之后挂载到容器中。")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accesslog")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("disabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("level")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" debug\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("formatter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" text\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fields")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" staging\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("delete")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("blobdescriptor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inmemory\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filesystem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rootdirectory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/lib/registry\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("auth")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("htpasswd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("realm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" basic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("realm\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/docker/registry/auth/nginx.htpasswd\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//docker.domain.com\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("headers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("X-Content-Type-Options")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nosniff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("disabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tls")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certificate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/docker/registry/ssl/docker.domain.com.crt\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/docker/registry/ssl/docker.domain.com.key\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("health")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storagedriver")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("interval")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10s\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("threshold")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("h2",{attrs:{id:"生成-http-认证文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成-http-认证文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 生成 http 认证文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" auth\n\n$ docker run --rm \\\n    --entrypoint htpasswd \\\n    registry \\\n    -Bbn username password "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" auth/nginx.htpasswd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("blockquote",[t("p",[s._v("将上面的 "),t("code",[s._v("username")]),s._v(" "),t("code",[s._v("password")]),s._v(" 替换为你自己的用户名和密码。")])]),s._v(" "),t("h2",{attrs:{id:"编辑-docker-compose-yml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑-docker-compose-yml","aria-hidden":"true"}},[s._v("#")]),s._v(" 编辑 "),t("code",[s._v("docker-compose.yml")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"443:443"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/docker/registry\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/registry\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry-data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"修改-hosts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-hosts","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改 hosts")]),s._v(" "),t("p",[s._v("编辑 "),t("code",[s._v("/etc/hosts")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker.domain.com 127.0.0.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker-compose up -d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这样我们就搭建好了一个具有权限认证、TLS 的私有仓库，接下来我们测试其功能是否正常。")]),s._v(" "),t("h2",{attrs:{id:"测试私有仓库功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试私有仓库功能","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试私有仓库功能")]),s._v(" "),t("p",[s._v("登录到私有仓库。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker login docker.domain.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("尝试推送、拉取镜像。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker pull ubuntu:17.10\n\n$ docker tag ubuntu:17.10 docker.domain.com/username/ubuntu:17.10\n\n$ docker push docker.domain.com/username/ubuntu:17.10\n\n$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" docker.domain.com/username/ubuntu:17.10\n\n$ docker pull docker.domain.com/username/ubuntu:17.10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("如果我们退出登录，尝试推送镜像。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("logout")]),s._v(" docker.domain.com\n\n$ docker push docker.domain.com/username/ubuntu:17.10\n\nno basic auth credentials\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("发现会提示没有登录，不能将镜像推送到私有仓库中。")]),s._v(" "),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),t("p",[s._v("如果你本机占用了 "),t("code",[s._v("443")]),s._v(" 端口，你可以配置 "),t("a",{attrs:{href:"https://docs.docker.com/registry/recipes/nginx/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 代理"),t("OutboundLink")],1),s._v("，这里不再赘述。")])])},[],!1,null,null,null);a.default=n.exports}}]);