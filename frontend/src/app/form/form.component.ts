import { Component, OnInit } from '@angular/core';
import { Service } from '../app.services';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ Service ]
})
export class FormComponent implements OnInit {

	value = this.service.url;

  check_general_url = true; // checking url where will be redirected
  check_shorter_url = true; // checking short url 

  short_url_valid = true;

  done = true;
  added_urls = false;

  general_url = '';
  short_url = '';

  checks_url = false;

  constructor(private service: Service) { 
  }

  onKey(event: any) {
    this.value = this.service.url + event.target.value;
  }

  check_onBlur_general(event: any) {
    this.checks_url = false;
      this
        .service
          .check_general_url(event.target.value)
            .subscribe(data => {this.check_general_url = data['status'],
                        this.checks_url = this.service.check_urls_total(this.general_url, this.short_url, data['status'], this.check_shorter_url)});

      this.general_url = event.target.value;
  }

  check_onBlur_short(event: any) {
    if( this.short_url_validation(event.target.value) ) {
      this.checks_url = false;
      this.short_url_valid = true;

        this
          .service
            .check_short_url(event.target.value)
              .subscribe(data => {this.check_shorter_url = data['status'],
                        this.checks_url = this.service.check_urls_total(this.general_url, this.short_url, this.check_general_url, data['status'])});

      this.short_url = event.target.value;
    } else {
      this.short_url_valid = false;
    }
      
  }

  addUrls() {
      this
        .service
          .add_urls(this.general_url, this.short_url)
            .subscribe(data => this.added_urls = data['status']);    
  }

  check() {
    return this.service.check_urls_total(this.general_url, this.short_url, this.check_general_url, this.check_shorter_url);
  }

  copyMessage() {
    var copyBox = document.getElementsByClassName('copyField');
    copyBox[0].focus();
    copyBox[0].select();
    document.execCommand('copy');
  }

  ngOnInit() {
  }

  private short_url_validation(val: string) {
    var tested = /\W/g.test(val);

    if( tested ) {
      return false;
    } else {
      return true;
    }
  }

}