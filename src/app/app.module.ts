import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { OutletModule } from './storefrontlib/outlets/outlet.module';
import { StorefrontlibModule } from './storefrontlib/storefrontlib.module';
import {ConfigModule, I18nConfig, I18nModule, provideConfig} from "@spartacus/core";
import { customLayoutConfig } from "./config/custom-layout.config";
import {CustomTranslations} from "../assets/translations/custom-translations";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
      ConfigModule.withConfig({
        backend: {
          occ: {
            endpoints: {
              product: {
                default: 'products/${productCode}?fields=FULL'
              }
            }
          }
        },
      }),
      ConfigModule.withConfig({
        i18n: {
          resources: CustomTranslations,
          fallbackLang: 'en'
        }
      } as I18nConfig),
      I18nModule,
        BrowserModule,
        OutletModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        SpartacusModule,
        StorefrontlibModule,

    ],
  providers: [
    provideConfig(customLayoutConfig),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
