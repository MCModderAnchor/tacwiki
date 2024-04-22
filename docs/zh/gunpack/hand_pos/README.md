# 手臂定位组
手臂定位组是包含在枪械模型中的两个定位组，分别名为 lefthand_pos(左手定位组) 和 righthand_pos(右手定位组)。   
### 放置预览用手部模型
手部模型的渲染是程序中自动完成的。如果我们想在 BlockBench 中预览手部模型的渲染结果，你需要按照固定的方式在手臂定位组中添加模型。   
首先我们来看如何添加 Steve 的手臂预览模型。   
1. 我们先将 lefthand_pos 定位组的 Pivot Point 置于 (0, 0, 0)，然后向其中添加一个方块，手动输入方块的各个数据。   
Position 设置为 (4, 0, -2)，   
Size 设置为 (4, 12, 4)。   
如图所示:   
![Left Hand Pos](./lefthand_pos.png)   
最后移动、旋转整个组到合适的位置。
::: tip
用一句话来概括，其实就是: 保证用于预览的手臂方块的 Size 值为 (4, 12, 4)，且 Pivot Point 数值 为 lefthand_pos 的 Pivot Point 数值的 (+4, +0, -2)。
:::
2. righthand_pos 的放置方式与 lefthand_pos 类似，不同的是，方块的 Position 值改为 (-8, 0, -2)。   
如图所示:   
![Right Hand Pos](./righthand_pos.png)   

