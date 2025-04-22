# 动画状态机
## 前言
::: caution  
本教程仅针对有过tacz枪械动画开发经验且具备 lua 语言基础的开发着，因此教程不会提及任何基本动画逻辑和 lua 语法问题，
在阅读教程时请一并打开位于 `tacz_default_gun\assets\tacz\scripts` 目录下的 `default_state_machine.lua` 默认状态机配合教程一起查阅  
:::

## 1 状态机基本结构
>本章仅对状态机的每个模块做最简单的介绍，已知晓其每个部分的用途，不包含对模块的具体分析。**如需查阅模块的具体分析，请移步后两个章节**。

### 1.1 基本要素
对于一份状态机脚本，其基本要素有：**轨道**、**轨道行**、**状态**、**状态机初始化**  
`轨道`：动画的载体，动画是在轨道上播放的。  
`轨道行`：一些轨道的集合，更像是一种对轨道的方便管理工具。  
`状态`：一把枪可以同时存在很多状态。  
`状态机初始化`：决定了状态机在加载时的初始值，如果不做初始化状态机将会没有任何效果。  

### 1.2 轨道与轨道行
轨道行是轨道的集合，一个轨道行可以包含多个轨道，例：
```lua
   -- 主轨道行 和 其中的五条轨道
   local STATIC_TRACK_LINE = increment(track_line_top)
   local BASE_TRACK = increment(static_track_top)
   local BOLT_CAUGHT_TRACK = increment(static_track_top)
   local SAFETY_TRACK = increment(static_track_top) -- 待实现
   local ADS_TRACK = increment(static_track_top)
   local MAIN_TRACK = increment(static_track_top)
   local SPRINT_TRACK = increment(static_track_top)
```
这里定义了“主轨道行”和属于“主轨道行”的七条动画轨道，轨道和轨道行都可以自行添加。至于如何操控轨道，在后文的 3 默认轨道...章节会进行讲解。
```lua
   -- 轨道行 栈顶指针
   local track_line_top = {value = 0}
   -- 主轨道行 的 轨道 栈顶指针
   local static_track_top = {value = 0}   
```
其中 increment 后的参数为自己定义的栈顶指针，如需添加的新的轨道行，应当直接调用已有的 **track_line_top**。如果增加新轨道，
则需要参照上图中的 **static_track_top** 进行添加，设置一个相应的栈顶指针，并在状态机最后面的注册位置与初始化函数位置进行相关设定。
（在 1.4 状态机初始化与 1.5 注册轨道、轨道行、状态和输入中会进行详解）  
例：
```lua
   local M = {
      -- 轨道行
      track_line_top = track_line_top,
      STATIC_TRACK_LINE = STATIC_TRACK_LINE,
      GUN_KICK_TRACK_LINE = GUN_KICK_TRACK_LINE,
      BLENDING_TRACK_LINE = BLENDING_TRACK_LINE,
      -- 静态轨道
      static_track_top = static_track_top,
      BASE_TRACK = BASE_TRACK
  }    
```
```lua
   -- 状态机初始化函数，在切枪的时候调用
   function M:initialize(context)
      context:ensureTrackLineSize(track_line_top.value)
      context:ensureTracksAmount(STATIC_TRACK_LINE, static_track_top.value)
      context:ensureTracksAmount(BLENDING_TRACK_LINE, blending_track_top.value)
      self.movement_track_states.run.mode = -1
      self.movement_track_states.walk.mode = -1
   end  
```

### 1.3 状态  
状态用于检测一把枪处于什么情况，比如玩家拿着枪向前行走的同时检视，那么这把枪就同时具有“基态”、“移动/行走态”、“检视态”这三种状态。
最普通的状态写法如下：
```lua
   local base_track_state = {}
```   
  
需要注意的是**状态可以再细分参数，增加“子状态”和“状态参数”**，就好比“行走”、“奔跑”、“静止”都是属于“动作态”。如下图所示，
移动态里细分了三个子状态来决定这把枪处于具体的“行走”、“奔跑”、“静止”中的哪一种。
```lua
   -- 移动轨道的状态,这部分到 450 行结束
   local movement_track_states = {
      -- 静止不动(或者在天上)
      idle = {},
      -- 奔跑, -1 是没有奔跑, 0 是在奔跑中
      run = {
         mode = -1,
         time = 0
      },
      -- 行走, -1 是没有行走, 0 是在空中, 1 是正在瞄准, 2 是在向前走, 3 是向后退, 4 是向侧面走
      walk = {
         mode = -1
      },
      -- 战术冲刺
      sprint = {
         mode = -1
      }    
   }  
```
  
### 1.4 状态机初始化  
初始化作用是给动画铺好轨道和定义某些初始子状态的调用选择。
```lua
   -- 状态机初始化函数，在切枪的时候调用
   function M:initialize(context)
      context:ensureTrackLineSize(track_line_top.value)
      context:ensureTracksAmount(STATIC_TRACK_LINE, static_track_top.value)
      context:ensureTracksAmount(BLENDING_TRACK_LINE, blending_track_top.value)
      self.movement_track_states.run.mode = -1
      self.movement_track_states.walk.mode = -1
   end 
``` 
上图中确保了总轨道行的栈顶指针，以及“主轨道行”和“混合轨道行”的轨道栈顶指针有效（给动画铺路），并且给行走和奔跑的初始状态参数赋初始值。  
:::warning  
这里的**状态参数**初始化和下方的状态初始化具有一定的区别，状态参数初始化仅针对状态或子状态中储存的参数数值，如果需要设置枪械的各个初始状态，
则需要按照下方的写法进行初始化状态的调用。  
:::
```lua
   function M:states()
      return {
         self.base_track_state,
         self.bolt_caught_states.normal,
         self.over_heat_states.normal,
         self.spin_states.normal,
         self.main_track_states.start,
         self.gun_kick_state,
         self.movement_track_states.idle,
         self.ADS_states.normal,
         self.slide_states.normal
      }
   end  
```  
上图的例子中分别对  
默认持枪状态的基础状态 `base_track_state`  
部分具有空挂武器的空挂状态 `bolt_caught_states`  
部分具有过热机制武器的过热状态 `over_heat_states`  
转管式机枪转轮动效的 `spin_states`  
所有武器主轨道状态 `main_track_states`  
所有武器射击状态 `gun_kick_state`  
所有武器运动状态 `movement_track_states`  
所有武器瞄准状态 `ADS_states`  
以及所有武器下蹲状态 `slide_states`  
这些状态进行初始化的设置。  
一部分状态因为没有子状态，所以在初始化时直接对其进行调用即可，而对于那些有子状态的状态，在初始化调用时需要申明调用的子状态是哪一个，
比如运动状态初始化里调用的静止子状态 idle。  
::: tip  
初始化的含义是使得枪械在没有得到任何输入的、最为原始的状态下，使用的是哪一些状态或状态的子状态。  
:::
  
