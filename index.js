const express = require('express')
const app = express()
const port = 8000
const ejs = require('ejs')
const bodyParser = require('body-parser')
const fs = require('fs')

app.set('view engine', 'ejs')

app.set('views', './views/pages')

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('', (req, res) => {
    res.render('index')
})


let userInput;

app.post('/', (req, res) => {
	console.log(req.body)

	userInput = JSON.stringify(req.body.inputvalue)

	fs.writeFile('informatie.json', userInput, 'utf8', cb => {
	})
	res.render('index', {
		gebruikersnaam: userInput
	})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })