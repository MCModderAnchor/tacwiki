import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as n,o as s}from"./app-Bi6i2abl.js";const t={};function e(r,i){return s(),l("div",null,i[0]||(i[0]=[n(`<h1 id="动画模型分组" tabindex="-1"><a class="header-anchor" href="#动画模型分组"><span>动画模型分组</span></a></h1><p>为方便动画制作与程序读取，在 <strong>开始制作动画之前</strong> 应提前将模型分好组。</p><p>本章节提供了一些模型分组建议</p><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组"><span>分组</span></a></h2><h3 id="分组建议" tabindex="-1"><a class="header-anchor" href="#分组建议"><span>分组建议</span></a></h3><ul><li><strong>right_hand_and_gun</strong> 右手及枪械，可以自由命名。动画中大多数情况右手和枪械一起运动，因此可以置于同一分组便于 k 帧。</li><li><strong>left_hand_and_mag</strong> 左手及弹匣，可以自由命名。动画中换弹时左手和弹匣有很长时间需要一起运动，因此可以置于同一分组便于 k 帧。</li><li><strong>left_hand</strong> 左手组，可以自由命名。它应该套在 <code>lefthand_pos</code> (左手手臂定位组)的外层。更改它的枢纽点相对于手臂模型的位置，并用它 k 帧，更加方便。</li><li><strong>right_hand</strong> 与左手组同理。</li><li><strong>default</strong> 名字任意。枪械内所有不可运动的部件的集合（不参与动画的所有东西丢进去）</li><li>其他所有运动件和 <code>main</code> 组同级，如弹匣 <code>magazine</code> ，枪栓 <code>handle</code> 等，这些运动件可以自由命名。</li></ul><p>你可以在下面下载分好组的包含手部模型的示例bb工程文件，以便参考。</p><hr><h3 id="分好组的手部模型下载" tabindex="-1"><a class="header-anchor" href="#分好组的手部模型下载"><span>分好组的手部模型下载</span></a></h3><p><a href="https://pan.quark.cn/s/03b2c15e7403" target="_blank" rel="noopener noreferrer">夸克网盘</a><a href="https://pan.baidu.com/s/1wgj3tFTzPd2ZOaRbkgSaYw?pwd=17e0" target="_blank" rel="noopener noreferrer">百度网盘</a><a href="https://drive.google.com/drive/folders/1C8CsGzRCsaQfA5ako51ljNKG5VOER1lF?usp=drive_link" target="_blank" rel="noopener noreferrer">谷歌网盘</a></p><h2 id="枢轴点设置" tabindex="-1"><a class="header-anchor" href="#枢轴点设置"><span>枢轴点设置</span></a></h2><blockquote><p>枢轴点设置是为了方便动画的制作，除<strong>lefthand_pos</strong>和<strong>righthand_pos</strong>组外其他组的枢轴点皆以自己舒适的方式进行设置。以下内容为参考建议。</p></blockquote><p><strong>枢轴点：</strong> 枢轴点是零件/模型将围绕其旋转的点。</p><p><strong>需要设置枢轴点的内容：</strong> 通常来说所有参与k帧的分组都要设定枢轴点，如果你想偷懒的话则可以只设置会旋转的分组</p><p><strong>如何设置枢轴点：</strong> 快捷键：P 工具栏的圆形按钮 枢轴点居中：右侧枢轴点数值的旁边</p><p><strong>推荐枢轴点位置：</strong> 此内容仅为编者建议不具任何权威，一切以顺手为主。</p><ul><li>right_hand_and_gun：置于右手手心</li><li>left_hand &amp; right_hand组：置于手心</li><li>特别地，<strong>推荐 root 组将枢纽点置于枪械模型的后握把处</strong>，以使枪械默认动画得到最好的观感。</li></ul><hr><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/pivot.png" alt="pivot" tabindex="0"><figcaption>pivot</figcaption></figure><hr><h2 id="动画类型与规范" tabindex="-1"><a class="header-anchor" href="#动画类型与规范"><span>动画类型与规范</span></a></h2><blockquote><p>为了程序能正确读取，动画命名请严格参照以下内容！</p></blockquote><h3 id="必备动画" tabindex="-1"><a class="header-anchor" href="#必备动画"><span>必备动画</span></a></h3><blockquote><p>以下为不可或缺的动画类型，若缺少该类型的动画则会导致画面出现严重问题</p></blockquote><h4 id="static-idle" tabindex="-1"><a class="header-anchor" href="#static-idle"><span>static_idle</span></a></h4><p>默认持枪动画，该动画只需用设置左右手的位置，约束组的参数，以及特殊定位组</p><ul><li>动画类型：静止动画</li></ul><hr><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/static_idle.png" alt="static_idle" tabindex="0"><figcaption>static_idle</figcaption></figure><hr><h4 id="reload-tactical" tabindex="-1"><a class="header-anchor" href="#reload-tactical"><span>reload_tactical</span></a></h4><p>战术换弹动画，如枪内还有剩余弹药的战术换弹方式。如您的枪没有战术换弹和空仓换弹之分，则可复制该动画到空仓换弹。</p><ul><li>动画起始状态和终止状态应该与 static_idle 完全相同</li></ul><h4 id="reload-empty" tabindex="-1"><a class="header-anchor" href="#reload-empty"><span>reload_empty</span></a></h4><p>空仓换弹动画，弹药耗尽后的换弹动画。</p><ul><li>动画起始状态和终止状态应该与 static_idle 完全相同</li></ul><h4 id="inspect" tabindex="-1"><a class="header-anchor" href="#inspect"><span>inspect</span></a></h4><p>检视动画：武器检视动画。</p><ul><li>动画起始状态和终止状态应该与 static_idle 完全相同</li></ul><hr><h4 id="shoot" tabindex="-1"><a class="header-anchor" href="#shoot"><span>shoot</span></a></h4><p>射击动画，武器开火时的视觉后坐力动画</p><ul><li>动画起始状态和终止状态应该与 static_idle 完全相同</li><li>动画类型：混合型。此动画将和其他类型动画混合播放</li><li>注意事项：因为是混合动画，可以互相叠加，所以不需要包含手部关键帧 <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/shoot.png" alt="shoot"></li></ul><hr><h3 id="可选动画类型" tabindex="-1"><a class="header-anchor" href="#可选动画类型"><span>可选动画类型</span></a></h3><blockquote><p>可选动画为非所有枪都需要制作的动画，可根据需求自行选择是否制作</p></blockquote><h4 id="static-bolt-caught" tabindex="-1"><a class="header-anchor" href="#static-bolt-caught"><span>static_bolt_caught</span></a></h4><p>空仓动画，当武器处于空仓状态时的静止动画</p><ul><li>动画类型：静止动画</li></ul><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/sbc.png" alt="sbc" tabindex="0"><figcaption>sbc</figcaption></figure><hr><h4 id="draw" tabindex="-1"><a class="header-anchor" href="#draw"><span>draw</span></a></h4><p>掏枪动画，当玩家拿出武器时播放的动画</p><ul><li>默认动画中包含此动画</li><li>动画终止状态应与static_idle完全相同</li></ul><hr><h4 id="put-away" tabindex="-1"><a class="header-anchor" href="#put-away"><span>put_away</span></a></h4><p>收枪动画，当玩家切换物品栏，丢弃武器..时播放的动画</p><ul><li>默认动画中包含此动画</li><li>动画起始状态应与static_idle完全相同</li></ul><hr><h4 id="inspect-empty" tabindex="-1"><a class="header-anchor" href="#inspect-empty"><span>inspect_empty</span></a></h4><p>空仓检视动画，当武器处于空仓状态时播放的检视动画。 如果缺少inspect_empty动画则空仓时无法触发检视</p><ul><li>动画起始状态和终止状态应该与 static_idle 完全相同</li></ul><hr><h4 id="bolt" tabindex="-1"><a class="header-anchor" href="#bolt"><span>bolt</span></a></h4><p>拉栓动画，手动武器在开火后播放的动画</p><ul><li>动画起始状态和终止状态应该与 static_idle 完全相同</li><li>约束组动画：制作约束组动画后可以使拉栓时枪械始终围绕约束点范围内运动。</li></ul><hr><h4 id="运动类动画" tabindex="-1"><a class="header-anchor" href="#运动类动画"><span>运动类动画</span></a></h4><hr><h5 id="跑步类" tabindex="-1"><a class="header-anchor" href="#跑步类"><span>跑步类</span></a></h5><p><strong>run_start</strong> 进入奔跑状态时的动画</p><ul><li>默认动画中包含此动画</li><li>动画起始状态应与static_idle完全相同</li></ul><p><strong>run</strong> 奔跑时的动画</p><ul><li>默认动画中包含此动画</li><li>动画类型：循环</li><li>动画起时/终止状态与run_start相同</li></ul><p><strong>run_hold</strong> 奔跑时跳跃的动画</p><ul><li>默认动画中包含此动画</li><li>动画类型：静止</li></ul><p><strong>run_end</strong> 奔跑结束时的动画</p><ul><li>默认动画中包含此动画</li><li>动画起始状态应与run相同</li><li>动画终止状态应与static_idle完全相同</li></ul><hr><h5 id="走路类" tabindex="-1"><a class="header-anchor" href="#走路类"><span>走路类</span></a></h5><p><strong>walk_aiming</strong> 走路时瞄准的动画</p><ul><li>默认动画中包含此动画</li><li>动画类型：循环</li><li>动画起始/终止状态应与static_idle完全相同</li></ul><p><strong>walk_forward</strong> 【向前】走路时的动画</p><ul><li>默认动画中包含此动画</li><li>动画类型：循环</li><li>动画起始/终止状态应与static_idle完全相同</li></ul><p><strong>walk_sideway</strong> 【横向】走路时的动画</p><ul><li>默认动画中包含此动画</li><li>动画类型：循环</li><li>动画起始/终止状态应与static_idle完全相同</li></ul><p><strong>walk_backward</strong> 【向后】走路时的动画</p><ul><li>默认动画中包含此动画</li><li>动画类型：循环</li><li>动画起始/终止状态应与static_idle完全相同</li></ul><h2 id="动画制作" tabindex="-1"><a class="header-anchor" href="#动画制作"><span>动画制作</span></a></h2><blockquote><p>下文仅为作者对blockbench软件制作动画的说明</p></blockquote><h3 id="一、通道设置" tabindex="-1"><a class="header-anchor" href="#一、通道设置"><span>一、通道设置</span></a></h3><p>将通道中的旋转、移动、缩放勾选</p><hr><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/753v.png" alt="channel" tabindex="0"><figcaption>channel</figcaption></figure><hr><h3 id="二、关键帧" tabindex="-1"><a class="header-anchor" href="#二、关键帧"><span>二、关键帧</span></a></h3><p><strong>添加关键帧</strong> 动画的原理便是一个物件从一个关键帧运动到另一个关键帧的过程 在blockbench软件中可以通过组下的+号添加关键帧，也可以使用旋转(R)，移动(V)，缩放(S)工具对物体的状态进行变化添加关键帧 <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/addkey.png" alt="addkey"><strong>关键帧类型</strong> 关键帧有1.线性 2.平滑 3.贝塞尔 4.步 四种类型。当您选中关键帧后可以在屏幕左下角进行更改 <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/keytype.png" alt="keytype"></p><hr><h3 id="三、曲线" tabindex="-1"><a class="header-anchor" href="#三、曲线"><span>三、曲线</span></a></h3><p>为了更精细的制作动画，可以在时间窗口切换曲线模式编辑 <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/line.png" alt="graph"></p><hr><h2 id="烘焙动画" tabindex="-1"><a class="header-anchor" href="#烘焙动画"><span>烘焙动画</span></a></h2><blockquote><p>如果你的动画带有贝塞尔，需要烘焙成线性动画以保证其在游戏内的正确渲染</p></blockquote><div class="hint-container warning"><p class="hint-container-title">注意</p><p>烘培动画仅应当在导出动画前进行，烘培后你目前的动画文件将被修改。<br> 如果你希望动画能够二次修改，<strong>务必将原始的动画文件进行备份</strong>，然后再进行烘培。</p></div><p><strong>需用插件：</strong> Bakery, https://github.com/JannisX11/blockbench-plugins/tree/master/plugins/bakery.js <strong>烘焙方法：</strong> 载入动画，选中贝塞尔曲线插值的关键帧，点击菜单栏 动画-烘焙动画 <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/bake.png" alt="bake"></p><hr><h2 id="导出动画" tabindex="-1"><a class="header-anchor" href="#导出动画"><span>导出动画</span></a></h2><blockquote><p>动画支持 gltf 与 Bedrock 两种动画格式</p></blockquote><h3 id="导出-gltf-动画格式-后缀名-gltf" tabindex="-1"><a class="header-anchor" href="#导出-gltf-动画格式-后缀名-gltf"><span>导出 gltf 动画格式（后缀名 .gltf）</span></a></h3><figure><img src="https://s1.3hov.com/lesraisins/i/2024/06/02/export_gltf.png" alt="gltf" tabindex="0"><figcaption>gltf</figcaption></figure><h3 id="导出-bedrock-动画格式-后缀名-animation-json" tabindex="-1"><a class="header-anchor" href="#导出-bedrock-动画格式-后缀名-animation-json"><span>导出 Bedrock 动画格式（后缀名 .animation.json）</span></a></h3><figure><img src="https://s1.3hov.com/lesraisins/i/2024/06/02/export_json.png" alt="json" tabindex="0"><figcaption>json</figcaption></figure><hr><h2 id="填写枪械效果文件" tabindex="-1"><a class="header-anchor" href="#填写枪械效果文件"><span>填写枪械效果文件</span></a></h2><blockquote><p>只有填写完枪械效果文件，才会在游戏内正确加载动画。</p><p>添加以下代码：</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 调用的动画名，会在包目录下的 animations 文件夹中寻找，不建议为空</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &quot;animation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tacz:ak47&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 指定使用缺省动画，可为空。如果上文指定的动画文件里缺少某个动画，如 draw 动画，则会从缺省动画拷贝。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 值可为 rifle、pistol</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &quot;use_default_animation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;rifle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,116)]))}const p=a(t,[["render",e],["__file","animation_group.html.vue"]]),d=JSON.parse('{"path":"/zh/gunpack/gun/animation/animation_group.html","title":"动画模型分组","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"分组","slug":"分组","link":"#分组","children":[{"level":3,"title":"分组建议","slug":"分组建议","link":"#分组建议","children":[]},{"level":3,"title":"分好组的手部模型下载","slug":"分好组的手部模型下载","link":"#分好组的手部模型下载","children":[]}]},{"level":2,"title":"枢轴点设置","slug":"枢轴点设置","link":"#枢轴点设置","children":[]},{"level":2,"title":"动画类型与规范","slug":"动画类型与规范","link":"#动画类型与规范","children":[{"level":3,"title":"必备动画","slug":"必备动画","link":"#必备动画","children":[]},{"level":3,"title":"可选动画类型","slug":"可选动画类型","link":"#可选动画类型","children":[]}]},{"level":2,"title":"动画制作","slug":"动画制作","link":"#动画制作","children":[{"level":3,"title":"一、通道设置","slug":"一、通道设置","link":"#一、通道设置","children":[]},{"level":3,"title":"二、关键帧","slug":"二、关键帧","link":"#二、关键帧","children":[]},{"level":3,"title":"三、曲线","slug":"三、曲线","link":"#三、曲线","children":[]}]},{"level":2,"title":"烘焙动画","slug":"烘焙动画","link":"#烘焙动画","children":[]},{"level":2,"title":"导出动画","slug":"导出动画","link":"#导出动画","children":[{"level":3,"title":"导出 gltf 动画格式（后缀名 .gltf）","slug":"导出-gltf-动画格式-后缀名-gltf","link":"#导出-gltf-动画格式-后缀名-gltf","children":[]},{"level":3,"title":"导出 Bedrock 动画格式（后缀名 .animation.json）","slug":"导出-bedrock-动画格式-后缀名-animation-json","link":"#导出-bedrock-动画格式-后缀名-animation-json","children":[]}]},{"level":2,"title":"填写枪械效果文件","slug":"填写枪械效果文件","link":"#填写枪械效果文件","children":[]}],"git":{},"readingTime":{"minutes":6.77,"words":2030},"filePathRelative":"zh/gunpack/gun/animation/animation_group.md","excerpt":"\\n<p>为方便动画制作与程序读取，在 <strong>开始制作动画之前</strong> 应提前将模型分好组。</p>\\n<p>本章节提供了一些模型分组建议</p>\\n<h2>分组</h2>\\n<h3>分组建议</h3>\\n<ul>\\n<li><strong>right_hand_and_gun</strong> 右手及枪械，可以自由命名。动画中大多数情况右手和枪械一起运动，因此可以置于同一分组便于 k 帧。</li>\\n<li><strong>left_hand_and_mag</strong> 左手及弹匣，可以自由命名。动画中换弹时左手和弹匣有很长时间需要一起运动，因此可以置于同一分组便于 k 帧。</li>\\n<li><strong>left_hand</strong> 左手组，可以自由命名。它应该套在 <code>lefthand_pos</code> (左手手臂定位组)的外层。更改它的枢纽点相对于手臂模型的位置，并用它 k 帧，更加方便。</li>\\n<li><strong>right_hand</strong> 与左手组同理。</li>\\n<li><strong>default</strong> 名字任意。枪械内所有不可运动的部件的集合（不参与动画的所有东西丢进去）</li>\\n<li>其他所有运动件和 <code>main</code> 组同级，如弹匣 <code>magazine</code> ，枪栓 <code>handle</code> 等，这些运动件可以自由命名。</li>\\n</ul>"}');export{p as comp,d as data};