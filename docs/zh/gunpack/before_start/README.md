# 在开始之前...
## 一些注意事项

### 关于文件格式
枪械包支持 `.zip` 格式的压缩包和 **文件夹** 两种形式。`.zip` 格式方便分发，**文件夹** 形式方便枪械制作者制作时进行调试，其文件结构完全相同。

### 关于命名空间/资源文件
资源文件指枪包中一切贴图、模型、声音等资产文件  
如果你熟悉 Minecraft 的资源包制作，你会发现枪包的文件结构与原版的资源包/数据包的有很多相似之处，但也有一些不同之处：

- 大部分情况下，枪包 **无法引用Minecraft原版/模组/资源包等以传统资源包形式加载的资源**。因此你应当将所有需要的东西放入枪包中
- 枪包之间的资源文件的引用仍可正常通过 **命名空间ID**（即`<命名空间>:<路径>`）的形式进行
- 此外，目前枪包的模型资源 **仅支持基岩版模型格式**

::: warning
与原版一致，枪包的命名空间ID **不支持** 使用 **中文文件名**    
更准确的说，你应该确保枪包内所有的文件和文件夹名 **仅包含小写英文字符、数字、下划线**  
:::

关于 **命名空间ID** 的详细说明，请参考: [Minecraft Wiki: 命名空间ID](https://zh.minecraft.wiki/w/%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4ID)

### 关于JSON文件
枪包的大部分配置文件都是以 JSON 格式存储的。  
介于JSON文件有较为严格的语法要求，如果你不熟悉JSON文件的书写规范，建议你先简单学习一下JSON的基本语法。

::: tip
我们强烈推荐使用 **VSCode** 或其他等支持 JSON 语法高亮的编辑器来编辑 JSON 文件，以避免因为书写错误导致的问题。
:::

## 枪械包参考文件结构
以下展示了 [tacz 默认枪包](https://github.com/MCModderAnchor/TACZ/tree/1.20.1/src/main/resources/assets/tacz/custom/tacz_default_gun/tacz) 的文件结构，你可以以此作为参考构建你的枪包  
```
根目录
└─── tac   # 枪械包的命名空间，命名空间由此文件夹的名称决定
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
     │    ├─── ak47.animation.json  # Bedrock 动画文件
     │    └─── m16.gltf             # gltf 文件
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
     └─── pack.json   # 枪包描述文件

```
