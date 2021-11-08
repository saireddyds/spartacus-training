import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletsComponent } from "./outlets.component";
import {OutletRefModule} from "@spartacus/storefront";



@NgModule({
  declarations: [OutletsComponent],
  exports: [
    OutletsComponent
  ],
  imports: [
    OutletRefModule
  ]
})
export class OutletModule { }
