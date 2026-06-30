---
order: 8
---
# 额外伤害

本页介绍护甲穿透、爆头倍率和距离衰减的配置。

## 护甲穿透 `extra_damage.armor_ignore`

**可选**，数值类型。护甲穿透率，默认 0（无穿透）。取值范围 0~1，例如 `0.25` 表示 25% 的伤害无视护甲。

```json
"extra_damage": {
  "armor_ignore": 0.25
}
```

## 爆头倍率 `extra_damage.head_shot_multiplier`

**可选**，数值类型。命中头部时伤害的倍率，默认 1。

```json
"extra_damage": {
  "head_shot_multiplier": 1.5
}
```

## 距离衰减 `extra_damage.damage_adjust`

**可选**，数组类型。按距离分段定义伤害值，实现距离衰减。

```json
"extra_damage": {
  "damage_adjust": [
    {"distance": 30, "damage": 9},
    {"distance": 60, "damage": 7.5},
    {"distance": "infinite", "damage": 6}
  ]
}
```

此例来自默认枪包 `ak47_data.json`（`damage_adjust` 为 `bullet.extra_damage` 下的字段，此处省略外层路径以突出结构）。

- 每个元素包含 `distance` 和 `damage` 两个键。
- `distance` 为距离阈值（米），`damage` 为该距离处判定的伤害值。
- 系统在相邻两个距离点之间做线性插值。
- 数组最后一项的 `distance` 必须为 `"infinite"`，表示超出此前所有距离后的伤害。如果不写此项，超出上述距离后伤害视为 0。

上例中：0~30m 伤害为 9，30~60m 伤害从 9 线性递减至 7.5，60m 以上递减至 6 并保持不变。
