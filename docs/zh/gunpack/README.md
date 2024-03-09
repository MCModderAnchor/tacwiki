**当前文档对应tac:zero版本：v1.0.0**

# 枪械包数据结构

- 枪械包支持 zip 压缩格式和文件夹两种形式。zip 格式方便分发，文件夹形式方便枪械制作者制作使用。
- 无论是压缩包还是文件夹，其文件结构都相同
- 需要注意的是，大部分情况下，枪包无法引用 MC 原版资源和模组资源。因此你应当将所有需要的东西放入枪包中。
- 枪包之间引用资源文件，可以通过 '命名空间:资源名称' 的方式进行。

你可以参考：[tac 默认枪包](https://github.com/MCModderAnchor/TimelessAndClassicsZero/tree/1.18.2/src/main/resources/assets/tac/custom/tac_default_gun)
### 枪械包文件目录

```
根目录
└───tac   # 枪械包的命名空间，命名空间由此文件夹决定
     ├─── ammo
     │     ├──── display   # 弹药的客户端数据
     │     │     ├──── 762x39_display.json
     │     │     └──── 9mm_display.json
     │     │
     │     └──── index   # 弹药定义文件，弹药 id 由其文件名决定
     │           ├──── 762x39.json
     │           └──── 9mm.json
     │
     ├─── animations   # 动画文件夹
     │     ├──── ak47_geo.gltf  # gltf 动画文件
     │     └──── m16_geo.gltf
     │
     ├─── attachments
     │     ├──── data   # 配件参数
     │     │     ├──── sro_dot_data.json
     │     │     └──── acog_4x_data.json
     │     │
     │     ├──── display   # 配件的客户端数据
     │     │     ├──── sro_dot_display.json
     │     │     └──── acog_4x_display.json
     │     │
     │     └──── index   # 配件定义文件，配件 id 由其文件名决定
     │           ├──── sro_dot.json
     │           └──── acog_4x.json
     │
     ├─── guns
     │     ├──── data   # 枪械参数
     │     │     ├──── ak47_data.json
     │     │     └──── m16_data.json
     │     │
     │     ├──── display   # 枪械的客户端数据
     │     │     ├──── ak47_display.json
     │     │     └──── m16_display.json
     │     │
     │     └──── index   # 枪械定义文件，枪械 id 由其文件名决定
     │           ├──── ak47.json
     │           └──── m16.json
     │
     ├─── lang   # 语言文件
     │     ├──── en_us.json
     │     └──── zh_cn.json
     │
     ├─── models
     │     ├──── ammo   # 弹药模型
     │     │     ├──── 762x39_geo.json
     │     │     └──── 9mm_geo.json
     │     │
     │     ├──── attachment   # 配件模型
     │     │     ├──── sro_dot_geo.json
     │     │     └──── acog_4x_geo.json
     │     │   
     │     └──── gun   # 枪械模型
     │           ├──── ak47_geo.json
     │           └──── m16_geo.json
     │   
     ├─── sounds
     │     ├──── ak47_shoot.ogg   # 枪械声音文件
     │     └──── m16_shoot.ogg
     │
     └─── textures
           ├──── ammo
           │     ├──── slot   #子弹材质文件，用于背包、快捷栏等容器的槽位显示
           │     │     ├──── 762x39.png
           │     │     └──── 9mm.png
           │     │
           │     └──── uv   # 子弹材质文件，用于模型
           │           ├──── 762x39.png
           │           └──── 9mm.png
           │
           ├──── attachment
           │     ├──── slot   #配件材质文件，用于背包、快捷栏等容器的槽位显示
           │     │     ├──── sro_dot.png
           │     │     └──── acog_4x.png
           │     │
           │     └──── uv   # 配件材质文件，用于模型
           │           ├──── sro_dot.png
           │           └──── acog_4x.png
           │
           └──── gun
                 ├──── hud   # 枪械材质文件，用于 HUD 和 GUI 的 2D 渲染
                 │     ├──── ak47.png
                 │     └──── m16.png
                 │   
                 ├──── slot   # 枪械材质文件，用于背包、快捷栏等容器的槽位显示
                 │     ├──── ak47.png
                 │     └──── m16.png
                 │
                 └──── uv   # 枪械材质文件，用于模型
                       ├──── ak47.png
                       └──── m16.png
```

### 枪械定义文件

枪械的卫星数据（如合成表、名字、工具提示、枪械种类等）、以及枪械Display文件和枪械Data文件的索引。

注意，枪械Display文件和枪械Data文件是可以重复使用的。当你需要添加一系列数据相同的枪械时，可以选择使用同一个而非重新编写。

```json
{
    // 枪械的显示名称和工具提示，支持本地化
    "name": "tac.gun.ak47.name",
    "tooltip": "tac.gun.ak47.tooltip",
    // 枪械的本地数据
    "display": "tac:ak47_display",
    // 枪械参数
    "data": "tac:ak47_data"
}
```

### 枪械Data文件

储存枪械的各种属性，如伤害、后坐力等。

```json
{
  // 指定枪械弹药
  "ammo": "tac:762x39",
  // 弹容
  "ammo_amount": 30,
  // 枪栓类型：开膛待机（open_bolt）、闭膛待击（closed_bolt）
  "bolt": "open_bolt",
  // 每分钟射出弹药量，最大不应超过 1200
  "rpm": 700,
  // 换弹相关
  "reload": {
    // magazine 是弹匣供弹，manual 是手动供弹(暂未实现)
    "type": "magazine",
    // 换弹时长（秒），到达此时间点，服务端就更新枪内子弹数量
    "feed": {
      // 空仓换弹
      "empty": 2.25,
      // 战术换弹
      "tactical": 1.55
    },
    // 冷却时长（秒），到达此时间点，枪械才可以进行开火、检视等行为。
    "cooldown": {
      // 空仓换弹
      "empty": 2.6,
      // 战术换弹
      "tactical": 2.0
    }
  },
  // 枪械抬起的动作时长，单位秒。
  // 抬起动作完成后，枪械可以进行开火、检视等行为
  "draw_time": 0.35,
  // 瞄准时长，单位秒。
  "aim_time": 0.2,
  // 允许的开火模式，包括auto、semi、burst
  "fire_mode": [
    // 全自动
    "auto",
    // 半自动
    "semi"
  ],
  // 后坐力
  "recoil": {
    // 竖直方向偏转的上下限。每一次射击将会随机从中取值。
    // 遵循游戏内坐标系，上为正
    "pitch": [
      0.5,
      0.7
    ],
    // 水平方向偏转，会在两个数值之间取随机数
    // 遵循游戏内坐标系，右为正
    "yaw": [
      -0.1,
      0.1
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
  },
  // 移动速度，乘数
  "move_speed": {
    // 普通情况
    "base": 1.0,
    // 瞄准情况
    "aim": 0.7
  }
}
```

#### 枪械Display文件

存放表现效果类的数据。只有客户端需要读取，而服务端不读取。

注意！音效也在这里指定。

```json
{
    // 调用的模型，在包目录下的 models 文件夹中寻找，不可为空
    "model": "tac:gun/ak47_geo",
    // 调用的材质列表，用于加载模型材质、模型换肤，不可为空
    "textures": [
        {
            // 材质的识别名，default为必须存在，否则枪械加载失败
            // default材质将作为默认材质在渲染时调用
            "id": "default",
            // 调用的材质的路径，会在包目录下的 textures 文件夹中寻找
            "location": "tac:gun/uv/ak47",
            // 该材质的显示名
            "name": "tac.texture.ak47.default.name"
        },
        {
            // 材质的识别名
            "id": "blue",
            // 调用的材质的路径，会在包目录下的 textures 文件夹中寻找
            "location": "gun/uv/ak47_blue",
            // 该材质的显示名
            "name": "tac.texture.ak47.blue.name"
        }
    ],
    // GUI/HUD 界面的 2D 材质，在包目录下的 textures 文件夹中寻找，可为空，若为空，则对应位置不会渲染
    "hud": "tac:gun/hud/ak47",
    // 背包/快捷栏等容器中槽位显示的 2D 材质，在包目录下的 textures 文件夹中寻找，不建议为空
    "slot": "tac:gun/slot/ak47",
    // 调用的动画名，会在包目录下的 animations 文件夹中寻找，不建议为空
    "animation": "tac:ak47",
    // 调整各个视角下模型的变换参数，可为空
    "transform": {
        // 只有缩放需要在这里指定，旋转和位移使用模型内定位组。
        // 可以为空，若为空，则不缩放模型。
        "scale": {
            // 第三人称手部
            "thirdperson": [0.45, 0.45, 0.45],
            // 地面实体
            "ground": [0.45, 0.45, 0.45],
            // 展示框
            "fixed": [0.6, 0.6, 0.6]
        }
    },
    // 抛壳的渲染数据，可为空，若为空，则枪械不抛壳
    "shell": {
        // 抛壳的运动速度
        "velocity": [8.0, 1.0, -0.5],
        // 抛壳随机变化的运动速度，乘 -1~1 后与上面的固定速度叠加
        "random_velocity": [0.0, 1.5, 0.0],
        // 抛壳的三轴角速度
        "angular_velocity": [45.0, -90.0, 15.0],
        // 抛壳渲染存活时间，单位为秒
        "living_time": 1.0
    },
    // 枪械音效，在包目录下 sounds 文件夹内寻找，不建议为空
    "sounds": {
        "shoot": "tac:ak47_shoot",
        "dry_fire": "tac:ak47_dry_fire",
        "reload_empty": "tac:ak47_reload_empty",
        "reload_tactical": "tac:ak47_reload_tactical",
        "inspect": "tac:ak47_inspect",
        "draw": "tac:ak47_draw"
    }
}
```

#### 弹药定义文件

```json
{
  "name": "tac.ammo.762x39.name",
  "display": "tac:762x39_display",
  // 堆叠数量
  "stack_size": 60
}
```

#### 弹药Display文件

```json
{
    "model": "ammo/762x39.geo.json",
    "texture": "ammo/uv/762x39.png",
    "slot": "ammo/slot/762x39.png"
}
```
