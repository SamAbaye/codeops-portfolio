# Fake Dishes API

A simple REST API for practicing CRUD.

## Base URL

`http://localhost:3000/dishes`

## Requirements
    Node.js installed

    json-server installed

    db.json file in your project

# Start the server:

npx json-server --watch db.json --port 3000

# Before running the project, ensure that:

    json-server is running on port 3000

    The db.json file contains a dishes collection

    Your HTML includes an element with id="list"

    JavaScript is enabled in the browser

# Self-Check List.

    The API server starts successfully.

    Visiting http://localhost:3000/dishes returns JSON data.

    The page initially displays "Loading...".

    All dishes are rendered as list items.

    Each item shows Name — Price ETB.

    An error message appears if the API is unavailable.

    No errors appear in the browser console during normal operation.