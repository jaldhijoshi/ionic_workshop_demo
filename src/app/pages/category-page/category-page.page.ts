import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss'],
})
export class CategoryPagePage implements OnInit {

  public currentCategory: Category;
  public categoryProducts: Product[];

  constructor(private router:Router,private activatedRoute: ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit() {
    console.log("CategoryPagePage ngOnInit");
    let categoryId = this.activatedRoute.snapshot.paramMap.get("id");
    let onSuccess = (data)=>{
      this.currentCategory = data;
      this.loadProducts();
     
    }
    this.categoryService.getCategory(categoryId,onSuccess);
  }

  ionViewWillEnter(){
    console.log("CategoryPagePage ionViewWillEnter");
  }

  loadProducts(){

    let onComplete = (data)=>{
      this.categoryProducts = data[this.currentCategory.id];   
    };
    this.categoryService.getCategoryProducts(onComplete);
    
  }

  loadDetails(productId, categoryId){
    this.router.navigateByUrl("/product/"+productId+"/detail", {state: {"currentCategoryId":categoryId}});
  }



}
