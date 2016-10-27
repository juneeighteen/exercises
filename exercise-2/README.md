# Exercise 2: High Availability Upgrades
How would you reduce or eliminate application downtime during  
code and database upgrades?  Assume a setup as described in   
Exercise 1 above.    Please make sure to include what tools you  
would use and how you would utilize them.


## Test First
* Testing all code, especially DB migrations will ensure production servers are not  
  impacted by bad SQL migrations.
* Running smoke-tests on a new application will ensure users can login before deploying to production


## SQL DB Upgrades
* Run DB upgrades during off-hours
* Code review all DB migrations to minimize long-running queries
* Avoid SQL triggers when possible - they complicate migration logic

## IIS Application Upgrades
* Make use of IIS / ASP "pre-compilation" to minimze time after a deploy before the first user can login
* Execute a test login of newly deployed code to warm up the IIS in-memory cache
* Make proper use of HTTP caching for shared libraries, clients don't want to re-download code that did not change