::: warning  
在进行初始化操作之前，需要先参照 1.5 注册轨道、轨道行、状态和输入的内容，
对相应的轨道、轨道行或状态进行注册操作（也就是让 M 知道它都有哪些东西，这样才能在初始化的时候进行相应的调用）。  
:::  
  
### 1.5 注册轨道、轨道行、状态和输入  
```lua
   local M = {
      -- 轨道行
      track_line_top = track_line_top,
      STATIC_TRACK_LINE = STATIC_TRACK_LINE,
      GUN_KICK_TRACK_LINE = GUN_KICK_TRACK_LINE,
      BLENDING_TRACK_LINE = BLENDING_TRACK_LINE,
      -- 静态轨道
      static_track_top = static_track_top,
      BASE_TRACK = BASE_TRACK,
      BOLT_CAUGHT_TRACK = BOLT_CAUGHT_TRACK,
      SAFETY_TRACK = SAFETY_TRACK,
      ADS_TRACK = ADS_TRACK,
      MAIN_TRACK = MAIN_TRACK,
      SPRINT_TRACK = SPRINT_TRACK,
      -- 混合轨道
      blending_track_top = blending_track_top,
      MOVEMENT_TRACK = MOVEMENT_TRACK,
      SLIDE_TRACK = SLIDE_TRACK,
      OVER_HEAT_TRACK = OVER_HEAT_TRACK,
      OVER_HEATING_TRACK = OVER_HEATING_TRACK,
      LOOP_TRACK = LOOP_TRACK,
      -- 状态
      base_track_state = base_track_state,
      bolt_caught_states = bolt_caught_states,
      over_heat_states = over_heat_states,
      main_track_states = main_track_states,
      gun_kick_state = gun_kick_state,
      movement_track_states = movement_track_states,
      ADS_states = ADS_states,
      slide_states = slide_states,
      -- 输入
      INPUT_BOLT_CAUGHT = "bolt_caught",
      INPUT_BOLT_NORMAL = "bolt_normal",
      INPUT_OVER_HEAT = "over_heat",
      INPUT_COOLING_HEAT = "cooling_heat",
      INPUT_INSPECT_RETREAT = "inspect_retreat",
      INPUT_AIM = "aim",
      INPUT_AIM_RETREAT = "aim_retreat"
   }  
``` 
  
注册操作是所有初始化操作的前置需求，需要注意的是，除了对于输入的注册以外，任何的注册行为都应在前面的代码中有对应的命名内容。  
::: warning  
如果你处于某种开发环境中，当注册内容写完后，发现某处等于号后方的字体、颜色等与其他注册不同，那就需要注意你是否在前面写过这个注册项目的声明，
或者是检查是否有拼错的情况。  

  
以 IDEA 开发环境举例：  

![IDEA开发环境下](/gunpack/gun/animation/gun_state_machine_script/1.5/2.png)
  
图中的 `GUN_KICK_TRACK_LINE` 未在前面的代码内进行任何声明，可以看到不同。  
:::  

### 1.6 状态方法  
每个状态都有以下四个方法，这些方法是**可选实现**的：  
进入状态`entry`；  
更新状态`update`；  
转换状态`transition`；  
退出状态`exit`。  

这四个方法会在不同的时候调用，比如：  
一把枪打空子弹进入空仓挂机状态后，玩家按下 R 键换弹；在这个过程中，枪在打空子弹的一瞬间会调用空挂状态的 **entry**，
然后每一帧都调用空挂状态的 **update**；当玩家按下 R 换弹后调用一次空挂状态的 **transition** 切换到正常状态。  
  
### 1.7 状态方法一般职能  
方法 **entry** 会在进入**状态的一瞬间执行一次**，一般会在里面播放动画，如果 **entry** 中没有要进行的内容，一般会主动调用 **update** 方法以降低一帧的切换延迟。
```lua
   -- 进入"不空挂"状态
   function bolt_caught_states.normal.entry(this, context)
      -- 因为进入不空挂状态没什么需要做的,因此什么都不做直接转进该状态
      this.bolt_caught_states.normal.update(this, context)
   end  
``` 
  
方法 **update** 被启用后会在电脑的**每一帧都执行一次**（这可比 mc 的 tick 快多了，除非你的电脑不到 20 帧）。
里面一般是用来做状态检测的，因为每一帧都在执行，因此状态检测的响应速度非常快，
当检测到枪的情况已经不属于这个状态时要在这里操控给整个状态机**提供一个输入信号来启用 transition 方法**。  
```lua
   -- 更新"空挂"状态
   function bolt_caught_states.bolt_caught.update(this, context)
      -- 如果检测到子弹数不为 0 了(此时是换弹了),那么手动触发一次转到"不空挂"状态的输入
      if (not isNoAmmo(context)) then
        context:trigger(this.INPUT_BOLT_NORMAL)
      end
   end  
``` 
  
方法 **transition** 的职能是**检测状态机收到的信号来切换状态**，这过程中还经常需要停止动画，一般一个状态的 **transition** 都是从本状态切换到其他状态。  
```lua
   -- 转出"不空挂"状态
   function bolt_caught_states.normal.transition(this, context, input)
      -- 如果收到了"空挂"的输入,那么直接转到"空挂"状态,"'空挂'的输入"是在上文 update 方法中出现的
      if (input == this.INPUT_BOLT_CAUGHT) then
         return this.bolt_caught_states.bolt_caught
      end
   end  
```
  
方法 **exit** 在**退出状态时执行一次**，这里是停止动画和做一些清理工作，很少用。  
  
### 1.8 输入（input）  
输入（input）就是给状态机一个从外部输入的信号。  
一些预设的全局信号会在玩家做出特定动作的时候发出，比如换弹时按下 R 的一瞬间会给状态机输入一个 **INPUT_RELOAD** 的信号。
由于既定的全局信号并不能覆盖所有会遇到的情况，因此输入信号是可以自定义的。  
这些输入的信号一般都是由状态的 transition 方法来检测，用于判断切换到另一状态的时机，比如：  
```lua
   -- 转出"不空挂"状态
   function bolt_caught_states.normal.transition(this, context, input)
      -- 如果收到了"空挂"的输入,那么直接转到"空挂"状态,"'空挂'的输入"是在上文 update 方法中出现的
      if (input == this.INPUT_BOLT_CAUGHT) then
         return this.bolt_caught_states.bolt_caught
      end
   end 
```
  
上图中的空挂状态，处于默认的 **normal** 子状态，并对空挂的输入信号 **INPUT_BOLT_CAUGHT** 进行检测，如果得到对应的输入，则转换到空挂 **bolt_caught** 子状态。
其中的 **INPUT_BOLT_CAUGHT** 信号就是自定义信号。  
自定义新的信号输入方式（1.5 注册相关的内容部分）：  

