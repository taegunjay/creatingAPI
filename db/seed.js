// const axios = require('axios').default;

// // Make a request for a user with a given ID
// axios.get('https://api.nutritionix.com/v1_1/search/vegetables?results=0:30&fields=item_name,nf_protein,item_id,nf_sodium,nf_cholesterol,nf_calories&appId=601dc271&appKey=0fb540ccee8d09a634262da4804c9f2a')
//     .then(function (response) {
//         // handle success
//         console.log(response.data.hits);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });


const data = require('../models/nutrition-data.json');
const Nutrition = require('../models/nutrition');

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


Nutrition.deleteMany({}).then(() => {
    Nutrition.create(nutritionData)
        .then(nutritionData => {
            console.log(nutritionData)
            process.exit()
        })
})
