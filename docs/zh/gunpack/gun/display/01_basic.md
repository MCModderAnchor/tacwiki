---
order: 1
---

# 模型与贴图

本页介绍枪械的模型、贴图和低模（LOD）配置。

## 模型 `model`

**必填**，字符串类型。枪械的主体模型，在枪包 `models/` 目录下寻找。格式为 `命名空间:路径`，省略 `.json` 后缀。

```json
"model": "tacz:gun/ak47_geo"
```

此例来自默认枪包 `ak47_display.json`，对应文件 `models/gun/ak47_geo.json`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/models/gun/ak47_geo.json`

## 贴图 `texture`

**必填**，字符串类型。枪械的贴图文件，在枪包 `textures/` 目录下寻找。格式同模型。

```json
"texture": "tacz:gun/uv/ak47"
```

此例来自默认枪包 `ak47_display.json`，对应文件 `textures/gun/uv/ak47.png`。

> 文件位置：`{枪包根目录}/assets/{命名空间}/textures/gun/uv/ak47.png`

## 低模 `lod`

**可选**，对象类型。远距离渲染时使用的低精度模型和贴图，降低性能开销。

| 键         | 类型   | 说明      | 查找目录        |
|-----------|------|---------|-------------|
| `model`   | 字符串  | 低模模型路径  | `models/`   |
| `texture` | 字符串  | 低模贴图路径  | `textures/` |

```json
"lod": {
  "model": "tacz:gun/lod/ak47",
  "texture": "tacz:gun/lod/ak47"
}
```

此例来自默认枪包 `ak47_display.json`。

> 文件位置：
> - 模型：`{枪包根目录}/assets/{命名空间}/models/gun/lod/ak47.json`
> - 贴图：`{枪包根目录}/assets/{命名空间}/textures/gun/lod/ak47.png`
>
::: tip 制作教程
[低精度模型（LOD）](../06_lod) —— 包含低模建模、贴图绘制和游戏内实装的完整教程。
:::

## 文件结构

配置完以上字段后，枪包中应具有以下文件：

```
{枪包根目录}
└─ assets
   └─ {命名空间}
      ├─ models
      │  └─ gun
      │     ├─ ak47_geo.json
      │     └─ lod
      │        └─ ak47.json
      └─ textures
         └─ gun
            ├─ uv
            │  └─ ak47.png
            └─ lod
               └─ ak47.png
```
