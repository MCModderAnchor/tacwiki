# 额外伤害
在之前的 [添加第一把枪](/zh/gunpack/first_gun/) 教程中，我们跳过了一个子弹属性——额外伤害属性。   
额外伤害属性用于定义枪的：护甲穿透率 (原版护甲)、爆头伤害倍率、远距离伤害衰减、抵近射击伤害倍率。  
事不宜迟，让我们为教程枪添加额外伤害属性。   
在 guns/data/ak47_data.json 中，找到 "bullet" 子项，并向其中添加如下代码:   
``` json
{
	...
	// 额外伤害的内容，为空则表示没有任何额外伤害计算内容
	"extra_damage": {
		// 护甲穿透率，默认为 0，也就是没有穿甲伤害
		"armor_ignore": 0.3,
		// 爆头伤害 x1.5
		"head_shot_multiplier": 1.5,
		// 距离-伤害分段常函数
		"damage_adjust": [
			// 每一段区间的伤害数值，Distance指的是区间终点距离
			{"distance": 0.5, "damage": 10},
			{"distance": 25, "damage": 9},
			{"distance": 50, "damage": 8.5},
			{"distance": 80, "damage": 7.5},
			{"distance": 120, "damage": 6.5},
			// 如果你忘记写这个无穷，那么超过上述距离，就认为是 0
			{"distance": "infinite", "damage": 5.5}
		]
	},
	...
}
```
其中，枪械的射程程序会自动计算。计算式为：   
![Max Distance Calculate](./max_distance.png)   
其中参数 speed、life 和 friction 来自第一章中 [枪械数据文件的定义](/zh/gunpack/first_gun/#创建枪械数据文件)。   
算式中的子弹速度的单位是 格/tick，而 speed 参数的单位是 格/秒，因此子弹速度 = speed / 20。同理，子弹持续Tick = life * 20。   
最后，你的枪械数据文件应该看起来像这样:    
``` json
{
    ...
    "bolt": "closed_bolt",
    "rpm": 600,
    "bullet": {
	    "extra_damage": {
			"armor_ignore": 0.3,
			"head_shot_multiplier": 1.5,
			"damage_adjust": [
				{"distance": 0.5, "damage": 10},
				{"distance": 25, "damage": 9},
				{"distance": 50, "damage": 8.5},
				{"distance": 80, "damage": 7.5},
				{"distance": 120, "damage": 6.5},
				{"distance": "infinite", "damage": 5.5}
			]
		},
	    "life": 10,
	    "damage": 6,
	    "speed": 400,
	    "gravity": 0,
	    "knockback": 0,
	    "friction": 0.01,
	    "ignite": false,
	    "pierce": 2
    },
    ...
}
```