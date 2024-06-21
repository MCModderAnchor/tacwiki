# Animation Production Standards
This tutorial is authored by Lesraisins-伯爵

[[toc]]

## Grouping
> To facilitate animation production and program reading, the model should be grouped in advance before starting to create animations. The following are model grouping suggestions.

------------

**Mandatory Requirements**   
No matter how you group, the following group names cannot be changed!
- root: Root group, everything except camera animation groups and various position groups should be under the root group. If there is no root group, the default animation will not work.
- magazine: Magazine group, the program will automatically recognize the contents under the magazine group, including the default magazine and extended magazines of levels 1-3. If your gun does not allow extensions, you can omit the extended magazine groups. **Note: If the gun allows extensions, regardless of whether the three levels of extended magazine models are the same, you must place three extended magazine groups. If the models are the same, you need to copy them.**
  - Default magazine: mag_standard
  - Level 1 extended magazine: mag_extended_1
  - Level 2 extended magazine: mag_extended_2
  - Level 3 extended magazine: mag_extended_3
- additional_magazine: Additional magazine group. If you want to create animations where an old magazine is replaced by a new one (two magazines appear on the screen simultaneously), create this group with the same pivot point as the magazine group. The program will recognize this group and render the corresponding magazine additionally. **Note: Ensure this group is empty when exporting the animation.**
- constraint: Constraint group, used when creating constraint animations.
- camera: Camera animation group. To create camera animations, add a camera under this group using the camera plugin. When keyframing, do it for the camera group.

------------

**Grouping Suggestions**
- right_hand_and_gun: Right hand and gun, can be freely named. In most animations, the right hand and gun move together, so they can be placed in the same group for easier keyframing.
- left_hand_and_mag: Left hand and magazine, can be freely named. During reloading, the left hand and magazine often move together for a long time, so they can be placed in the same group for easier keyframing.
- left_hand: Left hand group, can be freely named. It should be nested outside the lefthand_pos (left hand arm position group). Change its pivot point relative to the arm model and use it for keyframing for convenience.
- right_hand: Same as the left hand group.
- default: Any name. A collection of all non-movable parts of the gun (everything not involved in the animation).
- All other moving parts are on the same level as the main group, such as the magazine, handle, etc., which can be freely named.

------------

### Download Grouped Hand Models

