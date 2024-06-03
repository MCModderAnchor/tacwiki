# 合成配方
>本文档仅介绍如何在枪械工作台内添加新的枪械配方

## 创建合成配方
>以枪械的合成表为例，弹药配件等其他物品同理

1. 在\tutorial_gun_pack\tutorial\路径下创建文件夹：recipes/gun
2. 在gun文件夹下创建需要添加合成配方的文件gunname.json
3. 输入以下代码：
``` json
{
//材料
  "materials": [
    {
      "item": {
//材料类型
        "tag": "forge:gems/diamond"
      },
      "count": 10
    },
    {
      "item": {
//材料类型
        "tag": "minecraft:logs"
      },
      "count": 8
    },
    {
      "item": {
//特定的某种材料
        "item": "minecraft:obsidian"
      },
      "count": 12
    }
  ],
 //输出结果
  "result": {
 //类型
    "type": "gun",
//输出物品
    "id": "tacz:ai_awp"
  }
}
```
>[FORGE TAGS](https://forge.gemwire.uk/wiki/Tags)
>[MINECRAFT TAGS](https://minecraft.fandom.com/wiki/Tag#Item_tags)