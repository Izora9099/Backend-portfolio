const mongoose = require("mongoose");
const portfolioModel = new mongoose.model("projects", mongoose.Schema({
    _id: String,
    image: String,
    title: String,
    seemore: String,
    content: String,
}))


module.exports = {
    portfolioModel
}