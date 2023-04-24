# Pinterest Clone

Welcome to the Pinterest Clone, a full-stack MERN (MongoDB, Express.js, React.js, Node.js) app that allows users to create, view and manage their own boards and pins. The project was created as a capstone project in a bootcamp and is a clone of the popular social media site Pinterest. The project was developed to showcase the developers skillset and interests in social media type of development.

Duration: 2 week long sprints (2 weeks)

## Deployment

This project is deployed on [Render](https://render.com/) at the following link:

https://pinterest-clone-5q1t.onrender.com/pins

## Wireframes

![Pinterest-Wireframe](https://user-images.githubusercontent.com/99232536/212946864-3244e3b6-a27c-4914-8b32-4eea27dd9dda.png)

## Features
- Sign up/login functionality (with basic authorization)
- Create, view, and manage boards and pins
- CRUD functionality for boards and pins
- Express validator to check user input
- Express static middleware for handling paths
- React Router for client-side routing
- React Hooks for state management
- Body parser for handling incoming JSON requests
- CSS styling for a visually pleasing user interface

## Technologies used
- HTML, CSS, JavaScript
- MongoDB - A document-oriented NoSQL database
- Express.js - A framework for building web applications
- React.js - A JavaScript library for building user interfaces
- Node.js - A JavaScript runtime

### Models
- User
- Pin

### Controllers
- Pins
- User

### Routes
- Pins
- User

## CRUD Operations
The app provides the following CRUD operations:

| Operation    | API route         | HTTP method |
| ------------ | ----------------- | ----------- |
| Fetch all pins | /api/pins         | GET         |
| Create a pin  | /api/pins         | POST        |
| Update a pin  | /api/pins/:id/edit | PUT         |
| Delete a pin  | /api/pins/:id     | DELETE      |
| Fetch a pin   | /api/pins/:id     | GET         |

You can see the operation's routes and methods which will be used to handle and control data in the server side of the app.

## Getting started

To get started, you will need to have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your system.

1. Clone the repository
git clone https://github.com/yourusername/pinterest-clone.git

2. Install dependencies
npm install

3. Start the server
npm start

4. Visit http://localhost:3000 to view the app in your browser.

## Dependencies
    "@emotion/react": "^11.10.5",
    "@emotion/styled": "^11.10.5",
    "@mui/icons-material": "^5.11.0",
    "@mui/material": "^5.11.1",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.1",
    "bcrypt": "^5.1.0",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "http-proxy-middleware": "^2.0.6",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.8.0",
    "morgan": "^1.10.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.5.0",
    "react-scripts": "5.0.1",
    "serve-favicon": "^2.5.0",
    "web-vitals": "^2.1.4"

## Troubleshooting
If `npm run build` fails to minify, you can refer to the [troubleshooting section](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) of the Create React App documentation.
