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

#### 枪烟发射方向 <Badge text="内测版功能" type="warning" />

默认情况下枪烟从枪口向四周均匀散开。配置以下字段后，可以指定枪烟朝哪个方向喷出、以及散布范围有多大。

**坐标系**（与枪械模型一致）：

| 轴 | 方向 |
|---|---|
| `-Z` | 枪口正前方 |
| `+Y` / `-Y` | 上 / 下 |
| `+X` / `-X` | 右 / 左 |

方向有**两种写法**，二选一即可。同时配置时**角度写法优先**，向量写法会被忽略。

##### 向量写法 `smoke_direction`

三维数组。可以只写一个方向，也可以写多组（最多 4 组），多组时每个粒子随机挑选其中一组。**向量长度无所谓**，会自动归一化。

```json
"muzzle_flash": {
  "type": "renew",
  "smoke_direction": [0, 1, -1]
}
```

上面的例子让枪烟朝斜上前方喷出。多方向写法用于表现离散的排烟方式，例如制退器朝左右两侧排气：

```json
"smoke_direction": [
  [0.9, 0.4, -0.3],
  [-0.9, 0.4, -0.3]
]
```

配合 `smoke_spread` 控制散布范围：**可选**，数值，默认 `0.35`。数值越大锥形越散，`0` 为严格平行喷射。仅在配置了 `smoke_direction` 时生效。

##### 角度写法 `smoke_directions`

用角度而非向量描述方向，适合需要精确锥角的场合。每个方向是一个对象：

| 键 | 类型 | 范围 | 说明 |
|---|---|---|---|
| `plane_angle` | 数值 | -180 ~ 180 | 绕枪口轴线的方位角。**`0` = 正右，`90` = 正上，`±180` = 正左，`-90` = 正下** |
| `out_angle` | 数值 | -90 ~ 90 | 从垂直于枪管的平面向枪口前方抬起的角度。**`0` = 完全朝侧面，`90` = 正前方**，负值朝枪身后方 |

单个方向直接写对象，多方向写数组（最多 4 组）：

```json
"muzzle_flash": {
  "type": "renew",
  "smoke_directions": { "plane_angle": 90, "out_angle": 45 },
  "smoke_spread_angle": 15
}
```

配合 `smoke_spread_angle` 控制圆锥半角：**可选**，数值，单位为度，默认 `20`，范围 `0` ~ `180`。仅在配置了 `smoke_directions` 时生效。

::: tip 两种写法的区别
- **向量写法**：在主方向上加三个分量各自独立的随机扰动，再归一化。截面偏方形，适合快速定个大概方向。
- **角度写法**：真正的圆锥面均匀采样，`smoke_spread_angle` 填多少度就是多少度，侧向截面是圆的。

需要精确的锥形散布时用角度写法。
:::

##### 常用方向速查

| 想要的效果 | 向量写法 | 角度写法 |
|---|---|---|
| 正前方 | `[0, 0, -1]` | `out_angle: 90` |
| 斜上前方 45° | `[0, 1, -1]` | `plane_angle: 90`、`out_angle: 45` |
| 正上方 | `[0, 1, 0]` | `plane_angle: 90`、`out_angle: 0` |
| 正右方 | `[1, 0, 0]` | `plane_angle: 0`、`out_angle: 0` |
| 制退器左右两侧 | `[[1,0,0], [-1,0,0]]` | 两组，`plane_angle` 取 `0` 和 `180`、`out_angle: 0` |

::: tip 配件优先
枪口配件也能配置这四个字段。**配件配了就用配件的，配件没配才用枪械 display 的值。** 理由与 `scale`、`smoke_scale` 等倍率字段不同——枪口配件本身就会替换枪口模型，排烟方式随之接管，因此这里是覆盖而非叠加。

两套字段是**一起判断**的：配件只要配了 `smoke_direction` 或 `smoke_directions` 中的任意一个，枪械 display 的两个方向字段都会被顶掉。
:::
