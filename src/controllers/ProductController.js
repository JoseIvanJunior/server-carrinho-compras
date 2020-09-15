const connection = require('../database/connections')

module.exports = {
    async index(request, response) {
        const products = await connection('products').select('*')

        return response.json(products)
    },

    async create(request, response) {
        const { name, description, avatar, category, priceUnit, unitsInStock, quantityPerUnit, store_id } = request.body

        await connection('products').insert({
            name,
            description,
            avatar,
            category,
            priceUnit,
            unitsInStock,
            quantityPerUnit,
            store_id
        })

        return response.json()
    },

    async delete(request, response) {

        const { id } = request.params

        const product = await connection('products')
            .where('products.store_id', id)
            .join('store', 'products.store_id', '=', 'store.id')
            .select(['products.store_id', 'store.id'])

        console.log(product)
        console.log(id)

        if (product.store_id !== id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('products').where('products.store.id', id).delete()

        return response.status(204).send()
    }
}