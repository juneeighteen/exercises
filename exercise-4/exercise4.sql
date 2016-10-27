CREATE TABLE Person
    (`PersonId` int,
     `NameFirst` varchar(30) ,
     `NameLast` varchar(30) )
;

CREATE TABLE Orders
    (`OrderId` int,
     `PersonId` int,
     `OrderDateTime` datetime )
;


insert into Person (PersonId, NameFirst, NameLast) values (1, 'John', 'Doe');
insert into Person (PersonId, NameFirst, NameLast) values (2, 'Jane', 'Doe');
insert into Person (PersonId, NameFirst, NameLast) values (3, 'Drew', 'Easley');

insert into Orders (OrderId, PersonId, OrderDateTime) values (1,1,'2013-01-01 09:32:00');
insert into Orders (OrderId, PersonId, OrderDateTime) values (2,1,'2014-02-03 10:05:27');
insert into Orders (OrderId, PersonId, OrderDateTime) values (3,3,'2016-10-27 12:13:13');

select p.PersonId, p.NameFirst, p.NameLast, o.OrderId, LastOrderDateTime
    from Person p left join
    (select MAX(OrderId) as OrderId, PersonId, MAX(OrderDateTime) as LastOrderDateTime from Orders group by PersonId) o
    on p.PersonId=o.PersonId;
