import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as n,d as t,e,a as r,r as h,o as d,f as o}from"./app-Bi6i2abl.js";const p={},m={class:"table-of-contents"};function g(u,i){const a=h("router-link");return d(),l("div",null,[i[15]||(i[15]=n("h1",{id:"animation-production-standards",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#animation-production-standards"},[n("span",null,"Animation Production Standards")])],-1)),i[16]||(i[16]=n("p",null,"This tutorial is authored by Lesraisins-伯爵",-1)),n("nav",m,[n("ul",null,[n("li",null,[t(a,{to:"#grouping"},{default:e(()=>i[0]||(i[0]=[o("Grouping")])),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#download-grouped-hand-models"},{default:e(()=>i[1]||(i[1]=[o("Download Grouped Hand Models")])),_:1})])])]),n("li",null,[t(a,{to:"#pivot-point-settings"},{default:e(()=>i[2]||(i[2]=[o("Pivot Point Settings")])),_:1})]),n("li",null,[t(a,{to:"#animation-types-and-standards"},{default:e(()=>i[3]||(i[3]=[o("Animation Types and Standards")])),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#essential-animations"},{default:e(()=>i[4]||(i[4]=[o("Essential Animations")])),_:1})]),n("li",null,[t(a,{to:"#optional-animation-types"},{default:e(()=>i[5]||(i[5]=[o("Optional Animation Types")])),_:1})])])]),n("li",null,[t(a,{to:"#animation-production"},{default:e(()=>i[6]||(i[6]=[o("Animation Production")])),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#i-channel-settings"},{default:e(()=>i[7]||(i[7]=[o("I. Channel Settings")])),_:1})]),n("li",null,[t(a,{to:"#ii-keyframes"},{default:e(()=>i[8]||(i[8]=[o("II. Keyframes")])),_:1})]),n("li",null,[t(a,{to:"#iii-curves"},{default:e(()=>i[9]||(i[9]=[o("III. Curves")])),_:1})])])]),n("li",null,[t(a,{to:"#baking-animation"},{default:e(()=>i[10]||(i[10]=[o("Baking Animation")])),_:1})]),n("li",null,[t(a,{to:"#exporting-animation"},{default:e(()=>i[11]||(i[11]=[o("Exporting Animation")])),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#exporting-gltf-animation-format-with-suffix-gltf"},{default:e(()=>i[12]||(i[12]=[o("Exporting glTF Animation Format (with suffix '.gltf')")])),_:1})]),n("li",null,[t(a,{to:"#exporting-bedrock-animation-format-with-suffix-animation-json"},{default:e(()=>i[13]||(i[13]=[o("Exporting Bedrock Animation Format (with suffix '.animation.json')")])),_:1})])])]),n("li",null,[t(a,{to:"#filling-in-the-gun-display-file"},{default:e(()=>i[14]||(i[14]=[o("Filling in the Gun Display File")])),_:1})])])]),i[17]||(i[17]=r(`<h2 id="grouping" tabindex="-1"><a class="header-anchor" href="#grouping"><span>Grouping</span></a></h2><blockquote><p>To facilitate animation production and program reading, the model should be grouped in advance before starting to create animations. The following are model grouping suggestions.</p></blockquote><hr><p><strong>Mandatory Requirements</strong><br> No matter how you group, the following group names cannot be changed!</p><ul><li>root: Root group, everything except camera animation groups and various position groups should be under the root group. If there is no root group, the default animation will not work.</li><li>magazine: Magazine group, the program will automatically recognize the contents under the magazine group, including the default magazine and extended magazines of levels 1-3. If your gun does not allow extensions, you can omit the extended magazine groups. <strong>Note: If the gun allows extensions, regardless of whether the three levels of extended magazine models are the same, you must place three extended magazine groups. If the models are the same, you need to copy them.</strong><ul><li>Default magazine: mag_standard</li><li>Level 1 extended magazine: mag_extended_1</li><li>Level 2 extended magazine: mag_extended_2</li><li>Level 3 extended magazine: mag_extended_3</li></ul></li><li>additional_magazine: Additional magazine group. If you want to create animations where an old magazine is replaced by a new one (two magazines appear on the screen simultaneously), create this group with the same pivot point as the magazine group. The program will recognize this group and render the corresponding magazine additionally. <strong>Note: Ensure this group is empty when exporting the animation.</strong></li><li>constraint: Constraint group, used when creating constraint animations.</li><li>camera: Camera animation group. To create camera animations, add a camera under this group using the camera plugin. When keyframing, do it for the camera group.</li></ul><hr><p><strong>Grouping Suggestions</strong></p><ul><li>right_hand_and_gun: Right hand and gun, can be freely named. In most animations, the right hand and gun move together, so they can be placed in the same group for easier keyframing.</li><li>left_hand_and_mag: Left hand and magazine, can be freely named. During reloading, the left hand and magazine often move together for a long time, so they can be placed in the same group for easier keyframing.</li><li>left_hand: Left hand group, can be freely named. It should be nested outside the lefthand_pos (left hand arm position group). Change its pivot point relative to the arm model and use it for keyframing for convenience.</li><li>right_hand: Same as the left hand group.</li><li>default: Any name. A collection of all non-movable parts of the gun (everything not involved in the animation).</li><li>All other moving parts are on the same level as the main group, such as the magazine, handle, etc., which can be freely named.</li></ul><hr><h3 id="download-grouped-hand-models" tabindex="-1"><a class="header-anchor" href="#download-grouped-hand-models"><span>Download Grouped Hand Models</span></a></h3><p><a href="https://pan.quark.cn/s/03b2c15e7403" target="_blank" rel="noopener noreferrer">Quark Netdisk</a><br><a href="https://pan.baidu.com/s/1wgj3tFTzPd2ZOaRbkgSaYw?pwd=17e0" target="_blank" rel="noopener noreferrer">Baidu Netdisk</a><br><a href="https://drive.google.com/drive/folders/1C8CsGzRCsaQfA5ako51ljNKG5VOER1lF?usp=drive_link" target="_blank" rel="noopener noreferrer">Google Drive</a></p><hr><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/fenzu.png" alt="group" tabindex="0"><figcaption>group</figcaption></figure><hr><h2 id="pivot-point-settings" tabindex="-1"><a class="header-anchor" href="#pivot-point-settings"><span>Pivot Point Settings</span></a></h2><blockquote><p>Pivot point settings are for convenience in animation production. Except for the <strong>lefthand_pos</strong> and <strong>righthand_pos</strong> groups, the pivot points of other groups should be set in a comfortable way. The following content is for reference suggestions.</p></blockquote><p><strong>Pivot Point:</strong> The point around which a part/model will rotate.</p><p><strong>Content That Needs Pivot Points Set:</strong> Generally, all groups involved in keyframing need pivot points. If you want to be lazy, you can only set pivot points for rotating groups.</p><p><strong>How to Set Pivot Points:</strong></p><ul><li>Shortcut key: P</li><li>Round button in the toolbar</li><li>Center the pivot point: next to the pivot point value on the right side</li></ul><p><strong>Recommended Pivot Point Locations:</strong> This content is only a suggestion by the editor and has no authority. Ultimately, it should be based on what feels comfortable.</p><ul><li>right_hand_and_gun: Place it in the palm of the right hand</li><li>left_hand &amp; right_hand groups: Place them in the palms</li><li>Especially, <strong>it is recommended to place the pivot point of the root group at the rear grip of the gun model</strong> for the best visual effect of the default animation.</li></ul><hr><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/pivot.png" alt="pivot" tabindex="0"><figcaption>pivot</figcaption></figure><hr><h2 id="animation-types-and-standards" tabindex="-1"><a class="header-anchor" href="#animation-types-and-standards"><span>Animation Types and Standards</span></a></h2><blockquote><p>For the program to read correctly, please strictly follow the following content for animation naming!</p></blockquote><h3 id="essential-animations" tabindex="-1"><a class="header-anchor" href="#essential-animations"><span>Essential Animations</span></a></h3><blockquote><p>The following are indispensable animation types. If any are missing, serious visual issues may occur.</p></blockquote><h4 id="static-idle" tabindex="-1"><a class="header-anchor" href="#static-idle"><span>static_idle</span></a></h4><p>Default holding animation. This animation only needs to set the positions of the left and right hands, the parameters of the constraint group, and the special position groups.</p><ul><li>Animation type: Static animation</li></ul><hr><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/static_idle.png" alt="static_idle" tabindex="0"><figcaption>static_idle</figcaption></figure><hr><h4 id="reload-tactical" tabindex="-1"><a class="header-anchor" href="#reload-tactical"><span>reload_tactical</span></a></h4><p>Tactical reload animation, the tactical reload method when there is still ammunition in the gun. If your gun does not differentiate between tactical reload and empty reload, you can copy this animation to the empty reload.</p><ul><li>The start and end states of the animation should be exactly the same as static_idle</li></ul><h4 id="reload-empty" tabindex="-1"><a class="header-anchor" href="#reload-empty"><span>reload_empty</span></a></h4><p>Empty reload animation, the reload animation when ammunition is exhausted.</p><ul><li>The start and end states of the animation should be exactly the same as static_idle</li></ul><h4 id="inspect" tabindex="-1"><a class="header-anchor" href="#inspect"><span>inspect</span></a></h4><p>Inspection animation: Weapon inspection animation.</p><ul><li>The start and end states of the animation should be exactly the same as static_idle</li></ul><hr><h4 id="shoot" tabindex="-1"><a class="header-anchor" href="#shoot"><span>shoot</span></a></h4><p>Shooting animation, the visual recoil animation when the weapon fires.</p><ul><li>The start and end states of the animation should be exactly the same as static_idle</li><li>Animation type: Mixed. This animation will be mixed with other types of animations.</li><li>Note: Because it is a mixed animation, it can overlay with others, so hand keyframes are not needed.</li></ul><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/shoot.png" alt="shoot" tabindex="0"><figcaption>shoot</figcaption></figure><hr><h3 id="optional-animation-types" tabindex="-1"><a class="header-anchor" href="#optional-animation-types"><span>Optional Animation Types</span></a></h3><blockquote><p>Optional animations are animations that are not needed for all guns. You can choose whether to create them based on your needs.</p></blockquote><h4 id="static-bolt-caught" tabindex="-1"><a class="header-anchor" href="#static-bolt-caught"><span>static_bolt_caught</span></a></h4><p>Empty chamber animation, the static animation when the weapon is in an empty chamber state.</p><ul><li>Animation type: Static animation</li></ul><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/sbc.png" alt="sbc" tabindex="0"><figcaption>sbc</figcaption></figure><hr><h4 id="draw" tabindex="-1"><a class="header-anchor" href="#draw"><span>draw</span></a></h4><p>Draw animation, the animation played when the player takes out the weapon.</p><ul><li>This animation is included in the default animations.</li><li>The end state of the animation should be exactly the same as static_idle</li></ul><hr><h4 id="put-away" tabindex="-1"><a class="header-anchor" href="#put-away"><span>put_away</span></a></h4><p>Holster animation, the animation played when the player switches inventory slots or discards the weapon.</p><ul><li>This animation is included in the default animations.</li><li>The start state of the animation should be exactly the same as static_idle</li></ul><hr><h4 id="inspect-empty" tabindex="-1"><a class="header-anchor" href="#inspect-empty"><span>inspect_empty</span></a></h4><p>Empty chamber inspection animation, the inspection animation played when the weapon is in an empty chamber state. If the inspect_empty animation is missing, inspection cannot be triggered when the chamber is empty.</p><ul><li>The start and end states of the animation should be exactly the same as static_idle</li></ul><hr><h4 id="bolt" tabindex="-1"><a class="header-anchor" href="#bolt"><span>bolt</span></a></h4><p>Bolt action animation, the animation played after firing a manual weapon.</p><ul><li>The start and end states of the animation should be exactly the same as static_idle</li><li>Constraint group animation: After creating a constraint group animation, the gun will always move around the constraint point during bolt action.</li></ul><hr><h4 id="movement-animations" tabindex="-1"><a class="header-anchor" href="#movement-animations"><span>Movement Animations</span></a></h4><hr><h5 id="running-animations" tabindex="-1"><a class="header-anchor" href="#running-animations"><span>Running Animations</span></a></h5><p><strong>run_start</strong> The animation when entering the running state.</p><ul><li>This animation is included in the default animations.</li><li>The start state of the animation should be exactly the same as static_idle</li></ul><p><strong>run</strong> The running animation.</p><ul><li>This animation is included in the default animations.</li><li>Animation type: Loop</li><li>The start/end states of the animation should be the same as run_start</li></ul><p><strong>run_hold</strong> The jumping animation while running.</p><ul><li>This animation is included in the default animations.</li><li>Animation type: Static</li></ul><p><strong>run_end</strong> The animation when exiting the running state.</p><ul><li>This animation is included in the default animations.</li><li>The start state of the animation should be the same as run</li><li>The end state of the animation should be exactly the same as static_idle</li></ul><hr><h5 id="walking-animations" tabindex="-1"><a class="header-anchor" href="#walking-animations"><span>Walking Animations</span></a></h5><p><strong>walk_aiming</strong> The aiming animation while walking.</p><ul><li>This animation is included in the default animations.</li><li>Animation type: Loop</li><li>The start/end states of the animation should be exactly the same as static_idle</li></ul><p><strong>walk_forward</strong> The animation while walking forward.</p><ul><li>This animation is included in the default animations.</li><li>Animation type: Loop</li><li>The start/end states of the animation should be exactly the same as static_idle</li></ul><p><strong>walk_sideway</strong> The animation while walking sideways.</p><ul><li>This animation is included in the default animations.</li><li>Animation type: Loop</li><li>The start/end states of the animation should be exactly the same as static_idle</li></ul><p><strong>walk_backward</strong> The animation while walking backward.</p><ul><li>This animation is included in the default animations.</li><li>Animation type: Loop</li><li>The start/end states of the animation should be exactly the same as static_idle</li></ul><h2 id="animation-production" tabindex="-1"><a class="header-anchor" href="#animation-production"><span>Animation Production</span></a></h2><blockquote><p>The following is the author&#39;s explanation of creating animations in Blockbench.</p></blockquote><h3 id="i-channel-settings" tabindex="-1"><a class="header-anchor" href="#i-channel-settings"><span>I. Channel Settings</span></a></h3><p>Check the rotation, movement, and scaling in the channels.</p><hr><figure><img src="https://s1.3hov.com/lesraisins/i/2024/05/07/753v.png" alt="channel" tabindex="0"><figcaption>channel</figcaption></figure><hr><h3 id="ii-keyframes" tabindex="-1"><a class="header-anchor" href="#ii-keyframes"><span>II. Keyframes</span></a></h3><p><strong>Adding Keyframes</strong> The principle of animation is the process of an object moving from one keyframe to another. In Blockbench, you can add keyframes through the + sign under the group, or you can use the rotation (R), movement (V), and scaling (S) tools to change the state of the object and add keyframes. <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/addkey.png" alt="addkey"></p><p><strong>Types of Keyframes</strong> There are four types of keyframes: 1. Linear 2. Smooth 3. Bezier 4. Step. After selecting a keyframe, you can change it in the lower left corner of the screen. <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/keytype.png" alt="keytype"></p><hr><h3 id="iii-curves" tabindex="-1"><a class="header-anchor" href="#iii-curves"><span>III. Curves</span></a></h3><p>To create more detailed animations, you can switch to curve mode in the timeline window for editing. <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/line.png" alt="graph"></p><hr><h2 id="baking-animation" tabindex="-1"><a class="header-anchor" href="#baking-animation"><span>Baking Animation</span></a></h2><blockquote><p>If your animation has Bezier curves, you need to bake it into linear animation to ensure its correct rendering in the game.</p></blockquote><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Baking animation should only be done before exporting the animation. If you want to modify the animation later, you should copy and save the original animation file before baking.</p></div><p><strong>Required Plugin:</strong> Bakery, https://github.com/JannisX11/blockbench-plugins/tree/master/plugins/bakery.js</p><p><strong>Baking Method:</strong> Load the animation, select the keyframes with Bezier curve interpolation, and click Animation - Bake Animation in the menu bar. <img src="https://s1.3hov.com/lesraisins/i/2024/05/07/bake.png" alt="bake"></p><hr><h2 id="exporting-animation" tabindex="-1"><a class="header-anchor" href="#exporting-animation"><span>Exporting Animation</span></a></h2><blockquote><p>The animations support glTF and Bedrock animation formats.</p></blockquote><h3 id="exporting-gltf-animation-format-with-suffix-gltf" tabindex="-1"><a class="header-anchor" href="#exporting-gltf-animation-format-with-suffix-gltf"><span>Exporting glTF Animation Format (with suffix &#39;.gltf&#39;)</span></a></h3><figure><img src="https://s1.3hov.com/lesraisins/i/2024/06/02/export_gltf.png" alt="gltf" tabindex="0"><figcaption>gltf</figcaption></figure><h3 id="exporting-bedrock-animation-format-with-suffix-animation-json" tabindex="-1"><a class="header-anchor" href="#exporting-bedrock-animation-format-with-suffix-animation-json"><span>Exporting Bedrock Animation Format (with suffix &#39;.animation.json&#39;)</span></a></h3><figure><img src="https://s1.3hov.com/lesraisins/i/2024/06/02/export_json.png" alt="json" tabindex="0"><figcaption>json</figcaption></figure><hr><h2 id="filling-in-the-gun-display-file" tabindex="-1"><a class="header-anchor" href="#filling-in-the-gun-display-file"><span>Filling in the Gun Display File</span></a></h2><blockquote><p>The animation will only load correctly in the game after filling in the gun display file. Add the following:</p></blockquote><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // Name of the animation to be called, which does not contain suffix, will look for it in the &#39;animations&#39; folder in the pack directory. </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &quot;animation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tacz:ak47&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // Specify the use of default animations, can be empty. If any animation is missing in the file specified above, such as the draw animation, it will be copied from the default animations.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // The value can be &#39;rifle&#39; or &#39;pistol&#39;.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  &quot;use_default_animation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;rifle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,124))])}const y=s(p,[["render",g],["__file","index.html.vue"]]),b=JSON.parse(`{"path":"/gunpack/animation/","title":"Animation Production Standards","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Grouping","slug":"grouping","link":"#grouping","children":[{"level":3,"title":"Download Grouped Hand Models","slug":"download-grouped-hand-models","link":"#download-grouped-hand-models","children":[]}]},{"level":2,"title":"Pivot Point Settings","slug":"pivot-point-settings","link":"#pivot-point-settings","children":[]},{"level":2,"title":"Animation Types and Standards","slug":"animation-types-and-standards","link":"#animation-types-and-standards","children":[{"level":3,"title":"Essential Animations","slug":"essential-animations","link":"#essential-animations","children":[]},{"level":3,"title":"Optional Animation Types","slug":"optional-animation-types","link":"#optional-animation-types","children":[]}]},{"level":2,"title":"Animation Production","slug":"animation-production","link":"#animation-production","children":[{"level":3,"title":"I. Channel Settings","slug":"i-channel-settings","link":"#i-channel-settings","children":[]},{"level":3,"title":"II. Keyframes","slug":"ii-keyframes","link":"#ii-keyframes","children":[]},{"level":3,"title":"III. Curves","slug":"iii-curves","link":"#iii-curves","children":[]}]},{"level":2,"title":"Baking Animation","slug":"baking-animation","link":"#baking-animation","children":[]},{"level":2,"title":"Exporting Animation","slug":"exporting-animation","link":"#exporting-animation","children":[{"level":3,"title":"Exporting glTF Animation Format (with suffix '.gltf')","slug":"exporting-gltf-animation-format-with-suffix-gltf","link":"#exporting-gltf-animation-format-with-suffix-gltf","children":[]},{"level":3,"title":"Exporting Bedrock Animation Format (with suffix '.animation.json')","slug":"exporting-bedrock-animation-format-with-suffix-animation-json","link":"#exporting-bedrock-animation-format-with-suffix-animation-json","children":[]}]},{"level":2,"title":"Filling in the Gun Display File","slug":"filling-in-the-gun-display-file","link":"#filling-in-the-gun-display-file","children":[]}],"git":{},"readingTime":{"minutes":5.59,"words":1676},"filePathRelative":"gunpack/animation/README.md","excerpt":"\\n<p>This tutorial is authored by Lesraisins-伯爵</p>\\n\\n<h2>Grouping</h2>\\n<blockquote>\\n<p>To facilitate animation production and program reading, the model should be grouped in advance before starting to create animations. The following are model grouping suggestions.</p>\\n</blockquote>\\n<hr>\\n<p><strong>Mandatory Requirements</strong><br>\\nNo matter how you group, the following group names cannot be changed!</p>"}`);export{y as comp,b as data};