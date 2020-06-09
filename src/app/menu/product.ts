import { CategoryType } from './category-type';
import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject("Product")
export class Product {
    @JsonProperty("id", Number)
    private _id: number;
    @JsonProperty("categoryType", CategoryType)
    private _categoryType: CategoryType;
    @JsonProperty("name", String)
    private _name: string;
    @JsonProperty("description", String)
    private _description: string;
    @JsonProperty("price", Number)
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