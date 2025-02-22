import { ConnectorDbBlog, ConnectorDbUser } from "../../models/connectorDb.js";
import { MongoDbConnector } from "../../models/mongodb/mongodbConnector.js";
import joi from 'joi'
import { BLOG, USER } from "../../utilities/constants/index.js";
import mongoose from "mongoose";

const connectorBlog = new ConnectorDbBlog(MongoDbConnector,BLOG)
const connectorUser = new ConnectorDbUser(MongoDbConnector,USER)

export const createTask = async (req, res,next) => {
    const taskInfo = req.body

    const schema = joi.object({
        title:joi.string().min(3).required(),
        description:joi.string().min(5).required(),
        postedBy:joi.string().required()
    })

    const data = {
        title:taskInfo.title,
        description:taskInfo.description,
        postedBy:taskInfo.postedBy
    }

    const {error, value} = schema.validate(data)

    if(error){
        return res.status(400).json(error.details)
    }

    const userid = new mongoose.Types.ObjectId(value.postedBy)
    value.postedBy = userid

    try{
        const newTask = await connectorBlog.create(value)
        const updateUser = await connectorUser.update(newTask.postedBy,null,{$addToSet:{posts:newTask._id}})
        
        console.log(updateUser)
        return res.status(200).json(newTask)

    }catch(err){
        return res.status(400).json(err.message) 
    }
}