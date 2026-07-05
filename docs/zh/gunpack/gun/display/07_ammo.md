---
order: 7
---

# 子弹特效

本页介绍枪械端覆盖弹药默认弹道特效的配置。display 中 `ammo` 字段的所有子项**均会覆盖**弹药自身 display 中的对应字段。

## 曳光弹颜色 `ammo.tracer_color`

**可选**，字符串类型。RGB 十六进制颜色码，如 `#FF8888`。不填则使用弹药自身的曳光弹颜色（默认为 `#FFFFFF`）。

```json
"ammo": {
  "tracer_color": "#FF8888"
}
```

此例来自默认枪包 `ak47_display.json`（淡红色曳光）。注意曳光弹的发射间隔由 data 中的 `bullet.tracer_count_interval` 控制。

## 弹孔贴花 `ammo.enable_bullet_hole`

**可选**，布尔值。是否保留命中方块表面的弹孔贴花。不填则使用弹药自身的设置。

```json
"ammo": {
  "enable_bullet_hole": true
}
```

## 命中粒子 `ammo.hit_surface_particles`（内测版功能）

**可选**，数组类型。子弹命中方块表面时额外播放的粒子效果。每个元素为一个对象：

| 键                | 类型   | 说明                         |
|------------------|------|----------------------------|
| `name`           | 字符串  | 粒子 ID（如 `minecraft:flame`） |
| `count`          | 数值   | 粒子数量                       |
| `life_time`      | 数值   | 粒子存活时间（tick，1/20秒）         |
| `surface_offset` | 数值   | 粒子生成点离表面的偏移距离              |
| `random_offset`  | 数值   | 粒子随机偏移半径                   |
| `normal_speed`   | 数值   | 沿表面法线方向的速度                 |
| `random_speed`   | 数值   | 随机速度偏移                     |
| `spread_angle`   | 数值   | 扩散角度（度）                    |

```json
"ammo": {
  "hit_surface_particles": [
    {
      "name": "minecraft:flame",
      "count": 10,
      "life_time": 12,
      "surface_offset": 0.04,
      "random_offset": 0.015,
      "normal_speed": 0.07,
      "random_speed": 0.025,
      "spread_angle": 30
    },
    {
      "name": "minecraft:smoke",
      "count": 4,
      "life_time": 24,
      "surface_offset": 0.04,
      "normal_speed": 0.025,
      "random_speed": 0.02,
      "spread_angle": 45
    }
  ]
}
```

此例来自默认枪包 `ak47_display.json`（该文件中为注释掉的示例，默认不启用）。

## 拖尾粒子 `ammo.particle`

**可选**，对象类型。子弹飞行路径上的拖尾粒子效果。

| 键           | 类型    | 说明                                                                                       |
|-------------|-------|------------------------------------------------------------------------------------------|
| `name`      | 字符串   | 粒子 ID，具体可选粒子参考 [Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/%E7%B2%92%E5%AD%90) |
| `delta`     | 数组    | 粒子生成的区域偏移 `[x, y, z]`，默认 `[0, 0, 0]`                                                     |
| `speed`     | 数值    | 粒子速度，必须 ≥ 0                                                                              |
| `life_time` | 数值    | 粒子存在时间（tick），默认 20                                                                       |
| `count`     | 数值    | 生成数量。子弹高速移动时可增大此值填满轨迹间隙                                                                  |

```json
"ammo": {
  "particle": {
    "name": "campfire_signal_smoke",
    "delta": [0, 0, 0],
    "speed": 0,
    "life_time": 50,
    "count": 5
  }
}
```

此例来自默认枪包 `ak47_display.json`（该文件中为注释掉的示例，默认不启用）。

::: tip
`hit_surface_particles` 和 `particle` 均为**枪械端覆盖项**——如果枪械 display 中未指定，则使用弹药自身 display 中的定义。若要在枪械上禁用弹药已有的粒子，可将对应字段设为空对象/数组。
:::

::: tip 另请参见
[data - 子弹特效](../data/07_tracer) —— 曳光弹的发射间隔由 data 中的 `bullet.tracer_count_interval` 控制。
:::
