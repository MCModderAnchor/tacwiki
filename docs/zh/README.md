# 永恒枪械工坊模组指南
[[toc]]   

## 枪械包数据结构

- 枪械包支持 zip 压缩格式和文件夹两种形式。zip 格式方便分发，文件夹形式方便枪械制作者制作使用。   
- 无论是压缩包还是文件夹，其文件结构都相同   
- 引用任意资源文件时，如果不加命名空间，则默认在本包的对应路径上寻找。   

#### 枪械包文件目录

```yaml
根目录   
└───tac   # 枪械包的命名空间，命名空间由此文件夹决定   
     ├─── ammo    
     │     ├──── data   # 弹药参数   
     │     │     ├──── 762x39.data.json   
     │     │     └──── 9mm.data.json   
     │     │   
     │     ├──── display   # 弹药的本地数据   
     │     │     ├──── 762x39.display.json   
     │     │     └──── 9mm.display.json   
     │     │   
     │     └──── index   # 弹药定义文件，弹药 id 由其文件名决定   
     │           ├──── 762x39.json   
     │           └──── 9mm.json   
     │   
     ├─── animations   # 动画文件夹   
     │     ├──── ak47.geo.gltf  # gltf 动画文件   
     │     └──── m16.geo.gltf   
     │   
     ├─── attachments   
     │     ├──── data   # 配件参数   
     │     │     ├──── sro_dot.data.json   
     │     │     └──── acog_4x.data.json   
     │     │   
     │     ├──── display   # 配件的本地数据   
     │     │     ├──── sro_dot.display.json   
     │     │     └──── acog_4x.display.json   
     │     │   
     │     └──── index   # 配件定义文件，配件 id 由其文件名决定   
     │           ├──── sro_dot.json   
     │           └──── acog_4x.json   
     │   
     ├─── guns   
     │     ├──── data   # 枪械参数   
     │     │     ├──── ak47.data.json   
     │     │     └──── m16.data.json   
     │     │   
     │     ├──── display   # 枪械的本地数据   
     │     │     ├──── ak47.display.json   
     │     │     └──── m16.display.json   
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
     │     │     ├──── 762x39.geo.json   
     │     │     └──── 9mm.geo.json   
     │     │   
     │     ├──── attachment   # 配件模型   
     │     │     ├──── sro_dot.geo.json   
     │     │     └──── acog_4x.geo.json   
     │     │   
     │     └──── gun   # 枪械模型   
     │           ├──── ak47.geo.json   
     │           └──── m16.geo.json   
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

#### 枪械定义文件

存放定义这个枪械的信息、dislpay文件和data文件的id。   

(下例: tac/guns/index/ak47.json)

```json
{
    // 枪械的显示名称和工具提示，支持本地化
    "name": "tac.gun.ak47.name",
    "tooltip": "tac.gun.ak47.tooltips",
    // 枪械的本地数据
    "display": "ak47.display.json",
    // 枪械参数
    "data": "ak47.data.json",
    // 枪械种类，标准待定
    "type": "rifle"
}
```

#### 枪械Data文件

储存服务端需要的数据，将写入物品nbt。

(下例: tac/guns/data/ak47.data.json)

```json
{
    // 指定枪械弹药
    "ammo": "tac:762x39"
}
```

#### 枪械Display文件

储存客户端需要而服务端不需要的数据。

(下例: tac/guns/display/ak47.display.json)

```json
{
    // 调用的模型，在包目录下的 models 文件夹中寻找
    "model": "gun/ak47.geo.json",
    // 调用的材质列表，用于加载模型材质、模型换肤
    "textures": [
        {
            // 材质的识别名，default为必须存在，否则枪械加载失败
            // default材质将作为默认材质在渲染时调用
            "id": "default",
            // 调用的材质的路径，在包目录下的 textures 文件夹中寻找
            "location": "gun/uv/ak47.png",
            // 该材质的显示名，要支持本地化
            "name": "tac.texture.ak47.default.name"
        },
        {
            // 材质的识别名
            "id": "blue",
            // 调用的材质的路径，在包目录下的 textures 文件夹中寻找
            "location": "gun/uv/ak47_blue.png",
            // 该材质的显示名，要支持本地化
            "name": "tac.texture.ak47.blue.name"
        }
    ],
    // GUI/HUD 界面的 2D 材质，在包目录下的 textures 文件夹中寻找
    "hud": "gun/hud/ak47.png",
    // 背包/快捷栏等容器中槽位显示的 2D 材质，在包目录下的 textures 文件夹中寻找
    "slot": "gun/slot/ak47.png",
    // 调用的动画名，在包目录下的 animations 文件夹中寻找
    "animation": "ak47.geo.gltf",
    // 调整各个视角下模型的变换参数
    "transform": {
        // 第三人称右手
	"thirdperson_righthand": {
		"rotation": [45, -115, 0],
		"translation": [0, -0.5, -0.5],
		"scale": [0.375, 0.375, 0.375]
	},
        // 第三人称左手
	"thirdperson_lefthand": {
		"rotation": [0, -45, 30],
		"translation": [1.75, 1.75, 1.75],
		"scale": [0.25, 0.25, 0.25]
	},
        // 地面实体
	"ground": {
		"translation": [-2.75, 2, -1.75],
		"scale": [0.375, 0.375, 0.375]
	},
        // 展示框
	"fixed": {
		"rotation": [0, 180, 0],
		"translation": [2, -2.25, 0],
		"scale": [0.4, 0.4, 0.4]
	}
    },
    // 抛壳的渲染数据
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
    // 枪械音效，在包目录下 sounds 文件夹内寻找
    "sounds": {
        "shoot": "ak47_shoot.ogg",
        "reload": "ak47_reload.ogg",
        "inspect": "ak47_inspect.ogg",
        "draw": "ak47_draw.ogg"
    }
}
```

#### 弹药定义文件

(下例: tac/ammo/index/762x39.json)

```json
{
    // 弹药的显示名称和工具提示，支持本地化
    "name": "tac.ammo.762x39.name",
    "tooltip": "tac.ammo.762x39.tooltips"
}
```

#### 弹药Data文件

(下例: tac/ammo/data/762x39.data.json)

```json
{
    // 子弹的出膛速度，单位为 '格/秒'
    "velocity": 40.0,
    // 堆叠数量
    "stack_size": 60
}
```

#### 弹药Display文件

(下例: tac/ammo/display/762x39.display.json)

```json
{
    "model": "ammo/762x39.geo.json",
    "texture": "ammo/uv/762x39.png",
    "slot": "ammo/slot/762x39.png"
}
```

#### 配件定义文件

(下例: tac/attachments/sro_dot.json)

```json
{
    // 配件的显示名称和工具提示，支持本地化
    "name": "tac.attachment.rad_dot.name",
    "tooltip": "tac.attachment.rad_dot.tooltips",
    //瞄具、下导轨、侧导轨、握把、枪口、枪托、弹匣扩容、枪管、特殊弹药
    "slot"
}
```

#### 配件Data文件

#### 配件Display文件
