import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    //image: {data: Buffer, type: String },
    
   
    

})


export default mongoose.model("User", userSchema);