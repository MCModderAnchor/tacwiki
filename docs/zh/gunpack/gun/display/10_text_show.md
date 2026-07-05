---
order: 10
---

# 枪身文字

本页介绍枪械模型上动态文本的渲染配置。

## 枪身文字 `text_show`

**可选**，对象类型。在模型指定组的位置渲染可本地化的文本。

一级键为作用的模型组名，该组的旋转点决定文本的位置与朝向。每个组下包含以下字段：

| 键        | 类型    | 说明                                 |
|----------|-------|------------------------------------|
| `scale`  | 数值    | 文本缩放，默认大小相当于 BlockBench 中的 `1` 单位  |
| `align`  | 枚举    | 对齐方式：`left` / `center` / `right`   |
| `shadow` | 布尔值   | 是否显示文字阴影                           |
| `color`  | 字符串   | 文本颜色（RGB 十六进制）                     |
| `light`  | 数值    | 文本亮度，取值 1~15                       |
| `text`   | 字符串   | 文本内容，支持本地化键和 PlaceholderAPI 风格的占位符 |

```json
"text_show": {
  "ammo_count_text_show_pos": {
    "scale": 1,
    "align": "center",
    "shadow": false,
    "color": "#FFFFFF",
    "light": 15,
    "text": "text_show.tacz.ak47.ammo_count"
  }
}
```

此例来自默认枪包 `ak47_display.json`。

### 支持的占位符

目前仅支持两个动态占位符：

| 占位符             | 替换内容    |
|-----------------|---------|
| `%ammo_count%`  | 当前弹匣弹药数 |
| `%player_name%` | 持枪玩家名称  |

使用示例：`"text": "text_show.tacz.ak47.ammo_count"` 对应的本地化键值为 `"弹药: %ammo_count%"`，即可在枪身显示当前弹药数。

### 模型准备

需在 BlockBench 中创建一个定位组（如 `ammo_count_text_show_pos`），将其放置在希望显示文字的位置。组的旋转点即为文本渲染原点，旋转方向决定文本的朝向。
