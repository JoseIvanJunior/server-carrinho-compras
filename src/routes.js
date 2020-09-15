const express = require('express')

const StoreController = require('./controllers/StoreController')
const ProductController= require('./controllers/ProductController')
const itemsOrdersController = require('./controllers/itemsOrdersController')
const ProfileController = require('./controllers/ProfileController')

const routes = express.Router()

routes.get('/loja', StoreController.index)
routes.post('/loja', StoreController.create)

routes.get('/profile/:id', ProfileController.index)

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.create)

routes.get('/itensPedidos', itemsOrdersController.index)
routes.post('/itensPedidos', itemsOrdersController.create)

module.exports = routes