import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) { 
    this.loadProducts();
  }

  private loadProducts() {

      return new Promise((resolve, reject) => {
        this.http.get('https://angular-html-85e66.firebaseio.com/products_idx.json')
        .subscribe((resp: Product[]) => {
            this.products = resp;
            this.loading = false;

            resolve();
        });
      });
  }

  public getProduct(id: string) {
      return this.http.get(`https://angular-html-85e66.firebaseio.com/products/${id}.json`);
  }

  public seachProduct(name: string){
      if(this.products.length < 1)
      {
          this.loadProducts().then(() => {
              this.filterProducts(name);
          });
      }
      else
      {
          this.filterProducts(name);
      }
  }

  private filterProducts(name: string){
    this.filteredProducts = [];

    this.products.forEach(product => {
        if ((product.titulo.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) >= 0) || (product.categoria.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) >= 0))
        {
            this.filteredProducts.push(product);
        }
    });
  }
}
