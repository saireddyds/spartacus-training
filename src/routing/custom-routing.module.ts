import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomContactComponent} from "../app/storefrontlib/custom-contact/custom-contact/custom-contact.component";
import {CmsPageGuard, PageLayoutComponent} from "@spartacus/storefront";

const routes: Routes = [
  {
    path: 'custom',
    data: { pageLabel: 'homepage' },
    component: PageLayoutComponent,
    canActivate: [CmsPageGuard],
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class CustomRoutingModule {}
