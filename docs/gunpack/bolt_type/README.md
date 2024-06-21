# Bolt type

> There are three types of bolt: open bolt, closed bolt, and manual action

Add the following code in the gun data file
``` json
// bolt type: open_bol tclosed_bolt or manual_action
"bolt": "closed_bolt"
```

## Open bolt

Open bolt is used for automatic rifles. The chamber cannot hold an extra ammo in it.

## Closed bolt

Closed bolt is used for automatic rifles. The chamber can hold an extra ammo in it.
## Manual action
Manual action is required after each shot   
Manual action animation name: bolt  
Add additional bolt pull time in data: "bolt_action_time": xx

``` json
"bolt_action_time": 0.9
```