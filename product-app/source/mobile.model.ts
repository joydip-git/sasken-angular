import { Product } from "./product.model";

export class Mobile extends Product {
   
    constructor(_id: number, _modelName: string, _make: string, _price: number, private _cameraName: string) {
        super(_id, _modelName, _make, _price);
    }
    public get cameraName(): string {
        return this._cameraName;
    }
    public set cameraName(value: string) {
        this._cameraName = value;
    }
    public printInfo():string{
        return `${super.printInfo()}. This Mobile has ${this._cameraName} camera`;
    }
}