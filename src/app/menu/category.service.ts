import { Injectable } from '@angular/core';
import { Category } from './category';
import { Product } from './product';
import { CategoryType } from './category-type';
import { of, Observable } from 'rxjs';
import {JsonConvert} from "json2typescript"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  chefsSpecialRolls: Array<Object> = [
    {id: 1, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Angry Dragon', description: 'shrimp tempura, cocumber & eel, topped with slices of avocado, mango & tobiko', price: 17},
    {id: 2, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Autumn of New York', description: 'spicy king salmon, avocado inside, topped with slices of king salmon & caviar', price: 17},
    {id: 3, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Blue Heaven', description: 'tuna, king salmon & yellowtail topped with slices of avocado', price: 17},
    {id: 4, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Brave Heart', description: 'spicy yellowtail, cucumber, shrimp tempura inside, topped with tuna & avocado', price: 17},
    {id: 5, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Buddha & Zen', description: 'spicy tuna, spicy lobster, avocado inside, topped with slices of yellowtail & scallion', price: 17},
  ]

  soup: Array<Object> = [
    {id: 1, categoryType: CategoryType.SOUP, name: 'Miso Soup', description: '', price: 2.5},
    {id: 1, categoryType: CategoryType.SOUP, name: 'Clear', description: '', price: 3},
    {id: 1, categoryType: CategoryType.SOUP, name: 'Mushroom Soba Soup', description: '', price: 7},
    {id: 1, categoryType: CategoryType.SOUP, name: 'Chicken Vegetable Soup', description: '', price: 7},
    {id: 1, categoryType: CategoryType.SOUP, name: 'Seafood Kimchee Soup', description: '', price: 10}
  ]



  categories: Array<Object> = [
    {id: 1, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Chef\'s Special Rolls', description: '', products: this.chefsSpecialRolls},
    {id: 2, categoryType: CategoryType.SOUP, name: 'Soup', description: '', products: this.soup}
  ];

  constructor() {}

  getCategories() : Observable<Category[]> {
    let jsonConvert = new JsonConvert();
    let test = jsonConvert.deserializeObject(this.categories[0], Category); 
    return of(jsonConvert.deserializeArray(this.categories, Category));
  }

}
