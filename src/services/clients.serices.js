const ClientsModel = require('../models/clients.model');
const handleError = require('../helpers/error.helper');

module.exports = {
    async createClient(client) {
        try {
            const clientCreated = await ClientsModel.create(client);
            return clientCreated;
        } catch (error) {
            throw handleError('failed to create new client', 400, error.errors);
        }
    },

    async getClient(id) {
        try {
            if (id) {
                const client = await ClientsModel.findOne({
                    where: { id }
                });
                return client;
            } else {
                const clients = await ClientsModel.findAll();
                return clients;
            }
        } catch (error) {
            throw handleError('failed to get client', 400, error.errors);
        }
    },

    async updateClient(client, id) {
        try {
            const clientUpdated = await ClientsModel.update(client, {
                where: { id }
            });
            return clientUpdated;
        } catch (error) {
            throw handleError('failed to update this client', 400, error.errors);
        }
    },

    async deleteClient(id) {
        try {
            await ClientsModel.destroy({
                where: { id }
            });
            return `Client deleted successfully`;
        } catch (error) {
            throw handleError('failed to delete this client', 400, error.errors);
        }
    }
}