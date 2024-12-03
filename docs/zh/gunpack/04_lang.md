---
order: 4
---
# 使用语言文件

**语言文件** 是 Minecraft 中用于存储文本的文件，用于将游戏中的文本翻译成不同的语言。在枪包中，我们可以使用语言文件来定义各种名称和描述文本。  

要使用**语言文件**，我们需要在枪包命名空间文件夹下建立文件夹 `lang/` ，并新建文件对应语言的语言文件 `<语言代码>.json`

以英语为例，我们新建了一个名为`en_us.json`的文件，此时，你的枪包文件结构应看起来像这样：   
```
└─tutorial_gun_pack
    ├─assets
    │  └─tutorial
    │     ├─lang
    │     │  └─en_us.json       # 英语语言文件
    │     └─gunpack_info.json   # 枪包描述文件
    ├─data
    │  └─tutorial
    └─gunpack.meta.json
```

Minecraft 的默认语言为英语，即对应文件 `en_us.json`。  

同时，如果当前使用的语言中某个词条不存在，将从 `en_us.json` 中寻找词条代替，如果连 `en_us.json` 中也没有，将显示原始的key。  

:::tip
作为一个中文母语使用者，我们至少应该需要提供 `en_us.json`（英语） 和 `zh_cn.json`（简体中文） 两个语言文件  
:::
:::caution
诚然，事实上我们的确可以直接向 `en_us.json` 中添加中文译文，但是这样做是非常不规范的，我们也强烈不推荐这么做
:::

你可以在 [这里](https://zh.minecraft.wiki/w/%E8%AF%AD%E8%A8%80) 看到 Minecraft 支持的所有语言类型。  
其中，下图框出的 **代码-游戏内** 一列即为我们所需的对应语言的语言代码。  
![Language Wiki](/gunpack/language_wiki.png)   

**语言文件** 由一系列的键值对组成，键是一个唯一的标识符，值是对应的文本。

:::tip
你可以自由定义键的名称，但是为了规范和避免冲突，我们建议你使用一定的规范来定义键。  

一个比较合适的规范是`<类型>.<命名空间>.<键名>`  
比如`pack.tutorial.name`，`item.tutorial.ak47`等
:::

作为例子，让我们在 **语言文件** 中定义枪包的名称和描述文本。  
在 `en_us.json` 文件中添加:   
```json
{
  "pack.tutorial.name": "Tutorial Gun Pack",
  "pack.tutorial.desc": "Just a gun pack for tutorial."
}
```

在 `zh_cn.json` 文件中添加:
```json
{
  "pack.tutorial.name": "教学用枪包",
  "pack.tutorial.desc": "芝士一个教学用枪包"
}
```

这意味着你可以在任何支持lang的地方使用 `pack.tutorial.name` 来引用枪包的名称，使用 `pack.tutorial.desc` 来引用枪包的描述文本，
他们将会被自动在游戏中依据玩家的设置显示为对应语言的具体内容。