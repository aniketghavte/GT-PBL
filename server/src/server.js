const config = require("./config/config");
const connectDB = require("./config/database");
const app = require("./app");

connectDB();

const port = config.app.port;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
