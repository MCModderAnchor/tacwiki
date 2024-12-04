# 创建弹药
在之前的 [创建第一把枪](/zh/gunpack/first_gun/) 教程中，我们指定教程枪使用了默认枪包中的 7.62x39mm 步枪弹。   
在本篇教程中，我们将添加一个自己定义的弹药类型，并且让教程枪使用它。      
一个自定义的弹药可能需要以下模型:   
- 弹药堆模型，用于制作台、展示框中渲染。
- 子弹实体模型，通常用于火箭弹等需要绘制出弹头的弹药。
- 子弹壳模型，用于自动武器抛壳的渲染。

可能需要以下材质:   
- 背包槽位 2D 贴图
- 弹药堆模型贴图
- 子弹实体模型贴图
- 子弹壳模型贴图
其中，除了背包槽位 2D 贴图之外，其他模型和贴图都是非必要的。   
::: tip 
你可以从 [这里](https://github.com/MCModderAnchor/tacwiki/tree/main/resource/ammo) 下载到教程创建的模型和贴图。
:::
### 制作背包槽位 2D 贴图(必要)
弹药的背包槽位贴图没有什么要求，你可以自行制作一个方形贴图。   
以下是教程制作的贴图:   
![My Ammo Slot](my_ammo_slot.png)   
我们将其命名为 my_ammo.png 并放入枪包中的 textures/ammo/slot/ 路径下。   
### 制作弹药堆模型(非必须)
在默认枪包中，弹药堆模型都做成了“弹药盒”形式。   
![Ammo Model](ammo_model.png)   
我们可以沿袭这种风格。    
以下是教程创建的示例：   
![My Ammo Model](my_ammo_model.png)   
特别地，弹药堆模型支持两个定位组: fixed(展示框模型定位组)、thirdperson_hand(第三人称手部模型定位组) 和 ground(掉落物模型定位组)。   
这两个定位组的放置方法和效果与枪械模型的相同，你可以[去这里看看](/zh/gunpack/gun_positioning/)。    
我们将模型导出并命名为 my_ammo_geo.json 放入枪包 models/ammo/ 路径下。    
将材质保存为 my_ammo.png 放入枪包  textures/ammo/uv/ 路径下。    
### 制作弹药实体模型(非必须)
弹药实体模型通常用于火箭弹等需要绘制出弹头的弹药。本教程简单地制作了一个弹药实体模型用于展示效果。如果你没有需要，你可以跳过这一步。   
![Ammo Entity Model](ammo_entity_model.png)   
::: tip
一般来说，原点(0, 0, 0)应该是弹药实体模型的中心点，且模型的 Pivot Point 应该位于 (0, 0, 0)
:::
我们将模型导出并命名为 my_ammo_entity_geo.json 并放入枪包 models/ammo_entity/ 路径下。   
将材质保存为 my_ammo_entity.png 并放入枪包 textures/ammo_entity/ 路径下。   
### 制作弹壳模型(非必须)
弹壳模型用于用于自动武器抛壳的渲染。如果你没有需要，你可以跳过这一步。   
![Ammo Shell Model](ammo_shell_model.png)   
::: tip
一般来说，原点(0, 0, 0)应该是弹壳模型的中心点，且模型的 Pivot Point 应该位于 (0, 0, 0)   
:::
我们将模型导出并命名为 my_ammo_shell.json 并放入枪包 models/shell/ 路径下。   
将材质保存为 my_ammo_shell.png 并放入枪包 textures/shell/ 路径下。   
在完成了所有上述步骤之后，你的枪包文件结构应该看起来像:   
```
tutorial_gun_pack
└─ tutorial
   ├─ pack.json
   ├─ textures
   │  ├─ shell
   │  │  └─ my_ammo_shell.png
   │  ├─ gun
   │  ├─ ammo_entity
   │  │  └─ my_ammo_entity.png
   │  └─ ammo
   │     ├─ uv
   │     │  └─ my_ammo.png
   │     └─ slot
   │        └─ my_ammo.png
   ├─ sounds
   ├─ models
   │  ├─ shell
   │  │  └─ my_ammo_shell.json
   │  ├─ gun
   │  ├─ ammo_entity
   │  │  └─ my_ammo_entity_geo.json
   │  └─ ammo
   │     └─ my_ammo_geo.json
   ├─ lang
   └─ guns
```
### 创建弹药效果文件(必要)
弹药效果文件位于 ammo/display/ 目录下。接下来我们创建一个 my_ammo_display.json 文件并放入其中。   
在 my_ammo_display.json 文件中放入以下内容:   
``` json
{
  // 弹药堆模型
  "model": "tutorial:ammo/my_ammo_geo",
  // 弹药堆模型贴图
  "texture": "tutorial:ammo/uv/my_ammo",
  // 背包 2D 贴图
  "slot": "tutorial:ammo/slot/my_ammo",
  // 弹壳模型和贴图
  "shell": {
    "model": "tutorial:shell/my_ammo_shell",
    "texture": "tutorial:shell/my_ammo_shell"
  },
  // 子弹实体模型和贴图
  "entity": {
    "model": "tutorial:ammo_entity/my_ammo_entity_geo",
    "texture": "tutorial:ammo_entity/my_ammo_entity"
  }
}
```
### 创建弹药定义文件(必要)
弹药定义文件位于 ammo/index/ 目录下。其文件名就是弹药的id。接下来我们创建 my_ammo.json 文件并放入其中。    
在 my_ammo.json 中放入以下内容: 
``` json
{
  // 弹药的显示名称，可以在语言文件中定义
  "name": "tutorial.ammo.my_ammo.name",
  // 指定我们在上文中创建的效果文件
  "display": "tutorial:my_ammo_display",
  // 弹药的最大堆叠数量
  "stack_size": 60
}
```
在语言文件 lang/en_us.json 中补上弹药的显示名称的定义。
``` json
  "tutorial.ammo.my_ammo.name": "My Ammo"
```
### 使用新弹药
原先，我们的教程枪使用的弹药类型是默认枪包提供的 7.62x39mm步枪弹，接下来我们将使用上文定义的新弹药类型，并在游戏中检查它的效果。   
更改 guns/data/ak47_data.json 中的 "ammo" 属性，   
``` json
  "ammo": "tutorial:my_ammo"
```
为了查看弹药实体，我们可以暂时将子弹速度调慢以便观察。更改 "bullet" 属性中的 "speed" 属性，   
``` json
  ...
  "bullet': {
    ...
    "speed": 1,
    ...
  },
  ...
```
我们暂时不实现抛壳，因为它需要一些复杂的修改，我们会在以后的章节中涉及到。   
接下来，进入游戏，检验你的成果吧。   
![In Game 1](in_game_1.png)   
![In Game 2](in_game_2.png)   