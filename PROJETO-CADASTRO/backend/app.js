const express = require('express')
const restful = require('node-restful')

const server = express()
const mongoose = restful.mongoose

const bodyParser = require('body-parser')
const cors = require('cors')

// Database
mongoose.Promise = global.Promise // fizemos isso pq a API de Promise do mongoose está deprecated (não está sendo mais mantida), então o mongoose vai usar a API de Promise do node
mongoose.connect('mongodb://db/mydb') // o nome do servidor será db - no compose nós criaremos um serviço com esse mesmo nome

// //Teste
// server.get('/', (req, res, next) => res.send('Backend'))

// Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

// ODM
const Client = restful.model('Client', {
    name: { type: String, required: true }
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

// Routes
Client.register(server, '/clients')

// Start Server
server.listen(3000)