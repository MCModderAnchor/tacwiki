---
order: 5
---
# 开火机制

本页介绍射速、开火模式、模式数值修正、连发数据和蓄力扳机的配置。

## 射速 `rpm`

**必填**，数值类型。每分钟射出弹药量，最大不应超过 1200。

```json
"rpm": 600
```
::: caution
每次射击后有 `60 / rpm` 秒的冷却间隔，在此期间枪械无法执行换弹、拉栓上膛、检视等操作。低 rpm 枪械的间隔更长，操作等待感更明显。
:::

## 开火模式 `fire_mode`

**必填**，数组类型。枪械可用的开火模式列表。

| 值       | 说明                |
|---------|-------------------|
| `semi`  | 半自动，每次扣扳机发射一发     |
| `auto`  | 全自动，按住扳机持续发射      |
| `burst` | 多连发，每次扣扳机发射固定数量子弹 |

```json
"fire_mode": ["auto", "semi"]
```

数组中允许多种模式共存，玩家可通过快慢机（默认按 `B`）切换。

## 开火模式数值修正 `fire_mode_adjust`

**可选**，对象类型。为不同开火模式分别设置数值修正，修正方式为**加算**。

```json
"fire_mode_adjust": {
  "auto": {
    "damage": -5,
    "rpm": 380,
    "speed": -30,
    "knockback": 0,
    "armor_ignore": -0.2,
    "head_shot_multiplier": -0.25,
    "aim_inaccuracy": 0.2,
    "other_inaccuracy": 0.5
  }
}
```

此例来自默认枪包 `mk14_data.json`。

可修正的字段：

| 键                      | 说明    |
|------------------------|-------|
| `damage`               | 伤害    |
| `rpm`                  | 射速    |
| `speed`                | 子弹初速度 |
| `knockback`            | 击退    |
| `armor_ignore`         | 护甲穿透率 |
| `head_shot_multiplier` | 爆头倍率  |
| `aim_inaccuracy`       | 瞄准散布  |
| `other_inaccuracy`     | 非瞄准散布 |

::: tip
修正值为加算，例如基础伤害为 9，`semi` 下 `damage` 设为 2，则半自动模式下的实际伤害为 11。不填字段则该项不做修正。
:::

## 连发数据 `burst_data`

**可选**，对象类型。仅在 `fire_mode` 包含 `burst` 时被调用。

```json
"burst_data": {
  "continuous_shoot": false,
  "count": 3,
  "bpm": 850,
  "min_interval": 0.45
}
```

此例来自默认枪包 `qbz_95_data.json`。

| 键                  | 类型   |  说明            |
|--------------------|------|----------------|
| `continuous_shoot` | 布尔值  | 是否按住扳机连续发射     |
| `count`            | 数值   | 每组连发的子弹数       |
| `bpm`              | 数值   | 组内连发射速（发/分钟）   |
| `min_interval`     | 数值   | 每组连发之间的最小间隔（秒） |

## 蓄力扳机 `charging`

**可选**，对象类型。为每种开火模式（`semi` / `auto` / `burst`）分别设置蓄力参数。

```json
"charging": {
  "semi": {
    "type": "hold",
    "increase_per_tick": 0.1,
    "decrease_per_tick": 0.5,
    "decrease_on_fire": 0.0,
    "max_charge": 1.0,
    "fire_threshold": 0.6,
    "charge_during_cooldown": false
  },
  "auto": {
    "type": "hold",
    "increase_per_tick": 0.2,
    "decrease_per_tick": 0.2,
    "decrease_on_fire": 0.1,
    "max_charge": 4.0,
    "fire_threshold": 1.5
  }
}
```

### 蓄力模式 `type`

| 值       | 说明                     |
|---------|------------------------|
| `auto`  | 按住扳机蓄力，蓄满后自动发射         |
| `hold`  | 按住扳机蓄力，松开扳机时发射（需达到阈值）  |
| `delay` | 按下扳机后自动蓄力，蓄满后自动发射，无法取消 |

### 参数说明

| 键                        | 说明                                                                                               |
|--------------------------|--------------------------------------------------------------------------------------------------|
| `increase_per_tick`      | 按下扳机时每 tick 增加的蓄力进度                                                                              |
| `decrease_per_tick`      | 松开扳机时每 tick 减少的蓄力进度                                                                              |
| `decrease_on_fire`       | 开火后削减的蓄力进度。`auto` 模式下不为零时，蓄满第一发后可按住扳机持续开火；`hold` 模式下若开火后进度仍大于阈值会不受控制持续开火；`delay` 模式下此值无效，始终重置为 0 |
| `max_charge`             | 最大蓄力进度                                                                                           |
| `fire_threshold`         | 开火阈值，蓄力进度达到此值才允许发射（仅 `hold` 模式生效）                                                                |
| `charge_during_cooldown` | 是否允许在射击冷却间隔期间进行蓄力，默认 `true`                                                                      |
