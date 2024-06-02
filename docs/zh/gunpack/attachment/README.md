# 添加配件
我们将以「手枪消音器」为示范，展示如何创建一个配件，并将其加入你的枪包。    

### 配件-瞄具类  
1. 创建一个瞄具模型。请注意，瞄具的比例需要和枪械一致。瞄具同枪械模型一样，朝向北，位于Z轴线上。
::: tip
在游戏中渲染配件的时候，是将工程文件的网格中心，即坐标位置的（0,0,0）渲染至配件定位组在枪械模型工程文件中的位置；不同的配件模型有不同的位置需求（注意朝向为向北）
:::
2. 在瞄具模型中，主要的分组拆分为：  
**scope body**，是瞄具主要的外观部件；  
**ocular ring**，用于放大倍率瞄具，在开镜时渲染的瞄具边框；  
**ocular**，用于放大倍率瞄具，为模型镜内视野的镜片；  
**division**，意为分划/准星，是镜内视野的图像平面；  
**scope_view**，开镜时的摄像机位置。
![Attachment Model](./scope_groups.png)  
![Attachment Model](./scope_model.png)  
![Attachment Model](./ocular.png)  
![attachment model](./division.png)  
3. 面剔除与枢轴点居中：
**ocular**组内的所有块都需剔除除南面以外的所有面
![remove_face](https://s1.3hov.com/lesraisins/i/2024/06/02/scope_remove_face.png)
**所有组**的枢轴点都需设置为居中
![pivot_point](https://s1.3hov.com/lesraisins/i/2024/06/02/scope_pivot_point.png)
::: tip
你可以向scope_view 分组中添加摄像机，设定预览fov为70，预览游戏内开镜的视野；  
![attachment model](./scope_view.png)  
通常来说，division的面积，scope view定位组以及模型的相对距离不是固定的，更多是依据实际游戏体验自行调整。  
用于division贴图的方块需要仅保留南面，可以使用UV工具栏中的[删除面]来剔除不需要的面；  
![attachment model](./remove_face.png)  
如果你的division贴图中需要有发光的瞄点效果，可以单独为瞄点贴图方块创建一个以 **_illuminated** 结尾的子组。  
ocular_ring的长度和厚度都建议更薄一些，以在离摄像机近距离的位置减少广角畸变效果。
:::



### 配件-其他类
1. 和枪械模型的需求一样，我们需要以基岩版为要求，创建一个配件模型。注意模型在工程文件中的空间位置。  

![Attachment Model](./attachment_model.png)   
之后的导出步骤和 [创建第一把枪](/zh/gunpack/first_gun/) 的步骤相同，可以前去查看参考。

### 准备工作
确定你已经准备好了如下材料（我这里使用「silencer」作为这个配件的注册名，实际需要更细节的命名方式防止重复）：
- 模型文件: silencer_geo.json
- 模型贴图: silencer.png
- 背包 2D 贴图: silencer.png    
1. 按照 [创建第一个枪包](/zh/gunpack/first_gunpack/) 的步骤创建枪包目录。
2. 配件模型应放入枪包的 models/ 目录下。我们可以创建一个子目录 models/attachment/ 对配件模型进行分类。并将模型文件放在此目录下。
3. 贴图文件应放入枪包的 textures/ 目录下。同理，我们创建一个子目录 textures/attachment/ 对配件贴图进行归类。在此目录下分别创建 uv 和 slot 文件夹，用于分别储存模型贴图和背包 2D 贴图。我们将模型贴图置于 textures/attachment/uv/ 目录下，背包 2D 贴图置于 textures/attachment/slot/ 目录下。   

如果你按照如上步骤操作，最后你将会得到如下的目录视图:
```
tutorial_gun_pack
└─ tutorial
   ├─ pack.json
   ├─ textures
   │  └─ attachment
   │     ├─ uv
   │     │  └─ silencer.png
   │     └─ slot
   │        └─ silencer.png
   ├─ models
   │  └─ attachment
   │     └─ silencer_geo.json
   └─ lang
      └─ en_us.json
```
### 创建配件数据文件
配件定义文件应置于 attachments/data/ 目录下。此文件用于定义配件的各项属性。接下来我们为「手枪消音器」创建一个最基本的数据文件。   
创建文件 attachments/data/silencer_data.json 
``` json
{
  // 配件重量，单位 kg。影响持枪者的移速
  "weight": 0.2,
  // 对瞄准时间的影响，加数，单位为秒，可为负数
  "ads_addend": 0.02,
  // 对精准度的影响，加数，可为负数。负数代表精准度增加，正数表示精准度降低。
  "inaccuracy_addend": -0.1,
  "silence": {
    // 声音传播的范围，如果默认是 50 格，这里填入 -10，那么消音后传播距离为 40 格
    "distance_addend": -10,
    // 是否使用专门的消音后的音源
    "use_silence_sound": true
  }
  // 对枪械后坐力的影响。
  "recoil_modifier": {
    // 竖直方向偏转削减的大小，范围-1~0
    "pitch": -0.05,
    // 水平方向偏转削减程度的大小，范围-1~0
    "yaw": -0.03
  }
}
```
### 创建配件效果文件
配件效果文件应置于 attachments/display/ 目录下。此文件用于定义配件的展示效果，如模型、贴图、动画等。接下来我们为「手枪消音器」创建一个最基本的效果文件。   
创建文件 attachments/display/silencer_display.json
``` json
{
  // 使用我们放入的背包 2D 贴图：textures/attachment/slot/silencer.png。注意，不需要包含文件后缀，也不要包含开头的 "textures/"
  "slot": "tutorial:attachment/slot/silencer",
  // 使用我们放入的模型文件：models/gun/silencer_geo.json。注意，不需要包含文件后缀，也不要包含开头的 "models/"
  "model": "tutorial:attachment/silencer_geo",
  // 使用我们放入的模型贴图：textures/attachment/uv/silencer.png。注意，不需要包含文件后缀，也不要包含开头的 "textures/"
  "texture": "tutorial:attachment/uv/silencer"
  // 以下是只有「瞄具」类配件需要设置的属性。
  // 玩家可以在数组设置的几个倍率之间切换（初始为 4.0 倍放大）
  "zoom": [
    4.0,
    8.0
  ],
  // 如果配件是瞄具，且为筒状放大瞄具，此选项应为 true
  "scope": false,
  // 如果配件是瞄具，且为红点或全息瞄具，此选项应为 true
  "sight": true,
  // 开镜后，枪身和瞄具渲染的 fov，默认情况下，mc 渲染手部模型的 fov 为 70
  "fov": 70.0
}
```
### 创建配件定义文件
配件定义文件应置于 attachments/index/ 目录下。此文件用于定义配件物品，并索引到数据文件和效果文件。需要注意的是，此文件的名称即为你的配件物品的 id，是配件物品的唯一标识符。接下来我们为「手枪消音器」创建一个最基本的定义文件。   
创建文件 attachments/index/silencer.json
``` json
{
  // 配件的显示名称，支持使用语言文件定义
  "name": "tutorial.attachment.silencer.name",
  // 配件效果文件，对应 attachments/display/silencer_display.json，其中前缀"attachments/display/"和后缀".json"不需要包含
  "display": "tutorial:silencer_display",
  // 配件参数文件，对应 attachments/data/silencer_data.json，其中前缀"attachments/data/"和后缀".json"不需要包含
  "data": "tutorial:silencer_data",
  // 创造栏标签页类别，因为创建的是枪口配件，所以类型选择 muzzle
  "type": "muzzle"
}
```
在语言文件中定义枪械的显示名称。向 lang/en_us.json 中添加:
``` json
    "tutorial.attachment.silencer.name": "Pistol Silencer"
```

### 创建配件支持文件
为了使新建的配件可以安装到对应的枪械上，请根据以下文档设置对应的tags文件
#### 专属配件
如果你想让你新建的配件只能在某把枪上使用
1. 在tutorial_gun_pack/tutorial/路径下创建文件夹tags/attachments/allow_attachments
2. 以ak47为例，如你想让ak47仅支持瞄具"scope_re",则在allow_attachments文件夹下创建json文件ak47.json，并在内部填写以下代码
``` json
[
  //tutorial为自定义瞄具所在的枪包，scope_re为瞄具名
  "tutorial:scope_re"
]
```
#### 通用配件
如果你想让所有支持瞄具的枪都能使用你所制作的scope_re瞄具，则参考以下文档
1. 在tutorial_gun_pack路径下创建tacz\custom\tacz_default_gun\tacz\tags\attachments
2. 在文件夹attachments下创建文件scope.json，并填写以下代码
``` json
[
  "tutorial:scope_re"
]
```



### 检验你的成果
经过上述步骤，此时你的枪包目录结构应该是这样:
```
tutorial_gun_pack
└─ tutorial
   ├─ pack.json
   ├─ textures
   │  └─ attachment
   │     ├─ uv
   │     │  └─ silencer.png
   │     └─ slot
   │        └─ silencer.png
   ├─ models
   │  └─ attachment
   │     └─ silencer_geo.json
   ├─ lang
   │  └─ en_us.json
   └─ attachments
      ├─ index
      │  └─ silencer.json
      ├─ display
      │  └─ silencer_display.json
      └─ data
         └─ silencer_data.json
```
将创建好的枪包文件夹拷贝到 Minecraft 客户端的版本根目录下的 config/tac/custom/ 文件夹中，然后启动游戏。
::: tip
需要注意的是，配件物品需要和枪械的定位组一起使用，关于定位组的创建和使用，请参考 [枪械模型定位组](/zh/gunpack/gun_positioning/) 中的教程内容。
:::
