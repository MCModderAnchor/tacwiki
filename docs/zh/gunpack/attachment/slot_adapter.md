---
order: 4
---
# 槽位适配器(内测版功能)

槽位适配器是一种特殊的中间件，安装于枪械配件槽和实际配件之间。**它用自身的 `allowed_attachments` 完全替换枪械原有的允许范围**，从而重新划分该槽位可安装的配件种类。同时适配器模型会先渲染在枪械上，配件再以 `mount_offset` 偏移安装在适配器上方。

目前槽位适配器仅支持 `scope`（瞄具）槽，共三款增高座。

## 枪械启用

在枪械的 `allow_attachments` 标签文件中加入 `adapter/` 前缀的特殊 tag：

```json
[
  "#tacz:scope_scope",
  "#tacz:adapter/pistol_riser",
  "#tacz:adapter/rail_mid"
]
```

游戏会扫描枪械 `allow_attachments` 中所有 `adapter/` 前缀的 tag，递归展开为具体适配器 ID 列表，再按 `slot` 字段过滤出匹配当前槽位的适配器。不含 `adapter/` 前缀 tag 的枪械无法使用任何槽位适配器。

## 适配器 Tag 文件

位于 `tacz_tags/attachments/adapter/<name>.json`，将适配器 tag 展开为具体适配器 ID 列表。

示例来自默认枪包 `adapter/pistol_riser.json`：

```json
[
  "tacz:riser_pistol_low",
  "tacz:riser_pistol_high"
]
```

示例来自默认枪包 `adapter/rail_mid.json`：

```json
[
  "tacz:riser_rail_mid"
]
```

## 索引文件

路径：`data/<命名空间>/index/slot_adapters/<name>.json`

| 键                      | 类型     | 说明                                        |
|------------------------|--------|-------------------------------------------|
| `name`                 | 字符串    | 翻译键，用于游戏内 UI 显示                           |
| `display`              | 字符串    | 指向 display JSON 的 ResourceLocation 路径     |
| `data`                 | 字符串    | 指向 data JSON 的 ResourceLocation 路径        |
| `slot`                 | 枚举     | 作用的配件槽，目前仅支持 `"scope"`                    |
| `allowed_attachments`  | 字符串数组  | 适配器启用后**替换枪械原有允许列表**，支持 Tag（`#` 前缀）和直接 ID |
| `sort`                 | 数值     | 可选，UI 中排序权重，取值 0–65536                    |

示例来自默认枪包 `index/slot_adapters/riser_pistol_high.json`：

```json
{
  "name": "tacz.slot_adapter.riser_pistol_high.name",
  "display": "tacz:riser_pistol_high_adapter_display",
  "data": "tacz:riser_pistol_high_data",
  "slot": "scope",
  "allowed_attachments": [
    "#tacz:pistol_sight"
  ],
  "sort": 11
}
```

::: tip 范围替换
适配器的 `allowed_attachments` 不是枪械允许列表的"追加"，而是**直接替换**。例如 M4A1 原本允许安装 `scope_scope`（高倍镜）和 `scope_sight`（全息镜），但安装手枪增高座后该槽位**只能安装 `pistol_sight`**（手枪红点）。
:::

## 显示文件

路径：`assets/<命名空间>/display/slot_adapters/<name>_adapter_display.json`

复用附件的 `AttachmentDisplay` 类，适配器仅用到以下三个字段：

| 键              | 类型        | 说明                                         |
|----------------|-----------|--------------------------------------------|
| `model`        | 字符串       | 适配器模型 geo.json 路径                          |
| `texture`      | 字符串       | 适配器贴图路径                                    |
| `mount_offset` | float[3]  | 瞄具安装偏移 `[X, Y, Z]`。Y 值控制瞄具升高高度，1 格 = 16 像素 |

示例来自默认枪包 `display/slot_adapters/riser_pistol_high_adapter_display.json`：

```json
{
  "model": "tacz:attachment/riser_pistol_high_geo",
  "texture": "tacz:attachment/uv/riser_pistol_high",
  "mount_offset": [0, 1.25, 0]
}
```

## 数据文件

路径：`data/<命名空间>/data/slot_adapters/<name>_data.json`

目前为空占位（`{}`），无任何可配置属性。预留未来扩展适配器自身的行为数据。

## 运行时机制

- **选择**：改装界面选中 scope 槽后，下方列出该枪可用的适配器按钮（含"无适配器"直接安装选项）。选择适配器后通过网络包同步至服务端，存入枪械 NBT（键路径 `SlotAdapters → SCOPE`）。
- **验证**：安装或切换瞄具时，先检查该 scope 槽是否已选适配器——有则用适配器的 `allowed_attachments` 做白名单判断（枪械原有范围被忽略），无则用枪械原有的直接允许列表。
- **渲染**：先渲染适配器模型，再应用 `mount_offset` 偏移后渲染瞄具模型。
- **开镜**：第一人称开镜时 `mount_offset` 的 Y 值会等量抬升准星相机位置。

::: warning 切换适配器
如果当前已安装的瞄具不在新适配器的 `allowed_attachments` 范围内，切换按钮会被禁用，提示"请先卸下当前配件再切换适配器"。
:::

## 现有增高座一览

| ID                       | 名称     | mount_offset Y | sort    | allowed_attachments   | 典型用途       |
|--------------------------|--------|----------------|---------|-----------------------|------------|
| `tacz:riser_pistol_low`  | 手枪低增高座 | 0.375（6 px）    | 10      | `#tacz:pistol_sight`  | 步枪装手枪红点（低） |
| `tacz:riser_pistol_high` | 手枪高增高座 | 1.25（20 px）    | 11      | `#tacz:pistol_sight`  | 步枪装手枪红点（高） |
| `tacz:riser_rail_mid`    | 导轨中增高座 | 0.75（12 px）    | 20      | `#tacz:scope_sight`   | 调整全息镜高度/视野 |

手枪红点族（`pistol_sight`）：SRO、RMR、ACRO、DeltaPoint、FastFire、PK06 等手枪规格瞄具。

全息镜族（`scope_sight`）：552、EXPS3、UH-1、T2、Coyote、SRS-02 等步枪规格瞄具。
