---
order: 3
---

# 配件效果进阶

本页列出配件 `xxx_display.json` 的所有可用字段，详情见各小节。

## 字段总览

| 字段                       | 类型    | 必填   | 说明                             |
|--------------------------|-------|------|--------------------------------|
| slot                     | 字符串   | 是    | 背包/快捷栏槽位 2D 贴图                 |
| model                    | 字符串   | 否*   | 配件 3D 模型                       |
| texture                  | 字符串   | 否*   | 配件模型贴图                         |
| lod                      | 对象    | 否    | 低模配置（远距离渲染）                    |
| sounds                   | 对象    | 否    | 装卸音效，含 `install` / `uninstall` |
| scope                    | 布尔值   | 否    | 是否为筒状放大瞄具                      |
| sight                    | 布尔值   | 否    | 是否为红点/全息瞄具                     |
| zoom                     | 数组    | 否    | 瞄具放大倍率列表，可多档切换                 |
| fov                      | 数值    | 否    | 红点/全息开镜后枪身渲染 FOV（默认 70）        |
| views                    | 数组    | 否    | 各倍率对应的视角定位组索引，与 `zoom` 一一对应    |
| views_fov                | 数组    | 否    | 放大瞄具各倍率镜内 FOV，与 `zoom` 一一对应    |
| idle_scope_height_adjust | 数值    | 否    | 腰射状态下枪身高度偏移 <Badge text="内测版功能" type="warning" />             |
| show_mount               | 布尔值   | 否    | 安装瞄具后是否渲染枪械的 `mount` 定位组模型     |
| laser                    | 对象    | 否    | 激光/镭射配置                        |
| adapter                  | 字符串   | 否    | 配件接口标签                         |
| text_show                | 对象    | 否    | 配件模型上的文本渲染                     |
| show_muzzle              | 布尔值   | 否    | 安装后是否仍显示枪械默认枪口（刺刀用）            |
| muzzle_flash_offset      | 数值    | 否    | 枪口粒子发射点前移量（Blockbench 模型单位，16=1格），默认 `0` <Badge text="内测版功能" type="warning" /> |

> \* 弹药改装、弹匣类配件不渲染 3D 模型，无 `model` / `texture` 字段。

## 通用字段

绝大部分配件都需要以下字段。`model` / `texture` 可省略的唯一情况是配件**不显示 3D 模型**（如弹药改装、弹匣等纯数据配件）。

### 槽位贴图 `slot`

**必填**，字符串类型。背包、快捷栏等容器中显示的 2D 图标贴图，在 `textures/attachment/slot/` 下寻找。

```json
"slot": "tacz:attachment/slot/sight_t2"
```

此例来自默认枪包 `sight_t2_display.json`，对应文件 `textures/attachment/slot/sight_t2.png`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/attachment/slot/sight_t2.png`

制作方式与枪械的[槽位贴图](../gun/display/03_hud.md#槽位贴图-slot)一致，推荐分辨率 **64×64**。

### 模型 `model`

**可选**（纯数据配件可省略），字符串类型。配件的 3D 模型，在 `models/attachment/` 下寻找。

```json
"model": "tacz:attachment/sight_t2_geo"
```

> 文件位置：`{枪包根目录}/assets/{命名空间}/models/attachment/sight_t2_geo.json`

### 贴图 `texture`

**可选**（纯数据配件可省略），字符串类型。配件模型使用的贴图，在 `textures/attachment/uv/` 下寻找。

```json
"texture": "tacz:attachment/uv/sight_t2"
```

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/attachment/uv/sight_t2.png`

### 低模 `lod`

**可选**，对象类型。远距离渲染时使用的低面数模型和低分辨率贴图。

| 键          | 类型   | 说明      | 目录          |
|------------|------|---------|-------------|
| `model`    | 字符串  | 低模模型路径  | `models/`   |
| `texture`  | 字符串  | 低模贴图路径  | `textures/` |