[Quark Netdisk](https://pan.quark.cn/s/03b2c15e7403)  
[Baidu Netdisk](https://pan.baidu.com/s/1wgj3tFTzPd2ZOaRbkgSaYw?pwd=17e0)  
[Google Drive](https://drive.google.com/drive/folders/1C8CsGzRCsaQfA5ako51ljNKG5VOER1lF?usp=drive_link)

------------

![group](https://s1.3hov.com/lesraisins/i/2024/05/07/fenzu.png)

------------

## Pivot Point Settings
> Pivot point settings are for convenience in animation production. Except for the **lefthand_pos** and **righthand_pos** groups, the pivot points of other groups should be set in a comfortable way. The following content is for reference suggestions.

**Pivot Point:** The point around which a part/model will rotate.

**Content That Needs Pivot Points Set:** Generally, all groups involved in keyframing need pivot points. If you want to be lazy, you can only set pivot points for rotating groups.

**How to Set Pivot Points:**
- Shortcut key: P
- Round button in the toolbar
- Center the pivot point: next to the pivot point value on the right side

**Recommended Pivot Point Locations:** This content is only a suggestion by the editor and has no authority. Ultimately, it should be based on what feels comfortable.
- right_hand_and_gun: Place it in the palm of the right hand
- left_hand & right_hand groups: Place them in the palms
- Especially, **it is recommended to place the pivot point of the root group at the rear grip of the gun model** for the best visual effect of the default animation.

------------

![pivot](https://s1.3hov.com/lesraisins/i/2024/05/07/pivot.png)

------------

## Animation Types and Standards
> For the program to read correctly, please strictly follow the following content for animation naming!

### Essential Animations
> The following are indispensable animation types. If any are missing, serious visual issues may occur.

#### static_idle
Default holding animation. This animation only needs to set the positions of the left and right hands, the parameters of the constraint group, and the special position groups.
- Animation type: Static animation

------------

![static_idle](https://s1.3hov.com/lesraisins/i/2024/05/07/static_idle.png)

------------

#### reload_tactical
Tactical reload animation, the tactical reload method when there is still ammunition in the gun. If your gun does not differentiate between tactical reload and empty reload, you can copy this animation to the empty reload.
- The start and end states of the animation should be exactly the same as static_idle

#### reload_empty
Empty reload animation, the reload animation when ammunition is exhausted.
- The start and end states of the animation should be exactly the same as static_idle

#### inspect
Inspection animation: Weapon inspection animation.
- The start and end states of the animation should be exactly the same as static_idle

------------

#### shoot
Shooting animation, the visual recoil animation when the weapon fires.
- The start and end states of the animation should be exactly the same as static_idle
- Animation type: Mixed. This animation will be mixed with other types of animations.
- Note: Because it is a mixed animation, it can overlay with others, so hand keyframes are not needed.

![shoot](https://s1.3hov.com/lesraisins/i/2024/05/07/shoot.png)

------------

### Optional Animation Types
> Optional animations are animations that are not needed for all guns. You can choose whether to create them based on your needs.

#### static_bolt_caught
Empty chamber animation, the static animation when the weapon is in an empty chamber state.
- Animation type: Static animation

![sbc](https://s1.3hov.com/lesraisins/i/2024/05/07/sbc.png)

------------

#### draw
Draw animation, the animation played when the player takes out the weapon.
- This animation is included in the default animations.
- The end state of the animation should be exactly the same as static_idle

------------

#### put_away
Holster animation, the animation played when the player switches inventory slots or discards the weapon.
- This animation is included in the default animations.
- The start state of the animation should be exactly the same as static_idle

------------

#### inspect_empty
Empty chamber inspection animation, the inspection animation played when the weapon is in an empty chamber state.
If the inspect_empty animation is missing, inspection cannot be triggered when the chamber is empty.
- The start and end states of the animation should be exactly the same as static_idle

------------

#### bolt
Bolt action animation, the animation played after firing a manual weapon.
- The start and end states of the animation should be exactly the same as static_idle
- Constraint group animation: After creating a constraint group animation, the gun will always move around the constraint point during bolt action.

------------

#### Movement Animations

------------

##### Running Animations

**run_start**
The animation when entering the running state.
- This animation is included in the default animations.
- The start state of the animation should be exactly the same as static_idle

**run**
The running animation.
- This animation is included in the default animations.
- Animation type: Loop
- The start/end states of the animation should be the same as run_start

**run_hold**
The jumping animation while running.
- This animation is included in the default animations.
- Animation type: Static

**run_end**
The animation when exiting the running state.
- This animation is included in the default animations.
- The start state of the animation should be the same as run
- The end state of the animation should be exactly the same as static_idle

------------

##### Walking Animations

**walk_aiming**
The aiming animation while walking.
- This animation is included in the default animations.
- Animation type: Loop
- The start/end states of the animation should be exactly the same as static_idle

**walk_forward**
The animation while walking forward.
- This animation is included in the default animations.
- Animation type: Loop
- The start/end states of the animation should be exactly the same as static_idle

**walk_sideway**
The animation while walking sideways.
- This animation is included in the default animations.
- Animation type: Loop
- The start/end states of the animation should be exactly the same as static_idle

**walk_backward**
The animation while walking backward.
- This animation is included in the default animations.
- Animation type: Loop
- The start/end states of the animation should be exactly the same as static_idle

## Animation Production
> The following is the author's explanation of creating animations in Blockbench.

### I. Channel Settings
Check the rotation, movement, and scaling in the channels.

------------

![channel](https://s1.3hov.com/lesraisins/i/2024/05/07/753v.png)

------------

### II. Keyframes
**Adding Keyframes**
The principle of animation is the process of an object moving from one keyframe to another.
In Blockbench, you can add keyframes through the + sign under the group, or you can use the rotation (R), movement (V), and scaling (S) tools to change the state of the object and add keyframes.
![addkey](https://s1.3hov.com/lesraisins/i/2024/05/07/addkey.png)

**Types of Keyframes**
There are four types of keyframes: 1. Linear 2. Smooth 3. Bezier 4. Step. After selecting a keyframe, you can change it in the lower left corner of the screen.
![keytype](https://s1.3hov.com/lesraisins/i/2024/05/07/keytype.png)

------------

### III. Curves
To create more detailed animations, you can switch to curve mode in the timeline window for editing.
![graph](https://s1.3hov.com/lesraisins/i/2024/05/07/line.png)

------------

## Baking Animation
> If your animation has Bezier curves, you need to bake it into linear animation to ensure its correct rendering in the game.
::: tip
Baking animation should only be done before exporting the animation. If you want to modify the animation later, you should copy and save the original animation file before baking.
:::
**Required Plugin:** Bakery, https://github.com/JannisX11/blockbench-plugins/tree/master/plugins/bakery.js

**Baking Method:** Load the animation, select the keyframes with Bezier curve interpolation, and click Animation - Bake Animation in the menu bar.
![bake](https://s1.3hov.com/lesraisins/i/2024/05/07/bake.png)

------------

## Exporting Animation
> The animations support glTF and Bedrock animation formats.

### Exporting glTF Animation Format (with suffix '.gltf')
![gltf](https://s1.3hov.com/lesraisins/i/2024/06/02/export_gltf.png)

### Exporting Bedrock Animation Format (with suffix '.animation.json')
![json](https://s1.3hov.com/lesraisins/i/2024/06/02/export_json.png)

------------

## Filling in the Gun Display File
> The animation will only load correctly in the game after filling in the gun display file.
> Add the following:

```json
  // Name of the animation to be called, which does not contain suffix, will look for it in the 'animations' folder in the pack directory. 
  "animation": "tacz:ak47",
  // Specify the use of default animations, can be empty. If any animation is missing in the file specified above, such as the draw animation, it will be copied from the default animations.
  // The value can be 'rifle' or 'pistol'.
  "use_default_animation": "rifle",
