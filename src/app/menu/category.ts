import { Product } from './product';
import { CategoryType } from './category-type';
import { Type, Expose } from "class-transformer";

export class Category {
    private _id: number;
    private _categoryType: CategoryType;
    private _name: string;
    private _description: string;
    @Type(() => Product)
    @Expose({ name: "products" })
    private _products: Product[]
    
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

    public get products(): Product[] {
        return this._products;
    }

    public set products(value: Product[]) {
        this._products = value;
    }
}