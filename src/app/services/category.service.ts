import { Injectable } from '@angular/core';
import { FileDAO } from '../dao/file.dao';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable()
export class CategoryService{

    public categories:Category[] ;
    constructor(private fileDao : FileDAO){}

    loadCategories(onComplete){
        
        this.fileDao.loadData("assets/config/product-category-list.json",onComplete,error=>{

        });
    }

    getCategory(id, onComplete){
        let category : Category;
        let onSuccess = (data)=>{
            category = data.find(c => c.id === id);
            onComplete(category);
        }
        this.loadCategories(onSuccess);
    }

    getCategoryProducts(onComplete){
        this.fileDao.loadData("assets/config/product-list-by-category.json",onComplete,error=>{

        });
    }

    getProduct(productId,categoryId,onComplete){
        let product: Product;
        let onSuccess = (data)=>{
            product = data[categoryId].find(p => p.id===productId);
            onComplete(product);
        }
        this.getCategoryProducts(onSuccess);
    }



}