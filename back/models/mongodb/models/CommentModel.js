import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
},{timeStamps:true})

export default mongoose.model('Comment',CommentSchema)