import { ValidationBase } from "./validatorBase";
import { INewsModel } from "../interfaces/INewsModel";

export class NewsValidator extends ValidationBase {

    private hatMaxLength: number = 250;
    private hatMinLength: number = 125;
    private titleMaxLength: number = 100;
    private titleMinLength: number = 50;
    private textMaxLength: number = 5000;
    private textMinLength: number = 500;


    constructor(private model: INewsModel) {
        super();
    }

    validate(): void {
        this.validateHat();
        this.validateTitle();
        this.validateText();
        this.validateAuthor();
        this.validateLink();
    }

    private validateHat(): any {
        const { hat } = this.model;
        const test: boolean = !this.isNullOrEmpty(hat) && this.hasMaxLength(hat, this.hatMaxLength) && this.hasMinLength(hat, this.hatMinLength);
        const messageError: String = this.getMessageError('Hat', this.hatMaxLength, this.hatMinLength);
        this.testExpression(test, 'Hat', messageError);
    }

    private validateTitle() {
        const { title } = this.model;
        const test: boolean = !this.isNullOrEmpty(title) && this.hasMaxLength(title, this.titleMaxLength) && this.hasMinLength(title, this.titleMinLength);
        const messageError: String = this.getMessageError('Title', this.titleMaxLength, this.titleMinLength);
        this.testExpression(test, 'Title', messageError);
    }

    private validateText(){
        const { text } = this.model;
        const test: boolean = !this.isNullOrEmpty(text) && this.hasMaxLength(text, this.textMaxLength) && this.hasMinLength(text, this.textMinLength);
        const messageError: String = this.getMessageError('Text', this.textMaxLength, this.textMinLength);
        this.testExpression(test, 'Text', messageError)
    }

    private validateAuthor(){
        const { author } = this.model;
        const test: boolean = !this.isNullOrEmpty(author);
        const messageError: String = 'The author can not be null';
        this.testExpression(test, 'author', messageError)
    }

    private validateLink(){
        const { link } = this.model;
        let pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        const regeExp = new RegExp(pattern);
        this.testExpression(regeExp.test(link.toString()), 'Link', 'Invalid link.');

    }

    private getMessageError(propertyName: String, maxLength: number, minLength: number): String {
        return `The ${propertyName} can not be null. Must be between ${minLength} and ${maxLength} characters.`;
    }
}