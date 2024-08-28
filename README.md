Backend made with Node.js framework Express.js, frontend with HTML, CSS, JS.
You can register with a user and a password, then log in with your created login, after logging in you can add list-elements and delete them.

Commands:
// Framework for node.js.
- npm i express

// With nodemon you don't have to always restart the server after saving.
- npm i -g nodemon
  "scripts": {
    "start": "nodemon server.js"
  }

// Eslint is to scan a file for unclean code.
- npm init @eslint/config@latest
  File aussuchen: ./node_modules/.bin/eslint [filename]

// To encrypt the password.
- npm i bcrypt
