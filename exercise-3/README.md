#Exercise 3
How would you completely eliminate application downtime during  
unplanned downtime (e.g. drive failure)?  

Assume a setup as described in Exercise 1 above.    
Please make sure to include what tools you would  
use and how you would utilize them.

## Virtual Images
* Standard deployment images should be made of IIS, Database, and other roles
* In the event of a failure, a new VM can be launched and provisioned quickly

## Disk Drives
* Utilize RAID arrays to ensure data is spread across multiple Drives
* Disk-Level backups should be taken of critical system files

## Web Server
* Use a load balancer to balance IIS traffic across multiple NodeJS
* Load balancer can alert to a potential IIS failure

## SQL
* Ensure multiple SQL databases are running
* Backup SQL databases
* Use Full Recovery mode in SQL so all transaction logs are backed up

## Data Centers
* Run servers in multiple data centers across the globe  
   --> This would pending review by legal team on where health data can be stored
