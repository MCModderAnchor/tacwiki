#第三部分·纹理与着色
##优化模型
###面裁选
第一步是优化模型的面数。我们将使用Optimize插件，它自动计算重叠面和不可见面并将其删除。但是，请确保在面裁选之前备份模型，并尝试仅对单独的零件进行操作。

您可以直接在Blockbench中安装插件，方法是转到Plugin-available并搜索Optimize。

![优化插件](./3.1.1.png)

请注意，Optimize插件可能会遇到错误，例如删除Bedrock Edition或自由模型格式中的暴露面。如果出现这种情况，请使用Ctrl+Z快速撤消操作并检查模型。如果插件无法正确优化零件，则最好手动清除面或完全跳过清除。

您可以在“工具”界面中找到“优化”。操作界面如下：

![插件接口](./3.1.2.1.png)

![插件接口](./3.1.2.2.png)

这两个复选框是**仅选定的图元**和**应用面消隐**.

确保选中“仅选定元素”，否则插件将不加区别地优化模型的所有元素。

选中“应用面消隐”后，优化会直接删除面的UV信息。

示例操作：优化护手板的面裁选
**请务必备份您的模型！
请务必备份您的模型！
请务必备份您的模型！**

在轮廓视图中选择骨架，然后按I键在预览中仅显示该骨架。
选择骨架，打开“工具”(Tools)-“优化”(Optimize)，然后选中这两个选项。
应用并检查错误删除的面。**如果有，请撤消操作或从备份还原。**
如果成功，您将看到某些面已被删除。
正确使用此插件将减少20%-40%的脸数，提高游戏性能。

![插件自动优化模型](./3.1.3.1.png)

![插件自动优化模型](./3.1.3.2.png)

![插件自动优化模型](./3.1.3.3.png)

重复这些步骤以优化其他结构。
您也可以在左侧UV编辑栏中手动剔除面，这适合于插件无法识别的区域的精确剔除或补充。此按钮将删除选定的UV面。

![手动面剔除](./3.1.4.1.png)

![手动面剔除](./3.1.4.2.png)

如果面部被错误删除，并且项目进展太快，无法从备份中恢复，您如何恢复它？

![UV工具“应用于所有面”](./3.1.5.png)

Click on the remaining face of the block, go to the UV bar and select the paint bucket icon "Apply to All Faces," which restores the deleted UV face.

If the model already has a texture, the texture will be applied to all faces of the block, which is not ideal for coloring.

You can right-click the model texture and select "Add Element to Template," redistributing the texture across the six faces of the block.

Alternatively, select all or part of the model and regenerate the texture to automatically assign new UVs.

![Add Element to Template](./3.1.6.png)

### Z-Fighting
>After optimization, the next step is to solve the model's z-fighting issues. We will use the Inflate function here.

Inflate can take positive or negative values and does not affect the UV face effect of the block. When inflating, pay attention to the coverage relationship between blocks to ensure the desired faces are on top.

Generally, an **±0.001-0.005** inflation value is sufficient.
Fixing z-fighting is done after completing the model because inflated blocks can affect vertex snapping and cause symmetry issues due to floating-point precision in the software.

However, not all z-fighting faces need inflation to prevent overlap. For some less important faces, you can cover the z-fighting effect by painting them the same color.
You can do the same during the coloring process.

![Using Inflate -0.001 to Solve Z-Fighting](./3.1.7.1.png)

![Using Inflate -0.001 to Solve Z-Fighting](./3.1.7.2.png)

![Using Inflate -0.001 to Solve Z-Fighting](./3.1.7.3.png)

## Creating Textures
### Creating Textures
Ensure all blocks and skeletons you want to generate textures for are **visible** and **unlocked** in the outline view.
Then, select Create Texture in the left UV toolbar.

![Create Texture](./3.2.1.png)

Check the options as shown and create the texture. BB will automatically generate per-face textures and assign UVs. Note that we can only use **per-face textures** because our block volumes are not integers.

