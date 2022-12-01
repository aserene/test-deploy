require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 4321

app.get("/", (req, res) => {
    res.send("Hello")
})
app.get("/dburl", (req, res) => {
    res.send(`My connection string is: ${process.env.DATABASE_URL}`)
})
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}...`)
})