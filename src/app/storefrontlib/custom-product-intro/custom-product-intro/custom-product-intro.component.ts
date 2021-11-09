import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from "@spartacus/storefront";
import {Observable} from "rxjs";
import {Product, ProductService} from "@spartacus/core";

@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrls: ['./custom-product-intro.component.scss']
})
export class CustomProductIntroComponent implements OnInit {
  // @ts-ignore
  product$: Observable<any> = this.currentProductService.getProduct();
  getProduct$: Observable<any> = this.productService.get('1986316');
  constructor(protected currentProductService: CurrentProductService, protected productService: ProductService) { }

  ngOnInit(): void {
  }

}
