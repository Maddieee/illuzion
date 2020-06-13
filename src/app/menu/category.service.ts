import { Injectable } from '@angular/core';
import { Category } from './category';
import { Product } from './product';
import { CategoryType } from './category-type';
import { of, Observable } from 'rxjs';
import {plainToClass} from "class-transformer";

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
    {id: 6, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Crazy Weekend', description: 'spicy lobster, shrimp tempura & avocado inside, topped with spicy tuna', price: 17},
    {id: 7, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Fallen Angel', description: 'spicy tuna & spicy yellowtail inside, topped with yellowtail, king salmon, tuna & avocado', price: 17},
    {id: 8, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Invictus', description: 'spicy lobster, shrimp tempura, cucumber inside, topped with slices of tuna, king salmon, yellowtail & salmon roe', price: 17},
    {id: 9, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Moon Walk', description: 'spicy tuna, cucumber, avocado, shrimp tempura roll, wrapped with soy bean seaweed', price: 17},
    {id: 10, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Spicy Bad Girl', description: 'spicy king salmon, spicy tuna, spicy yellowtail inside, topped with shrimp, avocado, jalapeno & tobiko', price: 17},
    {id: 11, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Clown', description: 'shrimp, kani, avocado topped with tuna, king salmon, yellow tail & caviar', price: 17},
    {id: 12, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Heart Stealer', description: 'king salmon, yellowtail & avocado inside, topped with spicy tuna & tempura flakes', price: 17},
    {id: 13, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Kite Runner', description: 'spicy kani, shrimp tempura, avocado topped with slices of king salmon & yellowtail', price: 17},
    {id: 14, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Old Man and The Sea', description: 'shrimp tempura, avocado, cucumber inside topped with slices of tuna', price: 17},
    {id: 15, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Alligator', description: 'shrimp tempura, mango, cream cheese, cucumber, avocado, topped with eel', price: 17},
    {id: 16, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'King of Rock', description: 'spicy tuna, spicy king salmon, spicy yellowtail, shrimp tempura, avocado inside, wrapped with isonoyuki-kombu paper', price: 17},
    {id: 17, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Summer of Hoboken', description: 'spicy tuna, spicy king salmon, tempura falkes inside, wrapped with sliced avocado & rice paper(no rice)', price: 17},
    {id: 18, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Sunset Boulevard', description: 'steamed lobster, avocado, cucumber topped with mango, caviar & spicy sauce', price: 17},
    {id: 19, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Sweet Heart', description: 'spicy tuna & tempura flakes rolled with soy bean seaweed & tuna on top', price: 17},
    {id: 20, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Last Tango in Paris', description: 'shrimp tempura, sspicy king salmon inside, topped with steamed lobster', price: 17},
    {id: 21, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'The Iron Lady', description: 'chilean seabass tempura, spicy lobster, cucumber inside, topped with spicy scallop', price: 17},
    {id: 22, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Sleepless in Seattle', description: 'spicy yellowtail, shrimp tempura, avocado, jalapeno inside, topped with blue fin toro or tuna', price: 17},
    {id: 23, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Sakura "N" Hanami', description: 'spicy tuna, spicy lobster, shrimp tempura, sweet mango & avocado, wrapped in soy bean nori', price: 17},
    {id: 24, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Rock of Love', description: 'spicy tuna, soft shell crab tempura, avocado topped with tuna, king salmon, yellowtail & red tobiko', price: 17},
  ]

  soup: Array<Object> = [
    {id: 1, categoryType: CategoryType.SOUP, name: 'Miso Soup', description: '', price: 2.5},
    {id: 1, categoryType: CategoryType.SOUP, name: 'Clear', description: '', price: 3},
    {id: 1, categoryType: CategoryType.SOUP, name: 'Mushroom Soba Soup', description: '', price: 7},
    {id: 1, categoryType: CategoryType.SOUP, name: 'Chicken Vegetable Soup', description: '', price: 7},
    {id: 1, categoryType: CategoryType.SOUP, name: 'Seafood Kimchee Soup', description: '', price: 10}
  ]

  salad: Array<Object> = [
    {id: 1, categoryType: CategoryType.SALAD, name: 'Fresh Garden Salad', description: 'with ginger beat dressing', price: 4},
    {id: 1, categoryType: CategoryType.SALAD, name: 'Kani Salad', description: 'with mayonnaise', price: 6},
    {id: 1, categoryType: CategoryType.SALAD, name: 'Avocado Salad', description: '', price: 6},
    {id: 1, categoryType: CategoryType.SALAD, name: 'Seaweed Salad', description: '', price: 6},
    {id: 1, categoryType: CategoryType.SALAD, name: 'Salmon Skin Salad', description: '', price: 7},
  ]

  hotAppetizer: Array<Object> = [
    // {id: 1, categoryType: CategoryType.HOT_APPETIZER, name: '', description: '', price: },
  ]



  categories: Array<Object> = [
    {id: 1, categoryType: CategoryType.CHEFS_SPECIAL_ROLLS, name: 'Chef\'s Special Rolls', description: '', products: this.chefsSpecialRolls},
    {id: 2, categoryType: CategoryType.SOUP, name: 'Soup', description: '', products: this.soup}
  ];

  constructor() {}

  getCategories() : Observable<Category[]> {
    return of(plainToClass(Category, this.categories));
  }

}