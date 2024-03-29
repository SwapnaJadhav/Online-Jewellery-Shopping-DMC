create database DmcProjectDb;

use DmcProjectDb;

-- 1. users table
create table users(
	uid int primary key auto_increment,
	uname varchar(20),
	role varchar(10),
	mobile varchar(15),
	email varchar(50),
	password varchar(100),
	address varchar(200)
	);

insert into users values(
	1, 'admin', 'admin', '', 'admin@gmail.com', 'admin', ''
	);
insert into users values(
	0, 'customer1', 'customer', '9999999999', 'user1@gmail.com', 'user1', 'user 1 ka address'
	);
insert into users values(
	0, 'customer2', 'customer', '8888888888', 'user2@gmail.com', 'user2', 'user 2 ka address'
	);

-- 2. products table
create table products (
	pid int primary key auto_increment,
	pname varchar(50),
	price double,
	image varchar(100),
	cid int,
	sid int,
	foreign key(cid) references category(cid),
	foreign key(sid) references subcategory(sid)
	);

-- with image
insert into products values
	( 0, 'Gold Neckless', 80000.0, 'diamondEarring.png', 1, 1 ),
	( 0, 'Gold Ring', 60000.0, 'goldRing.webp', 1, 2 ),
	( 0, 'Gold Earring', 40000.0, 'goldEarring.webp', 1, 3 ),
	( 0, 'Gold Nose Ring', 20000.0, 'goldNosering.webp', 1, 4 );

-- without image (not used)
insert into products values
	( 0, 'Silver Neckless', 60000.0, 2, 1 ),
	( 0, 'Silver Ring', 40000.0, 2, 2 ),
	( 0, 'Silver Earring', 20000.0, 2, 3 ),
	( 0, 'Silver Nose Ring', 10000.0, 2, 4 );
insert into products values
	( 0, 'Diamond Neckless', 100000.0, 3, 1 ),
	( 0, 'Diamond Ring', 80000.0, 3, 2 ),
	( 0, 'Diamond Earring', 70000.0, 3, 3 ),
	( 0, 'Diamond Nose Ring', 60000.0, 3, 4 );
insert into products values
	( 0, 'Platinum Neckless', 90000.0, 4, 1 ),
	( 0, 'Platinum Ring', 70000.0, 4, 2 ),
	( 0, 'Platinum Earring', 60000.0, 4, 3 ),
	( 0, 'Platinum Nose Ring', 50000.0, 4, 4 );

-- 3. category table
create table category ( 
    cid int primary key, cname varchar(20) 
    );

insert into category values ( 1, 'Gold' );
insert into category values ( 2, 'Silver' );
insert into category values ( 3, 'Diamond' );
insert into category values ( 4, 'Platinum' );


-- 4. subcategory table
create table subcategory ( 
    sid int primary key, sname varchar(20) 
    );

insert into subcategory values ( 1, 'Necklace' );
insert into subcategory values ( 2, 'Ring' );
insert into subcategory values ( 3, 'Earring' );
insert into subcategory values ( 4, 'Nose Ring' );

-- 5. Order
-- - o_id, o_date, o_amount

-- ============================================================================

-- 6. Payment
-- -pay_id, status, pay_date, pay_amountselect * from products

-- ============================================================================

-- 7. Cart
-- cart_id, qty, p_id(FK) [not applicable]
-- create table cart(
-- 	cart_id int primary key auto_increment,
-- 	uid int,
-- 	pid int,
-- 	qty int,
-- 	price double,
-- 	total double
-- );

CREATE TABLE cart (
    cartId INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    qty INT DEFAULT 1,
	total double,
    FOREIGN KEY (pid) REFERENCES products(pid)
);

-- manual insert for testing
-- insert into cart values (0, 0, 1, 80000, 0);
-- insert into cart values (0, 3, 2, 5, 60000, 300000);

-- ============================================================================

-- 8. Wishlist
-- - w_id, qty, p_id(FK)

CREATE TABLE wishlist (
    wid INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    FOREIGN KEY (pid) REFERENCES products(pid)
);