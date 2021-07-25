const express = require('express')
const ephbs = require('express-handlebars')
const PORT = 3000

const app = express()

app.engine('handlebars', ephbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.send('This is a Test!')
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})