![自定义新的信号输入方式](/gunpack/gun/animation/gun_state_machine_script/1.8/1.png)  

:::warning  
自定义后面的命名内容是随意的，但为了避免重复命名和一些奇怪的玄学问题出现，我们建议使用类似的格式进行命名。  
:::  
  
## 2 默认状态解析  
>默认状态解析是分析每个状态的功能和状态方法的用处，因此展示的代码块不需要去理解实现方法的每一句代码，了解大概的意思就可以了。  
  
### 2.1 基态  
基态是整个状态机最基本的状态，其写法非常简单：
```lua
   -- 基础轨道上的状态,这个状态用于循环播放 static_idle 动画。
   local base_track_state = {}

   -- 进入基础状态,直接播放 static_idle
   function base_track_state.entry(this, context)
      -- 在 主轨道行 的 基础轨道 上循环播放 static_idle
      context:runAnimation("static_idle", context:getTrack(STATIC_TRACK_LINE, BASE_TRACK), false, LOOP, 0)
   end
```  

![基态初始化](/gunpack/gun/animation/gun_state_machine_script/2.1/2.png)  
  

**基态的唯一功能就是播放基态动画**，这个状态是所有动画的底片，由于该状态无需任何变化也不需要切换，因此只需要在 **entry** 方法里循环播放基态动画就可以了。  
  
### 2.2 枪机状态  
对于某些有空仓挂机功能的枪，枪机状态就是调控空仓挂机用的，其定义的写法要稍微复杂一些： 
```lua
   local bolt_caught_states = {
    -- normal 是不空挂的正常状态
    normal = {},
    -- bolt_caught 是空挂时的状态
    bolt_caught = {}
}
```

![枪机状态初始化](/gunpack/gun/animation/gun_state_machine_script/2.2/2.png)  
  

可以看到在状态定义里有两个子状态，因为枪机状态分为“空挂”和“不空挂”这两种情况，因此在定义时分出 `normal` 和 `bolt_caught` 两个子状态，
在初始化状态里也要注意将状态的初始子状态设置为不空挂（normal）。  
而枪机状态的状态方法就比基态要复杂一些了，这里先来看子状态设置为“不空挂”（normal）时的状态方法：  
首先是进入（entry）“不空挂”状态需要进行的操作，因为没有任何需要进行的变化，因此只需要触发 **update** 方法等待进一步的操作即可。  
```lua
   -- 进入"不空挂"状态
   function bolt_caught_states.normal.entry(this, context)
      -- 因为进入不空挂状态没什么需要做的,因此什么都不做直接转进该状态
      this.bolt_caught_states.normal.update(this, context)
   end
```
然后是更新“不空挂”状态和转出“不空挂”状态。因为空仓挂机是当枪内没有子弹时触发的，因此必须每时每刻都检测枪的弹药状态，
因此在 **update** 里要做是否弹药空了的检测，如果弹药空了就输入一个空挂的信号，这个信号将会启用状态转换。
```lua
   -- 更新"不空挂"状态
   function bolt_caught_states.normal.update(this, context)
      -- 如果弹药数量是 0 了,那么立刻手动触发一次转到"空挂"状态的输入
      if (isNoAmmo(context)) then
         context:trigger(this.INPUT_BOLT_CAUGHT)
      end
   end
```
状态转换（transition）在读到 **update** 里输入的空挂信号时要转到“空挂”（bolt_caught）的子状态。
```lua
   -- 转出"不空挂"状态
   function bolt_caught_states.normal.transition(this, context, input)
      -- 如果收到了"空挂"的输入,那么直接转到"空挂"状态,"'空挂'的输入"是在上文 update 方法中出现的
      if (input == this.INPUT_BOLT_CAUGHT) then
         return this.bolt_caught_states.bolt_caught
      end
   end
```
接下来是“空挂”（bolt_caught）子状态的状态方法：  
```lua
   -- 进入"空挂"状态
   function bolt_caught_states.bolt_caught.entry(this, context)
      -- 进入空挂时在主轨道行的空挂轨道播放空挂的动画
      context:runAnimation("static_bolt_caught", context:getTrack(STATIC_TRACK_LINE, BOLT_CAUGHT_TRACK), false, LOOP, 0)
   end

   -- 更新"空挂"状态
   function bolt_caught_states.bolt_caught.update(this, context)
      -- 如果检测到子弹数不为 0 了(此时是换弹了),那么手动触发一次转到"不空挂"状态的输入
      if (not isNoAmmo(context)) then
         context:trigger(this.INPUT_BOLT_NORMAL)
      end
   end

   -- 转出"空挂"状态
   function bolt_caught_states.bolt_caught.transition(this, context, input)
      -- 如果收到了来自上文 update 方法的输入,则转到"不空挂"状态
      if (input == this.INPUT_BOLT_NORMAL) then
         -- 由于并没有一个"不空挂"的动画,因此必须在这里把空挂动画停止了才能转到"不空挂"状态,否则你会在换完弹之后发现依旧处于空挂状态
         context:stopAnimation(context:getTrack(STATIC_TRACK_LINE, BOLT_CAUGHT_TRACK))
         return this.bolt_caught_states.normal
      end
   end
```
做过动画的肯定知道，有空仓挂机的枪会比没有的多出一个叫 `static_bolt_caught` 的动画，在这个动画里枪处于空仓挂机的状态，
因此在空仓挂机时需要播放该动画。  
首先从逻辑上分析一下这个过程，由上文知道了枪子弹打光之后会进入空挂子状态，即触发 `bolt_caught.entry`，因此肯定是在 **entry** 里播放空挂的动画。
我们暂时先不去管播放动画的那几个参数是什么，这个之后动画轨道的章节会讲。  
这里因为在 **entry** 里循环播放了动画，所以 **entry** 到 **update** 之间的一帧延迟会被动画盖过，不需要在 **entry** 中主动调用 **update** 方法。  
程序进入实时更新的 **update** 后，因为空挂这件事就是检测枪里有没有子弹，因此在检测到枪里有子弹之后要立刻退出空挂，也就是给状态机输入一个信号解除空挂。  
在转换方法（transition）里检测到状态机收到了退出空挂的信号之后，要转回不空挂的子状态。但是注意！**此时枪机的动画轨道上空挂的动画正在播放，
因此必须先停下这条轨道上的动画再转换状态，否则你的枪机就回不去了**。  

这就是枪机状态的写法，由于枪机状态是贯穿一把枪从始至终的，因此这个状态不需要退出，也就是说并不需要 **exit** 方法。
这个状态的核心就是根据枪里是否还有子弹来决定子状态是“空挂”还是“不空挂”，从而使枪机的子状态在这两者之间反复切换，并在这过程中选择播放相应的动画（选择是否播放动画）。  
  
