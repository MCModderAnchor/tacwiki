# 合成配方
:::important
本章节仅介绍如何在**枪械工作台**内添加新的枪械配方！
:::
:::tip
参阅： forge提供的物品tag：[Forge Community Wiki#Tags](https://forge.gemwire.uk/wiki/Tags)  
原版Minecraft提供的物品tag：[Minecraft Wiki#物品标签](https://zh.minecraft.wiki/w/%E6%A0%87%E7%AD%BE?variant=zh-cn#%E7%89%A9%E5%93%81%E6%A0%87%E7%AD%BE)
:::

## 创建合成配方

### 枪械合成配方

在枪包命名空间下创建文件夹：`/recipes/gun`
创建一个与枪械 id 相同的 json 文件，如 `ak47.json`。在其中，添加以下内容：

```json
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
        // 特定的某种材料
        "item": "minecraft:obsidian"
      },
      "count": 12
    },
    {
      "item": {
        // forge 提供的宽松型 NBT 写法，只要输入物品符合其中的 NBT，即可合成
        "type": "forge:partial_nbt",
        // 默认枪械物品 id
        "item": "tacz:modern_kinetic_gun",
        // 附加的 NBT 数值
        // 这里我们填写了枪械 id
        "nbt": {
          "GunId": "tacz:m4a1"
        }
      },
      "count": 8
    },      
    {
      "item": {
        // forge 提供的宽松型 NBT 写法，只要输入物品符合其中的 NBT，即可合成
        "type": "forge:partial_nbt",
        // 默认配件物品 id
        "item": "tacz:attachment",
        // 附加的 NBT 数值
        // 这里我们填写了配件 id
        "nbt": {
          "AttachmentId": "tacz:scope_acog_ta31"
        }
      },
      "count": 2
    }
  ],
  // 输出结果
  "result": {
    // 类型，枪械的类型固定为 gun
    "type": "gun",
    // 输出的枪械的 id
    "id": "tacz:ak47",
    // 以下内容为选填参数，仅对枪械起效
    // 配件，可以使合成出的枪械自带配件，填入配件 id
    "attachments": {
       // 配件类型：配件 id
       "muzzle": "tacz:bayonet_m9"
    },
    // 子弹，可以使合成出的枪械自带子弹
    "ammo_count": 20
  }
}
```

### 配件合成配方

在枪包命名空间下创建文件夹：`/recipes/attachment`

创建一个与配件 id 相同的 json 文件，如 `sight_sro_dot.json`。在其中，添加以下内容：

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

### 弹药合成配方

在枪包命名空间下创建文件夹：`/recipes/ammo`

创建一个与弹药 id 相同的 json 文件，如 `9mm.json`。在其中，添加以下内容：

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