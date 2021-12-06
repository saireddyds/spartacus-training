import { Component, OnInit } from '@angular/core';
import { CurrentProductService } from "@spartacus/storefront";
import {Observable} from "rxjs";
import {OccEndpointsService, ProductService} from "@spartacus/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrls: ['./custom-product-intro.component.scss']
})
export class CustomProductIntroComponent implements OnInit {
  // @ts-ignore
  product$: Observable<any> = this.currentProductService.getProduct();
  getProduct$: Observable<any> = this.productService.get('1986316');
  constructor(protected currentProductService: CurrentProductService, protected productService: ProductService,
              protected occEndpoints: OccEndpointsService, protected http: HttpClient
              ) { }
  protected getEndpoint(code: string, scope?: string): string {
    return this.occEndpoints.buildUrl('product', {
      urlParams: { productCode: code },
      scope,
    });
  }
  ngOnInit(): void {
    console.log(this.getEndpoint('1934406'));
    this.http.get(this.getEndpoint('1934406')).subscribe((res) => {
      console.log(res, 'product responce');
    });
  }

}
