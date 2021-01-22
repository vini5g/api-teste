const ProvidersModel = require('../models/providers.model');
const handleError = require('../helpers/error.helper');
const view = require('../views/users.view');
const { render } = require('../views/users.view');

module.exports = {
    async createProvider(provider) {
        try {
            const providerCreated = await ProvidersModel.create(provider);
            return view.render(providerCreated);
        } catch (error) {
            throw handleError('failed to create new provider', 400, error.errors);
        }
    },

    async getProvider(id) {
        try {
            if (id) {
                const provider = await ProvidersModel.findOne({
                    where: { id }
                });
                return view.render(provider);
            } else {
                const providers = await ProvidersModel.findAll();
                return view.renderMany(providers);
            }
        } catch (error) {
            throw handleError('failed to get provider', 400, error.errors);
        }
    },

    async updateProvider(provider, id) {
        try {
            const providerUpdated = await ProvidersModel.update(provider, {
                where: { id }
            });
            return providerUpdated;
        } catch (error) {
            throw handleError('failed to update this provider', 400, error.errors);
        }
    },

    async deleteProvider(id) {
        try {
            await ProvidersModel.destroy({
                where: { id }
            });
            return `Provider deleted successfully`;
        } catch (error) {
            throw handleError('failed to delete this provider', 400, error.errors);
        }
    }
}