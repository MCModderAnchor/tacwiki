import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a,o as i}from"./app-Bi6i2abl.js";const d={};function e(l,n){return i(),t("div",null,n[0]||(n[0]=[a(`<h1 id="添加枪械音效" tabindex="-1"><a class="header-anchor" href="#添加枪械音效"><span>添加枪械音效</span></a></h1><p>枪械需要的所有音效如下表：</p><table><thead><tr><th>音效名</th><th>效果</th></tr></thead><tbody><tr><td>draw</td><td>在抬枪时播放</td></tr><tr><td>inspect</td><td>膛内有子弹的情况下检视时播放</td></tr><tr><td>inspect_empty</td><td>膛内没有子弹的情况下检视时播放</td></tr><tr><td>put_away</td><td>收枪时播放</td></tr><tr><td>reload_empty</td><td>膛内没有子弹的情况下换弹时播放</td></tr><tr><td>reload_tactical</td><td>膛内有子弹的情况下换弹时播放</td></tr><tr><td>shoot</td><td><strong>本地客户端</strong>开火时播放</td></tr><tr><td>shoot_3p</td><td><strong>其他生物</strong>开火时播放</td></tr><tr><td>silence</td><td><strong>本地客户端</strong>安装消音器后开火时播放</td></tr><tr><td>silence_3p</td><td><strong>其他生物</strong>安装消音器后开火时播放</td></tr><tr><td>dry_fire</td><td>弹匣打空后扣动扳机时播放。tacz 提供了默认音效，你可以不指定以启用默认音效。</td></tr><tr><td>fire_select</td><td>切换快慢机时播放。tacz 提供了默认音效，你可以不指定以启用默认音效。</td></tr><tr><td>head_hit</td><td>爆头的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。</td></tr><tr><td>flesh_hit</td><td>打中身体的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。</td></tr><tr><td>kill</td><td>击杀生物的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。</td></tr></tbody></table><p>本节教程我们为教程枪添加 shoot 音效、dry_fire 音效作为示范。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>开始之前，我认为有必要提醒你，我们可以直接用 &quot;tac:ak47/ak47_shoot&quot; 和 &quot;tac:ak47/ak47_dry_fire&quot; 引用默认枪包中 ak47 的音效。但为了教学效果，我们将这两个音效拷贝出来，添加到教程枪包中。在一般的枪包制作过程中，你应该尽可能复用已有的资源，而不是复制黏贴。</p></div><ol><li>从 <a href="https://github.com/MCModderAnchor/TimelessAndClassicsZero/tree/1.18.2/src/main/resources/assets/tac/custom/tac_default_gun/tac/sounds/ak47" target="_blank" rel="noopener noreferrer">这里</a> 下载 ak47_shoot.ogg 和 ak47_dry_fire.ogg。</li><li>音效文件应该置于枪包的 sounds/ 文件夹中。并且，为了整洁考虑，我们应该为每把枪单独建立一个文件夹，将同一把枪的音效归类在一起。<br> 因此，在 sounds/ 文件夹下，新建一个 ak47/ 文件夹，并将下载的 ak47_shoot.ogg 和 ak47_dry_fire.ogg 放入其中。<br> 此时你的枪包文件结构应该看起来像这样：</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>tutorial_gun_pack</span></span>
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
<span class="line"><span>   ├─ sounds</span></span>
<span class="line"><span>   │  └─ ak47</span></span>
<span class="line"><span>   │     ├─ ak47_dry_fire.ogg</span></span>
<span class="line"><span>   │     └─ ak47_shoot.ogg</span></span>
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
<span class="line"><span>         └─ ak47_data.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 ak47 的效果文件中指定这两个音效。<br> 打开 guns/display/ak47_display.json 文件，添加如下代码:</li></ol><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;sounds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">        &quot;shoot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tutorial:ak47/ak47_shoot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">        &quot;dry_fire&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tutorial:ak47/ak47_dry_fire&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>键的内容对应开头表格的音效名，值则是具体音效的路径。<br> 4. 到游戏中检验音效是否播放吧。</p>`,10)]))}const c=s(d,[["render",e],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/zh/gunpack/legacy/gun_sound/","title":"添加枪械音效","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"readingTime":{"minutes":2.12,"words":636},"filePathRelative":"zh/gunpack/legacy/gun_sound/README.md","excerpt":"\\n<p>枪械需要的所有音效如下表：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>音效名</th>\\n<th>效果</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>draw</td>\\n<td>在抬枪时播放</td>\\n</tr>\\n<tr>\\n<td>inspect</td>\\n<td>膛内有子弹的情况下检视时播放</td>\\n</tr>\\n<tr>\\n<td>inspect_empty</td>\\n<td>膛内没有子弹的情况下检视时播放</td>\\n</tr>\\n<tr>\\n<td>put_away</td>\\n<td>收枪时播放</td>\\n</tr>\\n<tr>\\n<td>reload_empty</td>\\n<td>膛内没有子弹的情况下换弹时播放</td>\\n</tr>\\n<tr>\\n<td>reload_tactical</td>\\n<td>膛内有子弹的情况下换弹时播放</td>\\n</tr>\\n<tr>\\n<td>shoot</td>\\n<td><strong>本地客户端</strong>开火时播放</td>\\n</tr>\\n<tr>\\n<td>shoot_3p</td>\\n<td><strong>其他生物</strong>开火时播放</td>\\n</tr>\\n<tr>\\n<td>silence</td>\\n<td><strong>本地客户端</strong>安装消音器后开火时播放</td>\\n</tr>\\n<tr>\\n<td>silence_3p</td>\\n<td><strong>其他生物</strong>安装消音器后开火时播放</td>\\n</tr>\\n<tr>\\n<td>dry_fire</td>\\n<td>弹匣打空后扣动扳机时播放。tacz 提供了默认音效，你可以不指定以启用默认音效。</td>\\n</tr>\\n<tr>\\n<td>fire_select</td>\\n<td>切换快慢机时播放。tacz 提供了默认音效，你可以不指定以启用默认音效。</td>\\n</tr>\\n<tr>\\n<td>head_hit</td>\\n<td>爆头的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。</td>\\n</tr>\\n<tr>\\n<td>flesh_hit</td>\\n<td>打中身体的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。</td>\\n</tr>\\n<tr>\\n<td>kill</td>\\n<td>击杀生物的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。</td>\\n</tr>\\n</tbody>\\n</table>"}');export{c as comp,o as data};