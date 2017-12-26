---
layout: post
title: "Configure SSL on Apache Server"
modified:
categories: 
description:
tags: [Apache, Server, SSL, OSX]
comments: true
share:	true
date: 2015-02-13T10:56:53+05:30
---
As a developer, you may want to enable SSL on your local Apache! If that is the case, then this post is for you. We are going to tweak some configurations of Apache Webserver in order to make SSL traffic get going.

Before we start, it is important that you have your **private key** and **server certificate** issued by your own CA, which are required because SSL works on public cryptography where certificates are exchanged to generate session keys. If you don't have them, learn to generate them yourselves [here]({{site.url}}/creating-ca-and-self-signed-certificates). Remember to put the Common Name of the Certificate to "Localhost", since you will be testing this locally.

* Okay, considering you have both "Key" and "Certificate" open up **Finder** and press `Command+shift+G`. Type this location in the dialog box: 
{% highlight bash%}
/private/etc/apache2
{% endhighlight %}

* Once you are there create a folder "SSLData". 

* Open `httpd.conf` file in any text editor you are comfortable with(you may want to create its backup first, in case you mess things up). And uncomment te following lines (i.e remove # in front of them) : 

```
LoadModule ssl_module libexec/apache2/mod_ssl.so
Include /private/etc/apache2/extra/httpd-ssl.conf
```
		
This will enable SSL module and will load its configurations from `httpd-ssl.conf` file. Now, save the `httpd.conf` file and exit the editor.

* Now open up the `httpd-ssl.conf` located in "extra" folder. Again you may want to create its backup since you can mess things up. 
* Search for **DocumentRoot**, and enter the location of your root folder where your sites reside.
{% highlight bash %}
DocumentRoot /Path/to/root/folder
{% endhighlight %}
* Give **localhost** as a **ServerName**
{% highlight bash %}
ServerName localhost
{% endhighlight %}
* Edit **SSLCertificateFile** to point it to your certificate, which will be in "SSLData" folder we just created :
{% highlight bash %}
SSLCertificateFile /private/etc/apache2/SSLData/server.crt
{% endhighlight %}
* Repeat for **SSLCertificateKeyFile** :
{% highlight bash %}
SSLCertificateKeyFile /private/etc/apache2/SSLData/server.key
{% endhighlight %}
* Also comment out (put # in front) the following lines :
{% highlight bash %}
SSLCACertificatePath
{% endhighlight %}
{% highlight bash %}
SSLCARevocationPath
{% endhighlight %}
* Save the file and exit the Editor.
* Now put your '**server.crt**' and '**server.key**' in the "SSLData" you just created.
* Now, restart your Apache with following command :
{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

If everything went well, you should be able to see "https://localhost" working. If not :( then you can check the error log file located in "**/var/log/apache2/error_log**" or you can always comment your problems :).
 
