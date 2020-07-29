const fetch = require('node-fetch');
const fs = require('fs');

const url = 'https://api.nutritionix.com/v1_1/search/vegetables?results=0:30&fields=item_name,nf_protein,item_id,nf_sodium,nf_cholesterol,nf_calories&appId=601dc271&appKey=0fb540ccee8d09a634262da4804c9f2a'

// fetch(url)
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//     })

fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res.hits[0].fields);

        // for (let i = 0; i < 30; i++) {
        //     console.log(res.hits[i].fields);
        //     let nutrition = JSON.stringify(res.hits[i].fields)
        // }

        let nutrition = JSON.stringify(res.hits)


        console.log("nutrition: " + nutrition);
        fs.writeFile('./nutrition-data.json', nutrition, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('success')
            }
        })
    })

// const data = require('./nutrition-data.json')

// const nutritionData = data.map(item => {
//     const nutrition = {}
//     nutrition.item_id = item.item_id
//     nutrition.nf_calories = item.nf_calories
//     nutrition.nf_cholesterol = item.nf_cholesterol
//     nutrition.nf_sodium = item.nf_sodium
//     nutrition.nf_protein = item.nf_protein
//     nutrition.nf_serving_size_qty = item.nf_serving_size_qty
//     nutrition.nf_sodium = item.nf_sodium
//     return nutrition
// })