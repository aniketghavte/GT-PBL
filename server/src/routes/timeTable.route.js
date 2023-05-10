const express = require("express");
const router = express.Router();

const timeTableController = require("../controllers/timeTable.controller")

router.get("/getBlogs", timeTableController.getTimeTablesHandler);
router.get("/getBlog", timeTableController.getTimeTableHandler);
router.post("/create", timeTableController.createTimeTableHandler);

module.exports = router;
