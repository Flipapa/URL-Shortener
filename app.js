const express = require('express')
const ephbs = require('express-handlebars')
const generateRandomCode = require('./tools/randomCode')
const ShortedURL = require('./models/shortedURL')
const PORT = 3000

require('./config/mongoose')

const app = express()

app.engine('handlebars', ephbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', async (req, res) => {
  const { inputURL } = req.body
  const record = await ShortedURL.find({ targetURL: inputURL }).lean()
  let randomCode
  if (record) {
    randomCode = record.randomCode
  } else {
    randomCode = generateRandomCode()
    ShortedURL.create({ randomCode, targetURL: inputURL})
  }
  res.render('index', { randomCode })
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})