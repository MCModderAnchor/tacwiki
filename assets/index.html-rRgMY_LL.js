import{_ as o,a as n,b as r,c as s,d as c,e as l,f as p,g,h as f,i as u,j as d,k as m,l as h,m as b,n as k,o as x,p as y,q as _,r as w,s as v,t as S,u as C,v as T,w as q,x as B,y as V,z as P,A as R,B as I,C as M,D as z,E as A,F,G as N,H as D,I as j,J as O,K as L,L as G,M as U,N as Y,O as E,P as W,Q as X,R as H}from"./2.4.4-DP5Padhh.js";import{_ as Q}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as Z,a as t,b as J,e as i,d as K,w as $,r as ee,o as te}from"./app-DcFjyJ3N.js";const ie={};function ae(oe,e){const a=ee("RouteLink");return te(),Z("div",null,[e[2]||(e[2]=t('<h1 id="part-two-·-creating-your-project" tabindex="-1"><a class="header-anchor" href="#part-two-·-creating-your-project"><span>Part Two · Creating Your Project</span></a></h1><h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation"><span>Preparation</span></a></h2><p><strong>We assume you are already familiar with the basic modeling operations in Blockbench, such as using basic hotkeys and understanding functionalities. If not, please <a href="https://youtu.be/XqzxL_-XjA0" target="_blank" rel="noopener noreferrer">click here</a> to review the basic operations.</strong></p><p>To ensure that the models you submit match the various model scales used by the MOD by default, we require you to know the real-world data of the gun you are creating, such as the total length. This data can be found through a Google search or on the respective official websites.</p><p>Please note that different models of the same gun may have different lengths, and folding/extending gun parts can also change the total length of the reference image. Make sure your reference image matches your data.</p><p>For guns, we use the following ratio as the standard model ratio: <strong>1000mm = 48 grid</strong>. For example, a 1000mm rifle can be calculated as follows: x = 48 * L / 1000 where x represents the grid length and L is the actual total length.</p><p><strong>To make your work more accurate, we require you to import a side view of the gun as a reference.</strong></p><p><strong>Example Tutorial:</strong> For example, to build an HM 50B rifle, we first need to find a .png file. You can find a suitable side view on Google or other search engines:</p><figure><img src="'+o+'" alt="Gun Side View" tabindex="0"><figcaption>Gun Side View</figcaption></figure><p><strong>Please crop the reference photo to remove any white space on the left and right sides (no white space between the gun muzzle and stock and the image borders).</strong> After conversion, the total model length should be 70 grid. We will create a reference block plane in the project to place the reference image.</p><blockquote><p>Tips: Note that the plane&#39;s direction should have the long side facing north-south.</p></blockquote><p>Next, adjust the reference block&#39;s aspect ratio according to the image resolution to keep the proportions consistent and avoid stretching.</p><blockquote><p>For example, if the image resolution is 1332 x 700, the block&#39;s corresponding aspect ratio is 60 x 31.5315. Then, drag the .png file to the desired plane and maximize the UV to cover the entire plane with the texture.</p></blockquote><figure><img src="'+n+'" alt="Import Texture" tabindex="0"><figcaption>Import Texture</figcaption></figure><figure><img src="'+r+'" alt="Adjust Block Aspect Ratio" tabindex="0"><figcaption>Adjust Block Aspect Ratio</figcaption></figure><figure><img src="'+s+'" alt="Apply Texture to Block UV (Drag)" tabindex="0"><figcaption>Apply Texture to Block UV (Drag)</figcaption></figure><figure><img src="'+c+'" alt="Maximize UV" tabindex="0"><figcaption>Maximize UV</figcaption></figure><p>Click the axis point at the bottom right to make the view parallel to the selected normal.</p><figure><img src="'+l+'" alt="Switch to Side View" tabindex="0"><figcaption>Switch to Side View</figcaption></figure><p>Before starting construction, go to the outline view, click [More Options], and select [Lock] to make the reference block unselectable, avoiding accidental moves.</p><figure><img src="'+p+'" alt="Lock Reference Block" tabindex="0"><figcaption>Lock Reference Block</figcaption></figure><p>After completing the above steps, you can now observe your reference image and start building.</p><blockquote><p>Tips: You can also use Blockbench&#39;s built-in reference image feature to add references from other angles, but the main reference image for modeling must use block textures for more accurate references.</p></blockquote><blockquote><figure><img src="'+g+'" alt="Add Reference Image from Clipboard" tabindex="0"><figcaption>Add Reference Image from Clipboard</figcaption></figure></blockquote><h2 id="building-explanation-partial" tabindex="-1"><a class="header-anchor" href="#building-explanation-partial"><span>Building Explanation (Partial)</span></a></h2><p>Now, press Ctrl+N to create your first cube model. <strong>Note that your model must be symmetrical about the Z-Y plane, meaning the anchored cube you create must be on the central axis N↑. Ensuring the model is symmetrical about the central axis helps standardize construction.</strong></p><p><strong>The gun barrel must face the N↑ direction.</strong></p><p>You can select the block and click the Center X Axis button to ensure the block is on the central axis.</p><p>We recommend adjusting the block size in multiples of <strong>0.125</strong> for uniform UV pixel size and easier alignment through move and scale operations when generating UVs.</p><figure><img src="'+f+'" alt="Symmetry" tabindex="0"><figcaption>Symmetry</figcaption></figure><p>By observing the structure, we can see that the gun consists of several basic parts:</p><figure><img src="'+u+'" alt="Parts Classification" tabindex="0"><figcaption>Parts Classification</figcaption></figure><p>Therefore, we first use different colored blocks to classify the structural parts of the gun.</p><blockquote><p>Tips: Select an existing block and press Ctrl+D to quickly duplicate it. Hold Alt and drag the block handles to increase the volume on both sides simultaneously.</p></blockquote><figure><img src="'+d+'" alt="Outline Large Volume" tabindex="0"><figcaption>Outline Large Volume</figcaption></figure><p>Next, each part will have its skeleton and be named accordingly.</p><figure><img src="'+m+'" alt="Quick Create Skeleton" tabindex="0"><figcaption>Quick Create Skeleton</figcaption></figure><p>In the side view, press Ctrl and left-click to frame select, use Ctrl+G to quickly place the blocks into a skeleton. You can also manually drag the blocks into the specified skeleton in the outline view. Select the skeleton and press F2 to quickly rename it.</p><figure><img src="'+h+'" alt="Quick Create Skeleton" tabindex="0"><figcaption>Quick Create Skeleton</figcaption></figure><p>Now that we have classified and skeletonized all volumes, we can start detailing each structural part.</p><figure><img src="'+b+'" alt="Main Parts Skeletonized" tabindex="0"><figcaption>Main Parts Skeletonized</figcaption></figure><p>For bones that do not need modification, you can hide them in the outline view by clicking the visibility icon (eye) or by holding Shift + left-click to select the bones you want to display and then pressing the hotkey I to hide all unselected bones.</p><p>How to determine the width of gun parts? We can cross-reference and compare with structures that have standard dimensions on the gun, such as the rail and grip:</p><figure><img src="'+k+'" alt="Reference and Comparison" tabindex="0"><figcaption>Reference and Comparison</figcaption></figure><p>The rail&#39;s base width in the model is always 0.75 grid, and the grip&#39;s usual width is between 1.5-2 grids, allowing you to estimate the approximate width of other parts.</p><p>In summary, do not rely too much on the side view during the modeling process. Actively seek more images from different angles for reference to restore the overall proportions of the gun.</p><p>Blockbench&#39;s vertex snapping feature can align the edges/vertices of blocks without creating gaps.</p><p><strong>The move function can move the entire block to the selected vertex.</strong></p><p><strong>The scale function can adjust the block volume to the selected vertex.</strong></p><p>You can also use vertex snapping to move pivot points, allowing you to place the pivot on the block&#39;s edge for rotation around that edge.</p><figure><img src="'+x+'" alt="Vertex Snap Pivot to Create Rotation Axis" tabindex="0"><figcaption>Vertex Snap Pivot to Create Rotation Axis</figcaption></figure><figure><img src="'+y+'" alt="Vertex Snap Pivot to Create Rotation Axis" tabindex="0"><figcaption>Vertex Snap Pivot to Create Rotation Axis</figcaption></figure><figure><img src="'+_+'" alt="Vertex Snap Move and Two Modes" tabindex="0"><figcaption>Vertex Snap Move and Two Modes</figcaption></figure><figure><img src="'+w+'" alt="Vertex Snap Move and Two Modes" tabindex="0"><figcaption>Vertex Snap Move and Two Modes</figcaption></figure><figure><img src="'+v+'" alt="Vertex Snap Move and Two Modes" tabindex="0"><figcaption>Vertex Snap Move and Two Modes</figcaption></figure><blockquote><p>Tips: To connect sloped surfaces, use vertex snapping in <strong>scale mode</strong>. In this mode, the block is automatically stretched to overlap the vertices, which is very effective for creating 45-degree chamfers.</p></blockquote><blockquote><figure><img src="'+S+'" alt="Vertex Snap (Scale) to Fill Chamfer Gaps" tabindex="0"><figcaption>Vertex Snap (Scale) to Fill Chamfer Gaps</figcaption></figure></blockquote><blockquote><figure><img src="'+C+'" alt="Vertex Snap (Scale) to Fill Chamfer Gaps" tabindex="0"><figcaption>Vertex Snap (Scale) to Fill Chamfer Gaps</figcaption></figure></blockquote><blockquote><p>Tips: Copying and transforming existing blocks is faster than creating new ones, as it eliminates the need for extra dragging and maintains consistent colors for skeletons.</p></blockquote><blockquote><figure><img src="'+T+'" alt="Copy, Transform, and Symmetry Operations" tabindex="0"><figcaption>Copy, Transform, and Symmetry Operations</figcaption></figure></blockquote><blockquote><figure><img src="'+q+'" alt="Copy, Transform, and Symmetry Operations" tabindex="0"><figcaption>Copy, Transform, and Symmetry Operations</figcaption></figure></blockquote><blockquote><figure><img src="'+B+'" alt="Copy, Transform, and Symmetry Operations" tabindex="0"><figcaption>Copy, Transform, and Symmetry Operations</figcaption></figure></blockquote><blockquote><p>Tips: Placing the cube&#39;s center pivot on the right angle and then rotating helps create well-covered chamfers.</p></blockquote><blockquote><figure><img src="'+V+'" alt="Creating Chamfers" tabindex="0"><figcaption>Creating Chamfers</figcaption></figure></blockquote><blockquote><figure><img src="'+P+'" alt="Creating Chamfers" tabindex="0"><figcaption>Creating Chamfers</figcaption></figure></blockquote><blockquote><p>Tips: Pressing Ctrl, Shift, and Ctrl+Shift while rotating allows you to rotate at different angle intervals. To create chamfers on sloped surfaces, copy the sloped block and perform the same chamfer operation.</p></blockquote><blockquote><figure><img src="'+R+'" alt="Chamfer on Sloped Surface" tabindex="0"><figcaption>Chamfer on Sloped Surface</figcaption></figure></blockquote><blockquote><figure><img src="'+I+'" alt="Chamfer on Sloped Surface" tabindex="0"><figcaption>Chamfer on Sloped Surface</figcaption></figure></blockquote><p>In this part, the top also includes a rail. Rails must be built to a uniform standard (this standard applies to the 48/1000 mm ratio):</p><figure><img src="'+M+'" alt="Rail Standard Specifications" tabindex="0"><figcaption>Rail Standard Specifications</figcaption></figure><p>Regarding rail construction, for optimization purposes, we will subjectively handle it.</p><p>Typically, using 0.25 as a rail unit with a 0.25-unit gap, 1-3-1 and 1-5-1 are common rail constructions, with the latter usually used for longer rails. We recommend using the 1-5-1 rail more often for better optimization.</p><p>Of course, adopting Weaver rail style can also effectively reduce the number of faces.</p><figure><img src="'+z+'" alt="Rail Specifications" tabindex="0"><figcaption>Rail Specifications</figcaption></figure><figure><img src="'+A+'" alt="Two Different Rail Designs" tabindex="0"><figcaption>Two Different Rail Designs</figcaption></figure><figure><img src="'+F+'" alt="Two Different Rail Designs" tabindex="0"><figcaption>Two Different Rail Designs</figcaption></figure><p>Finally, modify the details in various parts to complete the construction of this component:</p><figure><img src="'+N+'" alt="Upper Component" tabindex="0"><figcaption>Upper Component</figcaption></figure><p><strong>Special Movable Part: Bipod</strong> Since the bipod rotates around an axis that may be inclined, we need to use the skeleton rotation axis to complete it.</p><p>When creating the bipod model, you need to create a single leg model in a vertical or horizontal direction without any rotation.</p><p>Put all parts of the model into a newly created skeleton. Select the pivot of this skeleton and adjust it to the rotation axis of the bipod stand.</p><p>Next, rotate the skeleton along the Z-axis (blue) to align its rotation axis with the desired plane.</p><p>Then rotate along the X-axis (red) to get a properly bound bipod.</p><p>The other leg can be obtained by duplicating the current skeleton with Ctrl+D and flipping the X-axis.</p><figure><img src="'+D+'" alt="Bipod Creation" tabindex="0"><figcaption>Bipod Creation</figcaption></figure><figure><img src="'+j+'" alt="Bipod Creation" tabindex="0"><figcaption>Bipod Creation</figcaption></figure><figure><img src="'+O+'" alt="Bipod Creation" tabindex="0"><figcaption>Bipod Creation</figcaption></figure><figure><img src="'+L+'" alt="Bipod Creation" tabindex="0"><figcaption>Bipod Creation</figcaption></figure><figure><img src="'+G+'" alt="Bipod Creation" tabindex="0"><figcaption>Bipod Creation</figcaption></figure>',89)),J("p",null,[e[1]||(e[1]=i("After completing the model's structural components, we need to set the correct skeleton names for automatic recognition and add cameras and positioning bones for future development use. ")),K(a,{to:"/en/model/"},{default:$(()=>e[0]||(e[0]=[i("Bone Names")])),_:1})]),e[3]||(e[3]=t('<h2 id="_2-4-considerations" tabindex="-1"><a class="header-anchor" href="#_2-4-considerations"><span>2.4. Considerations</span></a></h2><p>You can now build your model in your preferred way, but there are still a few points to note. <strong>1) Z-fighting</strong> Since the model can only be built with cube models, some cubes will inevitably intersect. Intersecting faces cause texture flickering, so minimize intersecting areas.</p><p>Secondly, using Inflate can slightly increase the block volume to prevent overlapping faces. Typically, an inflation of 0.001-0.005 can solve Z-fighting without affecting the block&#39;s appearance.</p><figure><img src="'+U+'" alt="Intersecting Faces and Solving with Inflate" tabindex="0"><figcaption>Intersecting Faces and Solving with Inflate</figcaption></figure><figure><img src="'+Y+'" alt="Intersecting Faces and Solving with Inflate" tabindex="0"><figcaption>Intersecting Faces and Solving with Inflate</figcaption></figure><figure><img src="'+E+'" alt="Intersecting Faces and Solving with Inflate" tabindex="0"><figcaption>Intersecting Faces and Solving with Inflate</figcaption></figure><p>For perpendicular cubes, avoid intersections to minimize Z-fighting issues during coloring. <img src="'+W+'" alt="Non-intersecting, Perpendicular Cubes"></p><p><strong>2) Representing Circles</strong> To maintain a certain Minecraft style, we replaced most circles with octagons, such as barrels and scopes. Typically, circles with a radius greater than 1 can use octagons.</p><p>For smaller circles, such as structures <strong>less than 0.75 or 0.5</strong>, a single block can be used instead.</p><p>For circles with relatively large radii, hexadecagons can still be used, such as for drum magazines. You can use the Shape Generator plugin to quickly generate geometries. Prefer solid circles over hollow ones (e.g., for barrels) for optimization purposes.</p><figure><img src="'+X+'" alt="Stylized Circle (Pin and Bolt)" tabindex="0"><figcaption>Stylized Circle (Pin and Bolt)</figcaption></figure><figure><img src="'+H+'" alt="Hexadecagon Drum Magazine" tabindex="0"><figcaption>Hexadecagon Drum Magazine</figcaption></figure>',12))])}const ce=Q(ie,[["render",ae]]),le=JSON.parse('{"path":"/model_guide/model/","title":"Part Two · Creating Your Project","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Preparation","slug":"preparation","link":"#preparation","children":[]},{"level":2,"title":"Building Explanation (Partial)","slug":"building-explanation-partial","link":"#building-explanation-partial","children":[]},{"level":2,"title":"2.4. Considerations","slug":"_2-4-considerations","link":"#_2-4-considerations","children":[]}],"git":{},"readingTime":{"minutes":5.53,"words":1659},"filePathRelative":"model_guide/model/README.md","excerpt":"\\n<h2>Preparation</h2>\\n<p><strong>We assume you are already familiar with the basic modeling operations in Blockbench, such as using basic hotkeys and understanding functionalities. If not, please <a href=\\"https://youtu.be/XqzxL_-XjA0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">click here</a> to review the basic operations.</strong></p>"}');export{ce as comp,le as data};
