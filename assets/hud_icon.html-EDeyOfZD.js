import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a,o as e}from"./app-Bi6i2abl.js";const l={};function p(t,s){return e(),i("div",null,s[0]||(s[0]=[a(`<h1 id="枪械-hud-平面图" tabindex="-1"><a class="header-anchor" href="#枪械-hud-平面图"><span>枪械 HUD 平面图</span></a></h1><h3 id="使用-blockbench-screenshot-model-取得枪械侧视图" tabindex="-1"><a class="header-anchor" href="#使用-blockbench-screenshot-model-取得枪械侧视图"><span>使用 BlockBench Screenshot Model 取得枪械侧视图</span></a></h3><p>我们可以使用 BlockBench 提供的 Screenshot Model 功能获取到枪械模型的平面图。</p><ol><li>使用右下角的游标视图，点击合适的轴得到枪模的侧视图。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在默认枪械包中，我们通常让侧视图中的枪口朝左。这样能获得做好的视觉效果。</p></div><ol start="2"><li><p>按z或在右上角图标中切换模型的显示模式，使模型显示为【实体】。此时模型在工程文件中显示为白色。</p></li><li><p>按下Ctrl+P 进行截图并保存当前图片为.png格式</p></li></ol><p>这样，我们就得到了一个纯白色的枪械模型侧视图。</p><h3 id="处理枪械侧视图为-hud-icon" tabindex="-1"><a class="header-anchor" href="#处理枪械侧视图为-hud-icon"><span>处理枪械侧视图为 HUD Icon</span></a></h3><p>HUD Icon 渲染的长宽比例为 3:1。所以如果你不希望你提供的枪械侧视图被拉伸，你应该用图片处理工具对侧视图进行缩放、裁剪，得到长宽像素比为 3:1 的图片。<br> 由于 HUD Icon 不需要很精细的图片，我们可以将图片适当缩小，以下是几种推荐的分辨率: 180x60、192x64、384x128 。<br> 通常图片元素对齐中间轴线即可，例如：</p><p>对于更短的枪械如手枪，则需将图片向右对齐，如图：</p><p>如果你懒得自己动手，你可以到 <a href="https://github.com/MCModderAnchor/tacwiki/tree/main/resource/hud_icon" target="_blank" rel="noopener noreferrer">这里</a> 获取已经处理好的图片。<br> 接下来，我们将平面图置于枪包的 textures/gun/hud/ 目录下，并在 guns/display/ak47_display.json 文件中指定它。<br> 此时你的文件结构应该看起来像:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>tutorial_gun_pack</span></span>
<span class="line"><span>└─ tutorial</span></span>
<span class="line"><span>   ├─ pack.json</span></span>
<span class="line"><span>   ├─ textures</span></span>
<span class="line"><span>   │  └─ gun</span></span>
<span class="line"><span>   │     ├─ uv</span></span>
<span class="line"><span>   │     │  └─ ak47.png</span></span>
<span class="line"><span>   │     ├─ slot</span></span>
<span class="line"><span>   │     │  └─ ak47.png</span></span>
<span class="line"><span>   │     └─ hud</span></span>
<span class="line"><span>   │        └─ ak47.png</span></span>
<span class="line"><span>   ├─ models</span></span>
<span class="line"><span>   │  └─ gun</span></span>
<span class="line"><span>   │     └─ ak47_geo.json</span></span>
<span class="line"><span>   ├─ lang</span></span>
<span class="line"><span>   │  └─ en_us.json</span></span>
<span class="line"><span>   └─ guns</span></span>
<span class="line"><span>      ├─ index</span></span>
<span class="line"><span>      │  └─ ak47.json</span></span>
<span class="line"><span>      ├─ display</span></span>
<span class="line"><span>      │  └─ ak47_display.json</span></span>
<span class="line"><span>      └─ data</span></span>
<span class="line"><span>         └─ ak47_data.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ak47_display.json 中加入一行</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;hud&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tutorial:gun/hud/ak47&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此时你的 ak47 效果文件应该看起来像：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tutorial:gun/ak47_geo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;texture&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tutorial:gun/uv/ak47&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;slot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tutorial:gun/slot/ak47&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;hud&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tutorial:gun/hud/ak47&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;third_person_animation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;default&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入游戏后，若你看到原本显示在 hud 的黑紫块变成你的平面图，则证明你成功为枪械添加了 hud icon。</p><p>你也可以尝试将子弹打空，hud 中的平面图将变为红色。</p>`,18)]))}const r=n(l,[["render",p],["__file","hud_icon.html.vue"]]),c=JSON.parse('{"path":"/zh/gunpack/gun/display/hud_icon.html","title":"枪械 HUD 平面图","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"使用 BlockBench Screenshot Model 取得枪械侧视图","slug":"使用-blockbench-screenshot-model-取得枪械侧视图","link":"#使用-blockbench-screenshot-model-取得枪械侧视图","children":[]},{"level":3,"title":"处理枪械侧视图为 HUD Icon","slug":"处理枪械侧视图为-hud-icon","link":"#处理枪械侧视图为-hud-icon","children":[]}],"git":{},"readingTime":{"minutes":1.77,"words":530},"filePathRelative":"zh/gunpack/gun/display/hud_icon.md","excerpt":"\\n<h3>使用 BlockBench Screenshot Model 取得枪械侧视图</h3>\\n<p>我们可以使用 BlockBench 提供的 Screenshot Model 功能获取到枪械模型的平面图。</p>\\n<ol>\\n<li>使用右下角的游标视图，点击合适的轴得到枪模的侧视图。</li>\\n</ol>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>在默认枪械包中，我们通常让侧视图中的枪口朝左。这样能获得做好的视觉效果。</p>\\n</div>\\n<ol start=\\"2\\">\\n<li>\\n<p>按z或在右上角图标中切换模型的显示模式，使模型显示为【实体】。此时模型在工程文件中显示为白色。</p>\\n</li>\\n<li>\\n<p>按下Ctrl+P 进行截图并保存当前图片为.png格式</p>\\n</li>\\n</ol>"}');export{r as comp,c as data};