const express = require('express');
const cors = require('cors');

const server = express();

server.listen(3333, () => {
    console.log('Servidor tá on na porta 3333');
})
