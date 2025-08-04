---
order: -2
---
# 从旧版本迁移

## 为什么要迁移？
在1.1.4（版本号暂定）中，枪包的文件格式将进行一次重大更新。  
也许有人会疑惑为什么要不惜使之前的枪包格式失效也要进行这次更新，但是在再三考虑之后，我们认为这是有必要的，理由如下：  

- 旧的枪包格式存在一些早期的设计失误，旧的设计使枪包的资产于原版的资源包相隔离，这使某些新功能的开发难以进行 
- 新的格式使枪包同时作为一个**合法的数据包和资源包**存在，这意味着枪包可以使用原版资源包和数据包的全部功能
   - 枪包现在可以访问原版的部分资产了
   - 你可以使用一些数据包功能，比如进度等，以后会考虑加一点新的进度准则适配
   - optifine下的pbr支持重新回归了
   - 枪包可以直接从mod资产中加载
   - 配方将作为原版的合法配方存在，可以被kjs等mod操纵
   - 你可以往枪包里塞任何原版配方类型，比如工作台甚至其他模组的
   - **否则合成自定义枪械工作台需要先造一个枪械工作台也太蠢了
   - 可以进行其他支持数据包的mod的被动兼容，甚至往里面塞一个史诗战斗的数据包（虽然不一定有用）
- 像vpb？没错，其实最开始是解决某些问题的时候想看看vpb怎么做的，然后发现了forge竟然本来就提供了额外资源加载的api)

这次更新将使枪包更加易于使用，更加强大，更加灵活。  
但是，这也意味着您需要迁移您的现有枪包文件。此文档将指导您如何迁移您的现有枪包文件。  

::: caution
注意！虽然程序不会自动删掉或更改旧版的枪包，但是你也应该在迁移前找个地方 **备份** 他们，以防出现意外
:::

## 新的枪包文件夹
新的枪包文件夹将直接位于游戏版本文件下，即`.minecraft/tacz`，如果你开了版本隔离，请找到版本隔离对应的位置。  
![dir](/gunpack/new_pack_dir.png)
这个文件夹会在使用新的mod后首次启动游戏时自动生成，里面将包含新格式的默认枪包和一个配置文件`tacz-pre.toml`  

注意，原先的debug选项迁移到这了，现在你应该改这个来关掉默认包的覆盖  

配置菜单里面的按钮的引用也已经改到这里了，所以你也可以直接点那个  

此外，你可以在配置菜单里看见一个打开枪包文件夹的按钮，按它可以直接打开这个文件夹
::: note
为什么要改地方？因为forge加载配置文件的时机实在太晚了，所以迫不得已自己写了一个读取，让他在更早的时候手动加载  
:::

## 使用指令进行转换
为了方便迁移，我们提供了一个指令`/tacz convert`，它尽可能的将旧的枪包文件直接转换为新的枪包文件。  
这个指令会检索旧版本的枪包文件夹`config/tacz/custom`下面所有`.zip`形式的枪包，尝试转换并输出到新的目录下。

新的文件将命名为`<旧文件名>_converted.zip`，如果转换时已经有该文件名的文件存在了，那么该枪包会被跳过。  
如果旧目录下存在内容，进入世界时也会向你发送一条提示，点击提示的绿色按钮也能执行该指令。  

转换过程中请勿关闭游戏，不然可能出现一些意外情况。

:::tip
为避免意外情况，你最好重启游戏来加载新的枪包  
:::

文件夹格式的枪包**不支持转换**，理由是：
1. 文件夹格式的枪包往往作为本体和某些附属模组的默认导出包，为了避免重复导出，我们不会自动转换这些包
2. 如果你的包必须解压使用，这 **一定意味着它本身此前就存在某些错误**，转换功能很可能难以修复这些未知错误，所以也不考虑进行转换

如果你还是希望转换这些包，请把他们压缩再使用转换功能，注意**不要套文件夹**，转换功能将仍将尝试转换这些包，但是不保证能成功。  
如果是第二种情况，即使转换顺利完成，新的压缩包很可能还是不能读取，请联系枪包作者或自行排查问题，当然你也可以解压它碰碰运气  

## 新的枪包格式
如果你观察过新的官方枪械包或者转换后的枪包，不难发现，新的枪包文件格式是由资源包和数据包组合而成的  

对于绝大部分文件本身，其内容不需要更改，仅仅是移动了位置，除了 **合成配方** ，这会在后文详细解释

简而言之，原先的客户端资产，比如模型、贴图、动画、枪械display配置、语言文件等，移动到了`assets/<命名空间>/`（也即资源包）的相关目录下；  
而原先的服务端资产，比如枪械data配置、枪械index、配方、配件tag等，则移动到了`data/<命名空间>/`（也即数据包）的相关目录下  

