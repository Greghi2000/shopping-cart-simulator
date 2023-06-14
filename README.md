# shopping-cart-simulator
Folder Structure for Frontend:

- Actions: Functions that return actions. Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

- Components: Stateless or functional UI components.

- Reducers: Functions that take the current state and an action, and return a new state.

- Pages: Components representing entire pages in your application.

- Utils: Any utility functions, such as API calls.

- index.js: Entry point of your app.

- App.js: Main component of your app. It can include routing and global layout for your application.

- store.js: This is where you initialize your Redux store.

Folder Structure for Backend:

- Models:
-- User (if authentication is implemented)
-- Product
-- Cart
-- CartItem

- Routes:
-- User routes (Register, Login, Logout, etc. - if authentication is implemented)
-- Product routes (Get all products, Get specific product)
-- Cart routes (Get cart, Add item to cart, Remove item from cart, Update quantity)

For the class diagram:

- User:
-- ID: Integer
-- Username: String
-- Password: String
-- Email: String

- Product:
-- ID: Integer
-- Title: String
-- Price: Float
-- Description: String
-- ImageURL: String

- Cart:
-- ID: Integer
-- UserID: Integer (Foreign key)
-- TotalPrice: Float

- CartItem:
-- ID: Integer
-- CartID: Integer (Foreign key)
-- ProductID: Integer (Foreign key)
-- Quantity: Integer
