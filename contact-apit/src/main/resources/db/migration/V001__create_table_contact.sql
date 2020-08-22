create table contact (
	id bigint not null auto_increment,
	name varchar(200) not null,
	email varchar(200) not null,
	phone varchar(200),
	favorite boolean,
	
	primary key (id)
)engine = InnoDB default charset=utf8;