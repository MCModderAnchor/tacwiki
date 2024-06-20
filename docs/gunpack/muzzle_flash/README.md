# Muzzle Flash

### Placing the Position Group in the Gun Model

The name of the muzzle flash position group is fixed as `muzzle_flash`.
- The muzzle flash position group is affected by animations, so you need to ensure that it is in the same group as the muzzle model. This way, the muzzle flash will change position along with the muzzle as the gun moves.
- The negative direction of the z-axis of the muzzle flash position group should be aligned with the direction of the muzzle.

Next, we will place the muzzle flash position group in the tutorial gun model.   
![Muzzle Flash Pos](./muzzle_flash_pos.png)   

### Specifying the Muzzle Flash Texture

You can create your own muzzle flash texture and place it in the gun pack, or you can use the default muzzle flash texture provided by the default gun pack: `tac:flash/common_muzzle_flash`.   
In this tutorial, we will use the default muzzle flash texture.   
The muzzle flash texture needs to be specified in the gun display file. Open `guns/display/ak47_display.json` and add the following code:
```json
    "muzzle_flash": {
      // Path to the muzzle flash texture
      "texture": "tac:flash/common_muzzle_flash",
      // Scale factor
      "scale": 1
    }

```
After this, enter the game, and if you see the following effect, the muzzle flash has been successfully added.
