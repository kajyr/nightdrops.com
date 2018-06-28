---
layout: post
title: ffmpeg not found after brew installing
date: 2013-01-06T03:18:25.000000000+01:00
---

After installing ffmpeg on my Mac OS X with brew (with the command)

`brew install ffmpeg --use-clang`

I could not reach ffmpeg from the command line. For some reason the installer forgot to link the bin file. Simply solved with

``ln /usr/local/Cellar/ffmpeg/1.0/bin/ffmpeg /usr/local/bin/`

Posted just in case this happens to someone else.
