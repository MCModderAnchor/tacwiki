---
order: 16
---

# 过热

本页介绍枪械过热机制的配置。仅 minigun 等少数特殊枪械启用此功能。

## 过热 `heat`

**可选**，对象类型。控制枪械的过热积累、冷却和过热惩罚效果。

```json
"heat": {
  "max": 500,
  "per_shot": 2,
  "cooling_multiplier": 15,
  "cooling_delay": 5,
  "over_heat_time": 2500,
  "min_inaccuracy": 1,
  "max_inaccuracy": 1.2,
  "min_rpm_mod": 1,
  "max_rpm_mod": 1.2
}
```
此例来自默认枪包 `minigun_data.json`。

| 键                    | 说明                             |
|----------------------|--------------------------------|
| `max`                | 过热上限，达到后将触发过热状态                |
| `per_shot`           | 每发子弹产生的过热值                     |
| `cooling_multiplier` | 冷却倍率                           |
| `cooling_delay`      | 冷却延迟（ms），停火后等待此时间才开始冷却         |
| `over_heat_time`     | 过热后恢复延迟（ms），完全过热后需要等待此时间才可继续开火 |
| `min_inaccuracy`     | 最小精度影响倍率（热度 0% 时）              |
| `max_inaccuracy`     | 最大精度影响倍率（热度 100% 时）            |
| `min_rpm_mod`        | 最小射速影响倍率（热度 0% 时）              |
| `max_rpm_mod`        | 最大射速影响倍率（热度 100% 时）            |


### 过热积累与冷却

每发射一发子弹，热量增加 `per_shot` 点。当热量达到 `max` 时，枪械进入过热状态，必须等待 `over_heat_time` 毫秒后才能继续开火。

停火 `cooling_delay` 毫秒后，热量开始冷却。冷却量与时间的关系近似为：

```
冷却量 = cooling_multiplier × t²
```

其中 `t` 为冷却开始后经过的时间（秒）。

### 过热惩罚

精度和射速的惩罚倍率随热度进度（0 到 1）在最小值和最大值之间**线性插值**，再与原始属性值相乘：

- 热度 0% 时：精度倍率 = `min_inaccuracy`，射速倍率 = `min_rpm_mod`
- 热度 100% 时：精度倍率 = `max_inaccuracy`，射速倍率 = `max_rpm_mod`

通常最小值设为 `1`（无惩罚），最大值设为大于 `1` 的值（越热精度越差、射速越快或越慢）。
