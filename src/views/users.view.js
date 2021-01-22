module.exports = {
    render(user) {
        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            telefone: user.telefone,
            caracteristicas: user.caracteristicas
        }
    },
    renderMany(users) {
        return users.map(user => this.render(user));
    }
}