set foreign_key_checks = 0;

delete from contact;

set foreign_key_checks = 1;

alter table contact auto_increment = 1;

insert into contact (id,name,email,phone,favorite) values (1,"Talisson Melo","talisson.cursos@gmail.com","9231-9208",true);
insert into contact (id,name,email,phone,favorite) values (2,"Tales Melo","talisson@gmail.com","9231-0000",false);