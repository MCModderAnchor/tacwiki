---
order: 7
---
# 子弹特效

本页介绍曳光弹间隔的配置。

## 曳光弹间隔 `bullet.tracer_count_interval`

**可选**，数值类型。控制曳光弹的发射频率。

```json
"bullet": {
  "tracer_count_interval": 0
}
```

- 不填此字段则不发射曳光弹。
- 设为 `0` 则每发子弹都是曳光弹。
- 设为 `N`（N > 0）则每隔 N 发子弹发射一发曳光弹。

::: tip
曳光弹的颜色由弹药显示文件（`assets/{命名空间}/display/ammo/`）中的 `tracer_color` 字段控制，详见 display 文档的[子弹特效](../display/07_ammo)章节。
:::
