const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

// Put api routes here, before the "catch all" route
// const usersRouter = require('./routes/api/users'); // Can use less code and put it in like below;
app.use('/api/users', /*usersRouter*/ require('./routes/api/users'));
app.use('/api/pins', /*pinsRouter*/ require('./routes/api/pins'));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

/* ================================================================== \\
    Now the "catch all" route will serve the index.html whenever:
    A user types a path into the address bar and presses enter.
    The user refreshes the browser.
    An "external" link in an email, included on another web page, etc. to the MERN-Stack app is clicked.
    For example, if we slack the following link to a friend: https://sei-cafe.herokuapp.com/orders/new. The friend clicks on it, initiating an HTTP request to our server.
    However, the /orders/newpart of the URL is supposed to be for the client router - not the server! But there it is, and the server has to deal with it...
    The server deals with it by, thanks to the "catch all" route, sending back index.html - which is what we want.
    After index.html loads in the browser, the React app's client-side routing will render components based upon the /orders/newpath in the address bar.
// ================================================================== */

app.listen(PORT, () => {
    console.log(`Express app is running on PORT: ${PORT}`);
})