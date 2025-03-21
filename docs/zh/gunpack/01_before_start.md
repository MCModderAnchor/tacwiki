---
order: 1
---
# 在开始之前...
:::caution
新版wiki仍在建设中，部分内容可能不完整或有错误
:::

## 一些注意事项

### 关于文件格式
枪械包支持 `.zip` 格式的压缩包和 **文件夹** 两种形式。`.zip` 格式方便分发，**文件夹** 形式方便枪械制作者制作时进行调试，其文件结构完全相同。

:::tip
tacz的枪包格式在1.1.4（版本号暂定）中发生了变化，之前的枪包格式在新的mod版本中不再被支持
如果你有一个旧版本的枪包，请参考 [章节：从旧版本迁移](./-2_convert_from_legacy) 进行升级
:::

:::warning
如果你希望查看旧版本的枪包制作教程，请移步 [旧版文档](./legacy/before_start/)

注意，旧版文档已不再维护，可能存在 **内容错误/过时、排版混乱** 等问题，仅供参考和留档
:::

### 关于命名空间
**命名空间ID**（资源路径） 是一个原版Minecraft概念，它是一种用来指明和标识游戏中特定对象而避免潜在的歧义和冲突的方式

命名空间ID可以用一个用冒号 `:` 分隔的字符串表示，其中前半部分是 **命名空间**，后半部分是 **路径**  
例如 `minecraft:apple` 中，`minecraft` 是 **命名空间**，`apple` 是 **路径**

游戏内部的许多对象，比如物品id、方块id等都是以命名空间ID的形式表示的，就像是上文提到的`minecraft:apple`  
在资源包和数据包中，文件的路径和文件名也可以映射为一个特定的 **命名空间ID**，这样可以方便地引用这些文件内容  
关于这一点，具体使用方法会在用到的时候详细说明  

制作一个新的枪包时，你需要为你的枪包起一个全新的 **命名空间**，并且你应该确保它足够独特而不会轻易与其他人冲突

::: caution
与原版一致，枪包的命名空间ID **不支持** 使用 **中文文件名**    
更准确的说，你应该确保枪包内所有的文件和文件夹名 **仅包含小写英文字符、数字、下划线**
:::

:::warning
某些模组（如**Optifine**）在安装时会 **强行去除原版的检查** 或者 **在一定程度上自动纠正你的错误**，
但是依赖这些行为是 **十分不明智的**，因为你无法要求你的玩家安装这些模组，这可能会导致你的枪包在某些环境下无法正常工作
:::

