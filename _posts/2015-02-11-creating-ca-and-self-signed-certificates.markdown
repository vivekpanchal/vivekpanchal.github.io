---
layout: post
title: "Creating CA & self signed Certificates"
modified:
categories: 
description: Guide to create your own Central Authority and certificates signed by it.
tags: [Server, Encryption, Certificates]
comments: true
share: true
date: 2015-02-11T17:19:23+05:30
---
In this post, we will see how to create your own **Central Authority** (CA) and w'll generate **Certificates** using that CA. This is important procedure to learn because Certificates are practically implemented everywhere, there is SSL encryption in HTTPS protocol in which Certificates play a major role, Certificates are also used for Authentication between server and client etc.


## Why SSL and Certificates are required?
What we will see here in this post is very simplified view of how SSL is implemented and how Certificates play their part. 
Normally traffic sent over the internet is not encrypted and anyone with the sniff tools like **wireshark**, **tcpdump** etc can snoop all the traffic by analyzing the data packets. This can lead to many problems, especially where the security is the main concern, such as in online transactions and credit card data. 

To tackle this problem, Secure Socket Layer(SSl) is used to encrypt the data sent over the web. SSL uses assymmetric cryptography, also known as public key cryptography, in which two keys public and private are created. Anything encrypted with one key can only be decrypted using the other key, which ensures that data can come from only authenticated source/server.

So, if SSL encrypts the data then why are Certificates required? Well, technically anyone can encrypt data and send it to you, but who will ensure that data came from trusted or authentic person ? Here Certificates come into play! CA ensures that the certifcate holder is really who he claims to be. This prevents  impersonations attacks.

### How the System Works!
In normal Https protocol, first client sends hello request to Server. Server, then replies with its own Certificate, whose authenticity is checked by the browser i.e if it is signed by known CA or not(CA information is generally stored in the browser). Once the certificate is checked and client is happy, then it sends its session key to the server by encrypting it with the server's certificate. This session key then used for the rest of the data exchange during the session.

This is just simplified overview, a lot more happens behind the screen. For now this will suffice. Now, lets jump to exciting part. 

**Note** : This procedure is done in OSX, which is unix based operating system. For other  machines the procedure should be similar.

Creating your own CA
=======================
***
Before we start it is important to note that the certificates signed by your CA will not be accepted by the browsers because they won't trust your CA. You must add your own CA in browsers trusted CA's list. 
To create CA Open up your terminal and check whether `openssl` is installed or not. Fire this command :  
{% highlight bash %}
which openssl
{% endhighlight %}
If `openssl` is installed, this will return the directory where it is located or else it will print nothing. `openssl` is a tool which is open source implementation of SSL and TLS. If you don't have it, go ahead and install it.

### Creating CA private key :
In terminal, create Directory in which you want to keep the key and certificate of the Central Authority. Navigate to that folder and then fire the following command: 
{% highlight bash %}
openssl genrsa -des3 -out rootCA.key 2048
{% endhighlight %}
This command will generate RSA private key using triple-DES standards of length 2048 bits which is quite secure. Following is the output(you can give any pass phrase you want) : 

~~~ bash
Generating RSA private key, 1024 bit long modulus
.........................................................++++++
........++++++
e is 65537 (0x10001)
Enter PEM pass phrase:
Verifying password - Enter PEM pass phrase:
~~~

### Removing Passphrase : 
Since we now have our CA's private key, we should probably remove passphrase from it because it can be inconvinient to type passphrase every time we perform operation with this key(keeping in mind that the operations are very large in number). This can done in many ways, one way to do so is following : 

{% highlight bash %}
cp rootCA.key rootCA.key.org
openssl rsa -in rootCA.key.org -out rootCA.key
{% endhighlight %}

### Creating CA self signed Certificate :
Fire this command in the terminal to create your CA Certificate : 

{% highlight bash %}
openssl req  -new -x509 -days 999 -key rootCA.key -out rootCA.crt
{% endhighlight %}

There will be following prompts : 

``` bash
Country Name (2 letter code) [GB]:IN
State or Province Name (full name) [Berkshire]: Chandigarh
Locality Name (eg, city) [Newbury]: Chandigarh
Organization Name (eg, company) [My Company Ltd]: Varunest
Organizational Unit Name (eg, section) []:Information Technology
Common Name (eg, your name or your server's hostname) []:varunest.com
Email Address []: mailvarun93@gmail.com
Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```

This command will create rootCA.crt, which will be valid for 999 days, using rootCA.key.

And now you have your own CA's private key and certificate (which acts as a public key). So, to issue certificates to servers all you need to do is take Certificate Signing Request aka CSR (provided by the server which want its certificate from the CA) and create its certificate using this rootCA.key.

Issuing Server Certs with your own CA
=====================================
***
Now since you have your own CA, you can start distributing certificates to Server signed by you. In order to do so follow the following steps : 

* Create private key `server.key` as we did for CA
* Create CSR (Certificate Signing Request) with this `server.key` with the following command : 
{% highlight bash %}
openssl req -new -key server.key -out server.csr
{% endhighlight %}
   There will be lot of prompts, answer them correctly and in common name type the Fully qualified domain name of your server for which you want your certificate. This will create your CSR `server.csr`

* Now remove passphrase from the `server.key` like we did earlier
* Generally, the CSR created by the server i.e `server.csr` is sent to the CA from which you want your certificate. Since here ourselves are the CA therefore we will sign the certificate using our CA Certificate `rootCA.crt` by the following command : 

{% highlight bash %} 
openssl ca -batch -days 999 -in server.csr -out server.crt -keyfile rootCA.key -cert rootCA.crt
{% endhighlight %}

This command will issue you **server.crt** which will be valid for 999 days. And voilà you have server certificate which is issued by you :D.
 
Now, [install your Root Certificate]({{site.url}}/installing-root-ca-certificate-in-mac-osx) in any system to make it trust the certificates issue by you. Finally, configure your local Apache server for SSL traffic with the `server.key` and `server.crt` to test if it allows ssl traffic on that domain.
