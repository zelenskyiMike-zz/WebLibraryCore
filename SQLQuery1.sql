DBCC CHECKIDENT ('Books', RESEED, 0);
GO

select * from Books


delete Books where BookID = 2

insert into Books 
values('Book1',1,1998)

insert into Books 
values('Book2',1,1998)
insert into Books 
values('Book3',2,1988)
insert into Books 
values('Book4',3,1978)
insert into Books 
values('Book5',2,1968)
insert into Books 
values('Book6',1,1958)
insert into Books 
values('Book7',2,1948)
insert into Books 
values('Book8',3,1938)
insert into Books 
values('Book9',2,1928)


insert into Authors
values('Толстой Л.Н.')
insert into Authors
values('Тонкой Н.Л.')
insert into Authors
values('Средний Л.Л')