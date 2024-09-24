import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as l}from"./app-CykRD9-9.js";const n={};function t(h,i){return l(),e("div",null,i[0]||(i[0]=[a(`<h2 id="jzero-命令一览" tabindex="-1"><a class="header-anchor" href="#jzero-命令一览"><span>jzero 命令一览</span></a></h2><ul><li>check: 一键安装所有所需的工具</li><li>new: 基于模板新建一个完整的项目</li><li>gen: 生成服务端代码 <ul><li>gen sdk: 生成 http 客户端 sdk</li><li>gen zrpcclient: 生成 zrpc 客户端 sdk</li><li>gen swagger: 生成 swagger.json</li><li>gen doc: 生成 markdown 等文档</li></ul></li><li>ivm: 接口版本管理 <ul><li>ivm init: 初始化新版本代码</li><li>ivm add: 新增可描述文件 <ul><li>ivm add api: 新增 api 文件</li><li>ivm add proto: 新增 proto 文件</li></ul></li></ul></li><li>template: 模板功能 <ul><li>template init: 将模板下载到本地磁盘</li><li>template build: 将当前项目编译成 jzero 可使用的模板</li></ul></li><li>upgrade: 更新 jzero</li></ul><h3 id="获取更多信息" tabindex="-1"><a class="header-anchor" href="#获取更多信息"><span>获取更多信息</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -h</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="基于配置文件使用-jzero" tabindex="-1"><a class="header-anchor" href="#基于配置文件使用-jzero"><span>基于配置文件使用 jzero</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>jzero version &gt;= v0.23.0</p><p>默认使用当前项目 .jzero.yaml 文件</p></div><p>由于各个命令 flag 众多, 使用起来较为麻烦, 可通过配置文件启动 jzero 命令, 使用起来更为简洁</p><p>yaml 的编写规则是与命令行工具相匹配的, 如 gen sdk 命令下的 goModule flag 就写入 yaml gen.sdk.goModule 配置中</p><p>如果是 persistent_flag, 则需要写入到对应命令下的配置中, 如 gen sdk 命令下的 style flag, 需要定义 style 到 gen 配置中</p><p>其他命令类同</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">syntax</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">v1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">gen</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  style</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">go_zero</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  sdk</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    goModule</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">github.com/jzero-io/httpsdk</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    output</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">client-go</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行补全" tabindex="-1"><a class="header-anchor" href="#命令行补全"><span>命令行补全</span></a></h2><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>macOS</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> completion</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bash</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/etc/bash_completion.d/jzero</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># zsh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;autoload -U compinit; compinit&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> completion</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> zsh</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fpath</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">[1]}/_jzero&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>linux</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">gvm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> completion</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> bash</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/bash_completion.d/gvm</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /dev/null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># zsh</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;autoload -U compinit; compinit&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> completion</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> zsh</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fpath</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">[1]}/_jzero&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>windows</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">jzero</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> completion</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> powershell</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Out-String</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Invoke-Expression</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,18)]))}const d=s(n,[["render",t],["__file","jzero.html.vue"]]),k=JSON.parse('{"path":"/guide/jzero.html","title":"命令行说明","lang":"zh-CN","frontmatter":{"title":"命令行说明","icon":"heroicons:command-line","order":2.1,"description":"jzero 命令一览 check: 一键安装所有所需的工具 new: 基于模板新建一个完整的项目 gen: 生成服务端代码 gen sdk: 生成 http 客户端 sdk gen zrpcclient: 生成 zrpc 客户端 sdk gen swagger: 生成 swagger.json gen doc: 生成 markdown 等文档 ivm:...","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/guide/jzero.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"命令行说明"}],["meta",{"property":"og:description","content":"jzero 命令一览 check: 一键安装所有所需的工具 new: 基于模板新建一个完整的项目 gen: 生成服务端代码 gen sdk: 生成 http 客户端 sdk gen zrpcclient: 生成 zrpc 客户端 sdk gen swagger: 生成 swagger.json gen doc: 生成 markdown 等文档 ivm:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-21T10:52:59.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:modified_time","content":"2024-08-21T10:52:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令行说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-21T10:52:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"jzero 命令一览","slug":"jzero-命令一览","link":"#jzero-命令一览","children":[{"level":3,"title":"获取更多信息","slug":"获取更多信息","link":"#获取更多信息","children":[]}]},{"level":2,"title":"基于配置文件使用 jzero","slug":"基于配置文件使用-jzero","link":"#基于配置文件使用-jzero","children":[]},{"level":2,"title":"命令行补全","slug":"命令行补全","link":"#命令行补全","children":[{"level":3,"title":"macOS","slug":"macos","link":"#macos","children":[]},{"level":3,"title":"linux","slug":"linux","link":"#linux","children":[]},{"level":3,"title":"windows","slug":"windows","link":"#windows","children":[]}]}],"git":{"createdTime":1714465306000,"updatedTime":1724237579000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":2}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"guide/jzero.md","localizedDate":"2024年4月30日","excerpt":"<h2>jzero 命令一览</h2>\\n<ul>\\n<li>check: 一键安装所有所需的工具</li>\\n<li>new: 基于模板新建一个完整的项目</li>\\n<li>gen: 生成服务端代码\\n<ul>\\n<li>gen sdk: 生成 http 客户端 sdk</li>\\n<li>gen zrpcclient: 生成 zrpc 客户端 sdk</li>\\n<li>gen swagger: 生成 swagger.json</li>\\n<li>gen doc: 生成 markdown 等文档</li>\\n</ul>\\n</li>\\n<li>ivm: 接口版本管理\\n<ul>\\n<li>ivm init: 初始化新版本代码</li>\\n<li>ivm add: 新增可描述文件\\n<ul>\\n<li>ivm add api: 新增 api 文件</li>\\n<li>ivm add proto: 新增 proto 文件</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>template: 模板功能\\n<ul>\\n<li>template init: 将模板下载到本地磁盘</li>\\n<li>template build: 将当前项目编译成 jzero 可使用的模板</li>\\n</ul>\\n</li>\\n<li>upgrade: 更新 jzero</li>\\n</ul>","autoDesc":true}');export{d as comp,k as data};
