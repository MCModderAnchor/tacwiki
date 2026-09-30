---
order: 8
---

# 音效

本页介绍枪械音效配置的两种方式：display JSON 中指定音效路径，以及通过动画关键帧嵌入音效。

## 音效字段 `sounds`

**可选**，对象类型。以下为所有可用的音效键：

| 键                 | 说明                       | 默认行为                  |
|-------------------|--------------------------|-----------------------|
| `draw`            | 掏枪时播放                    | —                     |
| `put_away`        | 收枪时播放                    | —                     |
| `shoot`           | **本地客户端**开火时播放，支持双声道     | —                     |
| `shoot_3p`        | **其他生物**开火时播放，仅单声道       | —                     |
| `silence`         | **本地客户端**安装消音器后开火时播放     | —                     |
| `silence_3p`      | **其他生物**安装消音器后开火时播放      | —                     |
| `reload_empty`    | 膛内无子弹时空仓换弹时播放            | —                     |
| `reload_tactical` | 膛内有子弹时战术换弹时播放            | —                     |
| `inspect`         | 膛内有子弹时检视时播放              | —                     |
| `inspect_empty`   | 膛内无子弹时检视时播放              | —                     |
| `dry_fire`        | 弹匣打空后扣动扳机                | 有默认音效，可不写             |
| `fire_select`     | 切换快慢机时播放                 | 有默认音效，可不写             |
| `head_hit`        | 爆头音效反馈                   | 有默认音效，可不写             |
| `flesh_hit`       | 命中身体音效反馈                 | 有默认音效，可不写             |
| `kill`            | 击杀生物音效反馈                 | 有默认音效，可不写             |
| `melee_bayonet`   | 刺刀近战音效                   | 有默认音效，可不写             |
| `melee_push`      | 推击近战音效                   | 有默认音效，可不写             |
| `melee_stock`     | 枪托打击音效                   | 有默认音效，可不写             |

每个音效键有两种写法：**字符串**（只指定音效 id）或**对象**（额外控制响度与音调）。

```json
"sounds": {
  "draw": "tacz:ak47/ak47_draw",
  "put_away": "tacz:ak47/ak47_put_away",
  "shoot": "tacz:ak47/ak47_shoot",
  "shoot_3p": "tacz:ak47/ak47_shoot_3p",
  "silence": "tacz:ak47/ak47_silence",
  "silence_3p": "tacz:ak47/ak47_silence_3p",
  "reload_empty": "tacz:ak47/ak47_reload_empty",
  "reload_tactical": "tacz:ak47/ak47_reload_tactical",
  "inspect": "tacz:ak47/ak47_inspect",
  "inspect_empty": "tacz:ak47/ak47_inspect_empty",
  "dry_fire": "tacz:dry_fire",
  "fire_select": "tacz:fire_select",
  "head_hit": "tacz:head_hit",
  "flesh_hit": "tacz:flesh_hit",
  "kill": "tacz:kill",
  "melee_bayonet": "tacz:melee_bayonet/melee_bayonet_01",
  "melee_push": "tacz:melee_stock/melee_stock_01",
  "melee_stock": "tacz:melee_stock/melee_stock_02"
}
```

此例来自默认枪包 `ak47_display.json`。

- 音效文件使用 `.ogg` 格式，在枪包根目录下的 `tacz_sounds/` 中寻找。
- `shoot` / `silence` 为本地玩家听到的音效（双声道，更丰富）；`shoot_3p` / `silence_3p` 为其他玩家听到的音效（单声道，性能更好）。
- 标注「有默认音效」的键可以不填，模组会自动使用内置默认音效。

> 文件位置：`{枪包根目录}/tacz_sounds/{命名空间}/`（如 `tacz_sounds/tacz/ak47/ak47_shoot.ogg`）

### 调整响度与音调 <Badge text="内测版功能" type="warning" />

音效键写成**对象**时，可以单独控制响度、音调及其随机浮动范围：

```json
"sounds": {
  "shoot": {
    "id": "tacz:ak47/ak47_shoot",
    "volume": 0.8,
    "pitch": 0.9,
    "volume_random_range": 0.05,
    "pitch_random_range": 0.1
  }
}
```

| 键                     | 类型  | 必填   | 说明                                |
|-----------------------|-----|------|-----------------------------------|
| `id`                  | 字符串 | **是** | 音效 id，同时也是回退时使用的 sound event id   |
| `volume`              | 数值  | 否    | 响度，须 ≥ 0；不填则使用该情景的默认值             |
| `pitch`               | 数值  | 否    | 音调，须 > 0；不填则使用该情景的默认值             |
| `volume_random_range` | 数值  | 否    | 每次播放时响度在 ± 该值范围内随机，须 ≥ 0          |
| `pitch_random_range`  | 数值  | 否    | 每次播放时音调在 ± 该值范围内随机，须 ≥ 0          |

两种写法可以混用，只给需要调整的音效写对象即可：

```json
"sounds": {
  "shoot": {
    "id": "tacz:ak47/ak47_shoot",
    "pitch_random_range": 0.08
  },
  "reload_empty": "tacz:ak47/ak47_reload_empty"
}
```

::: tip
`*_random_range` 的作用是让每次播放略有差异，避免连发时听起来像复读机。**建议只给开火类音效使用**——换弹、检视这类音效加了随机反而显得不自然。
:::

## 音源查找与回退

音效 id 的解析顺序：

1. **优先**在枪包目录下的 `tacz_sounds/` 中查找对应的 `.ogg` 文件；
2. 找不到时，**回退**到同 id 的 **sound event**（由 `sounds.json` 注册，音源可能来自原版或其他模组）；
3. 两者都不存在时，跳过播放并在日志中输出警告。

**这意味着枪包只需提供自己的专属音效**——缺的那部分若在其他模组中有同 id 的音源，仍能正常发声。

## 文件结构

```
{枪包根目录}
└─ tacz_sounds
   └─ {命名空间}
      └─ ak47
         ├─ ak47_draw.ogg
         ├─ ak47_shoot.ogg
         ├─ ak47_shoot_3p.ogg
         └─ ...
```

::: tip
制作枪包时应尽可能复用已有音效。模组内置了大量通用音效（`fire_select`、`dry_fire`、`kill` 等），不写即可自动使用。你的枪包内只需添加枪械专属音效（如 `shoot`、`reload_empty` 等）。
:::

---

## 进阶：动画音效

自 **1.1.4** 版本起，TACZ 支持将音效以关键帧形式嵌入动画文件中，逐步取代 `reload_empty`、`reload_tactical`、`inspect`、`inspect_empty` 等字段。

### 制作方法

1. 在 BlockBench 中进入动画模式，打开模型对应的动画文件。

![时间线](/gunpack/gun/sound/sound1.png)

2. 在时间线上点击 **动画效果**，此时出现「效果」分组。

![音效关键帧](/gunpack/gun/sound/sound2.png)

3. 在需要播放音效的时间点添加关键帧，编辑关键帧的路径。路径格式与 display JSON 一致：`{命名空间}:{文件夹路径}/{文件名}`。

![音效路径](/gunpack/gun/sound/sound3.png)

::: caution
如果动画内存在**没有任何路径**的音效关键帧，可能导致游戏崩溃。
:::

使用动画音效后，对应的 display JSON 音效键可以省略，由动画关键帧接管播放。默认枪包中大部分枪械已迁移至此方式。

::: tip 另请参见
[data - 音效](../data/13_fire_sound) —— 枪声传播距离（最远/最近距离、静音衰减系数等）由 data 中的 `fire_sound` 控制。
:::
