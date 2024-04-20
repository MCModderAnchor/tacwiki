# 创建并使用语言文件
在枪包命名空间文件夹下建立文件夹 lang/ ，并新建文件 en_us.json。你的枪包文件结构应看起来像：   
```
tutorial_gun_pack
└─ tutorial
   ├─ pack.json
   └─ lang
      └─ en_us.json
```
::: tip
枪包使用的默认语言文件为 en_us.json，如果客户端使用的语言文件不存在，则自动启用 en_us.json。如果当前使用的语言文件中某个词条不存在，也将从 en_us.json 中寻找词条代替。
:::
你可以在 [这里](https://minecraft.wiki/w/Language) 看到 Minecraft 支持的所有语言类型。   
![Language Wiki](./language_wiki.png)   
接下来让我们在语言文件中定义枪包的名称和描述文本。在 en_us.json 文件中添加:   
```
{
  "pack.tutorial.name": "Tutorial Gun Pack",
  "pack.tutorial.desc": "Just a gun pack for tutorial."
}
```