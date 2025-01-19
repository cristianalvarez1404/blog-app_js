import { MySqlBlogModel } from "./models/Blog.js";
import { MySqlCommentModel } from "./models/Comment.js";
import { MySqlUserModel } from "./models/User.js"

export class MySqlConnector {
    constructor(){
        this.user = new MySqlUserModel();
        this.blog = new MySqlBlogModel();
        this.comment = new MySqlCommentModel();
    }
}
