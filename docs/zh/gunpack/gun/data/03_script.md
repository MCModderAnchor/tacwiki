---
order: 3
---
# 逻辑脚本

本页介绍枪械逻辑脚本的指定及其参数配置。

## 脚本 `script`

**可选**，字符串类型。指定枪械的逻辑脚本，格式为 `命名空间:脚本名`。脚本文件位于枪包 `data/{命名空间}/scripts/` 目录下。

```json
"script": "tacz:xmag_reload_logic"
```

不指定此字段时，枪械使用默认逻辑。默认枪包中最常用的通用脚本是 `tacz:xmag_reload_logic`（扩容弹匣换弹逻辑），除此之外也有部分枪械携带专用脚本，如 `tacz:kar98_gun_logic`、`tacz:m870_gun_logic` 等，这些专用脚本一般不需要也不适合给其他枪械复用。

::: tip
编写自定义脚本超出了本文档范围。如果你只需要复用默认脚本，指定正确的 `script` 并根据下文填写对应的 `script_param` 即可。
:::

## 脚本参数 `script_param`

**可选**，对象类型。传入脚本的参数，内容完全取决于对应脚本的需求。

### xmag_reload_logic

扩容弹匣换弹脚本的参数如下：

```json
"script": "tacz:xmag_reload_logic",
"script_param": {
  "reload_feed": 1.55,
  "reload_cooldown": 2.0,
  "empty_feed": 2.25,
  "empty_cooldown": 2.6,
  "reload_xmag_1_feed": 1.54,
  "reload_xmag_1_cooldown": 2.29,
  "empty_xmag_1_feed": 2.5,
  "empty_xmag_1_cooldown": 2.85,
  "reload_xmag_2_feed": 1.54,
  "reload_xmag_2_cooldown": 2.29,
  "empty_xmag_2_feed": 2.5,
  "empty_xmag_2_cooldown": 2.85,
  "reload_xmag_3_feed": 1.54,
  "reload_xmag_3_cooldown": 2.29,
  "empty_xmag_3_feed": 2.5,
  "empty_xmag_3_cooldown": 2.85
}
```

此例来自默认枪包 `ak47_data.json`。

- 不带 `xmag_N` 前缀的键对应无扩容弹匣时的换弹时长。
- `xmag_1` / `xmag_2` / `xmag_3` 分别对应一/二/三级扩容弹匣的时长。
- `reload_*` 为战术换弹，`empty_*` 为空仓换弹。

::: tip
`script_param` 的具体键名和含义完全由脚本决定。如需了解其他脚本的参数，请查看对应脚本的源代码或参考默认枪包中已有的用法。
:::
