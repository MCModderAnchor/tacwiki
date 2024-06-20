# Adding gun sound effects
All the sound effects required for firearms are listed as follows：

| Effect Name        | Effect              |
| ----------------- | ------------------ |
| draw        | Play when drawing/ (switching to) the gun             |
| inspect        | Plays when inspecting the gun with atleast one bullet in the chamber             |
| inspect_empty   | Plays when inspecting the gun with no bullet in the chamber              |
| put_away       | Plays when the gun is put away       |
| reload_empty    | Plays when reloading with no bullet in the chamber      |
| reload_tactical  | Plays when reloading with atleast one in the chamber      |
| shoot          | Played when the **local client fires (Played to the player firing the gun) the gun**|
| shoot_3p | Played when another **Entity fires the gun** |
| silence         | Played when the **local client fires (Played to the player firing the gun) the gun** with a silencer attached |
| silence_3p | Played when another **Entity fires the gun** with a silencer attached  |
| dry_fire | Plays when the player attempts to fire on an empty gun. (Tacz provides this as a default sound effect, you can enable it without having to specify it) |
| fire_select | Plays when switching between firing modes (Tacz provides this as a default sound effect, you can enable it without having to specify it)|
| head_hit | Headshot feedback when a headshot is hit. (Tacz provides this as a default sound effect, you can enable it without having to specify it) |
| flesh_hit | Body feedback when a entity is hit that is not the head. (Tacz provides this as a default sound effect, you can enable it without having to specify it) |
| kill | The sound effect upon killing a entity. (Tacz provides this as a default sound effect, you can enable it without having to specify it) |

In this tutorial, we are going to add the shoot and dry_fire sound effect to the tutorial gun as a demonstration.
::: tip
Before we start, I think it's a good time to remind you that you can absolutely refrence the default sound with 'tac:ak47/ak47_shoot' and 'tac:ak47/ak47_dry_fire' from the default gun pack provided by TacZ. But for the aspect of teaching you how to implement your own custom sound, we will be copying these two sound effects and add them to the tutorial gun pack. In general when making gun packs, you should definetly reuse existing resource (where its possible) by refrencing it rather than copy and pasting multiple files. (If it isn't clear enough we meant that if gun1 and gun2 need the same sound file you can just refrence one single file rather than making 2 copies of the same sound file)
:::

1. By following the link [here](https://github.com/MCModderAnchor/TimelessAndClassicsZero/tree/1.18.2/src/main/resources/assets/tac/custom/tac_default_gun/tac/sounds/ak47) download ak47_shoot.ogg and ak47_dry_fire.ogg.
2. The sound effect files should be placed in the 'sounds/' folder of the gun pack, and for the sake of keeping everything neat and tidy, we should create a seperate folder for each gun and classify the sound effects for the same gun together.
Therefore, in the 'sounds/' folder, create a new 'ak47/' folder and put the two .ogg file you've just downloaded (ak47_shoot.ogg and ak47_dry_fire.ogg) into it.
At this point, your gun pack file structure should look something like the following.
```
tutorial_gun_pack
└─ tutorial
   ├─ pack.json
   ├─ textures
   │  └─ gun
   │     ├─ uv
   │     │  └─ ak47.png
   │     ├─ slot
   │     │  └─ ak47.png
   │     └─ hud
   │        └─ ak47.png
   ├─ sounds
   │  └─ ak47
   │     ├─ ak47_dry_fire.ogg
   │     └─ ak47_shoot.ogg
   ├─ models
   │  └─ gun
   │     └─ ak47_geo.json
   ├─ lang
   │  └─ en_us.json
   └─ guns
      ├─ index
      │  └─ ak47.json
      ├─ display
      │  └─ ak47_display.json
      └─ data
         └─ ak47_data.json
```
3. Next we need to specify the sound effects for the ak47 so open 'guns/display/ak47_display.json' file and add the following code:
``` json
    "sounds": {
        "shoot": "tutorial:ak47/ak47_shoot",
        "dry_fire": "tutorial:ak47/ak47_dry_fire"
    }
```
The format is 'namespace:(file path after 'sounds/')
4. Go to the game and check.