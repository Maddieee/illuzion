import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    });
  }

}
