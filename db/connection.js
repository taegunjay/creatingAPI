const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nutrition", { useNewUrlParser: true });

mongoose.Promise = Promise;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
}
else {
    mongoURI = "mongodb://localhost/FirstDeployedAPI";
}



module.exports = mongoose;