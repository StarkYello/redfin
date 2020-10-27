#####Please add a write-up that best showcases your technical expertise describing how you would take this proof-of-concept command line application and convert it to a fully featured web application using the data provided by the Socrata API capable of serving millions of concurrent users. Imagine this write-up will be used to pitch your architecture to the team so make sure to explain why you would make those choices.

- add interfaces for architecture cleanness 
- unit testing, with Chai or Mocha
- integration testing
- negotiate API throttle 
- store access key in KMS or other credential management
- multi-thread the whole app
- deploy a scalable server fleet
- load-balance the server fleet 
- setup application monitoring with alarms, dashboard, graphs. e.g. CloudWatch, SNS, SMS
- setup distributed cache across server fleet
- create a frontend UI, more user options, more advertising friendly services
- new business opportunities, such as advertising partnership and remote payment