---
order: 60
---
# 合成配方
:::tip
参阅： forge提供的物品tag：[Forge Community Wiki: Tags#Items](https://forge.gemwire.uk/wiki/Tags)  
原版Minecraft提供的物品tag：[Minecraft Wiki: 标签#物品标签](https://zh.minecraft.wiki/w/%E6%A0%87%E7%AD%BE?variant=zh-cn#%E7%89%A9%E5%93%81%E6%A0%87%E7%AD%BE)
:::

从tacz 1.0.4开始，枪包的合成配方回归使用原版配方管理器进行管理。你可以像原版数据包一样为枪包添加任意类型的合成表，包括原版和其他模组的合成表。

原版配方管理器通过配方json中的`type`字段识别配方类型，你需要填写这个字段来告诉游戏你编写的是什么类型的配方。  
tacz提供的枪械工作台的配方类型id是`tacz:gun_smith_table_crafting`，你可以使用这个类型id来定义枪械工作台的合成配方。  
所有的配方都应该放置在数据包文件夹下的`data/<命名空间>/recipes/<路径>.json`文件夹中，其配方id将会是`<命名空间>:<路径>`。

关于原版提供的配方类型的写法，参见[Minecraft Wiki: 配方](https://zh.minecraft.wiki/w/%E9%85%8D%E6%96%B9)

## 枪械工作台配方
以下是枪械工作台的配方格式参考

### 枪械合成配方

:::tip
假设我们的命名空间是`tutorial`，该示例配方id将为`tutorial:gun/ak47`，注意`recipes/`后面的所有内容都是路径的一部分
:::


在枪包数据包文件夹下创建文件夹：`data/<命名空间>/recipes/gun`
创建一个与枪械 id 相同的 json 文件，如 `ak47.json`。在其中，添加以下内容：

```json
{
  // 配方类型
  "type": "tacz:gun_smith_table_crafting",
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
    // 输出的产物数量
    "count": 1,
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

在枪包命名空间下创建文件夹：`data/<命名空间>/recipes/attachment`

创建一个与配件 id 相同的 json 文件，如 `sight_sro_dot.json`。在其中，添加以下内容：

```json
{
  // 配方类型
  "type": "tacz:gun_smith_table_crafting",
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

在枪包命名空间下创建文件夹：`data/<命名空间>/recipes/ammo`

创建一个与弹药 id 相同的 json 文件，如 `9mm.json`。在其中，添加以下内容：

```json
{
  // 配方类型
  "type": "tacz:gun_smith_table_crafting",
  "materials": [
      // ...
  ],
  "result": {
    // 类型，配件的类型固定为 ammo
    "type": "ammo",
    // 输出的弹药的 id
    "id": "tacz:9mm",
    // 输出的产物数量
    "count": 50
  }
}
```

### 自定义配方输出
你也可以使配方输出任意物品，只需要将`result`中的类型改为`custom`即可。参考如下：

```json
{
  "type": "tacz:gun_smith_table_crafting",
  "materials": [
    // ...
  ],
  "result": {
    // 自定义输出的类型
    "type": "custom",
    // 把物品放到哪个tab里，可选值：ammo、scope、muzzle、stock、
    // grip、extended_mag、pistol、sniper、rifle、shotgun、smg、rpg、mg
    "group": "ammo",
    // 定义输出物品
    "item": {
      // 输出物品的 id，比如这里是个雪球
      "item": "minecraft:snowball",
      // 附加的 NBT 数据
      "nbt": {
        "rua": "rua!!"
      },
      // 输出的产物数量
      "count": 10
    }
  }
}
```


