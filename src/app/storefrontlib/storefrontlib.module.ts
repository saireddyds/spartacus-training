import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginModule } from './custom-login/custom-login.module';
import { CustomProductIntroModule } from './custom-product-intro/custom-product-intro.module';
import { CustomNonFlexModule } from '../storefrontlib/custom-non-flex/custom-non-flex.module';
import { CustomTranslationsModule } from '../storefrontlib/custom-translations/custom-translations.module';
import {ConfigModule, I18nModule} from "@spartacus/core";
import { CustomAddCartModule } from './custom-add-cart/custom-add-cart.module';
import { CustomProductListModule } from '../storefrontlib/custom-product-list/custom-product-list.module';



@NgModule({
  declarations: [
  ],
  imports: [
    I18nModule,
    CommonModule,
    CustomLoginModule,
    CustomProductIntroModule,
    CustomNonFlexModule,
    CustomTranslationsModule,
    CustomAddCartModule,
    CustomProductListModule,
 /*   ConfigModule.withConfig({
      routing: {
        protected: true,
        /!* ... *!/
      }
    })*/
  ]
})
export class StorefrontlibModule { }
