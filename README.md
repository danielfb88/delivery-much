<h1 align="center">Delivery Much - Challenge</h1>

# Step 1
# Install dependences
```bash
$ npm i
```

# Step 2
# Environment vars
- Copy the `.env.example` file and rename to `.env`
- Set `GIPHY_API_KEY` with your Giphy api key
- You don't need to change the others env variables

# Step 3
## Running tests locally
```bash
$ npm test
```
#### or

## Running tests using Docker
```bash
$ npm run docker:test
```

# Step 4
## Running locally
```bash
$ npm run dev
```
#### or

## Running using Docker
```bash
$ npm run docker:dev
```

# Step 5
## Sending requests
```bash
$ curl --location --request GET 'http://localhost:3000/recipes/?i=tomato,onion,cheese'
```
#### or

Send a GET request to:
```
http://localhost:3000/recipes/?i=tomato,onion,cheese
```

# Swagger documentation
Swagger documentation is available in: 
```
http://localhost:3000/docs
```

# Techinical specifications
This project uses:
  - Typescript;
  - Express.js
  - Code linter (Eslint);
  - Commit message linter (git-commit-msg-linter); 
  - Code formatter (Prettier); 
  - Git hooks (Husky); 
  - TDD (Jest, Supertest)
  - Validator (express-validator)
  - Swagger
  - Clean Code
  - SOLID principles
    - Single-responsability Principle
    - Open-closed Principle
    - Liskov Substiton Principle
    - Interface Segregation Principle
    - Dependency Inversion Principle

# Author
Name: Daniel Bonfim <br />
Email: daniel.fb88@gmail.com <br />
Linkedin: https://www.linkedin.com/in/daniel-bonfim-b730b739/ <br />
Github: https://github.com/danielfb88 <br />
Web card: http://www.danielbonfim.com.br/
