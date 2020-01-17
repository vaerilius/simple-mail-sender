const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const mailRouter = require('./controllers/mail');

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use('/mail', mailRouter)


app.listen(3000, () => console.log('server running'))