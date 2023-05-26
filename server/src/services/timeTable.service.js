const TimeTable = require("../models/TimeTable.model");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const {slugify}=require('../config/util');
const PDFDocument = require('pdfkit');
const fs = require('fs');

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
exports.deleteTimeTable = async (timeTableId) => {
    console.log(timeTableId)
    try {
      const timeTable = await TimeTable.findOne({ _id: timeTableId });
      if (!timeTable) {
        return { status: 404, data: { error: "TimeTable not found in Database" } };
      }
  
      await TimeTable.deleteOne({ _id: timeTableId });
  
      return { status: 200, data: { message: "TimeTable deleted successfully" } };
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

exports.downloadTimeTable = async (timeTableId, res) => {
    console.log(timeTableId);
    console.log("73>>>>>");
    try {
      const timeTable = await TimeTable.findOne({ _id: timeTableId });
      if (!timeTable) {
        return { status: 404, data: { error: "TimeTable not found in Database" } };
      }
  
      const doc = new PDFDocument();
  
      timeTable.content.forEach((day) => {
        doc.fontSize(18).text(day.day, { underline: true });
        day.classes.forEach((clas) => {
          doc.fontSize(12).text(`Subject: ${clas.subject}`);
          doc.fontSize(12).text(`Teacher: ${clas.teacher}`);
          doc.moveDown();
        });
        doc.moveDown();
      });
  
      const fileName = 'timetable.pdf';
      const writeStream = fs.createWriteStream(fileName);
      doc.pipe(writeStream);
  
      writeStream.on('finish', () => {
        // Send the response headers before piping the file to the response stream
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
  
        // Pipe the file to the response stream
        const fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res);
      });
  
      doc.end();
  
      return { status: 200, data: { created: "timeTable created" } };
    } catch (error) {
      return { status: 500, data: { message: error.message } };
    }
  };
  
  

  
  