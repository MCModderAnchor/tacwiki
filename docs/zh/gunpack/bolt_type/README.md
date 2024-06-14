#枪击类型
>枪击类型分为开膛待机（open_bolt）、闭膛待击（closed_bolt）、手动上膛（manual_action)

在guns/data/gunname_data.json文件内添加以下代码
``` json
"bolt": "open_bolt"
```

##开膛待机 open_bolt
枪膛内不可额外容一发弹药
##闭膛待机 closed_bolt
枪膛内可以额外容一发弹药
##手动上膛 manual_action
每次开火后需要手动上膛
手动上膛动画：bolt
需额外添加动画时间："bolt_action_time": xx
``` json
  "draw_time": 0.35,
  "put_away_time": 0.6,
  "aim_time": 0.25,
  "sprint_time": 0.2,
  "bolt_action_time": 0.9
```