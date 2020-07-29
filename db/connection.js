const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nutrition", { useNewUrlParser: true });



module.exports = mongoose;