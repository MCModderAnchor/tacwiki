---
order: 5
---

# 枪口火焰

本页介绍枪口火焰的贴图、缩放以及新版粒子系统配置。

## 枪口火焰 `muzzle_flash`

**可选**，对象类型。不填则不显示枪口火焰。

### 基础字段

| 键         | 类型    | 必填   | 说明                       |
|-----------|-------|------|--------------------------|
| `type`    | 枚举   | 否    | 枪口效果类型，可选 `default`（旧版四边形火光）或 `renew`（新版 snowstorm 粒子系统），默认 `default` |
| `texture` | 字符串   | 否    | 火焰贴图路径，在 `textures/` 下寻找（仅 `default` 模式使用） |
| `scale`   | 数值    | 否    | 火焰与烟雾大小缩放，默认 `1.0` |

### 粒子系统字段（仅 `type: renew` 有效）<Badge text="内测版功能" type="warning" />

| 键                       | 类型    | 必填   | 说明                                |
|-------------------------|-------|------|-----------------------------------|
| `first_person_flash`    | 字符串   | 否    | 第一人称枪焰粒子定义 id，默认 `tacz:muzzle_flash` |
| `first_person_smoke`    | 字符串   | 否    | 第一人称枪烟粒子定义 id，默认 `tacz:muzzle_flash_smoke` |
| `third_person_flash`    | 字符串   | 否    | 第三人称枪焰粒子定义 id，默认 `tacz:muzzle_flash` |
| `third_person_smoke`    | 字符串   | 否    | 第三人称枪烟粒子定义 id，默认 `tacz:muzzle_flash_smoke` |
| `initial_speed_scale`   | 数值    | 否    | 粒子初速度倍率，默认 `1.0`。建议与 `scale` 保持一致 |
| `smoke_particle_count`  | 数值    | 否    | 烟雾粒子数量，默认 `0`（使用粒子定义内置默认值 15） |

### 旧版模式（default）

```json
"muzzle_flash": {
  "texture": "tacz:flash/common_muzzle_flash",
  "scale": 0.75
}
```

此例来自默认枪包 `ak47_display.json`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/flash/common_muzzle_flash.png`

默认枪包提供了一张通用枪口火焰贴图 `common_muzzle_flash`，可直接复用。`scale` 越大火光越大，建议根据枪械口径调整——手枪通常略小于步枪。

### 新版粒子系统（renew）

```json
"muzzle_flash": {
  "type": "renew",
  "scale": 0.75
}
```

仅设置 `type` 和 `scale` 时，所有粒子效果使用内置默认定义。此例等效于：

```json
"muzzle_flash": {
  "type": "renew",
  "scale": 0.75,
  "first_person_flash": "tacz:muzzle_flash",
  "first_person_smoke": "tacz:muzzle_flash_smoke",
  "third_person_flash": "tacz:muzzle_flash",
  "third_person_smoke": "tacz:muzzle_flash_smoke",
  "initial_speed_scale": 1.0,
  "smoke_particle_count": 0
}
```

#### 自定义粒子定义

四个粒子 id 字段可独立配置，以使用自定义粒子效果。显式设为 `null` 可禁用对应效果：

```json
"muzzle_flash": {
  "type": "renew",
  "scale": 0.75,
  "first_person_flash": "tacz:muzzle_flash",
  "first_person_smoke": "mypack:custom_smoke",
  "third_person_flash": "tacz:muzzle_flash",
  "third_person_smoke": null
}
```

此例中，第三人称不生成枪烟，第一人称枪烟使用自定义粒子定义 `mypack:custom_smoke`。

> 粒子定义文件位置：`{枪包根目录}/assets/{命名空间}/particle_definitions/xxx.particle.json`
>
> 内置默认定义：
> - `tacz:muzzle_flash` — 枪焰粒子，随机贴图帧，材质 `energy_swirl`
> - `tacz:muzzle_flash_smoke` — 枪烟粒子，贴图序列动画，含扩散和淡出

#### 初速度倍率 `initial_speed_scale`

控制烟雾粒子的扩散速度。默认 `1.0`，实际初速度 = `6 * initial_speed_scale`。建议与 `scale` 保持一致，以保证烟雾视觉密度与贴图大小匹配。

```json
"muzzle_flash": {
  "type": "renew",
  "scale": 0.6,
  "initial_speed_scale": 0.6
}
```

#### 烟雾粒子数量 `smoke_particle_count`

每次开火生成的烟雾粒子数量。设为 `0`（默认）时使用粒子定义内置值 15。大口径枪械可适当增加：

```json
"muzzle_flash": {
  "type": "renew",
  "scale": 2.0,
  "initial_speed_scale": 2.0,
  "smoke_particle_count": 25
}
```

此例来自默认枪包 `m107_display.json`。
