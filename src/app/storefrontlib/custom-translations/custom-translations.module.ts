import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTranslationsComponent } from "./custom-translations/custom-translations.component";
import {CmsConfig, I18nModule, provideDefaultConfig} from "@spartacus/core";



@NgModule({
  declarations: [CustomTranslationsComponent],
  imports: [
    CommonModule,
    I18nModule
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ProductSummaryComponent: {
          component: CustomTranslationsComponent,
        },
      },
    }),
  ],
})
export class CustomTranslationsModule { }
