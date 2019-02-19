import * as mongoose from 'mongoose';
import { createConnection } from 'net';

class Database{
    private DB_URL = 'mongodb://192.168.0.15:27017/db_portal'
    
    createConnection(){
        mongoose.connect(this.DB_URL);
    }
}

export default Database;