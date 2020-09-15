const connection = require('../database/connections')

module.exports = {
    async index(request, response) {
        const stores = await connection('store').select('*')

        return response.json(stores)
    },

    async create(request, response) {
        const { name, description, whatsapp, email } = request.body

        await connection('store').insert({
            name,
            description,
            whatsapp,
            email
        })

        return response.json()
    }
}