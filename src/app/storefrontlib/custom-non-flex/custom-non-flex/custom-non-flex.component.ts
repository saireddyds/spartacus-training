import { Component, OnInit } from '@angular/core';
import {CmsComponentData} from "@spartacus/storefront";
import {Observable} from "rxjs";

@Component({
  selector: 'app-custom-non-flex',
  templateUrl: './custom-non-flex.component.html',
  styleUrls: ['./custom-non-flex.component.scss']
})
export class CustomNonFlexComponent implements OnInit {

  constructor(protected component: CmsComponentData<any>) { }
  data$: Observable<any> = this.component.data$;
  ngOnInit(): void {
  }

}
