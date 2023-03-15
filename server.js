// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Create a "root" route 
app.get('/', (req, res) => {
    res.send('<h1>99 Bottles of tea on the wall</h1>')
})

app.get('/home', (req, res) => {
    res.send('<h1>Home Page!!</h1>')
})

// Tell the app to listen on port 8080 for HTTP requests from clients
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})
