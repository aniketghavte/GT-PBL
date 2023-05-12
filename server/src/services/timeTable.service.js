const TimeTable = require("../models/TimeTable.model");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const {slugify}=require('../config/util');


exports.createTimeTable = async (title, description, content,creator, tags) => {
    try {
        const identifier=slugify(title);
        if(title && description && content && creator && tags){
            const netTimeTable = await TimeTable.create({
                title,
                identifier,
                description,
                content,
                creator,
                tags
            });
            const savedTimeTable = await netTimeTable.save();
            return { status: 200, data: { timeTable: savedTimeTable } };
        }else{
            return { status: 400, data: { error: "Invalid Fields" } };
        }
    } catch (error) {
        return { status: 500, data: { message: error.message } };
    }
}
exports.getTimeTables = async (page, limit) => {
    const pagination = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 10) || 10,
        sort: {createdAt: -1},
      };
    try {
        const timeTables = await TimeTable.paginate({}, pagination);
        return { status: 200, data: { timeTables: timeTables } };
    } catch (error) {
        return { status: 500, data: { message: error.message } };
    }
}

exports.getTimeTable = async (timeTableId) => {
    try {
        // console.log(blogId)
        const timeTable = await TimeTable.findOne({ _id: timeTableId });
        if(!timeTable){
          return { status: 404, data: { error: "TimeTable not found in Database" } };
        }
        return { status: 200, data: { timeTable: timeTable } };
    } catch (error) {
        return { status: 500, data: { message: error.message } };
    }
}