### 2.3 主状态  
主状态和基态不一样，基态是只管你的枪拿在手上是什么姿势，而主状态则是需要调控大部分的动画，因此主状态的定义要复杂很多：  
```lua
   local main_track_states = {
    -- 起始
    start = {},
    -- 闲置,当玩家把枪拿在手里站定并什么也不做的时候就是这种情况
    idle = {},
    -- 检视
    inspect = {},
    -- 结束
    final = {
        isfinal = -1
    },
    -- 刺刀攻击的计数器
    bayonet_counter = 0
}
```  
在主状态里我们可以看到四个子状态和一个状态参数，其中前四个都是主状态下的细分状态，
而第五个只是个纯粹的状态参数，用于作为刺刀计数器，这个会在 2.5 动作状态中提及。  
比较特别的是主状态在注册进状态机时的写法：  
  
![主状态初始化](/gunpack/gun/animation/gun_state_machine_script/2.3/2.png)  
  
这里我们可以看到主状态的默认子状态是 `start`。当你拿起这把枪的一瞬间整个状态机就会完成初始化，而此时需要播放一个 draw 动画，
这个 `start` 子状态就是负责播放 draw 用的。  
由于拿到任何枪的第一件事都是播放 draw 动画，因此主状态的初始化子状态一般都会设置成 `start`。  
```lua
   -- 转出 start (其实就是掏枪)
   function main_track_states.start.transition(this, context, input)
      -- 玩家手里拿到枪的那一瞬间会自动输入一个 draw 的信号,不用手动触发
      if (input == INPUT_DRAW) then
         -- 收到 draw 信号后在主轨道行的主轨道上播放掏枪动画,然后转到闲置态
         this.main_track_states.final.isfinal = -1
         context:runAnimation("draw", context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK), false, PLAY_ONCE_STOP, 0)
         return this.main_track_states.idle
      end
   end
```    

玩家在拿到枪的一瞬间就会由系统自动向状态机输入一个`INPUT_DRAW`的信号，因此主状态起手式 start 不需要 **entry** 和 **update**，直接在 **transition** 里检测输入的信号。  
如果输入信号是 `INPUT_DRAW` 就在对应轨道上播放掏枪动画，由于是 `PLAY_ONCE_STOP` 的播放设置，因此无需考虑结束之后的轨道占用，在播放之后直接转入 idle 即可。  
  
:::tip  
也就是说 start 所负责的范围有且仅有拿到枪时播放掏枪动画，相当于单次使用枪支的一次性子状态。  
:::  
  
接下来看看闲置态：  
由于闲置态内容过多，建议打开默认状态机，找到 `function main_track_states.idle.transition` 这一行往下看，在这里将挨个贴出代码讲解。  

首先是闲置的定义，当玩家**把枪拿在手上但是什么操作都不做时就处于闲置态**，此时状态机没有收到任何输入也不会产生任何行动。
闲置在主状态里的地位约等于手动挡汽车的空挡，主状态播放任何动画都要从闲置态开始。  
因为闲置时没有任何动画需要播放，进入闲置态没有需要做的事，由于闲置态也是贯穿始终不需要退出，因此整个闲置态只有一个转换（transition）方法，
作用就是检测状态机收到的输入并做出回应。  
接下来我们来逐句分析闲置态的转换方法里都写了什么：  
```lua
   -- 玩家从枪切到其他物品的时候会自动输入丢枪的信号,不用手动触发,只要检测就好了
   if (input == INPUT_PUT_AWAY) then
      runPutAwayAnimation(context)
      this.main_track_states.final.isfinal = 1
      -- 丢枪后转到最终态
      return this.main_track_states.final
   end
```    

当玩家丢枪的时候会有一条模组程序控制的全局输入，因此我们可以检测这个信号播放丢枪动画，然后转到最终态。与这个**最终态（final）对应的是起始态（start）**。  
这里播放丢枪动画的是一个 lua 函数实现的，其定义在整个状态机的开头部分：  
```lua
   -- 播放丢枪动画的方法
   local function runPutAwayAnimation(context)
      local put_away_time = context:getPutAwayTime()
      -- 此处获取的轨道是位于主轨道行上的主轨道
      local track = context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK)
      -- 播放 put_away 动画,并且将其过渡时长设为从上下文里传入的 put_away_time * 0.75
      context:runAnimation("put_away", track, false, PLAY_ONCE_HOLD, put_away_time * 0.75)
      -- 设定动画进度为最后一帧
      context:setAnimationProgress(track, 1, true)
      -- 将动画进度向前拨动 {put_away_time}
      context:adjustAnimationProgress(track, -put_away_time, false)
   end
```  
  
然后是换弹相关的输入：  
```lua
   -- 玩家拿着枪按下 R (或者别的什么自己绑定的换弹键)时会自动输入换弹信号
   if (input == INPUT_RELOAD) then
      runReloadAnimation(context)
      -- 换弹动画播放完后返回闲置态(也就是返回自己)
      return this.main_track_states.idle
   end
```  
玩家按 R 的时候会有程序控制的全局输入，通过检测这个换弹信号去播放换弹动画，然后要回到闲置（手动挡车的挡位回归空挡）。  
这个播放换弹动画的方法也是个lua函数，那里面有检测战术换弹和空仓换弹的相关内容，和丢枪动画的函数一样在整个状态机的开头部分。  
  
```lua
   -- 玩家在射击时会自动输入 shoot 信号
   if (input == INPUT_SHOOT) then
      context:popShellFrom(0) -- 默认射击抛壳
      -- 返回闲置态(也就是返回自己),这里不播放射击动画是因为射击动画应该在 gun_kick 状态里播
      return this.main_track_states.idle
   end
```  
射击信号的处理比较特殊，这个信号是当枪往外射子弹时触发的全局输入，但可以看到这里并没有播放射击动画，而是只进行了一个抛壳。
具体原因会在之后的章节里讲，这里只需要记住开枪动画不在射击信号的位置进行处理。  
  
```lua
   -- 玩家在使用栓动武器射击完成后拉栓会自动输入 bolt 信号
   if (input == INPUT_BOLT) then
      context:runAnimation("bolt", context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK), false, PLAY_ONCE_STOP, 0.2)
      -- 拉栓动画播放完后返回闲置态
      return this.main_track_states.idle
   end
```  
这部分是栓动武器使用时会需要的，比如 m870，awp 这类需要打一发拉一发的枪，在打完一发的拉栓时会触发全局输入信号，检测到这个信号并播放拉栓动画后回归闲置。  
  
