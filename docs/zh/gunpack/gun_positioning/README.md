# 调整枪械模型定位组
::: tip
你可以在 [这里](/zh/model/#模型定位组) 查看所有模型定位组的效果。
:::
### 为 BlockBench 安装 cameras 插件
模型定位组的调整需要依赖 cameras 插件。   
你可以从 [这里](https://github.com/JannisX11/blockbench-plugins/blob/master/plugins/cameras.js) 下载 cameras 插件。
按照如下步骤将 cameras 安装到你的 BlockBench。   
![Install Plugin 1](./blockbench_load_plugin_1.png)   
![Install Plugin 2](./blockbench_load_plugin_2.png)   
### 调整第一人称摄像机定位组
首先，我们来为枪械的第一人称渲染放置定位组。    
为了模型分组整洁，我们可以创建一个名为 positioning 的分组，用于统一存放各种模型定位组。   
接下来，在 position 中新建两个分组，分别名为 iron_view 和 idle_view。它们分别是 机瞄视角的定位组 和 正常持握视角的定位组。   
::: tip
iron_view 可以被理解为：在玩家用枪械的机械瞄具瞄准时，玩家眼球的位置和朝向。
idle_view 则是玩家在非瞄准状态下眼球的位置和朝向。
:::
为了可以预览摄像机定位组的效果，我们需要为定位组添加摄像机。选中需要添加摄像机的定位组，按照如下方式添加摄像机。   
![Add Camera](./add_camera.png)   
接下来，将定位组拖动到合适的位置。   
::: warning
注意，请确保拖动的时候选定的是定位组本身，而不是定位组里的 camera。在拖动定位组的时候，右上角的参数显示里，Position 数值和 Pivot Point 数值应当同时变化。
:::
![Iron View 1](./iron_view_1.png)   
你可以随时将视角绑定到摄像机进行预览。   
![Iron View 2](./iron_view_2.png)   
我们用相同方法将 idle_view 放置好。   
![Idle View](./idle_view.png)   
最后，导出模型文件，启动游戏，你应该可以看到类似下图的效果。   
![In Game](./in_game.gif)