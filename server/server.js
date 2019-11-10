const express = require('express');
const port = process.env.PORT | 3000;
var cors = require('cors');
const app = express();

app.use(cors());

const router = require('./controllers/router');
app.use(router);

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
});
