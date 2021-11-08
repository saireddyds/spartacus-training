import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginModule } from './custom-login/custom-login.module';
import { CustomProductIntroModule } from './custom-product-intro/custom-product-intro.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomLoginModule,
    CustomProductIntroModule,
  ]
})
export class StorefrontlibModule { }
