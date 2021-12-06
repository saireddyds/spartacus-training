import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CmsConfig, provideConfig, provideDefaultConfig} from "@spartacus/core";
import {CustomLoginComponent} from "./custom-login/custom-login.component";




@NgModule({
  declarations: [CustomLoginComponent],
  imports: [
    CommonModule
  ],
  providers: [
   /* provideConfig(<CmsConfig>{
      cmsComponents: {
        ReturningCustomerLoginComponent: {
          component: CustomLoginComponent,
        },
      },
    }),*/
  ],
})
export class CustomLoginModule { }
