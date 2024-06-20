# Creating the first gun pack
The simplest gun pack only requires a root folder, a namespace folder, and a gun pack description file.   
- The root folder can be any name of your choosing, but try and use a unique name that is not too common to avoid any conflicts with other gun packs
- The gun pack namespace determines the file path and registries for other compoments of the pack. For example if your gun pack namespace is abc, then in the gun the registration of a texture file with the path texture/1.png would be abc:1. The registration name of the ak47 in this gun pack would be registered/defined as abc:ak47, which is different from tac:ak47 of the default gun pack. You can also use guns, accessories, and resource files defined in other gun packs. For example in the default gun pack, you can use the registration name abc:1 to call textures/1.png in the abc gun package.
- The gun package description file is a file named pack.json placed in the namespace directory. This file name cannot be modified or changed.

Below is a demonstration of a example gun pack with the root directory being denoted as 'tutorial_gun_pack' it's namespace being 'tutorial'
The file structure is below  
```
tutorial_gun_pack # Root folder
└─ tutorial # Namespace
   └─ pack.json
```
The following is a detailed definition of the gun pack description file
``` json
{
  // Version
  "version": "1",
  // Name, support definition in language files (modify in language file)
  "name": "pack.tutorial.name",
  // Description, support definition in language files (modify in language file)
  "desc": "pack.tutorial.desc",
  // license
  "license": "CC BY-NC-ND 4.0",
  // author
  "author": [
    "MaydayMemory"
  ],
  // Date: ISO 8601 standard, that is, yyyy-MM-DD
  "date": "2024-04-20"
}
```
As you can notice in the package description file, we use the language file to define the pack name and description. In the next page we will analyze how to [Create and use the language file.](/gunpack/language/)