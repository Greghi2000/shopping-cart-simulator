-- Drop the existing database if it exists
DROP DATABASE IF EXISTS shopping_cart_db;

-- Create a new database
CREATE DATABASE shopping_cart_db;

-- Switch to the newly created database
USE shopping_cart_db;

-- Drop the tables if they exist
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
  ImageURL VARCHAR(1000)
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
('Organic Apples', 1.99, 'Fresh organic apples from local orchard', 'https://www.eatingwell.com/thmb/Z1z7DWGLIdYNZ8dQk1zSPTvT4kg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-apples-41deb698ccc4481fbe7eee1bac72795f.jpg'),
('Premium Salmon Fillet', 12.99, 'High-quality salmon fillet, rich in omega-3', 'https://www.justonecookbook.com/wp-content/uploads/2022/03/How-to-Cut-Salmon-into-Japanese-Style-Fillet-7100-I-500x500.jpg'),
('Whole Grain Bread', 3.49, 'Healthy whole grain bread', 'https://static01.nyt.com/images/2017/02/21/dining/21COOKING-NO-KNEAD-WHEAT-BREAD2/21COOKING-NO-KNEAD-WHEAT-BREAD2-articleLarge.jpg'),
('Fresh Spinach', 2.99, 'Tender and nutritious spinach', 'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cq=85%2Cwidth=1200/wp-content/uploads/fresh-spinach-day.jpg'),
('Grass-Fed Beef', 9.99, 'Lean and flavorful grass-fed beef', 'https://www.jpmeatsandmore.co.uk/wp-content/uploads/2021/10/Beef-Shin-e1634225799170.jpg'),
('Artisanal Pasta', 4.99, 'Handcrafted Italian pasta', 'https://playswellwithbutter.com/wp-content/uploads/2021/10/How-to-Make-Homemade-Pasta-Fresh-Pasta-Recipe-64-960x1440.jpg'),
('Cheddar Cheese Block', 5.99, 'Aged cheddar cheese from local dairy', 'https://m.media-amazon.com/images/I/71Ueg33Qv0L.jpg'),
('Free-Range Eggs', 3.29, 'Free-range eggs from happy hens', 'https://carriageworks.com.au/wp-content/uploads/Hilltops-1.jpg'),
('Organic Almond Butter', 7.49, 'Smooth and creamy almond butter', 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-07/almond-butter-te-220718-679eaa.jpg'),
('Premium Extra Virgin Olive Oil', 9.99, 'High-quality cold-pressed olive oil', 'https://www.heinens.com/wp-content/uploads/2021/06/Olive-Oil-Header_800x550.jpg'),
('Wild-Caught Atlantic Cod', 11.99, 'Delicious and flaky wild-caught cod', 'https://media-cdn2.greatbritishchefs.com/media/zf1lnq0c/img23561.jpg'),
('Organic Quinoa', 4.49, 'Nutritious and versatile organic quinoa', 'https://www.realfoods.co.uk/ProductImagesID/835_1.jpg'),
('Assam Black Tea', 3.79, 'Rich and flavorful Assam black tea', 'https://www.frontiercoop.com/sites/default/files/acquiadam/2021-12/1_Frontier-Assam-Tea-FT-Organic-2821-bowl.jpg'),
('Organic Baby Spinach', 3.99, 'Fresh and tender organic baby spinach', 'https://www.abelandcole.co.uk/media/480_14440_m.jpg'),
('Premium Colombian Coffee Beans', 8.49, 'Rich and aromatic coffee beans from Colombia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/640px-Roasted_coffee_beans.jpg');

-- Insert sample data into the Cart table
INSERT INTO Cart VALUES
(),
();

-- Insert sample data into the CartItem table
INSERT INTO CartItem (Quantity, CartID, ProductID) VALUES
(2, 1, 1),
(1, 1, 2);

-- Insert sample data into the Product_Allergen table
INSERT INTO Product_Allergen (ProductID, AllergenID) VALUES
(1, 9), -- Organic Apples, No allergens
(2, 7), -- Premium Salmon Fillet, Fish
(3, 2), -- Whole Grain Bread, Gluten
(4, 9), -- Fresh Spinach, No allergens
(5, 9), -- Grass-Fed Beef, No allergens
(6, 2), -- Artisanal Pasta, Gluten
(6, 5), -- Artisanal Pasta, Eggs
(7, 3), -- Pamesan Cheese Block, Dairy
(8, 5), -- Free-Range Eggs, Eggs
(9, 6), -- Organic Almond Butter, Tree Nuts
(10, 9), -- Premium Extra Virgin Olive Oil, No allergens
(11, 7), -- Wild-Caught Atlantic Cod, Fish
(12, 9), -- Organic Quinoa, No allergens
(13, 9), -- Assam Black Tea, No allergens
(14, 9), -- Organic Baby Spinach, No allergens
(15, 9)  -- Premium Colombian Coffee Beans, No allergens