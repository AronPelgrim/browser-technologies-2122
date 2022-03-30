const express = require('express')
const app = express()
const port = 8000
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.set('views', './views/pages')

app.use(express.static('public'))

app.get('', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })