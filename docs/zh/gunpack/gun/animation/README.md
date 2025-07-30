# 动画制作
>下文仅为作者对blockbench软件制作动画的说明

## 一、通道设置
将通道中的旋转、移动、缩放勾选

------------

![通道](/gunpack/gun/animation/animation_production/channel.png)

------------

## 二、关键帧
**添加关键帧**
动画的原理便是一个物件从一个关键帧运动到另一个关键帧的过程
在blockbench软件中可以通过组下的+号添加关键帧，也可以使用旋转(R)，移动(V)，缩放(S)工具对物体的状态进行变化添加关键帧  
  
![三种工具](/gunpack/gun/animation/animation_production/addkey.png)  
  

**关键帧类型**
关键帧有1.线性 2.平滑 3.贝塞尔 4.步 四种类型。当您选中关键帧后可以在屏幕左下角进行更改  
  
![关键帧](/gunpack/gun/animation/animation_production/keytype.png)  
  

------------

## 三、曲线
为了更精细的制作动画，可以在时间窗口切换曲线模式编辑  
  
![曲线模式](/gunpack/gun/animation/animation_production/graph.png)  
  

------------

# 烘焙动画
>如果你的动画带有贝塞尔，需要烘焙成线性动画以保证其在游戏内的正确渲染

::: warning
烘培动画仅应当在导出动画前进行，烘培后你目前的动画文件将被修改。    
如果你希望动画能够二次修改，**务必将原始的动画文件进行备份**，然后再进行烘培。
:::

**需用插件：** Bakery, https://github.com/JannisX11/blockbench-plugins/tree/master/plugins/bakery.js
**烘焙方法：** 载入动画，选中贝塞尔曲线插值的关键帧，点击菜单栏 动画-烘焙动画  
  
![烘焙关键帧](/gunpack/gun/animation/animation_production/bake.png)  
  

------------

# 导出动画
>动画支持 gltf 与 Bedrock 两种动画格式

## 导出 gltf 动画格式- **不推荐**（后缀名 .gltf）
![gltf](/gunpack/gun/animation/animation_production/gltf.png)

## 导出 Bedrock 动画格式- **推荐**（后缀名 .animation.json）
![json](/gunpack/gun/animation/animation_production/json.png)

------------

# 填写枪械效果文件
>只有填写完枪械效果文件，才会在游戏内正确加载动画。
>
>添加以下代码：

``` json
  // 调用的动画名，会在包目录下的 animations 文件夹中寻找，不建议为空
  "animation": "tacz:ak47",
  // 指定使用缺省动画，可为空。如果上文指定的动画文件里缺少某个动画，如 draw 动画，则会从缺省动画拷贝。
  // 值可为 rifle、pistol
  "use_default_animation": "rifle",
```
