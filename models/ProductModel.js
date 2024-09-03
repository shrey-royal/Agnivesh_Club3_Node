const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    discount: {
        type: Number,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("products", productSchema)