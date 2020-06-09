import { Product } from './product';
import { CategoryType } from './category-type';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject("Category")
export class Category {
    @JsonProperty("id", Number)
    private _id: number;
    @JsonProperty("categoryType", CategoryType)
    private _categoryType: CategoryType;
    @JsonProperty("name", String)
    private _name: string;
    @JsonProperty("description", String)
    private _description: string;
    @JsonProperty("product", Product)
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

    public get product(): Product[] {
        return this._products;
    }

    public set price(value: Product[]) {
        this._products = value;
    }
}