
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Date = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        type: { type: String, required: true },
        time: { type: Number, required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('dates', Date)