import { ConnectorDbBlog } from "../../models/connectorDb.js";
import { ConnectionMongoDB,ConnectionMySQL } from "../config/db.js";

const connector = new ConnectorDbBlog(new ConnectionMongoDB())