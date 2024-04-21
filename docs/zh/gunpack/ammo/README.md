# 创建弹药
在之前的 [创建第一把枪](/zh/gunpack/first_gun/) 教程中，我们指定教程枪使用了默认枪包中的 7.62x39mm 步枪弹。   
在本篇教程中，我们将添加一个自己定义的弹药类型，并且让教程枪使用它。      
一个自定义的弹药可能需要以下模型:   
- 弹药堆模型，用于制作台、展示框中渲染。
- 子弹实体模型，通常用于 rpg 这种需要绘制出弹头的弹药。
- 子弹壳模型，用于自动步枪抛壳的渲染。

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
![My Ammo Slot](./my_ammo_slot.png)   
我们将其命名为 my_ammo.png 并放入枪包中的 textures/ammo/slot/ 路径下。   
### 制作弹药堆模型(非必须)
在默认枪包中，弹药堆模型都做成了“弹药盒”形式。   
![Ammo Model](./ammo_model.png)   
我们可以沿袭这种风格。    
以下是教程创建的示例：   
![My Ammo Model](./my_ammo_model.png)   
将模型导出并命名为 my_ammo_geo.json 放入枪包 models/ammo/ 路径下。
将材质保存为 my_ammo.png 放入枪包  textures/ammo/uv/ 路径下。   
