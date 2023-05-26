const timeTableService = require("../services/timeTable.service")

exports.createTimeTableHandler = async (req, res) => {
    const { title, description, content,creator, tags } = req.body;
  
    try {
      const result = await timeTableService.createTimeTable(title, description, content, creator, tags);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
exports.deleteTimeTableHandler = async (req, res) => {
    try {
      console.log(req.query)
      const result = await timeTableService.deleteTimeTable(req.query.timeTableId);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

exports.getTimeTablesHandler = async (req, res) => {
    const { page, limit } = req.query;
  
    try {
      const blog = await timeTableService.getTimeTables(page, limit);
      res.status(200).json({ blog });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
exports.getTimeTableHandler = async (req, res) => {
    try {
        console.log(req.query)
      const result = await timeTableService.getTimeTable(req.query.timeTableId);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
exports.downloadTimeTableHandler = async (req, res) => {
    const timeTableId = req.query.timeTableId
    try {
      const result = await timeTableService.downloadTimeTable(timeTableId, res);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };