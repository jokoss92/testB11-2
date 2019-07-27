CREATE database DumbWaysTes;
​
USE DumbWaysTes;
​
CREATE table cities(
    id INT(2) PRIMARY KEY,
    name VARCHAR(18)
    ) ;
​
CREATE table users(
    id INT(2) PRIMARY KEY,
    full_name VARCHAR(18),
    date_of_birth_id INT(2),
    phone_number VARCHAR(15),
    address TEXT(30),
    last_education ENUM,
    religion ENUM 
    ) ;
​
CREATE table hobbies(
    id INT(2) PRIMARY KEY,
    full_name VARCHAR(18)
    ) ;