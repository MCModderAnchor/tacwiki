# Shell Ejection

In the previous chapter, we created the shell casing model and imported it into the gun pack. However, we need to make some additional settings in the gun model and gun display files for the shell ejection to render properly.

### Placing the Shell Ejection Window Position Group

First, we need to place a shell ejection window position group in the gun model. The name of this position group is fixed as "shell".
::: tip
The shell ejection window position group will be affected by the gun's animation. You need to ensure that the shell ejection window position group and the shell ejection model are under the same group so that they can be affected by the same animation effects.
:::
![Shell Pos](./shell_pos.png)

### Configuring Shell Ejection Parameters

The shell ejection parameters are set in the gun display file.
Add the following code to `guns/display/ak47_display.json`:
```json
    // The rendering data for shell ejection, can be empty. If empty, the gun will not eject shells.
    "shell": {
        // The initial velocity values of shell ejection in xyz.
        "initial_velocity": [5, 2, 1],
        // The random velocity values for shell ejection motion in xyz. Scaled randomly from 0 to 1 and added to the initial velocity.
        "random_velocity": [1, 1, 0.25],
        // The acceleration of the shell ejection.
        "acceleration": [0.0, -10, 0.0],
        // The angular velocity of the shell ejection on three axes. Randomly scaled from 0.5 to 1.
        "angular_velocity": [360, -1200, 90],
        // The render lifespan of the shell ejection, in seconds.
        "living_time": 1.0
    },

```
Finally, enter the game and see the effect.
