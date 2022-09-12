// DB
const db = require("./config/db");
require('dotenv').config({ path: 'config.env' });

// APP
const { app } = require("./app");


db();

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => {
  console.log(`Agenda API is running on port: ${PORT}!!!!`);
});