```lua
   -- 玩家按下检视键后会输入检视信号
   if (input == INPUT_INSPECT and context:getAimingProgress() < 1) then
      runInspectAnimation(context)
      -- 检视需要转到检视态,因为检视过程中屏幕中央准星是隐藏的,因此需要一个检视态来调控准星
      return this.main_track_states.inspect
   end
```  
这部分是收到检视信号会发生的事，但是**注意！这里并没有播放检视动画然后回到闲置的行为，而是转去了一个专门的检视态。**  
这是因为检视时并不像其他时候一样只需要播放动画，在检视时还要隐藏屏幕中央准星，检视完成之后还要把准星拿回来，因此需要一个专门的检视态来调控这一点，具体的检视态写法会在之后讲。  
  
```lua
   -- 玩家使用近战武器时输入的近战信号,分为近战配件、枪托、推击这三种情况
   -- 近战配件可以使用多种近战动画,而枪托和推击则是在枪配置文件里写的"无近战配件时的近战攻击",只能使用一个动画
   if (input == INPUT_BAYONET_MUZZLE) then
      -- 这里是一个顺序播放动画的方法,通过存储在状态里的 counter 决定当前播放的是第几个近战动画, animationName 是一个组合起来的字符串
      -- 这样写法会使依次运行 "melee_bayonet_1" "melee_bayonet_2" "melee_bayonet_3" 这三个动画, 3 运行完后再近战则会返回 1
      local counter = this.main_track_states.bayonet_counter
      local animationName = "melee_bayonet_" .. tostring(counter + 1)
      this.main_track_states.bayonet_counter = (counter + 1) % 3
      context:runAnimation(animationName, context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK), false, PLAY_ONCE_STOP, 0.2)
      return this.main_track_states.idle
   end
   -- 枪托肘完之后返回闲置态
   if (input == INPUT_BAYONET_STOCK) then
      context:runAnimation("melee_stock", context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK), false, PLAY_ONCE_STOP, 0.2)
      return this.main_track_states.idle
   end
   -- 推击完之后返回闲置态
   if (input == INPUT_BAYONET_PUSH) then
      context:runAnimation("melee_push", context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK), false, PLAY_ONCE_STOP, 0.2)
      return this.main_track_states.idle
   end
```  
这里是检测快捷近战的信号，比较特殊的地方就是用枪托肘人和推人是在没有安装近战配件的时候使用近战，而根据枪口的刺刀配件来近战的动画是一个三连击，
这时候就用到了状态参数里的那个刺刀计数器，根据计数器来决定播放第几个近战动画。  
  
接下来是刚刚提到的检视态写法，因为在检视时需要隐藏准星，因此其基本逻辑是在进入检视态时隐藏准星，在检视完成后重新显示准星：  
```lua
   -- 进入检视态
   function main_track_states.inspect.entry(this, context)
      -- 检视是需要隐藏屏幕中央准星
      context:setShouldHideCrossHair(true)
   end

   -- 退出检视态
   function main_track_states.inspect.exit(this, context)
      context:stopAnimation(context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK))
      -- 退出后恢复屏幕中央准星
      context:setShouldHideCrossHair(false)
   end

   -- 更新检视态
   function main_track_states.inspect.update(this, context)
      -- 当检测到动画停止了(播完了)时手动触发一次退出信号
      if (context:isStopped(context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK))) then
         context:trigger(this.INPUT_INSPECT_RETREAT)
      end
   end
   
   -- 转出检视态
   function main_track_states.inspect.transition(this, context, input)
      -- 当收到来自 update 的退出信号时返回到闲置态,此时不需要停止动画是因为在 update 里是动画已经停止了才发出的退出信号
      if (input == this.INPUT_INSPECT_RETREAT) then
         return this.main_track_states.idle
      end
      -- 特殊地,射击与瞄准应当打断检视,当检测到射击输入或瞄准进度不为0时应该直接停止动画并返回闲置态
      if (input == INPUT_SHOOT or context:getAimingProgress() > 0) then
         context:stopAnimation(context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK))
         return this.main_track_states.idle
      end
      return this.main_track_states.idle.transition(this, context, input)
   end
   -- 结束主状态部分
```  
这部分需要注意的是**射击会打断检视**，因此要专门写上针对射击的全局信号的处理方式，也就是转出检视态的部分中打断检视回归闲置态的判断处理。  
  
以上就是主状态中的所有情况，相比于细分的各个状态，比如空挂状态和检视态等，主状态就是一个根据输入信号来播放基本动画的状态，不会执行过于复杂的内容。  
  
### 2.4 枪械后座状态  
后座状态主管播放射击动画。由于这个状态仅负责射击动画，不会出现多种情况，所以它的定义非常简单，和基态一样没有任何子状态或状态参数。  
`local gun_kick_state = {}`  
  
这个状态要做的具体事件就是在收到 `INPUT_SHOOT` 的信号时播放一次射击动画，因此这个状态的状态方法非常简单，只需要检测信号，所以只有一个 **transition** 方法。  
```lua
   function gun_kick_state.transition(this, context, input)
      -- 玩家按下开火键时需要在射击轨道行里寻找空闲轨道去播放射击动画(如果没有空闲会分配新的),需要注意的是射击动画要向下混合
      if (input == INPUT_SHOOT) then
         local track = context:findIdleTrack(GUN_KICK_TRACK_LINE, false)
         -- 这里是混合动画，一般是可叠加的 gun kick
         context:runAnimation("shoot", track, true, PLAY_ONCE_STOP, 0)
      end
      return nil
   end
```  
至于这里获取动画轨道为什么要这样写，我们会在之后的3.4特殊轨道行中讲。  
  
### 2.5 动作状态  
动作状态是最麻烦但也是最影响观感的状态，当玩家拿着枪不动时枪身出现的细微抖动、走动疾跑跳跃时持握姿势的变化，
这些都是动作状态控制的，因此动作状态的子状态非常多，每个子状态还有更加细分的状态参数。  
```lua
   -- 移动轨道的状态,这部分到 450 行结束
   local movement_track_states = {
      -- 静止不动(或者在天上)
      idle = {},
      -- 奔跑, -1 是没有奔跑, 0 是在奔跑中
      run = {
         mode = -1,
         time = 0
      },
      -- 行走, -1 是没有行走, 0 是在空中, 1 是正在瞄准, 2 是在向前走, 3 是向后退, 4 是向侧面走
      walk = {
         mode = -1
      },
      -- 战术冲刺
      sprint = {
         mode = -1
      }
   }
```  
在这三个子状态里，`idle` 对应的是拿着枪不移动，`run` 是疾跑，`walk` 是行走，可以看到 `walk` 里的状态参数还细分了行走方向。
如果你拆过默认枪包的默认动画就会发现，默认动画里是有行走和奔跑动画的，这些动画的内容就是枪身的抖动和摇晃。  
  