```json
"lod": {
  "model": "tacz:attachment/lod/scope_lpvo_1_6",
  "texture": "tacz:attachment/lod/scope_lpvo_1_6"
}
```

此例来自默认枪包 `scope_lpvo_1_6_display.json`。默认枪包中瞄具和部分激光配件使用了 LOD。

> - 模型：`{枪包根目录}/assets/{命名空间}/models/attachment/lod/scope_lpvo_1_6.json`
> - 贴图：`{枪包根目录}/assets/{命名空间}/textures/attachment/lod/scope_lpvo_1_6.png`

::: tip 制作教程
[低精度模型（LOD）](../gun/06_lod) —— 包含低模建模、贴图绘制和游戏内实装的完整教程。
:::

### 装卸音效 `sounds`

**可选**，对象类型。安装和卸下配件时播放的音效。

| 键           | 说明      |
|-------------|---------|
| `install`   | 安装配件时播放 |
| `uninstall` | 卸下配件时播放 |

```json
"sounds": {
  "install": "tacz:attachments/muzzle_general",
  "uninstall": "tacz:attachments/muzzle_general"
}
```

此例来自默认枪包 `muzzle_silencer_mirage_display.json`。

#### 调整响度与音调 <Badge text="内测版功能" type="warning" />

与枪械音效一致，配件音效也可以写成**对象**，单独控制响度、音调及其随机浮动范围：

```json
"sounds": {
  "install": {
    "id": "tacz:attachments/muzzle_general",
    "volume": 0.8,
    "pitch": 1.1
  },
  "uninstall": "tacz:attachments/muzzle_general"
}
```

可用字段（`id` / `volume` / `pitch` / `volume_random_range` / `pitch_random_range`）与枪械音效完全相同，详见 [枪械 display - 音效](../gun/display/08_sounds)。

默认枪包提供了多套通用装卸音效：
- `attachment_general_a` / `attachment_general_b` — 通用配件装卸
- `attachment_general_uninstall` — 通用卸下
- `muzzle_general` — 枪口配件通用
- `scope_general_c` / `scope_general_e` — 瞄具通用
- `extended_mag_install` / `extended_mag_uninstall` — 弹匣装卸
- `bayonet_install` / `bayonet_uninstall` — 刺刀装卸

::: tip
制作枪包时应优先复用以上通用音效，无需为每个配件单独录制装卸声音。
:::

## 瞄具相关

以下字段**仅瞄具配件**需要设置，普通配件无需填写。

### 瞄具类型 `scope` / `sight`

**两者互斥**。`scope` 为筒状放大瞄具（如 ACOG、LPVO），`sight` 为红点或全息瞄具（无外筒放大）。

```json
"scope": true,
"sight": false
```

此例来自 `scope_lpvo_1_6_display.json`（放大瞄具）。

```json
"scope": false,
"sight": true
```

此例来自 `sight_t2_display.json`（红点瞄具）。

> 部分瞄具同时设置 `"scope": true` 和 `"sight": true`（如 `scope_mk5hd`），用于实现既有筒状外观又有可选低倍率/红点模式的高级瞄具。

### 倍率 `zoom`

**仅瞄具**，数组类型。瞄准时进行画面放大的倍率，通过改变玩家视角 FOV 实现场景缩放。玩家可在数组内的多个倍率之间循环切换。

```json
"zoom": [
  6.25,
  1.25
]
```

此例来自 `scope_lpvo_1_6_display.json`，默认倍率 6.25×，可按切换键换为 1.25×。

### 视角定位组 `views` / `views_fov`

**仅放大瞄具**，数组类型，长度必须与 `zoom` 一致。

- `views`：各倍率对应的视角定位组索引。瞄具模型内可放置多个视角定位组，用于实现变倍瞄具或同一瞄具配件内多个瞄准点之间的切换。
- `views_fov`：各倍率下**枪械模型**渲染的 FOV，与 `zoom` 的画面缩放各自独立。

