import { Component, OnInit } from '@angular/core';
import { Service } from './form.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ Service ]
})
export class FormComponent implements OnInit {

	url = "https://example.com/";
	value = this.url;

  check_general_url = true; // checking url where will be redirected
  check_shorter_url = true; // checking short url 
  done = true;
  added_urls = false;

  checks_url = false;



  constructor(private service: Service) { 
  }

  onKey(event: any) {
    this.value = this.url + event.target.value;
  }

  check_onBlur_general(event: any) {
      this
        .service
          .check_general_url(event.target.value)
            .subscribe(data => this.check_general_url = data['status']);
  }

  check_onBlur_short(event: any) {
      this
        .service
          .check_short_url(event.target.value)
            .subscribe(data => this.check_general_url = data['status']);
  }

  ngOnInit() {
  }

}