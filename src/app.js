const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((req, res, next) => {
    const error = new Error("página não encontrada");
    error.status = 404;
    next(error); 
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({mensagem: error.message});
});

module.exports = app;
