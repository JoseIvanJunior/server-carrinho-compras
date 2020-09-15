const connection = require('../database/connections')

module.exports = {
    async index(request, response) {
        const { id } = request.params

        const product = await connection('products')
            .where('products.store_id', id)
            .join('store', 'products.store_id', '=', 'store.id')
            .select(['products.store_id', 'store.id'])

            console.log(product)
    }
}