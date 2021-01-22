const ProvidersService = require('../services/providers.services');

module.exports = {
    create(req, res) {
        const { nome, email, telefone, caracteristicas } = req.body;
        ProvidersService.createProvider({ nome, email, telefone, caracteristicas }) 
            .then(provider => {
                res.status(201).json(provider);
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    },

    get(req, res) {
        const { id } = req.params;
        if (id) {
            ProvidersService.getProvider(id)
                .then(provider => {
                    res.status(200).json(provider);
                })
                .catch(error => {
                    console.error(error);
                    res.status(error.status).send(error);
                })
        } else {
            ProvidersService.getProvider()
                .then(providers => {
                    res.status(200).json(providers);
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
        ProvidersService.updateProvider(data, id)
            .then(provider => {
                ProvidersService.getProvider(id)
                    .then(provider => {
                        res.status(200).json(provider);
                    })
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    },

    delete(req, res) {
        const { id } = req.params;
        ProvidersService.deleteProvider(id)
            .then(provider => {
                res.status(200).json(provider);
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    }
}