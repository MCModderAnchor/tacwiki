---
order: 15
---

# 配件槽

本页介绍枪械允许安装的配件类型和原厂配件（虚拟配件）的配置。

## 允许配件槽 `allow_attachment_types`

**可选**，枚举数组。开放的配件槽位，未列出的槽位不可安装对应类型的配件。

```json
"allow_attachment_types": [
  "scope",
  "stock",
  "muzzle",
  "extended_mag"
]
```

| 值              | 说明            |
|----------------|---------------|
| `scope`        | 瞄具槽           |
| `stock`        | 枪托槽           |
| `muzzle`       | 枪口槽（消音器、制退器等） |
| `grip`         | 握把槽           |
| `laser`        | 激光指示器槽        |
| `extended_mag` | 扩容弹匣槽         |

此例来自默认枪包 `ak47_data.json`。

::: tip
手枪类枪械通常会省略 `stock` 槽。最少配置可以只保留 `scope` 和 `extended_mag` 两个槽位。
:::

## 原厂配件 `builtin_attachments`

**可选**，对象类型。定义枪械自带的"原厂"配件候选列表。这些配件是虚拟的，不需要从背包消耗实际物品即可选择安装。

有两种写法：

**完整写法**——游戏内列出所有候选配件，可自由拆卸和更换：

```json
"builtin_attachments": {
  "scope": {
    "attachments": [
      "tacz:oem_sight_1",
      "tacz:oem_sight_2"
    ]
  },
  "stock": {
    "attachments": [
      "tacz:oem_stock_light",
      "tacz:oem_stock_tactical",
      "tacz:oem_stock_heavy"
    ],
    "default_attached": "tacz:oem_stock_heavy"
  }
}
```
完整写法示例来自 `m4a1_data.json`。

**简写**——直接写配件 ID，仅限一个，**不可拆卸**，但可以被同槽位的真实配件替换（替换模型）：

```json
"builtin_attachments": {
  "scope": "tacz:scope_aug_default"
}
```
简写示例来自 `aug_data.json`。

一级键为配件槽类型，完整写法下每个槽位包含两个字段：

| 键                  | 说明                            |
|--------------------|-------------------------------|
| `attachments`      | 原厂配件 ID 列表，包含该槽位所有可选的虚拟配件     |
| `default_attached` | 可选，列表中默认预装的配件 ID。若不指定，该槽位初始为空 |

- 完整写法下的配件可自由拆卸，拆除后回到候选列表；简写形式下配件不可拆除。
- `default_attached` 指定的配件在新获取枪械时会自动安装。



## 专属配件 `exclusive_attachments`

**可选**，对象类型。为特定配件与当前枪械的组合指派独有属性，用于对某些枪械+配件组合做单独平衡调整。

```json
"exclusive_attachments": {
  "tacz:scope_standard_8x": {
    "weight": 2.0,
    "ads_addend": 0.04,
    "recoil_modifier": {
      "yaw": -0.2
    }
  }
}
```
此例来自默认枪包 `scar_h_data.json`。

- 键为配件 ID，值为该配件在此枪械上的额外属性修正。
- 值的结构与配件自身的数据文件一致，会叠加在配件原始数据之上生效。

::: caution
该功能目前无法使用。
:::