老规矩我们还是来逐句拆解：  
```lua
   -- 更新静止态
   function movement_track_states.idle.update(this, context)
      -- 此处获取的是混合轨道行的移动轨道
      local track = context:getTrack(BLENDING_TRACK_LINE, MOVEMENT_TRACK)
      -- 如果轨道空闲，则播放 idle 动画
      -- 注意此处没有写成是在 entry 播放 idle 动画是因为要实时检测轨道是否空闲
      if (context:isStopped(track) or context:isHolding(track)) then
         context:runAnimation("idle", track, true, LOOP, 0)
      end
   end

   -- 转出静止态
   function movement_track_states.idle.transition(this, context, input)
      -- 如果玩家在奔跑则转去奔跑态
      if (input == INPUT_RUN) then
         if (context:isStopped(context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK))) then
            return this.movement_track_states.run
         else
            return this.movement_track_states.walk
         end
      -- 如果玩家在行走则转去行走态
      elseif (input == INPUT_WALK) then
         return this.movement_track_states.walk
      end
   end
```  
这部分是 `idle` 子状态时的方法，可以看到并没有 **entry** 或 **exit**，这是因为动作状态是贯穿枪械始终的，在拿到枪的时候就在该状态了，也不需要退出，也没有在进入时的动画播放需求（已经由 draw 进行了）。  
  
子状态 `idle` 的 **update** 方法里写的是播放 idle 动画，在默认动画里 idle 动画就是站定时枪身的细微抖动。  
因为 idle 动画的时长足有十几秒，而实际情况是玩家拿着枪随时都有可能开始移动也随时有可能站定，因此把播放动画的方法放到 **update** 里保证实时的对玩家行为的反馈，并加上了一个检测轨道是否空置（isStopped 和 isHolding）的判断。  
在这里加上的检测轨道是否空置的判断，其目的是防止在玩家切换并开始 `idle` 子状态中的 **update** 更新的情况下，造成前面尚未完全结束的退出动画被 idle 动画施加叠加效果。  
在这样的判断设计下，只有在处于 `idle` 子状态下并且没有其他动作轨道内容播放的情况下，才会开始播放 idle 动画的循环。  
  
而 `idle`子状态的 **transition** 方法则是在收到行走和奔跑信号时转到其他子状态。  
```lua
   -- 进入奔跑态
   function movement_track_states.run.entry(this, context)
      this.movement_track_states.run.mode = -1
      this.movement_track_states.run.time = context:getCurrentTimestamp()
      -- 此处播放的轨道是混合轨道行的移动轨道,播放的动画是奔跑的起手式,播放结束后是挂起动画而不是停止
      context:runAnimation("run_start", context:getTrack(BLENDING_TRACK_LINE, MOVEMENT_TRACK), true, PLAY_ONCE_HOLD, 0.2)
   end

   -- 退出奔跑态
   function movement_track_states.run.exit(this, context)
      -- 此时播放的动画是奔跑结束回到 idle 的动画,同理播放完后挂起
      context:runAnimation("run_end", context:getTrack(BLENDING_TRACK_LINE, MOVEMENT_TRACK), true, PLAY_ONCE_HOLD, 0.3)
   end
```  
这里是进入奔跑态和转出奔跑态的方法，如果你做过奔跑动画你就会知道奔跑动画分为四段：`run_start`、`run、run_hold`、`run_end`，这四段刚好对应奔跑状态的四种情况，在进入奔跑子状态时播放奔跑的起手动画，退出时播放结束动画。  
  
而下面这一段就比较重量级了：  
```lua
   -- 更新奔跑态
   function movement_track_states.run.update(this, context)
      local track = context:getTrack(BLENDING_TRACK_LINE, MOVEMENT_TRACK)
      local state = this.movement_track_states.run;
      -- 等待 run_start 结束,然后循环播放 run ,此处的判断准则是轨道是否挂起,也就是为什么 entry 里播放动画要选 PLAY_ONCE_HOLD 模式
      if (context:isHolding(track)) then
         context:runAnimation("run", track, true, LOOP, 0.2)
         -- 检测是否奔跑的标志位 0
         state.mode = 0
         context:anchorWalkDist() -- 打 walkDist 锚点，确保 run 动画的起点一致
      end
      if (state.mode ~= -1) then
         if (not context:isOnGround()) then
            -- 如果玩家在空中，则播放 run_hold 动画以稳定枪身
            if (state.mode ~= 1) then
                state.mode = 1
                context:runAnimation("run_hold", track, true, LOOP, 0.6)
            end
         else
            -- 如果玩家在地面，则切换回 run 动画
            if (state.mode ~= 0) then
                state.mode = 0
                context:runAnimation("run", track, true, LOOP, 0.2)
            end
            -- 根据 walkDist 设置 run 动画的进度
            context:setAnimationProgress(track, (context:getWalkDist() % 2.0) / 2.0, true)
         end
      end
   end
```  
这一段是奔跑的 **update** 方法，这里有一个判断是玩家是否在空中，对应的是玩家在疾跑时跳跃，最后一句设定 run 动画的进度是为了防止 run 动画在跳起和落地的时候发生模型瞬移。  
  
```lua
   -- 转出奔跑态
   function movement_track_states.run.transition(this, context, input)
      -- 收到闲置输入则转去闲置态
      if (input == INPUT_IDLE) then
         return this.movement_track_states.idle
      -- 收到行走输入则转去行走态
      elseif (input == INPUT_WALK or not context:isStopped(context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK))) then
         return this.movement_track_states.walk
      end
   end
```  
当玩家不奔跑时还要根据全局输入信号转去别的状态，通过 **transition** 方法进行输入信号的读取和判断转出。  
  
接下来是动作状态的行走部分：  
```lua
   -- 进入行走态
   function movement_track_states.walk.entry(this, context)
      -- 此时给标志位置为 -1 相当于一个初始化
      this.movement_track_states.walk.mode = -1
   end

   -- 退出行走态
   function movement_track_states.walk.exit(this, context)
      -- 手动播放一次 idle 动画以打断 walk 动画的循环
      context:runAnimation("idle", context:getTrack(BLENDING_TRACK_LINE, MOVEMENT_TRACK), true, PLAY_ONCE_HOLD, 0.4)
   end
```  
这部分和奔跑的进入退出方法大差不差，不过行走动画没有奔跑那样的三段式动画分段和跳跃处理，取而代之的是根据行走方向和是否瞄准来决定播什么动画。  
  
好那么接下来是最最重量级的部分，行走的 **update** 方法，由于这部分代码太多就不在这里贴了，其核心逻辑就是在行走过程中根据玩家的行为决定播放什么动画，这里不涉及状态转入转出，在默认状态机注释的帮助下应该能看懂。  
  
最后是行走的转出部分，这部分跟奔跑的转出是几乎一样的，只是需要转出的目标子状态从 idle 和 walk 变成了 idle 和 run。  
  
## 3 默认轨道和动画解析  
  
