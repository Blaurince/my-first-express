import express from 'express'

const PORT = 3000

const app = express()


//List od allowed request:
app.get('/hello', (req, res) => {
    res.send("Hello there!")
})

app.get('/test', (req, res) => {
    res.send("it's working! ")
})



app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
})
