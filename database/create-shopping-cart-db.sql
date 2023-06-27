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

-- Create the User table
CREATE TABLE User (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Username VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL
  CartID INT,
  FOREIGN KEY (CartID) REFERENCES Cart(ID)
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
  ID INT PRIMARY KEY AUTO_INCREMENT,
  TotalPrice FLOAT NOT NULL,
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

-- Insert sample data into the User table
INSERT INTO User (Username, Password, Email) VALUES
  ('john_doe', 'password123', 'john@example.com'),
  ('jane_smith', 'secret456', 'jane@example.com');

-- Insert sample data into the Product table
INSERT INTO Product (Title, Price, Description, ImageURL) VALUES
  ('Product 1', 19.99, 'Description for Product 1', 'https://example.com/product1.jpg'),
  ('Product 2', 29.99, 'Description for Product 2', 'https://example.com/product2.jpg');

-- Insert sample data into the Cart table
INSERT INTO Cart (TotalPrice) VALUES
  (0),
  (0);

-- Insert sample data into the CartItem table
INSERT INTO CartItem (Quantity, CartID, ProductID) VALUES
  (2, 1, 1),
  (1, 1, 2),
  (3, 2, 1);
