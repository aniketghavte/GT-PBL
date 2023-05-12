const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
mongoose.plugin(mongoosePaginate);

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
    },
    name: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
