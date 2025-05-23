import mongoose from "mongoose";

const BlogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postedBy:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }

    
},{timestamps:true})

export default mongoose.model("Post",BlogSchema)