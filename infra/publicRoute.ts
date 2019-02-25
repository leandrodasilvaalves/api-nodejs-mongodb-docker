import express = require("express");
import upload from './upload';
import UserController from '../controller/userController';
import configs from "./configs";

export class PublicRoute {
    public static setRoutes(app: express.Application): void {
        app.route("/").get((req, res) => res.send({ versão: '0.0.1' }));
        this.setUploadRoutes(app);
        this.setUserRoutes(app);
    }

    private static setUserRoutes(app: express.Application): void {
        app.route(`${configs.api_prefix}/register`).post(UserController.register);
        app.route(`${configs.api_prefix}/login`).get(UserController.login);
    }

    private static setUploadRoutes(app: express.Application): void {
        app.route(`${configs.api_prefix}/uploads`).post(upload.single('file'), (req, res) => {
            try {
                res.send("arquivo enviado com sucesso!");
            } catch (error) {
                console.log(error);
            }
        });
    }
}