关于 **命名空间ID** 的详细说明，请参考: [Minecraft Wiki: 命名空间ID](https://zh.minecraft.wiki/w/%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4ID)

### 关于资源文件
资源文件指枪包中一切贴图、模型、声音等资产文件  
在目前的版本中，枪包的相当于一个原版资源包和数据包的结合体，这意味着枪包可以使用原版资源包和数据包的全部功能  

- 枪包 **可以引用Minecraft原版/模组/资源包等以传统资源包形式加载的部分资源**，比如贴图和语言文件，但是**音效**不在此列
- 目前枪包的模型资源 **仅支持基岩版模型格式**

如果你熟悉原版资源包和数据包的结构，那么你应该能够很快上手枪包的制作

::: caution
请尽量避免放置冗余文件，**尤其是格式错误的冗余文件**，比如错误命名的**贴图、模型**，或是为了方便编写放置的各类**模板文件**，比如一个**残缺的配方**

游戏无法猜测你是否需要这些文件，它们很可能因为意外加载而发生问题

**这也往往是部分枪包不解压就无法使用的原因之一**
:::

### 关于JSON文件
枪包的大部分配置文件都是以 JSON 格式存储的。  
介于JSON文件有较为严格的语法要求，如果你不熟悉JSON文件的书写规范，建议你先简单学习一下JSON的基本语法。

::: tip
我们强烈推荐使用 **VSCode** 或其他等支持 JSON 语法高亮的编辑器来编辑 JSON 文件，以避免因为书写错误导致的问题。
:::

许多枪包配置文件带有双斜杠`//`开头的行，那些是注释，游戏读取文件时会自动忽略这些行  

### 关于贴图
::: caution
你可以自行决定贴图的分类和路径，但是不要把大量高清贴图塞到`textures/item/`或是`textures/block/`及其子目录下！
:::

这些路径是原版atlas图集合并的源目录，它们会自动合并到图集中，如果你塞了太多高清贴图，游戏可能因为超出图集大小上限而发生**资源包重载错误**！

## 枪械包参考文件结构
以下是目前版本的枪械包的参考文件结构，你可以参考这个结构来组织你的枪械包文件
```
└─tacz_default_gun  # 根目录，也即压缩包的文件名
    ├─assets        # 客户端资产，相当于一个资源包
    │  └─tacz       # 命名空间，此目录下的所有资产命名空间都将是 “tacz”
    │      ├─animations # 动画文件夹
    │      │  ├─ak47.animation.json # Bedrock 动画文件
    │      │  └─m16.gltf            # gltf 文件
    │      ├─display    # 客户端数据文件夹，存放一些显示设置
    │      │  ├─ammo        # 弹药
    │      │  │  ├─762x39_display.json
    │      │  │  └─9mm_display.json       
    │      │  ├─attachments # 配件
    │      │  │  ├─sro_dot_display.json
    │      │  │  └─8x_display.json
    │      │  ├─blocks      # 自定义合成台
    │      │  │  └─gun_smith_table.json
    │      │  └─guns        # 枪械
    │      │     ├─ak47_display.json
    │      │     └─m16_display.json
    │      ├─geo_models # 模型文件夹，存放所有的基岩版模型文件
    │      │  ├─ammo
    │      │  ├─ammo_entity
    │      │  ├─attachment
    │      │  │  └─lod
    │      │  ├─block
    │      │  ├─gun
    │      │  │  └─lod
    │      │  └─shell
    │      ├─lang    # 语言文件夹
    │      ├─player_animator    # 玩家第三人称动画
    │      ├─scripts            # 客户端lua脚本，比如状态机
    │      ├─tacz_sounds        # tacz的音效，注意不要放到原版的sounds里了
    │      │  ├─aa12
    │      │  ├─ak47
    │      │  ├─attachments
    │      │  └─...
    │      ├─textures   # 贴图文件夹
    │      │   ├─ammo
    │      │   │  ├─slot
    │      │   │  └─uv
    │      │   ├─ammo_entity
    │      │   ├─attachment
    │      │   │  ├─lod
    │      │   │  ├─slot
    │      │   │  └─uv
    │      │   ├─block
    │      │   │  └─uv
    │      │   ├─crosshair
    │      │   ├─flash
    │      │   ├─gun
    │      │   │  ├─hud
    │      │   │  ├─lod
    │      │   │  ├─slot
    │      │   │  └─uv
    │      │   └─shell
    │      └─gunpack_info.json # 枪械包信息文件，用来描述枪械包的基本信息，主要用于在枪械工作台里展示
    ├─data  # 服务端数据，相当于一个数据包
    │   └─tacz  # 命名空间，此目录下的所有资产命名空间都将是 “tacz”
    │       ├─data  # 数据文件夹，用来存放服务端配置，比如枪械伤害等
    │       │  ├─attachments
    │       │  ├─blocks
    │       │  └─guns
    │       ├─index # 定义文件夹，用来定义一个新的枪械、配件等，物品的id将与文件名一样
    │       │  ├─ammo
    │       │  ├─attachments
    │       │  ├─blocks
    │       │  └─guns
    │       ├─recipes # 配方文件夹，存放各类合成表
    │       │  ├─ammo
    │       │  ├─attachments
    │       │  └─gun
    │       └─tacz_tags # 标签文件夹，目前用来限制配件可以安装到哪些枪械上
    │           └─attachments
    │               └─allow_attachments
    └─gunpack.meta.json # 枪械包元数据文件，用来标识这是一个枪包，也用来放置前置信息
```
