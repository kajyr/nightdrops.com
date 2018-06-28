---
layout: post
title: 'Serendipity: phantomjs'
date: 2012-11-22T00:37:51.000000000+01:00
---

So while browsing pointless the intertubes, <a href="http://randomshopper.tumblr.com/post/35454415921/randomized-consumerism" target="_blank">this post</a> came to my attention, and I started reading about <a href="https://github.com/ariya/phantomjs" target="_blank">phantomjs</a>. I had already seen this project but never tried it. Now I'm officially curious.

This is the code to make a screenshot of a full web page:

{% highlight javascript %}
var page = require('webpage').create();
page.open('http://google.com', function () {
page.render('google.png');
phantom.exit();
});
{% endhighlight %}

I'm totally hooked.
