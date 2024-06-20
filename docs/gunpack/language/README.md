# Creating and using language files
Create a folder 'lang' in the gun pack namespace folder and create a new file 'en_us.json'. Your gun pack file structure should look like:
```
tutorial_gun_pack
└─ tutorial
   ├─ pack.json
   └─ lang
      └─ en_us.json
```
::: tip
The default language file used by the gun pack is 'en_us.json'. If the language file used by the client does not exist, 'en_us.json' will be automatically enabled. If a certain entry in the currently used language file does not exist, it will also default to 'en_us.json'.
:::
You can see [here](https://minecraft.wiki/w/Language) all the languages Minecraft currently supprts.
![Language Wiki](./language_wiki.png)   
Next, let's define the name and description of the gun pack in the language file. Add the following to the en_us.json file:
```
{
  "pack.tutorial.name": "Tutorial Gun Pack",
  "pack.tutorial.desc": "Just a gun pack for tutorial."
}
```