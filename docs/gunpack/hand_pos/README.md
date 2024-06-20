# Hand Position Groups

Hand position groups are two position groups included in the gun model, named `lefthand_pos` (left hand position group) and `righthand_pos` (right hand position group).

### Placing Preview Hand Models

The rendering of the hand model is automatically done by the program. If we want to preview the rendering results of the hand model in BlockBench, we need to add models to the hand position groups in a fixed way.

#### Steve Hand Preview Model

1. First, set the Pivot Point of the `lefthand_pos` position group to (0, 0, 0), then add a cube to it and manually input the cube's data.
   - Position: (4, 0, -2)
   - Size: (4, 12, 4)

   As shown below:   
   ![Left Hand Pos](./lefthand_pos.png)   
   Finally, move and rotate the entire group to the appropriate position. After moving and rotating, the Position value of the hand preview model is (7, 0, -2), with the relative value to the `lefthand_pos` group's Pivot Point still being (+4, +0, -2).   
   ![Left Hand Pos Rot](./lefthand_pos_rot.png)   
   ::: tip
   In summary, ensure that the Size value of the preview hand block is fixed at (4, 12, 4) and the Pivot Point value is (+4, +0, -2) relative to the `lefthand_pos` Pivot Point.
   :::
2. The placement method for `righthand_pos` is similar to `lefthand_pos`, except that the Position value of the block is changed to (-8, 0, -2), which means the relative value to the `righthand_pos` group's Pivot Point is fixed at (-8, +0, -2).
   As shown below:   
   ![Right Hand Pos](./righthand_pos.png)    

#### Alex Hand Preview Model

The Alex hand model is similar to Steve's, but the block parameters need to be changed:
- Left hand Position remains unchanged, Size is changed to (3, 12, 4).
- Right hand Position is changed to (-7, 0, -2), Size is changed to (3, 12, 4).

#### Hand Orientation

If you place the hand preview models according to the above steps, without moving or rotating, the upper end of the model corresponds to the palm and fingers, with the palms facing each other. The thumb points in the negative z-axis direction (north).    
![Hand Pose](./hand_pose.png)   
::: tip
There is no need to delete the hand preview models because during actual rendering, any models within the hand position groups will not be rendered but will be directly replaced with the player hand model.
:::

### Adding Hand Position Groups to the Tutorial Gun

![Hand And Gun](./gun_and_hand.png)   
![In Game](./in_game.png)   
