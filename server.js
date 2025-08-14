const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const trackRoute = require("./routes/trackRoutes")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use("/tracks", trackRoute)

app.listen(3000, (error)=>{
    console.log(error)
})
mongoose.connect(process.env.DB_URI)
mongoose.connection.on('connected', ()=>{
    console.log('connected to MongoDB')
})