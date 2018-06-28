---
layout: post
title: 'Tutorial: Hide or show input passwords'
date: 2012-12-11T21:43:24.000000000+01:00
comments: true
---

When typing a password, on desktop devices,the dots that are covering typed characters are useful, because we can assume that somebody might walk behind our desk and look at the password we are typing.

Password: <input type='password' value='password'/>

On mobile devices, it's harder to look - we hold the device in hand - and it's easier to make a mistake.

When the password is a key step in your business (to buy something, for example), you don't want users to go away because they are tired of rewriting a miswritten password.

It would be nice to have a toggle button that can show the password, to avoid typos and in the same time guarantee privacy when needed.

The html is simple: a form and an anchor to toggle the status:

{% highlight html %}
<input type="password" class="toggablePwd" />
<button>show</button>
{% endhighlight %}

And the javascript: we need to notice that for security reasons you can't change the type attribute of a password input field. So the idea is to copy the html of the tag (thus preserving classes and other attributes) and repopulate the value field.

{% highlight javascript %}
$("button").on("click", function() {
var elemtn = $(".toggablePwd")[0].outerHTML;

if ($(this).html() === "show") {
elemtn = elemtn .replace(/password/, "text");
$(this).html("hide");
} else {
elemtn = elemtn.replace(/text/, "password");
$(this).html("show");
}

var val = $(".toggablePwd&").val();
$(".toggablePwd").replaceWith(elemtn);
$(".toggablePwd").val(val);
});
{% endhighlight %}

You can see a demo [here](http://jsfiddle.net/kajyr/DXRu2/15/embedded/result)
