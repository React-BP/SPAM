![React](./public/favicon.ico)
# SPAM : Single Page App Webstore with MongoDB
##### Brought to you by Team React BP

This is a React boilerplate single page responsive portfolio app. There are a ton of components you can use to build your own custom app. This package is bootstrapped with [Creat React App](https://github.com/facebook/create-react-app/blob/next/README.md). It utilizes CSS Grid and has components that are completely customizeable, includes a mongoDB connection to store the info of your webstore items. We also have  a seed file which when run will allow you to seed the DB with our information to properly display the application.


# Components
* Navbar
    -With Icon and Routes, Login, SignUp and Checkout
* Header
    -Large Display with Title above
* Multiple pages
    -Display items in cards that wrap the page.
* View Modals
    -Modal views of a specific item with an order button
* Checkout
    -A page to display orders and allow user to checkout. User can customize how the payment system is done from the order button
* MongoDB
    -Connecttions to the database are built in

# Folder Structure

```
README.md
spa-store
├──controllers
    ├──modelController.js
    ├──userController.js
├──models
    ├──index.js
    ├──Item.js
    ├──Order.js
    ├──users.js
├──routes
    ├──index.js
    ├──API
      ├──api.js
├──scripts
    ├──build.js
    ├──seedDB.js
    ├──start-client.js
├──.gitignore
├──nodemon.json
├──server.js
├──package.json
├──client
    ├──public
      ├──favicon.ico
      ├──index.html
      ├──manifest.json
    ├──src
      ├──Compnents
        ├──Auth
          ├──Login
          ├──Registration
        ├──Feature
        ├──Footer
        ├──Header
        ├──ItemCards
        ├──Logo
        ├──Navigation
          ├──NavigationItems
          ├──SideDrawer
          ├──Toolbar
        ├──Pages
          ├──Accessories
          ├──Boards
          ├──Clothing
          ├──Home
          ├──Wetsuits
        ├──UI
          ├──Backdrop
          ├──Button
          ├──Cart
          ├──Filter
          ├──Input
          ├──Modal
          ├──SingleItem
      ├──Container
        ├──App
        ├──Checkout
        ├──Layout
      ├──utils
      ├──Assets
        ├──Images      

```


### You're awesome! Have fun creating your React BP App.































