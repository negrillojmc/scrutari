const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');

// route imports
const blogRoutes = require('./routes/blog.routes.js')
const libraryRoutes = require('./routes/library.routes.js')
const engagementRoutes = require('./routes/engagement.routes.js')

// middleware
app.use(express.json())
app.use(cors());

// routes
app.use('/api', [blogRoutes, libraryRoutes, engagementRoutes]);

app.listen(2000, () => {
  console.log('Server running on PORT 2000')
})

mongoose.connect('mongodb+srv://negrillojmc:DZI67XdiRI8wPX2e@articles.ido6vsf.mongodb.net/articles?retryWrites=true&w=majority&appName=articles')
  .then(() => console.log('Connected!'));