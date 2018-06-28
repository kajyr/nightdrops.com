---
layout: post
title: Managing laravel auth and auth-token
date: 2014-10-28T23:55:20.000000000+01:00
excerpt: When you develop an app in Laravel, sometimes you need to have a webapp and her native counterpart. To manage the authentication on the API side, there's a lovely package.
---

When you develop an app in Laravel, sometimes you need to have a webapp and her native counterpart. To manage the authentication on the API side, there's this lovely package that is [tappleby\laravel-auth-token](https://github.com/tappleby/laravel-auth-token).
One of the les documented features of this package is how to maintain in sync the tokens and the laravel auth.

Why? Because when an api is called with the right token, you want to use Auth::user() and Auth::check(), for example.

What you need to do is add (at the end) of `app/start/global.php` this three events that will bound the token events to the authentication system
{% highlight php %}
Event::listen('auth.token.valid', function($user)
{
//Token is valid, set the user on auth system.
Auth::setUser($user);
});

Event::listen('auth.token.created', function($user, $token)
{
//Token is valid, set the user on auth system.
Auth::setUser($user);
});

Event::listen('auth.token.deleted', function()
{
//Token is removed, deauthenticate the user.
Auth::logout();
});
{% endhighlight %}
