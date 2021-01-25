const server = require('./src/app');
require('./src/configs/dotenv.config');

const PORT = (process.env.PORT) ? process.env.PORT : 3000;

server.listen(PORT, () => {
    console.log(`Servidor tá on na porta ${PORT}`);
})
