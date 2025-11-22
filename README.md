 SHEIN India – Cypress Automation Project
 ----------------------------------------

This project contains automated test scripts for the SHEIN India website using Cypress and JavaScript.
The automation covers essential e-commerce flows like Login, Search, and Add to Cart.


Project Overview
----------------

The goal of this project is to automate the basic but important user journeys of an e-commerce platform:

 USER LOGIN,
 PRODUCT SEARCH,
 ADDING ITEM TO CART,

The scripts are written using Cypress, following a clean and reusable Page Object Model (POM) structure.


Tech Stack
----------
 Automation Tool: Cypress,
 Language: JavaScript,
 Design Pattern: Page Object Model (POM),
 Reports: Cypress Dashboard / HTML Reports 


Features Automated
-------------------
  1. Login Functionality
 -Navigates to the login page
 -Enters email & password
 -Validates successful login

  2. Search Functionality
  -Searches for products,
  -Validates search results,
  -Clicks and opens product details

  3. Add to Cart
  -Selects a product,
  -Adds it to the cart,
  -Verifies the item is added successfully


 Project Structure
 -----------------
shein-cypress-automation
│
├── cypress
│   ├── e2e
│   │   ├── loginTest.cy.js
│   │   ├── searchTest.cy.js
│   │   └── cartTest.cy.js
│   │
│   ├── pages
│   │   ├── loginPage.js
│   │   ├── searchPage.js
│   │   └── cartPage.js
│   │
│   ├── fixtures
│   │   └── testData.json
│   │
│   └── screenshots
│
└── cypress.config.js
└── README.md


 How to Run Tests
 ----------------
 
Step 1: Install Dependencies
npm install

Step 2: Open Cypress Test Runner
npx cypress open

Step 3: Run Tests in Headless Mode
npx cypress run


Configuration
-------------

The base URL and other config settings can be updated in:

cypress.config.js


Test data such as email, password, and search keywords are stored in:

/fixtures/testData.json


 Reports & Screenshots
 ---------------------

After execution, Cypress automatically generates:

 Screenshots (on failure),
 Videos

 Available inside:
 /cypress/screenshots,
 /cypress/videos


Project Outcome
---------------

This project demonstrates:

 Practical understanding of Cypress,

 Writing clean, modular tests using POM,

 Automation of real-world e-commerce flows,

 Debugging and validation abilities,

 Good folder organization and maintainable code structure
 

 Author : Rohit Jaiswal
 ---------------------

QA Engineer | Manual + Automation | Cypress | JavaScript
