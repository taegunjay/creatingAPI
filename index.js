const express = require("express");
const cors = require("cors");
const app = express();
const parser = require("body-parser");
const List = require("./models/nutrition");
const nutrition = require("./models/nutrition");

app.use(cors());
app.use(parser.json());

app.get("/", function (req, res) {

    res.redirect('/nutrition');
});


app.get("/nutrition", function (req, res) {
    List.find({}).then(nutrition => {
        res.json(nutrition);
    });
});

app.get("/nutrition/:id", function (req, res) {
    List.findById({ _id: req.params.id }).then(nutrition => {
        res.json(nutrition);
    });
});





app.post("/nutrition", function (req, res) {
    List.create(req.body).then(nutrition => {
        res.json(nutrition);
    });
});


app.put("/nutrition/:id", function (req, res) {
    List.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(nutrition => {
        res.json(nutrition)
    })
})

app.delete("/nutrition/:id", function (req, res) {
    List.findOneAndRemove({ _id: req.params.id })
        .then(nutrition => {
            res.json(nutrition)
        })
})


app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(3200, () =>
//     console.log("Is your server running? Better go catch it!")
// );