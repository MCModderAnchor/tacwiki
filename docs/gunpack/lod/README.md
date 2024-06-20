# Low-Poly Models to Reduce Rendering Load

Due to the generally high precision of gun models, models with hundreds of blocks can bring significant rendering pressure to the game. This is especially true when many players like to hang guns on the wall, which can lead to very high performance usage when many guns are displayed. To mitigate this issue, we can use low-poly models for display. Low-poly models are not mandatory but are recommended to reduce game pressure.
::: tip
Applicable scenarios for low-poly models: third-person holding, item frames, and as dropped items on the ground; Applicable scenarios for high-poly models: first-person holding and rotating display in the gun crafting table.
:::

## Low-Poly Gun Models

![High-Poly Model](./lod_m4a1.png)
![Low-Poly Model](./lod_m4a1_lod.png)
::: tip
The number of blocks in a low-poly model should not be too many; keeping it under 50 is ideal.
:::
When you have completed the modeling of the low-poly model, export the Bedrock edition model and related textures. Here we use the M4A1 as an example.
::: tip
When creating your own low-poly model, avoid confusing the names with high-poly models. It is recommended to add the suffix "_lod" to both the model and texture of the low-poly model.
:::

### Modeling for LOD

A recommended method is to copy the high-poly model and then simplify it accordingly.

::: tip
Low-poly models should also retain all positioning groups.
[Adjusting Gun Model Positioning Groups](/gunpack/gun_positioning/)
Since it is not rendered in the first-person view, the first-person arm positioning group is not needed.
:::

### Adding LOD

At this point, you should have the following materials:

- Low-poly model: m4a1_geo.json
- Texture: m4a1.png

1. Find the models/gun directory and create a new folder named lod, then place m4a1_geo.json inside.
2. Find the textures/gun directory and create a new folder named lod, then place m4a1.png inside.

Your directory structure should now look like this:



```
tutorial_gun_pack
└─ tutorial
   ├─ textures
   │  └─ gun
   │    └─ lod
   │      └─ m4a1.png
   ├─ models
   │  └─ gun
   │    └─ lod
   │      └─ m4a1_geo.json
```


### Modifying the Gun Display File

Find your gun display file (in the guns/display directory). Using m4a1 as an example, find m4a1_display.json and add the following content:

```json
// Calling the low-poly model
"lod": {
    // Path to your low-poly model
    "model": "tutorial:gun/lod/m4a1_geo",
    // Path to your low-poly model texture
    "texture": "tutorial:gun/lod/m4a1"
}

```

After doing this, start the game (or use /tacz reload in-game).
If you see the following screen, it means the low-poly model has been successfully added.
![完成](./lod_m4a1_finish.png)

Finally, if you happen to have the Cloth Config mod installed, you can press alt + T in the game to open the configuration menu. Here, you can set the rendering distance for the low-poly model (in blocks). Within this distance, the high-poly model is rendered; beyond this distance, the low-poly model is rendered.
![配置](./lod_config.png)

