-- Drop the existing database if it exists
DROP DATABASE IF EXISTS shopping_cart_db;

-- Create a new database
CREATE DATABASE shopping_cart_db;

-- Switch to the newly created database
USE shopping_cart_db;

-- Drop the tables if they exist
DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Cart;
DROP TABLE IF EXISTS CartItem;
DROP TABLE IF EXISTS Allergen;
DROP TABLE IF EXISTS Product_Allergen;

-- Create the Allergen table
CREATE TABLE Allergen (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  AllergenName VARCHAR(255) NOT NULL
);

-- Create the Product table
CREATE TABLE Product (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Title VARCHAR(255) NOT NULL,
  Price FLOAT NOT NULL,
  Description TEXT,
  ImageURL VARCHAR(255)
);

-- Create the Cart table
CREATE TABLE Cart (
  ID INT PRIMARY KEY AUTO_INCREMENT
);

-- Create the User table
CREATE TABLE User (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Username VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  CartID INT,
  FOREIGN KEY (CartID) REFERENCES Cart(ID)
);

-- Create the CartItem table
CREATE TABLE CartItem (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Quantity INT NOT NULL,
  CartID INT,
  ProductID INT,
  FOREIGN KEY (CartID) REFERENCES Cart(ID),
  FOREIGN KEY (ProductID) REFERENCES Product(ID)
);

-- Create the Product_Allergen table
CREATE TABLE Product_Allergen (
  ProductID INT,
  AllergenID INT,
  FOREIGN KEY (ProductID) REFERENCES Product(ID),
  FOREIGN KEY (AllergenID) REFERENCES Allergen(ID)
);

-- Insert sample data into the Allergen table
INSERT INTO Allergen (AllergenName) VALUES
('Allergen 1'),
('Allergen 2'),
('Allergen 3'),
('Allergen 4');

-- Insert sample data into the Product table
INSERT INTO Product (Title, Price, Description, ImageURL) VALUES
('Product 1', 19.99, 'Description for Product 1', 'https://example.com/product1.jpg'),
('Product 2', 29.99, 'Description for Product 2', 'https://example.com/product2.jpg'),
('Product 3', 39.99, 'Description for Product 3', 'https://example.com/product3.jpg'),
('Product 4', 49.99, 'Description for Product 4', 'https://example.com/product4.jpg'),
('Product 5', 59.99, 'Description for Product 5', 'https://example.com/product5.jpg'),
('Product 6', 69.99, 'Description for Product 6', 'https://example.com/product6.jpg'),
('Product 7', 79.99, 'Description for Product 7', 'https://example.com/product7.jpg'),
('Product 8', 89.99, 'Description for Product 8', 'https://example.com/product8.jpg'),
('Product 9', 99.99, 'Description for Product 9', 'https://example.com/product9.jpg'),
('Product 10', 109.99, 'Description for Product 10', 'https://example.com/product10.jpg');

-- Insert sample data into the Cart table
INSERT INTO Cart VALUES
(),
();

-- Insert sample data into the User table
INSERT INTO User (Username, Password, Email, CartID) VALUES
('john_doe', 'password123', 'john@example.com', 1),
('jane_smith', 'secret456', 'jane@example.com', 2);

-- Insert sample data into the CartItem table
INSERT INTO CartItem (Quantity, CartID, ProductID) VALUES
(2, 1, 1),
(1, 1, 2),
(3, 2, 1);

-- Insert sample data into the Product_Allergen table
INSERT INTO Product_Allergen (ProductID, AllergenID) VALUES
(1, 1),
(2, 2),
(3, 1),
(4, 2),
(5, 3),
(6, 4),
(7, 1),
(8, 2),
(9, 3),
(10, 4);