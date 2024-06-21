# Additional Damage
In the previous tutorial where we created our [first gun](/gunpack/first_gun/). We skipped the extra damage attribute that applies to bullets. The extra damage attribute is used to define the gun's: armor penetration, headshot damage multiplier, range damage falloff, and close range damage multiplier. So without further ado, let's add the extra damage attribute to the tutorial gun. Within 'guns/data/ak47_data.json', locate the 'bullet' section of the file and add the following to it.
``` json
    "extra_damage": {
      // Armor penetration, 1 - 0.0, default is 0. 1 means armor does not reduce gun damage at all.
      "armor_ignore": 0.5,
      // Headshot multiplier
      "head_shot_multiplier": 2,
      // Distance-Damage Piecewise Constant Function
	  "damage_adjust": [
		  // The damage value of each interval, which distance refers to the distance to the end of the interval
		  {"distance": 0.5, "damage": 10},
		  {"distance": 25, "damage": 9},
		  {"distance": 50, "damage": 8.5},
		  {"distance": 80, "damage": 7.5},
		  {"distance": 120, "damage": 6.5},
		  // If you forget to write this, then the damage well be considered to be 0 when distance is beyond the above.
		  {"distance": "infinite", "damage": 5.5}
	  ]
    }
```
The gun range is automatically calculated by the mod itself, the calculation formula is listed below
$$
range = \frac{speed}{20}·\frac{1-(1-f)^{life*20}}{f}
$$
The parameters speed, life and f (friction) are from [Chapter 1](/gunpack/first_gun/#creating-a-gun-data-file)。
```json
{
    ...
    "bullet": {
        ...
        // bullet lifespan, in seconds
        "life": 10,
        // speed, m/s
        "speed": 400,
        // resistance from 0 to 1
        "friction": 0.01,
        ...
    }
    ...
}
```

Lots of math yes, but after that you should have something similar below.

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