const mongoose = require("mongoose");

// const database_url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/user_master"


// mongoose.connect(database_url)
//     .then(() => console.log("connected succesfully"))
//     .catch((err) => console.log(err));


// module.exports = mongoose;
mongoose.connect('mongodb://127.0.0.1:27017/user_master')