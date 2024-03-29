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
    creator: {
        type:mongoose.Types.ObjectId,ref:'User'
    },
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
