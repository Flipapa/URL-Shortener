const express = require('express')
const ephbs = require('express-handlebars')
const PORT = 3000

require('./config/mongoose')

const app = express()

app.engine('handlebars', ephbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})