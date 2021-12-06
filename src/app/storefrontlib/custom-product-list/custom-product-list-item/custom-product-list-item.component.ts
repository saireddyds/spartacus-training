import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductListItemComponent, ProductListItemContext, ProductListItemContextSource} from "@spartacus/storefront";

@Component({
  selector: 'app-custom-product-list-item',
  templateUrl: './custom-product-list-item.component.html',
  styleUrls: ['./custom-product-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ],
})
export class CustomProductListItemComponent extends ProductListItemComponent implements OnInit {

  constructor(productListItemContextSource: ProductListItemContextSource) {
    super(productListItemContextSource);
  }

  ngOnInit(): void {
  }

}