```json
"zoom": [
  5,
  25,
  1.25
],
"views": [
  2,
  2,
  1
],
"views_fov": [
  27.0,
  10.0,
  60.0
]
```

此例来自 `scope_mk5hd_display.json`，三个倍率各对应一组视野参数。

### 红点/全息 FOV `fov`

**仅红点/全息瞄具**，数值类型。开镜后枪身和瞄具渲染的 FOV。MC 默认手部模型 FOV 为 70。

```json
"fov": 35.0
```

此例来自 `sight_t2_display.json`。该值越小，开镜后枪身越大/越近。

::: tip
`fov`、`zoom` 和 `views_fov` 的区别：
- `zoom` 控制画面放大倍率，通过改变**玩家视角 FOV** 实现场景缩放（所有瞄具均可用）
- `views_fov` 控制开镜时**枪械模型**的渲染 FOV（筒状放大瞄具用）
- `fov` 控制开镜时**枪械模型**的渲染 FOV（红点/全息用，也可搭配 `views`/`views_fov` 实现多个瞄准点之间的切换）
- `zoom` 和 `views_fov` / `fov` 各自独立，互不影响
:::

### 腰射枪身高度偏移 `idle_scope_height_adjust` <Badge text="内测版功能" type="warning" />

**仅筒状瞄具**，数值类型。安装瞄具后，在腰射（未开镜）持枪状态下，枪身整体的高度偏移量。用于防止体积较大的瞄具在画面中占比过大、遮挡视野。

```json
"idle_scope_height_adjust": 0.75
```

此例来自 `scope_lpvo_1_6_display.json`。该值越大，枪身越靠下，瞄具对屏幕的遮挡越少。

### 显示枪械镜桥 `show_mount`

**仅瞄具**，布尔值。控制安装此瞄具后是否渲染枪械模型上 `mount` 定位组内的模型。默认为 `true`（显示枪械镜桥）。

```json
"show_mount": false
```

此例来自 `scope_aug_default_display.json`。AUG 自带的一体化瞄具本身就包含了镜桥结构，安装后会与枪械自带的 `mount` 模型重叠，因此设为 `false` 隐藏枪械镜桥。

## 激光/镭射 `laser`

**可选**，对象类型。配件的激光/镭射发射器配置。部分握把（如 `grip_vertical_ranger`）同时兼具激光功能。

| 键               | 类型      | 说明                               |
|-----------------|---------|----------------------------------|
| `default_color` | 字符串     | 默认激光颜色，`0x` 前缀十六进制（如 `0xFF6060`） |
| `can_edit`      | 布尔值     | 是否允许玩家在改装界面自定义激光颜色               |
| `length`        | 数值      | 激光射程长度                           |
| `width`         | 数值      | 激光宽度（可选）                         |

```json
"laser": {
  "default_color": "0xFF6060",
  "can_edit": true,
  "length": 75
}
```

此例来自 `laser_peq15_display.json`。

## 适配器 `adapter`

**可选**，字符串类型。配件安装时，控制枪械模型内对应名称分组模型的渲染。枪械模型中可以放置一些预留的分组（如转换接口板、替换护木盖板等），当安装的配件 `adapter` 值与分组名匹配时，该分组内的模型即被渲染。

默认包中使用的 adapter 值：

| adapter 值            | 渲染的模型        |
|----------------------|--------------|
| `ar_stock_adapter`   | AR 枪托适配器     |
| `laser_adapter`      | 激光/镭射转接座     |
| `oem_side_cover`     | 原厂护木片1       |
| `oem_grip_cover`     | 原厂护木片2       |
| `oem_stock_removed`  | 移除原厂枪托       |
| `oem_stock_tactical` | 原厂战术枪托       |
| `oem_stock_unfolded` | 原厂展开枪托       |
| `oem_stock_light`    | 原厂轻型枪托       |
| `oem_stock_heavy`    | 原厂重型枪托       |
| `oem_handguard_a2`   | M16A1 突击护木   |

