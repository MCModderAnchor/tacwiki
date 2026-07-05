---
order: 2
---

# 动画与状态机

本页介绍枪械动画文件和状态机脚本的配置。

## 动画 `animation`

**可选**，字符串类型。指定枪械调用的动画文件，在枪包 `animations/` 目录下寻找。格式为 `命名空间:动画名`，省略 `.json` 后缀。

```json
"animation": "tacz:ak47"
```

此例来自默认枪包 `ak47_display.json`，对应文件 `animations/ak47.json`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/animations/ak47.json`

动画文件内通常包含 draw、put_away、shoot、reload_tactical、reload_empty、inspect 等关键动作。

::: tip 制作教程
[动画制作](../animation/) —— 包含动画制作基础、动画组配置和 ICA 动画约束的完整教程。
:::

## 状态机 `state_machine`

**可选**，字符串类型。指定枪械的状态机脚本，在枪包 `assets/{命名空间}/scripts/` 目录下寻找。格式为 `命名空间:脚本名`，省略 `.lua` 后缀。

```json
"state_machine": "tacz:hk_mk23_state_machine"
```

此例来自默认枪包 `hk_mk23_display.json`，对应文件 `assets/tacz/scripts/hk_mk23_state_machine.lua`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/scripts/hk_mk23_state_machine.lua`

状态机脚本通过 Lua 定义动画状态之间的转换逻辑。如果不指定，使用模组内置默认状态机。大部分常规枪械无需自定义状态机，仅在特殊机制（如 SPAS-12 双模式、HK MK23 的特殊保险/击发逻辑等）下才需要。

::: tip 编写教程
[动画状态机脚本](../animation/state_machine_script) —— 包含状态机的结构、生命周期和完整 API 参考。
:::

## 缺省动画 `use_default_animation`

**可选**，枚举类型。如果 `animation` 指定的动画文件中缺少某个动画（如 draw），则从缺省动画文件拷贝。

| 值        | 对应动画类型   |
|----------|----------|
| `rifle`  | 步枪默认动画   |
| `pistol` | 手枪默认动画   |

```json
"use_default_animation": "rifle"
```

手枪类枪械使用 `"pistol"`，长枪使用 `"rifle"`。

## 第三人称动画 `third_person_animation`

**可选**，枚举类型。第三人称视角下的动画类型，硬编码。目前默认只有 `"default"`。

```json
"third_person_animation": "default"
```

## Player Animator 动画 `player_animator_3rd`

**可选**，字符串类型。安装 Player Animator 模组后启用的第三人称动画。格式为 `命名空间:动画名.player_animation`。

```json
"player_animator_3rd": "tacz:rifle_default.player_animation"
```

此例来自默认枪包 `ak47_display.json`。

默认枪包提供了 `rifle_default` 和 `pistol_default` 两个选项，分别对应步枪和手枪。

## 文件结构

配置完动画和状态机后，枪包中应具有以下文件：

```
{枪包根目录}
└─ assets
   └─ {命名空间}
      ├─ animations
      │  └─ ak47.json
      └─ scripts
         └─ ak47_state_machine.lua
```

::: tip 另请参见
[data - 供弹](../data/02_reload) —— 特殊供弹方式（如 `manual` 手动单发装填）通常需要自定义状态机配合。

[data - 枪械行为](../data/04_behavior) —— `bolt` 枪栓类型影响动画状态机的行为逻辑。
:::
