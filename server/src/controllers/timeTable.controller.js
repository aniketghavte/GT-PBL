const timeTableService = require("../services/timeTable.service")
const Blog = require("../models/blog.model");

exports.createTimeTableHandler = async (req, res) => {
    const { title, banner, description, content, tags } = req.body;
  
    try {
      const result = await timeTableService.createBlog(title, banner, description, content, tags);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

exports.getTimeTablesHandler = async (req, res) => {
    const { page, limit } = req.query;
  
    try {
      const blog = await timeTableService.getBlogs(page, limit);
      res.status(200).json({ blog });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
exports.getTimeTableHandler = async (req, res) => {
    try {
        // console.log(req)
      const result = await timeTableService.getBlog(req.body.blogId);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };