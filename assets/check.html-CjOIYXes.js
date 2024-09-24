import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,a as o,b as d,w as a,r as g,o as k,d as s,e as i}from"./app-CykRD9-9.js";const p={};function c(m,e){const l=g("CodeTabs");return k(),h("div",null,[e[2]||(e[2]=o(`<p>由于 jzero 基于 go 语言以及 go-zero 框架, 需要先安装 golang, goctl 工具</p><h2 id="安装-golang" tabindex="-1"><a class="header-anchor" href="#安装-golang"><span>安装 golang</span></a></h2><div class="hint-container tip"><p class="hint-container-title">推荐采用 go 1.21 版本以及以上</p></div><p>使用 gvm 工具安装 golang, 并能管理 golang 的版本.</p><p><a href="https://github.com/jaronnie/gvm/releases" target="_blank" rel="noopener noreferrer">gvm Release</a></p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 以 linux 为例子, 下载 tar.gz 后</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gvm_1.4.2_Linux_x86_64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gvm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/bin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gvm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> init</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 重新开一个 terminal 或者 source 一下配置文件. 如 source ~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gvm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> go1.22.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gvm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> go1.22.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-jzero" tabindex="-1"><a class="header-anchor" href="#安装-jzero"><span>安装 jzero</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> github.com/jzero-io/jzero@latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jzero-相关工具一键安装" tabindex="-1"><a class="header-anchor" href="#jzero-相关工具一键安装"><span>jzero 相关工具一键安装</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> check</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">如果觉得需要安装的工具太多可以采取使用 Docker 的方式, 工具全部集成到容器中</p></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2>`,12)),d(l,{id:"28",data:[{id:"Docker"}],"tab-id":"shell"},{title0:a(({value:t,isActive:n})=>e[0]||(e[0]=[s("Docker")])),tab0:a(({value:t,isActive:n})=>e[1]||(e[1]=[i("div",{class:"language-shell line-numbers-mode","data-highlighter":"shiki","data-ext":"shell","data-title":"shell",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," pull"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ghcr.io/jzero-io/jzero:latest")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"# 如果无法 pull")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," pull"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," registry.cn-hangzhou.aliyuncs.com/ghcr.io/jzero-io/jzero:latest")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," tag"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," registry.cn-hangzhou.aliyuncs.com/ghcr.io/jzero-io/jzero:latest"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ghcr.io/jzero-io/jzero:latest")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])}const b=r(p,[["render",c],["__file","check.html.vue"]]),y=JSON.parse('{"path":"/guide/check.html","title":"环境准备","lang":"zh-CN","frontmatter":{"title":"环境准备","icon":"marketeq:download-alt-4","order":2,"description":"由于 jzero 基于 go 语言以及 go-zero 框架, 需要先安装 golang, goctl 工具 安装 golang 推荐采用 go 1.21 版本以及以上 使用 gvm 工具安装 golang, 并能管理 golang 的版本. gvm Release 安装 jzero jzero 相关工具一键安装 如果觉得需要安装的工具太多可以采取使用...","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/guide/check.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"环境准备"}],["meta",{"property":"og:description","content":"由于 jzero 基于 go 语言以及 go-zero 框架, 需要先安装 golang, goctl 工具 安装 golang 推荐采用 go 1.21 版本以及以上 使用 gvm 工具安装 golang, 并能管理 golang 的版本. gvm Release 安装 jzero jzero 相关工具一键安装 如果觉得需要安装的工具太多可以采取使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-21T10:52:59.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:modified_time","content":"2024-08-21T10:52:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"环境准备\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-21T10:52:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"安装 golang","slug":"安装-golang","link":"#安装-golang","children":[]},{"level":2,"title":"安装 jzero","slug":"安装-jzero","link":"#安装-jzero","children":[]},{"level":2,"title":"jzero 相关工具一键安装","slug":"jzero-相关工具一键安装","link":"#jzero-相关工具一键安装","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]}],"git":{"createdTime":1713163888000,"updatedTime":1724237579000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":3}]},"readingTime":{"minutes":0.68,"words":203},"filePathRelative":"guide/check.md","localizedDate":"2024年4月15日","excerpt":"<p>由于 jzero 基于 go 语言以及 go-zero 框架, 需要先安装 golang, goctl 工具</p>\\n<h2>安装 golang</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">推荐采用 go 1.21 版本以及以上</p>\\n</div>\\n<p>使用 gvm 工具安装 golang, 并能管理 golang 的版本.</p>\\n<p><a href=\\"https://github.com/jaronnie/gvm/releases\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">gvm Release</a></p>","autoDesc":true}');export{b as comp,y as data};
