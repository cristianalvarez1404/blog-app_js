import { BLOG, COMMENT, USER } from "../utilities/constants/index.js";

class ConnectorDb {
    constructor(connector,entity){
        this.connector = new connector();
        this.entity = entity
    }

    create(data){return this.connector[this.entity].create(data)}
    
    getAll(){return this.connector[this.entity].getAll()}

    getById(id){return this.connector[this.entity].getById(id)}

    update(id,body){this.connector[this.entity].update(id,body)}
    
    delete(id){this.connector[this.entity].delete(id)}
}

export class ConnectorDbUser extends ConnectorDb{
    constructor(connector){
        super(connector,USER)
    }
}

export class ConnectorDbBlog extends ConnectorDb{
    constructor(connector){
        super(connector,BLOG)
    }
}

export class ConnectorDbComment extends ConnectorDb {
    constructor(connector){
        super(connector,COMMENT)
    }
}