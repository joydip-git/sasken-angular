import { Product } from './product.model';

export class TV extends Product {
    constructor(_id: number, _modelName: string, _make: string, _price: number, private _isHD: boolean, private _size: number, private _portCount: number) {
        super(_id, _modelName, _make, _price);
    }
    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }
    public get portCount(): number {
        return this._portCount;
    }
    public set portCount(value: number) {
        this._portCount = value;
    }
    public get isHD(): boolean {
        return this._isHD;
    }
    public set isHD(value: boolean) {
        this._isHD = value;
    }

    public printInfo(): string {
        return `${super.printInfo()}. This is a ${this._isHD ? 'HD' : 'SD'} TV of width ${this._size} inch and with ${this._portCount} ports`;
    }
}