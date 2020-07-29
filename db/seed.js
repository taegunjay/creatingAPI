const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('https://api.nutritionix.com/v1_1/search/vegetables?results=0:30&fields=item_name,nf_protein,item_id,nf_sodium,nf_cholesterol,nf_calories&appId=601dc271&appKey=0fb540ccee8d09a634262da4804c9f2a')
    .then(function (response) {
        // handle success
        console.log(response.data.hits);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

