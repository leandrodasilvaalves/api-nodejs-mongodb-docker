import { IError } from "../interfaces/IError";

export abstract class ValidationBase{
    public listErrors: Array<IError>;

    public isValid(): boolean{
        return <boolean>(this.listErrors.length === 0);
    }
    
    constructor() {
        this.listErrors = new Array<IError>();
    }

    protected testExpression(test: boolean, propertyName: string, message: string): void {
        if (!test)
            this.listErrors.push(<IError>{ error: propertyName, description: message })
    }

    abstract validate(): void;

    protected isNullOrEmpty(value: string): boolean{
        return value == null || value =='';
    }

    protected hasMaxLength(value: string, maxLength: number): boolean{
        if(this.isNullOrEmpty(value)) return false;
        return value.length <= maxLength;
    }

    protected hasMinLength(value: string, minLength: number): boolean{
        if(this.isNullOrEmpty(value)) return false;
        return value.length >= minLength;
    }
}