import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductIntroComponent } from "./custom-product-intro/custom-product-intro.component";
import {CmsConfig, provideDefaultConfig} from "@spartacus/core";



@NgModule({
  declarations: [CustomProductIntroComponent],
  imports: [
    CommonModule
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
