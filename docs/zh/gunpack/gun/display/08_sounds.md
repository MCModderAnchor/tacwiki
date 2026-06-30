---
order: 8
---
# 枪械音效
枪械需要的所有音效如下表：

| 音效名             | 效果                                       |
|-----------------|------------------------------------------|
| draw            | 在抬枪时播放                                   |
| inspect         | 膛内有子弹的情况下检视时播放                           |
| inspect_empty   | 膛内没有子弹的情况下检视时播放                          |
| put_away        | 收枪时播放                                    |
| reload_empty    | 膛内没有子弹的情况下换弹时播放                          |
| reload_tactical | 膛内有子弹的情况下换弹时播放                           |
| shoot           | **本地客户端**开火时播放，**支持双声道**                 |
| shoot_3p        | **其他生物**开火时播放，**只支持单声道**                 |
| silence         | **本地客户端**安装消音器后开火时播放                     |
| silence_3p      | **其他生物**安装消音器后开火时播放                      |
| dry_fire        | 弹匣打空后扣动扳机时播放。tacz 提供了默认音效，你可以不指定以启用默认音效。 |
| fire_select     | 切换快慢机时播放。tacz 提供了默认音效，你可以不指定以启用默认音效。     |
| head_hit        | 爆头的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。      |
| flesh_hit       | 打中身体的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。    |
| kill            | 击杀生物的音效反馈。tacz 提供了默认音效，你可以不指定以启用默认音效。    |

本节教程我们为教程枪添加 shoot 音效、dry_fire 音效作为示范。   
::: tip
开始之前，我认为有必要提醒你，我们可以直接用 "tac:ak47/ak47_shoot" 和 "tac:ak47/ak47_dry_fire" 引用默认枪包中 ak47 的音效。但为了教学效果，我们将这两个音效拷贝出来，添加到教程枪包中。在一般的枪包制作过程中，你应该尽可能复用已有的资源，而不是复制黏贴。
:::

1. 从 [这里](https://github.com/MCModderAnchor/TimelessAndClassicsZero/tree/1.18.2/src/main/resources/assets/tac/custom/tac_default_gun/tac/sounds/ak47) 下载 ak47_shoot.ogg 和 ak47_dry_fire.ogg。
2. 音效文件应该置于枪包的 sounds/ 文件夹中。并且，为了整洁考虑，我们应该为每把枪单独建立一个文件夹，将同一把枪的音效归类在一起。   
因此，在 sounds/ 文件夹下，新建一个 ak47/ 文件夹，并将下载的 ak47_shoot.ogg 和 ak47_dry_fire.ogg 放入其中。    
此时你的枪包文件结构应该看起来像这样：   
```
└─tutorial_gun_pack
   ├─ assets
   │   └─ tutorial
   │       ├─ gunpack_info.json
   │       ├─ textures
   │       │    └─ gun
   │       │        ├─ uv
   │       │        │   └─ ak47.png
   │       │        ├─ slot
   │       │        │   └─ ak47.png
   │       │        └─ hud
   │       │            └─ ak47.png
   │       ├─ display
   │       │   └─ silencer_display.json
   │       ├─ tacz_sounds
   │       │   └─ ak47
   │       │       ├─ ak47_dry_fire.ogg
   │       │       └─ ak47_shoot.ogg
   │       ├─ geo_models
   │       │   └─ gun
   │       │       └─ ak47_geo.json
   │       └─ lang
   │           └─ en_us.json
   └─ data
       └─ tutorial
           ├─ index
           │   └─ guns
           │       └─ ak47.json        
           └─ data
               └─ guns
                   └─ ak47_data.json
```
3. 在 ak47 的效果文件中指定这两个音效。   
打开 guns/display/ak47_display.json 文件，添加如下代码: 
``` json
    "sounds": {
        "shoot": "tutorial:ak47/ak47_shoot",
        "dry_fire": "tutorial:ak47/ak47_dry_fire"
    }
```
键的内容对应开头表格的音效名，值则是具体音效的路径。   
4. 到游戏中检验音效是否播放吧。   
   

## 进阶枪械音效  
你可能注意到了，默认包里大部分枪械的display里逐渐不再使用**inspect**、**inspect_empty**、**reload_empty**、**reload_tactical**几个音效字段，
那是因为我们逐渐改用**动画音效**，在**1.1.4**版本后，tacz支持将音效以关键帧的形式放进动画内，不仅方便后续的调整与维护，并且可以通过动画状态机来播放不在**音效字段**内的其他的音效。  
  
那么接下来展示如何使用**动画音效**  
  
1. 打开**Blockbench**-选择你的模型-点击**动画模式**并且导入模型对应的动画文件-点击需要制作音效的动画  
  
2. 在**时间线**一栏上点击**动画效果**  
  
![时间线](/gunpack/gun/sound/sound1.png)  
  
  
3. 以ak47的**reload_tactical**动画为例，点击**动画效果**后，时间线上会出现一栏名为**效果**的分组，而ak47的动画已经制作好了**动画音效**，以关键帧的形式将一整段完整的动作音效拆分为几个片段  
在我们播放动画的时候也会同步播放关键帧上的音效  
  
![音效关键帧](/gunpack/gun/sound/sound2.png)  
  
  
4. 点击其中一个音效关键帧，我们就能编辑对应关键帧的效果，编辑的路径地址和display里的规范一致，即 **<枪包命名空间>:<文件夹路径名>/<音效文件名>**  
  
![音效路径](/gunpack/gun/sound/sound3.png)  
  
你也可以点击右边的**选择声音文件**选项来添加音效文件，选择文件后会自动填写好路径，但是需要手动补充路径前缀  

:::caution
如果动画内有**没有任何路径**的音效关键帧，可能会导致游戏崩溃
:::