![Create Texture Options](./3.2.2.png)

![Creation Complete](./3.2.3.png)

### Quick Coloring
Next, we use the paint bucket to quickly color the model with inherent colors.
>Note: When coloring, be sure to **disable the Shadow option** as it interferes with judging inherent colors.

>![Shadow Option](./3.2.4.png)

Press B to enter paint mode, press Y to select the paint bucket, choose the Color mode for painting in the top bar, select the generated texture in the UV interface, and use the paint bucket to click the UV editor's colors to batch replace them.

![Batch Replace Colors](./3.2.5.1.png)

![Batch Replace Colors](./3.2.5.2.png)

For gunmetal colors, the inherent color generally has low saturation and purity, with saturation typically not exceeding 20, ideally between 5-10, and the hue chosen in the blue-cyan range.

For UV texture batch color replacement, the program assigns different colors to faces based on their orientation, such as brighter colors for light-receiving faces. When coloring, you can select brighter colors from the palette.

![Upward, Front Faces Auto-Colored Blue and White](./3.2.6.png)

After batch replacing colors, your gun should look like this:

![Rough Coloring](./3.2.7.png)

### Detailing
Now, our model has the most basic light and shadow relationships. Next, we will focus on detailing the texture details between different structures and further refining light and shadow details.

Remember, the main goal of realistic gun coloring is to **highlight and emphasize structures through light and shadow relationships**. Since most guns are generally dark in color, we rely on color contrast to depict volume details.

Let's assume a parallel light source is located in the upper front area of the gun. As a first-person model, we need to understand which light is most likely to reflect off the gun's surface and into our eyes, appearing the brightest;
>As shown, the diagram illustrates the possible lighting effects from the hypothetical light source.

![Light and Shadow Principle Explanation](./3.2.7.png)

A common technique is:
- The color is brightest on the 45° sloping surfaces facing east and west,
- The top surface is less bright than the slope,
- The vertical east-west surfaces are less bright than the top,
- The north-south surfaces are less bright than the sides,
- The bottom surface is less bright than the north-south surfaces.

For metal surfaces, we generally assume that the brighter the surface, the lower the saturation, and the darker the surface, the higher the purity, also known as **bright and pure, dark and gray**.

![Saturation and Brightness](./3.2.9.png)

It is important to avoid using **pure black or pure white** in surface light and shadow relationships. These colors are only used in special cases, such as using pure black to create a sense of depth.
>For example, painting the inside of a volume black can further enhance the distinction of spatial structures.

![Painting the Inside Pure Black](./3.2.10.png)

Here are some real-world photo examples, but do not simply copy the effects from real photos, as lighting effects vary:

![Gunmetal Coloring Example](./3.2.11.png)

To better distinguish the volume relationships of different parts of the gun, we can use more color layers, including but not limited to **adjusting brightness, saturation, and hue**.

Generally, using appropriate hue differences to distinguish similar-colored parts is effective.

>For example, for the upper and lower receivers, since the lower receiver receives less light, we can adjust the hue towards **light blue and slightly adjust brightness and saturation** to increase differentiation:
This applies to other large structures as well. For color selection, refer to real or in-game photo effects.

![Large Volume Coloring](./3.2.12.png)

So far, we have only used the paint bucket tool to create the basic light and shadow relationship. Next, we will detail the texture based on the basic tone.

Typically, for a vertical surface structure, we can add a gradient effect with brighter top and front surfaces and darker bottom and rear surfaces.

However, **do not use a brush with opacity** for this as it can cause too much color on the surface, creating confusion and breaking the original light and shadow relationship. It can also introduce noise during curve color adjustments due to excessive hues and brightness levels.

To deepen the shadow relationship, pick the current surface color and adjust the value down or lower-right in the color palette; the opposite applies for bright surfaces.

If you feel only two colors create too sharp a contrast, add an intermediate color between the two for a smoother transition.

We can use dithering to blend colors. Dithering is a traditional pixel art technique. You can search online for more detailed information.

