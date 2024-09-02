# 手臂定位组
手臂定位组是包含在枪械模型中的两个定位组，分别名为 lefthand_pos(左手定位组) 和 righthand_pos(右手定位组)。   
### 放置预览用手部模型
手部模型的渲染是程序中自动完成的。如果我们想在 BlockBench 中预览手部模型的渲染结果，你需要按照固定的方式在手臂定位组中添加模型。   
#### Steve 手臂预览模型   
1. 我们先将 lefthand_pos 定位组的 Pivot Point 置于 (0, 0, 0)，然后向其中添加一个方块，手动输入方块的各个数据。   
Position 设置为 (4, 0, -2)，   
Size 设置为 (4, 12, 4)。   
如图所示:   
![Left Hand Pos](./lefthand_pos.png)   
最后移动、旋转整个组到合适的位置。   
如下图经过位移和旋转后，手臂预览模型的 Position 数值 为 (7, 0, -2) , 与 lefthand_pos 组的 Pivot Point 相对值仍然保持  (+4, +0, -2)。   
![Left Hand Pos Rot](./lefthand_pos_rot.png)   
::: tip
用一句话来概括，其实就是: 保证用于预览的手臂方块的 Size 值固定为 (4, 12, 4)，且 Pivot Point 数值 为 lefthand_pos 的 Pivot Point 数值的 (+4, +0, -2)。
:::
2. righthand_pos 的放置方式与 lefthand_pos 类似，不同的是，方块的 Position 值改为 (-8, 0, -2)，即与 righthand_pos 分组的 Pivot Point 相对值固定为 (-8, +0, -2)。   
如图所示:   
![Right Hand Pos](./righthand_pos.png)    
#### Alex 手臂预览模型
Alex 手臂模型与 Steve 类似，但方块参数需要更改:   
左手的 Position 不变，Size 改为 (3, 12, 4)，
右手的 Position 改为 (-7, 0, -2)， Size 改为 (3, 12， 4)。   
#### 手臂朝向
如果你按照教程的上述步骤放置手臂预览模型，在未经过位移和旋转的情况下，模型的上端对应手掌和手指，且掌心相对。也就是大拇指朝向 z 轴负方向(北)。    
![Hand Pose](./hand_pose.png)   
::: tip
手臂预览模型无需删除，因为在实际渲染时，手臂定位组内的任何模型都不会实际渲染，而是会直接替换成玩家手部模型。
:::
### 为教程枪添加手臂定位组
![Hand And Gun](./gun_and_hand.png)   
![In Game](./in_game.png)   