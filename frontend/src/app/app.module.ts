import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RedirectsListComponent } from './redirects-list/redirects-list.component';

const appRoutes: Routes = [
  {
    path: 'redirects-list',
    component: RedirectsListComponent
  },
   {
    path: '',
    component: FormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RedirectsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
