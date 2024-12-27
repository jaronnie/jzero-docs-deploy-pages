import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as o,b as k,w as l,r as p,o as d,d as s,e as i}from"./app-mmZ5WeCD.js";const g={};function c(y,e){const n=p("CodeTabs");return d(),h("div",null,[e[4]||(e[4]=o('<div style="text-align:center;"><img src="https://oss.jaronnie.com/jzero.jpg" style="width:33%;" alt=""></div><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h2><p>基于 <a href="https://go-zero.dev" target="_blank" rel="noopener noreferrer">go-zero</a> 开发的低代码脚手架 jzero, 旨在通过更少的命令完成更多的事情, 但 jzero 不仅仅局限于 go-zero 框架, 理论上通过模板功能可以支持任意框架, 这取决于你如何使用它.</p><p>该项目可一键创建项目, 并支持不同的使用场景, 如 grpc 项目, gateway 项目, api 项目以及命令行项目等. 通过项目的可描述文件(如 proto, api, sql 等)一键生成服务端代码, 客户端代码和数据库代码.</p><p>jzero 具备以下特点:</p><ul><li>极简命令, 通过配置文件 .jzero.yaml 控制不同命令的参数</li><li>基于 git 仅对改动文件部分生成代码, 极大提升大型项目代码生成效率</li><li>具备不同场景下的开发模板, 具备快速复制项目的能力</li><li>优化 go-zero 已有的痛点并扩展新特性, 并完全兼容</li><li>模板特性支持新增任意文件, 基于模板特性理论上可以支持任意框架</li><li>所有配套工具链跨平台使用, 支持 windows/mac/linux</li></ul><p>在以下场景优化点:</p><ul><li>api 场景 <ul><li>编写多个 api 文件, 无需显示的编写一个 main.api 文件, 框架自动处理好</li><li>默认集成 <a href="https://github.com/go-playground/validator" target="_blank" rel="noopener noreferrer">https://github.com/go-playground/validator</a> 校验框架</li><li>支持重新生成 handler 文件, 并支持不同场景(有输入输出, 有输入没输出, 没输入有输出, 没输入没输出), 无需再手动维护 handler 代码, 提升开发过程中的体验</li><li>支持自动修改 logic 文件函数的入参和出参, 当 api 文件修改后, 自动适配修改, 提升开发过程中的体验</li><li>支持 types 文件分组分文件夹, 即每个 api 文件的入参和出参可以一致, 保持每个模块命名简洁化, 提升开发体验</li></ul></li><li>rpc 场景 <ul><li>支持多个 proto, 自动注册, 无需手动编写</li><li>默认支持 proto message 的字段校验, 且支持自定义错误信息</li><li>默认支持通过 proto option 新增拦截器, 可以设定某个 method, 也可以设定整个 service</li></ul></li><li>gateway 场景 <ul><li>默认可新增 rpc + gateway 的项目</li><li>新增接口版本控制特性, 默认为 v1, 可一键初始化 v2, v3等版本的接口, 无需任何配置</li><li>默认支持通过 proto 新增拦截器和 http 中间件, 可以设定某个 method, 也可以设定整个 service</li></ul></li><li>数据库场景 <ul><li>将原生 sql 替换成 sqlbuilder, 从而可以更好的支持不同的数据库类型</li><li>扩展新的抽象方法提升开发效率, 不再是简单的增删改查, 逐步扩展, 拥有类似 orm 的能力</li></ul></li><li>客户端场景: <ul><li>通过 api/proto 文件自动生成 swagger json, 并内置 swagger ui</li><li>通过 api/proto 文件自动生成 http client</li><li>通过 proto 文件自动生成 zrpc client</li></ul></li></ul><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Windows 用户请在 powershell 下执行所有指令</p></div>',10)),k(n,{id:"170",data:[{id:"Docker"},{id:"jzero"}],"tab-id":"shell"},{title0:l(({value:t,isActive:a})=>e[0]||(e[0]=[s("Docker")])),title1:l(({value:t,isActive:a})=>e[1]||(e[1]=[s("jzero")])),tab0:l(({value:t,isActive:a})=>e[2]||(e[2]=[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 一键创建项目")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --rm"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -v"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"PWD"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":/app"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ghcr.io/jzero-io/jzero:latest"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," new"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 一键生成代码")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --rm"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -v"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"PWD"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":/app"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ghcr.io/jzero-io/jzero:latest"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 下载依赖")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," mod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," tidy")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 启动项目")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," main.go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," server")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:l(({value:t,isActive:a})=>e[3]||(e[3]=[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 安装 jzero")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," install"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," github.com/jzero-io/jzero@latest")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 一键安装所需的工具")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," check")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 一键创建项目")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," new"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 一键生成代码")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 下载依赖")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," mod"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," tidy")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-light-font-style":"inherit","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"# 启动服务端程序")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," main.go"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," server")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])}const F=r(g,[["render",c],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/","title":"首页","lang":"zh-CN","frontmatter":{"home":false,"icon":"fluent:home-heart-20-filled","title":"首页","description":"特性 基于 go-zero 开发的低代码脚手架 jzero, 旨在通过更少的命令完成更多的事情, 但 jzero 不仅仅局限于 go-zero 框架, 理论上通过模板功能可以支持任意框架, 这取决于你如何使用它. 该项目可一键创建项目, 并支持不同的使用场景, 如 grpc 项目, gateway 项目, api 项目以及命令行项目等. 通过项目的可描...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://docs.jzero.io/en/"}],["meta",{"property":"og:url","content":"https://docs.jzero.io/"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"首页"}],["meta",{"property":"og:description","content":"特性 基于 go-zero 开发的低代码脚手架 jzero, 旨在通过更少的命令完成更多的事情, 但 jzero 不仅仅局限于 go-zero 框架, 理论上通过模板功能可以支持任意框架, 这取决于你如何使用它. 该项目可一键创建项目, 并支持不同的使用场景, 如 grpc 项目, gateway 项目, api 项目以及命令行项目等. 通过项目的可描..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-13T02:17:57.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:modified_time","content":"2024-10-13T02:17:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"首页\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-13T02:17:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"特性","slug":"特性","link":"#特性","children":[]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]}],"git":{"createdTime":1712825833000,"updatedTime":1728785877000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":44},{"name":"jaron","email":"jaron@jaronnie.com","commits":2}]},"readingTime":{"minutes":3,"words":900},"filePathRelative":"README.md","localizedDate":"2024年4月11日","excerpt":"<div style=\\"text-align: center;\\">\\n  <img src=\\"https://oss.jaronnie.com/jzero.jpg\\" style=\\"width: 33%;\\" alt=\\"\\">\\n</div>\\n<h2>特性</h2>\\n<p>基于 <a href=\\"https://go-zero.dev\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">go-zero</a> 开发的低代码脚手架 jzero, 旨在通过更少的命令完成更多的事情, 但 jzero 不仅仅局限于 go-zero 框架, 理论上通过模板功能可以支持任意框架, 这取决于你如何使用它.</p>","autoDesc":true}');export{F as comp,b as data};