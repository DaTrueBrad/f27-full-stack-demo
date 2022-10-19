const express = require('express')
const cors = require('cors')
const server = express()
const PORT = process.env.PORT || 4000
const {db} = require('./database')
const {Product, Cart} = require('./models')

//! Middleware
server.use(express.json())
server.use(cors())


//! endpoints
server.get('/products', async (req, res) => {
  let results = await Product.findAll()
  res.status(200).send(results)
})

server.get('/cart', async (req, res) => {
  let results = await Cart.findAll({include: Product})
  res.status(200).send(results)
})

server.post('/cart', async (req, res) => {
  await Cart.create({
    productId: req.body.id
  })
  res.status(200).send("woohoo")
})
server.delete('/cart', async (req, res) => {
  await Cart.destroy({truncate: true})
  res.status(200).send("success")
})


db.sync()
server.listen(PORT, () => console.log(`Running on Port ${PORT}`))