# Write-Up
## Question
Please add a write-up that best showcases your technical expertise describing how you would take this proof-of-concept command line application and convert it to a fully featured web application using the data provided by the Socrata API capable of serving millions of concurrent users. Imagine this write-up will be used to pitch your architecture to the team so make sure to explain why you would make those choices.

## Answer
I would consider the following additions/changes:
- To improve the architectural cleanness of the project and adhere to more well-known design patterns,
We can switch the programming language to a language that supports interfaces, such as Typescript or Java. 
- We can conduct thorough unit testings on the components. 
- We can conduct integration testings on the API calls. 
- Given we are under the scenario of serving millions of concurrent users, 
we should negotiate a custom API throttle threshold with Socrata to suit our throughput needs. 
- We should store the Socrata access key along with any other static secrets
 into a secured remote location, then encrypt the key access with a key management service, such as AWS KMS.
 Setting up a periodically key rotation with Socrata would also be ideal.   
- Since the purpose of the app is to serve data without any heavy computation,
Multi-threading the whole app would be ideal. 
- On top of multithreading the app, we can also deploy the app onto a scalable server fleet like AWS EC2.
- With a server fleet running the app, we can load-balance the server fleet accordingly.
- To monitor the system, we can set up application monitoring with alarms, dashboards, graphs. e.g. CloudWatch, SNS, SMS.
- To help with the data retrieval performance, we can set up distributed (e.g. Memcached, Redis) cache across the server fleet.
- To provide the best experience for our customers, we can create a frontend UI with more user options and more advertising friendly services.
- To catch new business opportunities, we can develop new features, like advertising partnerships and remote payment, which would benefit the food truck businesses.