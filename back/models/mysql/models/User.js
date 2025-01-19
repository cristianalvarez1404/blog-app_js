import { ConnectionMySQL } from "../../../config/db.js"

export class MySqlUserModel {
    async create(data){   
        try{
            const connection = await this.connect()
            const [results, fields] = await connection.query(`INSERT INTO user (username,email,password) VALUES(?,?,?)`,[data.username,data.email,data.password])
            return results
        }catch(err){
            console.log(err)
        }            
    }

    async getAll(){
        try{
            const connection = await this.connect()
            const [query] = await connection.query('SELECT * FROM user')
            return query
        }catch(err) {console.log(err)}
    }

    async connect(){
        if(this.connection){
            return this.connection
        }else {
            return this.connection = ConnectionMySQL.connectingToMysql()
        }
    }
}
