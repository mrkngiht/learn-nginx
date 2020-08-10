(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{263:function(e,a,r){"use strict";r.r(a);var t=r(28),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"常见错误"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[e._v("#")]),e._v(" 常见错误")]),e._v(" "),r("h3",{attrs:{id:"配置不生效"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置不生效"}},[e._v("#")]),e._v(" 配置不生效")]),e._v(" "),r("p",[e._v("更新配置后使用 "),r("code",[e._v("[sudo] /your/path/nginx -s reload")]),e._v(" 热重载服务。")]),e._v(" "),r("h3",{attrs:{id:"nginx-emerg-getpwnam-nginx-failed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-getpwnam-nginx-failed"}},[e._v("#")]),e._v(' nginx: [emerg] getpwnam("nginx") failed')]),e._v(" "),r("p",[e._v("表示该用户 "),r("code",[e._v("nginx")]),e._v(" 不存在， 解决方法:")]),e._v(" "),r("ol",[r("li",[e._v("在 "),r("code",[e._v("nginx.conf")]),e._v(" 里添加 "),r("code",[e._v("user nobody;")])]),e._v(" "),r("li",[e._v("创建用户和用户对应的分组")])]),e._v(" "),r("h3",{attrs:{id:"nginx-emerg-getgrnam-xiaowu-failed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-getgrnam-xiaowu-failed"}},[e._v("#")]),e._v(' nginx: [emerg] getgrnam("xiaowu") failed')]),e._v(" "),r("p",[e._v("表示用户分组不存在，解决方法:")]),e._v(" "),r("ol",[r("li",[e._v("在 "),r("code",[e._v("nginx.conf")]),e._v(" 里添加 "),r("code",[e._v("user nobody;")])]),e._v(" "),r("li",[e._v("创建用户对应的分组")])]),e._v(" "),r("h3",{attrs:{id:"nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-alert-could-not-open-error-log-file-open-logs-error-log-failed-13-permission-denied"}},[e._v("#")]),e._v(' nginx: [alert] could not open error log file: open() "/logs/error.log" failed (13: Permission denied)')]),e._v(" "),r("p",[e._v("启动 Nginx 的用户权限不够导致无法写入日志文件，常见于非 "),r("code",[e._v("root")]),e._v(" 用户启动报错。")]),e._v(" "),r("h3",{attrs:{id:"nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-bind-to-0-0-0-0-80-failed-48-address-already-in-use"}},[e._v("#")]),e._v(" nginx: [emerg] bind() to 0.0.0.0:80 failed (48: Address already in use)")]),e._v(" "),r("p",[e._v("80端口被占用启动失败，修改端口或者杀死占用者再启动即可。")]),e._v(" "),r("h3",{attrs:{id:"nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-error-open-nginx-pid-failed-2-no-such-file-or-directory"}},[e._v("#")]),e._v(' nginx: [error] open() "nginx.pid" failed (2: No such file or directory)')]),e._v(" "),r("p",[e._v("pid 进程 id 文件不存在，可能文件被删除或者已经停止，在停止 Nginx 时会使用该进程id，如果不存在将失败，可以手动 kill 掉。")]),e._v(" "),r("h3",{attrs:{id:"nginx-emerg-unknown-realpath-roots-xxx-variable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-unknown-realpath-roots-xxx-variable"}},[e._v("#")]),e._v(' nginx: [emerg] unknown "realpath_roots_xxx" variable')]),e._v(" "),r("p",[e._v("变量 "),r("code",[e._v("$realpath_roots_xxx")]),e._v(" 不存在")]),e._v(" "),r("h3",{attrs:{id:"nginx-emerg-add-header-directive-is-not-allowed-here-in-xx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-add-header-directive-is-not-allowed-here-in-xx"}},[e._v("#")]),e._v(' nginx: [emerg] "add_header" directive is not allowed here in xx')]),e._v(" "),r("p",[r("code",[e._v("add_header")]),e._v(" 指令不能直接在 "),r("code",[e._v("if")]),e._v(" 判断内，可以在 "),r("code",[e._v("http")]),e._v("、"),r("code",[e._v("server")]),e._v("、"),r("code",[e._v("server.location")]),e._v("、"),r("code",[e._v("server.location.if")]),e._v(" 下。")]),e._v(" "),r("h3",{attrs:{id:"nginx-emerg-proxy-pass-cannot-have-uri-part-in-location-given-by-regular-expression-or-inside-named-location-or-inside-if-statement-or-inside-limit-except-block-in-xx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nginx-emerg-proxy-pass-cannot-have-uri-part-in-location-given-by-regular-expression-or-inside-named-location-or-inside-if-statement-or-inside-limit-except-block-in-xx"}},[e._v("#")]),e._v(' nginx: [emerg] "proxy_pass" cannot have URI part in location given by regular expression, or inside named location, or inside "if" statement, or inside "limit_except" block in xx')]),e._v(" "),r("p",[e._v("这是 "),r("code",[e._v("proxy_pass")]),e._v(" 指令在正则匹配时不能使用包含路径的链接，如以下都会报错：")]),e._v(" "),r("div",{staticClass:"language-nginx extra-class"},[r("pre",{pre:!0,attrs:{class:"language-nginx"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("api"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_pass")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("host"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("location")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uri")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("~")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("api"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_pass")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("host"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("解决办法就是把 "),r("code",[e._v("/")]),e._v(" 去掉，更多关于 "),r("code",[e._v("proxy_pass")]),e._v(" 请看："),r("RouterLink",{attrs:{to:"/example/proxy_pass.html"}},[r("code",[e._v("proxy_pass")]),e._v(" 技巧")]),e._v(" 。")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);