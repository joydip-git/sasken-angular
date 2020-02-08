export class Product {

    constructor(private _id: number, private _modelName: string, private _make: string, private _price: number) {

    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get make(): string {
        return this._make;
    }
    public set make(value: string) {
        this._make = value;
    }
    public get modelName(): string {
        return this._modelName;
    }
    public set modelName(value: string) {
        this._modelName = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public printInfo(): string {
        return `Model Name: ${this._modelName}, Made By: ${this._make} , Price: ${this._price} `;
    }
}