---
order: 2
---

# 弹药效果进阶

本页列出弹药 `xxx_ammo_display.json` 的所有可用字段，详情见各小节。

弹药效果文件位于 `assets/{命名空间}/display/ammo/` 目录下。基础的创建流程见 [添加弹药](ammo)，本页只讲字段。

## 字段总览

| 字段                         | 类型    | 必填   | 说明                                                 |
|----------------------------|-------|------|----------------------------------------------------|
| `model`                    | 字符串   | 是*   | 弹药堆模型（制作台、展示框中渲染）                                  |
| `texture`                  | 字符串   | 是*   | 弹药堆模型贴图                                            |
| `slot`                     | 字符串   | 否    | 背包/快捷栏槽位 2D 贴图                                     |
| `entity`                   | 对象    | 否    | 子弹实体模型（火箭弹等需要绘制弹头的弹药）                              |
| `shell`                    | 对象    | 否    | 弹壳模型（枪械抛壳时渲染）                                      |
| `particle`                 | 对象    | 否    | 弹药实体飞行时拖尾的粒子 <Badge text="内测版功能" type="warning" /> |
| `hit_surface_particles`    | 数组    | 否    | 命中方块表面时播放的粒子 <Badge text="内测版功能" type="warning" /> |
| `hit_block_particle_count` | 数值    | 否    | 命中方块时的粒子数量 <Badge text="内测版功能" type="warning" /> |
| `enable_bullet_hole`       | 布尔值   | 否    | 是否保留弹孔贴花，默认 `true` <Badge text="内测版功能" type="warning" /> |
| `tracer_color`             | 字符串   | 否    | 曳光颜色（须为 `#RRGGBB`），默认白色                            |
| `transform`                | 对象    | 否    | 各场景下的模型缩放                                          |

> \* 弹药堆模型与贴图在不显示堆叠模型时可省略。

## 模型与贴图

### 弹药堆模型 `model`

**必填**，字符串类型。弹药堆在制作台、展示框中渲染所用的模型，在 `geo_models/ammo/` 下寻找。

```json
"model": "tutorial:ammo/my_ammo_geo"
```

> 文件位置：`{枪包根目录}/assets/{命名空间}/geo_models/ammo/my_ammo_geo.json`

弹药堆模型支持三个定位组，放置方法与枪械模型一致：

| 定位组               | 用途         |
|-------------------|------------|
| `fixed`           | 展示框中的模型定位组 |
| `thirdperson_hand` | 第三人称手部模型定位组 |
| `ground`          | 掉落物模型定位组   |

### 贴图 `texture`

**必填**，字符串类型。弹药堆模型使用的贴图，在 `textures/ammo/uv/` 下寻找。

```json
"texture": "tutorial:ammo/uv/my_ammo"
```

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/ammo/uv/my_ammo.png`

### 槽位贴图 `slot`

**可选**，字符串类型。背包、快捷栏等容器中显示的 2D 图标贴图，在 `textures/ammo/slot/` 下寻找。

```json
"slot": "tutorial:ammo/slot/my_ammo"
```

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/ammo/slot/my_ammo.png`

