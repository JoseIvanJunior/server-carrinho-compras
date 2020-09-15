const connection = require('../database/connections')

module.exports = {
    async index(request, response) {
        const itemsOrders = await connection('itemsOrders').select('*')

        return response.json(itemsOrders)
    },

    async create(request, response) {
        const { codeOfProduct, priceUnit, quantity, products_id } = request.body

        const [id] = await connection('itemsOrders').insert({
            codeOfProduct,
            priceUnit,
            quantity,
            products_id
        })

        return response.json({ id })
    }
}