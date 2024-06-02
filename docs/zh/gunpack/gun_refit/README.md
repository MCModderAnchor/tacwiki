# 枪械改装支持
本篇教程内容作者: Lesraisins-伯爵   
[[toc]]

## 配件类型
###配件类型
**枪口**：muzzle
**镭射**：laser
**瞄具**：scope
**枪托**：stock
**握把**：grip
**扩容弹匣**：mag_extended_1~mag_extended_3

###定位组名
**枪口**：muzzle_pos
**镭射**：laser_pos
**瞄具**：scope_pos
**枪托**：stock_pos
**握把**：grip_pos
**扩容弹匣**：mag_extended_1~mag_extended_3

###特殊部件与默认配件
**默认枪口**：muzzle_default
在不安装任何枪口下渲染的枪口
**默认机瞄**：sight
在不安装任何瞄具下渲染的机瞄配件
**默认枪托**：stock_default
在不安装任何枪托下渲染的枪托
**默认护木与战术护木**: handguard_default/handguard_tactical
在不安装握把配件时渲染: handguard_default
在安装任意握把配件时渲染: handguard_tactical
**镜桥**：mount
在安装任意瞄具后渲染的镜桥

## 设置定位组-模型文件
### 装配界面定位组
>在游戏内按【Z】打开装配界面的定位组

![](https://s1.3hov.com/lesraisins/i/2024/06/02/attachments.png)

在枪械模型根目录下新建view分组，并在内部创建以下分组，并将以下分组移动到合适的位置。
**总览**：refit_view
**枪口**：refit_muzzle_view
**枪托**：refit_stock_view
**瞄具**：refit_scope_view
**弹匣**：refit_extended_mag_view
**握把**：refit_grip_view
**镭射**：refit_laser_view
![](https://s1.3hov.com/lesraisins/i/2024/06/02/view.png)

### 模型定位组
>为使枪械配件能在枪械上正确的渲染，我们需要在枪械的模型文件**gunname_geo.json**文件中添加定位组

1. 在枪械分组下新建分组**refit_pos**，如图所示。并根据该枪械所支持的配件新建对应的配件定位组
2. 移动配件定位组到枪械对应的位置，下图以**瞄具scope_pos**为例

![pos](https://s1.3hov.com/lesraisins/i/2024/06/02/refit_pos.png)

![scope_pos](https://s1.3hov.com/lesraisins/i/2024/06/02/scope_pos.png)

### 扩容弹匣 mag_extended
>扩容弹匣是跟随枪械模型而定的，所以不需要定位组。如需使用扩容弹匣则请按下文操作

1. 在弹匣magazine分组下新建3个扩容弹匣分组，分别为mag_extended_1~mag_extended_3

![mag_exd](https://s1.3hov.com/lesraisins/i/2024/06/02/mag_exd.png)

## 开启配件槽-Data文件
>打开枪械数据文件gunpack/gun/data/gunname_data.json

新增以下代码，并填写该枪械所支持的配件，修改完成后保存。
``` json
  // 开放的配件槽。未指定的槽位默认关闭。全部配件槽类型有:
  // scope, stock, muzzle, grip, laser, extended_mag
  "allow_attachment_types": [
    "scope",
    "stock",
    "muzzle",
    "grip",
    "laser",
    "extended_mag"
  ]
```

### 扩容弹匣
若武器支持扩容弹匣，则需添加以下代码规定不同登记的扩容弹匣所包含的弹药总数
``` json
  // 扩容弹夹弹药总数
  "extended_mag_ammo_amount": [
    45,
    70,
    100
  ],
```

## 决定支持的配件种类-Tags文件
>目前游戏使用了一套tags系统规定武器所支持的配件种类

### 使用通用配件
1. 在枪包根目录下新建文件夹tags/attachments/allow_attachments
2. 在该文件夹下创建文件gunname.json
![gunname](https://s1.3hov.com/lesraisins/i/2024/06/02/gunname.png)
3. 打开文件并在其中填写所支持的配件类型
``` json
[
    "#tacz:scope",
    "#tacz:muzzle",
    "#tacz:extended_mag",
    "#tacz:stock",
    "#tacz:grip",
    "#tacz:laser"
  ]
  ```
 完成填写后则该枪械会支持\config\tacz\custom\tacz_default_gun\tacz\tags\attachments下的所有配件

#### 使用专属配件
1. 在tags/attachments/allow_attachments下打开需要使用专属配件的枪械文件
2. 如下文的nitro_505仅支持使用专属瞄具scope_re
``` json
[
// lradd为枪包名，scope_re为配件名
    "lradd:scope_re"
  ]
```

## 装配配件-游戏内
在游戏中按【Z】(默认按键)打开装配页面，并在背包内持有相应的配件即可安装
![](https://s1.3hov.com/lesraisins/i/2024/06/02/attachments.png)