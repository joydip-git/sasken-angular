import { Employee } from './employee';

export class Hr extends Employee {

    constructor(id: number, name: string, basic: number, da: number, hra: number, private _gratuityPay: number) {
        super(id, name, basic, da, hra);
    }

    public get gratuityPay(): number {
        return this._gratuityPay;
    }
    public set gratuityPay(value: number) {
        this._gratuityPay = value;
    }

    public calculateSalary(): number {
        return super.calculateSalary() + this._gratuityPay;
    }
}