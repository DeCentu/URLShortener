import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
};

@Injectable()
export class Service {
  check_url_general = '/checkgeneralurl';
  check_url_short = '/checkshorturl';
  generate_url_url = '/generate';
  add_urls_url = '/addurls';
  get_urls_url = '/getList';
  login_url = '/login';

  url = "http://maksim6x.beget.tech/";

  
  constructor( private http: HttpClient ) { }


  check_general_url(checked_url: string){
    return this.http.post(this.check_url_general, 'checked_url=' + checked_url, httpOptions);
  }

  check_short_url(checked_url: string){
    return this.http.post(this.check_url_short, 'checked_url=' + checked_url, httpOptions);
  }

  check_urls_total(general_url: string, short_url: string, check_general: boolean, check_short: boolean) {
    if(
      general_url != '' && general_url != null && general_url != undefined  &&
      short_url != '' && short_url != null && short_url != undefined  &&
      check_general != false && check_short != false
      ) {
        return true;
      } else {
        return false;
      }
  }

  add_urls(general_url: string, short_url: string) {
    return this.http.post(this.add_urls_url, 'general_url=' + general_url + '&short_url=' + short_url, httpOptions);
  }

  get_urls() {
    return this.http.get(this.get_urls_url);
  }

  generate_url(){
    return this.http.get(this.generate_url_url, httpOptions);
  }

  check_login(login: string, password: string){
    return this.http.post(this.login_url, 'username=' + login + '&password=' + password}, httpOptions);
  }

  login(login: string, password: string, login_check: boolean){
    return this.http.post(this.login_url, '_username=' + login + '&password=' + password + '&login_check=' + login, httpOptions);
  }

}