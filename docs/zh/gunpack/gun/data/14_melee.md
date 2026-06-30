---
order: 14
---

# 枪械近战

本页介绍枪械近战攻击的配置。

## 枪械近战 `melee`

**可选**，对象类型。控制枪械的近战攻击行为。结构分为两层：

- **枪械顶层**：`distance` 和 `cooldown`，会与当前生效的近战数据**加和**。
- **`default` 子对象**：基础近战数据，安装带有 `melee` 属性的配件（如刺刀）时被**整体替换**。

```json
"melee": {
  "distance": 1,
  "cooldown": 0.7,
  "default": {
    "animation_type": "melee_stock",
    "distance": 1,
    "range_angle": 30,
    "cooldown": 0,
    "damage": 2,
    "knockback": 0.5,
    "prep": 0.1
  }
}
```

此例来自默认枪包 `m4a1_data.json`。

### 枪械顶层字段

| 键          | 说明                                 |
|------------|------------------------------------|
| `distance` | 近战攻击范围加成，与当前近战数据的 `distance` 加和    |
| `cooldown` | 近战冷却时间（秒）加成，与当前近战数据的 `cooldown` 加和 |

### `default` 子对象字段

| 键                | 说明                                            |
|------------------|-----------------------------------------------|
| `animation_type` | 动画类型，可选 `melee_push`（推击）或 `melee_stock`（枪托打击） |
| `distance`       | 近战攻击范围                                        |
| `range_angle`    | 近战攻击范围角度（锥形）                                  |
| `cooldown`       | 近战冷却时间（秒），可省略，默认 0                            |
| `damage`         | 近战伤害                                          |
| `knockback`      | 近战击退效果                                        |
| `prep`           | 近战前摇时长（秒）                                     |

### 动画选择逻辑

实际播放的动画由枪械当前装配情况决定：

- **`melee_push`**：推击动画。若枪械安装了枪托，会自动变为 `melee_stock`。
- **`melee_stock`**：枪托打击动画，适用于有枪托或使用刺刀前的默认枪托攻击。
- **刺刀动画**：安装带有 `melee` 数据的刺刀配件后，播放刺刀独立的攻击动画，不受 `animation_type` 影响。

### 配件覆盖逻辑

当枪械安装了带有 `melee` 数据块的配件（如刺刀）时，该配件的 `melee` 数据会**整体替换** `default` 子对象。替换后，枪械顶层 `distance` 和 `cooldown` 依然与配件数据加和：

```
最终距离 = 枪械顶层 distance + 配件 distance
最终冷却 = 枪械顶层 cooldown + 配件 cooldown
```
