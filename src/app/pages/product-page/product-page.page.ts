import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.page.html',
  styleUrls: ['./product-page.page.scss'],
})
export class ProductPagePage implements OnInit {

  public currentProduct : Product;
  constructor(private router:Router,private activatedRoute : ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit() {
    let productId = this.activatedRoute.snapshot.paramMap.get("id");
    let currentCategoryId = this.router.getCurrentNavigation().extras.state.currentCategoryId;
    let onSuccess =(data)=>{
      this.currentProduct = data;
    }
    this.categoryService.getProduct(productId,currentCategoryId,onSuccess);
  }

}
