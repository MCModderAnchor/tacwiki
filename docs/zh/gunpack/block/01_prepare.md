---
order: 1
---
# 准备工作
在添加方块之前，我们需要先准备好方块的模型和贴图。  

## 模型和贴图
![示例方块模型](/gunpack/block/example_block.png)

图为一个示例的2x1x1(x y z)大小的方块。注意，你需要确保模型中方块摆放时面向你的一面朝北，对于两格长的方块，应向右延申。  

目前你可以制作三种碰撞箱规格的方块：1x1x1，2x1x1，1x2x1。

:::warning
你应该尽可能保证方块的模型不要超出碰撞箱，否则可能出现渲染问题，且不要制作模型过于复杂的方块
:::

## 调整显示效果
虽然基岩版模型不具备在bb中预览各个部位显示效果的功能，但是你可以通过将模型临时转换为java版我物品/方块模型来调整  
首先，备份你的模型，并将模型转换为java版模型

![转换](/gunpack/block/convert.png)

然后，在“显示调整”选型卡中，调整各个视角下的显示效果

![显示调整](/gunpack/block/display_m.png)

调整完成后，找一个位置保存此java版模型，打开其json文件，找到其中的“display”字段
```json
{
    "credit": "Made with Blockbench",
    "texture_size": [128, 128],
    "textures": {
        "0": "workbench_2x1x1"
    },
    "elements": [...],
    // 这就是我们需要的
    "display": {
        "thirdperson_righthand": {
            "rotation": [75, 45, 0],
            "translation": [0, 2.5, 0],
            "scale": [0.375, 0.375, 0.375]
        }
    },
    "groups": [...]
}
```

你可以直接将此字段的内容复制到方块效果文件的“transforms”下，游戏效果将与bb中显示的一致