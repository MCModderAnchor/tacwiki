# 枪械数据进阶  
# 枪械数据配置（Data）
本页列出枪械 `xxx_data.json` 的所有可用字段，详情见各小节。
## 字段总览
### 弹药
| 字段                       | 类型  | 必填 | 说明                                                   | 详情              |
|--------------------------|-----|----|------------------------------------------------------|-----------------|
| ammo                     | 字符串 | 是  | 指定弹药类型，如 `tacz:762x39`                               | [弹药](01_ammo)   |
| ammo_amount              | 数值  | 是  | 弹匣容量                                                 | [弹药](01_ammo)   |
| extended_mag_ammo_amount | 数组  | 否  | 扩容弹匣容量，按等级从低到高                                       | [弹药](01_ammo)   |
| reload.type              | 枚举  | 是  | 供弹方式，可选 `magazine` / `manual` / `fuel` / `inventory` | [供弹](02_reload) |
| reload.infinite          | 布尔值 | 否  | 无限备弹，与 `inventory` 模式不兼容                             | [供弹](02_reload) |
| reload.feed.empty        | 数值  | 否  | 空仓换弹子弹补充时间点（秒）                                       | [供弹](02_reload) |
| reload.feed.tactical     | 数值  | 否  | 战术换弹子弹补充时间点（秒）                                       | [供弹](02_reload) |
| reload.cooldown.empty    | 数值  | 否  | 空仓换弹总耗时（秒）                                           | [供弹](02_reload) |
| reload.cooldown.tactical | 数值  | 否  | 战术换弹总耗时（秒）                                           | [供弹](02_reload) |
### 逻辑脚本
| 字段           | 类型   | 必填   | 说明                                | 详情                     |
|--------------|------|------|-----------------------------------|------------------------|
| script       | 字符串  | 否    | 指定枪械逻辑脚本，位于 `data/{命名空间}/scripts` | [逻辑脚本](03_script)      |
| script_param | 对象   | 否    | 传给脚本的参数，内容取决于脚本需要                 | [逻辑脚本](03_script)      |
### 枪械行为与射速
| 字段               | 类型   | 必填 | 说明                                                    | 详情                  |
|------------------|------|----|-------------------------------------------------------|---------------------|
| bolt             | 枚举   | 是  | 枪栓类型，可选 `open_bolt` / `closed_bolt` / `manual_action` | [枪械行为](04_behavior) |
| bolt_action_time | 数值   | 否  | 拉栓上膛时长（秒），仅 `manual_action` 有效                        | [枪械行为](04_behavior) |
| can_crawl        | 布尔值  | 否  | 是否允许趴下，默认 `true`                                      | [枪械行为](04_behavior) |
| can_slide        | 布尔值  | 否  | 是否允许斜握，默认 `true`                                      | [枪械行为](04_behavior) |
| rpm              | 数值   | 是  | 每分钟射速，最大 1200                                         | [开火机制](05_fire_mod) |
| fire_mode        | 数组   | 是  | 开火模式列表，可选 `semi` / `auto` / `burst`                   | [开火机制](05_fire_mod) |
| fire_mode_adjust | 对象   | 否  | 不同开火模式下的数值修正（伤害、射速、精度等）                               | [开火机制](05_fire_mod) |
| burst_data       | 对象   | 否  | 连发模式数据（仅在 fire_mode 含 `burst` 时调用）                    | [开火机制](05_fire_mod) |
| charging         | 对象   | 否  | 蓄力/延迟扳机配置                                             | [开火机制](05_fire_mod) |
### 子弹实体属性
| 字段                           | 类型     | 必填 | 说明                         | 详情                  |
|------------------------------|--------|----|----------------------------|---------------------|
| bullet.life                  | 数值     | 是  | 子弹存活时间（秒）                  | [子弹实体属性](06_bullet) |
| bullet.damage                | 数值     | 是  | 单发基础伤害                     | [子弹实体属性](06_bullet) |
| bullet.bullet_amount         | 数值     | 否  | 霰弹弹丸数，默认 1                 | [子弹实体属性](06_bullet) |
| bullet.speed                 | 数值     | 是  | 子弹初速度（m/s），游戏内默认全局弹速乘2     | [子弹实体属性](06_bullet) |
| bullet.gravity               | 数值     | 否  | 重力系数                       | [子弹实体属性](06_bullet) |
| bullet.friction              | 数值     | 否  | 空气阻力                       | [子弹实体属性](06_bullet) |
| bullet.knockback             | 数值     | 否  | 击退效果                       | [子弹实体属性](06_bullet) |
| bullet.pierce                | 数值     | 否  | 穿透数                        | [子弹实体属性](06_bullet) |
| bullet.ignite                | 布尔值/对象 | 否  | 是否点燃实体或方块                  | [子弹实体属性](06_bullet) |
| bullet.ignite_entity_time    | 数值     | 否  | 点燃实体时间（秒），默认 2             | [子弹实体属性](06_bullet) |
| bullet.explosion             | 对象     | 否  | 爆炸配置（半径、伤害、是否破坏方块等）        | [子弹实体属性](06_bullet) |
| bullet.tracer_count_interval | 数值     | 否  | 曳光弹间隔，`0` 为每发都是曳光弹，无此字段不发射 | [子弹特效](07_tracer)   |
### 额外伤害
| 字段                                | 类型   | 必填   | 说明                | 详情                      |
|-----------------------------------|------|------|-------------------|-------------------------|
| extra_damage.armor_ignore         | 数值   | 否    | 护甲穿透率，默认 0        | [额外伤害](08_extra_damage) |
| extra_damage.head_shot_multiplier | 数值   | 否    | 爆头伤害倍率            | [额外伤害](08_extra_damage) |
| extra_damage.damage_adjust        | 数组   | 否    | 距离衰减表，超过最远距离伤害为 0 | [额外伤害](08_extra_damage) |
### 后坐力
| 字段                      | 类型   | 必填  | 说明                      | 详情                 |
|-------------------------|------|-----|-------------------------|--------------------|
| recoil.pitch            | 数组   | 否   | 纵向后坐力曲线（time/value 关键帧） | [后坐力](09_recoil)   |
| recoil.yaw              | 数组   | 否   | 横向后坐力曲线（time/value 关键帧） | [后坐力](09_recoil)   |
| crawl_recoil_multiplier | 数值   | 否   | 趴下后坐力倍率                 | [后坐力](09_recoil)   |
### 精度与晃动
| 字段                        | 类型   | 必填   | 说明             | 详情                     |
|---------------------------|------|------|----------------|------------------------|
| inaccuracy.stand          | 数值   | 否    | 站立散布           | [精度与晃动](10_inaccuracy) |
| inaccuracy.move           | 数值   | 否    | 移动散布           | [精度与晃动](10_inaccuracy) |
| inaccuracy.sneak          | 数值   | 否    | 潜行散布           | [精度与晃动](10_inaccuracy) |
| inaccuracy.lie            | 数值   | 否    | 趴下散布           | [精度与晃动](10_inaccuracy) |
| inaccuracy.aim            | 数值   | 否    | 瞄准散布           | [精度与晃动](10_inaccuracy) |
| hurt_bob_tweak_multiplier | 数值   | 否    | 受伤摇晃倍率，默认 0.05 | [精度与晃动](10_inaccuracy) |
### 动作时长
| 字段            | 类型   | 必填   | 说明        | 详情                         |
|---------------|------|------|-----------|----------------------------|
| draw_time     | 数值   | 否    | 抬枪动作时长（秒） | [动作时长](11_timing)          |
| put_away_time | 数值   | 否    | 收枪动作时长（秒） | [动作时长](11_timing)          |
| aim_time      | 数值   | 否    | 瞄准时长（秒）   | [动作时长](11_timing)          |
| sprint_time   | 数值   | 否    | 跑射延迟（秒）   | [动作时长](11_timing)          |
### 移动速度
| 字段                    | 类型  | 必填   | 说明                           | 详情               |
|-----------------------|-----|------|------------------------------|------------------|
| weight                | 数值  | 否    | 枪械重量（kg），影响移速                | [移动速度](12_speed) |
| movement_speed.base   | 数值  | 否    | 默认移速修正（`MULTIPLY_TOTAL` 修饰器） | [移动速度](12_speed) |
| movement_speed.aim    | 数值  | 否    | 瞄准时移速修正                      | [移动速度](12_speed) |
| movement_speed.reload | 数值  | 否    | 换弹时移速修正                      | [移动速度](12_speed) |
### 音效传播
| 字段                            | 类型   | 必填   | 说明           | 详情                  |
|-------------------------------|------|------|--------------|---------------------|
| fire_sound.fire_multiplier    | 数值   | 否    | 射击声音传播距离乘数   | [音效](13_fire_sound) |
| fire_sound.silence_multiplier | 数值   | 否    | 消音射击声音传播距离乘数 | [音效](13_fire_sound) |
### 枪械近战
| 字段                           | 类型   | 必填   | 说明                                   | 详情               |
|------------------------------|------|------|--------------------------------------|------------------|
| melee.distance               | 数值   | 否    | 近战攻击范围，与配件加和                         | [枪械近战](14_melee) |
| melee.cooldown               | 数值   | 否    | 近战冷却时间（秒），与配件加和                      | [枪械近战](14_melee) |
| melee.default.animation_type | 枚举   | 否    | 动画类型，可选 `melee_push` / `melee_stock` | [枪械近战](14_melee) |
| melee.default.damage         | 数值   | 否    | 近战伤害                                 | [枪械近战](14_melee) |
| melee.default.knockback      | 数值   | 否    | 近战击退                                 | [枪械近战](14_melee) |
| melee.default.range_angle    | 数值   | 否    | 近战攻击范围角度                             | [枪械近战](14_melee) |
| melee.default.prep           | 数值   | 否    | 近战前摇时长（秒）                            | [枪械近战](14_melee) |
### 配件槽
| 字段                     | 类型   | 必填   | 说明                                                                         | 详情                   |
|------------------------|------|------|----------------------------------------------------------------------------|----------------------|
| allow_attachment_types | 枚举数组 | 否    | 开放的配件槽，可选 `scope` / `stock` / `muzzle` / `grip` / `laser` / `extended_mag` | [配件槽](15_attachment) |
| builtin_attachments    | 对象   | 否    | 原厂配件候选列表及默认预装件                                                             | [配件槽](15_attachment) |
| exclusive_attachments  | 对象   | 否    | 为特定配件指派独立属性（⚠ 功能待修复）                                                       | [配件槽](15_attachment) |
### 过热
| 字段                      | 类型   | 必填   | 说明           | 详情                 |
|-------------------------|------|------|--------------|--------------------|
| heat.max                | 数值   | 否    | 过热上限         | [过热](16_heat)      |
| heat.per_shot           | 数值   | 否    | 每发子弹过热值      | [过热](16_heat)      |
| heat.cooling_multiplier | 数值   | 否    | 冷却倍率         | [过热](16_heat)      |
| heat.cooling_delay      | 数值   | 否    | 冷却延迟（ms）     | [过热](16_heat)      |
| heat.over_heat_time     | 数值   | 否    | 过热后延迟（ms）    | [过热](16_heat)      |
| heat.min_inaccuracy     | 数值   | 否    | 过热对精度的最小影响倍率 | [过热](16_heat)      |
| heat.max_inaccuracy     | 数值   | 否    | 过热对精度的最大影响倍率 | [过热](16_heat)      |
| heat.min_rpm_mod        | 数值   | 否    | 过热对射速的最小影响倍率 | [过热](16_heat)      |
| heat.max_rpm_mod        | 数值   | 否    | 过热对射速的最大影响倍率 | [过热](16_heat)      |