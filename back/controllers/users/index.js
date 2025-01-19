import { ConnectorDbUser } from "../../models/connectorDb.js";
import { USER } from "../../utilities/constants/index.js";
import { MySqlConnector } from "../../models/mysql/mysqlConnector.js";
import { MongoDbConnector } from "../../models/mongodb/mongodbConnector.js";

const connector = new ConnectorDbUser(MySqlConnector,USER)
// const connector = new ConnectorDbUser(MongoDbConnector,USER)

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
       
        return res.status(201).json({data:newUser,message:"User created sucessfully!"})
    }catch(error){
        return res.status(400).json(error)
    }
}
