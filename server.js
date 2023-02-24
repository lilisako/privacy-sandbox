const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

// Create a self-signed certificate for localhost
const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

// Load the .env file
require('dotenv').config();

app.use(express.static('public', {
    setHeaders: function (res, path, stat) {
        // Set the origin trial token
        res.set('Origin-Trial', process.env.TOKEN);
        res.set('X-Allow-FLEDGE', 'true');
    }
}));

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
});

app.get('/leave', (_, res) => {
    res.sendFile(path.join(__dirname + '/public/html/leave_ig.html'));
});

app.get('/publisher', (_, res) => {
    res.sendFile(path.join(__dirname + '/public/html/publisher.html'));
});

app.use('/static', express.static('static', {
    setHeaders: function (res, path, stat) {
        // Set the origin trial token
        res.set('Origin-Trial', process.env.TOKEN);
        res.set('X-Allow-FLEDGE', 'true');
    }
}));

https.createServer(options, app).listen(8080);