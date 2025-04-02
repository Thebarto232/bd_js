show databases;
use node_adso2894667;

create table categorias (
id int auto_increment primary key,
nombre varchar(260) null ,
descripcion text null,
create_at timestamp default current_timestamp,
update_at timestamp default current_timestamp on update current_timestamp
);

create table productos(
id int auto_increment primary key,
nombre varchar(255) not null,
descripcion text,
precio decimal(10,2),
categorias_id int,
create_at timestamp default current_timestamp,
update_at timestamp default current_timestamp on update current_timestamp,
foreign key (categorias_id) references categorias (id) on delete set null
);


insert into categorias(nombre,descripcion) values("Categoria 1","Esta es la categoria 1"),
("Categoria 2","Esta es la categoria 2");


update categorias  set nombre="buen dia" where id=4;
 select *from categorias;

show tables;
UPDATE categorias SET nombre = 'ed' ,descripcion = 'xd' WHERE id = 1