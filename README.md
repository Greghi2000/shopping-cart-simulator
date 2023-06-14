    # Shopping Cart Application
    
    A simple shopping cart application built with React, Redux, and Express.js.
    
    ## Structure
    
    This project is divided into two main parts:
    
    1. **Frontend**: The client-side of the application built with React and Redux.
    2. **Backend**: The server-side of the application built with Express.js.
    
    ---
    
    ## Frontend Structure
    
    The frontend is built using React and Redux with the following structure:
    
    ```
    /src
        /actions
            index.js
        /components
            ProductList.js
            ProductItem.js
            Cart.js
            CartItem.js
        /reducers
            products.js
            cart.js
            index.js
        /pages
            HomePage.js
            CartPage.js
        /utils
            api.js
        index.js
        App.js
        store.js
    ```
    
    **Key components of the frontend structure include:**
    
    - **Actions**: Functions that return actions. Actions are payloads of information that send data from your application to your store. 
    
    - **Components**: Stateless or functional UI components.
    
    - **Reducers**: Functions that take the current state and an action, and return a new state.
    
    - **Pages**: Components representing entire pages in your application.
    
    - **Utils**: Any utility functions, such as API calls.
    
    - **index.js**: Entry point of your app.
    
    - **App.js**: Main component of your app. It includes routing and global layout for your application.
    
    - **store.js**: This is where you initialize your Redux store.
    
    ---
    
    ## Backend Structure
    
    The backend is built using Express.js and follows the Model-View-Controller (MVC) pattern. The main models include:
    
    - User
    - Product
    - Cart
    - CartItem
    
    And the main routes are:
    
    - User routes (Register, Login, Logout, etc. - if authentication is implemented)
    - Product routes (Get all products, Get specific product)
    - Cart routes (Get cart, Add item to cart, Remove item from cart, Update quantity)
    
    ---
    
    ## Class Diagram
    
    Here is the class diagram for the backend models:
    
    ```mermaid
    classDiagram
        class User {
            +Integer ID
            +String Username
            +String Password
            +String Email
        }
        class Product {
            +Integer ID
            +String Title
            +Float Price
            +String Description
            +String ImageURL
        }
        class Cart {
            +Integer ID
            +Float TotalPrice
            --User UserID
        }
        class CartItem {
            +Integer ID
            +Integer Quantity
            --Cart CartID
            --Product ProductID
        }
        User "1" --> "*" Cart : has
        Cart "1" --> "*" CartItem : contains
        Product "1" --> "*" CartItem : contained in
    ```
    
    ---
    
    ## Running the Project
    
    **Frontend:**
    
    ```
    cd shopping-cart
    npm install
    npm start
    ```
    
    **Backend:**
    
    ```
    cd server
    npm install
    npm start
    ```
    
    ---
    
    ## Contributing
    
    Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
    
    ---
    
    ## License
    
    [MIT](https://choosealicense.com/licenses/mit/)
