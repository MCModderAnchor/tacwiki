---
order: 1
---
# 创建第一把枪
我们将以 ak47 为示范，展示如何创建一把最简单的枪，并将其加入你的枪包。

## 准备工作
我们假设你已经按照 [章节：创建第一个枪包](../02_first_pack )创建了你的枪包文件夹并准备好了如下材料：
- 枪械的模型文件: `ak47_geo.json`
- 模型贴图: `ak47.png`
- 背包 2D 贴图: `ak47.png`    
::: tip
如果你懒得自己动手，可以到 [这里](https://github.com/MCModderAnchor/tacwiki/tree/main/resource/first_gun) 下载已经创建好的资源。   
:::

## 放置资产
1. 模型文件应放入枪包的 `assets/<命名空间>/geo_models/` 目录下。我们可以创建一个子目录 `geo_models/gun/` 对枪械模型进行分类，并将枪械模型放在此。
2. 贴图文件应放入枪包的 `assets/<命名空间>/textures/` 目录下。同理，我们创建一个子目录 `textures/gun/` 对枪械贴图进行归类。  

   在此目录下分别创建 uv 和 slot 文件夹，用于分别储存模型贴图和背包 2D 贴图。我们将模型贴图置于 `textures/gun/uv/` 目录下，背包 2D 贴图置于 `textures/gun/slot/` 目录下。

如果你按照如上步骤操作，你现在的枪包目录应该类似这样：
```
└─tutorial_gun_pack
    ├─assets
    │  └─tutorial
    │     ├─geo_models
    │     │  └─ak47_geo.json
    │     └─textures
    │        ├─slot
    │        │  └─ak47.png
    │        └─uv
    │           └─ak47.png
    ├─data
    │  └─tutorial
    └─gunpack.meta.json
```

## 创建枪械数据文件
枪械数据文件应置于 guns/data/ 目录下。此文件用于定义枪械的各项属性，如伤害、弹容、射速等。接下来我们为 ak47 创建一个最基本的数据文件。   
创建文件 guns/data/ak47_data.json
```json
{
  // 指定枪械弹药，此处我们使用默认枪包中的 7.62x39mm 步枪弹。
  "ammo": "tac:762x39",
  // 弹容
  "ammo_amount": 30,
  // 枪栓类型。此处我们先按照 ak47 的类型填入 closed_bolt，以后再进行详细解释。
  "bolt": "closed_bolt",
  // 每分钟射出弹药量，最大不应超过 1200
  "rpm": 600,
  // 子弹实体属性
  "bullet": {
    // 寿命，单位秒
    "life": 10,
    // 伤害
    "damage": 6,
    // 速度 m/s
    "speed": 400,
    // 重力
    "gravity": 0,
    // 击退效果
    "knockback": 0,
    // 飞行阻力
    "friction": 0.01,
    // 是否点燃目标
    "ignite": false,
    // 穿透实体的最大数量
    "pierce": 2
    // 爆炸参数，用于 rpg 等爆炸性武器，如果没有填写，则弹头不会爆炸
    //"explosion": {
    //  "radius": 5
    //}
  },
  // 换弹参数
  "reload": {
    // 此处先填入 magazine，详细含义在以后解释。
    "type": "magazine",
    // 弹匣供弹完成时间，到达此时间点，服务端就更新枪内子弹数量
    // 通常对应着动画当中弹匣插入的瞬间。
    "feed": {
      // 空仓换弹
      "empty": 2.25,
      // 战术换弹
      "tactical": 1.55
    },
    // 弹匣供弹总时长（秒），到达此时间点，枪械才可以进行开火、检视等行为。
    // 通常对应着动画当中枪械回到原位的瞬间。
    "cooldown": {
      // 空仓换弹
      "empty": 2.6,
      // 战术换弹
      "tactical": 2.0
    }
  },
  // 枪械抬起的动作时长，单位秒。
  "draw_time": 0.35,
  // 收枪的动作时长，单位秒。
  "put_away_time": 0.4,
  // 瞄准时长，单位秒。
  "aim_time": 0.2,
  // 疾跑状态切换时长，单位秒。
  "sprint_time": 0.3,
  // 开火模式
  "fire_mode": [
    // 全自动
    "auto",
    // 半自动
    "semi"
  ],
  // 后坐力，pitch 和yaw 分别至少需要两个关键帧
  "recoil": {
    "pitch": [
      // time 表示关键帧在时间轴上的位置，value 表示随机取值的取值范围。
      {"time": 0, "value": [0.7, 0.7]},
      {"time": 0.25, "value": [0.7, 0.7]},
      {"time": 0.45, "value": [-0.175, -0.175]},
      {"time": 0.6, "value": [0, 0]}
    ],
    "yaw": [
      {"time": 0, "value": [-0.35, -0.15]},
      {"time": 0.25, "value": [-0.35, -0.15]},
      {"time": 0.45, "value": [0, 0]}
    ]
  },
  // 不准确度
  "inaccuracy": {
    // 站立射击散布
    "stand": 2,
    // 移动射击散布
    "move": 4,
    // 潜行射击散布
    "sneak": 1,
    // 趴下射击散布
    "lie": 0.5,
    // 瞄准射击时散布
    "aim": 0.2
  }
}
```
### 创建枪械效果文件
枪械效果文件应置于 guns/display/ 目录下。此文件用于定义枪械的展示效果，如模型、贴图、动画等。接下来我们为 ak47 创建一个最基本的效果文件。   
创建文件 guns/display/ak47_display.json
``` json
{
    // 使用我们放入的模型文件：models/gun/ak47_geo.json。注意，不需要包含文件后缀，也不要包含开头的 "models/"。
    "model": "tutorial:gun/ak47_geo",
    // 使用我们放入的模型贴图：textures/gun/uv/ak47.png。注意，不需要包含文件后缀，也不要包含开头的 "textures/"。
    "texture": "tutorial:gun/uv/ak47",
    // 使用我们放入的背包 2D 贴图：textures/gun/slot/ak47.png。注意，不需要包含文件后缀，也不要包含开头的 "textures/"。
    "slot": "tutorial:gun/slot/ak47",
    // 第三人称持枪动画，直接填入default
    "third_person_animation": "default"
}
```
### 创建枪械定义文件
枪械定义文件应置于 guns/index/ 目录下。此文件用于定义枪械物品，并索引到数据文件和效果文件。需要注意的是，此文件的名称即为你的枪械物品的id，是枪械物品的唯一标识符。接下来我们为 ak47 创建一个最基本的定义文件。   
创建文件 guns/index/ak47.json
``` json
{
    // 枪械的显示名称，支持使用语言文件定义。
    "name": "tutorial.gun.ak47.name",
    // 枪械效果文件，对应 guns/display/ak47_display.json，其中前缀"guns/display/"和后缀".json"不需要包含。
    "display": "tutorial:ak47_display",
    // 枪械参数文件，对应 guns/data/ak47_data.json，其中前缀"guns/data/"和后缀".json"不需要包含。
    "data": "tutorial:ak47_data",
    // 枪械种类，用于创造标签栏归类。
    // 所有可用分类：pistol(手枪) sniper(狙击枪) rifle(步枪) shotgun(霰弹枪) smg(冲锋枪) 
    //             mg(机枪) rpg(火箭筒)
    "type": "rifle",
    // 枪械的物品类型，决定枪械的逻辑，如开火、装填等，默认是 modern_kinetic (现代动能枪械)
    "item_type": "modern_kinetic",
    // 排序数，决定了在创造模式标签页中的顺序
    // 数字越小，优先级越高
    "sort": 10
}
```
在语言文件中定义枪械的显示名称。向 lang/en_us.json 中添加:
``` json
    "tutorial.gun.ak47.name": "AK47 Assult Rifle"
```
### 检验你的成果
经过上述步骤，此时你的枪包目录结构应该是这样:
```
tutorial_gun_pack
└─ tutorial
   ├─ pack.json
   ├─ textures
   │  └─ gun
   │     ├─ uv
   │     │  └─ ak47.png
   │     └─ slot
   │        └─ ak47.png
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
将创建好的枪包文件夹拷贝到 Minecraft 客户端的版本根目录下的 config/tac/custom/ 文件夹中，然后启动游戏。   
如果你看到如下画面，证明枪械添加成功了。   
![In Game Screenshot](/gunpack/gun/in_game.png)    
你可能会注意到，各个人称下枪械的位置不太正确。这是因为枪械模型中尚未安置各个人称下的模型定位组。下一章教程中我们将会解析如何使用 [枪械模型定位组](/zh/gunpack/gun_positioning/)。