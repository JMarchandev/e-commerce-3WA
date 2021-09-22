const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{type:String,required:true},
    price:Number,
    description:String,
<<<<<<< HEAD
    image: String,
=======
>>>>>>> 0bac29410903abda07f4669c90f9fc1362a577ca
    isShown:Boolean,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;