```json
"adapter": "ar_stock_adapter"
```

此例来自 `stock_moe_display.json`。安装该枪托后，枪械模型中的 `ar_stock_adapter` 分组被渲染，显示对应的转接零件。

## 枪身文字 `text_show`

**可选**，对象类型。在配件模型上渲染动态文本，与枪械 display 中的 [text_show](../gun/display/10_text_show) 完全一致。常见于瞄具，用于显示弹药计数等动态数据。

支持以下占位符：

| 占位符             | 说明    |
|-----------------|-------|
| `%ammo_count%`  | 当前弹药数 |
| `%player_name%` | 玩家名称  |

```json
"text_show": {
  "ammo_count_text": {
    "scale": 0.09375,
    "align": "left",
    "shadow": false,
    "color": "#00ffff",
    "light": 15,
    "text": "%ammo_count%"
  }
}
```

此例来自 `scope_mk5hd_display.json`。

### 测距仪 `rangefinder` <Badge text="内测版功能" type="warning" />

瞄具还支持测距仪占位符 `%rangefinder%`，可在镜内实时显示准星指向目标的距离。使用该占位符时，需在对应文本组中配置 `rangefinder` 子对象：

| 键                         | 类型      | 说明                                |
|---------------------------|---------|-----------------------------------|
| `max_distance`            | 数值      | 最大测距距离（Minecraft 距离单位）            |
| `refresh_tick`            | 数值      | 刷新间隔（tick）                        |
| `show_impact_prediction`  | 布尔值     | 是否在 HUD 中绘制弹道落点预测空心点（仅瞄准生物实体时启用）  |
| `impact_prediction_color` | 字符串     | 落点预测点颜色，默认 `#ffffff`              |
| `impact_prediction_scale` | 数值      | 落点预测点大小倍率，默认 `1.0`                |

```json
"text_show": {
  "rangefinder_text_show_pos": {
    "scale": 0.1,
    "align": "right",
    "shadow": false,
    "color": "#ffff00",
    "light": 15,
    "text": "%rangefinder% M",
    "rangefinder": {
      "max_distance": 512,
      "refresh_tick": 2,
      "show_impact_prediction": true,
      "impact_prediction_color": "#ffff00",
      "impact_prediction_scale": 1.0
    }
  }
}
```

此例来自 `scope_xm157_display.json`。

## 显示枪口 `show_muzzle`

**可选**，布尔值。默认不填为自动判断。设为 `true` 时，安装配件后仍显示枪械模型里的默认枪口。主要用于刺刀等不遮挡枪口的配件。

```json
"show_muzzle": true
```

此例来自 `bayonet_m9_display.json`。

## 枪口粒子偏移 `muzzle_flash_offset` <Badge text="内测版功能" type="warning" />

**可选**，数值类型。将第一人称枪口粒子（枪焰与枪烟）的发射原点沿枪口方向前移。主要用于加装长消音器或制退器后，粒子从消音器口喷出而非原枪口。

单位：Blockbench 模型单位（16 单位 = 1 格），默认 `0`。

```json
"muzzle_flash_offset": 24
```

此例将粒子发射点前移 24 像素（1.5 格），适用于较长的消音器。

## 文件结构

配置完以上字段后，配件显示相关文件结构如下：

```
{枪包根目录}
└─ assets
   └─ {命名空间}
      ├─ textures
      │   └─ attachment
      │       ├─ slot
      │       │   └─ sight_t2.png
      │       └─ uv
      │           └─ sight_t2.png
      ├─ models
      │   └─ attachment
      │       ├─ sight_t2_geo.json
      │       └─ lod
      │           └─ sight_t2.json
      └─ display
          └─ attachments
              └─ sight_t2_display.json
```

---

::: tip 另请参见
- [配件数据进阶](data) —— 配件属性数值的配置
- [添加配件](attachment) —— 配件创建与注册的完整流程教程
:::
