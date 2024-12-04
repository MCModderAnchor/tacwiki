---
order: 2
---
# 添加自定义枪械工作台

从 **1.1.4** 开始，tacz允许枪包作者添加自定义枪械工作台。这个功能将允许你自定义工作台的外观和里面包含的配方，其他功能将与默认工作台相同。  
:::caution
使用此种方式添加的方块不是具有独立id的真正方块，**其开销远比真正的方块大**，大量放置势必造成卡顿，所以你 **绝不应该** 使用此功能添加大量装饰性方块。  
:::

## 定义一个新的合成台
与枪械/配件类似，除了资产外，自定义工作台页也需要一个定义文件、一个效果配置文件和一个参数配置文件。  

以`tutorial_table`为例，参考位置如下：
```
└─tutorial_gun_pack  
    ├─assets
    │  └─tutorial
    │      ├─display
    │      │  ├─blocks                  # 自定义合成台目录
    │      │  │  └─tutorial_table.json  # 效果文件
    │      │  └─guns
    │      ├─geo_models
    │      │  └─block
    │      ├─textures
    │      └─gunpack_info.json
    ├─data
    │   └─tutorial
    │       ├─data
    │       │  ├─blocks                 # 自定义合成台目录
    │       │  │  └─tutorial_table.json # 数据文件
    │       │  └─guns
    │       ├─index
    │       │  ├─blocks
    │       │  │  └─tutorial_table.json # 定义文件
    │       │  └─guns
    │       └─recipes
    │          ├─ammo
    │          ├─attachments
    │          └─gun
    └─gunpack.meta.json
```

## 定义文件
定义文件位于`data/<namespace>/index/blocks/`目录下，他的文件名也决定了合成台的ID。  

内容参考如下：
```json
{
  // 方块的显示名称，支持本地化
  "name": "tutorial.block.tutorial_table",
  // 方块效果文件
  "display": "tutorial:tutorial_table",
  // 方块参数文件
  "data": "tutorial:tutorial_table",
  // 方块文本提示
  "tooltip": "tutorial.block.tutorial_table.desc",
  // 方块id，可选值：tacz:workbench_a, tacz:workbench_b, tacz:workbench_c
  // 对应（长x高x宽）1x1x1，2x1x1，1x2x1
  // 更改该字段无法影响已经放置的方块/物品，请谨慎修改
  // tips:
  // 此处的tacz:gun_smith_table等效于2x1x1，但是是为了兼容旧版本的内部保留字，枪包作者不应该使用
  // 默认工作台的id在程序里锁定为tacz:gun_smith_table，本文件的此字段事实上是无效的
  "id": "tacz:workbench_a",
  // 排序数，决定了在创造模式标签页中的顺序
  // 数字越小，优先级越高
  "sort": 1
}
```

:::caution
工作台的方块id **一经确定不应该更改**，因为修改此项 **无法影响** 世界中已获取的物品和已放置的方块，已经存在的物品/方块仍将 **保持旧ID的行为**。
:::

## 效果文件
效果文件位于`assets/<namespace>/display/blocks/`目录下，用于定义方块的模型和材质以及不同视角下的显示效果。  

此处假设你已经在相应目录下正确放置了方块的模型和材质，参考如下：
```json
{
  // 方块的模型，在包目录下的 models 文件夹中寻找，不可为空
  "model": "tutorial:block/tutorial_table",
  // 默认材质，不可为空
  "texture": "tutorial:block/uv/tutorial_table",
  // 各个视角下的显示效果
  "transforms": {
    "thirdperson_righthand": {
      "rotation": [0, 90, 0],
      "translation": [0, 0.25, -2],
      "scale": [0.24, 0.24, 0.24]
    },
    "thirdperson_lefthand": {
      "rotation": [0, 90, 0],
      "translation": [0, 0.25, 2],
      "scale": [0.24, 0.24, 0.24]
    },
    "firstperson_righthand": {
      "rotation": [0, 90, 0],
      "scale": [0.25, 0.25, 0.25]
    },
    "firstperson_lefthand": {
      "rotation": [0, 90, 0],
      "translation": [0, 0, 4],
      "scale": [0.25, 0.25, 0.25]
    },
    "ground": {
      "translation": [2, 2, 0],
      "scale": [0.25, 0.25, 0.25]
    },
    "gui": {
      "rotation": [15, -145, 0],
      "translation": [-2.5, -3.75, 0],
      "scale": [0.4, 0.4, 0.4]
    },
    "head": {
      "translation": [8, 3.75, 0]
    },
    "fixed": {
      "translation": [4, -4, -3.5],
      "scale": [0.5, 0.5, 0.5]
    }
  }
}
```
:::tip
你可以参考[上一节](./01_prepare#调整显示效果)的方法来调整各个视角下的显示效果，无需直接编写。
:::

## 参数文件
参数文件目前只有一个配置，即合成台的配方过滤器，参考如下：
```json
{
  // 配方过滤器，具体内容位于 data/<命名空间>/recipe_filters 下
  // 如果没有指定，将使用默认过滤器 tacz:default
  "filter": "tacz:default"
}
```

关于配方过滤器的详细用法，请参考 [章节：配方过滤器](./03_recipe_filter)。