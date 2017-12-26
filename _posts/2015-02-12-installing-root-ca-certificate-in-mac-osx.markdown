---
layout: post
title: "Install Root CA Certificate in Mac OSx"
modified:
categories: 
description:
tags: [OSX, Certificates]
comments: true
share: true
date: 2015-02-12T10:49:06+05:30
---
This post it to show how to make OSX System trust the **Certificates** issued by your own CA.

I will assume that you know how to create your own CA and issue Certificates with it, if not you can check that **[Here](../creating-ca-and-self-signed-certificates)**.

1. In your OSX, open **Keychain Access** app (located in Utilities in Applications).
2. Under **keychain** select System and under **category** select Certificates.
3. Here, Click on **+** sign to add your Root Certificate. Locate the Root Certificate and click on Open.
![Screenshot Installing Root Certificate]({{site.url}}/images/post-images/rootCAInstallation.jpg)
4. In the new dialog box click on "Always Trust"

Now you are good to go! All the certificates which are issued by your CA will be trusted by this System. 
