const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
mongoose.plugin(mongoosePaginate);

const userSchema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      unique: true,
      sparse: true
    }
    ,
    email: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
    },
    username: {
      type: String,
      min : 3,
      max : 20,
    },
    bio: {
      type: String,
      sparse: true,
      max: 200,
    },
    tags: {
      type: [String],

    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    completionStatus: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
