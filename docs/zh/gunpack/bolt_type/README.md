# 枪机类型

>枪击类型分为开膛待机（open_bolt）、闭膛待击（closed_bolt）、手动上膛（manual_action)

在枪械 data 文件内添加以下代码
``` json
"bolt": "{枪机类型，open_bolt closed_bolt 或 manual_action}"
```

## 开膛待击 open_bolt

开膛待击的自动步枪使用。枪膛内不可额外容一发弹药   

## 闭膛待击 closed_bolt

闭膛待击的自动步枪使用。枪膛内可以额外容一发弹药
## 手动上膛 manual_action
每次开火后需要手动上膛
手动上膛动画：bolt
需在 data 中额外添加拉栓时间："bolt_action_time": xx

``` json
  "bolt_action_time": 0.9
```