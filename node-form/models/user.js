import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    age : Number,
    email : String,
    phone : String,
    adress : String
})
export default mongoose.model('User',userSchema)