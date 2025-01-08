import { BLOG, COMMENT, USER } from "../utilities/constants.js";

class ConnectorDb {
    constructor(connector,entity){
        this.connector = connector;
        this.entity = entity
    }

    getAll(){return this.connector[this.entity].getAll()}

    getById(id){return this.connector[this.entity].getById(id)}

    update(id,body){this.connector[this.entity].update(id,body)}
    
    delete(id){this.connector[this.entity].delete(id)}
}

export class ConnectorDbUser {
    constructor(connector){
        super(connector,USER)
    }
}

export class ConnectorDbBlog {
    constructor(connector){
        super(connector,BLOG)
    }
}

export class ConnectorDbComment {
    constructor(connector){
        super(connector,COMMENT)
    }
}