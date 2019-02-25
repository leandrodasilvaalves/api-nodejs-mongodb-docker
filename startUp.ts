import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import Database from './infra/db';
import { PrivateRoute } from './infra/privateRoute';
import { PublicRoute } from './infra/publicRoute';

class StartUp {
    public app: express.Application;
    private _db: Database;
    private bodyParser;

    constructor() {
        this.app = express();
        this._db = new Database();
        this._db.createConnection();
        this.middler();
        this.routes();
    }

    enableCors() {
        const options: cors.CorsOptions = {
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin: "*"
        }

        this.app.use(cors(options));
    }

    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        PublicRoute.setRoutes(this.app);
        PrivateRoute.setRoutes(this.app);
    }
}

export default new StartUp();