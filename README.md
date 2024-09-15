# To-Do List Application

Backend made with **Node.js** using the framework **Express.js**, frontend with **HTML**, **CSS**, **JavaScript**.

## Features
- **User Registration**: Create an account with a username and a password.
- **User Login**: Log in with your data to see your shopping list.
- **Add Tasks**: Add items.
- **Delete Tasks**: Remove items.

---

## Getting Started

Make sure you have Node.js and npm:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Commands for the remaining installations:

1. Clone the repository:

   ```bash
   git clone https://github.com/De27vin/shoppingListFullStack.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install the Node.js framework Express.js:

   ```bash
   npm i express
   ```

4. Install Nodemon:

   Nodemon restarts the server for you when you save the file.

   ```bash
   npm i -g nodemon
   ```

   Add this script to `package.json` to use Nodemon with `npm start`:

   ```json
   "scripts": {
     "start": "nodemon index.js"
   }
   ```

5. Install ESLint if wanted:

   ESLint helps with unclean code and returns violated rules.

   ```bash
   npm init @eslint/config@latest
   ```

   To scan a certain file:

   ```bash
   ./node_modules/.bin/eslint [filename (for example index.js)]
   ```

6. Install bcrypt:

   Bcrypt hashes the passwords.

   ```bash
   npm i bcrypt
   ```

### Starting the server:

```bash
npm start
```

The application will run on `localhost:3000`.
