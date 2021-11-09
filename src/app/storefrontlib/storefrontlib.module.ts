import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginModule } from './custom-login/custom-login.module';
import { CustomProductIntroModule } from './custom-product-intro/custom-product-intro.module';
import { CustomNonFlexModule } from '../storefrontlib/custom-non-flex/custom-non-flex.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomLoginModule,
    CustomProductIntroModule,
    CustomNonFlexModule,
  ]
})
export class StorefrontlibModule { }
