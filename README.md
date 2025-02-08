# Missing Error Handling in Express.js Route

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid inputs.  The `bug.js` file shows the problematic code, while `bugSolution.js` presents a corrected version.

## Problem

The `/users/:id` route attempts to parse the user ID from the URL parameters. It does not handle the following scenarios:

* `req.params.id` is not a valid number (e.g., contains non-numeric characters).
* The user with the given ID does not exist in the database or data source.

These issues can cause unexpected errors and crashes within the application.

## Solution

The `bugSolution.js` file addresses this by adding comprehensive error handling.  It uses `isNaN` to check for valid numeric input and includes logic to handle cases where a user might not be found.  Appropriate HTTP status codes (400 for bad request and 404 for not found) are used to signal the type of error.