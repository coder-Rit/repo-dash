const express = require('express')
const error = require('./middleware/error')
const connectTODatabase = require("./config/dataBase")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors  = require("cors")
const app = express()
 

 
 
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/config.env" });
  }
//connection to the data base 
connectTODatabase()

app.use(cookieParser())
app.use(bodyParser.urlencoded({limit: '1mb',extended:false}))
app.use(bodyParser.json({limit: '1mb'}))

 



const ReportRouter = require('./router/ReportRouter')
 
 

app.use(cors())




app.use("/api/v1", ReportRouter)
 
 
 
 app.use(error)
module.exports = app
