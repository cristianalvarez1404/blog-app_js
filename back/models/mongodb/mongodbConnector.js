import { ConnectionMongoDB } from "../../config/db.js"
import BlogModel from "./models/BlogModel.js"
import CommentModel from "./models/CommentModel.js"
import UserModel from "./models/UserModel.js"

export class MongoDbConnector {
    constructor(){
        if(!this.connection){
            this.connection = new ConnectionMongoDB().connect()
        }

        this.user = {
            async create(data){
                try{
                    const user = await UserModel.create(data)
                    return user
                }catch(err){
                    throw err
                }
            },
            async getAll(){
                try{
                    const users = await UserModel.find()
                    return users
                }catch(error){
                  throw error  
                }
            },
            async getById(id){
                try{
                    const user = await UserModel.findOne({_id:id})
                    return user
                }catch(error){
                    throw error
                } 
            },
            async update(id,body){
                const user = await UserModel.findByIdAndUpdate(id,{...body})
                return user;
            },
            async delete(id){
                await UserModel.findByIdAndDelete(id)
                return `User has been deleted sucessfully`
            },
        }
    
        this.blog = {
            async getAll(){
                try{
                    const users = await BlogModel.find()
                    return users
                }catch(error){
                    next(new Error(new Error(error.message || "Internal Error" )))
                }
            },
            async getById(id){
                try{
                    const user = await BlogModel.findOne({_id:id})
                    return user
                }catch(error){
                    next(new Error(new Error(error.message || "Internal Error" )))
                } 
            },
            async update(id,body){
                const user = await BlogModel.findByIdAndUpdate(id,{...body})
                return user;
            },
            async delete(id){
                await BlogModel.findByIdAndDelete(id)
                return `Post has been deleted sucessfully`
            },
        }
    
        this.comment = {
            async getAll(){
                try{
                    const users = await CommentModel.find()
                    return users
                }catch(error){
                    next(new Error(new Error(error.message || "Internal Error" )))
                }
            },
            async getById(id){
                try{
                    const user = await CommentModel.findOne({_id:id})
                    return user
                }catch(error){
                    next(new Error(new Error(error.message || "Internal Error" )))
                } 
            },
            async update(id,body){
                const user = await CommentModel.findByIdAndUpdate(id,{...body})
                return user;
            },
            async delete(id){
                await CommentModel.findByIdAndDelete(id)
                return `Comment has been deleted sucessfully`
            },
        }
    }
}