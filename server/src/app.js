const express=require('express')
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require('./routes/user.route'));

app.get("/", (req, res) => {
    res.json({
        "server": "running"
    })
});



module.exports = app;