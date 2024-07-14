require('dotenv').config()

// express app
const express = require('express')
const mongoose = require('mongoose')
const scrutariRoutes = require('./routes/scrutariRoutes')
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/', scrutariRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
        console.log('The server is now connected to the database.')
    })
    .catch((error) => {
        console.log(error)
    })

