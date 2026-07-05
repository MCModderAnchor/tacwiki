---
order: 11
---

# 手柄震动

本页介绍 Controllable 模组的手柄震动适配配置。

## 手柄震动 `controllable`

**可选**，对象类型。安装 Controllable 模组后，玩家使用手柄操作时的震动强度配置。每种开火模式独立设定：

| 键       | 说明        |
|---------|-----------|
| `semi`  | 半自动模式震动配置 |
| `auto`  | 全自动模式震动配置 |
| `burst` | 连发模式震动配置  |

每种模式下包含三个字段：

| 键                | 类型     | 说明                           |
|------------------|--------|------------------------------|
| `low_frequency`  | 数值     | 低频马达强度（左手柄，个头较小），范围 0~1，1 最大 |
| `high_frequency` | 数值     | 高频马达强度（右手柄，个头较大），范围 0~1，1 最大 |
| `time`           | 数值     | 震动持续时间（毫秒）                   |

```json
"controllable": {
  "semi": {
    "low_frequency": 0.25,
    "high_frequency": 0.5,
    "time": 100
  },
  "auto": {
    "low_frequency": 0.15,
    "high_frequency": 0.25,
    "time": 80
  },
  "burst": {
    "low_frequency": 0.25,
    "high_frequency": 0.5,
    "time": 100
  }
}
```

此例来自默认枪包 `ak47_display.json`。

通常全自动模式（`auto`）的强度和持续时间会低于半自动（`semi`），以适应连续射击的震动节奏。如果枪械只支持某一种开火模式，其他模式可省略不写——如手枪通常只写 `semi`。
