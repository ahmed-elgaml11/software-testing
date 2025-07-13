## the course covers the fundamentals of software testing, including phases of the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC)
1. `concepts`: manual and automated testing, types of testing, benifits of automated testing, tools
2. `unit testing`: testing matchers(units as functions), async code, mocks
3. `integration testing`: database, api testing , helpers
4.  `e2e testing`: workflow, frontend web pages, 
5.  `TDD, BDD`: Test-Driven Development, Behavior-Driven Development
6.  `Performance Testing`: load testing, stress testing(point of failure), jmeter tool
   


## Concepts:   
### what is software testing: 
Its primary purpose in software development is to ensure that applications perform their expected functions and deliver the anticipated results           
To achieve this, there are two main approaches: `Manual Testing and Automated Testing`           

1. `Manual Testing`: Manual testing involves a person directly interacting with and operating the application to test specific features                            to test a login feature, you would open the application, go to the login form, input data, and then verify if the application performs the login as expected or if any issues

2. `Automated Testing`: write code to test other code,  the testing code executes the tests and verifies functionalities automatically
   
<img src = "./pics/Screenshot%20(1353).png" width="600">
<img src = "./pics/Screenshot 2025-07-02 164450.png" width="800">


## Types of Software Testing:           

Unit Testing, Integration Testing, and End-to-End Testing


`1. Unit Testing :  
`testing unit of code within an application without any external dependencies like a database, an external API it simulates the inputs and checks the outputs of that isolated piece of code. For a registration form, unit tests would verify individual fields (e.g., that an email is valid, or a password meets length requirements), but it would not test the full submission of the form to a backend

-   Don't give alot of confidence: does not provide full confidence that the entire application will work correctly. While individual units might perform perfectly in isolation, issues can arise when these units are integrated or used together
-  Fast/Quick: This speed comes from the fact that they don't involve slow operations like database access or external API calls


`2. Integration Testing :  
`testing unit of code within an application with its external dependencies


- It provides a higher level of confidence compared to unit testing
- integration testing is slower than unit testing

`3. End-to-End Testing (E2E Testing)`
covers the complete flow of an application from start to finish, simulating a real user's experience


Open the website.                             
Navigate to the registration page.
Input the required details like username, email, and password into the fields.                                     
Click the submit button.                                 
Verify that the registration was successful and added to the db or that the expected outcome occurred. 


- Slow:  This slowness is due to the need to interact with the UI, wait for pages to load, and simulate real user actions, which takes time
- Prone to Breaking :  For instance, if a UI element's name changes (e.g., a button's ID), or its position on the page shifts, the test might fail even if the underlying functionality is still working correctly

### The Testing Pyramid: 
It helps determine the ideal balance between various tests to achieve efficient and reliable software.

<img src = "./pics/Screenshot 2025-07-03 033442.png" width="400">


`Unit Testing:`                                     

This forms the largest part of the pyramid.                                                                            
They are ideal for testing individual, isolated units of code, especially functions involving calculations, algorithms, or any internal business logic. For example, a unit test would verify if a function correctly calculates a discount without needing to connect to a database or an external AP


`Integration Testing:`                                 
This layer is smaller than Unit testing but larger than End-to-End testin              
used to test the interaction between different modules or services within the application, or with external systems like databases and APIs



`End-to-End (E2E) Testing:`                                     
smallest part of the pyramid                            
They cover complete user scenarios from start to finish, interacting with the application's user interface used in the happy casses not the tricky




Tools for Unit and Integration Testing`: Jest`                                  
Tools for End-to-End (E2E) Testing: `Cypress,  puppeteer `           
Tool for Performance Testing: `JMeter`
____



`TDD`: Test-Driven Development

approach where you start by writing the test first before implementing the main code

<img src = "./pics/Screenshot 2025-07-10 041837.png" width="400">


why TDD? 
- Fully Coverage Code By Tests
- Simpler Implemenation

____



`BDD`: Behavior-Driven Development

the behavior of the system when adding a new feature ..  drives the development

it's all about collaboration between teams or bridge the gab between them (business and technical team ) to be agree with the behavior of the system when adding a new feature

this behavior is written in a `living document ` by user story approach with gherkin technique

```
Feature: as a user i want to purchase order using my cc 
Scenarion: user successfully uses his valid cc
    given: a list of products 
    when: the user submit purchase request using cc
    then: a new order created with cc method
```
from this `living document ` i can think and generate a test cases which test the implementation of the feature         
`tool`: cucumber


___
`Performane Testing`: 

Testing type focuses on evaluating an application's performance rather than just its functionality

### Key Aspects Measured in Performance Testing
1. Speed: loading time, response time.
2. stability 
3. scalability                                                  


All these evaluations are conducted under specific, defined workloads, meaning with a certain number of users or intensity of usage or specific resources
### Importance and Value of Performance Testing
- it is not about finding bugs it is about eleminating the bottlenecks (intensity of usage can affect the performane of the system )
- provide info about the system before going live 

### Types of Performance Testing
1. Load Testing: This involves testing the application's performance under the expected workload
2. Stress Testing: stress testing aims to push the application beyond its expected load to identify its "breaking point"
3. Scaling Testing: Tests how well the system handles increasing loads by scaling up (more users, more data) or scaling out (more servers).


### Key Metrics to Observe During Performance Testing
- Memory storage
- CPU uage
- Disk IO
- Battery
- Network 
- Speed

`tool`: JMeter
____

