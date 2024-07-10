# 配件锁
**配件锁** 是一个面向整合包作者/服务器管理员的功能，用于限制玩家通过配件改装界面修改枪械的配件。
一旦一个枪械物品被锁定，玩家将无法通过热键打开手中枪械的改装界面。  

## 通过附加NBT标签为枪械启用配件锁
配件锁以NBT标签的形式保存在枪械上，所以你可以直接通过为物品附加NBT标签`AttachmentLock`(布尔型)来为枪械启用它。  
以下是一个示例的`give`指令，用于获取一把配件被锁定的AK47：
```
/give @s tacz:modern_kinetic_gun{GunId:"tacz:ak47",GunFireMode:"SEMI",AttachmentLock:1b}
```
:::tip
你可以使用原版命令`/data get entity @s Inventory`来查看自己背包物品的详细NBT
:::

## 使用指令启用/关闭物品的配件锁
TACZ内置了一个指令，可用于快速为一把枪械启用/关闭配件锁，语法如下：
```
/tacz attachment_lock <players> <true/false>
```
其中，`<players>`为目标玩家选择器。  
这个指令将会为目标玩家手持的枪械启用/关闭配件锁。  