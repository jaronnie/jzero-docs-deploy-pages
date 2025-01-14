import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as t}from"./app-CbfOdcIY.js";const l={};function h(e,i){return t(),a("div",null,i[0]||(i[0]=[n(`<h2 id="服务端-panic-客户端会收到详细的错误信息暴露了服务端" tabindex="-1"><a class="header-anchor" href="#服务端-panic-客户端会收到详细的错误信息暴露了服务端"><span>服务端 panic, 客户端会收到详细的错误信息暴露了服务端</span></a></h2><figure><img src="http://oss.jaronnie.com/image-20241226200214351.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://oss.jaronnie.com/image-20241226200236983.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>解决方案:</p><ul><li>去掉 grpc 内置的 recover interceptor, 改为自定义的 recover interceptor</li></ul><figure><img src="http://oss.jaronnie.com/image-20241227114544243.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="http://oss.jaronnie.com/image-20241227114611375.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>代码如下:</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> middleware</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">context</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">runtime/debug</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">github.com/zeromicro/go-zero/core/logx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">google.golang.org/grpc</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">google.golang.org/grpc/codes</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">google.golang.org/grpc/status</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// StreamRecoverInterceptor catches panics in processing stream requests and recovers.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> StreamRecoverInterceptor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">svr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">stream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> grpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ServerStream</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">_</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">grpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">StreamServerInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> handler</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> grpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">StreamHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) (</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> error</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> handleCrash</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">r</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  err</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> toPanicError</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> handler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">svr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">stream</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// UnaryRecoverInterceptor catches panics in processing unary requests and recovers.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> UnaryRecoverInterceptor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Context</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">req</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">_</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">grpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UnaryServerInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> handler</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> grpc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UnaryHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) (</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">resp</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">err</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> error</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> handleCrash</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">r</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  err</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> toPanicError</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> handler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> handleCrash</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">handler</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> r</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> recover</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  handler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> toPanicError</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">r</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> logx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Errorf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%+v</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\n\\n</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">r</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Stack</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> status</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Errorf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">codes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Internal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Service temporarily unavailable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const r=s(l,[["render",h],["__file","grpc.html.vue"]]),d=JSON.parse('{"path":"/faq/grpc.html","title":"gateway/rpc 框架问题记录","lang":"zh-CN","frontmatter":{"title":"gateway/rpc 框架问题记录","icon":"logos:grpc","star":true,"order":3,"category":"faq","tag":["faq"],"description":"服务端 panic, 客户端会收到详细的错误信息暴露了服务端 解决方案: 去掉 grpc 内置的 recover interceptor, 改为自定义的 recover interceptor 代码如下:","head":[["meta",{"property":"og:url","content":"https://docs.jzero.io/faq/grpc.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"gateway/rpc 框架问题记录"}],["meta",{"property":"og:description","content":"服务端 panic, 客户端会收到详细的错误信息暴露了服务端 解决方案: 去掉 grpc 内置的 recover interceptor, 改为自定义的 recover interceptor 代码如下:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://oss.jaronnie.com/image-20241226200214351.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-27T09:06:19.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:tag","content":"faq"}],["meta",{"property":"article:modified_time","content":"2024-12-27T09:06:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gateway/rpc 框架问题记录\\",\\"image\\":[\\"http://oss.jaronnie.com/image-20241226200214351.png\\",\\"http://oss.jaronnie.com/image-20241226200236983.png\\",\\"http://oss.jaronnie.com/image-20241227114544243.png\\",\\"http://oss.jaronnie.com/image-20241227114611375.png\\"],\\"dateModified\\":\\"2024-12-27T09:06:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"服务端 panic, 客户端会收到详细的错误信息暴露了服务端","slug":"服务端-panic-客户端会收到详细的错误信息暴露了服务端","link":"#服务端-panic-客户端会收到详细的错误信息暴露了服务端","children":[]}],"git":{"createdTime":1735271227000,"updatedTime":1735290379000,"contributors":[{"name":"jaron","email":"jaron@jaronnie.com","commits":3}]},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"faq/grpc.md","localizedDate":"2024年12月27日","excerpt":"<h2>服务端 panic, 客户端会收到详细的错误信息暴露了服务端</h2>\\n<figure><img src=\\"http://oss.jaronnie.com/image-20241226200214351.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<figure><img src=\\"http://oss.jaronnie.com/image-20241226200236983.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{r as comp,d as data};