以下是新枪包文件格式的总览，关于更详细的说明，参见 [章节：在开始之前](./01_before_start)
```
└─tacz_default_gun
    ├─assets
    │  └─tacz
    │      ├─animations
    │      ├─display
    │      │  ├─ammo
    │      │  ├─attachments
    │      │  ├─blocks
    │      │  └─guns
    │      ├─geo_models
    │      │  ├─ammo
    │      │  ├─ammo_entity
    │      │  ├─attachment
    │      │  │  └─lod
    │      │  ├─block
    │      │  ├─gun
    │      │  │  └─lod
    │      │  └─shell
    │      ├─lang
    │      ├─player_animator
    │      ├─scripts
    │      ├─tacz_sounds
    │      │  ├─aa12
    │      │  ├─ai_awp
    │      │  ├─attachments
    │      │  └─...
    │      └─textures
    │          ├─ammo
    │          │  ├─slot
    │          │  └─uv
    │          ├─ammo_entity
    │          ├─attachment
    │          │  ├─lod
    │          │  ├─slot
    │          │  └─uv
    │          ├─block
    │          │  └─uv
    │          ├─crosshair
    │          ├─flash
    │          ├─gun
    │          │  ├─hud
    │          │  ├─lod
    │          │  ├─slot
    │          │  └─uv
    │          └─shell
    ├─data
    │   └─tacz
    │       ├─data
    │       │  ├─attachments
    │       │  ├─blocks
    │       │  └─guns
    │       ├─index
    │       │  ├─ammo
    │       │  ├─attachments
    │       │  ├─blocks
    │       │  └─guns
    │       ├─recipes
    │       │  ├─ammo
    │       │  ├─attachments
    │       │  └─gun
    │       └─tacz_tags
    │           └─attachments
    │               └─allow_attachments
    └─gunpack.meta.json
```

## 详细变动说明  
以下详细列出了所有文件结构的变化（旧路径->新路径）：

### 客户端资产
- `<命名空间>/models/`下的所有资源 ->  `assets/<命名空间>/geo_models/`
- `<命名空间>/textures/`下的所有资源 ->  `assets/<命名空间>/textures/`
- `<命名空间>/animations/`下的所有资源 ->  `assets/<命名空间>/animations/`
- `<命名空间>/lang/`下的所有资源 ->  `assets/<命名空间>/lang/`
- `<命名空间>/guns/display/`下的所有资源 ->  `assets/<命名空间>/display/guns/`
- `<命名空间>/attachments/display/`下的所有资源 ->  `assets/<命名空间>/display/attachments/`
- `<命名空间>/ammo/display/`下的所有资源 ->  `assets/<命名空间>/display/ammo/`
- `<命名空间>/sounds/`下的所有资源 ->  `assets/<命名空间>/tacz_sounds/`
- `<命名空间>/pack.json` -> `assets/<命名空间>/gunpack_info.json`

特别注意，为了避免和其他模组冲突，**模型、音效** 的根文件夹发生了重命名，请特别留意其文件夹名称是否正确  

`pack.json`的文件名也发生了变化，且其中的依赖检查移动到了枪包根目录下的`gunpack.meta.json`

### 服务端资产
- `<命名空间>/guns/data/`下的所有资源 ->  `data/<命名空间>/data/guns/`
- `<命名空间>/attachments/data/`下的所有资源 ->  `data/<命名空间>/data/attachments/`
- `<命名空间>/ammo/data/`下的所有资源 ->  `data/<命名空间>/data/ammo/`
- `<命名空间>/guns/index/`下的所有资源 ->  `data/<命名空间>/index/guns/`
- `<命名空间>/attachments/index/`下的所有资源 ->  `data/<命名空间>/index/attachments/`
- `<命名空间>/ammo/index/`下的所有资源 ->  `data/<命名空间>/index/ammo/`
- `<命名空间>/recipes/`下的所有资源 -> `data/<命名空间>/recipes/`
- `<命名空间>/tags/attachments/`下的所有资源 ->  `data/<命名空间>/tacz_tags/attachments/`

同样特别注意，为了避免原版标签冲突，**配件标签** 的根文件夹发生了重命名，请特别留意其文件夹名称是否正确  

此外，配方文件的内容相比之前也发生了一定变动，请参见下一节

### 配方更新
由于在新版本中，配方将完全回归交由原版的配方管理器进行管理，我们需要在原先配方的基础上额外增加一行配方类型的id  

以`data/tacz/recipes/ammo/9mm.json`为例：
```json
{
  "type": "tacz:gun_smith_table_crafting",
  "materials": [
    {
      "item": {
        "tag": "forge:ingots/copper"
      },
      "count": 10
    },
    {
      "item": {
        "tag": "forge:gunpowder"
      },
      "count": 2
    }
  ],
  "result": {
    "type": "ammo",
    "id": "tacz:9mm",
    "count": 50
  }
}
```

可以看到第一行中额外多了一个`"type": "tacz:gun_smith_table_crafting"`  

同时，你也可以往枪包里塞任何原版或是其他模组提供的配方json了，只需要把`type`改成其他类型，然后根据其对应的格式进行填写  

特别需要注意的是，上述配方的完整配方id是`tacz:ammo/9mm`，也即配方路径和id之间的对应关系是  
`data/<命名空间>/recipes/<路径>.json` -> `<命名空间>:<路径>`
