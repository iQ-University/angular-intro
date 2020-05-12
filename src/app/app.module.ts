import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MartyComponent } from './marty/marty.component';
import { SamsaraComponent } from './samsara/samsara.component';
import { DumbComponentComponent } from './dumb-component/dumb-component.component';


const appRoutes: Routes = [
  { path: 'samsara', component: SamsaraComponent },
  { path: 'marty', component: MartyComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MartyComponent,
    SamsaraComponent,
    DumbComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
