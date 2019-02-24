import { IError } from "../interfaces/IError";

export abstract class ValidationBase{
    public listErrors: Array<IError>;

    public isValid(): boolean{
        return <boolean>(this.listErrors.length === 0);
    }
    
    constructor() {
        this.listErrors = new Array<IError>();
    }

    protected testExpression(test: boolean, propertyName: string, message: String): void {
        if (!test)
            this.listErrors.push(<IError>{ error: propertyName, description: message })
    }

    abstract validate(): void;
}