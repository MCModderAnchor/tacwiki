import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a,o as s}from"./app-Bi6i2abl.js";const n="/user_guide/tooltip_part.png",r="/user_guide/hided.png",d={};function l(o,e){return s(),t("div",null,e[0]||(e[0]=[a('<h1 id="分部分控制枪械的文本提示" tabindex="-1"><a class="header-anchor" href="#分部分控制枪械的文本提示"><span>分部分控制枪械的文本提示</span></a></h1><p>鉴于目前枪械文本提示内容庞杂，我们学习 Mojang，引入了 NBT 控制的文本提示隐藏方法。服务器腐竹可以通过此方法自定义枪械的文本提示隐藏部分！</p><h2 id="控制值-掩码" tabindex="-1"><a class="header-anchor" href="#控制值-掩码"><span>控制值（掩码）</span></a></h2><p>要定制枪械的文本提示，首先需要计算出控制值。<br> 我们将枪械的文本提示拆分成了如下的 6 个部分，其中每个部分可以单独隐藏和显示：</p><figure><img src="'+n+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>其中，每个框起来的部分都是一个可以单独隐藏的部分，它右侧的数字是这个部分的数值，将所有需要 <strong>隐藏</strong> 的部分的数值加和，就得到了我们需要的控制值 如我们想隐藏第一、二、三栏，那么这三栏数值加和是 <code>1+2+4=7</code>，则我们需要的控制值就是7，效果如下</p><figure><img src="'+r+'" alt="img" tabindex="0"><figcaption>img</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>事实上，控制值是一个<strong>二进制掩码</strong>，每一位代表一个部分，1 代表隐藏，0 代表显示，从低位到高位分别代表第一到第六个部分</p></div><h2 id="通过附加nbt标签控制文本提示" tabindex="-1"><a class="header-anchor" href="#通过附加nbt标签控制文本提示"><span>通过附加NBT标签控制文本提示</span></a></h2><p>控制值以NBT标签的形式保存在枪械上，所以你可以直接通过为物品附加NBT标签 <code>HideFlags</code>（整型）来为枪械启用它。 以下是一个示例的 <code>give</code> 指令，用于获取一把上例中隐藏了第一、二、三栏的 M4A1：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/give @s tacz:modern_kinetic_gun{GunId:&quot;tacz:m4a1&quot;,GunFireMode:&quot;SEMI&quot;,HideFlags:7}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="使用指令修改物品的文本提示" tabindex="-1"><a class="header-anchor" href="#使用指令修改物品的文本提示"><span>使用指令修改物品的文本提示</span></a></h2><p>TACZ 内置了一个指令，可用于快速为一把枪械附加文本提示隐藏标签，语法如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/tacz hide_tooltip_part &lt;players&gt; &lt;mask&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，<code>&lt;players&gt;</code> 为目标玩家选择器，<code>&lt;mask&gt;</code> 为指定的控制值。这个指令将会为目标玩家手持的枪械附加指定的文本提示隐藏标签。</p>',15)]))}const h=i(d,[["render",l],["__file","hide_tooltip.html.vue"]]),g=JSON.parse('{"path":"/zh/user_guide/hide_tooltip.html","title":"分部分控制枪械的文本提示","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"控制值（掩码）","slug":"控制值-掩码","link":"#控制值-掩码","children":[]},{"level":2,"title":"通过附加NBT标签控制文本提示","slug":"通过附加nbt标签控制文本提示","link":"#通过附加nbt标签控制文本提示","children":[]},{"level":2,"title":"使用指令修改物品的文本提示","slug":"使用指令修改物品的文本提示","link":"#使用指令修改物品的文本提示","children":[]}],"git":{},"readingTime":{"minutes":1.62,"words":487},"filePathRelative":"zh/user_guide/hide_tooltip.md","excerpt":"\\n<p>鉴于目前枪械文本提示内容庞杂，我们学习 Mojang，引入了 NBT 控制的文本提示隐藏方法。服务器腐竹可以通过此方法自定义枪械的文本提示隐藏部分！</p>\\n<h2>控制值（掩码）</h2>\\n<p>要定制枪械的文本提示，首先需要计算出控制值。<br>\\n我们将枪械的文本提示拆分成了如下的 6 个部分，其中每个部分可以单独隐藏和显示：</p>\\n<figure><img src=\\"/user_guide/tooltip_part.png\\" alt=\\"\\" tabindex=\\"0\\"><figcaption></figcaption></figure>\\n<p>其中，每个框起来的部分都是一个可以单独隐藏的部分，它右侧的数字是这个部分的数值，将所有需要 <strong>隐藏</strong> 的部分的数值加和，就得到了我们需要的控制值\\n如我们想隐藏第一、二、三栏，那么这三栏数值加和是 <code>1+2+4=7</code>，则我们需要的控制值就是7，效果如下</p>"}');export{h as comp,g as data};