---
layout: post
title: 'Compass: from zero to production in 20 minutes'
date: 2013-02-02T01:20:25.000000000+01:00
---

Recently we decided it was time to write better css and optimize a little, and we did choose <a title="compass-style" href="http://compass-style.org/" target="_blank">compass</a> and the scss syntax as the tool.

The project i'm workin on is organized with a very big css/ folder with a css for every page, a couple css for the common classes and some css files with fixes for certains nations (I'm speaking of Russia, China and Japan, where we have different fonts and all the spacing changes); it is also deployed with continuous integration on several test environments and the production cluster.

In the past we did try a conversion to less, but it was unsuccessful, mainly because the less syntax is not compatible with css so we needed to restyle every page (a lot).

We planned a lot on how to introduce the scss files and after several tries we noted that:

<ul>
	<li><span style="line-height: 14px;">it was unnecessary to rewrite a single line of css: the scss syntax is superset of css</span></li>
	<li>we did not need to convert scss file live and cache them - at the beginning we could source control both</li>
</ul>
Once all the interface developers were the loop and motivated (pretty easy ;-), we decided to migrate in steps, to make the transition easy:
<ol>
	<li><strong>Copy the css folder to a new 'sass' folder and rename (batch rename) all the files to .scss</strong>, commit and celebrate. This is the core action to introduce sass.</li>
	<li><strong>Modify the continuous integration script to recompile all the css during the build/deploy task</strong>: this way we could remove the css file from versioning and avoid unnecessary merges</li>
	<li><strong>Modify the above script to deploy the generated sprites: </strong>we keep them on different servers and we decided it was not a vital step, so we separated from the second.<!--more--></li>
</ol>
The big point is that between step 1 and 2 we let several days pass by. This way all the developers could taste the scss sweetness and bring their sub-projects up to speed. We don't like big changes   :-). Beside that, the first step is really the core of setting up scss, and it only takes a few minutes.

What we gained? Now the situation is pretty much the same ( the code is messy) but we can work a little every day, along the normal maintenance, to sort things out, and there is no need for a 'stop everyone and make clean' task: the business would never have allowed us that.

On the performance side, the minified css globally weight <strong>a third</strong> of the originals. Yo!

&nbsp;
