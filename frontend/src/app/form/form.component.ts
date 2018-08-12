import { Component, OnInit, HostListener } from '@angular/core';
import { Service } from './form.services';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ Service ]
})
export class FormComponent implements OnInit {

	url = "http://127.0.0.1:8000/";
	value = this.url;

  check_general_url = true; // checking url where will be redirected
  check_shorter_url = true; // checking short url 
  done = true;
  added_urls = false;

  general_url = '';
  short_url = '';

  checks_url = false;


  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    this.check();
  }

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

      this.general_url = event.target.value;
  }

  check_onBlur_short(event: any) {
      this
        .service
          .check_short_url(event.target.value)
            .subscribe(data => this.check_shorter_url = data['status']);

      this.short_url = event.target.value;
      
  }

  addUrls() {
      this
        .service
          .add_urls(this.general_url, this.short_url)
            .subscribe(data => this.added_urls = data['status']);    
  }

  check() {
    this.checks_url = this.service.check_urls_total(this.general_url, this.short_url, this.check_general_url, this.check_shorter_url);
  }

  copyMessage() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  ngOnInit() {
  }

}