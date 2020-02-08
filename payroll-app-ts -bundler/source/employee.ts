export class Employee {

    private _id: number;
    private _name: string;
    private _basicPay: number;
    private _daPay: number;
    private _hraPay: number;

    constructor(id: number, name: string, basic: number, da: number, hra: number) {
        this._id = id;
        this._name = name;
        this._basicPay = basic;
        this._daPay = da;
        this._hraPay = hra;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get basicPay(): number {
        return this._basicPay;
    }
    public set basicPay(value: number) {
        this._basicPay = value;
    }

    public get daPay(): number {
        return this._daPay;
    }
    public set daPay(value: number) {
        this._daPay = value;
    }

    public get hraPay(): number {
        return this._hraPay;
    }
    public set hraPay(value: number) {
        this._hraPay = value;
    }

    public calculateSalary(): number {
        return this._basicPay + this._daPay + this._hraPay;
    }
}