# Additional Damage
In the previous tutorial where we created our [first gun](/gunpack/first_gun/). We skipped the extra damage attribute that applies to bullets. The extra damage attribute is used to define the gun's: armor penetration, headshot damage multiplier, range damage falloff, and close range damage multiplier. So without further ado, let's add the extra damage attribute to the tutorial gun. Within 'guns/data/ak47_data.json', locate the 'bullet' section of the file and add the following to it.
``` json
    "extra_damage": {
      // Armor penetration, 1 - 0.0 where 1 is 100% and 0% armor ignore.
      "armor_ignore": 0.5,
      // Headshot multiplier
      "head_shot_multiplier": 2,
      // Damage falloff
      "decay": {
        // At what percent of the total range of weapon does bullet damage start to drop. At what range is the minimum damage the bullet is going to do. In this case assuming the max distance is 100m

        //0m      14m                  30m                   100m
        //|--------|--------------------|----------------------|
        //Max     Start of             Min Damage             Total Range
        //Damage  Attenuation          Damage
        "range_percent": [
          0.14,
          0.3
        ],
        // The minimum damage from 0.0 - 1.0 the bullet is going to do 0.1 being 10% off the original bullet damage
        "min_damage_multiplier": 0.3
      },
      // Close range damage or 'point blank' fire
      "close": {
        // Define from 0 -> n what 'close' is
        "range_meters": 2,
        // Damage multiplier 110%
        "damage_multiplier": 1.1
      }
    }
```
The gun range is automatically calculated by the mod itself, the calculation formula is listed below
![Max Distance Calculate](./max_distance.png)   
The parameters speed, life and friction come from [creating the first gun data file](/gunpack/first_gun/#创建枪械数据文件)。   
The unit of speed in the formula is in tick, and the unit of bullet speed parameter is tick/s, so 'bullet speed = speed / 20', 'bullet duration = life * 20'.

Lots of math yes, but after that you should have something similar below.
``` json
{
    ...
    "bolt": "closed_bolt",
    "rpm": 600,
    "bullet": {
      "extra_damage": {
        "armor_ignore": 0.5,
        "head_shot_multiplier": 2,
        "decay": {
          "range_percent": [
            0.14,
            0.3
          ],
          "min_damage_multiplier": 0.3
        },
        "close": {
          "range_meters": 2,
          "damage_multiplier": 1.1
        }
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