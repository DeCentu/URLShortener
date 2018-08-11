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

  
  constructor( private http: HttpClient ) { }


  check_general_url(checked_url: string){
    return this.http.post(this.check_url_general, 'checked_url=' + checked_url, httpOptions);
  }

  check_short_url(checked_url: string){
    return this.http.post(this.check_url_short, 'checked_url=' + checked_url, httpOptions);
  }

}