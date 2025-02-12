import { ConnectorDbUser } from "../../models/connectorDb.js";
import { USER } from "../../utilities/constants/index.js";
import { MySqlConnector } from "../../models/mysql/mysqlConnector.js";
import { MongoDbConnector } from "../../models/mongodb/mongodbConnector.js";

//const connector = new ConnectorDbUser(MySqlConnector,USER)
const connector = new ConnectorDbUser(MongoDbConnector,USER)

export const createUser = async (req,res,next) => {
    try{
        const {username,email,password} = req.body;

            if(!username || !email || !password){
            return res.status(400).json({data:"",message:"All fields are required!"})
        }

        const searchUsers = await connector.getAll()

        if(searchUsers){
            const user = searchUsers.find((user) => user.email === email)
            if(user){
                return res.status(400).json({data:"",message:"User already exist!"})
            }
        }

        const newUser = {username,email,password}
        
        const user = await connector.create(newUser)

        if(!user){
            return res.status(400).json({data:"",message:"Error creating a user"})
        }

        const userInfo = await connector.getById(user._id)

        return res.status(201).json({data:userInfo,message:"User created sucessfully!"})
    }catch(error){
        return res.status(400).json(error)
    }
}

export const getUsers = async (req,res,next) => {
    try{
        const users = await connector.getAll()
        return res.status(200).json(users)
    }catch(error){
        return res.status(400).json(error)
    }
}

export const getUserById = async (req,res,next) => {
    try{
        const users = await connector.getById(req.query.id)
        return res.status(200).json(users)
    }catch(error){
        return res.status(400).json(error)
    }
}

export const signIn = async (req,res,next) => {
    try{
        const {email,password} = req.body

        const user = await connector.getByEmail(email)

        if(!user){
            return res.status(400).json({data:"",message:"User does not exist"})
        }

        return res.status(200).json(user)
    }catch(error){
        return res.status(400).json(error)
    }
}


export const logout = async (req,res,next) => {
    try{
        const users = await connector.getById(req.query.id)
        return res.status(200).json(users)
    }catch(error){
        return res.status(400).json(error)
    }
}