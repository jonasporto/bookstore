create table books(id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description TEXT, price DECIMAL(10,2));

insert into books(title, description, price) value ('book 1', 'description 1', 39.90);
insert into books(title, description, price) value ('book 2', 'description 2', 59.90);
insert into books(title, description, price) value ('book 3', 'description 3', 19.90);