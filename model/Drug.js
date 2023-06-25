const shortID = require("shortid");
const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const DrugSchema = new Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    drug_name: {
        required:true,
        type: String
    },
    drug_type:{
        type:String
    },
    product_qty:{
        type:String
    },
    verif_code: {
        type: String,
        default:shortID.generate,
        required:true,
    },
    nafdac:{
        type: String,
        required:true
    },
    isAuthentic:{
        type: Boolean,
        default:true,
    },
    manufac_date:{
        type:String,
        required:true,
    },
    exp_date:{
        type:String,
        required:true,
    },
    count:{
        type: Number,
        required:true,
        default:0
    }
})

const Drug = new model("Drug", DrugSchema);
module.exports = Drug;