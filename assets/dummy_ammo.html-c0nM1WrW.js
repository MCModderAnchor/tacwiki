import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as n,o as s}from"./app-Bi6i2abl.js";const a="/user_guide/dummy_hud.png",r={};function o(d,e){return s(),i("div",null,e[0]||(e[0]=[n('<h1 id="虚拟弹药" tabindex="-1"><a class="header-anchor" href="#虚拟弹药"><span>虚拟弹药</span></a></h1><p><strong>虚拟弹药</strong>（虚拟备弹）是一种特殊的备弹类型。当一把枪械启用虚拟弹药后，当进行换弹操作时，这把枪将<strong>不会消耗正常的子弹物品进行换弹</strong>， 而是消耗枪械物品上的<strong>虚拟弹药值</strong>作为备弹进行换弹。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>一旦为一把枪械启用此功能，即使枪械上的 <strong>虚拟弹药</strong> 被消耗完毕，这把枪械 <strong>仍不能消耗正常的弹药</strong> 进行换弹。</p></div><figure><img src="'+a+'" alt="Dummy Ammo HUD" tabindex="0"><figcaption>图为一把启用了虚拟弹药的枪。虚拟弹药将在弹药HUD中渲染为天蓝色。</figcaption></figure><h2 id="通过附加nbt标签为枪械启用虚拟弹药" tabindex="-1"><a class="header-anchor" href="#通过附加nbt标签为枪械启用虚拟弹药"><span>通过附加NBT标签为枪械启用虚拟弹药</span></a></h2><p>虚拟弹药以 NBT 标签的形式保存在枪械上，所以你可以直接通过为物品附加 NBT 标签 <code>DummyAmmo</code>（整型）来为枪械启用它。<br> 以下是一个示例的 <code>give</code> 指令，用于获取一把具有 99 发虚拟备弹的 AK47：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/give @s tacz:modern_kinetic_gun{GunId:&quot;tacz:ak47&quot;,GunFireMode:&quot;SEMI&quot;,DummyAmmo:99}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你可以使用原版命令 <code>/data get entity @s Inventory</code> 来查看自己背包物品的详细 NBT</p></div><h2 id="使用指令修改物品的虚拟弹药" tabindex="-1"><a class="header-anchor" href="#使用指令修改物品的虚拟弹药"><span>使用指令修改物品的虚拟弹药</span></a></h2><p>TACZ 内置了一个指令，可用于快速为一把枪械附加虚拟弹药，语法如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/tacz dummy &lt;players&gt; &lt;dummyAmount&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中，<code>&lt;players&gt;</code> 为目标玩家选择器，<code>&lt;dummyAmount&gt;</code> 为指定的虚拟弹药数量。<br> 这个指令将会为目标玩家手持的枪械附加指定数量的虚拟弹药。</p>',12)]))}const m=t(r,[["render",o],["__file","dummy_ammo.html.vue"]]),g=JSON.parse('{"path":"/zh/user_guide/dummy_ammo.html","title":"虚拟弹药","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"通过附加NBT标签为枪械启用虚拟弹药","slug":"通过附加nbt标签为枪械启用虚拟弹药","link":"#通过附加nbt标签为枪械启用虚拟弹药","children":[]},{"level":2,"title":"使用指令修改物品的虚拟弹药","slug":"使用指令修改物品的虚拟弹药","link":"#使用指令修改物品的虚拟弹药","children":[]}],"git":{},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"zh/user_guide/dummy_ammo.md","excerpt":"\\n<p><strong>虚拟弹药</strong>（虚拟备弹）是一种特殊的备弹类型。当一把枪械启用虚拟弹药后，当进行换弹操作时，这把枪将<strong>不会消耗正常的子弹物品进行换弹</strong>，\\n而是消耗枪械物品上的<strong>虚拟弹药值</strong>作为备弹进行换弹。</p>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">注意</p>\\n<p>一旦为一把枪械启用此功能，即使枪械上的 <strong>虚拟弹药</strong> 被消耗完毕，这把枪械 <strong>仍不能消耗正常的弹药</strong> 进行换弹。</p>\\n</div>"}');export{m as comp,g as data};