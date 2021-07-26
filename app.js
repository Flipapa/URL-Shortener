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
  const record = await ShortedURL.findOne({ targetURL: inputURL }).lean()
  let randomCode
  let shortedURL
  if (record) {
    randomCode = record.randomCode
  } else {
    randomCode = generateRandomCode()
    await ShortedURL.create({ randomCode, targetURL: inputURL })
  }
  if (req.headers.host === 'localhost:3000') {
    shortedURL = `http://${req.headers.host}/${randomCode}`
  } else {
    shortedURL = `https://${req.headers.host}/${randomCode}`
  }
  res.render('index', { shortedURL })
})

app.get('/:randomCode', async (req, res) => {
  const randomCode = req.params.randomCode
  const url = await ShortedURL.findOne({ randomCode }).lean()
  res.redirect(url.targetURL)
})

app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})