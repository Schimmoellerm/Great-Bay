DROP DATABASE IF EXISTS greatBayDB;
-- Creates the "animals_db" database --
CREATE DATABASE greatBayDB;

-- Makes it so all of the following code will affect animals_db --
USE greatBayDB;

CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(50) NULL,
    minBid INT (1000) NULL,
    currentBid INT (1000) NULL,
    PRIMARY KEY (id)
);

INSERT INTO items
    (item, minBid, currentBid)
VALUES  
    ('TV', 50, 50),
    ('Toaster', 100, 100),
    ('Silverware Set', 25, 25);
select * from items

