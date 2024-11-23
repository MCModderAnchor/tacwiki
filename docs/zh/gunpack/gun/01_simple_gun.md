---
order: 1
---
# 准备素材
在正式开始之前，我们先简单地创建一个模型用于教程。   
::: tip
如果你懒得自己动手，可以到 [这里](https://github.com/MCModderAnchor/tacwiki/tree/main/resource/first_gun) 下载已经创建好的资源。   
:::

::: warning
如果你需要创建一个精细且复杂的枪械模型，推荐你先阅读我们的[枪械模型推荐工作流](../../model_guide/)   
:::

:::caution
枪械模型中某些名称的组具有**预定义的特殊行为和功能**并具有相应的**硬性要求**，为了方便教学，本章节刻意忽略了这些部分。  

如果你需要创建一个完整的枪械模型并为它制作动画，请**务必遵循** [章节：具有特殊功能的组名](./03_sp_group_name) 中的要求，
否则你的模型可能会以预期之外的方式工作，甚至**导致游戏崩溃**。
:::

## 制作简单的模型和贴图
1. 首先，新建一个基岩版实体模型。   
   ![Create Bedrock Gun Model](/gunpack/gun/create_bedrock_gun_model.png)
2. 然后，完成你的建模工作。    
   ![Gun Model Review](/gunpack/gun/gun_model_review.png)
3. 最后，导出基岩版模型。   
   ![Export Model](/gunpack/gun/export_model.png)    
   也不要忘记保存材质文件。

## 生成背包2D贴图
为了避免在背包和快捷栏中渲染完整模型造成卡顿，tacz的枪械在物品栏中采用低分辨率2D贴图的形式渲染。  

你可以借助 BlockBench 的 Screenshot Model 功能生成一个背包 2D 贴图。  
在生成贴图时，推荐进行以下操作：  
右键bb工作区界面，选择等轴视角右（2:1），并且关闭软件内阴影着色：  
![Screenshot Model](/gunpack/gun/iso_r_scr.png)    
![no shading](/gunpack/gun/no_shading_scr.png)  
![save image](/gunpack/gun/save_scr.png)

注意，此法生成的贴图是非矩形，你需要通过图片修改软件对其进行缩放或裁剪。  
对于游戏内背包及容器界面显示的图像，推荐的分辨率为**32x32正方形**。  
