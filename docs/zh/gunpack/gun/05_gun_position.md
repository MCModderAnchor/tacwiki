---
order: 5
---
# 视觉定位组
对于任意枪械模型，你需要为它们放置 iron_view、idle_view、ground、thirdperson_hand、fixed 这五个定位组，它们应当只被用于模型定位，因此包含于它们内部的模型将不会被实际渲染。    
接下来演示如何创建、调整这些定位组。

## 为 BlockBench 安装 cameras 插件
模型定位组的调整需要依赖 cameras 插件。   
你可以从 [这里](https://github.com/JannisX11/blockbench-plugins/blob/master/plugins/cameras.js) 下载 cameras 插件。
按照如下步骤将 cameras 安装到你的 BlockBench。   
![Install Plugin 1](/gunpack/gun/position/blockbench_load_plugin_1.png)   
![Install Plugin 2](/gunpack/gun/position/blockbench_load_plugin_2.png)   

## 更改 BlockBench 的 FOV 设置
在开始调整第一人称定位之前，你需要确认你的 BlockBench 预览 FOV 为 70。这是因为在 Minecraft 中，第一人称物品渲染的默认 FOV 是 70。   
![FOV Check 1](/gunpack/gun/position/fov_check_1.png)   
![FOV Check 2](/gunpack/gun/position/fov_check_2.png)   

## 调整第一人称摄像机定位组  
首先，为了模型分组整洁，我们可以创建一个名为 positioning 的分组 (这个分组的名称你可以自己决定) ，用于统一存放各种模型定位组。   
接下来，在 position 中新建两个分组，分别名为 iron_view 和 idle_view (这两个分组的名称不能改变)。它们分别是 机瞄视角的定位组 和 正常持握视角的定位组。   
::: tip
iron_view 可以被理解为：在玩家用枪械的机械瞄具瞄准时，玩家眼球的位置和朝向。   
idle_view 则是玩家在非瞄准状态下眼球的位置和朝向。
:::
为了可以预览摄像机定位组的效果，我们需要为定位组添加摄像机。选中需要添加摄像机的定位组，按照如下方式添加摄像机。   
![Add Camera](/gunpack/gun/position/add_camera.png)   
接下来，将定位组拖动到合适的位置。   
::: warning
请确保拖动的时候选定的是定位组本身，而不是定位组里的 camera。在拖动定位组的时候，右上角的参数显示里，Position 数值和 Pivot Point 数值应当同时变化。
:::
![Iron View 1](/gunpack/gun/position/iron_view_1.png)   
你可以随时将视角绑定到摄像机进行预览。   
![Iron View 2](/gunpack/gun/position/iron_view_2.png)   
我们用相同方法将 idle_view 放置好。   
![Idle View](/gunpack/gun/position/idle_view.png)   
最后，导出模型文件，启动游戏，你应该可以看到类似下图的效果。   
![In Game](/gunpack/gun/position/in_game.gif)   

此外，还有几个配件界面视角定位分组，用于控制在打开配件界面时，点击不同配件槽位，摄像机移动的位置。    
`refit_view` 配件界面初始视角  
`refit_muzzle_view` 枪口配件视角  
`refit_stock_view` 枪托配件视角  
`refit_scope_view` 瞄具配件视角  
`refit_extended_mag_view` 弹匣配件视角  
`refit_grip_view` 握把配件视角  
`refit_laser_view` 激光指示器配件视角

## 调整第三人称模型定位组
在 position 中新建三个分组，分别名为 ground 、thirdperson_hand 和 fixed (这三个分组的名称不能改变)。它们分别是 掉落物模型定位、生物实体手持模型定位 和 展示框模型定位。   
一般而言，   
- ground 分组应当位于枪械模型正下方
- thirdperson_hand 应位于枪械模型握把或扳机位置，朝向枪的前端。y轴可以向正方向额外旋转十五度（因为生物手模型并非完全与视线平行）。
- fixed 应位于枪械模型中央，并朝向枪的侧面。
::: tip
你可以为这些定位组添加摄像机，以便于观察它们的朝向。
:::
以下展示教程枪的三个定位组。   
![Ground](/gunpack/gun/position/ground.png)   
![Thirdperson Hand](/gunpack/gun/position/thirdperson_hand.png)   
![Fixed](/gunpack/gun/position/fixed.png)   
如果你正确地放置了定位组，在游戏中应该看到类似下图的效果。   
![In Game 2](/gunpack/gun/position/in_game_2.png)
你可以在效果文件中更改枪械模型在这三种情况下的缩放系数   
在 guns/display/ak47_display.json 中添加如下代码   
```json
    "transform": {
        "scale": {
            // 第三人称手部
            "thirdperson": [
                0.6,
                0.6,
                0.6
            ],
            // 掉落物
            "ground": [
                0.6,
                0.6,
                0.6
            ],
            // 展示框
            "fixed": [
                1.0,
                1.0,
                1.0
            ]
        }
    },
```
你的 ak47_display.json 整体看起来应该像:   
```json
{
    "model": "tutorial:gun/ak47_geo",
    "texture": "tutorial:gun/uv/ak47",
    "slot": "tutorial:gun/slot/ak47",
    "transform": {
        "scale": {
            "thirdperson": [
                0.6,
                0.6,
                0.6
            ],
            "ground": [
                0.6,
                0.6,
                0.6
            ],
            "fixed": [
                1.0,
                1.0,
                1.0
            ]
        }
    },
    "third_person_animation": "default"
}
``` 