const express = require('express')
const dotenv = require("dotenv")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const usersRoute = require('./routes/usersRoute')
const cors = require('cors')
const path = require('path')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({ extended: true }))

app.use('/api/user', usersRoute)

const __dirname1 = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname1, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