### 3.1 轨道定义和指定  
  
轨道是动画的载体，轨道行是轨道的集合，任何动画都要在指定的轨道上播放。我们先来看看轨道是怎么定义的：  
```lua
   -- 主轨道行 和 其中的五条轨道
   local STATIC_TRACK_LINE = increment(track_line_top)
   local BASE_TRACK = increment(static_track_top)
   local BOLT_CAUGHT_TRACK = increment(static_track_top)
   local SAFETY_TRACK = increment(static_track_top) -- 待实现
   local ADS_TRACK = increment(static_track_top)
   local MAIN_TRACK = increment(static_track_top)
   local SPRINT_TRACK = increment(static_track_top)

   -- 开火的轨道行
   local GUN_KICK_TRACK_LINE = increment(track_line_top)

   -- 混合轨道行 和 其中的两条轨道,用于叠加动画,如跑步走路跳跃, LOOP_TRACK 只有定义却尚未启用,因此作用尚不得知
   local BLENDING_TRACK_LINE = increment(track_line_top)
   local MOVEMENT_TRACK = increment(blending_track_top)
   local SLIDE_TRACK = increment(blending_track_top)
   local OVER_HEAT_TRACK = increment(blending_track_top)
   local OVER_HEATING_TRACK = increment(blending_track_top)
   local LOOP_TRACK = increment(blending_track_top)
```  
因为**调用轨道或轨道行是根据其栈顶指针来调用的**（说白了就是个数字，当成轨道编号就好了），
因此比如说“调用‘主轨道行’上的‘主轨道’”这个过程就是调用了 `STATIC_TRACK_LINE` 轨道行的 `MAIN_TRACK` 轨道。  
  
### 3.2 如何选中一条轨道  
  
我们随便找一句播放动画的语句来拆解：  
```lua
   context:runAnimation("static_idle", context:getTrack(STATIC_TRACK_LINE, BASE_TRACK), false, LOOP, 0)
```  
这一句是基态方法里在基本轨道上播放基态动画的方法，`runAnimation` 这个函数我们暂时不需要知道所有参数是什么意思，
这个函数会在 3.3 如何控制动画的部分讲到，此处只需要知道这个函数的第二个参数是提供一个轨道的栈顶指针。  
可以看到我们用 `getTrack` 函数提供了位于“基态轨道行”上的“基本轨道”，因此 static_idle 这个动画就会在这个轨道上运行。  

:::  tip  
由于轨道和轨道之间是互不相关的，因此在不同轨道上播放动画也不会互相干扰，但此时有一个疑问：如果在不同的轨道上同时播放动画会怎样？  
:::

举个例子：  
*玩家拿着一把打空了子弹的枪站定不动，那么此时有哪些轨道在播放哪些动画呢？*  
1. 基态轨道：播放 static_idle 动画；
2. 动作轨道：播放 idle 动画；
3. 枪机轨道：播放 static_bolt_caught 动画。  

所以**动画与动画之间是可以共同作用的**，不过具体的共同作用方式是叠加还是覆盖，这会在后面如何控制动画部分讲到  
>由此可见想要播放动画需要给动画指定一个轨道，指定轨道需要提供轨道行指针和轨道指针，提供这两个东西需要用 **getTrack** 方法，
给这个方法塞上轨道行和轨道作为参数就能自动提供指针，也就是说在这个过程中指针具体是多少我们是不需要关心的。  
  
### 3.3 如何控制动画  
  
做过动画的肯定知道有些动画的作用方式是不一样的，以及也知道一些规则，比如 shoot 动画不能 k 手部帧，做奔跑动画要点上基态动画再做之类的，
这是因为这些动画的关键帧是“向下叠加”的。  
前面说过 `static_idle` 是一切动画的底片，而开枪动画就是把 shoot 动画里所有帧的旋转和位移信息与 `static_idle` 里的所有帧相加得到的，
**如果在 shoot 动画里 k 了手部帧，就会导致在开枪瞬间手的三维信息被叠加导致飞手。**  
  
那这种叠加作用模式怎么调控呢，首先我们要来认识在上一节提过的 `runAnimation` 这个函数。  
该函数的描述如下（详见状态机api）：  

![runAnimation 函数](/gunpack/gun/animation/gun_state_machine_script/3.3/1.png)  
  
这个函数需要五个参数：  
1. 你要播放的动画名字；
2. 上一节提到的轨道指针；
3. 判断叠加还是覆盖的作用模式，这是个布尔值，为 true 就是叠加，为 false 就是覆盖； 
4. 播放模式，该参数可用的常量有三个：  
   1. `LOOP`：循环播放，对应 Blockbench 里的“循环播放”；  
   2. `PLAY_ONCE_STOP`：播放完成后停止，对应 Blockbench 里的“播放一次”；  
   3. `PLAY_ONC_HOLD`：播放完成后挂起轨道，对应 Blockbench 里的“停止于最后一帧”；
5. 过渡时长，用来使动画播放时不会产生模型瞬移或者抖动之类的关键帧没对齐的情况。  
  
了解了这个函数之后我们随便找一句来拆解：  
```lua
   context:runAnimation("melee_push", context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK), false, PLAY_ONCE_STOP, 0.2)
```  
对照着参数解析就是“在‘基本轨道行’的‘主轨道’上播放一次‘推击近战’的动画后‘停止’，动画需要‘覆盖’其他动画，‘过渡时间 0.2 秒’”。  
基本轨道行的主轨道栈顶指针通过 **getTrack** 获取，推击近战动画“melee_push”，动画需要覆盖因此设置叠加模式为 false，播放后停止 **PLAY_ONCE_STOP**，以及最后过渡时间设置为 0.2 秒。  
  
当然控制动画并不仅仅是播放动画，还要停止动画、调整动画等等，这些方法都写在了状态机 api 里，详细的就请看 api 的列表内容，这里就不再赘述。  
  
当你学会了选轨道和播动画之后你肯定想知道，那么多轨道我怎么知道我的动画应该在哪条轨道上播。事实上，这一点是需要根据你的需求决定的，甚至可以为你的动画重新注册一个轨道，具体的内容将在之后的章节细说。  
  
### 3.4 特殊轨道行  
>在 2.4 中提过一句枪械射击动画的播放模式不一样，它的方法是这样写的：  
>```lua
>   function gun_kick_state.transition(this, context, input)
>      -- 玩家按下开火键时需要在射击轨道行里寻找空闲轨道去播放射击动画(如果没有空闲会分配新的),需要注意的是射击动画要向下混合
>      if (input == INPUT_SHOOT) then
>         local track = context:findIdleTrack(GUN_KICK_TRACK_LINE, false)
>         -- 这里是混合动画，一般是可叠加的 gun kick
>         context:runAnimation("shoot", track, true, PLAY_ONCE_STOP, 0)
>      end
>      return nil
>   end
>``` 
这里没有指定一条特定的轨道去播放，是因为射击动画通常比较长（1 秒左右），而枪械的射速很快，很容易出现上一发射击动画还没播完下一发射击动画就到了的情况。  

