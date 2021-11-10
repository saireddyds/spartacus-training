import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CmsConfig, provideDefaultConfig} from "@spartacus/core";
import { CustomNonFlexComponent } from "./custom-non-flex/custom-non-flex.component";
import {MediaModule} from "@spartacus/storefront";




@NgModule({
  declarations: [CustomNonFlexComponent],
  imports: [
    CommonModule,
    MediaModule
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        SimpleBannerComponent: {
          component: CustomNonFlexComponent,
        },
      },
    }),
  ],
})
export class CustomNonFlexModule { }
