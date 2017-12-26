---
layout: post
title: "Enable & Configure Php on Apache Server"
modified:
categories:
description: "Steps to configure Apache Server and enable Php on Mac OSX"
tags: [apache, server, php, OSX]
comments: true
share: true
date: 2015-02-10T12:08:52+05:30
---
Recently I have been writing Server Side Php Script and desiging UI in HTML5 and CSS, so to test and debug my code locally I needed to setup Apache Server and enable Php on it. Fortunately, apache server comes pre-installed in OSX. There are two ways to configure apache, either install clients like MAMP which will do the job for you or do it by yourself i.e Manually.

Configuring Server
==================
***
In this post, I am going show how to configure Apache Server Manually. Launch Terminal on your mac and open `httpd.conf` file via following command. It is recommended to make a copy of `httpd.conf` for backup, incase you mess things up. 
{% highlight bash %}
nano /etc/apache2/httpd.conf
{% endhighlight%}

In that file search for the line `DocumentRoot`. In **nano** editor to perform search use `ctrl+w`. By default it should be : 
{% highlight bash %}
DocumentRoot "/Library/Webserver/Documents"
{% endhighlight %}

Change the directory to wherever you want your root folder be i.e wherever you want your Sites to host, or keep it default. Now search for `<Directory "/Library/Webserver/Documents">` in `httpd.conf`. Change the Directory to wherever your new root directory is (which you defined in previous step or keep it default if you didn't modify the Root Directory). Now add the following lines before the closing `</Directory>` tag : 
{% highlight bash %}
Options Indexes FollowSymLinks Multiviews
AllowOverride None
Order allow, deny
Allow from all
{% endhighlight %}

Enabling Php on Apache Webserver
================================
***
Now, since your apache server is configured you need to enable Php. In order to do so search for the following line in `httpd.conf` 
{% highlight bash %}
LoadModule php5_module libexec/apache2/libphp5.so
{% endhighlight %}
and uncomment it by removing # in front of this line. This should enable Php execution on your apache server. Finally, save `httpd.conf` file using `ctrl+o` and then `ctrl+x`. 
Now in Terminal type :
{% highlight bash %}
sudo apachectl restart
{% endhighlight %}

Launch any browser, and navigate to "http://localhost" to very the server is running. If everything went well you will see "It Works!" message.
 
If unfortunately somehow your local Apache Webserver is not working then you can check for errors using : 
 {% highlight bash %}
sudo apachectl configtest
{% endhighlight %}

You can check Error Logs, by tailing the log file located in `/var/log/apache2/error_log` :
{% highlight bash %}
tail /var/log/apache2/error_log
{% endhighlight %}

Happy Coding :)
