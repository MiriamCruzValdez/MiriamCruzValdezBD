show databases;
drop database if exists conexion;
create database if not exists conexion;
use conexion;
show tables;
use conexion;

drop tables if exists usuario;
create table if not exists usuario(nombre varchar(100), nomuser varchar(80), correo varchar(100), pass varchar(200) )
ENGINE=INNODB;
show tables;
desc usuario;

select *from usuario;






