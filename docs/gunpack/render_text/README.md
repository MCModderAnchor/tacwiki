# Rendering text in Gun Model

1. In the gun display file, add the following code:

```json
  "text_show": {
    // Positioning group name, corresponding to the group name in the model.
    "ammo_count_text_pos": {
      // Text scaling, the default size is 1
      "scale": 0.35,
      // Alignment: right, center, left
      "align": "right",
      // Shadow
      "shadow": false,
      // Text color
      "color": "#53f9af",
      // Brightness: 1-15
      "light": 15,
      // Supports definition in language files and supports PlaceholderAPI style placeholders
      // Currently only supports: %player_name% %ammo_count%
      "text": "%player_name%"
    },
    ...
  }
```

2. Add the corresponding positioning group in the model.