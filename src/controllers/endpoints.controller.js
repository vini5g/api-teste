const EndpointServices = require('../services/endpoints.services');
const generateID = require('../utils/generateId');

module.exports = {
    get(req, res) {
        const { table, id } = req.params;

        EndpointServices.get(table, id)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    },

    post(req, res) {
        const { table } = req.params;
        const data = req.body;
        const id = generateID();
       
        EndpointServices.post(table, { id, ...data })
            .then(data => {
                EndpointServices.get(table, id)
                    .then(user => {
                        res.status(201).json(user);
                    })
                    .catch(error => {
                        console.error(error);
                        res.status(error.status).send(error);
                    })
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    },

    put(req, res) {
        const { table, id } = req.params;
        const data = req.body;
        EndpointServices.put(table, id, data)
            .then(result => {
                if (result != 2) res.status(400).send(result);
                
                EndpointServices.get(table, id)
                    .then(user => {
                        res.status(200).json(user);
                    })
                    .catch(error => {
                        console.error(error);
                        res.status(error.status).send(error);
                    })
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    },

    delete(req, res) {
        const { table, id } = req.params;
        EndpointServices.delete(table, id)
            .then(result => {
                if (result != 2) res.status(400).send(result);
                res.status(200).json('Deleted successfully');
            })
            .catch(error => {
                console.error(error);
                res.status(error.status).send(error);
            })
    }
}