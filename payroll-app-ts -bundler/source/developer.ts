import { Employee } from './employee';

export class Developer extends Employee {

    constructor(id: number, name: string, basic: number, da: number, hra: number, private _incentivePayment: number) {
        super(id, name, basic, da, hra);
    }

    public get incentivePayment(): number {
        return this._incentivePayment;
    }
    public set incentivePayment(value: number) {
        this._incentivePayment = value;
    }

    public calculateSalary(): number {
        return super.calculateSalary() + this._incentivePayment;
    }
}