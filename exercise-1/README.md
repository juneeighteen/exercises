# Exercise 1
Describe a solution you would implement for an automated testing and continuous integration setup for a
SaaS website built using a combination of ASP.NET MVC and a front-end Javascript framework such as
React.js using a flux architecture.  

The application connects to a SQL Server database.  

The application uses multi-tenancy with each tenant using a different set of application settings
(but all sharing the same code and database).  
Please make sure to include what tools you would use and how you would utilize them.


## ASP.NET MVC
   * Unit test as much code as possible in Visual Studio
   * Integration test the API to ensure endpoints are functioning properly
        * using tools like PostMan, NodeJS scripts, or other scripting language

## Front-End JavaScript (React.js)
   * PhantomJS and/or Karma for unit/system tests
   * Selenium tests for UI Tests (perhaps using BrowserStack )

## SQL database
   * End-To-End Test framework in C# that queries database tables after DB migration scripts run

## Test User
   * Create at lest one test user account so we can have close-to-production test database
