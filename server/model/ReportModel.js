const mongoose = require("mongoose");

// {
//   "end_year": "",
//   "intensity": 6,
//   "sector": "Energy",
//   "topic": "gas",
//   "insight": "Annual Energy Outlook",
//   "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
//   "region": "Northern America",
//   "start_year": "",
//   "impact": "",
//   "added": "January, 20 2017 03:51:25",
//   "published": "January, 09 2017 00:00:00",
//   "country": "United States of America",
//   "relevance": 2,
//   "pestle": "Industries",
//   "source": "EIA",
//   "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
//   "likelihood": 3
// },
const ReportSchema = new mongoose.Schema({

  end_year:{
     type:"number",
     maxlength:[4,"Invalied year"],
     
  },
  intensity:{
     type:"number",

  },
  sector:{
     type:"string",
  },
  topic:{
     type:"string",
  },
  insight:{
     type:"string",
  },
  url:{
     type:"string",
  },
  region:{
     type:"string",
  },
  start_year:{
     type:"number",
     maxlength:[4,"Invalied year"],
  },
  impact:{
     type:"number",
  },
  added:{
     type:"date",
  },
  published:{
     type:"date",
  },
  country:{
     type:"string",
     maxlength:[60,"country name is to big"],
  },
  relevance:{
     type:"number",
  },
  pestle:{
     type:"string",
  },
  source:{
     type:"string",
  },
  title:{
     type:"string",
  },
  likelihood:{
     type:"number",
  },

   
});

module.exports = mongoose.model("report", ReportSchema);
