const ClientsService = require('../services/clients.serices');

module.exports = {
    create(req, res) {
        const { nome, email, telefone, caracteristicas } = req.body;
        ClientsService.createClient({ nome, email, telefone, caracteristicas }) 
            .then(client => {
                res.status(201).json(client);
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    },

    get(req, res) {
        const { id } = req.params;
        if (id) {
            ClientsService.getClient(id)
                .then(client => {
                    res.status(200).json(client);
                })
                .catch(error => {
                    console.error(error);
                    res.status(error.status).send(error);
                })
        } else {
            ClientsService.getClient()
                .then(clients => {
                    res.status(200).json(clients);
                })
                .catch(error => {
                    console.error(error);
                    res.status(error.status).send(error);
                })
        }
    },

    update(req, res) {
        const data = req.body;
        const { id } = req.params;
        ClientsService.updateClient(data, id)
            .then(client => {
                res.status(200).json(client);
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    },

    delete(req, res) {
        const { id } = req.params;
        ClientsService.deleteClient(id)
            .then(client => {
                res.status(200).json(client);
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    }
}