如果在某一特定轨道上播放射击动画，会导致后面的射击动画顶掉前面还没有播放完的射击动画，这样就会产生模型瞬移的问题。  
因此没有用 **getTrack** 而是用 **findIdleTrack** 去分配一条新的轨道给新的射击动画，这样每一个射击动画都能播完，也就不会产生模型瞬移的问题。  
  
因此对于某些需要在短期内多次叠加的动画，一个很好的解决方法就是让状态机自行分配轨道。  
  
## 4 写状态机的准备  
>本章将介绍如何根据自己的需求写出自己需要的状态机，并给出一些不容易犯错的经验和写法，本章的小节可作为线性步骤跟着做。  
  
### 4.1 明确需求  
既然你需要写状态机那必然是需要明确自己的需求，你要逐发装填？还是余弹动态显示？还是彩蛋检视？还是随机换弹/拉栓动画？  

明确自己的需求之后要确定自己的需求会影响到哪些轨道/轨道行/状态，比如彩蛋检视，这一项需求就只会影响到主状态的检视部分，如果你的需求在已有的状态机框架之外，那就应该考虑添加新的轨道/轨道行/状态。  
  
如果你的需求很复杂，比如你**既要双持枪的轮流射击，又要彩蛋检视，还要随机换弹动画**，那么此时你应该把你的需求拆开成为三个独立的需求，
做好了一个没问题了再去做下一个，千万不要一次性全写了，不然到时候出错都不知道是哪儿的错（当然你要是状态机系统的作者那当我没说）。  
  
### 4.2 列出满足基本需求的大纲  
你用到了状态机那说明你的需求肯定是默认状态机满足不了的，此时建议你把你需要的功能那部分在一根时间轴（或状态轴）上列出来，这样能帮助你明确你的代码部分要怎么写以及在哪些地方写。  
  
举个例子（当然这里的例子并不是教你怎么写状态机，只是大概看看列需求大纲有多好用）：  
>确认需求：余弹量显示。（弹匣内子弹实时根据你的余弹量进行更新） 
> 首先来看成品在游戏内的表现效果：  
> 满载： 
>   
> ![满载](/gunpack/gun/animation/gun_state_machine_script/4.2/1.png)  
>   
> 余弹12发：  
>   
> ![余弹12发](/gunpack/gun/animation/gun_state_machine_script/4.2/2.png)  
>   
> 在这个功能里我做的大纲是这样的：  
>   
> ![大纲](/gunpack/gun/animation/gun_state_machine_script/4.2/3.png)  
>   
  
大纲列出来就能很明显的看到我的需求和枪机状态几乎完全重合，因此实现这个功能就可以从空挂状态入手，把空挂状态的 **update** 改造成我需要的弹药显示功能。
明确了这一点之后只需要对空挂状态一个地方动手，其他地方不需要动。  
  
### 4.3 计划详细功能  
当你知道了你要动哪些地方之后你应该继续补你的大纲，把你每一步的详细步骤写上去，这一步已经接近伪代码了。  
  
还是以上一节的余弹显示为例，当我确定了要改造空挂状态方法后，我要在 **normal** 子状态时显示余弹，由于此时的默认状态机的空挂轨道是没有动画在播放的，因此我需要在这里播放动画。
在 **normal** 的 **entry** 方法里填上播放余弹显示动画，在 **update** 里根据余下的弹药量动态调整动画的进度，在进入空挂时启动空挂。（是的我知道 RD704 其实没有空挂，但是在这里有一个空挂会比较方便）  
  
在列出了以上内容后我就能直接开始改了。  
```lua
   -- 更新"不空挂"状态
   function bolt_caught_states.normal.update(this, context)
       -- 如果弹药数量是0了, 那么立刻手动触发一次转到"空挂"状态的输入
       if (inNoAmmo(context)) then
           context:stopAnimation(context:getTrack(STATIC_TRACK_LINE, BOLT_CAUGHT_TRACK))
           context:trigger(this.INPUT_BOLT_CAUGHT)
       else
           local a = context:getAmmoCount()
           context:setAnimationProgress(context:getTrack(STATIC_TRACK_LINE, BOLT_CAUGHT_TRACK), 0.1+(03-a)*0.25, false)
       end
   end
   
   -- 进入"不空挂"状态
   function bolt_caught_states.normal.entry(this, context)
       context:runAnimation("static_ammo_display", context:getTrack(STATIC_TRACK_LINE, BOLT_CAUGHT_TRACK), false, PLAY_ONCE_STOP, 0)
       -- 因为进入不空挂状态没什么需要做的, 因此什么都不做直接转进改状态
       this.bolt_caught_states.normal.update(tihs, context)
   end
```  
首先制作了一个弹匣子弹逐渐减少的动画，在 **entry** 的时候于空挂轨道（因为设计的时候知道空挂时弹匣子弹为空，也就是不需要子弹变化的动画，而空挂状态本身只在空挂的时候调用动画，因此两者不会互相干扰，可以设置在同一个轨道）播放这个动画。  
在 **update** 中，我们通过 **getAmmoCount** 这个默认的 api 方法获取当前的子弹数，并且通过 **setAnimationProgress** 来将动画设定在对应子弹的帧数上，以此实现子弹数量的实时变化。  
  
## 5 状态机示例分析  
> 由于状态机的写法过于自由，本文不会教代码怎么写，但本文会给出实例进行分析，希望读者能根据已有的实例自行总结出自己的状态机写法。  
> 这里给出的所有实例全都是**基于默认状态机的修改，因此只会展示修改过的部分**，其他和默认状态机完全相同的部分将不再展示。  
> 由于上方规划举例中已经详解了余弹显示的动画，因此本章不再赘述。  
  
### 5.1 快慢机动画  
先上代码：  
```lua
   if (input == INPUT_FIRE_SELECT) then
       context:runAnimation("fanning_1", context:getTrack(STATIC_TRACK_LINE, MAIN_TRACK), false, PLAY_ONCE_STOP, 0.2)
       return main_track_states.idle
   end
```  
嗯对的就这么点，没了。这一段写进 `main_track_states.idle.transition` 方法中，由主状态来操控，和其他主状态操作的动画一样，在播放完快慢机动画后要回到闲置。  
  
### 5.2 逐发装填  
默认枪包里的m870，其装填机制为**逐发装填**，但是因其状态机过于复杂，此处只给出逻辑大纲，该状态机有完备的注释和分析，具体作用机制还请看注释了解。  
  
![逐发装填大纲](/gunpack/gun/animation/gun_state_machine_script/5.2/1.png)  
