---
order: 5
---

# 枪口火焰

本页介绍枪口火焰的贴图、缩放以及新版粒子系统配置。

## 枪口火焰 `muzzle_flash`

**可选**，对象类型。不填则不显示枪口火焰。

### 基础字段

| 键         | 类型    | 必填     | 说明                                                                   |
|-----------|-------|--------|----------------------------------------------------------------------|
| `type`    | 枚举   | 否      | 枪口效果类型，可选 `default`（旧版贴图火光）或 `renew`（新版 snowstorm 粒子系统），默认 `default` |
| `texture` | 字符串   | 否      | 火焰贴图路径，在 `textures/` 下寻找（仅 `default` 模式使用）                           |
| `scale`   | 数值    | 否      | **枪焰**大小缩放，默认 `1.0`。`renew` 模式下枪烟由 `smoke_scale` 单独控制，不受此项影响         |

### 粒子系统字段（仅 `type: renew` 有效）<Badge text="内测版功能" type="warning" />

| 键                       | 类型    | 必填   | 说明                                |
|-------------------------|-------|------|-----------------------------------|
| `first_person_flash`    | 字符串   | 否    | 第一人称枪焰粒子定义 id，默认 `tacz:muzzle_flash` |
| `first_person_smoke`    | 字符串   | 否    | 第一人称枪烟粒子定义 id，默认 `tacz:muzzle_flash_smoke` |
| `third_person_flash`    | 字符串   | 否    | 第三人称枪焰粒子定义 id，默认 `tacz:muzzle_flash` |
| `third_person_smoke`    | 字符串   | 否    | 第三人称枪烟粒子定义 id，默认 `tacz:muzzle_flash_smoke` |
| `initial_speed_scale`   | 数值    | 否    | 枪烟扩散速度倍率，默认 `1.0`，与 `smoke_scale` 相互独立 |
| `smoke_scale`           | 数值    | 否    | 枪烟尺寸倍率，与 `scale` 完全独立，默认 `0`（使用粒子定义内置默认大小） |
| `smoke_particle_count`  | 数值    | 否    | 烟雾粒子数量，默认 `0`（使用粒子定义内置默认值 15） |

> `scale` 与 `smoke_scale` 互不影响：前者只管枪焰，后者只管枪烟。二者可任意组合，例如「小枪焰 + 大枪烟」。

### 旧版模式（default）

```json
"muzzle_flash": {
  "type": "default",
  "texture": "tacz:flash/common_muzzle_flash",
  "scale": 0.75
}
```

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/flash/common_muzzle_flash.png`

默认枪包提供了一张通用枪口火焰贴图 `common_muzzle_flash`，可直接复用。`scale` 越大火光越大，建议根据枪械口径调整——手枪通常略小于步枪。

::: warning
此模式只渲染贴图枪焰，**不会生成枪烟粒子**，`scale` 仅控制枪焰大小。

默认枪包中的枪械已全部改用 `renew` 模式，新枪包建议直接使用 `renew`。
:::

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
  "smoke_scale": 0,
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

#### 枪烟扩散速度 `initial_speed_scale`

控制枪烟粒子的扩散速度。默认 `1.0`，实际初速度 = `6 * initial_speed_scale`。与 `smoke_scale` 相互独立，可分别调整。

```json
"muzzle_flash": {
  "type": "renew",
  "scale": 0.75,
  "smoke_scale": 1.45,
  "initial_speed_scale": 1.5
}
```

#### 枪烟尺寸 `smoke_scale`

**与 `scale` 完全独立**，单独控制枪烟的贴图尺寸，不影响枪焰。

- 不填（默认 `0`）→ 枪烟使用粒子定义内置的默认大小
- 填写数值 → 枪烟按该倍率缩放

```json
"muzzle_flash": {
  "type": "renew",
  "scale": 0.75,
  "smoke_scale": 1.2
}
```

此例中枪焰按 `0.75` 缩放，枪烟按 `1.2` 缩放，两者互不影响。由于枪烟与枪焰独立，可以调出「小枪焰 + 大枪烟」这类组合，用于表现大口径弹药或特殊枪口装置。

各字段职责对照：

| 字段                     | 作用对象 | 说明                     |
|------------------------|------|------------------------|
| `scale`                | 枪焰   | 只影响枪焰贴图大小              |
| `smoke_scale`          | 枪烟   | 只影响枪烟贴图大小，与 `scale` 无关 |
| `initial_speed_scale`  | 枪烟   | 影响枪烟扩散速度               |
| `smoke_particle_count` | 枪烟   | 影响单次开火的枪烟粒子数量          |

::: tip
枪烟与枪焰在底层使用互不重叠的 Molang 变量命名空间（枪焰用 `muzzle_*`，枪烟用 `smoke_*`），因此修改任意一侧的配置都不会影响另一侧。
:::

::: tip 参考取值
默认枪包按枪械类别调校的 `smoke_scale` / `initial_speed_scale`，可作为起始参考（按枪烟由小到大排列）：

| 类别          | `smoke_scale`   | `initial_speed_scale` |
|-------------|-----------------|-----------------------|
| 手枪          | 1.0 ～ 1.35      | 与 `smoke_scale` 相同    |
| 小口径步枪       | 1.45            | 1.5                   |
| 大口径步枪 / 机枪  | 1.65            | 1.7                   |
| 霰弹枪         | 2.0             | 1.7                   |
| 狙击步枪        | 2.0             | 2.45                  |
| 反器材步枪       | 2.5             | 3.0                   |

上表是默认枪包的调校结果：口径越大、装药越多，枪烟越大越浓、扩散越快。两个值互不约束，实际枪包可按需自由组合。
:::

#### 烟雾粒子数量 `smoke_particle_count`

每次开火生成的烟雾粒子数量。设为 `0`（默认）时使用粒子定义内置值 15。大口径枪械可适当增加：

```json
"muzzle_flash": {
  "type": "renew",
  "scale": 2.0,
  "smoke_scale": 2.5,
  "initial_speed_scale": 3.0,
  "smoke_particle_count": 40
}
```

此例来自默认枪包 `m107_display.json`（12.7mm 反器材步枪，三项枪烟参数均高于常规步枪）。
