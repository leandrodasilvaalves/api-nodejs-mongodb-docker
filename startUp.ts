import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import Database from './infra/db';
import NewsController from './controller/newsController';
import UserController from  './controller/userController';
import Auth from './infra/auth';

import upload from './infra/upload';

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
        this.app.route("/").get((req, res) => res.send({ versão: '0.0.1' }));
        this.app.route("/uploads").post(upload.single('file'), (req, res) => {
            try {
                res.send("arquivo enviado com sucesso!");
            } catch (error) {
                console.log(error);
            }
        });

        this.app.route("/").get((req,res) => res.send({ versão: '0.0.1'}));
        this.app.route("/api/v1/register").post(UserController.register);
        this.app.route("/api/v1/login").get(UserController.login);
        
        this.app.use(Auth.validate);

        //newsController
        this.app.route("/api/v1/news").get(NewsController.get);
        this.app.route("/api/v1/news/:id").get(NewsController.getById);
        this.app.route("/api/v1/news").post(NewsController.create);
        this.app.route("/api/v1/news/:id").put(NewsController.update);
        this.app.route("/api/v1/news/:id").delete(NewsController.delete);
    }
}

export default new StartUp();