const {Schema,model}= require('mongoose');
const productSchema = new Schema({
    name: String,
    price: Number,
    brand: String,

})
const products = model('products',productSchema
);
module.exports=products;