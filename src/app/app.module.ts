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
import { provideConfig } from "@spartacus/core";
import { customLayoutConfig } from "./config/custom-layout.config";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
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
    provideConfig(customLayoutConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
