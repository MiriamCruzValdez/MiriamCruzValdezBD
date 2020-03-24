show databases;
drop database if exists iot;
create database if not exists iot;
use iot;
show tables;
use iot;

drop tables if exists usuario;
create table if not exists usuario(nombre varchar(100),
nomusu varchar(50),
correo varchar(100),
pass varchar(255) )
ENGINE=INNODB;
show tables;
desc usuario;

select *from usuario;






