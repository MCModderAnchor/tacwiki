# Crafting Recipes
>This document only explains how to add new gun recipes in the gun crafting table.
>
>View item tags provided by Forge: [FORGE TAGS](https://forge.gemwire.uk/wiki/Tags)
>View item tags provided by Minecraft: [MINECRAFT TAGS](https://minecraft.fandom.com/wiki/Tag#Item_tags)

## Creating Crafting Recipes

1. Creating **Gun Crafting Recipes**

In the namespace of your gun pack, create the folder: /recipes/gun

Create a JSON file with the same name as the gun ID, such as ak47.json. Add the following content:

```json
{
  // Materials
  "materials": [
    {
      "item": {
        // Material type
        "tag": "forge:gems/diamond"
      },
      "count": 10
    },
    {
      "item": {
        // Material type
        "tag": "minecraft:logs"
      },
      "count": 8
    },
    {
      "item": {
        // Specific item
        "item": "minecraft:obsidian"
      },
      "count": 12
    }
  ],
  // Result
  "result": {
    // Type, the type for guns is fixed as gun
    "type": "gun",
    // The ID of the output gun
    "id": "tacz:ak47"
  }
}

```
2. Creating **Attachment Crafting Recipes**

In the namespace of your gun pack, create the folder: /recipes/attachment

Create a JSON file with the same name as the attachment ID, such as sight_sro_dot.json. Add the following content:

```json
{
  // Materials
  "materials": [
      // ...
  ],
  // Result
  "result": {
    // Type, the type for attachments is fixed as attachment
    "type": "attachment",
    // The ID of the output attachment
    "id": "tacz:sight_sro_dot"
  }
}

```

3. Creating **Ammo Crafting Recipes**

In the namespace of your gun pack, create the folder: /recipes/ammo

Create a JSON file with the same name as the ammo ID, such as 9mm.json. Add the following content:

```json
{
  "materials": [
      // ...
  ],
  "result": {
    // Type, the type for ammo is fixed as ammo
    "type": "ammo",
    // The ID of the output ammo
    "id": "tacz:9mm"
  }
}

```

