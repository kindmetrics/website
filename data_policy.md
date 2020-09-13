---
layout: article
title: "Data Policy"
description: Our policy how we handle data and what we collect
permalink: /data-policy
---

# Data Policy

Kindmetrics is made to collect analysis, but Kindmetrics can do this without collecting personal data or personally identifiable information (PII) on the user's visitors.

## Data we collect
Even if we try to collect as little as possible, we have to collect some to give everyone a good service. Kindmetrics split it up in 2 different chapters to make it extra clear.

### Personal information
We gather only this information about you as a user of Kindmetrics:

* Name
* email (sent through Mailjet)
* payment information (Paddle)
* password

### Usage data
We do not save the user’s information like IP-addresses and unique device identifiers. We save this without any personal information, in a [one-way hash](#web-analytics-and-gdpr-ccpa-and-other-privacy-regulations).

### Location Data
We do not use or store information about the user's location except for the country of origin (we do not save IP-address or anything else than country.)

### Log data
We do not log any personal data at all in our logs. The logs only look like this:

> {"severity":"Info","source":"lucky","timestamp":"2020-05-21T03:33:34Z","status":404,"duration":"5.73ms"}
{"severity":"Info","source":"lucky","timestamp":"2020-05-21T03:33:34Z","method":"GET","path":"/news/wp-login.php"}

We use a managed load balancer from Digitalocean in Frankfurt, which might log the traffic.

### Analytics data
We collect some to be able to present users some analytics of their visitors.

We collect page views, referrers, paths, user agents (browser, OS, device), and IP address.

#### Referrer
> We **collect and save** referrer

The referrer is the URL where the user came from to user's site. We use it so the user can see from which website is linked to the user's website. An example website here could be blogs, news. The user can also see the user that came directly to the website by the user's domain. Later this will be changed to `(direct)`

#### Page url
> We **receive and save** Page url

We sent the path the visitor visited on the user's website. This is usually the page the javascript was triggered from or using SPA (single page application) on every `pushstate`.

#### user-agent
> We **receive** but **DO NOT** save user-agents

We get the user-agent to calculate browser name, device type, and operative system. We also use it for our one-way hash for making our unique identifier for a user. After we all have done this, we will throw it away.

#### Browser
> We **receive and save** browser

We use the `user-agent` string from the browser to determine which browser every visitor uses.

#### Device type
> We **receive and save** device

This is being parsed from the `user-agent` string, which the web browser sent in every request.

#### Operative system
> We **receive and save** operative system

This is being parsed from the `user-agent` string as well, which the web browser sent in every request.

#### Country
> We **receive and save** country

We use public files with a list of countries for each IP-address to map which country an IP-address is based. We can **NOT** see cities, states, or something else.

#### IP-address
> We **receive** but **DO NOT** save IP-addresses

We get the IP address when tracking the user; we then use it for unique one-way hashing to find unique visitors and get a country.

After this is done, we throw the IP-address away and do not save it at all.

## Web analytics and GDPR, CCPA and other privacy regulations

We do not save the IP-address in an exact format. We use the IP address for:
* Get country
* Create a unique one way hash

After that, we throw the IP address away. We cannot get the IP. Our unique hash for users are very similar to other privacy analytics services; it is based on four things
```
(domain + IP address + browser + Date)
```


## Data processors

We have minimal amount of third parties processors:

* Digitalocean - VPS cloud hosting - office in USA (servers are in Germany)
* Mailjet - Email service - France
* faviconkit - Get Favicons for referrers - Malta
* Inleed - We host our landing page on Inleed - Sweden
* Bunnycdn - Our CDN for our static landing page - EU
* Paddle - payment processor - EU and UK

We use no cdn on our app subdomain.

We also do not send calls to third parties to get info about the user. The data that comes to our system stays there.

## Operator
All data operator responsibility and questions are to:

Håkan Nylén
hakan@kindmetrics.io
