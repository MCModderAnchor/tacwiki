# 合成配方
>本文档仅介绍如何在枪械工作台内添加新的枪械配方
>
>查看 forge 提供的物品 tag：[FORGE TAGS](https://forge.gemwire.uk/wiki/Tags)
>查看 Minecraft 提供的物品 tag：[MINECRAFT TAGS](https://minecraft.fandom.com/wiki/Tag#Item_tags)

## 创建合成配方

1. 创建**枪械合成配方**

在枪包命名空间下创建文件夹：/recipes/gun

创建一个与枪械 id 相同的 json 文件，如 ak47.json。在其中，添加以下内容：

``` json
{
  // 材料
  "materials": [
    {
      "item": {
        // 材料类型
        "tag": "forge:gems/diamond"
      },
      "count": 10
    },
    {
      "item": {
        // 材料类型
        "tag": "minecraft:logs"
      },
      "count": 8
    },
    {
      "item": {
        // 特定的某种材料
        "item": "minecraft:obsidian"
      },
      "count": 12
    }
  ],
  // 输出结果
  "result": {
    // 类型，枪械的类型固定为 gun
    "type": "gun",
    // 输出的枪械的 id
    "id": "tacz:ak47"
  }
}
```
2. 创建**配件合成配方**

在枪包命名空间下创建文件夹：/recipes/attachment

创建一个与配件 id 相同的 json 文件，如 sight_sro_dot.json。在其中，添加以下内容：

```json
{
  // 材料
  "materials": [
      // ...
  ],
  // 输出结果
  "result": {
    // 类型，配件的类型固定为 attachment
    "type": "attachment",
    // 输出的配件的 id
    "id": "tacz:sight_sro_dot"
  }
}
```

3. 创建**弹药合成配方**

在枪包命名空间下创建文件夹：/recipes/ammo

创建一个与弹药 id 相同的 json 文件，如 9mm.json。在其中，添加以下内容：

```json
{
  "materials": [
      // ...
  ],
  "result": {
    // 类型，配件的类型固定为 ammo
    "type": "ammo",
    // 输出的弹药的 id
    "id": "tacz:9mm"
  }
}
```

