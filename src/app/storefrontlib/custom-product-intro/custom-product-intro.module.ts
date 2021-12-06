import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from "./custom-product-intro/custom-product-intro.component";
import {CmsConfig, provideDefaultConfig, UrlModule} from "@spartacus/core";
import { EmiCalPipe } from "../../pipes/emi-cal.pipe";
import {RouterModule} from "@angular/router";
import {CustomAddCartModule} from "../custom-add-cart/custom-add-cart.module";



@NgModule({
  declarations: [CustomProductIntroComponent, EmiCalPipe],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule,
    CustomAddCartModule
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ProductIntroComponent: {
          component: CustomProductIntroComponent,
        },
      },
    }),
  ],
})
export class CustomProductIntroModule { }
