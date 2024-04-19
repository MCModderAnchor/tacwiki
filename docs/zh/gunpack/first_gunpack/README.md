# 创建第一个枪包
一个最简单的枪包，需要一个根文件夹、一个枪包描述文件、一个命名空间文件夹。   
- 根文件夹的命名可以随意取。尽量不要使用太过大众的命名，避免与其他枪包产生文件名冲突。
- 枪包描述文件为置于根文件夹下的名为 pack.json 的文件，此文件名不可以修改。
- 枪包命名空间决定你的枪包中定义的配件、枪械以及各种资源的完整注册名。例如，你的枪包命名空间为 abc，那么在这个枪包中，textures/1.png 这个贴图文件的注册名即为 abc:1。这个枪包中定义的 ak47，注册名为 abc:ak47，与默认枪包的 tac:ak47 作出区分。你也可以使用其他枪包定义的枪械、配件和资源文件，例如，在 def 枪包中，你可以用 abc:1 这个注册名调用 abc 枪包中的 textures/1.png。   
作为示范，本教程创建一个根目录为 tutorial_gun_pack，命名空间为 tutorial 的枪包。   
文件结构如下:   
```
tutorial_gun_pack
├─ pack.json
└─ tutorial
```
以下是枪包描述文件的详细定义   
``` json
{
  // 版本
  "version": "1",
  // 名称，支持在语言文件中定义
  "name": "pack.tutorial.name",
  // 描述文本，支持在语言文件中定义
  "desc": "pack.tutorial.desc",
  // 许可证
  "license": "CC BY-NC-ND 4.0",
  // 作者
  "author": [
    "MaydayMemory"
  ],
  // 日期：ISO 8601 标准，即 YYYY-MM-DD
  "date": "2024-04-20"
}
```
(你可以跳过这一步)我们可以简单地进行语言文件的定义。在枪包命名空间目录下新建目录 lang/ ，然后新建文件 en_us.json ，在其中定义枪包的名称和描述文本。   
``` json
{
  "pack.tutorial.name": "Tutorial Gun Pack",
  "pack.tutorial.desc": "Just a gun pack for tutorial."
}
```