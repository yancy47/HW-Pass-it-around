// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8080 

// Create a "root" route 
app.get('/', (req, res) => {
    res.send(
        `<h1>99 Bottles of tea on the wall</h1>
        <a href = '/98'> take one down, pass it around </a>`
    ) 
})

app.get('/:number_of_bottles', (req, res) => {
    res.send('<h1>Home Page!!</h1>')
    let bottles = req.params.number_of_bottles

    if (bottles != 0) {
        res.send(`<h1>${bottles} Bottles of tea on the wall</h1><a href='/${bottles - 1}'>take one down, pass it around</a>`)
    } else {
        res.send(`<h1>${bottles} Bottles of tea on the wall</h1><a href='/'>Start Over. Get more tea</a>`)
    }
})

// Tell the app to listen on port 8080 for HTTP requests from clients
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})
