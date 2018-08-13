import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RedirectsListComponent } from './redirects-list/redirects-list.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'redirects-list',
    component: RedirectsListComponent
  },
   {
    path: 'create',
    component: FormComponent
  },
   {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RedirectsListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
