const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {
        required:[true, "Company name is required!"],
        type: String
    },
    drugs: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Drug",
    },
    email: {
        required: [true, "Email is required"],
        type: String,
        unique: true
    },
    address: {
        type: String
    },
    regNumber:{
        type:String,
        required:true
    },
    password: {
        required: [true, "Password is required"],
        type: String,
    },
    isVerified :{
        type:Boolean,
    }
},
{
    timestamps: true
})

const User = new model("User", UserSchema);
module.exports= User;