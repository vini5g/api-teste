const Endpoints = require('../models/endpoints.model');
const handleError = require('../helpers/error.helper');
const view = require('../views/users.view');

const connection = require('../configs/db.connection');

module.exports = {
    async get(table, id) {
        try {
            if (!table) {
               return handleError(`failed to get`, 400, [{message: "table not found", type: "invalid parameters"}]);
            } 

            const { nome_tabela } = await Endpoints.findOne({
                where: { nome: table }
            });

            if (id) {
                const selected = await connection.query(`SELECT * FROM ${nome_tabela} WHERE id='${id}';`);
                return view.renderMany(selected[0]);
            } else {
                const selected = await connection.query(`SELECT * FROM ${nome_tabela};`);
                return view.renderMany(selected[0]);
            }
        } catch (error) {
            throw handleError(`failed to get from table ${table}`, 400, error.errors);
        }
    },

    async post(table, data) {
        try {
            if (!table) {
                return handleError(`failed to post`, 400, [{message: "table not found", type: "invalid parameters"}]);
            }

            const { nome_tabela } = await Endpoints.findOne({
                where: { nome: table }
            });

            let query = `INSERT INTO ${nome_tabela} VALUES(`;

            Object.values(data).map((item, index, array) => {
                if (index == array.length - 1) {
                    query += `'${item}');`;
                } else {
                    query += `'${item}',`;
                }
            });
            const dataCreated = await connection.query(query);
            return dataCreated[0];
        } catch (error) {
            throw handleError(`failed post in table ${table}`, 400, error.errors);
        }
    },

    async put(table, id, data) {
        try {
            if (!table) {
                return handleError(`failed to put`, 400, [{message: "table not found", type: "invalid parameters"}]);
            }

            if (!id) {
                return handleError(`failed to put`, 400, [{message: "identifier not found", type: "invalid parameters"}]);
            }

            const { nome_tabela } = await Endpoints.findOne({
                where: { nome: table }
            });

            const selected = await connection.query(`SELECT * FROM ${nome_tabela} WHERE id='${id}';`);

            if (selected[0].length == 0) {
                return handleError(`failed to put`, 400, [{message: "not found data with this id", type: "invalid parameters"}]);
            }

            let query = `UPDATE ${nome_tabela} SET `;

            Object.keys(data).map((item, index, array) => {
                if (index == array.length - 1) {
                    query += `${item}='${data[item]}'`;
                } else {
                    query += `${item}='${data[item]}', `;
                }
            })

            query += ` WHERE id='${id}'`;
            const dataUpdated = await connection.query(query);
            return dataUpdated[0].serverStatus;
        } catch (error) {
            throw handleError(`failed put in table ${table}`, 400, error.errors);
        }
    },

    async delete(table, id) {
        try {
            if (!table) {
                return handleError(`failed to delete`, 400, [{message: "table not found", type: "invalid parameters"}]);
            }

            if (!id) {
                return handleError(`failed to delete`, 400, [{message: "identifier not found", type: "invalid parameters"}]);
            }

            const { nome_tabela } = await Endpoints.findOne({
                where: { nome: table }
            });

            const delected = await connection.query(`DELETE FROM ${nome_tabela} WHERE id='${id}';`);
            return delected[0].serverStatus;
        } catch (error) {
            throw handleError(`failed delete in table ${table}`, 400, error.errors);
        }
    }
}