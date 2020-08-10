import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDetail } from '../../interfaces/product-detail.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productDetail: ProductDetail;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(parameters => {
        
        this.productsService.getProduct(parameters['id'])
        .subscribe((productDetail: ProductDetail) => {
            this.id = parameters['id'];
            this.productDetail = productDetail;
        });
    });
  }

}
