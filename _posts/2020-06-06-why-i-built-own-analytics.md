---
layout: post
title:  "Why I built my own Analytics tool"
date:   2020-06-06 09:06:13 +0200
categories: why
author: confact
---

Website analytics is on the rise right now. It exists a lot of them already, some that have been here for a while, like Google Analytics, Matomo (formerly Piwik), and new ones like Fathom and Plausible.

I have also seen many that are under development. So it is even more coming.

So why did I start building my own Analytics service? I felt that most of them had most of the things I need, but I thought I couldn't trust the services they depended on. Some use Amazon, others Netlify. As European, I want to have some that use European services when needed, and if it couldn't, at least have the servers based on European soil.

I also got a bit sad that most of these privacy-focused analytics let the user opt-out from respecting things like Do Not Track. Which makes no sense as privacy-focused analytics should respect the visitor's privacy if they ask not to be tracked not to track them.

My analytics service, Kindmetrics, and force respecting DNT won't send a track call to the server if DNT is enabled in the javascript code. Soon that will also be checked on the server-side. Kindmetrics is using Digitalocean but is explicit only using the datacenter in Germany.

I use Mailjet, which is Paris-based; here, others use Mailgun, Sendgrid, or Amazon own one. Being privacy-focused but let big companies handle your user's mails are a bit contradicting. It is essential to respect the visitors and your user's privacy.

I have also announced I won't use a CDN on the app domain of it (I use Github pages for the landing page, which use fastly) - all API calls will not pass through some third party at my analytics. Others use Cloudflare or other ones.

Kindmetrics are also open source so you can check the code yourself to trust what is going in the code. If you are not sure, you can check it out. Included to that, I have also opened up my todo and what is next. You can always add your issues or make your changes if you want.

I hope you guys would like to try Kindmetrics out; you can give [feedback here](mailto:info@kindmetrics.io). Feel free to ask any questions
