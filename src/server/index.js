const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

let result  = "";

dotenv.config()

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 8081

const server = app.listen(port, ()=>{
    console.log(`NLP app server running on port: ${port}`);
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/key', function (req, res) {
    let data = {}
    data.key = process.env.API_KEY;
    res.send(data)
})
