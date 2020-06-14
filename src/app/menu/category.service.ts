import { Injectable } from '@angular/core';
import { Category } from './category';
import { Product } from './product';
import { CategoryType } from './category-type';
import { of, Observable } from 'rxjs';
import {plainToClass} from "class-transformer";
import { CategoryData } from './category-data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {}

  getCategories() : Observable<Category[]> {
    return of(plainToClass(Category, CategoryData.categories));
  }

}