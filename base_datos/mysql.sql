-- cramos usuario para idenficar y podermanipularlo
CREATE USER 'johan_adso2894667'@`localhost` IDENTIFIED BY
'AprendiT2025';

create database node_adso2894667;
grant all on  node_adso2894667.* to 'johan_adso2894667'@`localhost`;

flush privileges;
