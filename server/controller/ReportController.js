const catchAsyncErorr = require("../middleware/catchAsyncErorr");
const ReportModel = require("../model/ReportModel");
const ErrorHandler = require("../utils/errorHandler");

//sending multiple report records
exports.sendReports = catchAsyncErorr(async (req, res, next) => {
  reports = await ReportModel.insertMany(req.body);

  res.status(201).json({
    status: true,
    reports,
  });
});

//geting specific records
exports.getSpecificReports = catchAsyncErorr(async (req, res, next) => {
  const { end_year, sector, topic, region, country, source } = req.body;
  let data = {
    end_year: { $gt: new Date().getFullYear(), $lt: end_year  },
    sector: sector,
    topic: topic,
    region: region,
    country: country,
    source: source,
  };

  console.log(data);
  let reports = await ReportModel.find(data);

  res.status(201).json({
    status: true,
    len: reports.length,
    reports,
  });
});

//creating new divison
exports.getAllReports = catchAsyncErorr(async (req, res, next) => {
  reports = await ReportModel.find({});

  res.status(201).json({
    status: true,
    reports,
  });
});
