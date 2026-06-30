---
order: 6
---
# 子弹实体属性

本页介绍子弹的基础物理属性配置。

## 基础属性

### 伤害 `bullet.damage`

**必填**，数值类型。每发弹丸的单发基础伤害。霰弹的总伤害等于此值乘以 `bullet.bullet_amount`。

```json
"bullet": {
  "damage": 9
}
```

### 弹丸数 `bullet.bullet_amount`

**可选**，数值类型。每次射击发射的弹丸数量，默认 1。仅在霰弹等特殊枪械上填写大于 1 的值。

```json
"bullet": {
  "bullet_amount": 9
}
```

### 初速度 `bullet.speed`

**必填**，数值类型。子弹初速度（m/s）。注意游戏内全局弹速默认乘 2，即实际速度为此值的两倍。

```json
"bullet": {
  "speed": 250
}
```

## 存活与穿透

### 存活时间 `bullet.life`

**必填**，数值类型。子弹最长存活时间（秒），超时后消失。

```json
"bullet": {
  "life": 0.8
}
```

### 穿透数 `bullet.pierce`

**可选**，数值类型。子弹可穿透的实体数量，默认 0。

```json
"bullet": {
  "pierce": 1
}
```

## 物理系数

### 重力 `bullet.gravity`

**可选**，数值类型。子弹所受重力系数，默认 0。

```json
"bullet": {
  "gravity": 0.15
}
```

### 阻力 `bullet.friction`

**可选**，数值类型。子弹所受空气阻力，默认 0。

```json
"bullet": {
  "friction": 0.02
}
```

### 击退 `bullet.knockback`

**可选**，数值类型。子弹命中目标时的击退力度，默认 0。

```json
"bullet": {
  "knockback": 0
}
```

## 点燃与爆炸

### 点燃 `bullet.ignite`

**可选**，布尔值或对象类型。设置为 `false` 或忽略则不点燃。也可以配置为对象，分别控制实体和方块的点燃：

```json
"bullet": {
  "ignite": {
    "entity": false,
    "block": false
  }
}
```

::: tip
点燃实体和点燃方块均受服务器全局设置控制，如服务端关闭了对应选项，即使此处设为 `true` 也不会生效。
:::

### 点燃时长 `bullet.ignite_entity_time`

**可选**，数值类型。点燃实体的持续时间（秒），默认 2。仅当 `ignite.entity` 为 `true` 时有效。

```json
"bullet": {
  "ignite_entity_time": 2
}
```

### 爆炸 `bullet.explosion`

**可选**，对象类型。不填则无爆炸效果。

```json
"bullet": {
  "explosion": {
    "explode": true,
    "damage": 120,
    "radius": 3,
    "knockback": true,
    "destroy_block": true,
    "delay": 30
  }
}
```

此例来自默认枪包 `rpg7_data.json`。

| 键               | 类型   | 说明                |
|-----------------|------|-------------------|
| `explode`       | 布尔值  | 是否爆炸，默认 `false`   |
| `delay`         | 数值   | 延时爆炸（秒）           |
| `radius`        | 数值   | 爆炸半径（米/格）         |
| `damage`        | 数值   | 爆炸伤害              |
| `knockback`     | 布尔值  | 是否击退，默认 `false`   |
| `destroy_block` | 布尔值  | 是否破坏方块，默认 `false` |

::: tip
`knockback` 和 `destroy_block` 均需服务器在全局设置中启用对应选项才能生效。
:::

::: tip
曳光弹相关配置 `bullet.tracer_count_interval` 见[弹道特效](07_tracer)，额外伤害配置 `bullet.extra_damage` 见[额外伤害](08_extra_damage)。
:::
