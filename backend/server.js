const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
// const Article = require('./models/article.model.js')
const myRoutes = require('./routes/scrutari.routes.js')
const app = express()

// middleware
app.use(express.json())
app.use(cors());
app.use('/api', myRoutes);

app.listen(2000, () => {
  console.log('Server running on PORT 2000')
})



mongoose.connect('mongodb+srv://negrillojmc:DZI67XdiRI8wPX2e@articles.ido6vsf.mongodb.net/articles?retryWrites=true&w=majority&appName=articles')
  .then(() => console.log('Connected!'));