import { ConnectionMySQL } from "../../config/db.js"

const connection = ConnectionMySQL.connectingToMysql()

export class MySqlConnector {
    user = {
        async getAll(){
            try{
                const [results, fields] = await connection.query(
                    'SELECT * FROM student'
                )
                console.log(results)
            }catch(err){
                console.log(err)
            }
        },
        async getById(){},
        async update(id,body){},
        async delete(id){},
    }

    blog = {
        async getAll(){},
        async getById(){},
        async update(id,body){},
        async delete(id){},
    }

    comment = {
        async getAll(){},
        async getById(){},
        async update(id,body){},
        async delete(id){},
    }
}