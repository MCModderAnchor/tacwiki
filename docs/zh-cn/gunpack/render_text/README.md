# 枪械模型渲染文字

1. 在枪械 Display 文件中，添加如下代码：

```json
  "text_show": {
    // 定位组名，与模型中的组名对应。
    "ammo_count_text_pos": {
      // 文本缩放，默认大小对于 BlockBench 里的 1
      "scale": 0.35,
      // 对齐方式：right，center，left
      "align": "right",
      // 阴影
      "shadow": false,
      // 文本颜色
      "color": "#53f9af",
      // 亮度：1-15
      "light": 15,
      // 支持在语言文件中定义，且支持PlaceholderAPI 风格的占位符
      // 目前仅支持两个：%player_name% %ammo_count%
      "text": "%player_name%"
    },
    ... 
  }
```

2. 在模型文件中添加对应的定位组。