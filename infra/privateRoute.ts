import express = require("express");
import NewsController from '../controller/newsController';
import UserController from '../controller/userController';
import Auth from './auth';

export class PrivateRoute {

    public static setRoutes(app: express.Application): void {
        app.use(Auth.validate);
        this.setNewsControllerRoutes(app);
        this.setUserControllerRoutes(app);
    }

    private static setNewsControllerRoutes(app: express.Application): void {

        app.route("/api/v1/news").get(NewsController.get);
        app.route("/api/v1/news/:id").get(NewsController.getById);
        app.route("/api/v1/news").post(NewsController.create);
        app.route("/api/v1/news/:id").put(NewsController.update);
        app.route("/api/v1/news/:id").delete(NewsController.delete);
    }

    private static setUserControllerRoutes(app: express.Application): void {
        app.route("/api/v1/changepassword").put(UserController.changePassword);
    }
}