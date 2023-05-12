const express = require("express");
const router = express.Router();

const timeTableController = require("../controllers/timeTable.controller")

router.get("/getTimeTables", timeTableController.getTimeTablesHandler);
router.get("/getTimeTable", timeTableController.getTimeTableHandler);
router.post("/createTimeTable", timeTableController.createTimeTableHandler);

module.exports = router;
