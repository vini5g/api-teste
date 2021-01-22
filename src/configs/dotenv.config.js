const dotenv = require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? "env.development" : ".env"
});

module.exports = dotenv;