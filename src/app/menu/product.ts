import { CategoryType } from './category-type';

export class Product {
    private _id: number = 0;
    private _categoryType: CategoryType;
    private _name: string;
    private _description: string;
    private _price: number;

    constructor() {}

	public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get categoryType(): CategoryType {
        return this._categoryType;
    }

    public set categoryType(value: CategoryType) {
        this._categoryType = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }


}