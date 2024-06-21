# Gunpack Building Guide
::: tip
- The gun pack supports two types of formats, zip compression format and regular folder format. Zip is convenient for sharing, while the folder format is more convenient for gun makers to actively modify and troubleshoot. The file structures of these two format remains unchanged and the exact same.
- It should be noted that in most if not all cases, the gun pack cannot reference original MC resources. Therefore, you should put everything you need into the gun pack.
- The model format that is supported by the gun pack is currently only Bedrock model format, more specifically Bedrock Entity for guns and attachments.
- You can cross reference between multiple gun packs through 'namespace: resource_path'
:::
### Table of contents
- [Creating Your First Gun Pack](/gunpack/first_gunpack/)
- [Creating and Using Language Files](/gunpack/language/)
- [Creating The First Gun](/gunpack/first_gun/)
- [Adjusting The Gun Model Positioning Group](/gunpack/gun_positioning/)
- [Creating HUD Icons]( /gunpack/hud_icon/)
- [Adding Gun Sound Effects]( /gunpack/gun_sound/)
- [Additional Gun Damage]( /gunpack/gun_extra_damage/)
- [Creating Ammunition](/gunpack/ammo/)
- [Shell Ejection](/gunpack/shell_ejection/)
- [Muzzle Flash](/gunpack/muzzle_flash/)
- [Render Text on Gun Model](/gunpack/render_text/)
- [Hand Positioning](/gunpack/hand_pos/)
- [Gun Animation](/gunpack/animation/)
- [Animation Constraints](/gunpack/ica/)
- [Bolt Typing](/gunpack/bolt_type/)
- [Creating Gun Accessories](/gunpack/attachment/)
- [Firearm Modification](/gunpack/gun_refit/)
- [Low Poly Model](/gunpack/lod/)
- [Gun Recipe](/gunpack/recipe/)
### Gunpack file structure
[tac default gun package structure](https://github.com/MCModderAnchor/TimelessAndClassicsZero/tree/1.18.2/src/main/resources/assets/tac/custom/tac_default_gun) Gunpack file structure。
```
Root Directory
└─── tac   # Namespace of the gun package, which is determined by the folder name
     ├─── ammo
     │    ├─── display   # Client data for ammunition (Includes Models, Texture, Animation)
     │    │    ├─── 762x39_display.json
     │    │    └─── 9mm_display.json
     │    │
     │    └─── index   # Ammunition definition file, the ammunation id is determined by its file name.
     │         ├─── 762x39.json
     │         └─── 9mm.json
     │
     ├─── animations   # Animations folder for guns
     │    ├─── ak47.animation.json  # Bedrock animation file (note that it has the suffix '.animation.json')
     │    └─── m16.gltf             # gltf file
     │
     ├─── attachments
     │    ├─── data   # Accessory parameters
     │    │    ├─── sro_dot_data.json
     │    │    └─── 8x_data.json
     │    │
     │    ├─── display   # Accessory client data
     │    │    ├─── sro_dot_display.json
     │    │    └─── 8x_display.json
     │    │
     │    └─── index   # Accessory definition file, The id is determined by the file name
     │         ├─── sro_dot.json
     │         └─── 8x.json
     │
     ├─── guns
     │    ├─── data   # Gun Parameters
     │    │    ├─── ak47_data.json
     │    │    └─── m16_data.json
     │    │
     │    ├─── display   # Gun Client data
     │    │    ├─── ak47_display.json
     │    │    └─── m16_display.json
     │    │
     │    └─── index   # Gun definition file，the gun id is determined by its file name
     │         ├─── ak47.json
     │         └─── m16.json
     │
     ├─── lang   # Language file
     │    ├─── en_us.json
     │    └─── zh_cn.json
     │
     ├─── models   # Model file, the subdirectory naming is only a reccomendation, you can ultimately decide how you want to name it。
     │    ├─── ammo   # Ammunition item model。
     │    │    ├─── 762x39_geo.json
     │    │    └─── 9mm_geo.json
     │    │
     │    ├─── ammo_entity   # Bullet model
     │    │    └─── rpg_rocket.json
     │    │
     │    ├─── attachment   # Attachment model
     │    │    ├─── sro_dot_geo.json
     │    │    └─── 8x_geo.json
     │    │
     │    ├─── gun   # Gun model
     │    │    ├─── ak47_geo.json
     │    │    └─── m16_geo.json
     │    │
     │    └─── shell   # Shell Model
     │         ├─── 762x39_shell.json
     │         └─── 9mm_shell.json
     │
     ├─── recipes   # Recipe files. The sub-directories naming is recommended, but you can ultimately decide how you wisht to classify them.
     │    ├─── ammo   # Ammunition recipe
     │    │    ├─── 762x39.json
     │    │    └─── 9mm.json
     │    │
     │    └─── gun   # Gun recipe
     │         ├─── ai_awp.json
     │         └─── ak47.json
     │
     ├─── sounds   # Gun sound file。The sub-directories naming is recommended, but you can ultimately decide how you wisht to classify them. The sound format only supports ogg。
     │    ├─── ak47
     │    │    ├─── ak47_draw.ogg
     │    │    └─── ak47_shoot.ogg
     │    │
     │    └─── ai_awp
     │         ├─── ai_awp_draw.ogg
     │         └─── ai_awp_shoot.ogg
     │
     ├─── textures   # Texture files。he sub-directories naming is recommended, but you can ultimately decide how you wisht to classify them.
     │    ├─── ammo
     │    │    ├─── slot   # Ammo inventory display texture. (What's display in the gui)
     │    │    │    ├─── 762x39.png
     │    │    │    └─── 9mm.png
     │    │    │
     │    │    └─── uv   # Textures for bullet models
     │    │         ├─── 762x39.png
     │    │         └─── 9mm.png
     │    │
     │    ├─── ammo_entity   # Texture for bullet entity models
     │    │    └─── rpg_rocket.png
     │    │
     │    ├─── attachment
     │    │    ├─── slot   # Attachment inventory display texture. (What's display in the gui)
     │    │    │    ├─── sro_dot.png
     │    │    │    └─── 8x.png
     │    │    │
     │    │    └─── uv   # Attachment model texture
     │    │         ├─── sro_dot.png
     │    │         └─── 8x.png
     │    │
     │    ├─── flash   # Muzzle flash texture
     │    │    └─── common_muzzle_flash.png
     │    │
     │    ├─── gun
     │    │    ├─── hud   # 2D texture for HUD and GUI rendering
     │    │    │    ├─── ak47.png
     │    │    │    └─── m16.png
     │    │    │
     │    │    ├─── lod   # Low poly model texture for guns
     │    │    │    ├─── ak47.png
     │    │    │    └─── m16.png
     │    │    │
     │    │    ├─── slot   # Gun inventory display texture. (What's display in the gui)
     │    │    │    ├─── ak47.png
     │    │    │    └─── m16.png
     │    │    │
     │    │    └─── uv   # Textures for gun models
     │    │         ├─── ak47.png
     │    │         └─── m16.png
     │    │
     │    └─── shell   # Textures for casing models
     │         ├─── 9mm_shell.png
     │         └─── 762x39_shell.png
     │
     ├─── pack.json   # Gun pack description file
     │
     └─── tab.json   # Creative menu tab bar file
```