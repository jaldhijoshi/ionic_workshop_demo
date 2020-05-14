import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  public categories : Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    console.log("CategoryListPage ngOnInit");
    let onSuccess= (data)=>{
      this.categories = data;
    }
    this.categoryService.loadCategories(onSuccess);
 }

 ionViewWillEnter(){
  console.log("CategoryListPage ionViewWillEnter");
 }

 



}
