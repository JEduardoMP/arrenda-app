const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/arrenda';

module.exports = () => {
  const connection = () => {
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (err) {
          console.log(err)
        } else {
          console.log("DB Connected as successfully")
        }
      }
    )
  }
  connection();
}