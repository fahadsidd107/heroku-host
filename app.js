const express = require('express')
const port = process.env.PORT || 7000
const app = express()


app.get('/profile', (req, res) => {
    res.send('GET Request')
})
app.post('/profile', (req, res) => {
    res.send('POST Request')
})
app.put('/profile', (req, res) => {
    res.send('PUT Request')
})
app.delete('/profile', (req, res) => {
    res.send('DELETE Request')
})


app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})