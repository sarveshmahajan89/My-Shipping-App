# My-Shipping-App

Welcome to the My-Shipping-App!
This application depicts the simplest way on how to use filters, pagination, sorting, and local storage mechanism in reactjs

## Using this project

Clone the project

```bash
cd My-Shipping-App
npm install
```

You can start the server on its own with the command, this will run both the servers hosted at 3000 (JSON DB), and 3001 (React App):

```bash
npm run app-start
```

The React application will run on port 3000 and the server port 3001.
**Your goal is to set up an application which enables the user to view and manage shipments.**

# Business need

The main goal is for the user to check the shipments at a glance. This allows users to take faster decisions and plan ahead of time.

Providing information to the customer increases transparency and reduces communication issues.

# Use cases

- The user shall be able to:
  - See shipments in pages of 20 elements per page
  - Search by shipment id
  - Sort by different fields (e.g. id, name) in ascending/descending order
  - View the shipment information on a separate shipment details page
  - Update the shipment name (should persist when the page is reloaded)

The interactions should not refresh the page.

# How to run API server

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

```
yarn or npm install .
yarn server or npm run server
```

Check [json-server](https://github.com/typicode/json-server) for more information.
