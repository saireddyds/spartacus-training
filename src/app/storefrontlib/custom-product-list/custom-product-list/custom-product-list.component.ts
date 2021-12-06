import { Component, OnInit } from '@angular/core';
import {PageLayoutService, ProductListComponent, ProductListComponentService, ViewConfig} from "@spartacus/storefront";

@Component({
  selector: 'app-custom-product-list',
  templateUrl: './custom-product-list.component.html',
  styleUrls: ['./custom-product-list.component.scss']
})
export class CustomProductListComponent extends ProductListComponent implements OnInit {

  constructor(pageLayoutService: PageLayoutService,
              productListComponentService: ProductListComponentService,
              scrollConfig: ViewConfig) {
    super(pageLayoutService, productListComponentService, scrollConfig)
  }

  ngOnInit(): void {
  }

}
