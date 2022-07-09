import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  parcelProps = { customProps1: "selam" }
  mountRootParcel = mountRootParcel

  ngOnInit() {
    console.log(this.parcelProps)
  }
  async config() {
    return (window as any).System.import("@react/react")
  }
}
