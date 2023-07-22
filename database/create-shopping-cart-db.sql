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
('Peanuts'),
('Gluten'),
('Dairy'),
('Soy'),
('Eggs'),
('Tree Nuts'),
('Fish'),
('Shellfish'),
('No Allergens');

-- Insert sample data into the Product table
INSERT INTO Product (Title, Price, Description, ImageURL) VALUES
('Organic Apples', 1.99, 'Fresh organic apples from local orchard', 'https://example.com/apples.jpg'),
('Premium Salmon Fillet', 12.99, 'High-quality salmon fillet, rich in omega-3', 'https://example.com/salmon.jpg'),
('Whole Grain Bread', 3.49, 'Healthy whole grain bread', 'https://example.com/bread.jpg'),
('Fresh Spinach', 2.99, 'Tender and nutritious spinach', 'https://example.com/spinach.jpg'),
('Grass-Fed Beef', 9.99, 'Lean and flavorful grass-fed beef', 'https://example.com/beef.jpg'),
('Artisanal Pasta', 4.99, 'Handcrafted Italian pasta', 'https://example.com/pasta.jpg'),
('Cheddar Cheese Block', 5.99, 'Aged cheddar cheese from local dairy', 'https://example.com/cheese.jpg'),
('Free-Range Eggs', 3.29, 'Free-range eggs from happy hens', 'https://example.com/eggs.jpg'),
('Quinoa Salad', 6.99, 'Nutritious quinoa salad with fresh vegetables', 'https://example.com/quinoa_salad.jpg'),
('Organic Almond Butter', 7.49, 'Smooth and creamy almond butter', 'https://example.com/almond_butter.jpg'),
('Premium Extra Virgin Olive Oil', 9.99, 'High-quality cold-pressed olive oil', 'https://example.com/olive_oil.jpg'),
('Wild-Caught Atlantic Cod', 11.99, 'Delicious and flaky wild-caught cod', 'https://example.com/cod.jpg'),
('Organic Quinoa', 4.49, 'Nutritious and versatile organic quinoa', 'https://example.com/quinoa.jpg'),
('Assam Black Tea', 3.79, 'Rich and flavorful Assam black tea', 'https://example.com/black_tea.jpg'),
('Organic Baby Spinach', 3.99, 'Fresh and tender organic baby spinach', 'https://example.com/baby_spinach.jpg'),
('Premium Colombian Coffee Beans', 8.49, 'Rich and aromatic coffee beans from Colombia', 'https://example.com/coffee_beans.jpg');

-- Insert sample data into the Cart table
INSERT INTO Cart VALUES
(),
();

-- Insert sample data into the CartItem table
INSERT INTO CartItem (Quantity, CartID, ProductID) VALUES
(2, 1, 1),
(1, 1, 2),
(3, 2, 1);

-- Insert sample data into the Product_Allergen table
INSERT INTO Product_Allergen (ProductID, AllergenID) VALUES
(1, 9), -- Organic Apples, No allergens
(2, 7), -- Premium Salmon Fillet, Fish
(3, 2), -- Whole Grain Bread, Gluten
(4, 9), -- Fresh Spinach, No allergens
(5, 9), -- Grass-Fed Beef, No allergens
(6, 2), -- Artisanal Pasta, Gluten
(7, 3), -- Cheddar Cheese Block, Dairy
(8, 9), -- Free-Range Eggs, No allergens
(9, 9), -- Quinoa Salad, No allergens
(10, 6), -- Organic Almond Butter, Tree Nuts
(11, 9), -- Premium Extra Virgin Olive Oil, No allergens
(12, 7), -- Wild-Caught Atlantic Cod, Fish
(13, 9), -- Organic Quinoa, No allergens
(14, 9), -- Assam Black Tea, No allergens
(15, 9), -- Organic Baby Spinach, No allergens
(16, 9)  -- Premium Colombian Coffee Beans, No allergens