In short, the key to emphasizing structure is **contrast at the boundary of light and shadow**.

![Coloring Techniques](./3.2.13.1.png)

![Coloring Techniques](./3.2.13.2.png)

![Coloring Techniques](./3.2.13.3.png)

![Coloring Techniques](./3.2.13.4.png)

![Coloring Techniques](./3.2.13.5.png)

Using the same method for the lower receiver, we can achieve a similar effect.
Note that dithering is not mandatory. For large flat areas, dithering helps add texture detail and smooth transitions, but for smaller spaces, maintaining fewer, continuous colors can also work well.

![Detailing Texture](./3.2.14.png)

>Tip: Transition and Separation of Bright and Dark Surfaces
Adding shadows at the junction of integrated structures can weaken transitions and make structures more closely connected.

![Ambient Occlusion](./3.2.15.1.png)

![Ambient Occlusion](./3.2.15.2.png)

Highlight different structures with bright surfaces where separation or transitions are needed.

![Emphasizing Structure Details](./3.2.16.png)

Sharper transitions typically have greater contrast.

![Coloring the Rail](./3.2.17.png)

From the light-facing surface to the back, you can create a gradient from light to dark, with dithering to add texture detail.

![Gradient and Dithering](./3.2.18.png)

Larger flat areas can give texture an overall sense of connection, reflecting surface texture due to varying roughness and reflectivity of the metal.

![Large Area Coloring](./3.2.19.1.png)

![Large Area Coloring](./3.2.19.2.png)

Some parts may have annealed surfaces due to high temperatures, enriching the model's color.

![Annealed Surface on the Muzzle Brake](./3.2.20.png)

### Programmatic Coloring
You can adjust the hue, contrast, and brightness of textures in the UV workbar.

![Color and Curve Tools in UV Workbar](./3.2.21.png)

If the colors are too dark, you can brighten them by adjusting brightness and contrast.

![Adjusting Brightness and Contrast](./3.2.22.png)

![Adjustment Results](./3.2.23.1.png)

![Adjustment Results](./3.2.23.2.png)

This document does not elaborate on the specific use of contrast, brightness, hue, and RGB curves. Please refer to additional resources as needed.
If unsatisfied with the current local effect, you can generate textures for a specific skeleton and adjust curves separately.

![Generate and Adjust Local Textures](./3.2.24.png)

Ensure that created textures do not have multiple duplicate names, as this may cause texture reading errors.
Final colored product:

![Finished Product](./3.2.25.1.png)

![Finished Product](./3.2.25.2.png)

After completing the model, if it lacks details, we can use another method: surface decals.
Decals are usually logos, inscriptions, or trademarks added according to personal preference.
Here, I will use the following decal:
Copy and import the decal texture file into the project file.

![Import Decal to Project](./3.2.27.png)

- Note the resolution of the decal and model textures. If the decal resolution is higher than the model texture resolution, you can right-click the model texture and choose "Set Texture Size" to enlarge the texture canvas.

![Adjust Existing Model Texture Canvas Size](./3.2.28.png)

Right-click the model texture and select "Edit in Blockbench."

![Blockbench Built-in Editor](./3.2.29.png)

In the UV work area, use Ctrl+C to copy the decal texture and paste it into the editing texture, select an empty spot, and "Place" it.
It is recommended to place the decal on the edge for easy manual UV adjustment later.
The imported decal texture resolution should be a power of 2 for easier location in the UV texture.

![Merge Decal and Texture](./3.2.30.png)

Create a new block and manually delete unnecessary faces.

![Decal Plane](./3.2.31.png)

Drag the texture onto the desired face.

![Apply Texture to Plane](./3.2.32.png)

Manually adjust the UV, ensuring the decal resolution matches the block's aspect ratio. For example, if the block aspect ratio is 4:1, the decal UV resolution should be a multiple of 4:1.

![Model with Decal](./3.2.33.1.png)

Effect display:

![Model with Decal](./3.2.33.2.png)

At this point, your model is basically complete.
