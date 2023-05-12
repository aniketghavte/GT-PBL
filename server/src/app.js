const express=require('express')
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", require('./routes/user.route'));
app.use("/api/timetable", require('./routes/timeTable.route'));

app.get("/", (req, res) => {
    res.json({
        "server": "running"
    })
});



module.exports = app;