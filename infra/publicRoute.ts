import express = require("express");
import upload from './upload';
import UserController from '../controller/userController';

export class PublicRoute {
    public static setRoutes(app: express.Application): void {
        app.route("/").get((req, res) => res.send({ versão: '0.0.1' }));
        this.setUploadRoutes(app);
        this.setUserRoutes(app);
    }

    private static setUserRoutes(app: express.Application): void {
        app.route("/api/v1/register").post(UserController.register);
        app.route("/api/v1/login").get(UserController.login);
    }

    private static setUploadRoutes(app: express.Application): void {
        app.route("/uploads").post(upload.single('file'), (req, res) => {
            try {
                res.send("arquivo enviado com sucesso!");
            } catch (error) {
                console.log(error);
            }
        });
    }
}