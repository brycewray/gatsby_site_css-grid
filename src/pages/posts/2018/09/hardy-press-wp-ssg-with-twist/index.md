---
#layout: layouts/posts/singleposthero.njk
tags: post
title: "HardyPress: WP + SSG with a twist"
subtitle: Trying to have the best of two worlds
description: Here’s a brief look at an interesting way to have your WordPress cake and eat your SSG site, too—or something like that.
date: 2018-09-15
lastmod: 2019-09-12
#idx: 1
#draft: false
#actual_path: /content/posts/2018/09/hardy-press-wp-ssg-with-twist.md
discussionId: "2018-09-hardy-press-wp-ssg-with-twist"
#final_url: /posts/2018/09/hardy-press-wp-ssg-with-twist/
featured_image: ./Hardy_Press_Web_page_2019-04-27_1280x720_blur.png
featured_image_alt: Screen capture from hardypress-dot-com
featured_image_caption: "[Screen capture: April 27, 2019.]" # In quotes to allow brackets
---

While researching the static-site generator (SSG) scene for the first time in a while yesterday, I happened upon  [HardyPress](https://www.hardypress.com).

It's an interesting proposition: it takes the whole WordPress-to-SSG idea one step further. HardyPress keeps your WordPress install on a hidden location where you edit to your heart's delight, and only **then** does the content get on the Web---but as *static* files. So you get the advantage of ease-of-use in WordPress and the security of SSG.

In addition, they host it on a CDN that, as nearly as I can tell, uses Amazon to hit 30 edge servers worldwide. They even provide SSL certs so you can avoid the nasty red blot on Chrome, Firefox, and other HTTPS-savvy browsers.