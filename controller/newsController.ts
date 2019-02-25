import NewsService from '../services/newsService';
import * as HttpStatus from 'http-status';
import Helper from "../infra/helper";
import { NewsValidator } from '../validators/newsValidator';
import { INewsModel } from '../interfaces/INewsModel';

class NewsController {

    get(req, res) {
        NewsService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(req, res) {
        const _id = req.params.id;
        NewsService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(req, res) {
        const news = <INewsModel>req.body;
        const validator = new NewsValidator(news);
        validator.validate();

        if (!validator.isValid())
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, { news: news, message: 'Invalid data', errors: validator.listErrors });
        else {
            NewsService.create(news)
                .then(news => Helper.sendResponse(res, HttpStatus.OK, `News registered successfully!`))
                .catch(error => console.error.bind(console, `Error ${error}`));
        }
    }

    update(req, res) {
        const _id = req.params.id;
        const news = <INewsModel>req.body;
        const validator = new NewsValidator(news);
        validator.validate();

        if (!validator.isValid())
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, { news: news, message: 'Invalid data', errors: validator.listErrors });
        else {
            NewsService.update(_id, news)
                .then(news => Helper.sendResponse(res, HttpStatus.OK, `News updated successfully!`))
                .catch(error => console.error.bind(console, `Error ${error}`));
        }
    }

    delete(req, res) {
        const _id = req.params.id;
        NewsService.delete(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, `News successfully deleted!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new NewsController();