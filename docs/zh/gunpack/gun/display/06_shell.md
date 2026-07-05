---
order: 6
---

# 抛壳

本页介绍枪械抛壳效果的物理和渲染配置。**若整个 `shell` 字段为空，则枪械不抛壳。**

## 抛壳 `shell`

**可选**，对象类型。

| 键                  | 类型    | 说明                                  |
|--------------------|-------|-------------------------------------|
| `model`            | 字符串   | 覆盖弹药默认抛壳模型，不填则调用 ammo 的抛壳模型（内测版功能）  |
| `texture`          | 字符串   | 覆盖弹药默认抛壳贴图，不填则调用 ammo 的抛壳贴图 （内测版功能） |
| `initial_velocity` | 数组    | 抛壳初速度 `[x, y, z]`                   |
| `random_velocity`  | 数组    | 随机速度偏移，增大抛壳散布                       |
| `acceleration`     | 数组    | 抛壳加速度，通常 y 为负值模拟重力                  |
| `angular_velocity` | 数组    | 抛壳旋转角速度 `[x, y, z]`（度/秒）            |
| `living_time`      | 数值    | 弹壳渲染存活时间（秒）                         |

```json
"shell": {
  "initial_velocity": [5, 2, 1],
  "random_velocity": [1, 1, 0.25],
  "acceleration": [0.0, -10, 0.0],
  "angular_velocity": [360, -1200, 90],
  "living_time": 1.0
}
```

此例来自默认枪包 `ak47_display.json`。

`model` 和 `texture` 均可省略——大多数枪械直接使用弹药自身定义的抛壳模型。仅在需要独立调整弹壳外观时才覆盖这两个字段。其余物理参数通常都需要指定，决定了弹壳弹出和翻滚的方向、速度和持续时间。

各枪械的抛壳参数通常不同，例如手枪（deagle）和霰弹（aa12）的抛壳速度明显大于步枪：

```json
// deagle_display.json
"shell": {
  "initial_velocity": [8.0, 5.0, -0.5],
  "random_velocity": [2.5, 1.5, 0.25],
  "acceleration": [0.0, -20, 0.0],
  "angular_velocity": [720, -1280, 90],
  "living_time": 1.0
}
```

::: tip 另请参见
[data - 子弹实体属性](../data/06_bullet) —— 子弹的伤害、速度、穿透等物理属性由 data 控制。抛壳模型若不指定则默认来自弹药 display。
:::
