import{_ as g}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as r,b as l,w as a,e as i,d as e,r as p,o as d}from"./app-CykRD9-9.js";const c={};function u(m,s){const o=p("CodeTabs"),h=p("RouteLink");return d(),k("div",null,[s[6]||(s[6]=r('<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p>同时支持基于 go-zero api 文件和 protobuf 文件自动生成 swagger 文档</p><p>其中自动生成 swagger 的插件如下:</p><ul><li><a href="https://github.com/jzero-io/goctl-swagger" target="_blank" rel="noopener noreferrer">goctl-swagger</a></li><li><a href="https://github.com/grpc-ecosystem/grpc-gateway/tree/main/protoc-gen-openapiv2" target="_blank" rel="noopener noreferrer">protoc-gen-openapiv2</a></li></ul><blockquote><p>由于 go-zero 官方仓库插件 goctl-swagger 不怎么维护了, 并在实际使用中存在一些 bug, 所以 fork 了一份进行维护.</p></blockquote><p>jzero 框架默认增加了在线访问 swagger ui 的路由</p>',6)),l(o,{id:"29",data:[{id:"jzero"},{id:"Docker"}],"tab-id":"shell"},{title0:a(({value:n,isActive:t})=>s[0]||(s[0]=[e("jzero")])),title1:a(({value:n,isActive:t})=>s[1]||(s[1]=[e("Docker")])),tab0:a(({value:n,isActive:t})=>s[2]||(s[2]=[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"jzero"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," swagger")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:n,isActive:t})=>s[3]||(s[3]=[i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"cd"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," your_project")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," --rm"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -v"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," ${"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"PWD"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":/app"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ghcr.io/jzero-io/jzero:latest"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," gen"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," swagger")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),s[7]||(s[7]=r('<h2 id="在线访问-swagger-ui" tabindex="-1"><a class="header-anchor" href="#在线访问-swagger-ui"><span>在线访问 swagger ui</span></a></h2><p>ip:port/swagger</p><figure><img src="https://oss.jaronnie.com/image-20240731134511973.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="高级教程" tabindex="-1"><a class="header-anchor" href="#高级教程"><span>高级教程</span></a></h2><h3 id="_1-如何自定义字段" tabindex="-1"><a class="header-anchor" href="#_1-如何自定义字段"><span>1. 如何自定义字段</span></a></h3>',5)),i("p",null,[s[5]||(s[5]=e("please see: ")),l(h,{to:"/faq/swagger.html"},{default:a(()=>s[4]||(s[4]=[e("swagger 自定义字段")])),_:1})]),s[8]||(s[8]=r(`<h3 id="_2-基于-proto-文件自定义-header" tabindex="-1"><a class="header-anchor" href="#_2-基于-proto-文件自定义-header"><span>2. 基于 proto 文件自定义 header</span></a></h3><div class="language-protobuf line-numbers-mode" data-highlighter="shiki" data-ext="protobuf" data-title="protobuf" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">option</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;"> (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger)</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;v1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    security_definitions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        security</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;ApiKeyAuth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;JWT token for authorization ( Bearer token )&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: TYPE_API_KEY,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Authorization&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                in</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: IN_HEADER</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://oss.jaronnie.com/img_1.png" alt="img_1.png" loading="lazy"><img src="https://oss.jaronnie.com/img.png" alt="img.png" loading="lazy"></p>`,3))])}const v=g(c,[["render",u],["__file","genswagger.html.vue"]]),B=JSON.parse('{"path":"/guide/genswagger.html","title":"生成 swagger 文档","lang":"zh-CN","frontmatter":{"title":"生成 swagger 文档","icon":"vscode-icons:file-type-swagger","order":5.1,"description":"说明 同时支持基于 go-zero api 文件和 protobuf 文件自动生成 swagger 文档 其中自动生成 swagger 的插件如下: goctl-swagger protoc-gen-openapiv2 由于 go-zero 官方仓库插件 goctl-swagger 不怎么维护了, 并在实际使用中存在一些 bug, 所以 fork 了一...","head":[["meta",{"property":"og:url","content":"https://jzero.jaronnie.com/guide/genswagger.html"}],["meta",{"property":"og:site_name","content":"Jzero Framework"}],["meta",{"property":"og:title","content":"生成 swagger 文档"}],["meta",{"property":"og:description","content":"说明 同时支持基于 go-zero api 文件和 protobuf 文件自动生成 swagger 文档 其中自动生成 swagger 的插件如下: goctl-swagger protoc-gen-openapiv2 由于 go-zero 官方仓库插件 goctl-swagger 不怎么维护了, 并在实际使用中存在一些 bug, 所以 fork 了一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.jaronnie.com/image-20240731134511973.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T07:02:01.000Z"}],["meta",{"property":"article:author","content":"jaronnie"}],["meta",{"property":"article:modified_time","content":"2024-08-20T07:02:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生成 swagger 文档\\",\\"image\\":[\\"https://oss.jaronnie.com/image-20240731134511973.png\\",\\"https://oss.jaronnie.com/img_1.png\\",\\"https://oss.jaronnie.com/img.png\\"],\\"dateModified\\":\\"2024-08-20T07:02:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"jaronnie\\",\\"url\\":\\"https://github.com/jaronnie\\"}]}"]]},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"在线访问 swagger ui","slug":"在线访问-swagger-ui","link":"#在线访问-swagger-ui","children":[]},{"level":2,"title":"高级教程","slug":"高级教程","link":"#高级教程","children":[{"level":3,"title":"1. 如何自定义字段","slug":"_1-如何自定义字段","link":"#_1-如何自定义字段","children":[]},{"level":3,"title":"2. 基于 proto 文件自定义 header","slug":"_2-基于-proto-文件自定义-header","link":"#_2-基于-proto-文件自定义-header","children":[]}]}],"git":{"createdTime":1716177673000,"updatedTime":1724137321000,"contributors":[{"name":"jaronnie","email":"jaron@jaronnie.com","commits":10}]},"readingTime":{"minutes":0.74,"words":222},"filePathRelative":"guide/genswagger.md","localizedDate":"2024年5月20日","excerpt":"<h2>说明</h2>\\n<p>同时支持基于 go-zero api 文件和 protobuf 文件自动生成 swagger 文档</p>\\n<p>其中自动生成 swagger 的插件如下:</p>\\n<ul>\\n<li><a href=\\"https://github.com/jzero-io/goctl-swagger\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">goctl-swagger</a></li>\\n<li><a href=\\"https://github.com/grpc-ecosystem/grpc-gateway/tree/main/protoc-gen-openapiv2\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">protoc-gen-openapiv2</a></li>\\n</ul>","autoDesc":true}');export{v as comp,B as data};
