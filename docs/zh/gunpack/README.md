# 枪械包构建
::: tip
- 枪械包支持 zip 压缩格式和文件夹两种形式。zip 格式方便分发，文件夹形式方便枪械制作者制作使用。其文件结构相同。
- 需要注意的是，大部分情况下，枪包无法引用 MC 原版资源和模组资源。因此你应当将所有需要的东西放入枪包中。
- 枪包支持的模型格式目前仅为基岩版模型。
- 枪包之间引用资源文件，可以通过 '命名空间:资源路径' 的方式进行。
::: 
### 枪包详细构建教程
- [创建第一个枪包](/zh/gunpack/first_gunpack/)
- [创建并使用语言文件](/zh/gunpack/language/)
- [创建第一把枪](/zh/gunpack/first_gun/)
- [调整枪械模型定位组](/zh/gunpack/gun_positioning/)
- [创建 HUD Icon](/zh/gunpack/hud_icon/)
- [添加枪械音效](/zh/gunpack/gun_sound/)
- [额外伤害](/zh/gunpack/gun_extra_damage/)
- [创建弹药](/zh/gunpack/ammo/)
- [抛壳](/zh/gunpack/shell_ejection/)
- [枪口火焰](/zh/gunpack/muzzle_flash/)
- [枪械模型文字渲染](/zh/gunpack/render_text/)
- [手臂定位组](/zh/gunpack/hand_pos/)
- [枪械动画](/zh/gunpack/animation/)
- [动画约束](/zh/gunpack/ica/)
- [枪机类型](/zh/gunpack/bolt_type/)
- [创建配件](/zh/gunpack/attachment/)
- [枪械改装支持](/zh/gunpack/gun_refit/)
- [低精度模型](/zh/gunpack/lod/)
- [配方](/zh/gunpack/recipe/)
### 枪械包参考文件结构
[tac 默认枪包](https://github.com/MCModderAnchor/TACZ/tree/1.20.1/src/main/resources/assets/tacz/custom/tacz_default_gun/tacz) 采用了这个文件结构。
```
根目录
└─── tac   # 枪械包的命名空间，命名空间由此文件夹决定
     ├─── ammo
     │    ├─── display   # 弹药的客户端数据
     │    │    ├─── 762x39_display.json
     │    │    └─── 9mm_display.json
     │    │
     │    └─── index   # 弹药定义文件，弹药 id 由其文件名决定
     │         ├─── 762x39.json
     │         └─── 9mm.json
     │
     ├─── animations   # 动画文件夹
     │    ├─── ak47.gltf  # gltf 动画文件
     │    └─── m16.gltf
     │
     ├─── attachments
     │    ├─── data   # 配件参数
     │    │    ├─── sro_dot_data.json
     │    │    └─── 8x_data.json
     │    │
     │    ├─── display   # 配件的客户端数据
     │    │    ├─── sro_dot_display.json
     │    │    └─── 8x_display.json
     │    │
     │    └─── index   # 配件定义文件，配件 id 由其文件名决定
     │         ├─── sro_dot.json
     │         └─── 8x.json
     │
     ├─── guns
     │    ├─── data   # 枪械参数
     │    │    ├─── ak47_data.json
     │    │    └─── m16_data.json
     │    │
     │    ├─── display   # 枪械的客户端数据
     │    │    ├─── ak47_display.json
     │    │    └─── m16_display.json
     │    │
     │    └─── index   # 枪械定义文件，枪械 id 由其文件名决定
     │         ├─── ak47.json
     │         └─── m16.json
     │
     ├─── lang   # 语言文件
     │    ├─── en_us.json
     │    └─── zh_cn.json
     │
     ├─── models   # 模型文件，此目录下的子目录分类仅为推荐，你可以自行决定如何分类。
     │    ├─── ammo   # 弹药物品模型，在默认枪包里是一个弹药盒，用于在制造台显示。
     │    │    ├─── 762x39_geo.json
     │    │    └─── 9mm_geo.json
     │    │
     │    ├─── ammo_entity   # 子弹实体模型
     │    │    └─── rpg_rocket.json
     │    │
     │    ├─── attachment   # 配件模型
     │    │    ├─── sro_dot_geo.json
     │    │    └─── 8x_geo.json
     │    │
     │    ├─── gun   # 枪械模型
     │    │    ├─── ak47_geo.json
     │    │    └─── m16_geo.json
     │    │
     │    └─── shell   # 枪械模型
     │         ├─── 762x39_shell.json
     │         └─── 9mm_shell.json
     │
     ├─── recipes   # 配方文件。此目录下的子目录分类仅为推荐，你可以自行决定如何分类。
     │    ├─── ammo   # 弹药配方
     │    │    ├─── 762x39.json
     │    │    └─── 9mm.json
     │    │
     │    └─── gun   # 枪械配方
     │         ├─── ai_awp.json
     │         └─── ak47.json
     │
     ├─── sounds   # 枪械声音文件。此目录下的子目录分类仅为推荐。声音格式仅支持 ogg。
     │    ├─── ak47
     │    │    ├─── ak47_draw.ogg
     │    │    └─── ak47_shoot.ogg
     │    │
     │    └─── ai_awp
     │         ├─── ai_awp_draw.ogg
     │         └─── ai_awp_shoot.ogg
     │
     ├─── textures   # 材质文件。此目录下的子目录分类仅为推荐，你可以自行决定如何分类。
     │    ├─── ammo
     │    │    ├─── slot   # 子弹在背包、快捷栏等容器的槽位显示的贴图
     │    │    │    ├─── 762x39.png
     │    │    │    └─── 9mm.png
     │    │    │
     │    │    └─── uv   # 子弹模型贴图
     │    │         ├─── 762x39.png
     │    │         └─── 9mm.png
     │    │
     │    ├─── ammo_entity   # 子弹实体模型贴图
     │    │    └─── rpg_rocket.png
     │    │
     │    ├─── attachment
     │    │    ├─── slot   # 配件在背包、快捷栏等容器的槽位显示的贴图
     │    │    │    ├─── sro_dot.png
     │    │    │    └─── 8x.png
     │    │    │
     │    │    └─── uv   # 配件模型贴图
     │    │         ├─── sro_dot.png
     │    │         └─── 8x.png
     │    │
     │    ├─── flash   # 枪口火光贴图
     │    │    └─── common_muzzle_flash.png
     │    │
     │    ├─── gun
     │    │    ├─── hud   # 用于 HUD 和 GUI 渲染的 2D 贴图
     │    │    │    ├─── ak47.png
     │    │    │    └─── m16.png
     │    │    │
     │    │    ├─── lod   # 枪械低精度模型贴图
     │    │    │    ├─── ak47.png
     │    │    │    └─── m16.png
     │    │    │
     │    │    ├─── slot   # 枪械在背包、快捷栏等容器的槽位显示的贴图
     │    │    │    ├─── ak47.png
     │    │    │    └─── m16.png
     │    │    │
     │    │    └─── uv   # 枪械模型贴图
     │    │         ├─── ak47.png
     │    │         └─── m16.png
     │    │
     │    └─── shell   # 弹壳模型贴图
     │         ├─── 9mm_shell.png
     │         └─── 762x39_shell.png
     │
     ├─── pack.json   # 枪包描述文件
     │
     └─── tab.json   # 自定义创造栏标签页文件
```
