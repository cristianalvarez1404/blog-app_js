import mysql from 'mysql2'

export class ConnectionMongoDB  {}

export class ConnectionMySQL {
    static async connectingToMysql(){
        const dataConnection = {
            host:process.env.HOST,
            user:process.env.USER,
            password:process.env.PASSWORD,
            database:process.env.DATABASE
        }
        
        try{
            if(!this.connection){
                this.connection = await mysql.createConnection(dataConnection)
                console.log("DB was connected sucessfully to mysql")
                return this.connection
            }else return this.connection 
                
        }catch(error){
            console.error(error.message || 'Error connecting to Mysql',)
        }
    }
}