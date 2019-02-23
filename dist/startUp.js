"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db_1 = require("./infra/db");
const newsController_1 = require("./controller/newsController");
const userController_1 = require("./controller/userController");
const auth_1 = require("./infra/auth");
const upload_1 = require("./infra/upload");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET,OPTIONS,PUT,POST,DELETE",
            origin: "*"
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => res.send({ versão: '0.0.1' }));
        this.app.route("/uploads").post(upload_1.default.single('file'), (req, res) => {
            try {
                res.send("arquivo enviado com sucesso!");
            }
            catch (error) {
                console.log(error);
            }
        });
        this.app.route("/").get((req, res) => res.send({ versão: '0.0.1' }));
        this.app.route("/api/v1/register").post(userController_1.default.register);
        this.app.route("/api/v1/login").get(userController_1.default.login);
        this.app.route("/api/v1/changepassword").put(userController_1.default.changePassword);
        this.app.use(auth_1.default.validate);
        //newsController
        this.app.route("/api/v1/news").get(newsController_1.default.get);
        this.app.route("/api/v1/news/:id").get(newsController_1.default.getById);
        this.app.route("/api/v1/news").post(newsController_1.default.create);
        this.app.route("/api/v1/news/:id").put(newsController_1.default.update);
        this.app.route("/api/v1/news/:id").delete(newsController_1.default.delete);
    }
}
exports.default = new StartUp();
