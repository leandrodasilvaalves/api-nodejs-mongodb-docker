import * as mongoose from 'mongoose';
import { createConnection } from 'net';

class Database{
    private DB_URL = 'mongodb://db/db_portal'
    
    createConnection(){
        mongoose.connect(this.DB_URL);
    }
}

export default Database;