推荐分辨率 **64×64**，制作方式与枪械的[槽位贴图](../gun/display/03_hud.md#槽位贴图-slot)一致。

### 子弹实体模型 `entity`

**可选**，对象类型。子弹飞行时渲染的实体模型，通常用于火箭弹等需要绘制出弹头的弹药。

| 键         | 类型  | 说明      |
|-----------|-----|---------|
| `model`   | 字符串 | 实体模型路径  |
| `texture` | 字符串 | 实体模型贴图路径 |

```json
"entity": {
  "model": "tutorial:ammo_entity/my_ammo_entity_geo",
  "texture": "tutorial:ammo_entity/my_ammo_entity"
}
```

> - 模型：`{枪包根目录}/assets/{命名空间}/geo_models/ammo_entity/my_ammo_entity_geo.json`
> - 贴图：`{枪包根目录}/assets/{命名空间}/textures/ammo_entity/my_ammo_entity.png`

::: tip
一般来说，原点 `(0, 0, 0)` 应该是弹药实体模型的中心点，且模型的 Pivot Point 应位于 `(0, 0, 0)`。
:::

### 弹壳模型 `shell`

**可选**，对象类型。自动武器抛壳时渲染的模型。结构与 `entity` 相同。

| 键         | 类型  | 说明      |
|-----------|-----|---------|
| `model`   | 字符串 | 弹壳模型路径  |
| `texture` | 字符串 | 弹壳模型贴图路径 |

```json
"shell": {
  "model": "tutorial:shell/my_ammo_shell",
  "texture": "tutorial:shell/my_ammo_shell"
}
```

> - 模型：`{枪包根目录}/assets/{命名空间}/geo_models/shell/my_ammo_shell.json`
> - 贴图：`{枪包根目录}/assets/{命名空间}/textures/shell/my_ammo_shell.png`

## 粒子

### 开火拖尾 `particle` <Badge text="内测版功能" type="warning" />

**可选**，对象类型。弹药实体飞行时拖尾的粒子效果。

| 键           | 类型  | 默认值       | 说明                    |
|-------------|-----|-----------|-----------------------|
| `name`      | 字符串 | —         | 粒子 ID（如 `minecraft:flame`） |
| `delta`     | 数组  | `[0,0,0]` | 粒子位置的偏移量              |
| `speed`     | 数值  | `0`       | 粒子初速度                 |
| `life_time` | 数值  | `20`      | 粒子存活时间（tick）           |
| `count`     | 数值  | `1`       | 每次生成的粒子数量             |

```json
"particle": {
  "name": "minecraft:flame",
  "delta": [0, 0, 0],
  "speed": 0.0,
  "life_time": 10,
  "count": 1
}
```

### 命中表面粒子 `hit_surface_particles` <Badge text="内测版功能" type="warning" />

**可选**，数组类型。子弹命中方块表面时额外播放的粒子效果，用于表现弹着点扬尘、火花等。每个元素为一个对象：

| 键                | 类型  | 默认值    | 上限  | 说明                        |
|------------------|-----|--------|-----|---------------------------|
| `name`           | 字符串 | —      | —   | 粒子 ID                     |
| `count`          | 数值  | `1`    | 32  | 生成的粒子数量                   |
| `count_min`      | 数值  | —      | 32  | 数量随机范围下限                  |
| `count_max`      | 数值  | —      | 32  | 数量随机范围上限                  |
| `count_range`    | 数组  | —      | 32  | 数量随机范围 `[下限, 上限]`，**优先级高于上面两项** |
| `life_time`      | 数值  | `20`   | 200 | 粒子存活时间（tick）              |
| `color`          | 字符串 | —      | —   | 粒子颜色                      |
| `alpha`          | 数值  | —      | —   | 粒子不透明度                    |
| `scale`          | 数值  | —      | —   | 粒子大小倍率                    |
| `surface_offset` | 数值  | `0.03` | 1.0 | 粒子沿表面法线的初始偏移              |
| `random_offset`  | 数值  | `0.0`  | 1.0 | 粒子初始位置的随机偏移               |
| `normal_speed`   | 数值  | `0.08` | 2.0 | 沿表面法线方向的初速度               |
| `random_speed`   | 数值  | `0.02` | 2.0 | 初速度的随机分量                  |
| `spread_angle`   | 数值  | `30.0` | 89.0 | 粒子扩散的锥形半角（度）              |

```json
"hit_surface_particles": [
  {
    "name": "minecraft:crit",
    "count_range": [3, 6],
    "life_time": 12,
    "color": "#FFE7A0",
    "surface_offset": 0.05,
    "normal_speed": 0.15,
    "spread_angle": 45
  }
]
```

::: tip 数量三选一
`count_range`、`count_min` / `count_max`、`count` 三者是**优先级关系**，从高到低依次为：

1. `count_range` —— 写了就用它
2. `count_min` / `count_max` —— 没写 `count_range` 时用
3. `count` —— 上面都没写时用，同时也是另两项缺省时的回退值

所以只需要挑一种写法，不必三个都填。
:::

> 超出上限的取值会被**静默钳制**到上限，不会报错。例如 `spread_angle` 填 `120`，实际按 `89` 处理。

### 命中方块粒子数量 `hit_block_particle_count` <Badge text="内测版功能" type="warning" />

**可选**，数值类型。命中方块时生成的粒子数量。

```json
"hit_block_particle_count": 8
```

## 弹孔与曳光

### 弹孔贴花 `enable_bullet_hole` <Badge text="内测版功能" type="warning" />

**可选**，布尔值，默认 `true`。是否保留命中方块表面的弹孔贴花。

```json
"enable_bullet_hole": false
```

此例表示该弹药命中时不留弹孔。

::: tip 枪械侧可以覆盖
枪械 display 的 `ammo.enable_bullet_hole` 也有同名字段，且**优先级更高**：枪械配了就用枪械的，枪械没配才用这里的值。详见 [枪械 display - 弹药](../gun/display/07_ammo)。
:::

### 曳光颜色 `tracer_color`

**可选**，字符串类型，默认白色。曳光弹拖尾的颜色。

格式必须是 **`#` 加六位十六进制**（`#RRGGBB`）：

```json
"tracer_color": "#FF6060"
```

此例为淡红色曳光。

::: caution 格式要求严格
只接受 `#RRGGBB` 这一种写法。写成 `0xFF6060`、`FF6060`、`#F60` 等其它形式都**不会报错**，但会被静默忽略并回退成白色——排查起来很费时间。

注意区分大小写无所谓（`#ff6060` 也可以），但 `#` 和六位数字都不能少。
:::

::: tip
枪械 display 的 `ammo.tracer_color` 同样可以配置此项，且**优先级更高**。数据层的 `bullet.tracer_count_interval` 则控制曳光的发射间隔，两者分工不同。
:::

## 缩放 `transform`

**可选**，对象类型。弹药堆模型在不同场景下的缩放倍率。三个场景键都嵌在 `scale` 之下：

| 键                         | 类型 | 默认值                 | 场景     |
|---------------------------|-----|---------------------|--------|
| `scale.thirdperson`       | 数组 | `[0.75, 0.75, 0.75]` | 第三人称手部 |
| `scale.ground`            | 数组 | `[0.75, 0.75, 0.75]` | 掉落物    |
| `scale.fixed`             | 数组 | `[1.5, 1.5, 1.5]`    | 展示框    |

```json
"transform": {
  "scale": {
    "thirdperson": [0.75, 0.75, 0.75],
    "ground": [0.75, 0.75, 0.75],
    "fixed": [1.5, 1.5, 1.5]
  }
}
```

数组的三个分量分别对应 X / Y / Z 三个方向，可以分别设置，用于修正模型的宽高比。

不填 `transform` 或其下的 `scale` 时，使用上表中的默认值。

## 文件结构

配置完以上字段后，弹药显示相关文件结构如下：

```
{枪包根目录}
└─ assets
   └─ {命名空间}
      ├─ display
      │   └─ ammo
      │       └─ my_ammo_display.json
      ├─ geo_models
      │   ├─ ammo
      │   │   └─ my_ammo_geo.json
      │   ├─ ammo_entity
      │   │   └─ my_ammo_entity_geo.json
      │   └─ shell
      │       └─ my_ammo_shell.json
      └─ textures
          ├─ ammo
          │   ├─ slot
          │   │   └─ my_ammo.png
          │   └─ uv
          │       └─ my_ammo.png
          ├─ ammo_entity
          │   └─ my_ammo_entity.png
          └─ shell
              └─ my_ammo_shell.png
```

---

::: tip 另请参见
- [添加弹药](ammo) —— 弹药的创建与注册流程
- [枪械 display - 弹药](../gun/display/07_ammo) —— 枪械侧的弹药相关字段，含优先级更高的覆盖项
:::
