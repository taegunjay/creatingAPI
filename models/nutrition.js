
const data = require('./nutrition-data.json');
const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const nutritionData = data.map(item => {
    const nutrition = {}
    nutrition.item_name = item.fields.item_name
    nutrition.item_id = item.fields.item_id
    nutrition.nf_calories = item.fields.nf_calories
    nutrition.nf_cholesterol = item.fields.nf_cholesterol
    nutrition.nf_sodium = item.fields.nf_sodium
    nutrition.nf_protein = item.fields.nf_protein
    nutrition.nf_serving_size_qty = item.fields.nf_serving_size_qty
    nutrition.nf_serving_size_unit = item.fields.nf_serving_size_unit
    return nutrition
})

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