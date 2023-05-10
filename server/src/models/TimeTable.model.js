const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
mongoose.plugin(mongoosePaginate);

const timeTableSchema = new mongoose.Schema(
  {
    title :{
        type: String,
        unique: true,
    },
    identifier:{
        type: String,
        unique: true
    },
    banner:{
        type: String
    },
    description: {
        type: String
    },
    content: [
        {
            day: {
                type: String
            },
            classes: [
                {
                    subject: {
                        type: String
                    },
                    teacher: {
                        type: String
                    },
                    topic: {
                        type: String
                    }
                }
            ]
        }
    ],
    tags: [
        {
            type : String
        }
    ]
  },
  {
    timestamps: true,
  }
);

const TimeTable = mongoose.model("TimeTable", timeTableSchema);

module.exports = TimeTable;
