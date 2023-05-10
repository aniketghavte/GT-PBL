const Blog = require("../models/blog.model");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const {slugify}=require('../config/util');


exports.createBlog = async (title, banner, description, content, tags) => {
    try {
        const identifier=slugify(title);
        if(title && banner && description && content && tags){
            const newBlog = await Blog.create({
                title,
                identifier,
                banner,
                description,
                content,
                tags
            });
            const savedBlog = await newBlog.save();
            return { status: 200, data: { blog: savedBlog } };
        }else{
            return { status: 400, data: { error: "Invalid Fields" } };
        }
    } catch (error) {
        return { status: 500, data: { message: error.message } };
    }
}
exports.getBlogs = async (page, limit) => {
    const pagination = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 10) || 10,
        sort: {createdAt: -1},
      };
    try {
        const blogs = await Blog.paginate({}, pagination);
        return { status: 200, data: { blogs: blogs } };
    } catch (error) {
        return { status: 500, data: { message: error.message } };
    }
}

exports.getBlog = async (blogId) => {
    try {
        // console.log(blogId)
        const blog = await Blog.findOne({ _id: blogId });
        if(!blog){
          return { status: 404, data: { error: "Blog not found in Database" } };
        }
        return { status: 200, data: { blog: blog } };
    } catch (error) {
        return { status: 500, data: { message: error.message } };
    }
}