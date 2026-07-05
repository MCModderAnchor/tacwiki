---
order: 5
---

# 枪口火焰

本页介绍枪口火焰的贴图和缩放配置。

## 枪口火焰 `muzzle_flash`

**可选**，对象类型。不填则不显示枪口火焰。

| 键         | 类型    | 说明                       |
|-----------|-------|--------------------------|
| `texture` | 字符串   | 火焰贴图路径，在 `textures/` 下寻找 |
| `scale`   | 数值    | 火焰大小缩放                   |

```json
"muzzle_flash": {
  "texture": "tacz:flash/common_muzzle_flash",
  "scale": 0.75
}
```

此例来自默认枪包 `ak47_display.json`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/flash/common_muzzle_flash.png`

默认枪包提供了一张通用枪口火焰贴图 `common_muzzle_flash`，可直接复用。`scale` 越大火光越大，建议根据枪械口径调整——手枪通常略小于步枪。
