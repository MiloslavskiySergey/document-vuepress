import{_ as l,r as i,o as c,c as r,e as n,a as e,b as s,d as t}from"./app.231fe9ac.js";const p={},d=e("h1",{id:"command-line-interface",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#command-line-interface","aria-hidden":"true"},"#"),s(" Command Line Interface")],-1),u=s("VuePress CLI is provided by "),v={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},m=s("@vuepress/cli"),h=s(" package. It is included by the "),b={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},f=s("vuepress"),g=s(" package, and you can also install it separately."),k=t(`<p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:
  $ vuepress <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Commands:
  dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>    Start development server
  build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>  Build to static site
  info               Display environment information

For <span class="token function">more</span> info, run any <span class="token builtin class-name">command</span> with the <span class="token variable"><span class="token variable">\`</span>--help<span class="token variable">\`</span></span> flag:
  $ vuepress dev --help
  $ vuepress build --help
  $ vuepress info --help

Options:
  -v, --version  Display version number 
  -h, --help     Display this message 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),_={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"TIP",-1),w=s("VuePress is using "),x={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},D=s("debug"),S=s(" module."),C=e("p",null,[s("Set environment variable "),e("code",null,"DEBUG=vuepress*"),s(" to enable debug logs.")],-1),I=t(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:
  $ vuepress dev <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>

Options:
  -c, --config <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span> 
  -p, --port <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>      Use specified port <span class="token punctuation">(</span>default: <span class="token number">8080</span><span class="token punctuation">)</span> 
  -t, --temp <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files 
  --host <span class="token operator">&lt;</span>host<span class="token operator">&gt;</span>          Use specified <span class="token function">host</span> <span class="token punctuation">(</span>default: <span class="token number">0.0</span>.0.0<span class="token punctuation">)</span> 
  --cache <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before dev 
  --clean-cache          Clean the cache files before dev 
  --open                 Open browser when ready 
  --debug                Enable debug mode 
  --no-watch             Disable watching page and config files <span class="token punctuation">(</span>default: <span class="token boolean">true</span><span class="token punctuation">)</span>
  -v, --version          Display version number 
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2><p>Build your VuePress site to static files, which are ready for</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage:
  $ vuepress build <span class="token punctuation">[</span>sourceDir<span class="token punctuation">]</span>

Options:
  -c, --config <span class="token operator">&lt;</span>config<span class="token operator">&gt;</span>  Set path to config <span class="token function">file</span> 
  -d, --dest <span class="token operator">&lt;</span>dest<span class="token operator">&gt;</span>      Set the directory build output <span class="token punctuation">(</span>default: .vuepress/dist<span class="token punctuation">)</span> 
  -t, --temp <span class="token operator">&lt;</span>temp<span class="token operator">&gt;</span>      Set the directory of the temporary files 
  --cache <span class="token operator">&lt;</span>cache<span class="token operator">&gt;</span>        Set the directory of the cache files 
  --clean-temp           Clean the temporary files before build 
  --clean-cache          Clean the cache files before build 
  --debug                Enable debug mode 
  -v, --version          Display version number 
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>`,11);function B(V,O){const o=i("NpmBadge"),a=i("ExternalLinkIcon");return c(),r("div",null,[d,n(o,{package:"@vuepress/cli"}),e("p",null,[u,e("a",v,[m,n(a)]),h,e("a",b,[f,n(a)]),g]),k,e("div",_,[y,e("p",null,[w,e("a",x,[D,n(a)]),S]),C]),I])}var E=l(p,[["render",B],["__file","sec1.html.vue"]]);export{E as default};
