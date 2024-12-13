import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as t,o as a}from"./app-YCq8LkvV.js";const n={};function l(h,i){return a(),e("div",null,i[0]||(i[0]=[t(`<h2 id="rest" tabindex="-1"><a class="header-anchor" href="#rest"><span>rest</span></a></h2><p>修改 etc/etc.yaml, 增加以下配置</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">rest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10000</span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 10s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zrpc" tabindex="-1"><a class="header-anchor" href="#zrpc"><span>zrpc</span></a></h2><p>修改 etc/etc.yaml, 增加以下配置</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">zrpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10000</span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 10s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gateway" tabindex="-1"><a class="header-anchor" href="#gateway"><span>gateway</span></a></h2><p>修改 etc/etc.yaml, 增加以下配置</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">gateway</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10000</span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 10s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  upstreams</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">grpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10000</span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 10s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">zrpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10000</span><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 10s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const k=s(n,[["render",l],["__file","timeout.html.vue"]]),d=JSON.parse('{"path":"/guide/config/timeout.html","title":"超时配置","lang":"zh-CN","frontmatter":{"title":"超时配置","icon":"eos-icons:timeout","order":2,"star":true,"category":"配置","tag":["Guide"],"description":"rest 修改 etc/etc.yaml, 增加以下配置 zrpc 修改 etc/etc.yaml, 增加以下配置 gateway 修改 etc/etc.yaml, 增加以下配置","head":[["meta",{"property":"og:url","content":"https://docs.jzero.io/guide/config/timeout.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"超时配置"}],["meta",{"property":"og:description","content":"rest 修改 etc/etc.yaml, 增加以下配置 zrpc 修改 etc/etc.yaml, 增加以下配置 gateway 修改 etc/etc.yaml, 增加以下配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-30T02:09:03.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2024-07-30T02:09:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"超时配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-30T02:09:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"rest","slug":"rest","link":"#rest","children":[]},{"level":2,"title":"zrpc","slug":"zrpc","link":"#zrpc","children":[]},{"level":2,"title":"gateway","slug":"gateway","link":"#gateway","children":[]}],"git":{"createdTime":1713332628000,"updatedTime":1722305343000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":2}]},"readingTime":{"minutes":0.24,"words":72},"filePathRelative":"guide/config/timeout.md","localizedDate":"2024年4月17日","excerpt":"<h2>rest</h2>\\n<p>修改 etc/etc.yaml, 增加以下配置</p>\\n<div class=\\"language-yaml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"yaml\\" data-title=\\"yaml\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">rest</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">  timeout</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">10000</span><span style=\\"--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> # 10s</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,d as data};