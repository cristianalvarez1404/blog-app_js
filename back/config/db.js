import mysql from 'mysql2/promise'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export class ConnectionMongoDB  {
    async connect(){
        try{
            await mongoose.connect(process.env.MONGO_URI)
            console.log("MongoDB connected sucessfully!")
        }catch(error){
            console.log(error)
        }
    }
}

export class ConnectionMySQL {
    static connection = null;

    static async connectingToMysql(){
        const dataConnection = {
            host:process.env.HOST,
            user:process.env.USER,
            password:process.env.PASSWORD,
            database:process.env.DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
        }
        
        try{
            if(!this.connection){
                this.connection = await mysql.createPool(dataConnection)
                console.log("DB was connected sucessfully to mysql")
                return this.connection
            }else return this.connection 
                
        }catch(error){
            console.error(error.message || 'Error connecting to Mysql',)
        }
    }
}