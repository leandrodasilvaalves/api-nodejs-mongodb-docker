import express = require('express');
import NewsController from '../controller/newsController';
import UserController from '../controller/userController';
import Auth from './auth';
import Configs from './configs';

export class PrivateRoute {

    public static setRoutes(app: express.Application): void {
        app.use(Auth.validate);
        this.setNewsControllerRoutes(app);
        this.setUserControllerRoutes(app);
    }

    private static setNewsControllerRoutes(app: express.Application): void {

        app.route(`${Configs.api_prefix}/news`).get(NewsController.get);
        app.route(`${Configs.api_prefix}/news/:id`).get(NewsController.getById);
        app.route(`${Configs.api_prefix}/news`).post(NewsController.create);
        app.route(`${Configs.api_prefix}/news/:id`).put(NewsController.update);
        app.route(`${Configs.api_prefix}/news/:id`).delete(NewsController.delete);
    }

    private static setUserControllerRoutes(app: express.Application): void {
        app.route(`${Configs.api_prefix}/changepassword`).put(UserController.changePassword);
    }
}