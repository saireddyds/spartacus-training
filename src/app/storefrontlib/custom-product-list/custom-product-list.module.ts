import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CmsConfig, I18nModule, provideDefaultConfig, UrlModule} from "@spartacus/core";
import {CustomProductListComponent} from "./custom-product-list/custom-product-list.component";
import {
  AddToCartModule,
  ListNavigationModule,
  MediaModule,
  OutletModule,
  ProductListModule,
  StarRatingModule
} from "@spartacus/storefront";
import {CustomProductListItemComponent} from "./custom-product-list-item/custom-product-list-item.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [CustomProductListComponent, CustomProductListItemComponent],
  imports: [
    CommonModule,
    ListNavigationModule,
    I18nModule,
    ProductListModule,
    RouterModule,
    UrlModule,
    MediaModule,
    OutletModule,
    StarRatingModule,
    AddToCartModule
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CMSProductListComponent: {
          component: CustomProductListComponent,
        },
        ProductGridComponent: {
          component: CustomProductListComponent,
        },
        SearchResultsListComponent: {
          component: CustomProductListComponent,
        },
      },
    }),
  ],
  exports: [CustomProductListComponent, CustomProductListItemComponent]
})
export class CustomProductListModule { }
