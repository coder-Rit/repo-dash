const express = require('express')
 const {  sendReports,getSpecificReports,getAllReports} = require('../controller/ReportController')
  

const Router = express.Router()

Router.route("/sendReports").post( sendReports);
Router.route("/filterReports").post(getSpecificReports);
Router.route("/getReports/all").get(getAllReports);

module.exports =Router 