(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{269:function(n,t,e){"use strict";e.r(t);var i=e(28),o=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-目录建议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-目录建议"}},[n._v("#")]),n._v(" Nginx 目录建议")]),n._v(" "),e("p",[e("RouterLink",{attrs:{to:"/guide/linux-make.html"}},[n._v("安装 Nginx")]),n._v(" 时可以选择配置文件的路径，由于 Nginx 程序后续可能会升级版本，但配置基本上就是一份，那么推荐使用配置和程序分离的方式，遵循：")],1),n._v(" "),e("ol",[e("li",[n._v("配置文件独立管理, 不存放在nginx程序目录内")]),n._v(" "),e("li",[n._v("每个站点独立一个配置文件")]),n._v(" "),e("li",[n._v("每个站点独立的日志文件")]),n._v(" "),e("li",[n._v("提取公用的配置文件")])]),n._v(" "),e("p",[n._v("如:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("$dir/wwwroot/                           - 网站根目录，以域名为文件夹名称\n    ./xuexb.com/\n    ./static.xuexb.com/\n\n$dir/src/                               - 安装源包\n\n$dir/local/nginx/                       - nginx相关根目录\n    ./conf/                             - 配置文件\n        ./nginx.conf                    - 配置主入口\n        ./inc                           - 通用配置\n        ./vhost/                        - 各站点的配置，以 `域名.conf` 命名\n            ./xuexb.com.conf\n            ./static.xuexb.com.conf\n\n    ./1.11.1/                           - 各个版本的nginx\n    ./1.11.2/\n\n$dir/logs/                              - 日志相关目录，内以 `域名.type.log` 命名\n        ./last/                         - 最新的日志\n            ./xuexb.com.error.log\n            ./xuexb.com.access.log\n        ./back/                         - 天级备份日志\n            ./20170908/\n")])])]),e("p",[n._v("这样分离之后不管是 Nginx 主程序版本升级，还是修改某个站点配置，还是快速查找某个站点日志都是得心应手~")])])}),[],!1,null,null,null);t.default=o.exports}}]);