---
layout: post
title: "Parallel threads and Mutex in C++"
tags: [C++]
modified:
comments: true
date: 2015-03-13T10:56:53+05:30
---

This post is about how to spawn a thread which will run parallely to you main process in C++, and how you can use Mutex to avoid race conditions since there are two threads running concurrently.

# Spawning thread parallely to Main

I am writing this post because when I was looking to spawn a thread like this, I came across loads of tutorials but unfortunately main process paused and waited for them to finish up first. Somewhat like this :


```
#include <iostream>       // for console input output
#include <thread>         // used for spawning threads
 
void foo() 
{
  // statements...
}

void bar(int x)
{
  // statements...
}

int main() 
{
  std::thread first (foo);     // spawn new thread that calls foo()
  std::thread second (bar,0);  // spawn new thread that calls bar(0)

  std::cout << "main, foo and bar now execute concurrently...\n";

  first.join();                // pauses until first finishes
  second.join();               // pauses until second finishes

  std::cout << "foo and bar completed.\n";

  return 0;
}
```

Here, our main() method pauses and waits for both the first and second thread to finish. Now, what if you want a thread to run concurrently to your main() method? 

Here is how : 

```
#include <iostream>
#include <thread>

int main() {
	startThread();
	cout << "main() is executing parallely with thread...";
	return 0;
}

void startThread() {
	std::thread([]() {
		// Do something here...
	})
}
```

## Using Mutex 

If you have more than one thread running concurrently then it is advised to use common variables/data called in more than one thread with mutex. This will prevent race condition and will serialize the synchronous calls. Here is how to do that : 

```
#include <iostream>
#include <thread>

int main () {
	pthread_mutex_t mutex;
	mutex = PTHREAD_MUTEX_INITIALIZER;	// Initializing mutex
	
	// Now wherever you use common variables or data you should first apply lock
	pthread_mutex_lock(mutex);
	/* Your statements goes here 
	*
	*/
	pthread_mutex_unlock(mutex);
	
	return 0;
}
``` 

Happy Coding :D


 
