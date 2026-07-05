---
order: 3
---

# HUD 与 GUI

本页介绍枪械在 HUD 界面、背包槽位和 tooltip 中的显示配置。

## HUD 平面图 `hud`

**可选**，字符串类型。游戏 HUD 右下角显示的枪械侧视平面图，在枪包 `textures/gun/hud/` 下寻找。若为空，该位置渲染黑紫块。

```json
"hud": "tacz:gun/hud/ak47"
```

此例来自默认枪包 `ak47_display.json`，对应文件 `textures/gun/hud/ak47.png`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/gun/hud/ak47.png`

HUD 贴图的长宽比应为 **3:1**。推荐分辨率：`180×60`、`192×64`、`384×128`。

## 空弹 HUD `hud_empty`

**可选**，字符串类型。弹匣打空时替换 HUD 显示的平面图。若为空，则在上方 `hud` 基础上叠加红色着色代替。

```json
"hud_empty": "tacz:gun/hud/ak47_empty"
```

此例来自默认枪包 `ak47_display.json`（该文件中默认注释）。

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/gun/hud/ak47_empty.png`

## 槽位贴图 `slot`

**可选**，字符串类型。背包、快捷栏等容器中显示的 2D 图标贴图，在 `textures/gun/slot/` 下寻找。

```json
"slot": "tacz:gun/slot/ak47"
```

此例来自默认枪包 `ak47_display.json`，对应文件 `textures/gun/slot/ak47.png`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/gun/slot/ak47.png`

### 制作槽位贴图

为避免在物品栏中渲染完整模型造成卡顿，TACZ 的枪械在容器中采用 2D 贴图渲染。可以借助 BlockBench 的 **Screenshot Model** 功能生成：

1. 右键工作区界面，选择「等轴视角右（2:1）」。

![等轴视角](/gunpack/gun/iso_r_scr.png)

2. 关闭软件内阴影着色。

![关闭着色](/gunpack/gun/no_shading_scr.png)

3. 按 `Ctrl+P` 截图保存。

![保存截图](/gunpack/gun/save_scr.png)

4. 用图片处理工具裁剪为正方形，推荐分辨率 **64×64**。
5. 将图片放入 `textures/gun/slot/` 目录后，在 display JSON 中指定 `slot` 字段即可。

## 弹药计量样式 `ammo_count_style`

**可选**，枚举类型。HUD 右下角弹药数量的显示方式。默认 `"normal"`。

| 值         | 效果                |
|-----------|-------------------|
| `normal`  | 显示实际值（如 `30/120`） |
| `percent` | 显示百分比（如 `100%`）   |

```json
"ammo_count_style": "normal"
```

## 伤害显示样式 `damage_style`

**可选**，枚举类型。tooltip 中伤害数值的显示方式。默认 `"per_projectile"`。

| 值                | 效果                         |
|------------------|----------------------------|
| `per_projectile` | 显示为「单发弹丸伤害 × 弹丸数量」         |
| `total`          | 显示为「总伤害」（单发弹丸伤害 × 弹丸数量后求和） |

```json
"damage_style": "per_projectile"
```

对普通枪械（单弹丸），两种样式显示结果相同。仅霰弹等多弹丸枪械有明显区别。

## 显示准星 `show_crosshair`

**可选**，布尔值。默认为 `false`，即拥有机瞄的枪械在瞄准时隐藏准星。设为 `true` 则瞄准时始终显示准星，通常用于没有机瞄或瞄准方式特殊的枪械，如默认枪包中的 minigun（M134）。

```json
"show_crosshair": false
```

此外，准星的显示状态也可以由[动画状态机](../animation/state_machine_script)在运行时动态控制，实现更复杂的准星显隐逻辑。

## 文件结构

配置完以上字段后，HUD 和槽位相关文件结构如下：

```
{枪包根目录}
└─ assets
   └─ {命名空间}
      └─ textures
         └─ gun
            ├─ hud
            │  └─ ak47.png
            └─ slot
               └─ ak47.png
```

---

## 制作 HUD 平面图

使用 BlockBench 的 **Screenshot Model** 功能获取枪模侧视图：

1. 右侧面板切换至合适轴（默认按枪口朝左），按 `Z` 切换为「实体」显示模式。

![切换视图](/gunpack/hud_icon/bb_toggle_view.png)

![显示模式](/gunpack/hud_icon/bb_solid_mode.png)

2. 按 `Ctrl+P` 截图保存为 `.png`。

![保存图片](/gunpack/hud_icon/screenshot_save.png)

3. 用图片处理工具缩放、裁剪为 3:1 长宽比。枪身较长者对齐中间轴线，手枪等较短者向右对齐。

![侧视图](/gunpack/hud_icon/resize_texture_1.png)

![手枪侧视图](/gunpack/hud_icon/resize_texture_2.png)

4. 将图片放入 `textures/gun/hud/` 目录后，在 display JSON 中指定 `hud` 字段即可。
