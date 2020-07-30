
const data = require('./nutrition-data.json');
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;



const nutritionSchema = new Schema({
    item_name: String,
    item_id: String,
    nf_calories: Number,
    nf_cholesterol: Number,
    nf_sodium: Number,
    nf_protein: Number,
    nf_serving_size_qty: Number,
    nf_serving_size_unit: String
})




const nutrition = mongoose.model("nutrition", nutritionSchema);
module.exports = nutrition;