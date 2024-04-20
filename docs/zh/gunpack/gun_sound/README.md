# 添加枪械音效
枪械需要的所有音效如下表：
| 音效名        | 效果              |
| ----------------- | ------------------ |
| draw        | 在抬枪时播放              |
| dry_fire        | 弹匣打空后扣动扳机时播放              |
| inspect        | 膛内有子弹的情况下检视时播放              |
| inspect_empty   | 膛内没有子弹的情况下检视时播放              |
| put_away       | 收枪时播放          |
| reload_empty    | 膛内没有子弹的情况下换弹时播放       |
| reload_tactical  | 膛内有子弹的情况下换弹时播放      |
| shoot          | 开火时播放           |
| silence         | 安装消音器后开火时播放    |

本节教程我们为教程枪添加 shoot 音效、dry_fire 音效作为示范。   
::: tip
开始之前，我认为有必要提醒你，我们可以直接用 "tac:ak47/ak47_shoot" 和 "tac:ak47/ak47_dry_fire" 引用默认枪包中 ak47 的音效。但为了教学效果，我们将这两个音效拷贝出来，添加到教程枪包中。在一般的枪包制作过程中，你应该尽可能复用已有的资源，而不是复制黏贴。
:::
1. 从 [这里](https://github.com/MCModderAnchor/TimelessAndClassicsZero/tree/1.18.2/src/main/resources/assets/tac/custom/tac_default_gun/tac/sounds/ak47) 下载 ak47_shoot.ogg 和 ak47_dry_fire.ogg。
2. 音效文件应该置于枪包的 sounds/ 文件夹中。并且，为了整洁考虑，我们应该为每把枪单独建立一个文件夹，将同一把枪的音效归类在一起。   
因此，在 sounds/ 文件夹下，新建一个 ak47/ 文件夹，并将下载的 ak47_shoot.ogg 和 ak47_dry_fire.ogg 放入其中。    
此时你的枪包文件结构应该看起来像这样：   
```
tutorial_gun_pack
└─ tutorial
   ├─ pack.json
   ├─ textures
   │  └─ gun
   │     ├─ uv
   │     │  └─ ak47.png
   │     ├─ slot
   │     │  └─ ak47.png
   │     └─ hud
   │        └─ ak47.png
   ├─ sounds
   │  └─ ak47
   │     ├─ ak47_dry_fire.ogg
   │     └─ ak47_shoot.ogg
   ├─ models
   │  └─ gun
   │     └─ ak47_geo.json
   ├─ lang
   │  └─ en_us.json
   └─ guns
      ├─ index
      │  └─ ak47.json
      ├─ display
      │  └─ ak47_display.json
      └─ data
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