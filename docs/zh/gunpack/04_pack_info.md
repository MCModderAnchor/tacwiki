---
order: 4
---
# 添加描述信息
**枪包描述信息** 包含了一些关于枪包的基本信息，例如名称、描述、作者、许可证等。  
这些信息将会在枪械工作台中玩家选择枪包所属的配方时显示。  


## 枪包描述文件
**枪包描述文件** 为置于命名空间目录下的固定名为 pack.json 的文件，此文件名 **不可修改**

以下是枪包描述文件的详细定义
```json
{
  // 版本
  "version": "1.0.0",
  // 名称，支持本地化
  "name": "pack.tacz.tacz_default_gun.name",
  // 描述文本，支持本地化
  "desc": "pack.tacz.tacz_default_gun.desc",
  // 许可证
  "license": "CC BY-NC-ND 4.0",
  // 作者
  "authors": [
    "TACZ Dev Team"
  ],
  // 日期：ISO 8601 标准，即 YYYY-MM-DD
  "date": "2024-06-01",
  // URL 链接，可以在枪械合成台看到，点击按钮可以访问网络链接
  "url": "https://tacwiki.mcma.club/zh/"
}
```
可以注意到，在枪包描述文件里，我们使用了**语言文件**来定义枪包名称和描述文本。下一章中，我们将解析如何 [创建并使用语言文件](/zh/gunpack/language/)