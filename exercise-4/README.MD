#Exercise 4

* This exercise was completed using MySQL 5

* Given the following tables and associated fields:
```
Person : PersonId, NameFirst, NameLast
Order  : OrderId, PersonId, OrderDateTime
```

Write a SQL query that retrieves every person and their most recent  
order (if one exists).  

Results should look something like this:

PersonId|NameFirst|NameLast|LastOrderId|LastOrderDateTime
--------|---------|--------|-----------|------------------
1|James|Doe|9843|1/1/2013 9:01 AM
2|John|Doe|NULL|NULL


In the above results, the first is a person with at least one order, the second row is a person without an order.
