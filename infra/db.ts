import * as mongoose from 'mongoose';
import { createConnection } from 'net';

class Database{
    private DB_URL = 'mongodb://172.28.203.16:27017/db_portal'
    
    createConnection(){
        mongoose.connect(this.DB_URL);
    }
}

export default Database;